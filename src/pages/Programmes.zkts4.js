import wixLocation from 'wix-location';
import { PAGES } from 'public/staticSite';

$w.onReady(function () {
  wixLocation.to(PAGES.programmes);
});
