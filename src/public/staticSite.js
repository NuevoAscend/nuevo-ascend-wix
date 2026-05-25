/**
 * Static marketing site URLs.
 *
 * Primary host: GitHub Pages (nuevo-ascend-wix repo, gh-pages branch).
 * After enabling Pages in GitHub repo Settings, use:
 *   https://nuevoascend.github.io/nuevo-ascend-wix
 *
 * Fallback below works until GitHub Pages is enabled on nuevo-ascend-wix.
 */
export const SITE_BASE = 'https://nuevoascend.github.io/nuevoascend-site/nuevoascend-site';
// export const SITE_BASE = 'https://nuevoascend.github.io/nuevo-ascend-wix';
// export const SITE_BASE = 'https://www.nuevoascend.com';

export const PAGES = {
  home: `${SITE_BASE}/index.html`,
  about: `${SITE_BASE}/about.html`,
  programmes: `${SITE_BASE}/programmes.html`,
  contact: `${SITE_BASE}/contact.html`,
};
