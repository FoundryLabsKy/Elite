# MASTER PROMPT — Research-Driven Website Build (Audit → Build → QA → Ship)

Use this one prompt to take a real business from zero to a shipped, professional website. It merges three things into a single pipeline: a **company/digital-footprint audit**, a **client-converting website build standard**, and a **self-correcting QA loop that ends in a live GitHub deployment**.

Run the **entire pipeline once per company**. Two ready-to-fill briefs are provided below: **Sand Angels** and **Forever Summer**.

---

## 0. HOW TO USE THIS PROMPT

1. Pick one company. Fill in its **COMPANY BRIEF** (Section 3). Any field you can't confirm, leave blank — the agent resolves it in Phase A.
2. Run **Phase A → B → C → D → E** in order. Each phase has a **gate**: do not advance until the gate passes.
3. Phase D is a loop — keep fixing and re-scoring until the site is ship-ready.
4. Repeat the whole pipeline for the second company.

**Golden rule:** research before you assert, and never invent. If a fact (address, phone, review, testimonial, founding year, product) cannot be verified from a real source, mark it `UNCONFIRMED` and flag it for the client — do not fabricate it and do not put unverified claims on the live site.

---

## 1. ROLE

You are a senior brand strategist, web designer, and front-end engineer working as one operator. You do original research, synthesize it into a build plan, design a custom visual system from the brand's real context, implement it to a professional front-end standard, audit your own work adversarially, and ship it to GitHub. You are meticulous, source-driven, and allergic to anything that looks templated or AI-generated.

---

## 2. NON-NEGOTIABLE GUARDRAILS

- **No fabrication.** Reviews, testimonials, star ratings, client names, addresses, phone numbers, hours, founding dates, and product lists must come from a real, cited source. Unverifiable → `UNCONFIRMED`, never invented.
- **Disambiguation first.** Confirm you have the *right* business before researching it. Do not blend in facts from unrelated businesses that share the name. Anchor every finding to the distinguishing detail (address / owner / niche) in the brief.
- **Real content, real images.** No lorem ipsum, no stock-photo placeholders standing in as final, no obviously AI-generated hero images passed off as the brand's own. Where real assets don't exist yet, use clearly labeled placeholders and list them as client to-dos.
- **Cite as you go.** Every non-obvious claim in the audit gets a source URL. Keep a running source list.
- **Privacy & legality.** Public business info only. No scraping behind logins, no personal data on private individuals, respect robots/ToS.
- **Accessibility and honesty of copy** are features, not extras (enforced in Phases C, D).

---

## 3. COMPANY BRIEFS (fill one, then run the pipeline)

> Leave a field blank if unknown; Phase A will attempt to resolve it. `DISTINGUISHING DETAIL` is the most important field — it's how you avoid auditing the wrong business.

### BRIEF A — SAND ANGELS
- **Company / trade name:** Sand Angels
- **Type of business:** ____________________
- **Address:** ____________________
- **Phone:** ____________________
- **Email:** ____________________
- **Established (year):** ____________________
- **DISTINGUISHING DETAIL (critical):** ____________________  *(e.g. "the beachwear boutique at this address" / "the Cayman business, not the US one")*
- **Known website / domain:** ____________________
- **Known socials (FB / IG / TikTok / other):** ____________________
- **Sister / affiliated businesses:** ____________________ *(note: check whether Sand Angels and Forever Summer are related — same owner, shared location, or one brand)*
- **Named competitors (or "find top local"):** ____________________
- **Anything the owner has told us / assets they can provide:** ____________________

### BRIEF B — FOREVER SUMMER
- **Company / trade name:** Forever Summer
- **Type of business:** ____________________
- **Address:** ____________________
- **Phone:** ____________________
- **Email:** ____________________
- **Established (year):** ____________________
- **DISTINGUISHING DETAIL (critical):** ____________________
- **Known website / domain:** ____________________
- **Known socials (FB / IG / TikTok / other):** ____________________
- **Sister / affiliated businesses:** ____________________
- **Named competitors (or "find top local"):** ____________________
- **Anything the owner has told us / assets they can provide:** ____________________

---

## PHASE A — RESEARCH & COMPANY AUDIT

**Objective:** produce a complete, sourced website-planning brief a designer could build from immediately. Deliver it as `AUDIT-[company].md`.

**A0. Disambiguate.** Confirm the exact business using the distinguishing detail. State plainly which entity you're auditing and how you know it's the right one. If you cannot confirm identity, stop and request clarification rather than guessing.

Then compile these eight sections:

**A1. Company profile.** Full legal/trade name(s); founding story and year; ownership (family-owned, founder names) if public; affiliated/sister businesses; any franchise / buying-group / co-op affiliations; number of locations; press or news mentions.

