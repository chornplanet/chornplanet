# Feature Plan: Content Draft Foundation

Branch for planning: `feature/mcp-agent-workspace`
Implementation branch: `feature/content-draft-foundation`
Status: Planning
Owner: Khachornchit Chief Architect → ChatGPT planning → Codex review/implementation

## Problem Statement

ChornPlanet needs a safe internal content draft foundation before any AI daily media automation, outfit/civilization posting, commerce linking, or external publishing is implemented.

The platform goal includes:

- daily news / entertainment / technology follow-up
- outfit and civilization clothing posts
- commerce content
- Smart Food content
- luxury project content
- future AI search → digest → image/video → posting workflows

Before automation, ChornPlanet needs a structured draft model and workflow so generated content can be reviewed, approved, tracked, and later connected to analytics.

## Goals

- Create a draft-first content model.
- Support multiple content types: news, entertainment, technology, outfit, civilization clothing, commerce, Smart Food, luxury.
- Support review states: draft, reviewed, approved, published, archived.
- Support future image/video prompt drafts.
- Support future product-link and analytics tracking fields.
- Keep publishing and external posting out of scope.
- Align with `.mcp/policies/content-policy.md` and `.mcp/policies/automation-policy.md`.

## Non-Goals

- Do not auto-publish content.
- Do not connect TikTok, Shopee, Lazada, Amazon, or other external platforms.
- Do not implement full CMS admin UI unless explicitly scoped.
- Do not mutate Smart Food customer/order/payment data.
- Do not implement analytics dashboards yet.

## Existing Architecture Review

ChornPlanet is moving toward MongoDB-backed reusable content services.

This feature should follow the target architecture:

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

The current repository has server layers under `server/` and feature data under `src/data/`. Codex should inspect existing server/domain/repository patterns before implementing.

## Proposed Content Draft Schema

Suggested TypeScript shape:

```ts
type ChornPlanetContentDraftType =
  | "news"
  | "entertainment"
  | "technology"
  | "outfit"
  | "civilization-clothing"
  | "commerce"
  | "smart-food"
  | "luxury";

type ChornPlanetContentDraftStatus =
  | "draft"
  | "reviewed"
  | "approved"
  | "published"
  | "archived";

type ChornPlanetContentDraft = {
  id: string;
  type: ChornPlanetContentDraftType;
  status: ChornPlanetContentDraftStatus;
  locale: string;
  title: string;
  summary?: string;
  body?: string;
  caption?: string;
  postKeywords?: string[];
  sourceRefs?: Array<{
    title?: string;
    url?: string;
    publisher?: string;
    accessedAt?: string;
  }>;
  imagePromptDraft?: string;
  videoPromptDraft?: string;
  commerce?: {
    productName?: string;
    marketplacePriority?: "tiktok" | "shopee" | "lazada" | "amazon" | "owned";
    productUrl?: string;
    trackingCode?: string;
  };
  analytics?: {
    campaignName?: string;
    contentCategory?: string;
    source?: string;
    medium?: string;
  };
  createdAt: string;
  updatedAt: string;
};
```

## Project Structure Guideline

Codex should adapt to existing project patterns. Possible structure:

```text
server/core/domain/content-draft.entity.ts
server/core/ports/content-draft.interface.ts
server/core/services/content-draft.service.ts
server/adapters/outbound/mongo.repository/content-draft.repository.ts
src/app/api/content-drafts/route.ts       # only if API route is approved
src/data/content-drafts/                  # only for temporary fixtures if needed
```

If a UI is scoped later, use reusable page components rather than hardcoded page arrays.

## Migration Plan

Phase 1:

- Define type/domain model.
- Define repository/service interface.
- Add MongoDB repository or stub depending on existing infrastructure readiness.
- Add basic validation utilities.
- Add no external publishing.

Phase 2:

- Add draft creation API or internal service usage.
- Add admin/review UI if approved.

Phase 3:

- Connect to outfit/civilization draft pipeline.
- Connect to daily media digest draft pipeline.

## Testing Plan

- Type-check/build relevant code.
- Run lint:

```bash
yarn lint
```

- Run build before merge:

```bash
yarn build
```

- Add unit tests if existing test setup supports server/domain logic.
- Validate draft statuses and no external publishing side effects.

## Risks and Open Questions

- Should drafts be stored immediately in MongoDB, or start with typed fixtures first?
- Should draft APIs be internal-only or exposed to admin UI?
- What authentication is required before admin draft APIs exist?
- Which locales are required at draft stage?
- Should sourceRefs be required for factual media content?

## Acceptance Criteria

- Content draft model is defined.
- Draft statuses are defined.
- Draft model supports media, outfit, commerce, Smart Food, and luxury categories.
- No external publishing is implemented.
- No marketplace writes are implemented.
- No Smart Food customer/order/payment mutations are implemented.
- Implementation follows existing server/domain/repository architecture where applicable.
- Lint/build checks pass for code changes.
