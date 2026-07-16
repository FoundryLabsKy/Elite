# QA Log — Welly's Cool Spot

## Loop 1 — initial score (16 Jul 2026)

**Tooling run (local server + Lighthouse 12, headless Chromium):**
Performance **90** · Accessibility **100** · Best Practices **96** · SEO **100**
LCP **1.5s** · CLS **0** · TBT **0ms**

The BP deduction and a 20s speed-index were traced to a single cause: the sandbox's egress proxy resets requests to `fonts.googleapis.com` (`ERR_CONNECTION_RESET`). Environment artifact, not a site defect — `display=swap` + `preconnect` means the page renders instantly in fallback and swaps when fonts arrive. To be re-verified against the deployed URL in Phase E.

**Manual checklist findings (fails):**

| # | Item | Phase | Fix |
|---|---|---|---|
| 1 | Button padding `.7rem/1.4rem`, status chip `.45/.95rem` off the 8px token scale | 0.2 (BLOCKER) | moved to `.75/1.5rem` and `.5/1rem` |
| 2 | Two solid-accent primaries in first view (header + hero call buttons) | 4 | header CTA → secondary outline style |
| 3 | Hero entrance animation 500ms > 400ms cap | 4 | reduced to 350ms |
| 4 | "Today" domino tile marked by border color/width only | 1 | JS now appends "· today" text + `aria-label` |

Contrast verification (computed, WCAG relative luminance): cream `#F6F0DD` on green-900 ≈ 12.5:1 · muted on-dark `#A9B69D` on green-950 ≈ 8.1:1 · ink on cream ≈ 15:1 · ink-mute on cream ≈ 5.4:1 · accent `#E8730C` vs dark green ≈ 4.7:1 (UI ≥3 ✓) · ink on accent ≈ 5.8:1 (≥4.5 ✓). Orange never used as text on cream (would be 2.8:1 — avoided by design).

## Loop 2 — re-score after fixes

Lighthouse re-run: **Perf 90 · A11y 100 · BP 96 · SEO 100 · LCP 1.5s · CLS 0 · TBT 0ms** (unchanged; remaining deductions are the fonts-blocked-by-sandbox artifact).

Checklist: **Blockers (0, 1, 2, 6, 7): 100%.** Overall: **100%** of applicable items (n/a: dark mode not built; no forms, so form-specific and disabled-state items don't apply).

### Anti-vibecoded audit
- No shadcn/Tailwind fingerprint — hand-written CSS, warm hue-tinted neutrals, radius scale 2/4/10 tied to domino tiles ✔
- No purple/indigo, no gradient hero text; single tonal green radial only ✔
- Not the cream-serif-sage default: dark bottle-green-forward scheme derived from the sourced "greenies" heritage; slab display, not a lyrical serif ✔
- No hero-plus-three-cards; layouts alternate split/board/strip/editorial/staggered/band ✔
- Signature authored details present (see personality log) ✔
- Technical debris: OG/Twitter/canonical/JSON-LD complete, © 2026, no placeholder text, heading order h1→h2→h3 ✔
- Copy is business-specific — founder by name, the parking-lot rule, cowfoot Thursdays, greenies ✔

**Gate D: PASS** (blockers 100%, overall ≥95%, anti-vibecoded clean).

## Personality log (Phase D+)

**Anchors used (quoted from the audit):**
1. Dominoes culture — "you can enjoy watching or participating in the regular games of dominoes and social gatherings outside" (A4).
2. Founder heritage — "Welly E.K. Wellington… ran a tight ship — anyone who was a nuisance toward his customers would end up in the parking lot"; "greenies — Heineken beer" (A1, Cayman Compass).
3. Kitchen rhythm — rotating daily menu posted each morning to Instagram; "Cowfoot & Beans… a Thursday dish"; Sunday breakfast from 7am with ackee & saltfish (A2/A3).

**Signature moves:**
1. **The domino week-strip** — seven hand-built SVG domino tiles carry the real opening hours; pip counts encode the day (halves sum to the day number, doubles landing Tue/Thu/Sat), with real specials on the tiles (Thursday cowfoot, Sunday breakfast). *Swap test:* the pip arithmetic is decoration anywhere else, but here it renders the sourced yard-game culture AND this business's actual hours/specials — on any other business the tiles' content becomes false.
2. **"The pots decide the menu"** — the menu section is built around the audit's real finding that there is no fixed menu, styled as a dark menu-board with vernacular dish notes ("the one people cross town for"). *Swap test:* false on any restaurant with a printed menu; the CTA ("call and ask what's on the stove") encodes their real phone-first takeout workflow.
3. **The tight-ship story section** — timeline 1982 → 2009 → today told in the Compass's documented details (greenies, parking-lot rule, *The People Time Forgot*). *Swap test:* nothing in it survives on another business; every sentence is Welly-specific and sourced.

**Divergence from the pipeline's earlier builds in this repo:** larrys-hardware = paper cream + navy + red; craftmarket = Bricolage Grotesque + Karla on light ground. Welly's inverts to a dark bottle-green-dominant scheme, Alfa Slab One / Source Serif 4 / Archivo, near-sharp domino shape language, and a split-asymmetric hero with a pull-quote column rather than either sibling's spine. The plan's original Bricolage pick was replaced during build specifically because craftmarket already uses it.

**Blocker regression check after personality work:** Lighthouse re-run above (loop 2) — A11y 100, budgets hold, no motion over 350ms, reduced-motion respected. **No blocker regressed.**

**Gate D+: PASS.**

## Loop 3 — aesthetic polish pass (16 Jul 2026)

Requested refinement, restrained scope, no structural changes:
1. Dotted leaders on the menu board (dish → note) and echoed in the opening-hours table — classic cookshop menu-board vernacular, unifies the two "listing" moments.
2. Domino tiles get a subtle alternating static tilt (±0.5–0.6°), straightening on hover — hand-laid-on-the-table feel.
3. Hero pull-quote anchored with an oversized slab quote mark; same glyph treatment scales the testimonial section, whose first quote now leads larger.
4. Faint domino-pip watermark in the hero's upper right, tying the motif to the top of the page.
5. "Fried chicken" menu note filled ("crowd favourite" — supported by reviews) so no leader runs to an empty slot.

Verification: Lighthouse re-run — **Perf 90 · A11y 100 (zero failures) · BP 96 · SEO 100 · LCP 1.5s · CLS 0 · TBT 0ms**. No blocker regressed; all additions decorative or static, reduced-motion unaffected.
