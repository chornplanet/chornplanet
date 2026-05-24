# Feature Plan: MCP Repository Understanding Upgrade

Branch for planning: `feature/mcp-agent-workspace`
Implementation branch: `feature/mcp-repository-understanding-upgrade`
Status: Planning
Owner: Khachornchit Chief Architect → ChatGPT planning → Codex review/implementation

## Problem Statement

ChornPlanet now has a `.mcp` workspace that captures high-level product, media, commerce, Chorn DNA, Smart Food, analytics, and SEO/LLM direction. However, ChatGPT and Codex also need a deeper repository-understanding layer so future planning and implementation can improve the real codebase step-by-step.

The `.mcp` workspace should help agents understand:

- existing Next.js routing
- locale/i18n rules
- SCSS and Tailwind usage
- UX/UI patterns
- navigation and layout
- metadata and SEO
- MongoDB/server architecture
- content data migration patterns
- media and commerce feature architecture
- how to plan and implement phase-by-phase without breaking current pages

## Goals

- Upgrade `.mcp` so agents understand the existing repository, not only the product strategy.
- Add repository maps for SCSS, Tailwind, UX/UI, navigation, layout, routes, metadata, server, content, and deployment.
- Add planning guidance for phase-by-phase implementation toward the platform goal.
- Help Codex implement future features safely using existing patterns.
- Help ChatGPT create better feature planning documents that reflect the real codebase.

## Non-Goals

- Do not refactor the whole repository in this feature.
- Do not migrate metadata or content data in this feature.
- Do not change UI/UX in this feature unless the plan explicitly scopes documentation-only updates.
- Do not introduce new styling systems.
- Do not remove SCSS or Tailwind.

## Existing Architecture Review

Current Codex guide identifies important repository patterns:

- Next.js 16 app router
- React 18
- TypeScript 5
- SCSS and vendor CSS as dominant styling pattern
- Tailwind exists but most pages use SCSS classes
- Redux Toolkit via `src/provider/`
- MongoDB, OpenAI SDK, AWS SDK, Vercel Speed Insights
- CDN redirects through `next.config.mjs`
- localized routes under `src/app/[locale]/...`
- food route group under `src/app/(food)/`
- API routes under `src/app/api/`
- server-side service/repository layers under `server/`
- metadata under `src/metadata/`
- route maps under `src/lib/UrlMaps.ts`
- image registry under `src/image/ImageUrl.ts`

Current `.mcp` already captures product direction but needs repository-specific maps and improvement guides.

## Proposed `.mcp` Additions

Add repository-understanding docs:

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

Add or update tool contracts:

```text
.mcp/tools/repo-tools.yaml
.mcp/tools/seo-llm-tools.yaml
.mcp/tools/content-tools.yaml
```

Add or update workflows:

```text
.mcp/workflows/repository-audit.md
.mcp/workflows/ux-ui-improvement.md
.mcp/workflows/navigation-layout-improvement.md
.mcp/workflows/content-migration.md
```

## Repository Understanding Areas

### 1. SCSS and Tailwind

Document:

- where global SCSS is imported
- naming conventions such as `add-` and `x-`
- which pages/components use SCSS
- where Tailwind exists but should not be overused
- how to avoid style system fragmentation

### 2. UX/UI

Document:

- existing hero/banner/page section patterns
- reusable components
- content density rules
- mobile/desktop considerations
- premium/luxury visual direction
- commerce conversion UX direction

### 3. Navigation and Layout

Document:

- main layout files
- localized route behavior
- trailing slash rule
- sitemap and UrlMaps behavior
- navigation menu structure
- future media/commerce navigation expansion

### 4. Metadata and SEO

Document:

- current hardcoded metadata pattern
- metadata migration plan
- route metadata conventions
- sitemap and robots behavior
- future `llm.txt` and `llm-full.txt` direction

### 5. Content and MongoDB

Document:

- existing `src/data/` patterns
- existing server/domain/repository structure
- content loader/service patterns
- migration approach from hardcoded content to MongoDB

### 6. Platform Growth Phases

Document phase-by-phase improvement path:

```text
Phase 1: Repository understanding and maps
Phase 2: SEO/LLM visibility
Phase 3: Content draft foundation
Phase 4: Outfit/civilization draft pipeline
Phase 5: Metadata to MongoDB migration
Phase 6: Analytics growth foundation
Phase 7: TikTok-first commerce linking
Phase 8: Daily media digest drafts
Phase 9: Smart Food user experience planning
Phase 10: Controlled automation
```

## Implementation Scope

This feature should be mostly documentation and `.mcp` upgrade.

Codex should:

- Inspect actual repo structure.
- Create the `.mcp/repository/` map documents.
- Update `.mcp/tools/` where useful.
- Add workflows for repository audit, UX/UI improvement, navigation/layout improvement, and content migration.
- Avoid production code changes unless needed to validate the repository maps.

## Testing Plan

Documentation-only validation:

- Confirm all `.mcp/repository/` docs match real repository paths.
- Confirm no secrets are included.
- Confirm docs do not contradict `.codex/Agents.md`.
- Confirm future implementation phases are clear.

If any code or route change is made:

```bash
yarn lint
yarn build
```

## Risks and Open Questions

- Should `.mcp/repository/` become the canonical repo map, or should `.codex/Agents.md` remain the primary implementation guide?
- Should the repository maps be generated manually or updated by future scripts?
- Which UX/UI pages should be audited first?
- How much of the roadmap should be public versus internal-only?

## Acceptance Criteria

- `.mcp/repository/` exists with practical repository maps.
- Maps cover routing, locales, styling, UX/UI, navigation/layout, metadata/SEO, content data, server architecture, and deployment.
- New workflows exist for repository audit and improvement planning.
- Future ChatGPT planning can reference `.mcp/repository/` before proposing implementation.
- Future Codex implementation can reference `.mcp/repository/` before editing code.
- No production behavior changes occur unless explicitly scoped.
