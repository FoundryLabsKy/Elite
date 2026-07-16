# Phase E — Ship to GitHub

In Claude Code this is the default finish of the pipeline — you have git and a shell, so take the build all the way to a live, verified URL. Only fall back to a local-commit-only handoff if git/GitHub isn't authenticated or the environment is offline; in that case complete everything up to the push, commit locally, and document the remaining push/deploy/live-Lighthouse steps in the README as the client's clearly-listed next step rather than dropping them from the standard.

## 1. Repo

Create a clean repo, e.g. `[company-slug]-website`. Sensible structure (`/src`, `/public` or `/assets`, `index.html`), a real `README.md` covering what it is, the stack, how to run it, deploy notes, and a list of every `UNCONFIRMED` item and client to-do, plus a `LICENSE`.

## 2. Hygiene

`.gitignore`, no secrets or keys committed, compressed committed images, a meaningful commit history (not one giant commit).

## 3. Meta/SEO

Complete `<title>`, meta description, OG/Twitter tags, favicon, `robots.txt`, `sitemap.xml`, current copyright year, and `LocalBusiness` structured data using the confirmed NAP from the audit.

## 4. Deploy

Publish (e.g. GitHub Pages, or an included CI workflow) so there's a live URL. Confirm it actually loads before telling the user it's done.

## 5. Verify live

Re-run Lighthouse (performance + accessibility + SEO + best practices) against the *deployed* URL, not just the local build — confirm the Phase 7 performance budgets still hold in production. If not, fix and redeploy.

## Gate

Repo pushed, live URL loads, Lighthouse budgets hold, README documents every `UNCONFIRMED` item.

---

## Structured data reference

Whether shipping single-file or multi-page, embed `LocalBusiness` JSON-LD using only confirmed facts from the audit (never `UNCONFIRMED` placeholders):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "[confirmed trade name]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[confirmed]",
    "addressLocality": "[confirmed]",
    "addressRegion": "[confirmed]",
    "postalCode": "[confirmed]"
  },
  "telephone": "[confirmed]",
  "url": "[site url]",
  "openingHours": "[confirmed]"
}
</script>
```
