# JANNAT ENTERPRISE Website

> **"সব ডিজিটাল পরিষেবা, এক ছাদের নিচে"**  
> *"Your One-Stop Digital Service & Technology Centre"*

A complete, mobile-first, production-ready website for **JANNAT ENTERPRISE** in Moktarpur, Raipur, Domkal, Murshidabad, West Bengal.

- **CSC / VLE ID**: `222365420014`
- **Phone / WhatsApp**: `8918273721`
- **Target Custom Domain**: `https://jannat.un1ca.qzz.io`
- **Hosting Platform**: Cloudflare Pages (Free, Global CDN, Automatic SSL)

---

## 📁 Repository Structure

```
├── index.html                   # Main production HTML5 page (SEO, Schema.org LocalBusiness)
├── 404.html                     # Branded 404 error page
├── _headers                     # Cloudflare Pages security & asset cache headers
├── _redirects                   # Cloudflare Pages SPA fallback routing
├── package.json                 # Build, test, and serve scripts
├── .gitignore                   # Git exclusion rules
├── css/
│   └── style.css                # Mobile-first CSS design tokens & components
├── js/
│   ├── config.js                # Centralized business configuration (editable details)
│   └── app.js                   # Application logic (search filter, modal, live hours)
├── assets/
│   ├── favicon.svg              # Vector favicon
│   └── images/
│       ├── logo.svg             # Custom JE monogram logo
│       ├── hero-visual.svg      # Digital terminal & service visual
│       ├── broadband-visual.svg # Fiber broadband & cable network diagram
│       └── og-image.svg         # Open Graph social preview (1200x630)
├── scripts/
│   └── build.js                 # Production packaging script
└── verify_site.js               # Automated verification test suite
```

---

## 🛠️ Local Development

### Run Test Suite
```bash
npm test
```

### Build for Production
```bash
npm run build
```
The output will be placed in `dist/`.

---

## 🚀 Cloudflare Pages Deployment Guide

Follow these 5 simple steps to deploy your website to **Cloudflare Pages** under your custom domain `jannat.un1ca.qzz.io` without affecting your existing `un1ca.qzz.io` site.

---

### Step 1: Push Code to GitHub

1. Open your terminal in this project folder (`Jannat Enterprise Website`).
2. Create a new GitHub repository (e.g. `jannat-enterprise-website`) on [github.com/new](https://github.com/new) as a **Public** or **Private** repository.
3. Link and push your local code:
   ```bash
   git init
   git add .
   git commit -m "feat: initial production release"
   git branch -M main
   git remote add origin https://github.com/<your-username>/jannat-enterprise-website.git
   git push -u origin main
   ```

---

### Step 2: Create a Cloudflare Pages Project

1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left navigation, go to **Workers & Pages** > **Create application** > **Pages** tab > **Connect to Git**.
3. Select your GitHub account and pick the `jannat-enterprise-website` repository.
4. Configure the **Build Settings**:
   - **Project Name**: `jannat-enterprise` (or your choice; will create `jannat-enterprise.pages.dev`)
   - **Production branch**: `main`
   - **Framework preset**: `None`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Click **Save and Deploy**.
6. Cloudflare will run the build and publish your site at `https://<your-project>.pages.dev` in less than 1 minute.

> [!TIP]
> Alternatively, if you prefer zero build steps, you can set **Build command** to blank (`None`) and **Build output directory** to `/`. Both modes are fully supported.

---

### Step 3: Add `jannat.un1ca.qzz.io` as Custom Domain

1. In your Cloudflare Pages project dashboard (`jannat-enterprise`), click on the **Custom domains** tab.
2. Click **Set up a custom domain**.
3. Enter your target domain:
   ```
   jannat.un1ca.qzz.io
   ```
4. Click **Continue**.

---

### Step 4: Required DNS Configuration

Cloudflare Pages will display the required DNS record for your subdomain:

| Type | Name | Target / Value | Proxy status |
| :--- | :--- | :--- | :--- |
| **CNAME** | `jannat` | `<your-project>.pages.dev` | Proxied (Orange Cloud) |

- **If your domain `un1ca.qzz.io` DNS is managed in Cloudflare**:
  Cloudflare Pages will automatically detect your zone and offer to add this CNAME record with a single click (**Activate domain**).
- **If your domain `un1ca.qzz.io` DNS is managed at another registrar / DNS provider**:
  Add a new DNS record:
  - **Type**: `CNAME`
  - **Name / Host**: `jannat`
  - **Points to / Target**: `<your-project>.pages.dev` (e.g. `jannat-enterprise.pages.dev`)
  - **TTL**: Auto or 300s

> [!IMPORTANT]
> **Complete Domain Isolation**:
> Adding a CNAME record for `jannat` only routes traffic for `jannat.un1ca.qzz.io`. Your existing root website (`un1ca.qzz.io`) and any other subdomains remain completely untouched and unaltered.

---

### Step 5: Final HTTPS Verification

1. Once the CNAME record is configured, Cloudflare automatically provisions a free SSL/TLS certificate for `jannat.un1ca.qzz.io`.
2. In the Pages project under **Custom domains**, wait until the status changes to:
   **🟢 Active**
3. Open `https://jannat.un1ca.qzz.io` in your browser (and on an Android phone):
   - Check SSL certificate (padlock icon in browser URL bar).
   - Test the one-tap **Call Now** (`tel:8918273721`) and **WhatsApp** buttons.
   - Test the interactive **Documents Centre** live search.
   - Verify that the website displays flawlessly across mobile and desktop.

---

## ⚙️ Updating Business Information

All business details, phone numbers, WhatsApp, business hours, and service catalogs are managed in:
[`js/config.js`](./js/config.js)

Whenever you make updates and push to GitHub (`git push`), Cloudflare Pages will automatically rebuild and deploy your changes globally within seconds!
