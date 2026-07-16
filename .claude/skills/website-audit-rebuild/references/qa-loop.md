# Phase D — QA Loop (full spec)

This is a self-correcting loop: an adversarial review of your own work, run until the site is genuinely ship-ready — not a single pass/fail check.

## The loop

1. **Score** every checklist item from `references/build-checklist.md` (all 8 phases, not just the blockers) as pass/fail. Compute an overall percentage.
2. **Run the anti-vibecoded audit** (below) as a final pass.
3. **Decide with the scoring rule:**
   - **Blocker phases (0, 1, 2, 6, 7) must be 100%.** If any is below 100% → return to Phase 0 tokens and fix. Don't patch around a failing blocker with a non-blocker change.
   - 95–100% overall → ship-ready.
   - 80–94% → close the remaining gaps before shipping.
   - Below 80% → this reads as templated; return to Phase 0 rather than trying to polish it forward.
4. **Fix, then re-run steps 1–3.** Repeat until: all blocker phases are 100% **and** overall is ≥ 95% **and** the anti-vibecoded audit fully passes.
5. **Log each loop** briefly — what failed, what you changed — so the improvement is traceable. This log becomes part of the final deliverables.

## Anti-vibecoded audit

The question underneath all of these: could a stranger mistake this for ten other AI-generated sites? Sameness is the number one tell, and it usually comes from unexamined defaults rather than any single bad choice.

- [ ] No default shadcn/Tailwind fingerprint: no untouched slate/zinc neutrals, no Inter-at-defaults, no 8px-radius-everywhere, no 1px slate-200 card borders
- [ ] No AI purple/indigo/purple→blue gradients, no gradient hero text
- [ ] Not the *new* default either — cream + serif display + sage green is just as recognizable as the old defaults by now. Distinctiveness has to come from choices actually derived from this brand (Phase A/B), not from swapping one trend for another
- [ ] No hero-plus-three-cards symmetry, no centered-everything monotony, no bento-grid-because-trendy
- [ ] At least ONE signature authored detail — a bespoke type moment, a custom illustration, a distinctive layout choice — restrained, never scroll-jacking or gimmicky
- [ ] Technical debris cleared: complete OG/meta tags, current copyright year, no debug or placeholder content left in, correct heading hierarchy
- [ ] Copy sounds like this specific company talking to its specific customer, not a generic business in this category

## Gate

Blockers 100%, overall ≥ 95%, anti-vibecoded audit fully passed. Once this holds, move to Phase E and read `references/deliverables-and-shipping.md` — in Claude Code, shipping to GitHub with a live, Lighthouse-verified URL is the default finish for every build, single-file or multi-page, not just multi-page ones.
