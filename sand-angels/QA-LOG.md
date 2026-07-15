# QA LOG — Sand Angels site (Phase D loop)

Automated harness: Node + Playwright (headless Chromium) + axe-core, plus a WCAG
contrast script covering every fg/bg pair used. Checks per route (6 routes × 2
viewports): section renders, h1 present, title updates, strict heading order, no
horizontal overflow @1440/@375, axe zero critical/serious, form validation (empty +
valid submit), mailto compose, skip link first tab stop, mobile menu + aria-expanded,
touch targets ≥44px, full-page screenshots reviewed visually.

## Loop iterations

| # | Failed | Fix |
|---|---|---|
| 1 | Contrast: input border 1.82:1 (needs 3:1 UI) | Darkened input border to `#82755A` (4.2:1) |
| 2 | Heading level skips on Swim/Collections (h1→h3); mailto success race; initial load stole focus so first Tab missed the skip link | Category headings promoted to `h2` (h3-sized); success status shown before mailto compose; h1 focus only on in-app navigation, not initial load |
| 3 | Valid form submit appeared dead: clearing a field error on blur collapsed layout mid-click, so the click missed the moved button (real UX bug, found via event instrumentation) | Errors now clear live on input/change so layout settles before the user reaches the button; blur only adds errors |
| 4 | Visual review: below-fold `.reveal` content invisible without JS/IO (no-JS, print); focus ring drawn on programmatically focused h1 | Scroll-reveal made opt-in via `html.anim` set by JS only when motion allowed; `h1[tabindex="-1"]:focus{outline:none}` |
| 5 | — | ALL QA CHECKS PASS; screenshots re-reviewed |

## Final scores

- **Phase 0 tokens** 100% — custom warm-sand/sea-glass/coral system, Cormorant Garamond + Archivo, 8px spacing, 2–6px radii, layered shadows. No indigo/purple, no Inter, no default Tailwind/shadcn fingerprint.
- **Phase 1 color** 100% — 60-30-10 held; coral on CTAs only; all 27 SA pairs pass AA (verified programmatically); no color-only meaning; no gradients beyond tonal panel art.
- **Phase 2 typography** 100% — 62ch measure, body 1.6 / headings ≤1.25, weights 400/500/600/700, long-form left-aligned.
- **Phase 3 layout** 100% — section layouts vary (fact strip → editorial split → numbered teal band → pull quote → family strip → reversed split); banned hero+3-cards pattern avoided.
- **Phase 4 components** 100% — full state set, one primary CTA per view, consistent radii, no emoji icons, motion 150–300ms + reduced-motion.
- **Phase 5 UX** 100% — specific hero, conventional nav, real Google-review quotes, visible labels + inline human errors, <100ms feedback, every page ends in a CTA.
- **Phase 6 a11y (BLOCKER)** 100% — axe zero critical/serious on all routes; keyboard operable; skip link; ≥44px targets; labelled fields with `aria-describedby`.
- **Phase 7 perf (BLOCKER)** 100% — single ~60KB HTML file, no image requests (SVG/CSS art), fonts preconnected with `display=swap`, explicit min-heights prevent CLS.
- **Anti-vibecoded audit** pass — brand-derived motif (wing-wave; staff are literally "the Angels"), vanity number 945-SAND surfaced, no template symmetry; distinct from its sister site. Noted risk: warm-neutral + serif display is a known AI-adjacent look — mitigated by sea-glass/coral palette (not sage), typographic brand-index page, and content no template has (reserve-and-try, delivery zone, fit specialty).

**Overall: 100% of scoreable items; BLOCKER phases 100% → ship-ready.**
Real-photography items are intentionally clearly-labeled placeholders per the
no-fabrication guardrail and are listed as client to-dos in README.md.
