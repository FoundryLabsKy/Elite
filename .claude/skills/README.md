# Claude Code Skills — Design, UX & Web

This directory contains Claude Code skills focused on **front-end design, UX
design, and website/digital design**. They are picked up automatically by
Claude Code sessions running in this repository.

Source: [anthropics/skills](https://github.com/anthropics/skills) (Anthropic's
open-source example skills), except **websitebuild**, which is this repo's
own skill.

## Installed skills

| Skill | What it's for |
|-------|---------------|
| **websitebuild** | *(this repo's own skill)* `/websitebuild [client or task]` — build or modify one of this repo's single-file client marketing sites: house architecture, honesty rules for client facts, QA checklist, and GitHub Pages deployment. |
| **frontend-design** | Distinctive, intentional visual design when building new UI or reshaping existing UI — aesthetic direction, typography, avoiding templated defaults. |
| **web-artifacts-builder** | Building elaborate multi-component web UIs with React, Tailwind CSS, and shadcn/ui (state, routing, real components). |
| **theme-factory** | Styling pages/artifacts with a theme — 10 preset color/font themes for landing pages, HTML, docs, slides, or generate a custom theme on the fly. |
| **canvas-design** | Beautiful static visual design (posters, art) as PNG/PDF using design philosophy. |
| **brand-guidelines** | Apply consistent brand colors and typography / design-system standards across artifacts. |
| **algorithmic-art** | Generative/algorithmic art with p5.js — flow fields, particle systems, seeded randomness. |
| **webapp-testing** | Interacting with and testing local web apps via Playwright — verify UI behavior, capture screenshots, view browser logs. |
| **slack-gif-creator** | Create animated GIFs optimized for Slack, with constraints and validation. |

## Using a skill

In a Claude Code session, invoke a skill by name (e.g. `/frontend-design`) or
just describe the design task — Claude will load the relevant skill
automatically based on its description.

## Updating

To refresh these to the latest versions, re-copy the corresponding folders from
a fresh clone of `https://github.com/anthropics/skills`.
