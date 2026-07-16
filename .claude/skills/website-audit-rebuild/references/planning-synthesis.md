# Phase B — Synthesis: Planning Document & Tokens (full spec)

Goal: turn the Phase A audit into concrete build inputs. Nothing in this phase should be invented — every recommendation should trace back to something found in the audit.

## Website recommendations

- **Sitemap / page structure**, built from the products & services inventory (A3) and what worked/didn't in competitor sites (A6).
- **Key features**, chosen for a local audience: contact prominence, product/service showcase, seasonal content (from A7's demand cycles), quote/contact forms, click-to-call and messaging-app integration.
- **SEO priorities**: fix the NAP inconsistencies surfaced in A2's consistency table, note which directory listings need claiming or consolidating, and decide whether the old site should be retired or 301-redirected.

## Copy plan

Real, specific, benefit-led copy drawn from the heritage and differentiator angles found in A1 (company profile) and A5 (brand identity). The hero headline should answer *what, who, and why* in one read. Section copy should sound like this specific company talking to its specific customer — if you could swap in a competitor's name and the copy would still make sense, it's too generic and needs to go back to the audit for something more specific.

## Testimonial plan

Map the real quotes pulled in A4 to where they'll appear on the site (hero social proof, dedicated testimonials section, near relevant product/service, etc.). Address recurring complaints from A4 by naming which site feature solves them (e.g., complaints about not knowing hours → hours prominently in the header/footer and in structured data).

## Design tokens (foundation for Phase C)

Draft a first token set here, justified by what's in A5 — not by trend or library defaults. This is what lets Phase C start from a defined system instead of guessing:

- **Color:** a starter scale derived from the observed/proposed brand palette
- **Type:** a pairing that matches the brand's personality (heritage vs. modern, playful vs. formal)
- **Spacing:** a base unit
- **Radius:** a scale matched to brand personality (sharp = formal, rounded = friendly, pill = playful)
- **Elevation:** a rough shadow approach

These get refined against the full checklist in Phase C — this draft just needs to be brand-justified, not final.

## Output structure

Write `PLAN-<company>.md` with this shape:

```markdown
# Plan — [Company Name]

## Sitemap
## Key features
## SEO priorities
[NAP fixes, directory consolidation, old-site disposition]
## Copy plan
[hero headline + section-by-section direction]
## Testimonial plan
[which quote goes where, which complaint each feature addresses]
## Design tokens (draft)
[color / type / spacing / radius / elevation, each with a one-line justification tracing to the audit]
```

## Gate

Before moving to Phase C: the sitemap, a real (non-generic) copy outline, the testimonial map, the SEO fix-list, and a first token set all exist and each one traces back to something specific in the audit.
