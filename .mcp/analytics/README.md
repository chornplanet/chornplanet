# Analytics Workspace

This directory defines ChornPlanet analytics planning contracts for `.mcp`. It does not contain credentials and does not connect to Google APIs by itself.

## Purpose

Analytics should help ChatGPT and Codex answer growth questions on demand:

- Which pages are gaining impressions but have low CTR?
- Which queries should become content pages?
- Which routes need metadata, UX, or performance work?
- Which content categories drive repeat traffic?
- Which commerce links generate interest?
- Which feature should be planned next?

## Current Scope

This feature creates analytics contracts and report shapes only.

Not implemented here:

- Google Search Console API connection
- Google Analytics API connection
- internal Next.js analytics API routes
- server-side Google repositories
- production auth or credential handling
- automatic daily monitoring

Those runtime items are deferred to future planning under `.planning/chornplanet-roadmap.md`.

## Safety

- Prefer aggregate data.
- Do not expose personal user data.
- Do not commit analytics credentials.
- Do not change production analytics configuration without approval.
- If data is unavailable, return an instrumentation gap report instead of guessing.
