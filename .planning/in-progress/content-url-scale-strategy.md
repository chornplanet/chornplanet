# Content URL Scale Strategy

## Status

Planning draft for `feature/content-url-scale-strategy`.

## Problem Statement

ChornPlanet needs a scalable content and URL strategy that can grow toward the Google sitemap capacity limit of 50,000 URLs per sitemap file while preserving content quality, localization accuracy, sitemap reliability, automation safety, and long-term traffic growth.

The goal is not to create 50,000 low-value pages. The goal is to design ChornPlanet as a structured global content network where high-quality canonical content records can be localized, organized, published, refreshed, measured, and expanded over time.

## Strategic Goal

Use 50,000 URLs as a long-term capacity and architecture target:

```text
5,000 high-quality canonical content records
x 10 localized URL versions
= 50,000 sitemap-ready URLs
```

This fits the existing ChornPlanet direction:

- Next.js routes
- content loader / server service
- MongoDB Atlas repository
- typed content schema
- reusable page components
- localized rendering
- sitemap and metadata alignment
- draft-first automation and review workflow

## Non-Goals

This planning item does not immediately implement:

- automatic external posting
- TikTok, Shopee, Lazada, Amazon, or social platform writes
- Google Search Console or Google Analytics credentials
- production schema mutation without approval
- mass publishing without review
- thin SEO-only pages
- duplicate or low-quality localized content
- private MCP, planning, or unpublished commerce data exposure

## Existing Architecture Review

Current repository guidance already supports this strategy:

- `.chatgpt/Agents.md` requires feature planning under `.planning/in-progress/`.
- `.mcp/README.md` defines ChornPlanet as a content, media, commerce, civilization, Smart Food, luxury, and analytics-assisted growth platform.
- `.mcp/manifest.yaml` identifies the current architecture direction as MongoDB Atlas-backed content services.
- `.mcp/roadmap/chornplanet-platform-roadmap.md` includes SEO/LLM visibility, content draft foundation, analytics growth foundation, daily media digest draft pipeline, and controlled publishing automation.
- `src/lib/sitemap/sitemapRoutes.ts` already discovers localized static routes and several dynamic route families.

The next step is to extend this into a durable content inventory and sitemap grouping strategy.

## Proposed Architecture

```text
Content Planning / Topic Discovery
  -> Content Draft Record
  -> Source / Brand / Quality Review
  -> Canonical Content Group
  -> Locale Content Records
  -> Content Loader / Server Service
  -> MongoDB Atlas Repository
  -> Dynamic Next.js Route
  -> Metadata / Canonical / Alternate Links
  -> Sitemap Group Resolver
  -> Analytics Feedback
  -> Refresh / Expand / Archive Loop
```

## Proposed Content Record Model

```ts
type ContentRecordStatus =
  | "draft"
  | "review"
  | "approved"
  | "scheduled"
  | "published"
  | "archived";

type ContentRecord = {
  id: string;
  canonicalGroupId: string;
  locale: string;
  slug: string;
  routePath: string;
  contentType: string;
  category: string;
  subCategory?: string;
  zoneType?: "Mountain" | "Coastal" | "Hybrid";
  title: string;
  summary: string;
  body: unknown;
  media?: unknown;
  sourceRefs?: Array<{
    title: string;
    url?: string;
    sourceType: "internal" | "external" | "mcp" | "manual";
  }>;
  qualityScore?: number;
  status: ContentRecordStatus;
  noindex: boolean;
  sitemapGroup: string;
  publishAt?: string;
  publishedAt?: string;
  lastSignificantUpdateAt?: string;
  createdAt: string;
  updatedAt: string;
};
```

## Recommended URL Families

| Family | Example Route | Core Records Target | Localized URL Target |
| --- | --- | ---: | ---: |
| Media Digest | `/en/media/technology/.../` | 1,000 | 10,000 |
| ChornPlanet World / Zones | `/en/world/mountain/.../` | 800 | 8,000 |
| Outfit / Style | `/en/style/.../` | 800 | 8,000 |
| Smart Food | `/en/smart-food/menu/.../` | 500 | 5,000 |
| Smart Mobility / MTS | `/en/smart-mobility/mts/.../` | 300 | 3,000 |
| Product Story | `/en/product-story/.../` | 800 | 8,000 |
| Luxury Showcase | `/en/luxury/.../` | 300 | 3,000 |
| Knowledge / Explainers | `/en/knowledge/.../` | 500 | 5,000 |
| Total |  | 5,000 | 50,000 |

## Sitemap Strategy

Even though a sitemap file can support up to 50,000 URLs, ChornPlanet should split sitemap output by content family earlier for maintainability, monitoring, and Search Console review.

Recommended sitemap structure:

```text
/sitemap.xml
/sitemaps/sitemap-static.xml
/sitemaps/sitemap-media-001.xml
/sitemaps/sitemap-world-001.xml
/sitemaps/sitemap-style-001.xml
/sitemaps/sitemap-smart-food-001.xml
/sitemaps/sitemap-smart-mobility-001.xml
/sitemaps/sitemap-product-story-001.xml
/sitemaps/sitemap-luxury-001.xml
/sitemaps/sitemap-knowledge-001.xml
```

Recommended rules:

- sitemap index points to grouped sitemap files
- each sitemap group should target 10,000 to 20,000 URLs before splitting further
- each URL must be canonical and indexable
- each URL must include accurate `lastModified` based on meaningful content updates
- localized URLs must align with canonical and alternate language behavior
- no draft, review, archived, private, noindex, or incomplete content should enter public sitemap output

