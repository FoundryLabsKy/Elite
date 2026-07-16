---
name: website-audit-rebuild
description: Use when the user wants to audit a local business's website and online presence, then design and build an upgraded replacement site. Triggers on requests like "audit [business]'s website", "look at this business and build them something better", "redesign this site", "pull their Google reviews and rebuild the site", or any brief to take a local business from an outdated or missing web presence to a new professional website. Always run the full research → audit → plan → build → QA → ship pipeline for these requests — never skip straight to building a site without first auditing the business's real digital footprint, reviews, and brand identity. Also use for requests that are just one piece of the same pipeline, e.g. "just do the audit for now," "make me the planning doc," or "run the QA checklist on this build."
allowed-tools: Bash, Read, Write, Edit, Glob, Grep, WebSearch, WebFetch
---

# Website Audit & Rebuild (local business)

Take a real local business from an outdated or absent web presence to a shipped, professional website — grounded in real research, never invented facts. This is a research-driven pipeline, not a generic "make me a nice landing page" task: the quality bar is that a stranger could not tell it apart from a site a specialist agency spent a week on, and every fact on it traces back to a real source.

**The authoritative standard is hardcoded in `references/master-prompt.md`** — the full Audit → Build → QA → Ship master prompt, verbatim. That file is the source of truth for every gate, checklist item, and the definition of done; this SKILL.md and the other references are the working navigation over it. If anything here ever appears to conflict with the master prompt, the master prompt wins. Read it at the start of any full run.

## The pipeline

| Phase | Produces | Gate before advancing |
|---|---|---|
| A — Research & Audit | `AUDIT-<company>.md` | Identity confirmed, all 8 sections sourced, unknowns marked `UNCONFIRMED` |
| B — Synthesis & Planning | `PLAN-<company>.md` | Sitemap, real copy outline, testimonial map, SEO fix-list, first design-token set all exist |
| C — Build | The website | Blocker checklist phases (Foundation, Color, Typography, Accessibility, Performance) at 100% |
| D — QA loop | Fixes + QA log | Blockers 100%, overall ≥ 95%, anti-vibecoded audit passes |
| D+ — Personality pass | Signature moves + personality log | At least one brand-specific move that passes the "swap test"; no blocker regressed |
| E — Ship | Repo + live URL | Repo pushed, live URL loads, Lighthouse budgets hold, README documents every `UNCONFIRMED` item |

Each phase has a **gate**. Don't move to the next phase until the current one's gate passes — this is what keeps the final site from being generic or, worse, wrong about the business.

## Non-negotiable guardrails

These apply across every phase:

- **No fabrication.** Reviews, testimonials, star ratings, client names, addresses, phone numbers, hours, founding dates, and product lists must come from a real, citable source. If you can't verify something, mark it `UNCONFIRMED` and flag it for the client in the final deliverables — don't invent it and don't put it on the live site.
- **Disambiguate first.** Many small businesses share names with unrelated companies elsewhere. Before researching, confirm you have the *right* business using its distinguishing detail (exact address, owner, niche). If the user hasn't given you one, ask for it before doing any research — this is the single highest-damage failure mode in this whole pipeline.
- **Real content, real images.** No lorem ipsum, no stock photos passed off as the business's own, no obviously AI-generated hero images presented as final. Where real assets don't exist yet, use clearly labeled placeholders and list them as client to-dos.
- **Cite as you go.** Every non-obvious claim in the audit needs a source. Keep a running source list as you research; don't try to reconstruct it at the end.
- **Public info only.** Business info that's publicly available is fair game; no scraping behind logins, no personal data on private individuals.

## Working files & environment

This skill runs in Claude Code against a real working directory. Create the deliverables as real files in the project (default to a folder named after the company slug, e.g. `forever-summer/`, unless the user is already in a repo for this business):

```
<company-slug>/
  AUDIT-<company>.md
  PLAN-<company>.md
  QA-LOG-<company>.md
  CLIENT-TODO-<company>.md
  index.html            # or /src, /public for a multi-page build
```

Research tools here are `WebSearch` and `WebFetch` — there is no Google-Places or image-search tool, so Google Business Profile data, ratings, and reviews are gathered by searching for and fetching the business's Google listing and the pages that mirror it (directories, review aggregators). Use `Bash` for git and any local build/deploy steps.

## Before you start: get the company brief

Fill in what you can, and ask the user for anything critical that's missing (especially the distinguishing detail):

- Company / trade name, type of business
- Address, phone, email
- Established (year)
- **Distinguishing detail** (critical) — e.g. "the beachwear boutique at this address," "the Cayman Islands business, not the US one"
- Known website/domain, known socials
- Sister/affiliated businesses
- Named competitors, or "find the top local ones"
- Anything the owner has already provided (logo, photos, copy)

Leave fields blank if genuinely unknown — Phase A will attempt to resolve them through research, not by guessing.

## Phase A — Research & Audit

Use `WebSearch` and `WebFetch` for the business's site, socials, directory listings, Google Business Profile, review pages, press, and competitor sites. Compile eight sections: company profile, digital footprint audit (including a NAP — Name/Address/Phone — consistency check across listings), products & services inventory, customer sentiment & testimonials, brand identity, competitive landscape, market context, and a full source list.

