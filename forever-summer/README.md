# Forever Summer — website

A complete, production-grade marketing website for **Forever Summer**, the women's
lifestyle boutique at 45 Market Street (The Paseo, next to Starbucks), Camana Bay,
Grand Cayman — opened March 2019 by Catherine Dawson-James (sister boutique to Sand
Angels, Little Angels, Activ Angels and Riviera). Delivered as a single
self-contained `index.html` — hash-routed, no build step, no external JavaScript.

**Stack:** hand-written HTML/CSS/JS in one file. Fonts: Fraunces + Karla (Google
Fonts). All artwork (striped-sun hero, marquee, tickets) is inline SVG/CSS — zero
image requests.

**Run it:** open `index.html` in any browser, or host it on any static host.
Deployed via this repo's GitHub Pages workflow at `/forever-summer/`.

**Pages (hash routes):** `#/home`, `#/new`, `#/shop`, `#/fs-girls`, `#/about`,
`#/visit`.

## Pipeline documents

- `AUDIT-forever-summer.md` — sourced research audit.
- `PLAN-forever-summer.md` — sitemap, copy plan, tokens, SEO fixes.
- `QA-LOG.md` — QA loop iterations and final scores.

## What is real vs. what to confirm

Sourced facts used on the site: address/phone/email, the weekly limited-drop model
("new styles arriving weekly in strictly limited quantities"), the owner's nostalgia
concept quote, opening year 2019, Catherine's 25+ years in Cayman retail, sister
boutiques, Instagram handle, and the quoted Google review (Gabby shout-out).

### `UNCONFIRMED` — client to-do list before launch

1. **Hours.** Site shows Mon–Sat 10am–6pm (Camana Bay profile); the 2019 opening
   story said 10am–7pm. Confirm and align everywhere.
2. **Logo & brand colors.** The striped-sun mark and amber/dusk/hibiscus palette are
   proposed from the brand concept, not the official logo. Swap in the real logo.
3. **Photography.** All image slots are clearly-labeled placeholder panels — replace
   with the shop's own drop/interior photos and update alt text.
4. **Review quote.** The Gabby quote is from a public Google review, attributed as
   such; get owner approval and full attribution.
5. **Holds policy.** The "ask us to hold a piece" flow assumes short first-come
   holds — confirm the real policy wording.
6. **Gift cards** — sold at the sister boutique; confirm whether Forever Summer
   offers them, then add to `#/shop`.
7. **Brands.** No labels are named publicly anywhere — the site deliberately names
   none. Confirm which (if any) may be promoted.
8. **Off-site fixes:** rename the Facebook page from "ForeverSummer.com" to
   "Forever Summer"; claim/sync Google Business Profile; use one canonical address
   line ("45 Market St, Camana Bay") instead of bare "George Town"; consider TikTok
   for the FS Girls audience.
