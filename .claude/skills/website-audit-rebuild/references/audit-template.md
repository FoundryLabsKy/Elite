# Phase A — Research & Audit (full spec)

Goal: produce a complete, sourced website-planning brief that a designer could build from immediately, without needing to go verify anything themselves.

## A0. Disambiguate first

State plainly which business you're auditing and how you know it's the right one, using the distinguishing detail from the company brief (exact address, owner name, niche, "the Cayman Islands one not the US one," etc.). If two businesses share a name and you can't tell them apart from the brief, stop and ask the user for clarification rather than guessing or blending facts from both. This check comes before any other research — getting the wrong business poisons everything downstream.

## Tools to use

- `WebSearch` / `WebFetch` — the business's current or former website, social media pages, press mentions, directory listings, competitor sites, and its Google Business Profile / review pages. This is your primary and only research toolset here.
- **Google Business Profile data** (category, hours, address, rating, reviews) — there's no Places tool in Claude Code, so search for the business's Google listing directly and fetch it, plus any third-party pages that mirror the same reviews (directories, TripAdvisor, review aggregators). Cross-check the star rating and hours across at least two independent sources rather than trusting one.
- **Brand/visual reference** — there's no image-search tool either. Describe the logo, signage, and colors from the business's own site and social profile images by fetching those pages; where you can't observe a color directly, mark the proposed palette `UNCONFIRMED` and request the owner's logo file rather than guessing.

Search each platform separately rather than combining them into one query; a combined search returns shallow results for everything. Budget enough searches to actually cover all eight sections below — this phase is usually the most search-intensive part of the whole pipeline.

## The eight sections

### A1. Company profile
Full legal/trade name(s); founding story and year; ownership (family-owned, founder names) if public; affiliated/sister businesses; franchise, buying-group, or co-op affiliations; number of locations; press or news mentions.

### A2. Existing digital footprint audit
- **Current/former website(s):** platform used, what's on it, page/product categories, condition and problems (outdated content, broken links, placeholder or off-brand items, out-of-stock listings, mismatched identity). Does the primary domain resolve, or is it parked/expired?
- **Facebook:** likes/followers, tagline, what they post, last-active date.
- **Instagram:** followers, post count, activity level, content style.
- **Other platforms:** TikTok, LinkedIn, X, YouTube, Pinterest, etc.
- **Google Business Profile:** category, hours, photos, rating.
- **Directory listings:** Yelp, industry-specific directories, chamber of commerce, local directories.
- **NAP consistency check:** tabulate Name / Address / Phone / hours across every listing found and flag each inconsistency. This table feeds the SEO fix-list in Phase B directly, so make it literal and complete rather than a summary.

### A3. Products & services inventory
Everything they sell or offer, grouped into logical categories suitable for site navigation — this becomes the sitemap's backbone in Phase B.

### A4. Customer sentiment & testimonials
Pull reviews from Google, Yelp, TripAdvisor, and any industry-specific platforms. Summarize recurring positive themes, recurring complaints, and pull 3–6 notable positive quotes usable as on-site testimonials — each with attribution and source. Recurring complaints become "problems the new site should solve" (e.g., if people complain about not knowing hours or not being able to book online, that's a Phase B feature requirement).

### A5. Brand identity
Describe the logo, signage, and colors as observed from real storefront/product photos, profile images, and marketing materials. Note taglines, slogans, and heritage angles. Propose a starter palette in hex codes based on what's actually observable, and explicitly flag where direct confirmation (an owner-supplied logo or photo) is needed for accuracy — don't present a guessed palette as confirmed.

### A6. Competitive landscape
Audit the named competitors, or identify and audit the top local ones if none were named. For each: what the site does well, what it does poorly, and whether it has e-commerce/booking/online ordering — this is what lets the new site differentiate rather than just look nicer.

### A7. Market context
Industry basics relevant to this business: seasonal demand cycles, local vs. tourist/visitor customer mix, regional buying sentiment, and any regulatory or import/logistics factors tied to the location.

### A8. Source list
Every URL used, grouped by section. Keep this running as you go rather than reconstructing it at the end.

## Output structure

Write `AUDIT-<company>.md` with this shape:

```markdown
# Audit — [Company Name]

## Identity confirmation
[which business, and how you know — A0]

## 1. Company profile
## 2. Existing digital footprint audit
[include the NAP consistency table here]
## 3. Products & services inventory
## 4. Customer sentiment & testimonials
## 5. Brand identity
[include the proposed hex palette, flagged as unconfirmed if not owner-verified]
## 6. Competitive landscape
## 7. Market context
## 8. Sources
```

## Gate

Before moving to Phase B: identity is confirmed, all eight sections are present and sourced, and every unknown is explicitly marked `UNCONFIRMED` rather than left ambiguous or silently filled in.
