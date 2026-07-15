# Elite Marble and Granite, website

A complete, production grade, multi page marketing website for Elite Marble and
Granite Ltd. of George Town, Grand Cayman, delivered as a single self contained
`index.html` file. Hash routed, no build step, no external JavaScript.

Open `index.html` in any modern browser, or host it on any static host
(GitHub Pages, Netlify, S3, or a plain web server).

## Pages

Home, Materials (filterable slab library), Services, Projects, About, Contact.
Routes are hash based: `#/home`, `#/materials`, `#/services`, `#/projects`,
`#/about`, `#/contact`.

## What is real vs. what to confirm

Everything on the site uses Elite's real, researched details: address, phone,
both email addresses, opening hours, the tagline, the published review fragment,
the six community organisations, and the real service and material lines.

Three items are flagged for the owner to confirm before launch:

1. **7,000+ countertops installed.** Shown on the home fact band and About table.
2. **7 day typical turnaround from template.** Shown on the home fact band, the
   process step, and the About table.
3. **Slab library trade names and origins** (Materials page). The 15 slab cards
   use illustrative trade names and origin lines over geologic reference photos.
   Replace them with Elite's real current inventory. This is marked in a code
   comment above the `SLABS` array.

Project captions on the Projects page and the featured band are illustrative
examples of the kind of work Elite does. Replace with real project details.
These are marked in a code comment.

## Swapping in Elite's own photography

Every image is a labeled, one for one swap. Photos currently load from Wikimedia
Commons as licensed placeholders, and each has a flat stone coloured fallback
layer beneath it so the layout never looks broken while an image loads or if a
link fails.

To use Elite's own photos:

1. Put the photo files somewhere the site can reach them (same folder, an
   `images/` folder, or a hosting URL).
2. In `index.html`, find the image you want to replace. Slab images live in the
   `SLABS` array (each has a `file:` value). Page images (hero, kitchen, quarry,
   featured project, project cards) are built with the `photo(...)` helper and
   are easy to find by their `alt` text.
3. Replace the Wikimedia URL with your own. If you keep photos in an `images/`
   folder next to `index.html`, the simplest change is to swap the whole `src`
   for a local path, for example `images/kitchen-island.jpg`.
4. Update the `alt` text to describe the real photo, and update the caption or
   fallback label if the subject changed.

The `img()` helper at the top of the script builds the Wikimedia URL. If you
move to local or hosted files, you can point `IMGBASE` at your own base URL, or
replace individual `file:`/`src` values.

The footer photography credit line should stay while Wikimedia images are in
use; remove it once every image is Elite's own.

## The quote form

The Contact form and every "Request a free consultation" and "Get a free quote"
button funnel to one goal: a quote request. On submit the form validates inline
(Name and Email required, Phone and Message optional, Project type required) and
then opens the visitor's own email app with a prefilled message addressed to
`Paul@Elite.ky`. Nothing sends until the visitor presses send in their mail app.

If you later want submissions to post directly to a server or an email service
instead of opening the visitor's mail app, replace the `mailto:` step in
`mountForm()` with a `fetch()` to your endpoint.

## Accessibility and quality

Verified in a headless browser: all six routes render, the materials filters
return the correct counts, the form validates and composes its mailto, the
mobile menu works with zero horizontal overflow, the above the fold anatomy is
complete at 1440x900, every colour pair meets WCAG AA (body text and dark
surfaces target 7:1), the featured photo scrim keeps white text at 7:1 even over
a worst case bright image, reduced motion and 200% zoom are respected, and an
axe accessibility scan reports zero critical or serious issues. Every image has
alt text and a fallback layer.
