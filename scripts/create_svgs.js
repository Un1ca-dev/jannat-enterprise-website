const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const assetsDir = path.join(rootDir, 'assets');
const imgDir = path.join(assetsDir, 'images');
const srvDir = path.join(imgDir, 'services');

if (!fs.existsSync(srvDir)) {
  fs.mkdirSync(srvDir, { recursive: true });
}

// ---------------------------------------------------------------------------
// 1. Generate Dedicated Brand Logo & Favicon
// ---------------------------------------------------------------------------
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 72" width="320" height="72" fill="none">
  <defs>
    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00f0ff" />
      <stop offset="50%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#8b5cf6" />
    </linearGradient>
    <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  <g transform="translate(6, 6)">
    <polygon points="30,2 58,18 58,42 30,58 2,42 2,18" fill="url(#hexGrad)" stroke="url(#logoGrad)" stroke-width="2.5" filter="url(#glow)" />
    <polygon points="30,7 53,20 53,40 30,53 7,40 7,20" fill="none" stroke="rgba(0, 240, 255, 0.25)" stroke-width="1.2" stroke-dasharray="3,3" />
    <path d="M22 17 V36 C22 41 17 42 14 40" stroke="#00f0ff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <path d="M28 18 H43 M28 29 H39 M28 40 H43" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <circle cx="22" cy="18" r="2.2" fill="#8b5cf6" />
  </g>
  <g transform="translate(76, 15)">
    <text x="0" y="18" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', 'Inter', sans-serif" font-weight="900" font-size="19" letter-spacing="1.2" fill="#ffffff">
      JANNAT <tspan fill="#00f0ff">ENTERPRISE</tspan>
    </text>
    <text x="0" y="33" font-family="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif" font-weight="700" font-size="8" letter-spacing="1.6" fill="#94a3b8">
      DIGITAL SERVICE &amp; TECHNOLOGY CENTRE
    </text>
    <g transform="translate(0, 39)">
      <rect x="0" y="0" width="138" height="15" rx="7.5" fill="rgba(0, 240, 255, 0.08)" stroke="rgba(0, 240, 255, 0.25)" stroke-width="1" />
      <circle cx="7.5" cy="7.5" r="3" fill="#10b981" />
      <text x="15" y="10.5" font-family="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif" font-weight="700" font-size="7.5" fill="#38bdf8" letter-spacing="0.5">
        CSC VLE ID: 222365420014
      </text>
    </g>
  </g>
</svg>`;
fs.writeFileSync(path.join(imgDir, 'logo.svg'), logoSvg, 'utf-8');

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" fill="none">
  <defs>
    <linearGradient id="favGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00f0ff" />
      <stop offset="100%" stop-color="#8b5cf6" />
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="16" fill="#070b14" />
  <polygon points="32,6 56,20 56,44 32,58 8,44 8,20" fill="#0f172a" stroke="url(#favGrad)" stroke-width="2.5" />
  <path d="M24 20 V38 C24 43 19 44 16 42" stroke="#00f0ff" stroke-width="3.5" stroke-linecap="round" fill="none" />
  <path d="M30 21 H44 M30 32 H40 M30 43 H44" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" fill="none" />
  <circle cx="24" cy="20" r="2.2" fill="#8b5cf6" />
</svg>`;
fs.writeFileSync(path.join(assetsDir, 'favicon.svg'), faviconSvg, 'utf-8');

// ---------------------------------------------------------------------------
// 2. Helper to Build Card SVG Frame
// ---------------------------------------------------------------------------
function cardFrame(primaryColor, secondaryColor, glyphSvg) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="400" height="240" fill="none">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="${primaryColor}" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#060913" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${primaryColor}" stop-opacity="0.6" />
      <stop offset="50%" stop-color="rgba(255,255,255,0.08)" />
      <stop offset="100%" stop-color="${secondaryColor}" stop-opacity="0.35" />
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${primaryColor}" />
      <stop offset="100%" stop-color="${secondaryColor}" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3.5" result="b" />
      <feComposite in="SourceGraphic" in2="b" operator="over" />
    </filter>
  </defs>

  <rect width="400" height="240" rx="16" fill="#080e1c" />
  <rect width="400" height="240" rx="16" fill="url(#bgGlow)" />
  <rect x="0.5" y="0.5" width="399" height="239" rx="15.5" stroke="url(#borderGrad)" stroke-width="1" />

  <!-- Technical Grid Background -->
  <g stroke="rgba(255,255,255,0.03)" stroke-width="1">
    <line x1="50" y1="0" x2="50" y2="240" />
    <line x1="120" y1="0" x2="120" y2="240" />
    <line x1="200" y1="0" x2="200" y2="240" />
    <line x1="280" y1="0" x2="280" y2="240" />
    <line x1="350" y1="0" x2="350" y2="240" />
    <line x1="0" y1="60" x2="400" y2="60" />
    <line x1="0" y1="120" x2="400" y2="120" />
    <line x1="0" y1="180" x2="400" y2="180" />
  </g>

  <!-- Ambient Light Beam -->
  <circle cx="200" cy="120" r="85" fill="${primaryColor}" opacity="0.06" />

  ${glyphSvg}
