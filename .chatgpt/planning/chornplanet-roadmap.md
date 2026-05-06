# ChornPlanet Roadmap

Branch for planning: `feature/mcp-agent-workspace`
Implementation branch recommendation: `feature/chornplanet-roadmap`
Status: Planning
Owner: Khachornchit Chief Architect → ChatGPT planning → Codex review/implementation

## Purpose

This roadmap defines how ChornPlanet evolves as a platform across media, commerce, civilization storytelling, Smart Food evolution, analytics, SEO/LLM visibility, and multi-repository cooperation with Chorn DNA and later MenuMatch.

## Roles

### Khachornchit — Chief Architect

Khachornchit owns final architecture direction, product direction, ChornPlanet platform direction, and production approval.

### ChatGPT

ChatGPT owns discovery, planning, architecture proposals, product strategy, and implementation handoff.

### Codex

Codex owns implementation, tests, validation, and preserving compatibility with the existing Next.js/MongoDB architecture.

## Current State

ChornPlanet is a Next.js platform with `.mcp` support.

Current platform direction:

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

ChornPlanet already declares Chorn DNA as an external authority for StoryGenProduct, AutoScene, ImagePrompt, VdoPrompt, StoryPostEngine, and Zone List resolution.

## North Star

ChornPlanet should become:

- a media platform for news / entertainment / technology follow-up
- a premium commerce platform
- a civilization platform for lady/gentleman outfit and clothing presentation
- a Smart Food web evolution layer
- a luxury project showcase
- an analytics-assisted growth platform
- a platform that can cooperate with Chorn DNA and MenuMatch through `.mcp` and REST contracts

Traffic growth target:

```text
10K daily -> 100K -> 500K -> 1M
```

## Multi-Repo Cooperation Model

ChornPlanet should cooperate with Chorn DNA through two layers:

```text
1. .mcp <-> .mcp
   Agent-level cooperation for planning, contracts, authority, policies, and workflows.

2. REST <-> REST
   Runtime cooperation between ChornPlanet Next.js and the future Chorn DNA Go backend.
```

### ChornPlanet responsibility

ChornPlanet owns the platform layer:

```text
- website and content platform
- content draft foundation
- outfit/civilization content draft pipeline
- commerce and marketplace linking direction
- SEO and LLM visibility
- analytics growth foundation
- Smart Food web evolution
- client adapters to external authority systems
```

### Chorn DNA responsibility

Chorn DNA owns the DNA authority layer:

```text
- StoryGenProduct authority
- AutoScene validation
- Zone List -> Zone File -> exactly one Sub-Zone
- ImagePrompt / VdoPrompt / StoryPostEngine contract validation
- Go backend validation APIs
```

### Future MenuMatch responsibility

MenuMatch can join later as the Smart Food backend layer:

```text
- menu matching
- RAG/menu question answering
- order-related backend behavior
- Smart Food conversational commerce
```

## Roadmap Phases

### Phase 1: MCP Agent Workspace Foundation

Goal:

Create `.mcp` as the shared agent workspace for ChatGPT and Codex.

Deliverables:

- `.mcp/README.md`
- `.mcp/manifest.yaml`
- resources, policies, tools, and workflows
- planning files for platform roadmap and implementation queue

### Phase 2: Repository Understanding and Platform Maps

Goal:

Create repository maps so agents understand routing, locales, SCSS/Tailwind, UX/UI, navigation, layout, metadata, server architecture, deployment, and improvement phases.

Deliverables:

```text
.mcp/repository/
  overview.md
  routing-map.md
  locale-i18n-map.md
  layout-navigation-map.md
  styling-map.md
  ux-ui-map.md
  metadata-seo-map.md
  content-data-map.md
  server-architecture-map.md
  deployment-map.md
  improvement-phase-map.md
```

### Phase 3: Multi-Repo MCP Integration Contract

Goal:

Define how ChornPlanet consumes Chorn DNA authority through `.mcp` before runtime APIs are implemented.

Deliverables in ChornPlanet:

```text
.mcp/integrations/chorn-dna.md
.mcp/tools/integration-tools.yaml
.mcp/workflows/chorn-dna-integration.md
.chatgpt/planning/feature-mcp-multi-repo.md
```

Expected deliverables in Chorn DNA:

```text
.mcp/integrations/chornplanet.md
.chatgpt/planning/feature-mcp-multi-repo.md
```

### Phase 4: SEO and LLM Visibility

Goal:

Add public AI/search visibility files.

Deliverables:

```text
/llm.txt
/llm-full.txt
```

### Phase 5: Content Draft Foundation

Goal:

Create safe internal content draft model and workflow before automation or external publishing.

Content types:

- news
- entertainment
- technology
- outfit
- civilization clothing
- commerce
- Smart Food
- luxury

