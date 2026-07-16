# Phase C — Build Checklist (full spec)

Every item below is pass/fail. Phases 0, 1, 2, 6, and 7 are **BLOCKERS** — do not ship until all of them are at 100%. The goal throughout: this should read as deliberately designed and authored, never templated or AI-generated.

**Default build target:** a single self-contained HTML file — CSS in an inline `<style>` block (plain CSS custom properties, or a Tailwind CDN `<script>` with a fully replaced config if you prefer utility classes), JS in an inline `<script>` block. Everything below applies the same way whether you're using plain CSS or Tailwind-via-CDN; where a rule mentions Tailwind specifically, it's about avoiding that library's default look, not about requiring the library itself.

---

## PHASE 0 — Foundation (before any layout) — BLOCKER

**0.1 Content first**
- [ ] Real, specific, benefit-led copy written before layout is finalized — no lorem ipsum, no "Transform your business" / "Innovative solutions" filler
- [ ] Real imagery gathered or planned (product shots, custom photography/illustration) — no stock placeholders, no obviously AI-generated images
- [ ] Hero headline answers what/who/why in one read

**0.2 Custom design tokens (never accept library defaults)**
- [ ] **Color:** primary brand hue with full tonal scale (50–900), one secondary, EXACTLY ONE saturated accent for CTAs, neutrals with a subtle hue tint (never pure `#808080` or `#000000`; darkest ≈ `#111827`), semantic colors (success/warning/error/info)
- [ ] **Banned unless genuinely brand-derived:** `indigo-500`, violet/purple accents, purple→blue gradients. If using Tailwind, REPLACE the default `colors` object, don't extend it
- [ ] **Type:** 2–3 families max, distinctive pairing (not Inter/Geist/Roboto by default — consider Söhne, General Sans, Satoshi, Neue Montreal, or editorial serifs like Fraunces/Instrument Serif for display)
- [ ] **Type scale:** modular scale from 16px base, ratio 1.2–1.333 for UI (up to 1.5 editorial), sizes in `rem`
- [ ] **Spacing:** one base unit (8px marketing / 4px dense UI); all spacing from named tokens — zero arbitrary values like 13px/17px
- [ ] **Radius:** deliberate scale matched to brand personality (sharp 0–4px = formal, 8–12px = friendly, pill = playful) — not 8px on everything
- [ ] **Elevation:** 4–6 named shadow tokens, each LAYERED (tight dark + soft ambient) from one light source — never a single reused `0 4px 12px rgba(0,0,0,.1)`
- [ ] First screens designed in grayscale; color added last (hierarchy must work without color)

## PHASE 1 — Color — BLOCKER
- [ ] 60-30-10 distribution (~60% dominant neutral, ~30% secondary, ~10% accent)
- [ ] Accent appears ONLY on CTAs and key interactive moments
- [ ] Body text contrast ≥ 4.5:1; large text (≥24px, or ≥18.66px bold) and UI components ≥ 3:1 (WCAG AA) — verify with a checker, including button and placeholder text
- [ ] Color is never the ONLY signal for state/meaning
- [ ] Gradients (if any): tonal, subtle, optionally grain-textured — never rainbow, never yellow-pink-purple-blue
- [ ] Dark mode (if built): `#121212`-range base, elevation via lightness overlays not shadows, desaturated ~200-level accents, off-white text at 87/60/38% — never a straight inversion

## PHASE 2 — Typography — BLOCKER
- [ ] Body line length 50–75 characters (66 ideal) via `max-width` in `ch`
- [ ] Body line-height ≥ 1.5; headings 1.1–1.25
- [ ] Obvious size/weight contrast between headings and body — intentional, never "default"
- [ ] No UI text below weight 400; small consistent weight set (e.g., 400 body / 500 labels / 600–700 headings)
- [ ] Long-form left-aligned (never centered beyond 2–3 lines); no all-caps overuse; slight negative tracking only on large headings; added tracking on all-caps/small-caps
- [ ] De-emphasize secondary text via lighter color or smaller size — not thinner weight; on colored backgrounds tint text toward the background, not gray

## PHASE 3 — Layout & Composition
- [ ] Coherent grid (12-col or intentional alternative); at least one deliberate grid-break/asymmetric focal moment
- [ ] More space AROUND groups than WITHIN them
- [ ] Generous whitespace — start with too much, remove selectively
- [ ] Section layouts VARY down the page: alternate density, columns, alignment, background tone — never repeat the same card-grid
- [ ] **Banned pattern:** centered hero + 3 equal rounded cards + logo bar + pricing + FAQ. Instead: hero → proof → how it works → benefits → objection handling → CTA, each with a distinct layout
- [ ] Logo/nav/CTA placed along F-pattern (text-heavy) or Z-pattern (sparse) reading paths
- [ ] Fluid beyond breakpoints: `clamp()` type, container queries / intrinsic sizing where appropriate

## PHASE 4 — Components & Interaction
- [ ] Every interactive element has default / hover / active / focus / disabled states; focus visibly distinct
- [ ] Clear button hierarchy: primary (solid accent), secondary (outline/low-contrast), tertiary (link) — one primary per view
- [ ] Radius scale applied consistently; never mix sharp and rounded within one component
- [ ] Icons: one set, matched stroke weight, customized (not untouched Lucide/Heroicons), labeled except universal glyphs (search/close/menu)
- [ ] **Banned:** emoji as UI icons (no ✨🚀 in interface or feature lists)
- [ ] Motion: 150–300ms, ease-out entrances, origin-aware, purposeful only; nothing over 400ms; `prefers-reduced-motion` respected
- [ ] No glassmorphism/backdrop-blur or neon-glow-on-dark unless a deliberate brand decision
- [ ] Imagery: consistent grading, aspect ratios, treatment; subtle overlay/shadow where images meet same-tone backgrounds or carry text

## PHASE 5 — UX, Conversion & States
- [ ] Hero communicates value in ~50ms: specific headline, real product visual, ONE primary CTA
- [ ] Conventional nav: logo top-left → home; primary CTA far right; breadcrumbs for deep hierarchies; break convention only with reason
- [ ] Social proof present and specific — named clients, real numbers, real testimonials from the audit (A4), not generic logo soup
- [ ] Forms: single column, top-aligned VISIBLE labels (never placeholder-only), inline validation on blur, specific human error messages
- [ ] All four states designed: empty (teaches + invites), loading (skeletons/optimistic), error (recoverable), success (clear confirmation)
- [ ] Something changes on screen within 100ms of any click/submit
- [ ] Every page ends with a clear next step/CTA — no dead ends

## PHASE 6 — Accessibility — BLOCKER
- [ ] Semantic HTML: landmarks, headings in strict order, `<button>` not `<div onClick>`
- [ ] Fully keyboard-operable; logical focus order; focus moved into opened dialogs
- [ ] Touch targets ≥ 44×44px
- [ ] All images have meaningful alt text
- [ ] Fields programmatically labeled; hints/errors via `aria-describedby`
- [ ] Passes axe/Lighthouse a11y with zero critical issues

## PHASE 7 — Performance — BLOCKER
- [ ] LCP < 2.5s at p75 (optimize/preload hero image first)
- [ ] INP < 200ms
- [ ] CLS < 0.1 (explicit dimensions on all images/embeds)
- [ ] Fonts subset/preloaded with `font-display`; images compressed and responsive

---

## Gate

All BLOCKER phases (0, 1, 2, 6, 7) at 100%; site functional across mobile/tablet/desktop. Once this passes, move to the QA loop (`references/qa-loop.md`) — that's where phases 3, 4, and 5 get scored too, alongside the anti-vibecoded audit.