</svg>`;
}

// ---------------------------------------------------------------------------
// 3. Service Illustrations Catalog
// ---------------------------------------------------------------------------
const svgs = {
  'ayushman.svg': cardFrame('#00f0ff', '#10b981', `
    <g transform="translate(130, 35)">
      <rect x="0" y="10" width="140" height="150" rx="24" fill="#0f172a" stroke="url(#accentGrad)" stroke-width="2.5" filter="url(#glow)" />
      <path d="M70 25 V45 M60 35 H80" stroke="#10b981" stroke-width="4" stroke-linecap="round" />
      <rect x="20" y="55" width="100" height="55" rx="8" fill="#1e293b" stroke="rgba(0,240,255,0.3)" stroke-width="1.5" />
      <circle cx="42" cy="80" r="14" fill="#334155" />
      <circle cx="42" cy="76" r="6" fill="#00f0ff" />
      <path d="M33 90 C33 84 51 84 51 90" fill="#00f0ff" />
      <line x1=\"65\" y1=\"73\" x2=\"110\" y2=\"73\" stroke=\"#ffffff\" stroke-width=\"2.5\" stroke-linecap=\"round\" />
      <line x1=\"65\" y1=\"83\" x2=\"95\" y2=\"83\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-linecap=\"round\" />
      <path d=\"M25 130 Q 50 110, 70 135 T 115 130\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2.5\" stroke-linecap=\"round\" />
      <circle cx=\"70\" cy=\"135\" r=\"4\" fill=\"#00f0ff\" />
    </g>`),

  'csc-govt.svg': cardFrame('#00f0ff', '#3b82f6', `
    <g transform="translate(120, 30)">
      <rect x="0" y="10" width="160" height="120" rx="16" fill="#0f172a" stroke="url(#accentGrad)" stroke-width="2.5" />
      <rect x="10" y="20" width="140" height="80" rx="8" fill="#070b14" />
      <polygon points="80,30 115,45 115,75 80,95 45,75 45,45" fill="rgba(0,240,255,0.1)" stroke="#00f0ff" stroke-width="2" />
      <text x="80" y="65" font-family="sans-serif" font-weight="900" font-size="16" fill="#ffffff" text-anchor="middle">CSC</text>
      <rect x="60" y="140" width="40" height="20" fill="#1e293b" stroke="rgba(255,255,255,0.1)" />
      <rect x="40" y="160" width="80" height="8" rx="4" fill="#334155" />
    </g>`),

  'ration-card.svg': cardFrame('#10b981', '#00f0ff', `
    <g transform="translate(125, 35)">
      <rect x="0" y="0" width="150" height="160" rx="14" fill="#0f172a" stroke="url(#accentGrad)" stroke-width="2.5" />
      <rect x="12" y="15" width="126" height="35" rx="6" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.3)" />
      <text x="75" y="37" font-family="sans-serif" font-weight="800" font-size="12" fill="#10b981" text-anchor="middle">DIGITAL RATION CARD</text>
      <circle cx="40" cy="80" r="16" fill="#1e293b" stroke="#00f0ff" stroke-width="1.5" />
      <path d="M40 70 V90 M30 80 H50" stroke="#10b981" stroke-width="2" />
      <line x1="68" y1="72" x2="130" y2="72" stroke="#ffffff" stroke-width="2" />
      <line x1="68" y1="84" x2="115" y2="84" stroke="#94a3b8" stroke-width="2" />
      <g transform="translate(15, 115)" stroke="#94a3b8" stroke-width="2">
        <line x1="5" y1="0" x2="5" y2="25" />
        <line x1="12" y1="0" x2="12" y2="25" stroke-width="4" />
        <line x1="22" y1="0" x2="22" y2="25" />
        <line x1="30" y1="0" x2="30" y2="25" stroke-width="3" />
        <line x1="42" y1="0" x2="42" y2="25" />
        <line x1="50" y1="0" x2="50" y2="25" stroke-width="5" />
        <line x1="65" y1="0" x2="65" y2="25" />
        <line x1="78" y1="0" x2="78" y2="25" stroke-width="3" />
        <line x1="95" y1="0" x2="95" y2="25" />
        <line x1="110" y1="0" x2="110" y2="25" stroke-width="4" />
      </g>
    </g>`),

  'pm-kisan.svg': cardFrame('#10b981', '#f59e0b', `
    <g transform="translate(130, 30)">
      <circle cx="70" cy="80" r="65" fill="rgba(16,185,129,0.1)" stroke="url(#accentGrad)" stroke-width="2" />
      <path d="M70 125 C70 85 45 65 35 60 C55 60 70 75 70 85 C70 75 85 60 105 60 C95 65 70 85 70 125 Z" fill="#10b981" />
      <circle cx="70" cy="50" r="14" fill="#f59e0b" stroke="#ffffff" stroke-width="2" />
      <text x="70" y="55" font-family="sans-serif" font-weight="900" font-size="14" fill="#000000" text-anchor="middle">₹</text>
    </g>`),

  'pmfby.svg': cardFrame('#f59e0b', '#10b981', `
    <g transform="translate(130, 30)">
      <path d="M70 30 C30 30 20 65 20 75 C20 125 70 150 70 150 C70 150 120 125 120 75 C120 65 110 30 70 30 Z" fill="#0f172a" stroke="url(#accentGrad)" stroke-width="2.5" />
      <path d="M50 95 C55 80 65 70 70 65 C75 70 85 80 90 95 C80 95 70 90 70 90 C70 90 60 95 50 95 Z" fill="#f59e0b" />
      <path d="M70 90 V115" stroke="#10b981" stroke-width="3" stroke-linecap="round" />
      <circle cx="70" cy="65" r="4" fill="#ffffff" />
    </g>`),

  'pan-card.svg': cardFrame('#00f0ff', '#8b5cf6', `
    <g transform="translate(115, 40)">
      <rect x="0" y="0" width="170" height="110" rx="10" fill="#0f172a" stroke="url(#accentGrad)" stroke-width="2.5" filter="url(#glow)" />
      <rect x="10" y="10" width="150" height="20" rx="4" fill="rgba(0,240,255,0.15)" />
      <text x="85" y="24" font-family="sans-serif" font-weight="800" font-size="9" fill="#00f0ff" text-anchor="middle">INCOME TAX DEPARTMENT</text>
      <rect x="15" y="40" width="36" height="44" rx="4" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.5" />
      <circle cx="33" cy="56" r="8" fill="#38bdf8" />
      <path d="M23 76 C23 68 43 68 43 76" fill="#38bdf8" />
      <rect x="58" y="42" width="25" height="18" rx="3" fill="#f59e0b" opacity="0.9" />
      <line x1="90" y1="45" x2="155" y2="45" stroke="#ffffff" stroke-width="2" />
      <line x1="90" y1="55" x2="140" y2="55" stroke="#94a3b8" stroke-width="2" />
      <line x1="58" y1="75" x2="155" y2="75" stroke="#00f0ff" stroke-width="3" stroke-linecap="round" />
      <text x="106" y="98" font-family="monospace" font-weight="700" font-size="11" fill="#ffffff">ABCDE1234F</text>
    </g>`),

  'passport.svg': cardFrame('#3b82f6', '#00f0ff', `
    <g transform="translate(130, 30)">
      <rect x="0" y="0" width="120" height="165" rx="12" fill="#091e42" stroke="url(#accentGrad)" stroke-width="2.5" />
      <text x="60" y="30" font-family="sans-serif" font-weight="900" font-size="12" fill="#f59e0b" letter-spacing="2" text-anchor="middle">PASSPORT</text>
      <circle cx="60" cy="80" r="26" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,3" />
      <circle cx="60" cy="80" r="16" fill="none" stroke="#00f0ff" stroke-width="2" />
      <path d="M50 80 H70 M60 70 V90" stroke="#ffffff" stroke-width="2" />
      <path d="M45 130 L75 115 L60 145 Z" fill="#00f0ff" opacity="0.8" />
    </g>`),

  'driving-licence.svg': cardFrame('#f59e0b', '#00f0ff', `
    <g transform="translate(120, 35)">
      <rect x="0" y="0" width="160" height="105" rx="10" fill="#0f172a" stroke="url(#accentGrad)" stroke-width="2.5" />
      <rect x="12" y="10" width="136" height="18" rx="3" fill="rgba(245,158,11,0.2)" />
      <text x="80" y="23" font-family="sans-serif" font-weight="800" font-size="9" fill="#f59e0b" text-anchor="middle">DRIVING LICENCE</text>
      <circle cx="40" cy="65" r="18" fill="#1e293b" stroke="#00f0ff" stroke-width="2" />
      <circle cx="40" cy="65" r="8" fill="#0f172a" stroke="#f59e0b" stroke-width="2" />
      <line x1="40" y1="47" x2="40" y2="57" stroke="#ffffff" stroke-width="2" />
      <line x1="40" y1="73" x2="40" y2="83" stroke="#ffffff" stroke-width="2" />
      <line x1="22" y1="65" x2="32" y2="65" stroke="#ffffff" stroke-width="2" />
      <line x1="48" y1="65" x2="58" y2="65" stroke="#ffffff" stroke-width="2" />
      <line x1="70" y1="55" x2="145" y2="55" stroke="#ffffff" stroke-width="2.5" />
      <line x1="70" y1="70" x2="130" y2="70" stroke="#94a3b8" stroke-width="2" />
      <line x1="70" y1="85" x2="115" y2="85" stroke="#00f0ff" stroke-width="2" />
    </g>`),

  'pvc-printing.svg': cardFrame('#8b5cf6', '#00f0ff', `
    <g transform="translate(120, 25)">
      <rect x="10" y="40" width="140" height="85" rx="10" fill="#0f172a" stroke="#8b5cf6" stroke-width="2.5" />
      <rect x="30" y="55" width="100" height="12" rx="3" fill="#020617" stroke="#00f0ff" stroke-width="1" />
      <circle cx="130" cy="85" r="5" fill="#10b981" />
      <rect x="25" y="90" width="110" height="75" rx="8" fill="#1e293b" stroke="url(#accentGrad)" stroke-width="2" filter="url(#glow)" />
      <rect x="35" y="102" width="22" height="16" rx="2" fill="#f59e0b" />
      <line x1="65" y1="108" x2="120" y2="108" stroke="#ffffff" stroke-width="2" />
      <line x1="65" y1="118" x2="105" y2="118" stroke="#94a3b8" stroke-width="1.5" />
      <circle cx="110" cy="145" r="8" fill="#00f0ff" opacity="0.7" />
      <circle cx="120" cy="145" r="8" fill="#8b5cf6" opacity="0.7" />
    </g>`),

  'bank-bc.svg': cardFrame('#00f0ff', '#10b981', `
    <g transform="translate(125, 25)">
      <rect x="25" y="15" width="100" height="165" rx="16" fill="#0f172a" stroke="url(#accentGrad)" stroke-width="2.5" />
      <rect x="38" y="30" width="74" height="45" rx="6" fill="#020617" stroke="rgba(0,240,255,0.3)" />
      <text x="75" y="57" font-family="sans-serif" font-weight="900" font-size="14" fill="#10b981" text-anchor="middle">₹ 5,000</text>
      <g fill="#334155" transform="translate(42, 85)">
        <circle cx="10" cy="10" r="5" /><circle cx="33" cy="10" r="5" /><circle cx="56" cy="10" r="5" />
        <circle cx="10" cy="28" r="5" /><circle cx="33" cy="28" r="5" /><circle cx="56" cy="28" r="5" />
        <circle cx="10" cy="46" r="5" /><circle cx="33" cy="46" r="5" /><circle cx="56" cy="46" r="5" />
      </g>
      <circle cx="75" cy="155" r="14" fill="rgba(0,240,255,0.15)" stroke="#00f0ff" stroke-width="1.5" />
      <path d="M70 155 C70 150 80 150 80 155 C80 160 70 160 70 165" fill="none" stroke="#00f0ff" stroke-width="1.5" />
    </g>`),

  'axis-bc.svg': cardFrame('#e11d48', '#8b5cf6', `
    <g transform="translate(120, 30)">
      <rect x="0" y="10" width="160" height="125" rx="14" fill="#0f172a" stroke="url(#accentGrad)" stroke-width="2.5" />
      <rect x="15" y="25" width="130" height="35" rx="6" fill="rgba(225,29,72,0.15)" stroke="rgba(225,29,72,0.4)" />
      <text x="80" y="47" font-family="sans-serif" font-weight="900" font-size="13" fill="#fb7185" text-anchor="middle">AXIS BANK BC</text>
      <circle cx="50" cy="95" r="18" fill="#1e293b" stroke="#fb7185" stroke-width="1.5" />
      <path d="M50 86 L57 95 H43 Z" fill="#fb7185" />
      <circle cx="105" cy="95" r="18" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.5" />
      <path d="M100 95 H110 M105 90 V100" stroke="#8b5cf6" stroke-width="2" />
    </g>`),

  'new-bank-account.svg': cardFrame('#10b981', '#3b82f6', `
    <g transform="translate(125, 30)">
      <polygon points="75,15 15,45 135,45" fill="#1e293b" stroke="url(#accentGrad)" stroke-width="2" />
      <rect x="25" y="45" width="15" height="65" fill="#0f172a" stroke="#10b981" stroke-width="1.5" />
      <rect x="55" y="45" width="15" height="65" fill="#0f172a" stroke="#10b981" stroke-width="1.5" />
      <rect x="85" y="45" width="15" height="65" fill="#0f172a" stroke="#10b981" stroke-width="1.5" />
      <rect x="15" y="110" width="120" height="15" fill="#1e293b" stroke="#3b82f6" stroke-width="2" />
      <circle cx="110" cy="90" r="22" fill="#080e1c" stroke="#10b981" stroke-width="2" stroke-dasharray="3,2" />
      <path d="M100 90 L107 97 L122 82" fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round" />
    </g>`),

  'loan-assistance.svg': cardFrame('#f59e0b', '#10b981', `
    <g transform="translate(125, 30)">
      <circle cx="75" cy="75" r="60" fill="none" stroke="url(#accentGrad)" stroke-width="3" />
      <circle cx="75" cy="75" r="45" fill="rgba(245,158,11,0.1)" stroke="rgba(255,255,255,0.1)" />
      <text x="75" y="88" font-family="sans-serif" font-weight="900" font-size="36" fill="#f59e0b" text-anchor="middle">%</text>
      <rect x="50" y="120" width="50" height="20" rx="6" fill="#10b981" />
      <text x="75" y="134" font-family="sans-serif" font-weight="900" font-size="10" fill="#000000" text-anchor="middle">APPLY</text>
    </g>`),

  'credit-card.svg': cardFrame('#8b5cf6', '#ec4899', `
    <g transform="translate(115, 45)">
      <rect x="0" y="0" width="170" height="105" rx="14" fill="#0f172a" stroke="url(#accentGrad)" stroke-width="2.5" filter="url(#glow)" />
      <rect x="20" y="30" width="28" height="22" rx="4" fill="#f59e0b" />
      <path d="M58 35 C62 38 62 44 58 47" fill="none" stroke="#ffffff" stroke-width="2" />
      <path d="M63 32 C69 37 69 47 63 52" fill="none" stroke="#ffffff" stroke-width="2" />
      <text x="20" y="78" font-family="monospace" font-size="13" font-weight="700" fill="#ffffff" letter-spacing="2">•••• 8918</text>
      <circle cx="130" cy="80" r="12" fill="#ec4899" opacity="0.8" />
      <circle cx="145" cy="80" r="12" fill="#8b5cf6" opacity="0.8" />
    </g>`),

  'insurance.svg': cardFrame('#00f0ff', '#3b82f6', `
    <g transform="translate(130, 30)">
      <path d="M70 20 C35 20 20 50 20 75 C20 120 70 150 70 150 C70 150 120 120 120 75 C120 50 105 20 70 20 Z" fill="#0f172a" stroke="url(#accentGrad)" stroke-width="2.5" />
      <path d="M45 80 C45 60 95 60 95 80 Z" fill="#00f0ff" />
      <path d="M70 80 V100 C70 105 65 105 65 100" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" />
    </g>`),

  'bill-payment.svg': cardFrame('#f59e0b', '#00f0ff', `
    <g transform="translate(130, 30)">
      <rect x="10" y="10" width="120" height="155" rx="10" fill="#0f172a" stroke="url(#accentGrad)" stroke-width="2.5" />
      <circle cx="70" cy="45" r="18" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2" />
      <path d="M72 35 L62 47 H72 L68 57 L80 44 H70 Z" fill="#f59e0b" />
      <line x1="30" y1="80" x2="110" y2="80" stroke="#ffffff" stroke-width="2" />
      <line x1="30" y1="95" x2="90" y2="95" stroke="#94a3b8" stroke-width="2" />
      <line x1="30" y1="110" x2="100" y2="110" stroke="#94a3b8" stroke-width="2" />
      <rect x="30" y="128" width="80" height="20" rx="5" fill="#10b981" />
      <text x="70" y="142" font-family="sans-serif" font-weight="800" font-size="10" fill="#000000" text-anchor="middle">PAID ✓</text>
    </g>`),

  'mobile-recharge.svg': cardFrame('#00f0ff', '#10b981', `
    <g transform="translate(135, 25)">
      <rect x="20" y="15" width="90" height="165" rx="18" fill="#0f172a" stroke="url(#accentGrad)" stroke-width="2.5" />
      <rect x="30" y="30" width="70" height="120" rx="8" fill="#020617" />
      <g fill="#10b981" transform="translate(75, 38)">
        <rect x="0" y="6" width="3" height="4" />
        <rect x="5" y="4" width="3" height="6" />
        <rect x="10" y="2" width="3" height="8" />
        <rect x="15" y="0" width="3" height="10" />
      </g>
      <text x="65" y="85" font-family="sans-serif" font-weight="900" font-size="22" fill="#00f0ff" text-anchor="middle">5G</text>
      <rect x="40" y="105" width="50" height="20" rx="6" fill="#10b981" />
      <text x="65" y="119" font-family="sans-serif" font-weight="900" font-size="9" fill="#000000" text-anchor="middle">RECHARGE</text>
    </g>`),

  'gas-booking.svg': cardFrame('#ef4444', '#f59e0b', `
    <g transform="translate(140, 25)">
      <path d="M45 40 C45 25 75 25 75 40" stroke="#ef4444" stroke-width="4" fill="none" />
      <rect x="25" y="40" width="70" height="125" rx="24" fill="#991b1b" stroke="url(#accentGrad)" stroke-width="2.5" />
      <circle cx="60" cy="95" r="20" fill="#0f172a" stroke="#f59e0b" stroke-width="2" />
      <path d="M60 82 C55 90 50 96 50 102 C50 108 55 112 60 112 C65 112 70 108 70 102 C70 96 65 90 60 82 Z" fill="#f59e0b" />
    </g>`),

  'online-forms.svg': cardFrame('#00f0ff', '#3b82f6', `
    <g transform="translate(125, 25)">
      <rect x="10" y="15" width="130" height="165" rx="12" fill="#0f172a" stroke="url(#accentGrad)" stroke-width="2.5" />
      <rect x="25" y="35" width="100" height="15" rx="4" fill="#1e293b" />
      <rect x="25" y="60" width="100" height="15" rx="4" fill="#1e293b" />
      <rect x="25" y="85" width="60" height="15" rx="4" fill="#1e293b" />
      <circle cx="105" cy="92" r="8" fill="#10b981" />
      <path d="M115 130 L135 110 L145 120 L125 140 Z" fill="#00f0ff" />
      <polygon points="115,130 110,145 125,140" fill="#ffffff" />
    </g>`),

  'computer-services.svg': cardFrame('#3b82f6', '#00f0ff', `
    <g transform="translate(115, 35)">
      <rect x="10" y="10" width="150" height="105" rx="10" fill="#0f172a" stroke="url(#accentGrad)" stroke-width="2.5" />
      <rect x="22" y="22" width="126" height="80" rx="4" fill="#020617" />
      <path d="M40 55 L55 70 L40 85" stroke="#00f0ff" stroke-width="3" stroke-linecap="round" fill="none" />
      <line x1="65" y1="85" x2="90" y2="85" stroke="#10b981" stroke-width="3" stroke-linecap="round" />
      <rect x="75" y="115" width="20" height="25" fill="#1e293b" />
      <rect x="55" y="140" width="60" height="8" rx="4" fill="#334155" />
    </g>`),

  'mobile-repair.svg': cardFrame('#00f0ff', '#f59e0b', `
    <g transform="translate(125, 25)">
      <rect x="30" y="15" width="90" height="165" rx="18" fill="#0f172a" stroke="url(#accentGrad)" stroke-width="2.5" />
      <rect x="40" y="30" width="70" height="120" rx="6" fill="#020617" />
      <path d="M20 70 L55 105 L65 95 L30 60 Z" fill="#38bdf8" />
      <polygon points="15,65 20,70 30,60" fill="#f59e0b" />
      <circle cx="75" cy="90" r="16" fill="rgba(0,240,255,0.15)" stroke="#00f0ff" stroke-width="1.5" />
      <path d="M70 90 L80 90 M75 85 L75 95" stroke="#10b981" stroke-width="2" stroke-linecap="round" />
    </g>`),

  'mobile-software.svg': cardFrame('#8b5cf6', '#00f0ff', `
    <g transform="translate(125, 25)">
      <rect x="30" y="15" width="90" height="165" rx="18" fill="#0f172a" stroke="url(#accentGrad)" stroke-width="2.5" />
      <rect x="40" y="30" width="70" height="120" rx="6" fill="#020617" />
      <circle cx="75" cy="85" r="18" fill="none" stroke="#8b5cf6" stroke-width="3" stroke-dasharray="6,4" />
      <circle cx="75" cy="85" r="8" fill="#00f0ff" />
      <path d="M75 115 V135 M68 128 L75 135 L82 128" stroke="#10b981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    </g>`),

  'smartphone-troubleshoot.svg': cardFrame('#38bdf8', '#10b981', `
    <g transform="translate(125, 25)">
      <rect x="30" y="15" width="90" height="165" rx="18" fill="#0f172a" stroke="url(#accentGrad)" stroke-width="2.5" />
      <rect x="40" y="30" width="70" height="120" rx="6" fill="#020617" />
      <circle cx="75" cy="75" r="20" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="2" />
      <path d="M68 75 L73 80 L83 70" fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round" />
      <rect x="52" y="110" width="46" height="12" rx="3" fill="#1e293b" />
      <text x="75" y="119" font-family="sans-serif" font-weight="800" font-size="8" fill="#38bdf8" text-anchor="middle">DIAGNOSED</text>
    </g>`),

  'broadband-fiber.svg': cardFrame('#00f0ff', '#3b82f6', `
    <g transform="translate(110, 30)">
      <rect x="20" y="90" width="140" height="45" rx="10" fill="#0f172a" stroke="url(#accentGrad)" stroke-width="2.5" filter="url(#glow)" />
      <line x1="45" y1="90" x2="45" y2="35" stroke="#00f0ff" stroke-width="3.5" stroke-linecap="round" />
      <line x1="135" y1="90" x2="135" y2="35" stroke="#00f0ff" stroke-width="3.5" stroke-linecap="round" />
      <circle cx="45" cy="35" r="4" fill="#10b981" />
      <circle cx="135" cy="35" r="4" fill="#10b981" />
      <path d="M70 50 C80 40 100 40 110 50" fill="none" stroke="#00f0ff" stroke-width="3" stroke-linecap="round" />
      <path d="M60 40 C75 25 105 25 120 40" fill="none" stroke="#00f0ff" stroke-width="2" stroke-linecap="round" opacity="0.6" />
      <circle cx="90" cy="65" r="4" fill="#00f0ff" />
      <circle cx="40" cy="112" r="3" fill="#10b981" />
      <circle cx="55" cy="112" r="3" fill="#10b981" />
      <circle cx="70" cy="112" r="3" fill="#10b981" />
      <circle cx="85" cy="112" r="3" fill="#00f0ff" />
      <text x="130" y="116" font-family="sans-serif" font-weight="900" font-size="11" fill="#38bdf8">1Gbps</text>
    </g>`),

  'cable-tv.svg': cardFrame('#3b82f6', '#8b5cf6', `
    <g transform="translate(115, 30)">
      <rect x="10" y="15" width="150" height="100" rx="10" fill="#0f172a" stroke="url(#accentGrad)" stroke-width="2.5" />
      <rect x="20" y="25" width="130" height="80" rx="6" fill="#020617" />
      <circle cx="85" cy="65" r="24" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2" />
      <path d="M75 55 Q 95 65, 85 75" stroke="#00f0ff" stroke-width="3" stroke-linecap="round" fill="none" />
      <polygon points="60,85 75,65 80,70 65,90" fill="#ffffff" />
      <rect x="75" y="115" width="20" height="15" fill="#1e293b" />
      <rect x="55" y="130" width="60" height="8" rx="4" fill="#334155" />
    </g>`),

  'print-scan-xerox.svg': cardFrame('#00f0ff', '#10b981', `
    <g transform="translate(120, 25)">
      <rect x="15" y="45" width="130" height="85" rx="10" fill="#0f172a" stroke="url(#accentGrad)" stroke-width="2.5" />
      <rect x="40" y="15" width="80" height="35" rx="4" fill="#1e293b" stroke="rgba(255,255,255,0.2)" />
      <line x1="50" y1="25" x2="100" y2="25" stroke="#94a3b8" stroke-width="2" />
      <line x1="50" y1="35" x2="85" y2="35" stroke="#94a3b8" stroke-width="2" />
      <rect x="35" y="110" width="90" height="45" rx="5" fill="#1e293b" stroke="#00f0ff" stroke-width="2" filter="url(#glow)" />
      <line x1="45" y1="122" x2="115" y2="122" stroke="#ffffff" stroke-width="2" />
      <line x1="45" y1="132" x2="95" y2="132" stroke="#10b981" stroke-width="2" />
    </g>`)
};

