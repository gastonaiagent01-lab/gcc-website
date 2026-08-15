# gcc-website

Custom React rebuild of gastonchristianctr.org, replacing the current Squarespace site. Built from the approved Figma design (file `Tc94Yxi9ntKuoOPJ7ClAPF`, "GCC · 03 — Pages · Desktop").

Tracked in Paperclip issue **GAS-12**.

## Stack (confirmed by CEO 2026-08-07)

- **Framework:** Plain React + Vite (no Next.js, no CMS) — "fully custom React website"
- **Routing:** `react-router-dom`
- **Styling:** Plain CSS with design tokens (`src/styles/tokens.css`), no CSS framework
- **Hosting:** Vercel
- **Analytics:** GA4, gated behind `VITE_GA_MEASUREMENT_ID` env var — inactive until GCC provides a real measurement ID
- **Forms/integrations:** GiveButter (donations) + Contact form submission via Resend (`api/contact.js`, tracked in GAS-15; CEO-approved 2026-08-07: free tier, shared sending domain for v1)
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
- Contact page form submits to a Vercel serverless function (`api/contact.js`) that sends the
  message via Resend to `contactus@gastonchristianctr.org` (overridable via `CONTACT_TO_EMAIL`),
  with the submitter's address set as reply-to. Sends from Resend's shared onboarding domain
  (`onboarding@resend.dev`) for v1 — swap in a verified GCC sending domain later. Requires a
  `RESEND_API_KEY` env var in Vercel; see `.env.example`. **This key still needs to be created**
  — see "Known gaps" below.
- Design tokens (colors, type) pulled directly from the Figma file's Homepage frame.

## Known gaps / needs from GCC or CEO

- **GCC logo** — Figma marks it `[VECTOR LOGO — PENDING ADO-239]`; nav/footer currently show a text placeholder
- **Photography** — all photo slots are placeholder boxes; GCC is providing real images separately
- **GiveButter embed** — account ID (`OvV8eRSSJod8OvPn`) is confirmed in the design, but the real embed snippet/script still needs to come from GiveButter/GCC before the Give and Friends of Gaston donate buttons are live
- **Resend API key** — code is built (`api/contact.js`) but has no live key yet. Resend account
  signup requires human email verification, which an agent can't complete. **Ask: a human
  (CEO/Keven) creates a free Resend account at resend.com, generates an API key, and adds it as
  `RESEND_API_KEY` in the Vercel project's environment variables** (and `CONTACT_TO_EMAIL` if the
  default `contactus@gastonchristianctr.org` inbox shouldn't receive it). Nothing else is needed
  to go live once that key exists.
- **Instagram handle** — the original site's Instagram footer link pointed at Squarespace's own account (an unconfigured default), so no verified GCC Instagram was carried over; Facebook and LinkedIn are live (GAS-77)
- **GA4 measurement ID** — not yet provisioned; site sends zero analytics until it is
- **Services (Q31) and New Roots (Q29) copy** — structural/content decisions still open with GCC; placeholders are intentional, not bugs

## Local development

```bash
npm install
npm run dev
```

## Repo / GitHub status

This code currently lives only in the local Paperclip workspace — **no GitHub repo has been created yet.** The agent environment has no `gh` CLI, no `GITHUB_TOKEN`, and no usable SSH/credential for github.com, so repo creation and push are blocked pending access. See GAS-12 comments for the specific ask.
