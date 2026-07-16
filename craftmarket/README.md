# Cayman Craft Market website

A complete, mobile-first, multi-page site for the Cayman Craft Market
(George Town, Grand Cayman; administered by CINAA), delivered as a single
self-contained `index.html`. Hash-routed, no build step, no external
JavaScript. Open it in any browser or host it on any static host at
craftmarket.ky.

## Pages

`#/home`, `#/visit`, `#/crafts`, `#/artisans`, `#/heritage`, `#/vendors`,
`#/about`, `#/contact`.

## What it fixes (vs. the old craftmarket.ky)

- **"Is it open today?"**: a live open/closed status, computed in Cayman
  time (Mon–Fri 8:30am–3:00pm, Christmas Day closure handled), shown in the
  header pill and on the Home / Visit / Contact status cards, with the honest
  cruise-day caveat ("vendors follow the ships") stated everywhere hours appear.
- **"Where is it?"**: one canonical location (the tent behind Parliament,
  off Seafarers Way), an authored SVG walking map from the tender landing,
  step-by-step directions, and a Google Maps link. The AM/PM hours typo,
  North/South Church Street contradiction, Webster's Tours content and spam
  from the old site are all gone.
- **The story**: artisan profiles (Rosemary, Janet, Ruth Bodden, Franklin,
  Josanny/Cayman Drift), a heritage section (Silver Thatch, Caymanite, black
  coral), all nine product categories, the CINAA vendor-licensing process,
  and only genuine market testimonials (real Tripadvisor quotes).
- **SEO**: TouristAttraction JSON-LD with consistent NAP
  (+1 345-949-6999 / info@craftmarket.ky), canonical URL, OG tags,
  descriptive titles per route. Informational site, no e-commerce, per the
  multi-vendor government model.

## The one-place location module

The market has relocated before and may move again (Parliament expansion).
Every mention of the location (hero, visit page, footer, contact, map
caption) reads from the `LOCATION` object at the top of the `<script>` in
`index.html`. If the market moves, edit that one object (and the map
graphic if the route changes).

## Confirm before launch (flagged from the research brief)

1. **Exact current pin**: the walking map and copy place the tent on the old
   Tower Building lot behind Parliament, off Seafarers Way. Field-verify, and
   replace `LOCATION.mapsUrl` with a precise `?query=LAT,LNG` link once the
   Google Business Profile pin is corrected.
2. **Founding year**: the About page deliberately says "over two decades"
   because sources conflict (~2000 / ~2005 / 2008). Confirm with CINAA before
   stating a year.
3. **Phone**: (345) 949-6999 is used as primary throughout; confirm whether
   (345) 949-0049 is still live.
4. **Logo & brand colours**: the Caymanite-strata mark and palette here are
   an informed proposal derived from the stone, Silver Thatch and the harbour;
   swap in the official 2018-rebrand logo if CINAA prefers it.
5. **Saturday openings**: copy says "occasionally, in high season or when
   ships are in port; call ahead". If CINAA can commit to a rule (or publish
   a cruise-day calendar), wire it into the status card.

## Swapping in real photography

The maker portraits and section art are authored SVG craft patterns
(`makerArt()` in the script), deliberate placeholders, not fake photos.
To use real images: replace a `makerArt("...")` call with
`<div class="maker-art"><img src="images/janet.jpg" alt="Janet plaiting a
Silver Thatch hat at her stall"></div>`. Keep meaningful alt text. The
walking-map SVG (`walkingMap()`) should stay; pair it with a real photo of
the tent and roadside sign when available.

## Phase-3 hook: cruise-day calendar

`marketStatus()` in `index.html` is the single source of open/closed logic.
To add the Port Authority cruise schedule later, fetch/embed the schedule
there and extend the returned `sub` line ("2 ships in port today") without
touching any page templates.

## Verified

Checked in a headless browser: all eight routes render with correct titles
and H1s, the live status logic returns the right state for Cayman time, the
mobile menu opens/closes and navigation works at 375px with zero horizontal
overflow, and no console errors (the only network request is Google Fonts,
which degrades to system fallbacks offline). Colour pairs meet WCAG AA
(body text on sand ≈ 9:1; the burnt-coral CTA on white ≈ 4.9:1), focus is
visible on all interactive elements, touch targets are ≥ 44px, and
`prefers-reduced-motion` disables the scroll reveals.
