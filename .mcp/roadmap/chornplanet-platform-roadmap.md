# ChornPlanet Platform Roadmap

This roadmap turns the `.mcp` strategy into implementation phases for ChatGPT planning and Codex execution. It is internal agent context, not runtime application code.

## Platform North Star

ChornPlanet should evolve from a public Next.js website into a platform that combines:

- news, entertainment, and technology follow-up media
- SEO and LLM-visible topic hubs
- premium commerce and TikTok-first product linking
- lady/gentleman outfit and civilization clothing presentation
- DNA-backed civilization scene authority
- Smart Food web evolution
- luxury project showcase and commerce expansion
- analytics-assisted growth planning

The architecture direction remains:

```text
Next.js Page / Route
  -> Content Loader / Server Service
  -> MongoDB Atlas Repository
  -> Typed Content Schema
  -> Reusable Page Components
```

## Traffic Growth Stages

Roadmap work should improve the path toward:

```text
10K daily traffic -> 100K -> 500K -> 1M
```

Growth should come from better content structure, stronger search/AI visibility, repeatable draft workflows, safer automation, commerce conversion, and analytics-driven planning.

## Phase 1: Foundation And Repo Understanding

Status: implemented for `.mcp` docs and repository maps.

Key sources:

- `.mcp/README.md`
- `.mcp/manifest.yaml`
- `.mcp/repository/`
- `.codex/Agents.md`

Purpose:

- Give agents a shared source for product, policy, workflow, and repository context.
- Keep future plans grounded in real routing, locales, styling, metadata, content, server, and deployment patterns.

## Phase 2: SEO / LLM Visibility

Purpose:

- Make ChornPlanet easier for search engines and AI assistants to understand.
- Add public-safe `llm.txt` and `llm-full.txt`.
- Improve sitemap and metadata confidence before scaling content volume.

Candidate branch:

```text
feature/llm-visibility-files
```

Read first:

- `.mcp/repository/metadata-seo-map.md`
- `.mcp/tools/seo-llm-tools.yaml`
- `.mcp/workflows/seo-llm-visibility.md`

## Phase 3: Content Draft Foundation

Purpose:

- Create draft-first content models and workflows for media, commerce, Smart Food, luxury, outfit, and civilization content.
- Separate draft generation, review, approval, and publication.

Candidate branch:

```text
feature/content-draft-foundation
```

Rules:

- Do not publish externally.
- Preserve source tracking for factual content.
- Prefer typed services over new hardcoded page arrays.

## Phase 4: Outfit / Civilization Posting Pipeline

Purpose:

- Create draft-only outfit and civilization content pipeline using DNA authority.

Candidate branch:

```text
feature/outfit-civilization-content-draft-pipeline
```

Authority rule:

```text
Zone List -> Zone File -> exactly one Sub-Zone
```

No external posting is allowed in this phase.

## Phase 5: Metadata To MongoDB Migration

Purpose:

- Move duplicated hardcoded metadata toward MongoDB-backed metadata services.
- Preserve all 10 locales and route behavior.

Candidate branch:

```text
feature/metadata-mongodb-migration
```

Approach:

- Design typed metadata schema and service contract first.
- Migrate one page family at a time.
- Keep fallback behavior until data is validated.

## Phase 6: Analytics Growth Foundation And MCP-Invoked Data Access

Purpose:

- Build on-demand, aggregate analytics access for planning and prioritization.
- Support Google Search Console, Google Analytics, Vercel/Speed Insights, and future approved commerce/social signals.

Candidate branches:

```text
feature/analytics-growth-foundation
feature/analytics-mcp-data-access
```

Phase 6 starts with contracts and reports. Runtime API routes and Google integrations are deferred until credentials, authorization, and source-of-truth properties are approved.

Correct feedback loop:

```text
ChatGPT / Codex needs growth insight
  -> .mcp analytics tool contract / workflow
  -> approved internal API, export, or report
  -> aggregate AI-readable summary
  -> .planning/feature-*.md
  -> Khachornchit approval
  -> Codex implementation branch
```

## Phase 7: TikTok-First Commerce Linking

Purpose:

- Connect content and product stories to TikTok-first commerce links.
- Expand later to Shopee, Lazada, Amazon, and owned commerce.

Candidate branch:

```text
feature/tiktok-product-linking-draft
```

Rules:

- Draft first.
- No marketplace writes without approval.
- Track link performance only through approved analytics.

## Phase 8: Daily Media Digest Draft Pipeline

Purpose:

- Create draft-first news, entertainment, and technology digest workflows.

Candidate branch:

```text
feature/daily-media-digest-draft
```

Rules:

- Search and summarize with source tracking.
- Do not copy full articles.
- Do not auto-post until controlled automation is approved.

## Phase 9: Smart Food Login And Favorite Meal Planning

Purpose:

- Plan Smart Food web evolution for Line OA login, favorite meals, user preferences, ordering, and future booking.

Candidate branch:

```text
feature/smartfood-line-login-planning
```

Rules:

- Do not mutate customer, order, payment, or identity data without approval.
- Keep authentication changes planning-only until explicitly approved.

## Phase 10: Controlled Automation And Publishing

Purpose:

- Introduce automation only after draft, review, approval, analytics, audit logs, and rollback paths exist.

Candidate branch:

```text
feature/controlled-publishing-automation
```

Rules:

- External publishing requires explicit approval.
- Commerce writes require explicit approval.
- Automation defaults to draft/review mode.

## Phase 11: Luxury Project Showcase And Commerce Expansion

Purpose:

- Expand ChornPlanet luxury project presentation and premium commerce storytelling.
- Connect luxury content to approved product or project inquiry flows.

Candidate branch:

```text
feature/luxury-project-commerce-expansion
```

## Risks And Approval Boundaries

- No analytics credentials may be committed.
- Google Search Console and Google Analytics API access requires explicit approval.
- External publishing requires explicit approval.
- Marketplace writes require explicit approval.
- Smart Food customer, order, payment, and identity mutations require explicit approval.
- Production authentication changes require explicit approval.
- Production schema changes require explicit approval.
- If analytics data is unavailable, agents must produce a data gap report instead of inventing metrics.

## Feature Branch Queue

Use `.mcp/roadmap/feature-queue.md` as the operational queue. Each feature should have a focused `.planning/feature-*.md` before Codex implementation.
