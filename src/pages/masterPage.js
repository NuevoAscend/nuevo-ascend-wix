import wixLocation from 'wix-location';
import { PAGES } from 'public/staticSite';

/** Marketing pages that should show the static GitHub Pages site. */
const STATIC_REDIRECTS = {
  home: PAGES.home,
  programmes: PAGES.programmes,
  'inquiry-services-page': PAGES.contact,
  contact: PAGES.contact,
};

$w.onReady(function () {
  const slug = wixLocation.path[0];
  if (!slug) {
    window.location.replace(PAGES.home);
    return;
  }
  const target = STATIC_REDIRECTS[slug];
  if (target) {
    window.location.replace(target);
  }
});