### Phase 6: Outfit / Civilization Content Draft Pipeline

Goal:

Use Chorn DNA authority to create draft-only outfit/civilization content plans.

Runtime future flow:

```text
ChornPlanet draft request
  ↓ REST
Chorn DNA Go validation API
  ↓
valid/invalid DNA response
  ↓
ChornPlanet stores or updates draft
```

### Phase 7: Metadata to MongoDB Migration

Goal:

Migrate hardcoded metadata under `src/metadata` to MongoDB-backed metadata service with fallback.

### Phase 8: Analytics Growth Foundation and MCP-Invoked Data Access

Goal:

Create on-demand analytics APIs and services so ChatGPT and Codex can gather data for planning and improvement.

Sources:

- Google Search Console
- Google Analytics
- Vercel / Speed Insights
- future approved commerce/social signals

### Phase 9: TikTok-first Commerce Linking

Goal:

Connect content drafts and product stories to TikTok-first product/linking strategy before expanding to Shopee, Lazada, Amazon, and owned commerce.

### Phase 10: Daily Media Digest Draft Pipeline

Goal:

Create draft-first news / entertainment / technology digest pipeline.

No external publishing until approval.

### Phase 11: Smart Food Evolution and MenuMatch Integration

Goal:

Plan and later implement ChornPlanet <-> MenuMatch cooperation for Smart Food web experience.

Possible future flow:

```text
ChornPlanet Next.js
  ↓ REST
MenuMatch FastAPI
  ↓
menu matching / favorite meals / food order flow
```

### Phase 12: Controlled Automation and Publishing

Goal:

Only after draft, validation, analytics, and approval workflows are stable, introduce controlled publishing automation.

## Immediate Feature Queue

Recommended next implementation features:

1. `feature-mcp-multi-repo`
2. `mcp-repository-understanding-upgrade`
3. `llm-visibility-files`
4. `content-draft-foundation`
5. `outfit-civilization-content-draft-pipeline`
6. `metadata-mongodb-migration`
7. `analytics-growth-foundation`
8. `analytics-mcp-data-access`
9. `chorn-dna-client-adapter`
10. `tiktok-product-linking-draft`
11. `daily-media-digest-draft`
12. `smartfood-line-login-planning`

## Deferred Runtime Implementation Items From MCP Phase 2

The `feature-mcp-phase2-platform-roadmap` implementation is documentation and contract design only. The following items are intentionally not implemented there and should become future planning files before runtime code is added.

### Analytics Growth Foundation

Future planning file:

```text
.chatgpt/planning/feature-analytics-growth-foundation.md
```

Scope:

- aggregate analytics query model
- growth summary report shape
- instrumentation gap report shape
- route/category metric map
- report persistence decision: API response, `.mcp/analytics/reports/`, database collection, or a staged combination

Non-goals until approval:

- no Google credentials
- no production API connection
- no tracking config writes

### Analytics MCP Data Access

Future planning file:

```text
.chatgpt/planning/feature-analytics-mcp-data-access.md
```

Proposed future runtime structure:

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

Required decisions before implementation:

- Google Search Console source property
- Google Analytics source property
- credential storage and rotation path
- internal API authorization model
- allowed aggregate dimensions
- whether generated summaries stay in API responses, `.mcp/analytics/reports/`, MongoDB, or all three

Safety rules:

- API access to Google Search Console and Google Analytics requires explicit approval.
- Credentials must remain in environment variables or approved secret stores.
- Prefer aggregate metrics.
- Do not expose personal user data.
- If data is unavailable, return an instrumentation gap report instead of guessing.

### Always-On Monitoring

Future planning file:

```text
.chatgpt/planning/feature-analytics-scheduled-monitoring.md
```

This should happen only after on-demand analytics access is useful and approved. Initial Phase 6 does not require automatic daily monitoring.

## Safety Rules

- `.mcp` defines planning and contracts.
- REST APIs execute runtime communication.
- ChornPlanet must not duplicate Chorn DNA authority rules.
- ChornPlanet should call Chorn DNA validation APIs when runtime validation exists.
- External publishing requires explicit approval.
- Marketplace writes require explicit approval.
- Smart Food customer/order/payment mutations require explicit approval.
- Production authentication changes require explicit approval.
- Secrets and credentials must not be committed.

## Acceptance Criteria

- Roadmap defines ChornPlanet platform direction.
- Roadmap defines ChornPlanet <-> Chorn DNA cooperation through `.mcp <-> .mcp` and future `REST <-> REST`.
- Roadmap preserves Chorn DNA as the authority for StoryGenProduct, AutoScene, and zone/sub-zone resolution.
- Roadmap includes future MenuMatch integration as a later Smart Food phase.
- Roadmap can be used by Codex to create implementation branches per feature.
