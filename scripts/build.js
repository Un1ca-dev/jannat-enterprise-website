/**
 * Cloudflare Pages Production Build Script for JANNAT ENTERPRISE
 * Bundles and verifies all production files into the dist/ directory.
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

console.log('🚀 Building JANNAT ENTERPRISE for Cloudflare Pages deployment...');

// 1. Clean and recreate dist directory
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });
console.log('✓ Cleaned dist/ directory');

// Helper to copy files recursively
function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// 2. Core files and folders to deploy
const itemsToCopy = [
  'index.html',
  '404.html',
  '_headers',
  '_redirects',
  'css',
  'js',
  'assets'
];

itemsToCopy.forEach((item) => {
  const srcPath = path.join(rootDir, item);
  const destPath = path.join(distDir, item);
  if (fs.existsSync(srcPath)) {
    copyRecursiveSync(srcPath, destPath);
    console.log(`✓ Copied ${item} -> dist/${item}`);
  } else {
    console.error(`❌ Critical file missing: ${item}`);
    process.exit(1);
  }
});

// 3. Post-build integrity verification
console.log('\n🔍 Running post-build production integrity checks...');

// Check for forbidden localhost strings in HTML, CSS, JS
function scanForForbiddenPatterns(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanForForbiddenPatterns(fullPath);
    } else if (['.html', '.js', '.css', '.json'].includes(path.extname(file))) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      if (content.includes('http://localhost') || content.includes('http://127.0.0.1')) {
        console.error(`❌ Found localhost reference in dist/${path.relative(distDir, fullPath)}`);
        process.exit(1);
      }
    }
  }
}
scanForForbiddenPatterns(distDir);
console.log('✓ No localhost or development URLs found in dist/');

// Verify Cloudflare specific files
if (!fs.existsSync(path.join(distDir, '_headers'))) {
  console.error('❌ _headers missing from dist/');
  process.exit(1);
}
if (!fs.existsSync(path.join(distDir, '_redirects'))) {
  console.error('❌ _redirects missing from dist/');
  process.exit(1);
}
console.log('✓ Cloudflare Pages routing files (_headers, _redirects) verified in dist/');

console.log('\n🎉 Production build completed successfully! Output ready in dist/');
