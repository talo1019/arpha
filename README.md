# Arpha — Smart Security Website (Next.js)

A multi-page marketing + product site for **Arpha**, the smart-security brand of FUWEI.
Built with **Next.js 14 (App Router)** and plain global CSS — no Tailwind, no build-time
font fetching, so it runs anywhere with a single `npm install`.

> Brand promise: *More Convenience. More Security. More Care. — Your Safety, Our Priority.*

---

## Quick start

```bash
npm install
npm run dev
```

Then open **http://localhost:3000**.

For a production build:

```bash
npm run build
npm run start
```

Requires Node.js 18.18+ (Node 20 LTS recommended).

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, stats, product showcase, unlock methods, technology, standards, use cases, works-with, trust, CTA |
| `/about` | Company story, stats, the three brand values, capabilities, timeline |
| `/products` | Collection page — all products grouped by category |
| `/products/[slug]` | **Reusable individual product template** (statically generated for all 11 products) |
| `/plans` | Arpha Cloud subscription tiers with monthly/annual toggle + comparison table + FAQ |
| `/accessories` | Add-ons grid (chimes, batteries, cards, mounts…) |
| `/support` | Help center — search, category tiles, contact, FAQ accordion |

Menu bar: **About · Products · Plans · Accessories · Support**

---

## Project structure

```
arpha-web/
├── app/
│   ├── layout.jsx              # Root layout: fonts, <Nav>, <Footer>, scroll FX, metadata
│   ├── globals.css             # Entire design system + all page styles
│   ├── page.jsx                # Homepage
│   ├── about/page.jsx
│   ├── products/
│   │   ├── page.jsx            # Collection (grouped by category)
│   │   └── [slug]/page.jsx     # Individual product template
│   ├── plans/page.jsx
│   ├── accessories/page.jsx
│   └── support/page.jsx
├── components/
│   ├── Nav.jsx                 # Sticky nav + mobile drawer (client)
│   ├── Footer.jsx
│   ├── ScrollFX.jsx            # Scroll reveals / count-up / bar fills (client)
│   ├── ProductCard.jsx
│   ├── DeviceVisual.jsx        # CSS device silhouettes (placeholder art)
│   ├── HeroLock.jsx            # Animated CSS smart-lock hero element
│   ├── PlansPricing.jsx        # Pricing cards + billing toggle (client)
│   ├── Accordion.jsx           # Reusable FAQ accordion (client)
│   └── Icons.jsx               # ~35 inline SVG icons
└── lib/
    └── products.js             # Product catalogue (drives collection + detail pages)
```

---

## How to customise

- **Add or edit products** → `lib/products.js`. Each entry auto-generates a detail page
  at `/products/<slug>` and appears in the collection and homepage showcase.
- **Real product photos** → currently each product uses a CSS silhouette
  (`components/DeviceVisual.jsx`). Swap the `<DeviceVisual>` usages for `next/image`
  `<Image>` once you have photography; drop files in `/public`.
- **Logo** → the `arpha®` wordmark is styled text in `components/Nav.jsx` / `Footer.jsx`.
  Replace with an `<img>`/`<Image>` of the real logo SVG when available.
- **Colours / fonts / spacing** → all design tokens live at the top of `app/globals.css`
  under `:root` (warm charcoal + champagne-bronze palette; Space Grotesk / Manrope /
  Space Mono via Google Fonts).
- **Plans & pricing** → `components/PlansPricing.jsx` and the comparison table in
  `app/plans/page.jsx`.

---

## Notes

- Fonts load at runtime via a `<link>` in `app/layout.jsx` (so the build never needs
  network access to Google Fonts).
- Cart / checkout buttons are presentational placeholders — wire them to your commerce
  backend (Shopify, Stripe, etc.) when ready.
- Fully responsive (desktop / tablet / mobile drawer) and respects
  `prefers-reduced-motion`.
