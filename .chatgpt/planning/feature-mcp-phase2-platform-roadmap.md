# Feature Plan: MCP Phase 2 Platform Roadmap

Branch for planning: `feature/mcp-agent-workspace`
Implementation branch: `feature/mcp-phase2-platform-roadmap`
Status: Planning
Owner: Khachornchit Chief Architect → ChatGPT planning → Codex review/implementation

## Problem Statement

ChornPlanet now has a shared `.mcp` agent workspace, but the project needs an execution roadmap that turns the strategic direction into phase-by-phase implementation items.

ChornPlanet is not only a website. It is intended to grow as:

- a news / entertainment / technology follow-up media platform
- a premium commerce platform
- a civilization platform for lady/gentleman outfit and clothing presentation
- a Smart Food web evolution layer
- a luxury project showcase
- an analytics-assisted growth platform

The roadmap must help ChatGPT and Codex create feature plans and implementation branches that move ChornPlanet toward daily traffic growth:

```text
10K daily -> 100K -> 500K -> 1M
```

## Goals

- Create a clear ChornPlanet platform roadmap.
- Convert `.mcp` strategy into implementable phases.
- Define phase order across content, commerce, Chorn DNA, analytics, SEO/LLM visibility, Smart Food, and automation.
- Keep all future features aligned with current architecture direction: MongoDB-backed reusable content services, typed schemas, and reusable components.
- Separate planning, draft generation, review, approval, and external publishing.
- Give Codex a roadmap source before implementation branches are created.
- Establish an on-demand analytics feedback capability so Google Search Console, Google Analytics, and other approved growth signals can be queried through safe APIs/services and used by ChatGPT and Codex for planning and implementation decisions.

## Non-Goals

- Do not implement daily auto-posting in this feature.
- Do not publish to TikTok, Shopee, Lazada, Amazon, or any external platform.
- Do not mutate Smart Food customer/order/payment data.
- Do not introduce production authentication changes.
- Do not replace the existing Next.js architecture.
- Do not connect production Google Search Console or Google Analytics APIs without explicit approval and safe credential handling.
- Do not require always-on daily monitoring; analytics access should support on-demand planning and improvement workflows first.

## Existing Architecture Review

Current agent rules already state that ChornPlanet page content should move from hardcoded page data toward database-backed, reusable, scalable services.

Target architecture pattern:

```text
Next.js Page / Route
   ↓
Content Loader / Server Service
   ↓
MongoDB Atlas Repository
   ↓
Typed Content Schema
   ↓
Reusable Page Components
```

The `.mcp` workspace now adds strategic operating areas:

- product context
- media automation
- commerce
- Chorn DNA authority
- Smart Food evolution
- analytics
- SEO/LLM visibility
- safety policies
- tool contracts
- workflows

## Proposed Roadmap Structure

Create a roadmap document such as:

```text
.mcp/roadmap/chornplanet-platform-roadmap.md
```

Recommended roadmap sections:

1. Platform North Star
2. Traffic Growth Stages
3. Phase 1: Foundation and Repo Understanding
4. Phase 2: SEO / LLM Visibility
5. Phase 3: Content Draft Foundation
6. Phase 4: Outfit / Civilization Posting Pipeline
7. Phase 5: Metadata to MongoDB Migration
8. Phase 6: Analytics Growth Foundation and MCP-Invoked Data Access
9. Phase 7: TikTok-first Commerce Linking
10. Phase 8: Daily Media Digest Draft Pipeline
11. Phase 9: Smart Food Login and Favorite Meal Planning
12. Phase 10: Controlled Automation and Publishing
13. Phase 11: Luxury Project Showcase and Commerce Expansion
14. Risks and Approval Boundaries
15. Feature Branch Queue

## Phase 6: Analytics Growth Foundation and MCP-Invoked Data Access

Phase 6 should not be only event tracking, and it should not start as an always-on daily monitor.

The core idea is to build safe internal application APIs under `src/app/api/...` and server-side functions under `server/...` that can connect to approved analytics sources such as Google Analytics and Google Search Console. Then ChatGPT and Codex can access those capabilities through the `.mcp` operating model when they need real data to create better planning files or implementation tasks.

Target on-demand feedback loop:

