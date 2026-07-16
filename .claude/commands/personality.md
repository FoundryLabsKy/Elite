---
description: Inject brand-specific personality into a finished site so it diverges from every other site this pipeline builds
argument-hint: [path to the finished site, e.g. forever-summer/index.html]
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

Run a **personality pass** on the finished website at: $ARGUMENTS

(If no path was given, find the most recently built site in the working directory with `Glob` — look for an `index.html` alongside an `AUDIT-*.md` — and confirm which one you're working on before editing.)

The site already passes the build checklist. Your job now is the thing a checklist can't guarantee: make it feel like *this* business and unmistakably not like the last site this pipeline produced. Follow `references/personality-pass.md` in the `website-audit-rebuild` skill if it's installed; the method in short:

1. **Mine anchors.** Read the matching `AUDIT-<company>.md` and `PLAN-<company>.md` and pull details true *only* of this business — its real origin/heritage, its literal locale (the actual street, neighbor, weather, seasonal rhythm), its product quirks, and its genuine voice from real reviews. Do not invent anything; if the audit is thin, say so rather than fabricating a story.

2. **Apply the swap test to every idea.** Ask: "would this same detail fit unchanged on a different local business?" If yes, it's generic — throw it out. Keep only moves that would become false or nonsensical on any other business. This test is the whole point of the command.

3. **Add 1–3 signature moves** that express those anchors — a bespoke type moment, a custom hand-built SVG motif tied to what they actually sell or where they are, a brand-true micro-interaction, a distinctive section rhythm, or a real voice moment in the copy. Restraint wins: one strong signature beats five gimmicks. Nothing scroll-jacking.

4. **Diverge from the pipeline's defaults.** Vary the hero pattern, where the accent lands, the section rhythm, and the shape language away from whatever a default build would produce. If other sites from this pipeline are around, glance at them and deliberately pick a different structural spine.

5. **Break no blocker.** Everything you add must still pass the hardcoded checklist: contrast ≥ 4.5:1 body / ≥ 3:1 large & UI, all motion ≤ 400ms and respecting `prefers-reduced-motion`, no emoji-as-icons, performance budgets (LCP/INP/CLS) intact, touch targets ≥ 44×44px, semantic HTML preserved. A custom SVG is fine; a heavy animation dependency is not.

6. **Verify and log.** Re-run the blocker checks and the anti-vibecoded audit (serve the file and run Lighthouse/axe if available). Then append a short **Personality log** to `QA-LOG-<company>.md`: which anchors you used (quoted from the audit), each signature move added with one line on why it passes the swap test, and confirmation that no blocker regressed.

If nothing you tried survives the swap test, the pass has failed — go back to the audit for more real material instead of shipping generic polish. Report what you added, why each move is specific to this business and no other, and the before/after on any metric you re-ran.