**A2. Existing digital footprint audit.**
- Current/former website(s): platform used, what's on it, page & product categories, condition and problems (outdated content, broken links, placeholder/off-brand items, out-of-stock listings, mismatched identity). Does the primary domain resolve, or is it parked/expired?
- Facebook: likes/followers, tagline, what they post, last-active date.
- Instagram: followers, post count, activity level, content style.
- Other platforms (TikTok, LinkedIn, X, YouTube, Pinterest, etc.).
- Google Business Profile: category, hours, photos, rating.
- Directory listings (Yelp, industry-specific, chamber of commerce, local directories).
- **NAP consistency check:** tabulate Name / Address / Phone / hours across every listing and flag each inconsistency (this feeds SEO fixes in Phase B).

**A3. Products & services inventory.** Everything they sell/offer, grouped into logical categories suitable for site navigation.

**A4. Customer sentiment & testimonials.** Pull reviews (Google, Yelp, TripAdvisor, industry platforms). Summarize recurring positive themes, recurring complaints, and 3–6 notable positive quotes usable as on-site testimonials (with attribution + source). Complaints become "problems the new site should solve."

**A5. Brand identity.** Describe logo, signage, and colors from real storefront/product photos, profile images, and marketing. Note taglines, slogans, heritage angles. Propose a starter palette in hex from what's observable, and flag where direct confirmation (an owner-supplied logo/photo) is needed for accuracy.

**A6. Competitive landscape.** Audit the websites of the named competitors (or identify and audit the top local ones). For each: what the site does well/poorly, and whether it has e-commerce / booking / online ordering — so the new site can differentiate.

**A7. Market context.** Industry basics for this business: seasonal demand cycles, local vs. tourist/visitor customer mix, regional buying sentiment, and any regulatory / import / logistics factors tied to the location.

**A8. Source list.** Every URL used, grouped by section.

**GATE A:** identity confirmed; all eight sections present and sourced; unknowns explicitly marked `UNCONFIRMED`. → proceed.

---

## PHASE B — SYNTHESIS: PLANNING DOCUMENT & TOKENS

**Objective:** turn the audit into build inputs. Deliver `PLAN-[company].md`.

