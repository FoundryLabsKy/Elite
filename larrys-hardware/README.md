# Larry's Hardware & Home Centre — website

A mobile-first, brochure-style marketing website for Larry's Hardware & Home
Centre of George Town, Grand Cayman, delivered as a single self-contained
`index.html`. Hash-routed, no build step, no external JavaScript.

Open `index.html` in any modern browser, or host it on any static host
(GitHub Pages, Netlify, S3, or a plain web server). Point the branded domain
`www.larryshardware.ky` at it and 301-redirect the old 3dcart store here.

## Pages

Home, Departments, Tyre Shop, Storm Prep, About, Contact. Routes are hash
based: `#/home`, `#/departments`, `#/tyre-shop`, `#/storm-prep`, `#/about`,
`#/contact`.

## Why brochure, not a store

Per the planning brief, the store's value is in-person price and convenience,
and the abandoned 3dcart catalog (full of out-of-stock generic imports) hurt
the brand more than no store would. So this site sells the visit: hours,
location, departments, the tyre combo, seasonal storm prep, and a low-effort
"ask if we carry it" enquiry — not a live catalog with dead SKUs.

## What is real vs. what to confirm

Everything on the site uses Larry's real, researched details: the 1986 heritage,
address (Prestige Building, 386 Eastern Avenue, George Town, KY1-1110), phone
`(345) 945-1500`, email `larryshardware@gmail.com`, canonical hours (Mon–Sat
8am–5pm, closed Sunday), the "We do it best" tagline, Do It Best membership
(store #7005), the department list, and the verbatim customer reviews.

Flagged in code comments for the owner to confirm before launch:

1. **WhatsApp number.** No public WhatsApp number was found, so the WhatsApp
   buttons are wired to the main line (`13459451500`). Confirm the store's real
   WhatsApp number and update `BIZ.wa`.
2. **The founder / family story.** No public source names "Larry," a family
   surname, or the ownership history. The About page deliberately does **not**
   invent any of this — it tells the honest story and leaves a note asking the
   owner to supply the real history in their own words. Do not fabricate it.
3. **Larry's Tyre & Battery link.** The corporate tie between the hardware store
   and the tyre shop is a high-confidence inference (shared PO Box, address
   adjacency, shared name), presented on the site as "affiliated." Confirm with
   the owner. Tyre-shop phone `(345) 949-2685` and the 325 Shedden Road branch
   are from directory listings.
4. **Domain status.** `www.larryshardware.ky` could not be confirmed live —
   verify domain ownership/registration before building on it.
5. **Brand colours.** The palette (workshop navy, hardware red derived from the
   Do It Best red, warm sand) is provisional. Photograph the storefront signage
   on-site and validate the red against the real brand colours. All token values
   live in the `:root` block at the top of the `<style>`.

## Imagery

The site intentionally ships with **no photographs**. No real product or
storefront photography was available, and stock or AI-generated images would
read as generic. Instead the hero and the tyre-shop band use custom inline SVG
artwork, and every department uses a hand-drawn, single-style SVG icon. When the
owner supplies real photography, images can be introduced on the Home hero,
Departments, and Tyre Shop pages.

## The enquiry form

The Contact form ("Ask if we carry it") validates inline on blur (Name, Email,
Topic and Message required; Phone optional), then opens the visitor's own email
app with a prefilled message to `larryshardware@gmail.com`. Nothing sends until
the visitor presses send in their mail app. To post to a server or email service
instead, replace the `mailto:` step in the form's submit handler with a `fetch()`
to your endpoint.

## SEO / listings note (from the brief)

Before launch, standardize the NAP everywhere to the canonical used here, fix the
KY1-1111 / KY1-1102 postcode errors and the 5pm/6pm hours conflict across
directories, claim the Google Business Profile, and cross-link the Larry's Tyre &
Battery listings. The page ships with `HardwareStore` structured data, Open Graph
and Twitter tags, and a canonical hours specification to support this.

## Accessibility & quality

Verified in a headless browser at 1440×900 and 390×844: all six routes render,
each page has exactly one `<h1>` with no heading-level skips, there is zero
horizontal overflow, every image/SVG has a text alternative, every form field has
a visible programmatic label, the mobile menu is keyboard operable and closes on
Escape, focus is visible throughout, buttons meet the 44px touch-target minimum,
`prefers-reduced-motion` disables the scroll reveals, and the Google Maps embed
has a visible fallback link if it fails to load. Colour pairs were chosen against
WCAG AA (body text ≥ 4.5:1).
