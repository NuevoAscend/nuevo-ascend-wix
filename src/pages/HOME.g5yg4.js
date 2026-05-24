import wixLocation from 'wix-location';
import { PAGES } from 'public/staticSite';

const PAGE_URL = PAGES.home;

$w.onReady(function () {
  try {
    const embed = $w('#siteEmbed');
    embed.src = PAGE_URL;
    embed.scrolling = 'yes';
  } catch (_) {
    wixLocation.to(PAGE_URL);
  }
});
