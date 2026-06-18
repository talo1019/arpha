# Arpha Website — Project Memory

Marketing + product site for **Arpha**, the smart-security brand of **FUWEI** (smart locks, video
doorbells, IP cameras, dash cams). Brand promise: *More Convenience. More Security. More Care. —
Your Safety, Our Priority.* See @README.md for the full overview.

## Stack
- Next.js 14 (App Router), React 18, **JavaScript/JSX (not TypeScript)**
- Plain global CSS with design tokens — **no Tailwind, no CSS Modules**
- Path alias: `@/*` → project root

## Commands
- Install: `npm install`  (run once; `node_modules` is not committed)
- Dev: `npm run dev`  → http://localhost:3000 (hot-reloads on save)
- Production build: `npm run build` then `npm run start`
- Lint: `npm run lint`
- Deploy (public URL): `npx vercel` (or Netlify). Nothing else hosts it.

## Structure
```
app/
  layout.jsx            Root: fonts <link>, <Nav>, <Footer>, <ScrollFX>, metadata
  globals.css           ENTIRE design system + every page's styles live here
  page.jsx              Homepage (hero, stats, lineup, unlock, tech, standards, uses, works-with, trust, CTA)
  about/  plans/  accessories/  support/   page.jsx each
  products/page.jsx     Collection, grouped by category
  products/[slug]/page.jsx   Reusable product template (generateStaticParams + generateMetadata)
components/
  Nav, Footer, ScrollFX, ProductCard, DeviceVisual, HeroLock, PlansPricing, Accordion, Icons
lib/products.js         Product catalogue — drives homepage showcase, collection, and detail pages
public/                 logo-dark.png, logo-white.png, products/*.jpg
```

## Conventions (follow these)
- **Add/edit products in `lib/products.js`.** Each entry auto-creates `/products/<slug>`, and appears
  in the collection + (if listed in the `featured` array in `app/page.jsx`) the homepage lineup.
- Product schema: `slug, name, model, category, sub, deviceType, image?, badge, badgeAlt, price, was,
  tagline, description, feature[], unlock[], highlights[{icon,title,body}], specs[{k,v}]`.
- **Client vs server components:** only Nav, ScrollFX, PlansPricing, Accordion are `"use client"`.
  Keep pages server components unless they need state/effects.
- In JSX text, escape `<` `>` `&` as `&lt; &gt; &amp;` (e.g. `&lt;0.3s`, `&gt;99%`).
- Icons are inline SVG components in `components/Icons.jsx` (camelCase attrs). Highlights look up icons
  dynamically by string name via `import * as Icons`.
- Scroll reveals: add class `reveal` (fades in), `[data-count]` (count-up number), `.fill[data-w]`
  (bar fill). `ScrollFX.jsx` wires these up and re-runs on route change.
- Styling goes in `app/globals.css`. Design tokens are the `:root` block at the top — reuse the CSS
  vars (`--ink`, `--paper`, `--bronze`, etc.); don't hardcode hexes.

## Design system (quick ref)
- Palette: warm charcoal `--ink:#17130F` + off-white `--paper:#F6F2EB` + champagne-bronze `--bronze:#B5895A`.
- Fonts: Space Grotesk (display), Manrope (body), Space Mono (labels/specs).

## Important decisions & gotchas
- **Fonts load via `<link>` in `app/layout.jsx` `<head>`, NOT `next/font/google`.** This is intentional
  so the build never needs network access to Google Fonts. Keep it this way.
- **Real product photos sit on pure-black backgrounds.** Their tiles use a black background
  (`.has-photo` → `background:#000`) so the shot blends seamlessly. When adding a new photo, set the
  product's `image` field and the card/PDP will switch from the CSS silhouette to the photo automatically.
- Products **without** a photo render a CSS silhouette via `DeviceVisual.jsx` (`deviceType`:
  `lock|bell|cam|dash`). These show on light tiles — mixing is expected until all photos exist.
- Logo is image-based: `logo-dark.png` on light surfaces (nav/drawer), `logo-white.png` on the dark footer.
- Next is pinned to **14.2.35** (security patch). Don't downgrade.
- Respect `prefers-reduced-motion` (already handled in globals.css) for any new animation.
- Cart/checkout/search/newsletter buttons are presentational placeholders — wire to a backend when ready.

## Current state (already applied)
Logo wired (nav + footer); hero shows a wide lifestyle photo (`public/products/hero-entry.jpg`, lock +
doorbell at an entrance) via `HeroLock.jsx` with floating biometric tags; all weather ratings
are IP54; Holt Lite H10 uses its real photo; the homepage "Lineup" excludes Uno Pro and Uvo 2 (they still
exist on `/products`); the "Works with" row has no Matter chip. The site is multilingual: URL-prefixed
locales under `app/[lang]/` (en, zh-hant, ja, en-au, fr-ca) with dictionaries in `lib/dictionaries/`,
locale routing in `middleware.js`, and `components/LocaleLink.jsx` for locale-aware links.

## Where real assets swap in
- More product photos → drop in `public/products/`, add `image:` to the product in `lib/products.js`.
- Replace placeholder copy/specs in `lib/products.js` as real data arrives.
