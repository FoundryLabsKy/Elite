# Sand Angels — website

A complete, production-grade marketing website for **Sand Angels**, the designer
swimwear & resort-wear boutique at 64 Market Street (The Paseo), Camana Bay, Grand
Cayman, owned by Catherine and Ian Dawson-James. Delivered as a single self-contained
`index.html` — hash-routed, no build step, no external JavaScript.

**Stack:** hand-written HTML/CSS/JS in one file. Fonts: Cormorant Garamond + Archivo
(Google Fonts). All artwork is inline SVG/CSS — the page makes zero image requests.

**Run it:** open `index.html` in any browser, or host it on any static host.
Deployed via this repo's GitHub Pages workflow at `/sand-angels/`.

**Pages (hash routes):** `#/home`, `#/swim`, `#/collections`, `#/brands`, `#/about`,
`#/visit`.

## Pipeline documents

- `AUDIT-sand-angels.md` — sourced research audit (identity, footprint, NAP table,
  sentiment, brand, competitors, market).
- `PLAN-sand-angels.md` — sitemap, copy plan, testimonial map, SEO fixes, tokens.
- `QA-LOG.md` — the QA loop iterations and final scores.

## What is real vs. what to confirm

Everything factual on the site is researched and sourced (see the audit): address,
phone (345-945-SAND), email, services (reserve & try, free delivery South Sound→West
Bay over $200, no international shipping), brand roster, sister boutiques, owner
story, and the three quoted Google reviews.

### `UNCONFIRMED` — client to-do list before launch

1. **Hours.** Site shows Mon–Sat 10am–6pm (from sandangels.com); the Camana Bay
   profile says 10am–7pm. Confirm and align everywhere (site, GBP, directories).
2. **Founding year** — not publicly stated; add to the About page once confirmed.
3. **Logo & brand colors.** The wing-wave mark and palette here are proposed from
   brand context, not extracted from the official logo. Swap in the real logo and
   validate colors.
4. **Photography.** Every image slot is a clearly-labeled placeholder panel
   (`figcaption` "Placeholder — …"). Replace with the boutique's own photos and
   update alt text.
5. **Review quotes.** The three testimonials are verbatim public Google reviews,
   attributed as such; reviewer names weren't accessible. Get owner approval and,
   ideally, named attribution.
6. **Brand roster.** Confirm the current-season label list on `#/brands`.
7. **"12+ world labels" count** on the home fact strip — derived from the verified
   roster; confirm.
8. **WhatsApp.** Not linked (no verified business number). Add if the boutique uses one.
9. **SEO cleanup (off-site):** de-index the `ian-james-oqee.squarespace.com` staging
   mirror; claim/sync Google Business Profile; standardize "Sand Angels" naming.
