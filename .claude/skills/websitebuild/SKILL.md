---
name: websitebuild
description: Build or modify one of this repo's single-file client marketing websites (Elite Marble & Granite, Larry's Hardware, Cayman Craft Market, or a new client). Invoke with /websitebuild [client or task], or use whenever the task is to create a new client site, add a page or feature to an existing site, or prepare a site for launch/deployment. Encodes the house architecture (self-contained hash-routed index.html, no build step), the honesty rules for client facts, and the QA + GitHub Pages deployment checklist.
---

# Website Build — Single-File Client Sites

Invoked as `/websitebuild [client or task]`. If the argument names a new
business, build a new site for it in its own folder (research the client's
real details first). If it names an existing site or a change ("add a
storm-prep page to larrys-hardware"), modify that site. With no argument,
ask what to build.

This repository is a portfolio of marketing websites for Cayman Islands
businesses. Every site is delivered the same way: **one self-contained
`index.html`** — hash-routed, multi-page, no build step, no external
JavaScript — plus a `README.md` written for the business owner. Follow these
conventions exactly so every site in the repo stays consistent and
deployable.

## Repo layout

- Root `index.html` + `README.md` — Elite Marble and Granite (the first site).
- Each additional client lives in its own kebab-case folder:
  `larrys-hardware/`, `craftmarket/`, … each containing only `index.html`
  and `README.md`.
- `.github/workflows/pages.yml` deploys sites to GitHub Pages by staging
  files into `_site/`. **When you add a new site, update this workflow**:
  add a `cp <folder>/index.html _site/<folder>/index.html` line to the
  "Stage site files" step, and add the working branch to the `on.push.branches`
  list if the site should deploy from it.

## Architecture (non-negotiable)

1. **One file.** All CSS in one `<style>` block, all JS in one `<script>`
   block, all content inline. No external JS, no frameworks, no build step.
   The only permitted network requests are images and (optionally) Google
   Fonts — and the page must remain fully usable if both fail offline.
2. **Hash routing.** Routes are `#/home`, `#/about`, etc. A `PAGES` (or
   equivalent) object maps route → `{ title, render }`; a single `render()`
   function swaps page content, updates `document.title` per route, scrolls
   to top, and runs on `hashchange` and initial load. Unknown hashes fall
   back to home.
3. **Single source of truth for facts.** Business details (name, address,
   phone, email, hours, WhatsApp, socials) live in constants at the top of
   the `<script>` (e.g. `BIZ`, `LOCATION`, `HOURS`) and every mention on
   every page reads from them. If a fact can change (a market can relocate,
   hours can shift), it must be editable in exactly one place. Anything
   dynamic (open/closed status) is computed in one function, in **Cayman
   time** (`America/Cayman`), not the visitor's timezone.
4. **Templates as functions.** Repeated UI (cards, photo blocks, icons) is
   built by small helper functions (`photo(...)`, `card(...)`), never
   copy-pasted markup.

## Honesty rules for client content

These sites are for real businesses; wrong facts cause real harm.

- Use only **researched, verifiable details** for names, addresses, phones,
  emails, hours, history, memberships, and reviews. Quote reviews verbatim
  from their real source.
- **Never invent** founders, dates, statistics, or testimonials. If a fact
  can't be verified (a founding year, a WhatsApp number, an inventory list),
  either omit it, phrase it honestly ("over two decades"), or use a clearly
  marked placeholder — and **flag it**:
  - a code comment at the definition site, and
  - a numbered item in the README's **"Confirm before launch"** section
    telling the owner exactly what to verify and where to change it.
- Placeholder imagery is either licensed photos (e.g. Wikimedia Commons)
  with a flat colour fallback layer beneath so layouts never look broken, or
  authored inline SVG art — never fake photos passed off as the client's.
  Every image must be a labeled one-for-one swap with meaningful alt text,
  with swap instructions in the README.

## SEO

Every site includes: appropriate JSON-LD (`LocalBusiness`,
`TouristAttraction`, `HardwareStore`, …) with NAP exactly matching the page
content, canonical URL, Open Graph tags, meta description, and descriptive
per-route `<title>`s set by the router.

## Design

Use the repo's design skills rather than defaults: **frontend-design** for
aesthetic direction (each client gets a distinct identity grounded in their
subject — stone, hardware, craft heritage), **theme-factory** /
**brand-guidelines** when a palette or brand system applies. Mobile-first;
the header collapses to a working menu on small screens.

## QA checklist (run before calling a site done)

Verify in a headless browser (use the **webapp-testing** skill), then record
the results in a **"Verified"** section of the site's README:

- [ ] Every route renders with the correct `<title>` and a single `<h1>`.
- [ ] Mobile: no horizontal overflow at 375px; menu opens, navigates, closes.
- [ ] No console errors; page degrades gracefully offline (fonts/images).
- [ ] Colour contrast meets WCAG AA (state the measured ratios).
- [ ] Visible focus on all interactive elements; touch targets ≥ 44px.
- [ ] `prefers-reduced-motion` disables scroll reveals/animations.
- [ ] Any live logic (open/closed status) returns correct results for
      Cayman time, including edge cases (closures, holidays).

## README template (per site)

Written for the business owner, not developers:

1. What it is (one paragraph: single file, hash-routed, host anywhere).
2. **Pages** — the route list.
3. Strategy notes if relevant (why brochure not store, what it fixes).
4. **What is real vs. what to confirm** — the flagged items, numbered.
5. **Swapping in real photography** — exact instructions.
6. Future hooks, if any (e.g. cruise-day calendar).
7. **Verified** — the QA results above.
