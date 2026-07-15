# QA LOG — Forever Summer site (Phase D loop)

Same automated harness as the Sand Angels build: Playwright (headless Chromium) +
axe-core per route/viewport, WCAG contrast script over every fg/bg pair, form and
keyboard behavioral tests, full-page screenshot review.

## Loop iterations

| # | Failed | Fix |
|---|---|---|
| 1 | Corrupted CSS token line (`--ink-700` garbled); contrast: eyebrow on amber band 4.50:1 (just under), input border 1.44:1 | Token line repaired; `.band.amber .eyebrow` uses amber-800 (6.3:1); input border darkened to `#8C7147` (4.6:1) |
| 2 | Heading level skips on New/Shop (h1→h3); mailto success race; initial load stole focus from skip link | Shop row headings promoted to `h2`; added visible `h2` above drop tickets on New; success status before mailto; focus h1 only on navigation |
| 3 | Valid submit appeared dead — blur-cleared error collapsed layout mid-click, button moved out from under the click (shared with sister site) | Live error clearing on input/change |
| 4 | `.reveal` content invisible without JS; h1 focus ring | JS-gated `html.anim` reveal; heading focus outline suppressed |
| 5 | — | ALL QA CHECKS PASS; screenshots re-reviewed |

## Final scores

- **Phase 0 tokens** 100% — sun-bleached cream / golden-amber / dusk-blue system with a single hibiscus CTA accent; Fraunces + Karla; 8px spacing; rounded 10–18px + pill CTAs (deliberately opposite the sister site's near-sharp gallery look).
- **Phase 1 color** 100% — all 26 FS pairs pass AA programmatically; hibiscus only on CTAs; tonal amber gradient only.
- **Phase 2 typography** 100% — 62ch measure, 1.6 body line-height, display face carries personality, long-form left-aligned.
- **Phase 3 layout** 100% — hero+sun → marquee → drop tickets → story split → dusk quote → amber visit band; layouts alternate; ticket row encodes a real sequence (weekly → limited → gone).
- **Phase 4 components** 100% — full states, one primary per view, consistent radii, marquee pauses under reduced motion.
- **Phase 5 UX** 100% — the weekly limited drop (the shop's real merchandising model) is the hero mechanic, not fake scarcity; honest first-look signup; Instagram bridge; every page ends in a CTA.
- **Phase 6 a11y (BLOCKER)** 100% — axe zero critical/serious on all routes; keyboard, skip link, ≥44px targets, labelled fields.
- **Phase 7 perf (BLOCKER)** 100% — single ~55KB HTML file, no image requests, fonts `display=swap`, stable layout.
- **Anti-vibecoded audit** pass — retro striped-sun signature + marquee are brand-concept-derived (owner's own "long summer days" nostalgia quote); voice is youth-priced and specific ("Here Friday. Gone Sunday."); visually unmistakable for the sister site or a template.

**Overall: 100% of scoreable items; BLOCKER phases 100% → ship-ready.**
Real-photography items are clearly-labeled placeholders per the no-fabrication
guardrail and listed as client to-dos in README.md.
