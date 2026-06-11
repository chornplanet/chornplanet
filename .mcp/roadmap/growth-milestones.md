# Growth Milestones

`business-core.md` is the main and latest roadmap. This file is the simplified growth execution companion: it keeps traffic milestones, public-site growth priorities, and implementation-sized branch ideas that do not duplicate or redefine the business-core platform strategy.

## Growth Path

```text
10K daily traffic -> 100K -> 500K -> 1M
```

Traffic targets guide prioritization. Agents must not invent metrics. If analytics data is unavailable, create an instrumentation gap note and propose the smallest safe way to gather the signal.

## 10K Daily Traffic

Focus:

- Stable metadata and sitemap coverage.
- Public-safe `llm.txt` and `llm-full.txt`.
- Clear topic hubs for Technology, AI Companions, Smart City, Smart Mobility, Smart Food, Luxury, Style, Story, and ChornPlanet identity.
- Draft-first content workflow with source tracking.
- Repository maps and `.mcp` context that keep future agents grounded in real routes, locales, metadata, content, server, styling, and deployment patterns.

Useful signals:

- Indexed page coverage.
- Impressions and click-through rate.
- Top landing pages.
- Pages with search impressions but weak titles or descriptions.
- Engagement on existing public routes.

Recommended implementation slices:

- `feature/llm-visibility-files`
- `feature/content-draft-foundation`
- `feature/metadata-mongodb-migration`

## 100K Daily Traffic

Focus:

- Repeatable draft pipeline for media, commerce, Smart Food, Luxury, outfit, and civilization content.
- Media topic clusters for news, entertainment, technology, AI, smart city, smart mobility, and lifestyle.
- Outfit and civilization draft pipeline with DNA validation.
- Better internal linking between topic hubs and conversion pages.

Useful signals:

- Category-level traffic.
- Repeat traffic.
- Top queries by topic family.
- Internal-link performance.
- Content pages gaining impressions.

Recommended implementation slices:

- `feature/outfit-civilization-content-draft-pipeline`
- `feature/daily-media-digest-draft`
- `feature/analytics-growth-foundation`

## 500K Daily Traffic

Focus:

- Higher-volume media and commerce workflows.
- Analytics-informed content expansion.
- TikTok-first product linking, with later expansion to Shopee, Lazada, Amazon, or owned commerce only after approval.
- Stronger technical SEO and performance feedback.
- Smart Food web planning for LINE login, favorite meals, user preferences, ordering, and future booking.

Useful signals:

- Content velocity and indexation.
- Traffic source mix.
- Product-link interest.
- Page speed and Core Web Vitals-like signals.
- Conversion and outbound click summaries.

Recommended implementation slices:

- `feature/analytics-mcp-data-access`
- `feature/tiktok-product-linking-draft`
- `feature/smartfood-line-login-planning`

## 1M Daily Traffic

Focus:

- Controlled automation with approval gates.
- Mature media, commerce, Smart Food, Luxury, and civilization content loops.
- Luxury project showcase and premium commerce storytelling.
- Strong operational analytics summaries.
- Durable cross-repository cooperation with DNA and future Smart Food systems.

Useful signals:

- Sustained organic growth.
- Content retention and recirculation.
- Commerce conversion trend.
- Automation quality review.
- Source quality and publication safety.

Recommended implementation slices:

- `feature/controlled-publishing-automation`
- `feature/luxury-project-commerce-expansion`

## Feature Queue

Use this queue for implementation-sized planning. Each feature should have a focused `.planning/in-progress/*.md` before Codex implementation. Completed features should be summarized in `.planning/achieved/released.md`.

### Completed Foundation

1. `feature/mcp-agent-workspace`
   - Shared `.mcp` workspace and initial planning.
2. `feature/mcp-repository-understanding-upgrade`
   - Repository maps for routing, locales, styling, UX, metadata, content, server, deployment, and phases.
3. `feature/mcp-phase2-platform-roadmap`
   - Platform roadmap, analytics contracts, growth milestones, and deferred runtime analytics items.

### Recommended Next Branches

1. `feature/mcp-multi-repo`
   - Define ChornPlanet and DNA `.mcp` cooperation.
2. `feature/llm-visibility-files`
   - Maintain public-safe `llm.txt` and `llm-full.txt`.
3. `feature/content-draft-foundation`
   - Draft-first content model and workflow.
4. `feature/outfit-civilization-content-draft-pipeline`
   - DNA-backed outfit and civilization drafts.
5. `feature/metadata-mongodb-migration`
   - Metadata service and repository design with the first migration slice.
6. `feature/analytics-growth-foundation`
   - Aggregate analytics model, report shape, and instrumentation gap reports.
7. `feature/analytics-mcp-data-access`
   - Approval-gated internal API or service access to Google Search Console, Google Analytics, and approved reports.
8. `feature/tiktok-product-linking-draft`
   - Draft product link strategy and tracked link model.
9. `feature/daily-media-digest-draft`
   - Source-reviewed daily digest draft workflow.
10. `feature/smartfood-line-login-planning`
    - Smart Food login and favorite meal planning without production auth changes.
11. `feature/controlled-publishing-automation`
    - Draft/review automation controls and approval gates.
12. `feature/luxury-project-commerce-expansion`
    - Luxury project showcase and commerce expansion planning.

## Approval Boundaries

- No analytics credentials may be committed.
- Google Search Console and Google Analytics API access requires explicit approval.
- External publishing requires explicit approval.
- Marketplace writes require explicit approval.
- Smart Food customer, order, payment, and identity mutations require explicit approval.
- Production authentication changes require explicit approval.
- Production schema changes require explicit approval.
- If analytics data is unavailable, agents must produce a data gap report instead of inventing metrics.

## Queue Rules

- Keep branches narrow.
- Keep active plans under `.planning/in-progress/`.
- Add completed releases to `.planning/achieved/released.md` and keep `.planning/achieved/` limited to that one file.
- Do not combine runtime analytics credentials, publishing automation, commerce writes, or auth changes with documentation-only roadmap work.
- Use `.mcp/repository/` maps before editing application code.
