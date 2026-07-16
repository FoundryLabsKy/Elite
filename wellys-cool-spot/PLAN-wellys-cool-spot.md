# Plan — Welly's Cool Spot

Every choice below traces to `AUDIT-wellys-cool-spot.md` (section refs in parentheses).

## Sitemap

Single-page site (matches this repo's pattern and the business's size — a cookshop needs answers fast, not navigation depth), with anchor sections:

1. **Hero** — who/what/where in one read, hours-today, click-to-call
2. **Today's kitchen** — the rotating daily-menu story + the weekly classics (A3)
3. **The Welly story** — 1982 heritage, Welly Wellington, greenies, dominoes (A1, A5)
4. **What people say** — real TripAdvisor quotes (A4)
5. **Sunday breakfast** — 7–11am, ackee & saltfish (A3)
6. **Find us / hours / contact** — full NAP block, map link, catering email (A2)

Footer: hours table repeated, socials, copyright.

## Key features

- **Click-to-call** `tel:+13459492541` in header and sticky on mobile — reviewers order ahead for takeout (A4: "best to order and take out").
- **Hours front-and-center** with the *correct* Sunday 7am opening (A2 NAP conflict resolved toward the breakfast evidence; flagged in CLIENT-TODO for owner confirmation).
- **"Today's menu is on Instagram" pattern** — the kitchen posts daily menus to @wellyscoolspot (A2); the site links directly rather than pretending to a static menu, and lists the recurring classics with the Thursday cowfoot note (A3).
- **Dominoes/vibe section** — sets honest expectations that this is a locals' cookshop with AC inside and dominoes outside (A4 complaint: "not really the dine-in type" vs "super clean, AC").
- **Catering contact** — email surfaced from Instagram bio (A1), marked for owner confirmation.
- **Visitor directions cue** — George Town / North Sound Road context for cruise visitors without asserting unverified travel times (A7).
- No online ordering in v1 — no competitor has it (A6) and no fulfilment capacity is confirmed; phone-ahead is the real workflow.

## SEO priorities

1. **Fix Sunday hours** everywhere: Instagram bio says 10am, Cayman Good Taste + breakfast reviews say 7am (A2). Owner confirms → update Instagram bio, Google Business Profile, directories.
2. **Claim/verify the Google Business Profile** (rating unretrievable, ownership status unknown — A2).
3. **Merge the two Facebook pages** (IDs `100063709561986` and `481506305291653`) or mark one as the canonical page (A2).
4. **Correct Wanderlog's "Seven Mile Beach" locality** to George Town (A2).
5. **Standardize the name** as "Welly's Cool Spot" (with "Restaurant & Bar" as descriptor, not part of the name) across directories (A2).
6. **No old site to retire** — there has never been a website (A2), so the new URL becomes the canonical citation; add it to every directory listed in A8.
7. `LocalBusiness`/`Restaurant` JSON-LD with the confirmed NAP: 110 North Sound Road, George Town; +1-345-949-2541 (A2).

## Copy plan

Voice: plain-spoken, warm, a little wry — the register of a place whose founder's house rule was that troublemakers "end up in the parking lot" (A1). No resort-brochure adjectives. Short sentences. Caymanian vernacular where it's real ("cool spot," "greenies") — never invented patois.

- **Hero headline:** "Cayman cooking, done the way Welly started it." — what (Cayman cooking), who (Welly's), why (heritage authenticity). Subline: "Oxtail, curry goat and stew conch on North Sound Road, George Town — where locals have eaten since Welly Wellington opened his cool spot." (Uses "since" loosely pending year confirmation; falls back to "for over 40 years" if owner can't confirm 1982.)
- **Today's kitchen:** lead with the rotation being real home cooking decided daily — "The pots decide the menu." List the classics from A3 (oxtail & beans, curry goat, stew conch, cowfoot & beans on Thursdays, fried chicken, fried fish, lobster) with the standard sides (rice and peas, fried plantain, salad). CTA: call to hear today's pots / check Instagram.
- **Story section:** the Compass material — Welly E.K. Wellington, the tight ship, the greenies era, dominoes outside; his passing in 2009 and the spot carrying on. This is documented fact, not marketing invention (A1).
- **Sunday breakfast:** "Sunday starts at seven" — ackee & saltfish, doors at 7am (A3).
- **Find us:** literal, useful: address, phone, hours table, "in town, on North Sound Road" (A2).
- Swap test on all of the above: none of it survives with a competitor's name inserted — the founder, street, dishes, Thursday cowfoot, and greenies are all Welly's-specific.

## Testimonial plan

| Quote (A4) | Placement | Complaint it counters |
|---|---|---|
| "The best oxtail meals on island." | Hero proof line | — |
| "The oxtail was off the chain." | Beside oxtail in Today's kitchen | — |
| "The prices are unbeatable!" | Today's kitchen | high-cost-island anxiety (A7) |
| "Super clean, AC, and most importantly, delicious food!" | Vibe/dominoes section | "not the dine-in type" perception |
| "Awesome little local restaurant if you're looking for local cuisine." | What-people-say section | tourist hesitation |
| "…if you can play dominoes it would be a good place to catch an afternoon game." | Vibe/dominoes section | sets honest expectations |

All attributed "TripAdvisor review" with link; exact usernames pending (CLIENT-TODO). Complaint "slow service" → click-to-call phone-ahead pattern; complaint "menu opacity" → daily-menu section + Instagram link.

## Design tokens (draft)

- **Color** (A5 — derived, flagged unconfirmed; deliberately not indigo/purple, not cream-serif-sage):
  - Primary: bottle-green scale around `#1D5B33` (greenies heritage; Caribbean green) — 50 `#EDF6EF` → 900 `#0C2B17`
  - Secondary: oxtail brown `#8C4A1F` tonal scale (the food itself)
  - Accent (CTAs only): scotch-bonnet orange `#E8730C` — one saturated accent, high-energy, kitchen-derived
  - Neutrals: warm, rice-cream tinted — bg `#FAF6EC`, ink `#1C1812` (domino black, hue-tinted, no pure #000)
  - Semantic: success `#2E7D43`, warning `#B97900`, error `#B3402A`, info `#2F6B8A`
- **Type** (A5 heritage-but-unpretentious): display **Bricolage Grotesque** (characterful grotesk — hand-painted-sign energy without a fake-vintage costume) + body **Source Serif 4** (warm, readable, editorial for the story). Both variable, self-hostable, subsettable. Not Inter/Geist.
- **Type scale:** 16px base, ratio 1.25 (major third): 1rem / 1.25 / 1.563 / 1.953 / 2.441 / 3.052, `clamp()` on display sizes.
- **Spacing:** 8px base unit, tokens 0.5×–12×.
- **Radius:** near-sharp — 2px cards / 4px buttons / 0 on images. A 1982 cookshop is formal-plain, not friendly-bubbly (A5); domino tiles are the shape language.
- **Elevation:** 4 layered shadows from one top-light source, warm-tinted (e.g. `0 1px 2px rgba(28,24,18,.20), 0 4px 16px rgba(28,24,18,.08)`); flat by default, shadows only on interactive lift.

### GATE B check
Sitemap ✔ · non-generic copy outline ✔ · testimonial map ✔ · SEO fix-list ✔ · brand-justified token set ✔ — all traced to audit sections.

**Gate B: PASS → Phase C.**
