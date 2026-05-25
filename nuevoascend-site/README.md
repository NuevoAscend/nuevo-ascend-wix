# Nuevo Ascend — Website

**Nuevo Ascend Ltd** | Leadership Development & Consultancy  
Part of the Nuevo Group | London, UK

## Pages

- `index.html` — Homepage
- `about.html` — About & Founder Story
- `programmes.html` — All 5 Programmes
- `contact.html` — Contact & Booking

## Live site

Deployed automatically to GitHub Pages on every push to `main`:

**https://nuevoascend.github.io/nuevoascend-site/nuevoascend-site/**

Custom domain (after DNS is configured): **https://www.nuevoascend.com**

## Connect your domain (one-time)

In your domain registrar (where you bought nuevoascend.com), remove Wix DNS records and add:

| Type  | Name | Value |
|-------|------|-------|
| CNAME | www  | `nuevoascend.github.io` |

In GitHub: repo **Settings → Pages → Custom domain** → enter `www.nuevoascend.com` and enable **Enforce HTTPS**.

Then in `src/public/staticSite.js`, switch `SITE_BASE` to `https://www.nuevoascend.com` and run `wix publish`.

© 2026 Nuevo Ascend Ltd. All rights reserved.
