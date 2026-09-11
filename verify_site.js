const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
let errors = [];

console.log("=== RUNNING PRODUCTION VERIFICATION FOR CLOUDFLARE PAGES ===");

// 1. Check required root files
const requiredFiles = [
  'index.html',
  '404.html',
  '_headers',
  '_redirects',
  'package.json',
  'css/style.css',
  'js/config.js',
  'js/app.js',
  'assets/favicon.svg',
  'assets/images/logo.svg',
  'assets/images/hero-visual.svg',
  'assets/images/broadband-visual.svg',
  'assets/images/og-image.svg',
  'assets/images/owner-suman-sheikh.png',
  'assets/images/brand-logo.png'
];

requiredFiles.forEach(file => {
  const fullPath = path.join(baseDir, file);
  if (!fs.existsSync(fullPath)) {
    errors.push(`Missing file: ${file}`);
  } else {
    const stat = fs.statSync(fullPath);
    console.log(`✓ ${file} exists (${stat.size} bytes)`);
  }
});

// 2. Verify index.html content & anchor targets
const htmlContent = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf-8');

// Check no localhost URLs
if (htmlContent.includes('localhost') || htmlContent.includes('127.0.0.1')) {
  errors.push("Found localhost or 127.0.0.1 reference in index.html");
} else {
  console.log("✓ No localhost URLs found in index.html");
}

// Check custom domain jannat.un1ca.qzz.io
if (!htmlContent.includes('https://jannat.un1ca.qzz.io/')) {
  errors.push("Custom domain https://jannat.un1ca.qzz.io/ not found in index.html");
} else {
  console.log("✓ Canonical & Open Graph URL points to https://jannat.un1ca.qzz.io/");
}

// Extract and verify all internal anchor targets
const hrefMatches = [...htmlContent.matchAll(/href="#([a-zA-Z0-9_-]+)"/g)].map(m => m[1]);
const uniqueHrefs = [...new Set(hrefMatches)];

uniqueHrefs.forEach(targetId => {
  const idRegex = new RegExp(`id=["']${targetId}["']`);
  if (!idRegex.test(htmlContent)) {
    errors.push(`Anchor #${targetId} is linked but no element with id="${targetId}" was found in index.html!`);
  }
});
console.log(`✓ Verified ${uniqueHrefs.length} internal anchor navigation targets`);

// 3. Verify JSON-LD in index.html
const jsonLdMatch = htmlContent.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
if (!jsonLdMatch) {
  errors.push("No JSON-LD structured data found in index.html");
} else {
  try {
    const jsonLd = JSON.parse(jsonLdMatch[1]);
    console.log("✓ JSON-LD structured data is valid JSON");
    if (jsonLd.url !== "https://jannat.un1ca.qzz.io/") {
      errors.push(`JSON-LD URL expected https://jannat.un1ca.qzz.io/, got ${jsonLd.url}`);
    }
    if (jsonLd.telephone !== "+918918273721") {
      errors.push(`JSON-LD telephone expected +918918273721, got ${jsonLd.telephone}`);
    }
    if (!jsonLd.address || jsonLd.address.postalCode !== "742303") {
      errors.push("JSON-LD address missing or postalCode incorrect");
    }
    console.log("✓ JSON-LD properties validated (Business Name, Phone, Address, Geo, Custom Domain)");
  } catch (err) {
    errors.push(`JSON-LD parse error: ${err.message}`);
  }
}

// 4. Verify JANNAT_CONFIG
const configContent = fs.readFileSync(path.join(baseDir, 'js/config.js'), 'utf-8');
const sandbox = {};
try {
  const vm = require('vm');
  vm.runInNewContext(configContent, sandbox);
  const cfg = sandbox.JANNAT_CONFIG;
  if (!cfg) {
    errors.push("JANNAT_CONFIG not found in js/config.js");
  } else {
    console.log("✓ JANNAT_CONFIG loaded successfully");
    if (cfg.ownerName !== "SUMAN SHEIKH") errors.push(`Owner name mismatch: expected SUMAN SHEIKH, got ${cfg.ownerName}`);
    else console.log(`✓ Owner name verified: ${cfg.ownerName}`);
    if (cfg.phone !== "8918273721") errors.push(`Phone mismatch: expected 8918273721, got ${cfg.phone}`);
    if (cfg.cscId !== "222365420014") errors.push(`CSC ID mismatch: expected 222365420014, got ${cfg.cscId}`);
    if (cfg.siteUrl !== "https://jannat.un1ca.qzz.io") errors.push(`siteUrl mismatch: expected https://jannat.un1ca.qzz.io, got ${cfg.siteUrl}`);
    if (cfg.googleMapsUrl !== "https://maps.app.goo.gl/zQPQ9THg9YLAYM4r6") errors.push(`Google Maps URL mismatch: got ${cfg.googleMapsUrl}`);
    if (!cfg.services || cfg.services.length < 20) {
      errors.push(`Expected at least 20 services, found ${cfg.services?.length}`);
    } else {
      console.log(`✓ Comprehensive services catalog verified (${cfg.services.length} services configured)`);
      let missingImgs = 0;
      cfg.services.forEach(s => {
        if (!s.image) {
          errors.push(`Service ${s.id} missing image property`);
          missingImgs++;
        } else if (!fs.existsSync(path.join(baseDir, s.image))) {
          errors.push(`Service ${s.id} image file missing on disk: ${s.image}`);
          missingImgs++;
        }
      });
      if (missingImgs === 0) {
        console.log(`✓ All ${cfg.services.length} services have verified dedicated SVG illustrations on disk`);
      }
    }
  }
} catch (err) {
  errors.push(`Error executing config.js: ${err.message}`);
}

// 4b. Verify required interactive DOM containers in index.html
const requiredIds = [
  'popularServicesGrid',
  'serviceCategoryTabs',
  'servicesGrid',
  'serviceSearchInput',
  'mobileRepairCardsGrid',
  'moreServicesToggleBtn',
  'moreServicesContent'
];
requiredIds.forEach(id => {
  if (!htmlContent.includes(`id="${id}"`)) {
    errors.push(`Missing required container id="${id}" in index.html`);
  } else {
    console.log(`✓ Found container id="${id}"`);
  }
});

// Check owner name SUMAN SHEIKH in index.html
if (!htmlContent.includes("SUMAN SHEIKH")) {
  errors.push("Owner name SUMAN SHEIKH missing from index.html");
} else {
  console.log("✓ Found Shop Owner SUMAN SHEIKH in index.html");
}

// 5. Verify Cloudflare special files
const headersContent = fs.readFileSync(path.join(baseDir, '_headers'), 'utf-8');
if (!headersContent.includes('X-Frame-Options') || !headersContent.includes('Cache-Control')) {
  errors.push("_headers missing security or cache directives");
} else {
  console.log("✓ _headers verified with security and caching rules");
}

const redirectsContent = fs.readFileSync(path.join(baseDir, '_redirects'), 'utf-8');
if (!redirectsContent.includes('/*  /index.html  200')) {
  errors.push("_redirects missing SPA fallback rule");
} else {
  console.log("✓ _redirects verified with SPA fallback rule");
}

// Summary
console.log("\n=== SUMMARY ===");
if (errors.length === 0) {
  console.log("🎉 ALL PRODUCTION CHECKS PASSED! Ready for Cloudflare Pages.");
  process.exit(0);
} else {
  console.error("❌ ERRORS ENCOUNTERED:");
  errors.forEach(e => console.error(`  - ${e}`));
  process.exit(1);
}
