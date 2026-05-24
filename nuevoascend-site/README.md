# Nuevo Ascend — Website

**Nuevo Ascend Ltd** | Leadership Development & Consultancy  
Part of the Nuevo Group | London, UK

## Pages

- `index.html` — Homepage
- `about.html` — About & Founder Story
- `programmes.html` — All 5 Programmes
- `contact.html` — Contact & Booking

## Assets

- `css/` — Stylesheets
- `js/` — Site scripts
- `assets/images/` — Image assets

## Live Site

The static site is deployed automatically to GitHub Pages on every push to `main`:

**https://nuevoascend.github.io/nuevoascend-site/**

### Wix setup (one time)

Wix cannot render the HTML files directly from Git. The Velo page code loads the GitHub Pages site instead:

1. In the Wix Editor, open **Home**, **Programmes**, and **Contact** pages.
2. Add **Embed a Site** (HTML iframe) — full width, full height.
3. Set the element ID to **`siteEmbed`** (Element ID in the settings panel).
4. Hide the default Wix header/footer on those pages so only your site shows.
5. **Publish** the site (or run `wix publish` from the repo).

If `#siteEmbed` is missing, visitors are redirected to the GitHub Pages URL instead.

© 2026 Nuevo Ascend Ltd. All rights reserved.
