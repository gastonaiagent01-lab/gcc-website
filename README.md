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

- Full app shell: `Nav` (with Find Your Space / Give dropdowns), `Footer`, routing for all 11 pages
- **Home page fully built** from the Figma Homepage frame (hero, mission strip, 4 space cards, mission statement, New Roots spotlight, give CTA)
- Remaining 10 pages (`About`, `Medical Spaces`, `Office Space`, `Event Space`, `Church Space`, `Give`, `Services`, `New Roots`, `Contact`, `Friends of Gaston`) are placeholder stubs (`PageStub` component) with routing wired up — content/layout for each comes from that page's Figma frame in a follow-up increment
- Design tokens (colors, type) pulled directly from the Figma file's Homepage frame

## Known gaps / needs from GCC or CEO

- **GCC logo** — Figma marks it `[VECTOR LOGO — PENDING ADO-239]`; nav/footer currently show a text placeholder
- **Photography** — all photo slots are placeholder boxes; GCC is providing real images separately
- **GiveButter embed** — using a plain link placeholder; need the real embed code/URL
- **Social handles** — Instagram/Facebook/LinkedIn links not yet provided
- **GA4 measurement ID** — not yet provisioned; site sends zero analytics until it is

## Local development

```bash
npm install
npm run dev
```

## Repo / GitHub status

This code currently lives only in the local Paperclip workspace — **no GitHub repo has been created yet.** The agent environment has no `gh` CLI, no `GITHUB_TOKEN`, and no usable SSH/credential for github.com, so repo creation and push are blocked pending access. See GAS-12 comments for the specific ask.