## Publishing Capability Plan

### Stage 1: Foundation Period, Months 1-3

Purpose: prove quality, indexing, and workflow reliability.

Daily capability:

- 3 to 5 new approved pages
- 1 to 2 refreshed existing pages
- 1 social or TikTok-ready content package in draft/review mode

Weekly capability:

- 1 pillar article
- 1 ChornPlanet world or zone page
- 1 outfit or style collection
- 1 Smart Food, commerce, or product story page

Monthly capability:

- 100 to 150 new localized URLs
- 20 to 40 refreshed URLs

### Stage 2: Growth Period, Months 4-12

Purpose: build topical authority and repeatable production.

Daily capability:

- 10 to 20 new approved pages
- 5 to 10 refreshed pages
- 2 to 5 social-ready packages in draft/review mode

Weekly capability:

- 3 to 5 pillar pages
- 10 to 20 supporting pages
- 3 to 5 commerce, product, style, or civilization story pages

Monthly capability:

- 400 to 800 new canonical content records if quality capacity exists
- 4,000 to 8,000 localized URLs when all locales are approved and generated

### Stage 3: Network Period, Month 12+

Purpose: operate ChornPlanet as a worldwide content, commerce, and civilization traffic network.

Daily capability:

- 20 to 50 approved content records only if analytics and review capacity support it
- 10 to 30 refreshed records
- 5 to 10 social or commerce packages in controlled automation mode

Monthly capability:

- 1,000+ core records only when quality, indexing, engagement, and conversion signals justify expansion

## Automation Methodology

Automation must remain draft-first until controlled publishing is explicitly approved.

```text
Topic Discovery
  -> Content Brief
  -> Draft Generation
  -> Source / Fact / Brand Check
  -> TH Review when business meaning matters
  -> Regenerated EN
  -> Multilingual Generation
  -> SEO Metadata + Schema
  -> Quality Score
  -> Approval
  -> Schedule
  -> Publish
  -> Sitemap Update
  -> Analytics Review
  -> Refresh / Expand / Archive
```

## Quality Gates Before Sitemap Inclusion

A URL can enter the sitemap only when it passes these checks:

- approved title
- approved slug
- canonical URL
- locale alternates
- meta title
- meta description
- meaningful body content
- image alt text when image exists
- content type
- sitemap group
- no duplicate intent
- no thin content
- no private or internal MCP data exposed
- no unsupported claim
- no broken image
- no broken internal link
- status is `published`
- `noindex` is false

For digest, news, entertainment, technology, or factual content, add:

- source tracking
- no full article copying
- summary and original ChornPlanet analysis
- publication date
- update date
- clear distinction between fact, interpretation, and recommendation

## Worldwide Network And Traffic Flow

```text
Google Search / AI Search / Social Discovery
  -> Localized Topic Hub
  -> Supporting Article / Story / Product Page
  -> Related World / Outfit / Smart Food / Mobility / Luxury Page
  -> TikTok / LINE OA / Product Link / Inquiry / Return Visit
```

Recommended public hub families:

```text
/en/media/
/en/technology/
/en/smart-food/
/en/style/
/en/world/
/en/smart-mobility/
/en/luxury/
/en/product-story/
/en/knowledge/
```

Each hub should include:

- pillar content
- latest content
- category filters
- internal links
- related content modules
- localized alternate links
- metadata
- schema markup where appropriate
- clear conversion or next-action path

## Project Structure Guideline

Potential implementation paths for later Codex phases:

```text
src/lib/content-scale/
src/lib/content-scale/contentRecord.types.ts
src/lib/content-scale/contentQuality.ts
src/lib/content-scale/contentWorkflow.ts
src/lib/sitemap/sitemapGroups.ts
src/lib/sitemap/sitemapIndex.ts
src/lib/sitemap/contentSitemapRepository.ts
src/app/sitemaps/[group]/[page]/route.ts
server/core/domain/content-record.entity.ts
server/core/services/content-record.service.ts
server/adapters/outbound/mongo.repository/content-record.repository.ts
```

No runtime implementation is required in this planning branch unless separately approved.

## Risks

- Publishing too many pages before quality review can reduce trust and indexing quality.
- Localized pages without meaningful translation review may create weak user experience.
- Automation without approval gates can publish incorrect, duplicated, or unsupported content.
- Sitemap growth without analytics can hide indexing problems.
- Traffic growth without internal linking and conversion flow may create low-value visits.
- Factual digest content requires source tracking and copyright-safe summarization.
- Commerce and external platform posting require explicit approval.

## Open Questions

- Which content family should be the first scalable MongoDB-backed URL family?
- Should the first implementation target sitemap grouping only, or content draft schema first?
- What is the minimum quality score required for sitemap inclusion?
- Which analytics source becomes the first source of truth: Search Console, GA, Vercel, or a manual report export?
- Should localized URLs be published immediately after generation, or only after spot-review by priority market?

## Acceptance Criteria

This planning feature is complete when:

- the strategy defines why 50,000 URLs is a capacity target, not a mass-publishing goal
- URL families and sitemap groups are defined
- draft-first automation flow is defined
- daily, weekly, and monthly publishing capability stages are defined
- quality gates for sitemap inclusion are defined
- worldwide traffic flow is defined
- implementation paths are proposed but not forced
- approval boundaries are respected
- the plan is ready for Chief Architect review and later Codex implementation planning