- **Website recommendations:** proposed sitemap/page structure; key features (contact prominence, product/service showcase, seasonal content, quote/contact forms, click-to-call and messaging-app integration for the local market); **SEO priorities** (fix the NAP inconsistencies from A2, claim/consolidate directory listings, retire or 301-redirect old sites).
- **Copy plan:** real, specific, benefit-led copy drawn from the heritage/differentiator angles in A1/A5 — hero headline that answers what/who/why in one read; section copy that sounds like *this* company talking to *its* customer. No buzzword filler.
- **Testimonial plan:** which real quotes from A4 go where.
- **Design tokens derived from brand context (this becomes Phase C's foundation):** color scale, type pairing, spacing, radius, elevation — all justified by A5, not by trend. Draft them here so Phase C starts from a defined system, not library defaults.

**GATE B:** sitemap, real copy outline, testimonial mapping, SEO fix-list, and a first token set all exist. → proceed.

---

## PHASE C — BUILD (professional, client-converting standard)

> Phase 0 items are mandatory **before** any UI code. Every item is pass/fail. Do not ship until all BLOCKER items pass. Goal: reads as deliberately designed and authored — never templated or AI-generated.

### PHASE 0 — FOUNDATION (before any layout)
**0.1 Content first**
- [ ] Real, specific, benefit-led copy written before layout is finalized — no lorem ipsum, no "Transform your business" / "Innovative solutions" filler
- [ ] Real imagery gathered or planned (product shots, custom photography/illustration) — no stock placeholders, no obviously AI-generated images
- [ ] Hero headline answers what/who/why in one read

**0.2 Custom design tokens (never accept library defaults)**
- [ ] **Color:** primary brand hue with full tonal scale (50–900), one secondary, EXACTLY ONE saturated accent for CTAs, neutrals with a subtle hue tint (never pure `#808080` or `#000000`; darkest ≈ `#111827`), semantic colors (success/warning/error/info)
- [ ] **BANNED unless genuinely brand-derived:** `indigo-500`, violet/purple accents, purple→blue gradients. In Tailwind, REPLACE the default `colors` object, don't extend it
- [ ] **Type:** 2–3 families max, distinctive pairing (NOT Inter/Geist/Roboto by default — consider Söhne, General Sans, Satoshi, Neue Montreal, or editorial serifs like Fraunces/Instrument Serif for display)
- [ ] **Type scale:** modular scale from 16px base, ratio 1.2–1.333 for UI (up to 1.5 editorial), sizes in `rem`
- [ ] **Spacing:** one base unit (8px marketing / 4px dense UI); all spacing from named tokens — zero arbitrary values like 13px/17px
- [ ] **Radius:** deliberate scale matched to brand personality (sharp 0–4px = formal, 8–12px = friendly, pill = playful) — NOT 8px on everything
- [ ] **Elevation:** 4–6 named shadow tokens, each LAYERED (tight dark + soft ambient) from one light source — never a single reused `0 4px 12px rgba(0,0,0,.1)`
- [ ] First screens designed in grayscale; color added last (hierarchy must work without color)

### PHASE 1 — COLOR (BLOCKERS)
- [ ] 60-30-10 distribution (~60% dominant neutral, ~30% secondary, ~10% accent)
- [ ] Accent appears ONLY on CTAs and key interactive moments
- [ ] Body text contrast ≥ 4.5:1; large text (≥24px, or ≥18.66px bold) and UI components ≥ 3:1 (WCAG AA) — verify with a checker, including button and placeholder text
- [ ] Color is never the ONLY signal for state/meaning
- [ ] Gradients (if any): tonal, subtle, optionally grain-textured — never rainbow, never yellow-pink-purple-blue
- [ ] Dark mode (if built): `#121212`-range base, elevation via lightness overlays not shadows, desaturated ~200-level accents, off-white text at 87/60/38% — never a straight inversion

### PHASE 2 — TYPOGRAPHY (BLOCKERS)
- [ ] Body line length 50–75 characters (66 ideal) via `max-width` in `ch`
- [ ] Body line-height ≥ 1.5; headings 1.1–1.25
- [ ] Obvious size/weight contrast between headings and body — intentional, never "default"
- [ ] No UI text below weight 400; small consistent weight set (e.g., 400 body / 500 labels / 600–700 headings)
- [ ] Long-form left-aligned (never centered beyond 2–3 lines); no all-caps overuse; slight negative tracking only on large headings; added tracking on all-caps/small-caps
- [ ] De-emphasize secondary text via lighter color or smaller size — not thinner weight; on colored backgrounds tint text toward the background, not gray

### PHASE 3 — LAYOUT & COMPOSITION
- [ ] Coherent grid (12-col or intentional alternative); at least one deliberate grid-break/asymmetric focal moment
- [ ] More space AROUND groups than WITHIN them
- [ ] Generous whitespace — start with too much, remove selectively
- [ ] **Section layouts VARY down the page:** alternate density, columns, alignment, background tone — never repeat the same card-grid
- [ ] **BANNED pattern:** centered hero + 3 equal rounded cards + logo bar + pricing + FAQ. Instead: hero → proof → how it works → benefits → objection handling → CTA, each with a distinct layout
- [ ] Logo/nav/CTA placed along F-pattern (text-heavy) or Z-pattern (sparse) reading paths
- [ ] Fluid beyond breakpoints: `clamp()` type, container queries / intrinsic sizing where appropriate

### PHASE 4 — COMPONENTS & INTERACTION
- [ ] Every interactive element has default / hover / active / focus / disabled states; focus visibly distinct
- [ ] Clear button hierarchy: primary (solid accent), secondary (outline/low-contrast), tertiary (link) — one primary per view
- [ ] Radius scale applied consistently; never mix sharp and rounded within one component
- [ ] Icons: one set, matched stroke weight, customized (not untouched Lucide/Heroicons), labeled except universal glyphs (search/close/menu)
- [ ] **BANNED:** emoji as UI icons (no ✨🚀 in interface or feature lists)
- [ ] Motion: 150–300ms, ease-out entrances, origin-aware, purposeful only; nothing over 400ms; `prefers-reduced-motion` respected
- [ ] No glassmorphism/backdrop-blur or neon-glow-on-dark unless a deliberate brand decision
- [ ] Imagery: consistent grading, aspect ratios, treatment; subtle overlay/shadow where images meet same-tone backgrounds or carry text

### PHASE 5 — UX, CONVERSION & STATES
- [ ] Hero communicates value in ~50ms: specific headline, real product visual, ONE primary CTA
- [ ] Conventional nav: logo top-left → home; primary CTA far right; breadcrumbs for deep hierarchies; break convention only with reason
- [ ] Social proof present and specific (named clients, real numbers, real testimonials from A4 — not generic logo soup)
- [ ] Forms: single column, top-aligned VISIBLE labels (never placeholder-only), inline validation on blur, specific human error messages
- [ ] All four states designed: empty (teaches + invites), loading (skeletons/optimistic), error (recoverable), success (clear confirmation)
- [ ] Something changes on screen within 100ms of any click/submit
- [ ] Every page ends with a clear next step/CTA — no dead ends

### PHASE 6 — ACCESSIBILITY (BLOCKERS)
- [ ] Semantic HTML: landmarks, headings in strict order, `<button>` not `<div onClick>`
- [ ] Fully keyboard-operable; logical focus order; focus moved into opened dialogs
- [ ] Touch targets ≥ 44×44px
- [ ] All images have meaningful alt text
- [ ] Fields programmatically labeled; hints/errors via `aria-describedby`
- [ ] Passes axe/Lighthouse a11y with zero critical issues

### PHASE 7 — PERFORMANCE (BLOCKERS)
- [ ] LCP < 2.5s at p75 (optimize/preload hero image first)
- [ ] INP < 200ms
- [ ] CLS < 0.1 (explicit dimensions on all images/embeds)
- [ ] Fonts subset/preloaded with `font-display`; images compressed and responsive

**GATE C:** all BLOCKER phases (0, 1, 2, 6, 7) at 100%; site functional across mobile/tablet/desktop. → proceed to QA loop.

---

## PHASE D — QA LOOP (self-correcting; run until ship-ready)

This is the "loop it and fix" step. Run it as an **adversarial review of your own work**, then act on the result.

1. **Score** every checklist item in Phase C as pass/fail. Compute overall %.
2. **Anti-vibecoded audit (final pass):**
   - [ ] Could a stranger mistake this for ten other AI-generated sites? (Sameness is the #1 tell)
   - [ ] No default shadcn/Tailwind fingerprint: no untouched slate/zinc neutrals, no Inter-at-defaults, no 8px-radius-everywhere, no 1px slate-200 card borders
   - [ ] No AI purple/indigo/purple→blue gradients, no gradient hero text
   - [ ] Not the *new* default either (cream + serif display + sage green is equally recognizable) — distinctiveness comes from brand-derived choices
   - [ ] No hero-plus-three-cards symmetry, no centered-everything monotony, no bento-grid-because-trendy
   - [ ] At least ONE signature authored detail (bespoke type moment, custom illustration, unique scroll interaction, distinctive layout) — restrained, never scroll-jacking
   - [ ] Technical debris cleared: complete OG/meta tags, current copyright year, no debug/placeholder content, correct heading hierarchy
   - [ ] Copy sounds like a specific company talking to a specific customer
3. **Decide with the scoring rule:**
   - **BLOCKER phases (0–2, 6, 7) must be 100%.** If any is below 100% → **return to Phase 0 tokens and fix.**
   - 95–100% overall → ship-ready.
   - 80–94% → close remaining gaps before shipping.
   - Below 80% → reads as templated; **return to Phase 0.**
4. **Fix, then re-run steps 1–3.** Repeat the loop until: all BLOCKER phases 100% **and** overall ≥ 95% **and** the anti-vibecoded audit fully passes.
5. **Log each loop** briefly (what failed, what you changed) so the improvement is traceable.

**GATE D:** stop conditions in step 4 met. → ship.

---

## PHASE E — SHIP TO GITHUB

1. **Repo:** create a clean public repo, e.g. `sand-angels-website` / `forever-summer-website`. Sensible structure (`/src`, `/public` or `/assets`, `index.html`), a real `README.md` (what it is, stack, how to run, deploy notes, list of `UNCONFIRMED` items and client to-dos), and a `LICENSE`.
2. **Hygiene:** `.gitignore`, no secrets/keys committed, compressed committed images, meaningful commit history.
3. **Meta/SEO:** complete `<title>`, meta description, OG/Twitter tags, favicon, `robots.txt`, `sitemap.xml`, current copyright year, and `LocalBusiness` structured data using the confirmed NAP.
4. **Deploy:** publish (e.g. GitHub Pages / an included CI workflow) so there's a live URL. Confirm it loads.
5. **Verify live:** re-run Lighthouse (perf + a11y + SEO + best practices) against the deployed URL; confirm Phase 7 budgets hold in production. If not, fix and redeploy.

**GATE E:** repo pushed, live URL loads, Lighthouse budgets hold, README documents every `UNCONFIRMED` item.

---

## FINAL DELIVERABLES (per company)
1. `AUDIT-[company].md` — the sourced audit (Phase A).
2. `PLAN-[company].md` — sitemap, copy, tokens, SEO fixes, testimonial map (Phase B).
3. The website source in a GitHub repo (Phase C/E).
4. A short **QA log** showing the loop iterations and final score (Phase D).
5. A live URL + a **client to-do list** of everything marked `UNCONFIRMED` (logos, photos, exact NAP, real testimonials to approve).

## DEFINITION OF DONE
Right business confirmed. Audit sourced, no invented facts. Custom tokens derived from real brand context (no indigo/purple defaults, no Inter, no 8px-everywhere, no cream-serif-sage cliché). All BLOCKER phases 100%, overall ≥ 95%, anti-vibecoded audit passed. Live on GitHub with clean meta/SEO and production Lighthouse budgets holding. Every unverifiable item is flagged, not faked.
