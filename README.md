# gcc-website

Custom React rebuild of gastonchristianctr.org, replacing the current Squarespace site. Built from the approved Figma design (file `Tc94Yxi9ntKuoOPJ7ClAPF`, "GCC · 03 — Pages · Desktop").

Tracked in Paperclip issue **GAS-12**.

## Stack (confirmed by CEO 2026-08-07)

- **Framework:** Plain React + Vite (no Next.js, no CMS) — "fully custom React website"
- **Routing:** `react-router-dom`
- **Styling:** Plain CSS with design tokens (`src/styles/tokens.css`), no CSS framework
- **Hosting:** Vercel
- **Analytics:** GA4, gated behind `VITE_GA_MEASUREMENT_ID` env var — inactive until GCC provides a real measurement ID
- **Forms/integrations:** GiveButter only for now (existing embed/link carried forward — real embed URL still needed from GCC)
- **DNS:** Currently managed via Squarespace; GCC will need to export/grant access at launch — not needed for development
- **Staging:** Vercel PR preview URLs + before/after screenshots on every PR

## What's built (v1)

All 11 pages are built from their Figma frames and routed: `Home`, `About`, `Medical Spaces`,
`Office Space`, `Event Space`, `Church Space`, `Give`, `Services`, `New Roots`, `Contact`,
`Friends of Gaston`. Full app shell (`Nav` with Find Your Space / Give dropdowns, `Footer`).

- The four "Find Your Space" detail pages (Medical/Office/Event/Church) share a
  `SpaceDetailPage` template component (`src/components/SpaceDetailPage.jsx`) driven by
  per-page content in `src/pages/spaceContent.js`, since their Figma layouts are identical
  (hero → gallery → feature grid → amenities → CTA).
- Content for every page was pulled directly from Figma file 03 (`Tc94Yxi9ntKuoOPJ7ClAPF`),
  including the `[COPY NEEDED]` / `[CONFIRM]` placeholder tags the design already carries for
  facts GCC/CEO hasn't confirmed yet (e.g. Services page structure — Q31 — and New Roots
  program list — Q29 — are still open CEO-level decisions per the design file's audit trail).
  Those tags are intentionally left visible in the rendered copy, not filled in.
- Contact page has a real form UI, but submission isn't wired to email/a backend yet — picking
  a form service is a vendor/cost decision that needs CEO sign-off first.
- Design tokens (colors, type) pulled directly from the Figma file's Homepage frame.

## Known gaps / needs from GCC or CEO

- **GCC logo** — Figma marks it `[VECTOR LOGO — PENDING ADO-239]`; nav/footer currently show a text placeholder
- **Photography** — all photo slots are placeholder boxes; GCC is providing real images separately
- **GiveButter embed** — account ID (`OvV8eRSSJod8OvPn`) is confirmed in the design, but the real embed snippet/script still needs to come from GiveButter/GCC before the Give and Friends of Gaston donate buttons are live
- **Contact form backend** — UI-only right now; needs a submission method (email service, serverless function, etc.) — flagging as a vendor/cost decision, not building until CEO approves
- **Social handles** — Instagram/Facebook/LinkedIn links not yet provided
- **GA4 measurement ID** — not yet provisioned; site sends zero analytics until it is
- **Services (Q31) and New Roots (Q29) copy** — structural/content decisions still open with GCC; placeholders are intentional, not bugs

## Local development

```bash
npm install
npm run dev
```

## Repo / GitHub status

This code currently lives only in the local Paperclip workspace — **no GitHub repo has been created yet.** The agent environment has no `gh` CLI, no `GITHUB_TOKEN`, and no usable SSH/credential for github.com, so repo creation and push are blocked pending access. See GAS-12 comments for the specific ask.
