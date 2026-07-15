# PLAN — Sand Angels website

Built from `AUDIT-sand-angels.md`. Deliverable: a self-contained, hash-routed,
single-file marketing site (`index.html`), matching this repo's convention.

## Sitemap

- `#/home` — hero (designer swim positioning) → fit promise → brand roster → services
  (reserve & try / local delivery) → boutique family → testimonials → visit/CTA
- `#/swim` — the swim specialty: bikini separates, one-pieces, **bra-sized & plus-size
  fit expertise** (the differentiator no competitor owns)
- `#/collections` — resort wear, accessories, kids UPF50+, men's, active — grouped per A3
- `#/brands` — the verified designer roster with one-line "why we carry it" notes
- `#/visit` — canonical NAP, map directions (Paseo, Camana Bay), hours (with confirm
  flag), phone 945-SAND, WhatsApp/call/email actions, parking/wayfinding
- `#/about` — the Dawson-James story, the "Angels" service culture, the four-boutique
  family (cross-links), honest heritage (no invented founding year)

## Key features

- **Contact prominence:** sticky header CTA "Visit the boutique"; click-to-call
  `tel:+13459457263` (945-SAND styled), `mailto:info@sandangels.com`, WhatsApp deep link
  marked `UNCONFIRMED` until the owner confirms a WhatsApp business number → shipped as
  call/email only.
- **Reserve & try:** the existing real service (reserve online, try in store; free
  delivery South Sound→West Bay over $200; no international shipping) becomes a
  first-class "How it works" section — it exists today but is buried.
- **Seasonal note:** high-season vs summer content handled with copy, not fake urgency.
- **Forms:** a "reserve / ask an Angel" enquiry form composing a `mailto:` (no backend),
  single column, visible labels, inline validation, human error messages.

## SEO priorities (from A2)

1. Align hours everywhere (10–6 vs 10–7) once owner confirms; publish canonical NAP:
   "Sand Angels, 64 Market Street (The Paseo), Camana Bay, Grand Cayman."
2. De-index / password-lock the `ian-james-oqee.squarespace.com` staging mirror; 301 any
   legacy URLs to the canonical domain.
3. Standardize public name to "Sand Angels" (keep "Sand Angels Inc." for legal footer).
4. Claim/verify Google Business Profile; sync hours, photos, categories.
5. `LocalBusiness`/`ClothingStore` JSON-LD with confirmed NAP; OG/Twitter cards; sitemap +
   robots.

## Copy plan (voice: assured, warm, well-travelled; no buzzwords)

- **Hero headline:** "Swimwear worth crossing an ocean for." Sub: "Designer swim, resort
  wear and accessories from around the world — fitted to you by the Angels at Camana Bay,
  Grand Cayman." (what/who/why in one read)
- **Fit section:** lead with bra-sized & plus-size expertise — "Swim that actually fits."
- **Services:** "Reserve online. Try it on in the boutique." + delivery promise verbatim
  from the real policy.
- **Price honesty (answers the review complaint):** a plain line about designer quality
  and Cayman import reality — no apology, no hiding.
- **About:** Catherine's 25+ years in Cayman fashion retail (sourced), the angel motif,
  the boutique family.

## Testimonial map (from A4, pending owner approval — labeled as Google reviews)

- Quote 2 ("beach and swimwear heaven") → home, primary testimonial
- Quote 1 ("owner… fantastic taste") → about page
- Quote 3 ("unique swimsuits… quality matches") → swim page (doubles as price honesty)

## Design tokens (derived from A5 brand context; owner logo to confirm)

- **Color (60-30-10):** dominant warm sand/ivory neutrals with a hue tint
  (`#FBF7F0`→`#171410` scale, never pure gray/black); secondary deep sea-glass teal scale
  (50–900 around `#0E5560`); **one** accent: sun-coral `#D9481C`-family, CTAs only;
  semantic success/warn/error/info tinted to palette.
- **Type:** display **Cormorant Garamond** (editorial, luxury-resort, distinctive) +
  body/UI **Archivo** (grotesque with character; not Inter). Modular scale 1.25 from
  16px, rem-based.
- **Spacing:** 8px base unit, named steps only.
- **Radius:** near-sharp 2–6px (formal, gallery-like) — not 8px-everywhere.
- **Elevation:** layered two-part shadows from one top-light source, warm-tinted.
- **Signature authored detail:** a hand-drawn SVG "angel-wing wave" motif used as section
  divider + a large outlined display moment in the hero; subtle scroll-reveal.
- Grayscale-first composition; teal/coral applied last.
