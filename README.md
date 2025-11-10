# Khidmitak static site bundle

This folder now ships a multi-page static site ready to deploy as-is. Pages use shared header/footer partials, a central design token sheet, and lightweight JavaScript for the mobile menu.

## Structure

- `index.html` — homepage with hero, collection highlights, makers, and journal teasers.
- `products/` — shop index plus product detail pages with structured data snippets.
- `journal/` — article hub and three feature stories with Leaflet maps.
- `artisans/`, utility pages (`about.html`, `gifts.html`, `shipping.html`, etc.), and basic legal pages under `legal/`.
- `assets/css/styles.css` — design system tokens and layout primitives.
- `assets/js/site.js` — mobile navigation toggle (no frameworks).
- `assets/js/product.js` — placeholder for future cart logic.
- `assets/img/` — empty placeholder assets; replace with production imagery.
- `robots.txt` and `sitemap.xml` — basic SEO scaffolding.

## Getting started

1. Replace placeholder JPGs/SVG under `assets/img/` with your own imagery.
2. Update copy on the informational pages and legal stubs.
3. Wire cart / CMS integrations by extending `assets/js/product.js` or porting into your framework of choice.
4. Deploy the folder to your static host (Netlify, Vercel, Cloudflare Pages, S3 + CloudFront, etc.).

## Notes

- The HTML uses absolute paths (`/assets/...`) so it assumes deployment at the domain root. Adjust paths if you serve from a subdirectory.
- Journal pages load Leaflet from a CDN. Self-host if your platform blocks external scripts.
- `shop.html`, `style.css`, and `script.js` from the previous bundle are retained only for reference; the new layout lives under `assets/` + the multipage structure above.
