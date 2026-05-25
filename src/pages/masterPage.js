import wixLocation from 'wix-location';

const STATIC_SITE = 'https://nuevoascend.github.io/nuevoascend-site/nuevoascend-site';

const REDIRECTS = {
  programmes: `${STATIC_SITE}/programmes.html`,
  'inquiry-services-page': `${STATIC_SITE}/contact.html`,
  contact: `${STATIC_SITE}/contact.html`,
};

$w.onReady(function () {
  const slug = wixLocation.path[0];
  if (!slug) {
    window.location.replace(`${STATIC_SITE}/index.html`);
    return;
  }
  const target = REDIRECTS[slug];
  if (target) {
    window.location.replace(target);
  }
});
