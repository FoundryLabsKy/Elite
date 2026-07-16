# Welly's Cool Spot — website

A single-file website for **Welly's Cool Spot**, the Caymanian restaurant and bar at 110 North Sound Road, George Town, Grand Cayman — in business since Welly E.K. Wellington's day (already a fixture by 1982, per the Cayman Compass).

Built with the `website-audit-rebuild` pipeline: researched audit → plan → build → QA loop → personality pass → ship. See the companion documents in this folder:

- `AUDIT-wellys-cool-spot.md` — the sourced research audit (identity, footprint, NAP table, reviews, competitors)
- `PLAN-wellys-cool-spot.md` — sitemap, copy plan, testimonial map, SEO fix-list, design tokens
- `QA-LOG-wellys-cool-spot.md` — QA loop iterations, Lighthouse numbers, personality log
- `CLIENT-TODO-wellys-cool-spot.md` — **every `UNCONFIRMED` item** and the owner's action list

## Stack

One self-contained `index.html` — hand-written CSS custom properties, no framework, no build step. Google Fonts (Alfa Slab One / Source Serif 4 / Archivo, `display=swap`), inline SVG icons and domino illustrations, ~2KB of vanilla JS for the open-now status chip (computed in `America/Cayman` time) and today-highlighting. `Restaurant` JSON-LD with the confirmed NAP.

## Run

Open `index.html` in a browser, or serve statically:

```sh
python3 -m http.server 8000
```

## Deploy

Deployed by `.github/workflows/pages.yml` to GitHub Pages under `/wellys-cool-spot/`. Live URL: https://foundrylabsky.github.io/Elite/wellys-cool-spot/

## Real vs. unconfirmed

Everything presented as fact is sourced (see the audit's source list). Items that could **not** be verified are excluded or hedged on the site and listed in `CLIENT-TODO-wellys-cool-spot.md` — notably: exact founding year, current owner, the Sunday opening-hour conflict (site uses 7am per the stronger evidence), the catering email, menu prices (deliberately not published), and owner photography (site is deliberately photo-free until real photos are supplied).
