# Khidmitak — Drop‑in HTML/CSS/JS

This bundle contains **drop‑in replacements** for your static site. Overwrite the same‑named files in your project.

## Files

- `index.html` — new homepage with hero, featured collections, makers, journal, about, footer
- `shop.html` — shop grid with filters, badges, and refined cards
- `style.css` — design system (sand/linen/olive/charcoal), typography (Inter + Cormorant Garamond + Noto Naskh Arabic), RTL rules, motif
- `script.js` — mobile drawer, theme toggle, EN/AR language + RTL toggle, small animations

## How to use

1. Replace your existing files with these four (keep file names the same).
2. Open `index.html` locally or redeploy to your host.
3. Click **EN/AR** to test RTL; click **Theme** to toggle dark mode.

## Notes

- Images are stock Unsplash placeholders — swap with your assets when ready.
- The code is vanilla HTML/CSS/JS so it can later be ported into Next.js or any headless stack (Shopify Storefront API, Sanity/Contentful).
- If you already have JavaScript, you can merge just `script.js` functions you need.

## Next steps

- Provide Shopify dev store credentials to wire product data and checkout.
- Decide CMS (Sanity/Contentful) for artisans, countries, and journal content.
- Share brand assets (logo, color tweaks) for final token tuning.