**Read `references/audit-template.md` for the complete section-by-section spec** before writing the audit — it defines exactly what each section needs and how to handle unconfirmed facts.

Write `AUDIT-<company>.md` into the project.

## Phase B — Synthesis & Planning

Turn the audit into build inputs: a sitemap, a copy plan using the business's real differentiators (not generic buzzwords), a map of which real testimonials go where, an SEO fix-list (NAP inconsistencies, directory consolidation, old-site retirement), and a first draft of design tokens derived from the brand's actual visual context — not library defaults.

**Read `references/planning-synthesis.md` for the full structure.**

Write `PLAN-<company>.md` into the project.

## Phase C — Build

**Default output: a single, complete, self-contained `index.html`** (CSS in an inline `<style>` block, JS in an inline `<script>` block — no build step) unless the user asks for a multi-page project, in which case use a sensible `/src` + `/public` structure. If the user's project already has a framework (Next, Astro, Vite, etc.), build within it instead of dropping in a loose HTML file — check the repo first with `Glob`/`Read`.

The build checklist has ~55 pass/fail items across 8 phases. Phases 0 (Foundation/tokens), 1 (Color), 2 (Typography), 6 (Accessibility), and 7 (Performance) are **BLOCKERS** — they must hit 100% before this gate passes. The whole point of this checklist is to prevent the site from reading as templated or AI-generated; skipping it is how that happens.

**Read `references/build-checklist.md` for the complete checklist before and while building.** If a `frontend-design` skill is installed in this environment, read it too for house styling conventions.

## Phase D — QA loop

This is a self-correcting loop, not a one-time check: score every checklist item, run the anti-vibecoded audit (does this look like ten other AI-generated sites?), decide whether to ship or return to Phase 0, fix, and re-score. Repeat until blockers are 100%, overall score is ≥ 95%, and the anti-vibecoded audit fully passes. Log each loop briefly — what failed, what changed — into `QA-LOG-<company>.md`.

Because Claude Code has a real shell, run the accessibility/performance checks for real rather than eyeballing them where you can: e.g. serve the file and run Lighthouse (`npx lighthouse <url> --quiet --chrome-flags="--headless"`) or axe against it, and record the actual numbers in the QA log. Only fall back to a manual read when the tooling genuinely can't be installed.

**Read `references/qa-loop.md` for the full scoring rubric and the anti-vibecoded checklist.**

## Phase D+ — Personality pass

Once the site passes QA it's correct, but it can still feel interchangeable with the last site this pipeline built. This pass injects distinctiveness that is *load-bearing on this specific business* — so two sites the pipeline produces don't converge on a house style. The governing rule is the **swap test**: any personality move that would fit unchanged on a different local business is generic and gets thrown out; keep only moves that would become false or nonsensical on any other business. Add 1–3 restrained signature moves drawn from real anchors in the audit (heritage, literal locale, product quirks, genuine voice), vary the structural spine away from the pipeline's defaults, break no blocker, then re-verify and log what you added and why each move is brand-specific.

This is also exposed as a standalone Claude Code slash command, **`/personality <path-to-site>`**, so it can be run on any finished site on demand.

**Read `references/personality-pass.md` for the full method.**

## Phase E — Ship to GitHub

In Claude Code this is the default finish, not an optional extra — you have git and a shell, so take it all the way to a live URL. Initialize the repo, add a real `README.md` (what it is, stack, how to run, deploy notes, and the full `UNCONFIRMED`/client-to-do list) and a `LICENSE`, keep hygiene tight (`.gitignore`, no committed secrets, compressed images, meaningful commits), complete the meta/SEO (title, description, OG/Twitter, favicon, `robots.txt`, `sitemap.xml`, current copyright year, and `LocalBusiness` JSON-LD using the *confirmed* NAP), then deploy (e.g. GitHub Pages or an included CI workflow) and confirm the live URL loads. Re-run Lighthouse against the deployed URL and confirm the Phase 7 budgets still hold in production; fix and redeploy if not.

**Read `references/deliverables-and-shipping.md` for the full repo/deploy/verify spec and the JSON-LD template.**

If the user hasn't authenticated git/GitHub or is working offline, don't silently drop shipping from the standard: complete everything up to the deploy, commit it locally, and leave the push/deploy/live-Lighthouse steps documented in the README as the client's clearly-listed next step.

## Final deliverables (recap)

1. `AUDIT-<company>.md` — sourced audit
2. `PLAN-<company>.md` — sitemap, copy, tokens, SEO fixes, testimonial map
3. The website source in a git repo
4. `QA-LOG-<company>.md` — loop iterations, final score, and the personality log
5. `CLIENT-TODO-<company>.md` — every `UNCONFIRMED` item, plus a live URL

## Definition of done

Right business confirmed. Audit sourced, nothing invented. Design tokens derived from real brand context — no indigo/purple defaults, no Inter, no 8px-radius-everywhere, no cream-serif-sage cliché. All blocker phases 100%, overall ≥ 95%, anti-vibecoded audit passed. Live on GitHub with clean meta/SEO and production Lighthouse budgets holding. Every unverifiable item flagged, never faked.