```text
ChatGPT / Codex needs growth insight
  ↓
.mcp analytics tool contract / workflow
  ↓
Internal Next.js API route under src/app/api/...
  ↓
Server service under server/...
  ↓
Google Search Console + Google Analytics + approved signals
  ↓
Aggregate AI-readable result
  ↓
ChatGPT creates or updates .chatgpt/planning/feature-*.md
  ↓
Khachornchit approves priority
  ↓
Codex creates implementation branch per approved feature
  ↓
New release / content / SEO / UX improvement
  ↓
Data can be queried again when needed
```

This is closed-loop improvement, but the loop is invoked when planning or validation is needed. It does not require automatic daily monitoring in the first implementation.

### Proposed analytics API and service architecture

Recommended structure:

```text
src/app/api/analytics/search-console/route.ts
src/app/api/analytics/google-analytics/route.ts
src/app/api/analytics/growth-summary/route.ts

server/core/domain/analytics-query.entity.ts
server/core/domain/analytics-growth-summary.entity.ts
server/core/ports/search-console.interface.ts
server/core/ports/google-analytics.interface.ts
server/core/services/analytics-growth.service.ts
server/adapters/outbound/google/search-console.repository.ts
server/adapters/outbound/google/google-analytics.repository.ts
```

The exact structure should follow existing ChornPlanet server patterns after Codex inspects the repository.

### Proposed API capabilities

Initial safe API capabilities:

```text
GET /api/analytics/search-console
  Purpose: read aggregate Search Console performance data.
  Inputs: date range, page path, query filter, country/device optional.
  Output: clicks, impressions, CTR, average position, top queries, top pages.

GET /api/analytics/google-analytics
  Purpose: read aggregate GA performance data.
  Inputs: date range, route/content category/campaign optional.
  Output: users, sessions, page views, engagement, traffic sources, events.

GET /api/analytics/growth-summary
  Purpose: combine Search Console + GA into an AI-readable improvement summary.
  Inputs: date range, focus area such as SEO, content, outfit, commerce, Smart Food.
  Output: opportunities, risks, recommended planning items, data gaps.
```

Write endpoints are not needed in Phase 6.

### `.mcp` tool contract direction

Add or refine tool contracts such as:

```text
analytics.query_search_console
analytics.query_google_analytics
analytics.create_growth_summary
analytics.find_seo_opportunities
analytics.find_content_improvement_opportunities
analytics.find_technical_ux_opportunities
```

These tools should call the internal API/service layer or read approved exported reports. They should return aggregate, AI-readable summaries that ChatGPT and Codex can use for planning.

### Approved signal sources

Initial signal sources to plan for:

- Google Search Console
  - search queries
  - impressions
  - clicks
  - click-through rate
  - average position
  - indexed pages / coverage issues
- Google Analytics
  - users
  - sessions
  - page views
  - engagement rate
  - traffic sources
  - content category performance
  - conversion or outbound click events
- Vercel / Speed Insights if available
  - performance issues
  - page speed signals
  - deployment impact
- Future marketplace/social signals after approval
  - TikTok click/performance signals
  - Shopee/Lazada/Amazon click signals
  - owned commerce conversion signals

### AI-readable output

The system can return AI-readable summaries through API responses and may optionally persist internal reports when useful.

Possible report files or generated summaries:

```text
.mcp/analytics/reports/on-demand-growth-summary.md
.mcp/analytics/reports/search-console-opportunities.md
.mcp/analytics/reports/content-improvement-backlog.md
.mcp/analytics/reports/technical-seo-issues.md
```

These reports should help answer:

- Which pages are gaining impressions but have low CTR?
- Which search queries should become new content pages?
- Which pages rank but need better metadata/title/description?
- Which content categories drive repeat traffic?
- Which outfit/civilization zones perform best?
- Which pages are slow or have UX/performance issues?
- Which product links or commerce posts generate interest?
- Which feature should ChatGPT plan next?
- Which implementation task should Codex prioritize?

### Planning-to-implementation feedback rule

Analytics data should create feature ideas and implementation priorities, not automatically change production.

Correct flow:

```text
Analytics API query
  ↓
AI-readable summary
  ↓
ChatGPT creates or updates .chatgpt/planning/feature-*.md
  ↓
Khachornchit approves priority
  ↓
Codex creates implementation branch per feature
```