for (const [filename, content] of Object.entries(svgs)) {
  fs.writeFileSync(path.join(srvDir, filename), content, 'utf-8');
}

// ---------------------------------------------------------------------------
// 4. Hero Visual Dashboard SVG
// ---------------------------------------------------------------------------
const heroSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 460" width="540" height="460" fill="none">
  <defs>
    <linearGradient id="heroCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00f0ff" />
      <stop offset="100%" stop-color="#3b82f6" />
    </linearGradient>
    <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
    <filter id="heroGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Ambient Glow Backdrops -->
  <circle cx="270" cy="230" r="180" fill="#00f0ff" opacity="0.1" filter="url(#heroGlow)" />
  <circle cx="380" cy="160" r="120" fill="#8b5cf6" opacity="0.12" filter="url(#heroGlow)" />

  <!-- Main Digital Console Card -->
  <g transform="translate(40, 40)">
    <rect width="460" height="340" rx="20" fill="url(#heroCardGrad)" stroke="rgba(0, 240, 255, 0.3)" stroke-width="1.5" />
    
    <!-- Header Bar -->
    <rect width="460" height="48" rx="20" fill="#0b1329" />
    <circle cx="25" cy="24" r="5" fill="#ef4444" />
    <circle cx="42" cy="24" r="5" fill="#f59e0b" />
    <circle cx="59" cy="24" r="5" fill="#10b981" />
    <text x="230" y="29" font-family="sans-serif" font-weight="700" font-size="12" fill="#94a3b8" text-anchor="middle" letter-spacing="1">
      JANNAT ENTERPRISE • LIVE SERVICE HUB
    </text>

    <!-- Top Live Stats Row -->
    <g transform="translate(24, 68)">
      <!-- Metric 1: CSC Verified -->
      <rect width="128" height="68" rx="10" fill="#111c38" stroke="rgba(0, 240, 255, 0.2)" />
      <circle cx="20" cy="24" r="8" fill="rgba(0, 240, 255, 0.15)" />
      <text x="20" y="28" font-family="sans-serif" font-weight="900" font-size="11" fill="#00f0ff" text-anchor="middle">✓</text>
      <text x="36" y="26" font-family="sans-serif" font-weight="800" font-size="11" fill="#ffffff">CSC VLE</text>
      <text x="14" y="52" font-family="sans-serif" font-weight="900" font-size="13" fill="#38bdf8">222365420014</text>

      <!-- Metric 2: Services -->
      <rect x="142" width="128" height="68" rx="10" fill="#111c38" stroke="rgba(16, 185, 129, 0.2)" />
      <circle cx="162" cy="24" r="8" fill="rgba(16, 185, 129, 0.15)" />
      <text x="162" y="27" font-family="sans-serif" font-weight="900" font-size="10" fill="#10b981" text-anchor="middle">⚡</text>
      <text x="178" y="26" font-family="sans-serif" font-weight="800" font-size="11" fill="#ffffff">SERVICES</text>
      <text x="156" y="52" font-family="sans-serif" font-weight="900" font-size="15" fill="#10b981">22+ Active</text>

      <!-- Metric 3: Hours -->
      <rect x="284" width="128" height="68" rx="10" fill="#111c38" stroke="rgba(139, 92, 246, 0.2)" />
      <circle cx="304" cy="24" r="8" fill="rgba(139, 92, 246, 0.15)" />
      <text x="304" y="27" font-family="sans-serif" font-weight="900" font-size="10" fill="#a78bfa" text-anchor="middle">⏱</text>
      <text x="320" y="26" font-family="sans-serif" font-weight="800" font-size="11" fill="#ffffff">HOURS</text>
      <text x="298" y="52" font-family="sans-serif" font-weight="900" font-size="13" fill="#a78bfa">9 AM – 8 PM</text>
    </g>

    <!-- Center Active Hub Display -->
    <g transform="translate(24, 152)">
      <rect width="412" height="120" rx="12" fill="#070d1e" stroke="rgba(255, 255, 255, 0.08)" />
      
      <!-- Mini Service Category Bars -->
      <g transform="translate(18, 18)">
        <circle cx="16" cy="16" r="14" fill="rgba(0, 240, 255, 0.15)" stroke="#00f0ff" stroke-width="1.5" />
        <text x="16" y="21" font-family="sans-serif" font-weight="900" font-size="13" fill="#00f0ff" text-anchor="middle">🏥</text>
        <text x="42" y="16" font-family="sans-serif" font-weight="800" font-size="12" fill="#ffffff">Ayushman BIS &amp; Citizen Portals</text>
        <text x="42" y="29" font-family="sans-serif" font-size="10" fill="#94a3b8">Biometric e-KYC, Ration Card, PAN Card, Schemes</text>
      </g>

      <g transform="translate(18, 62)">
        <circle cx="16" cy="16" r="14" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="1.5" />
        <text x="16" y="21" font-family="sans-serif" font-weight="900" font-size="13" fill="#10b981" text-anchor="middle">🏦</text>
        <text x="42" y="16" font-family="sans-serif" font-weight="800" font-size="12" fill="#ffffff">Banking, Micro-ATM &amp; Broadband</text>
        <text x="42" y="29" font-family="sans-serif" font-size="10" fill="#94a3b8">Doorstep BC Banking, High-Speed Optical Fiber, Repair</text>
      </g>
    </g>

    <!-- Bottom Status Strip -->
    <g transform="translate(24, 290)">
      <circle cx="8" cy="16" r="4" fill="#10b981">
        <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="20" y="20" font-family="sans-serif" font-weight="700" font-size="11" fill="#38bdf8">
        Moktarpur • Raipur • Domkal, Murshidabad • Dedicated Local Support
      </text>
    </g>
  </g>

  <!-- Floating Glow Badges -->
  <g transform="translate(20, 340)">
    <rect width="170" height="42" rx="21" fill="#0b1329" stroke="#10b981" stroke-width="1.5" filter="url(#heroGlow)" />
    <circle cx="21" cy="21" r="10" fill="#10b981" />
    <text x="21" y="25" font-family="sans-serif" font-weight="900" font-size="12" fill="#000000" text-anchor="middle">✓</text>
    <text x="40" y="20" font-family="sans-serif" font-weight="800" font-size="10" fill="#ffffff">100% GENUINE</text>
    <text x="40" y="32" font-family="sans-serif" font-weight="600" font-size="9" fill="#10b981">Authorized Assistance</text>
  </g>

  <g transform="translate(360, 360)">
    <rect width="160" height="42" rx="21" fill="#0b1329" stroke="#00f0ff" stroke-width="1.5" filter="url(#heroGlow)" />
    <circle cx="21" cy="21" r="10" fill="#00f0ff" />
    <text x="21" y="25" font-family="sans-serif" font-weight="900" font-size="11" fill="#000000" text-anchor="middle">⚡</text>
    <text x="40" y="20" font-family="sans-serif" font-weight="800" font-size="10" fill="#ffffff">FIBER SPEED</text>
    <text x="40" y="32" font-family="sans-serif" font-weight="600" font-size="9" fill="#38bdf8">Gigabit Internet</text>
  </g>
