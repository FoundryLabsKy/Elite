# Personality Pass (run on a finished site)

A finished, checklist-passing site can still feel interchangeable with the last one this pipeline built. This pass exists to fix exactly that: it injects distinctiveness that is *load-bearing on this specific business* — so two sites this skill produces don't converge on a house style. It runs after the build is functional (post-Phase C, ideally after or alongside the Phase D loop), and nothing it adds may break a blocker.

## The one test that governs everything here

**The swap test.** For every personality move you're considering, ask: *"If I swapped in a different local business of a different kind, would this detail still fit unchanged?"*

- If **yes** → it's generic decoration, not personality. Discard it and go deeper into the audit.
- If **no** — it would become false, awkward, or nonsensical on another business → that's real personality. Keep it.

A gradient, a rounded card, a fade-in animation all pass unchanged onto any business — so none of them are personality. A tide-clock that reflects a beach shop's actual "new stock drops with the tide" rhythm does not transfer — that's personality.

## Step 1 — Mine personality anchors from THIS brand

Read `AUDIT-<company>.md` and `PLAN-<company>.md` and pull anchors that are true only of this business. Look specifically for:

- **Origin & heritage** — the real founding story, the years in business, the family, a specific milestone.
- **Literal locale texture** — the actual street, neighbor, landmark, weather, materials, or seasonal rhythm where they operate (not "coastal vibes" — *their* coast).
- **Product/service quirks** — how they actually work: "new stock weekly in limited quantities," "by appointment only," "third-generation recipe," a signature item.
- **Real voice** — phrases the business or its reviewers actually use (from A4/A5). A genuine line from a real review or the owner's own words is gold.
- **A genuine tension or contrast** — e.g. a tiny family shop sitting among luxury chains; a decades-old trade with a brand-new storefront.

If the audit is thin on anchors, that's a signal to go back and research more, not to invent a personality. Never fabricate a story to be distinctive — that violates the pipeline's golden rule.

## Step 2 — Choose 1–3 signature moves (restraint is the point)

Translate anchors into interface. Pick a **small** number — one strong signature beats five gimmicks. Options, each of which should express a specific anchor:

- **A bespoke type moment** — a headline treatment, a drop-cap, a custom ligature or wordmark animation that suits *this* brand's character.
- **A custom motif/illustration** drawn from the business — a hand-built SVG that references what they actually sell or where they are (not a stock icon, not a generic blob).
- **A brand-true micro-interaction** — tied to what they do (a "fresh catch" ticker for a fishmonger, a fabric-swatch hover for a boutique), 150–300ms, purposeful, reduced-motion respected.
- **A distinctive section rhythm** — an asymmetric or editorial layout that breaks the default stack in a way that fits the brand's tone.
- **A voice moment in copy** — a line, section heading, or empty-state message written in the business's actual voice.

## Step 3 — Diversify against the pipeline's own defaults

Because this skill may build many local-business sites, actively vary the things a run would otherwise default to, so repeated runs don't rhyme:

- Vary the **hero pattern** (don't reuse the last build's split-hero every time).
- Vary how the **accent** behaves (where the one saturated color lands).
- Vary the **section order and rhythm**, and the **shape language** (a formal barbershop and a playful ice-cream stand should not share a radius scale).

If you have access to the previous sites this pipeline built, glance at them and deliberately pick a different structural spine. Divergence is the goal.

## Step 4 — Implement without breaking a blocker

Everything added must still pass the hardcoded checklist (`references/build-checklist.md`) and the anti-vibecoded audit (`references/qa-loop.md`):

- Contrast still ≥ 4.5:1 body / ≥ 3:1 large & UI.
- All motion respects `prefers-reduced-motion` and stays ≤ 400ms.
- No emoji-as-icons, no glassmorphism/neon unless genuinely brand-derived.
- Performance budgets (LCP/INP/CLS) still hold — a custom SVG motif is fine; a heavy animation library is not.
- Touch targets ≥ 44×44px; semantic HTML intact.

## Step 5 — Re-run QA and log it

After adding personality, re-run the Phase D loop (or at minimum the blocker checks and the anti-vibecoded audit) so the new work is verified, not assumed. Then append a short **Personality log** to `QA-LOG-<company>.md`:

- Which anchors you used, quoted from the audit.
- Which signature moves you added, and — for each — one line on *why it passes the swap test* (what makes it false on any other business).
- Confirmation that no blocker regressed.

## Definition of done for this pass

At least one signature move is in place, every move passes the swap test, the site diverges structurally from the pipeline's default spine, and no blocker regressed. If nothing survives the swap test, the pass has failed — go back to the audit for more real material rather than shipping generic polish.
