---
description: Build a polished HTML slideshow that pitches the website in this repo — what it is, what changed and why, new features, and before/after.
argument-hint: [optional focus, e.g. "client: Acme" or "emphasize the mobile redesign"]
allowed-tools: Read, Write, Edit, Glob, Grep, Bash(git log:*), Bash(git diff:*), Bash(git status:*), Bash(git branch:*), Bash(ls:*), Bash(find:*)
---

# /pitch — Build a website pitch deck

You are creating a **self-contained HTML slideshow** that pitches the website in this
repository to a client or stakeholder. The deck lives in this same repo so it ships and
versions alongside the site.

Optional focus from the user: **$ARGUMENTS**
(If empty, pitch the whole site. If provided, weight the deck toward that focus.)

## Context (auto-collected)
- Repo status: !`git status --short`
- Recent history: !`git log --oneline -20`
- Current branch: !`git branch --show-current`

## Step 1 — Understand the site
Explore the repo to understand what the website is and what was built or changed:
- Read the README, `package.json` / config, and the main pages/components.
- Identify the site's purpose, audience, and primary pages or flows.
- Use the git history above (and `git diff` on the meaningful changes) to reconstruct
  **what changed and why** — this is the raw material for the "what we did" and
  "before/after" sections.
- If there's an older version to compare against (a previous commit, an `old/` or
  `legacy/` folder, or a deployed URL noted in the repo), treat that as the "before".

Ask me at most ONE clarifying question, and only if you genuinely can't tell what the site
is or who it's being pitched to. Otherwise proceed.

## Step 2 — Plan the deck
Draft a short slide outline covering, at minimum:
1. **Title / hero** — the site name and a one-line tagline ("The new ___").
2. **Overview** — what the site is, who it's for, the core goal.
3. **What we did & why** — the key decisions, one idea per slide, each with a short
   rationale (the *why*, not just the *what*).
4. **New features** — highlight the standout features, each with a crisp line on its value.
5. **Before / after** — visual comparisons of old vs new. Use real screenshots if they
   exist in the repo; otherwise embed live views with side-by-side `<iframe>`s, or leave
   clearly-labeled image placeholders (`before-1.png` / `after-1.png`) I can drop
   screenshots into.
6. **Closing** — a short recap and a call to action / next steps.

## Step 3 — Build it
Create ONE self-contained file at `pitch/index.html` (create the `pitch/` folder if needed).
Requirements:
- **Single file**: all CSS and JS inline. No build step, no dependencies except web fonts
  if you want them. It must open by double-clicking the file.
- **Navigation**: full-screen slides; left/right arrow keys and on-screen prev/next
  buttons; a slide counter (e.g. "3 / 9"); press `f` to toggle fullscreen.
- **Design**: clean, modern, confident, presentation-grade. Generous whitespace, strong
  type hierarchy, one accent color. Pull the site's own brand colors/fonts if you can find
  them so the deck feels on-brand. One clear idea per slide — no clutter.
- **Responsive** enough to present from a laptop or share as a link.
- Keep copy tight and benefit-focused — this is a pitch, not documentation.

## Step 4 — Wrap up
- Tell me the path to the deck and how to open it.
- List any screenshot placeholders I still need to fill in.
- Offer to tweak tone, length, or specific slides.

Do not commit or push anything. Just build the deck and report back.