</svg>`;
fs.writeFileSync(path.join(imgDir, 'hero-visual.svg'), heroSvg, 'utf-8');

console.log('✓ Successfully generated all V2 vector illustrations and assets!');

// ---------------------------------------------------------------------------
// 4. Update js/config.js to link image paths to all services
// ---------------------------------------------------------------------------
const configPath = path.join(rootDir, 'js', 'config.js');
if (fs.existsSync(configPath)) {
  let configContent = fs.readFileSync(configPath, 'utf-8');
  const serviceImageMap = {
    'ayushman-pmjay': 'assets/images/services/ayushman.svg',
    'csc-digital': 'assets/images/services/csc-govt.svg',
    'ration-card': 'assets/images/services/ration-card.svg',
    'pm-kisan': 'assets/images/services/pm-kisan.svg',
    'pmfby-crop-insurance': 'assets/images/services/pmfby.svg',
    'pan-card': 'assets/images/services/pan-card.svg',
    'passport-seva': 'assets/images/services/passport.svg',
    'driving-licence': 'assets/images/services/driving-licence.svg',
    'pvc-card-printing': 'assets/images/services/pvc-printing.svg',
    'bank-bc': 'assets/images/services/bank-bc.svg',
    'axis-bank-bc': 'assets/images/services/axis-bc.svg',
    'new-bank-account': 'assets/images/services/new-bank-account.svg',
    'loan-services': 'assets/images/services/loan-assistance.svg',
    'credit-card-services': 'assets/images/services/credit-card.svg',
    'insurance-services': 'assets/images/services/insurance.svg',
    'bill-payment': 'assets/images/services/bill-payment.svg',
    'mobile-recharge': 'assets/images/services/mobile-recharge.svg',
    'lpg-gas': 'assets/images/services/gas-booking.svg',
    'online-application': 'assets/images/services/online-forms.svg',
    'printing-xerox': 'assets/images/services/print-scan-xerox.svg',
    'computer-services': 'assets/images/services/computer-services.svg',
    'mobile-repair-hardware': 'assets/images/services/mobile-repair.svg',
    'mobile-software-services': 'assets/images/services/mobile-software.svg',
    'smartphone-troubleshooting': 'assets/images/services/smartphone-troubleshoot.svg',
    'broadband-internet': 'assets/images/services/broadband-fiber.svg',
    'cable-network-service': 'assets/images/services/cable-tv.svg'
  };

  let updatedCount = 0;
  for (const [sId, imgPath] of Object.entries(serviceImageMap)) {
    const regex = new RegExp('(id:\\s*["\']' + sId + '["\'],[\\s\\S]*?badge:\\s*["\'][^"\']*["\'],)(?:\\\\n\\s*image:[^\\n]+|\\n\\s*image:[^\\n]+)?');
    if (regex.test(configContent)) {
      configContent = configContent.replace(regex, `$1\n      image: "${imgPath}",`);
      updatedCount++;
    }
  }
  fs.writeFileSync(configPath, configContent, 'utf-8');
  console.log(`✓ Updated ${updatedCount} services with image paths in js/config.js`);
}
