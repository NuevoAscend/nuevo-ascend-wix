import wixLocation from 'wix-location';

const STATIC_SITE = 'https://nuevoascend.github.io/nuevoascend-site/nuevoascend-site';

const WIX_APP_PAGES = new Set([
  'book-online',
  'blog',
  'event-list',
  'events',
  'cart',
  'checkout',
  'account',
  'my-programs',
  'my-bookings',
  'my-orders',
  'schedule',
  'profile',
  'payment',
  'post',
  'service-page',
  'visitor-page',
  'participant-page',
  'booking-calendar',
  'booking-form',
  'program-list',
  'side-cart',
]);

const STATIC_PAGES = {
  '': `${STATIC_SITE}/index.html`,
  home: `${STATIC_SITE}/index.html`,
  programmes: `${STATIC_SITE}/programmes.html`,
  contact: `${STATIC_SITE}/contact.html`,
  'inquiry-services-page': `${STATIC_SITE}/contact.html`,
  about: `${STATIC_SITE}/about.html`,
};

$w.onReady(function () {
  const slug = wixLocation.path[0] || '';
  if (WIX_APP_PAGES.has(slug)) {
    return;
  }
  const target = STATIC_PAGES[slug];
  if (target) {
    window.location.replace(target);
  }
});
