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
- Establish a closed-loop analytics feedback system so Google Search Console, Google Analytics, and other approved growth signals can automatically inform ChatGPT and Codex planning.

## Non-Goals

- Do not implement daily auto-posting in this feature.
- Do not publish to TikTok, Shopee, Lazada, Amazon, or any external platform.
- Do not mutate Smart Food customer/order/payment data.
- Do not introduce production authentication changes.
- Do not replace the existing Next.js architecture.
- Do not connect production Google Search Console or Google Analytics APIs without explicit approval and safe credential handling.

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
8. Phase 6: Analytics Growth Foundation and Closed-Loop Feedback
9. Phase 7: TikTok-first Commerce Linking
10. Phase 8: Daily Media Digest Draft Pipeline
11. Phase 9: Smart Food Login and Favorite Meal Planning
12. Phase 10: Controlled Automation and Publishing
13. Phase 11: Luxury Project Showcase and Commerce Expansion
14. Risks and Approval Boundaries
15. Feature Branch Queue

## Phase 6: Analytics Growth Foundation and Closed-Loop Feedback

Phase 6 should not be only event tracking.

It should become a closed-loop feedback system where approved analytics sources continuously help ChatGPT and Codex understand what is working, what is failing, and what feature planning should happen next.

Target feedback loop:

```text
Published content / page / product link / campaign
  ↓
Google Search Console + Google Analytics + approved platform signals
  ↓
Automated aggregate metrics collection
  ↓
AI-readable growth summary
  ↓
ChatGPT feature planning recommendations
  ↓
Codex implementation branch per approved feature
  ↓
New release / content / SEO / UX improvement
  ↓
Measure again
```

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

The system should produce internal reports that both ChatGPT and Codex can use, such as:

```text
.mcp/analytics/reports/daily-growth-summary.md
.mcp/analytics/reports/weekly-growth-summary.md
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

Analytics reports should create feature ideas, not automatically change production.

Correct flow:

```text
Analytics signal
  ↓
AI summary
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
- If data is unavailable, generate an instrumentation gap report instead of guessing.

## Suggested Phase Order

```text
1. mcp-repository-understanding-upgrade
2. llm-visibility-files
3. content-draft-foundation
4. outfit-civilization-content-draft-pipeline
5. metadata-mongodb-migration
6. analytics-growth-foundation
7. analytics-closed-loop-feedback
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
  reports/
    daily-growth-summary.md
    weekly-growth-summary.md
    search-console-opportunities.md
    content-improvement-backlog.md
    technical-seo-issues.md
```

Avoid modifying production code in this planning-only feature unless the implementation plan explicitly requires route-visible roadmap content.

## Testing Plan

Documentation-only validation:

- Confirm roadmap references existing `.mcp` resources, policies, tools, and workflows.
- Confirm no secrets or production credentials are included.
- Confirm roadmap separates draft workflows from external publishing workflows.
- Confirm roadmap preserves MongoDB-backed content architecture direction.
- Confirm closed-loop analytics reports are aggregate, AI-readable, and planning-oriented.
- Confirm Google Search Console / Google Analytics API access is approval-gated.

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
- Should analytics summaries be generated daily, weekly, or both?
- Should automated analytics reports live in `.mcp/analytics/reports/`, a database collection, or both?
- Should ChatGPT consume analytics summaries manually first before any MCP server reads them automatically?

## Acceptance Criteria

- Roadmap document exists under `.mcp/roadmap/`.
- Roadmap defines implementation phases and branch queue.
- Roadmap references `.mcp` workflows and policies.
- Roadmap includes traffic growth stages: 10K, 100K, 500K, 1M daily.
- Roadmap defines Phase 6 as analytics foundation plus closed-loop feedback from Google Search Console, Google Analytics, and other approved signals.
- Roadmap defines AI-readable analytics report outputs that ChatGPT and Codex can use for future planning and implementation prioritization.
- Roadmap keeps analytics credentials and API access behind explicit approval.
- Roadmap keeps external publishing, marketplace writes, Smart Food mutations, and auth production changes behind explicit approval.
- Codex can use this roadmap to create future implementation branches per planning item.