### Safety and credentials

- Analytics credentials must not be committed.
- API access to Google Search Console or Google Analytics requires explicit approval.
- Prefer aggregate metrics.
- Do not expose personal user data.
- Do not invent metrics.
- If data is unavailable, return an instrumentation gap report instead of guessing.
- Internal analytics APIs should require appropriate authorization or be limited to safe internal use.
- Raw Google credentials should remain in environment variables or approved secret stores.

## Suggested Phase Order

```text
1. mcp-repository-understanding-upgrade
2. llm-visibility-files
3. content-draft-foundation
4. outfit-civilization-content-draft-pipeline
5. metadata-mongodb-migration
6. analytics-growth-foundation
7. analytics-mcp-data-access
8. tiktok-product-linking-draft
9. daily-media-digest-draft
10. smartfood-line-login-planning
11. controlled-publishing-automation
```

## Project Structure Guideline

Possible new files:

```text
.mcp/roadmap/
  chornplanet-platform-roadmap.md
  feature-queue.md
  growth-milestones.md

.mcp/analytics/
  README.md
  metrics-map.md
  feedback-loop.md
  api-contracts.md
  reports/
    on-demand-growth-summary.md
    search-console-opportunities.md
    content-improvement-backlog.md
    technical-seo-issues.md

src/app/api/analytics/
  search-console/route.ts
  google-analytics/route.ts
  growth-summary/route.ts

server/core/domain/
  analytics-query.entity.ts
  analytics-growth-summary.entity.ts

server/core/ports/
  search-console.interface.ts
  google-analytics.interface.ts

server/core/services/
  analytics-growth.service.ts

server/adapters/outbound/google/
  search-console.repository.ts
  google-analytics.repository.ts
```

Avoid modifying production code in this planning-only feature unless the implementation plan explicitly requires route-visible roadmap content.

## Testing Plan

Documentation-only validation:

- Confirm roadmap references existing `.mcp` resources, policies, tools, and workflows.
- Confirm no secrets or production credentials are included.
- Confirm roadmap separates draft workflows from external publishing workflows.
- Confirm roadmap preserves MongoDB-backed content architecture direction.
- Confirm analytics data access is aggregate, AI-readable, and planning-oriented.
- Confirm Google Search Console / Google Analytics API access is approval-gated.
- Confirm Phase 6 does not require automatic daily monitoring before on-demand querying is useful.

Optional checks if docs are surfaced in app routes:

```bash
yarn lint
yarn build
```

## Risks and Open Questions

- Which roadmap items should become immediate implementation features?
- Should the roadmap be internal-only under `.mcp`, or partially surfaced on the public website?
- Which analytics events are needed before traffic-growth decisions become data-driven?
- Which commerce links should be tracked first: TikTok only, or TikTok plus owned product pages?
- Which Google Search Console and Google Analytics properties should be treated as source-of-truth?
- Should analytics summaries be generated only on demand at first?
- Should generated analytics summaries live only in API responses, `.mcp/analytics/reports/`, a database collection, or all three eventually?
- Should ChatGPT consume analytics summaries manually first before any MCP server reads them automatically?
- What authentication/authorization should protect internal analytics API routes?

## Acceptance Criteria

- Roadmap document exists under `.mcp/roadmap/`.
- Roadmap defines implementation phases and branch queue.
- Roadmap references `.mcp` workflows and policies.
- Roadmap includes traffic growth stages: 10K, 100K, 500K, 1M daily.
- Roadmap defines Phase 6 as analytics foundation plus MCP-invoked/on-demand data access from Google Search Console, Google Analytics, and other approved signals.
- Roadmap proposes internal API routes under `src/app/api/...` and service functions under `server/...` for analytics data access.
- Roadmap defines AI-readable analytics outputs that ChatGPT and Codex can use for future planning and implementation prioritization.
- Roadmap keeps analytics credentials and API access behind explicit approval.
- Roadmap clarifies that Phase 6 does not require daily monitoring first; it enables data gathering when ChatGPT/Codex need evidence for planning or implementation.
- Roadmap keeps external publishing, marketplace writes, Smart Food mutations, and auth production changes behind explicit approval.
- Codex can use this roadmap to create future implementation branches per planning item.
