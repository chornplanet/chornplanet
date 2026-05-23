# Feature Plan: Analytics Growth Foundation

Branch for planning: `feature/mcp-agent-workspace`
Implementation branch: `feature/analytics-growth-foundation`
Status: Planning
Owner: Khachornchit Chief Architect → ChatGPT planning → Codex review/implementation

## Problem Statement

ChornPlanet's growth goal is to increase daily traffic from 10K to 100K, 500K, and eventually 1M. To do this responsibly, the platform needs analytics instrumentation and an AI-assisted reporting foundation before scaling daily media automation, commerce posting, or TikTok-first product linking.

The requested direction includes Google Analytics integration with an AI assistant.

## Goals

- Define analytics event model for ChornPlanet growth.
- Support content category tracking: news, entertainment, technology, outfit, civilization clothing, commerce, Smart Food, luxury.
- Support zone/sub-zone tracking for Chorn DNA content.
- Support product/marketplace click tracking, starting with TikTok.
- Support future AI-assisted daily/weekly growth summaries.
- Identify instrumentation gaps before automation is scaled.

## Non-Goals

- Do not change production Google Analytics configuration without explicit approval.
- Do not expose personal user data.
- Do not implement a complete dashboard unless separately approved.
- Do not invent metrics.
- Do not connect marketplace APIs in this feature.

## Existing Architecture Review

The repository already includes Vercel Speed Insights dependency and has SEO/metadata infrastructure. Google Analytics integration should be planned in a way that respects existing Next.js routing, layouts, locale handling, and privacy requirements.

Relevant `.mcp` files:

```text
.mcp/resources/analytics-context.md
.mcp/tools/analytics-tools.yaml
.mcp/workflows/analytics-growth.md
.mcp/policies/data-auth-policy.md
```

## Proposed Event Model

Initial event categories:

```text
page_view
content_view
outfit_view
zone_view
product_link_click
marketplace_click
smartfood_login_intent
favorite_meal_intent
order_intent
newsletter_or_follow_intent
```

Suggested event fields:

```ts
type ChornPlanetAnalyticsEvent = {
  eventName: string;
  locale?: string;
  route?: string;
  contentType?: "news" | "entertainment" | "technology" | "outfit" | "civilization-clothing" | "commerce" | "smart-food" | "luxury";
  contentId?: string;
  campaignName?: string;
  zoneFile?: string;
  subZone?: string;
  productId?: string;
  marketplace?: "tiktok" | "shopee" | "lazada" | "amazon" | "owned";
  source?: string;
  medium?: string;
  createdAt?: string;
};
```

## Proposed Architecture

```text
Next.js Route / Component
  ↓
Analytics Helper
  ↓
Google Analytics / Speed Insights / future analytics provider
  ↓
Aggregate reporting
  ↓
AI-assisted growth summary
```

Keep analytics helper isolated so future provider changes do not require rewriting all components.

## Project Structure Guideline

Possible locations:

```text
src/lib/analytics/
  analytics-events.ts
  analytics-client.ts
  analytics-types.ts
  marketplace-tracking.ts

server/core/domain/analytics-summary.entity.ts          # future only
server/core/services/analytics-growth-report.service.ts # future only
```

If Google Analytics script integration exists elsewhere, reuse existing patterns rather than adding duplicate scripts.

## Implementation Scope

Phase 1:

- Define analytics event type and helper contract.
- Identify where Google Analytics is or should be initialized.
- Add tracking utility for product/marketplace clicks if safe.
- Add documentation for content category and zone/sub-zone tracking.

Phase 2:

- Add traffic/content performance reporting service if data source is available.
- Add AI-assisted growth report draft generation if approved.

## Testing Plan

- Run lint:

```bash
yarn lint
```

- Run build:

```bash
yarn build
```

- Verify analytics helper does not break server rendering.
- Verify no personal data is sent by default.
- Verify marketplace click tracking is draft/safe if implemented.

## Risks and Open Questions

- Is Google Analytics already configured in production outside the repo?
- Which GA property/event naming standard should be used?
- Should analytics be client-only, server-side, or mixed?
- How should consent/cookie state from `src/proxy.ts` affect tracking?
- What is the minimum metric set needed for 10K → 100K growth decisions?

## Acceptance Criteria

- Analytics event model is defined.
- Growth tracking categories are defined.
- Zone/sub-zone and commerce click fields are supported in the model.
- No personal data is exposed by default.
- Production GA configuration is not changed without approval.
- Lint/build pass for code changes.
