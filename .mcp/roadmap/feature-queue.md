# Feature Queue

This queue converts the platform roadmap into implementation-sized branches. ChatGPT should create or refine one planning document per feature before Codex implementation.

## Current / Completed Foundation

1. `feature/mcp-agent-workspace`
   - Shared `.mcp` workspace and initial planning.
2. `feature/mcp-repository-understanding-upgrade`
   - Repository maps for routing, locales, styling, UX, metadata, content, server, deployment, and phases.
3. `feature/mcp-phase2-platform-roadmap`
   - Platform roadmap, analytics contracts, growth milestones, and deferred runtime analytics items.

## Recommended Next Branches

1. `feature/mcp-multi-repo`
   - Define ChornPlanet and DNA `.mcp` cooperation.
2. `feature/llm-visibility-files`
   - Add public-safe `llm.txt` and `llm-full.txt`.
3. `feature/content-draft-foundation`
   - Draft-first content model and workflow.
4. `feature/outfit-civilization-content-draft-pipeline`
   - DNA-backed outfit/civilization drafts.
5. `feature/metadata-mongodb-migration`
   - Metadata service/repository design and first migration slice.
6. `feature/analytics-growth-foundation`
   - Aggregate analytics model, report shape, and instrumentation gap reports.
7. `feature/analytics-mcp-data-access`
   - Approval-gated internal API/service access to Google Search Console, Google Analytics, and approved reports.
8. `feature/tiktok-product-linking-draft`
   - Draft product link strategy and tracked link model.
9. `feature/daily-media-digest-draft`
   - Source-reviewed daily digest draft workflow.
10. `feature/smartfood-line-login-planning`
    - Smart Food login and favorite meal planning, without production auth changes.
11. `feature/controlled-publishing-automation`
    - Draft/review automation controls and approval gates.
12. `feature/luxury-project-commerce-expansion`
    - Luxury project showcase and commerce expansion planning.

## Queue Rules

- Keep branches narrow.
- Move completed plans from `.planning/` to `.planning/achieved/`.
- Do not combine runtime analytics credentials, publishing automation, commerce writes, or auth changes with documentation-only roadmap work.
- Use `.mcp/repository/` maps before editing application code.
