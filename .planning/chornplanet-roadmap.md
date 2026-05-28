# ChornPlanet Roadmap

Branch for planning: `feature/mcp-agent-workspace`
Next implementation branch: `feature/new-platform-layout`
Status: Ready for Codex implementation
Owner: Khachornchit Chief Architect -> ChatGPT planning -> Codex implementation/review

## Purpose

This roadmap defines the next ChornPlanet platform evolution after the recent
`/ai-luxury` and `/smart-food-ai` launches.

```text
Completed = AI Luxury and Smart Food AI are live platform capabilities
Next = Execute feature/new-platform-layout as the single next implementation step
```

The immediate priority is to refactor the public route structure into the new
roadmap route group and transform the completed AI Luxury and Smart Food AI
surfaces into the canonical Luxury and Smart Food platform channels.

This document is the single roadmap planning structure for the next step. Do not
create duplicate roadmap documents for this phase. Existing supporting plans may
remain as references, but Codex should treat this file as the implementation
source of truth for `feature/new-platform-layout`.

## Strategic Positioning

ChornPlanet should communicate three layers clearly:

```text
1. Real production platform
   - Smart Food is represented by the completed Smart Food AI foundation.
   - Luxury is represented by the completed AI Luxury foundation.
   - The platform can show practical AI-native product capability without exposing low-level technical internals.

2. Premium civilization media and commerce platform
   - World, Outfit, Media, Commerce, Smart Food, Luxury.
   - Chorn DNA visual language and storytelling direction.

3. Future multi-repository ecosystem
   - ChornPlanet as the web/platform layer.
   - Chorn DNA as the creative/DNA authority layer.
   - MenuMatch as the Smart Food backend and conversational commerce layer.
```

## Roles

### Khachornchit - Chief Architect

Khachornchit owns final architecture direction, product direction, ChornPlanet
platform direction, and production approval.

### ChatGPT

ChatGPT owns discovery, planning, architecture proposals, product strategy,
UI/content direction, and implementation handoff.

### Codex

Codex owns implementation, tests, validation, and preserving compatibility with
the existing Next.js/MongoDB architecture.

## Current State

ChornPlanet is a Next.js platform with `.mcp` support and a growing planning
system under `.chatgpt/planning/`.

Current platform direction:

```text
Next.js Page / Route
   ->
Content Loader / Server Service
   ->
MongoDB Atlas Repository
   ->
Typed Content Schema
   ->
Reusable Page Components
```

ChornPlanet already declares Chorn DNA as an external authority for
StoryGenProduct, AutoScene, ImagePrompt, VdoPrompt, StoryPostEngine, and Zone
List resolution.

MenuMatch can join as the Smart Food backend and conversational commerce source
of truth.

## North Star

ChornPlanet should become:

- a luxury civilization media and commerce platform
- a premium product/story-commerce platform
- an investor-facing AI-native production showcase
- a Smart Food AI web evolution layer
- a platform that can cooperate with Chorn DNA and MenuMatch through `.mcp` planning contracts and future REST/runtime contracts
- an analytics-assisted growth platform
- a future platform for tourism, mixed-use, luxury projects, smart city, and blockchain-enabled commerce stories

Traffic growth target:

```text
10K daily -> 100K -> 500K -> 1M
```

## Roadmap Overview

```text
Achieved
  AI Luxury page
  Smart Food AI page

Next
  feature/new-platform-layout
  Goal: refactor platform routes into src/app/[locale]/(roadmap)/... and establish the new platform channels
```

---

# Achieved Items

## Previous `/ai-luxury`

- Previous route group path: `src/app/[locale]/(legacy)/ai-luxury`.
- New canonical route group path: `src/app/[locale]/(roadmap)/luxury`.
- Public URL target: `/[locale]/luxury/`.
- The completed AI Luxury content foundation should be refined into the broader Luxury channel.
- The Luxury channel should support luxury projects, smart city destination vision, future mobility, investment-facing stories, and premium lifestyle direction.
- Treat the original AI Luxury launch as completed baseline work, not a page to duplicate.

## Previous `/smart-food-ai`

- Previous route group path: `src/app/[locale]/(legacy)/smart-food-ai`.
- New canonical route group path: `src/app/[locale]/(roadmap)/smart-food`.
- Public URL target: `/[locale]/smart-food/`.
- The completed Smart Food AI content foundation should be refined into the broader Smart Food channel.
- The Smart Food channel should support Smart Food system project, food lifestyle, favorite meal concept, Line OA future, MenuMatch cooperation, and conversational commerce direction.
- Treat the original Smart Food AI launch as completed baseline work, not a page to duplicate.

---

# Next Phase: `feature/new-platform-layout`

## Goal

Execute the broader ChornPlanet platform evolution under one coherent route and
content structure.

Primary identity:

```text
ChornPlanet
Luxury Civilization Media & Commerce Platform
```

Primary navigation:

```text
World | Outfit | Media | Commerce | Smart Food | Luxury
```

The new route group for this roadmap phase must be:

```text
src/app/[locale]/(roadmap)/...
```

This repository already uses `[locale]` as the parent app segment and has an
existing `src/app/[locale]/(legacy)/...` route group. The roadmap platform must
therefore be a sibling route group under `[locale]`, not `src/app/(roadmap)/[locale]/...`.

Do not create a separate duplicated roadmap document or a second competing page
structure. Refactor and reuse the existing completed page foundations where
possible.

## Layout Strategy

The existing desktop route group is:

```text
src/app/[locale]/(legacy)
```

The new roadmap route group is:

```text
src/app/[locale]/(roadmap)
```

The existing desktop layout at `src/app/[locale]/(legacy)/layout.tsx` owns the
current global SCSS imports, `AppProvider`, cookie consent, navbar, footer, AOS,
go-to-top behavior, and speed insights. The roadmap platform can use the same
base behavior, but it cannot inherit the sibling `(legacy)` layout directly by
filesystem nesting.

Implementation should choose one explicit layout approach:

- Extract the shared shell from `src/app/[locale]/(legacy)/layout.tsx` into a
  reusable layout component/helper and use it from both `(legacy)` and
  `(roadmap)` layouts.
- Or create `src/app/[locale]/(roadmap)/layout.tsx` that intentionally mirrors
  the desktop base while allowing roadmap-specific navigation, footer, body
  class, or style decisions.

Avoid having the same public path implemented in both `(legacy)` and
`(roadmap)` at the same time. If a path moves to `(roadmap)`, the old path
should become a redirect/canonical strategy or be removed from the competing
route group.

## Styles Strategy

`src/styles` is organized before the roadmap implementation so new platform
styles do not continue the previous flat global-file pattern.

Use these ownership folders:

```text
src/styles/base/
src/styles/vendor/
src/styles/legacy/
src/styles/utilities/
src/styles/navigation/
src/styles/layout/
src/styles/home/
src/styles/smart-city/
src/styles/platform/
src/styles/pages/
```

New roadmap platform styles should go under `src/styles/platform/` and use
scoped root classes such as `.platform-*`, `.platform-home-*`, or
`.platform-channel-*`. Treat `src/styles/legacy/` as inherited template CSS and
avoid changing it unless the implementation intentionally changes legacy visual
behavior.

## Canonical Route Structure

Codex should create or refactor the next public platform channels under the
`(roadmap)` route group:

```text
src/app/[locale]/(roadmap)/page.tsx
src/app/[locale]/(roadmap)/world/page.tsx
src/app/[locale]/(roadmap)/outfit/page.tsx
src/app/[locale]/(roadmap)/media/page.tsx
src/app/[locale]/(roadmap)/commerce/page.tsx
src/app/[locale]/(roadmap)/smart-food/page.tsx
src/app/[locale]/(roadmap)/luxury/page.tsx
src/app/[locale]/(roadmap)/about/page.tsx
src/app/[locale]/(roadmap)/history/page.tsx
```

Public URLs should remain clean:

```text
/[locale]/world/
/[locale]/outfit/
/[locale]/media/
/[locale]/commerce/
/[locale]/smart-food/
/[locale]/luxury/
/[locale]/about/
/[locale]/history/
```

## Required Refactors

### AI Luxury -> Luxury

Refactor:

```text
src/app/[locale]/(legacy)/ai-luxury
```

Into:

```text
src/app/[locale]/(roadmap)/luxury
```

Guidance:

- Reuse the strongest completed AI Luxury content and components where practical.
- Reposition from a narrow AI Luxury page into the broader ChornPlanet Luxury channel.
- Do not duplicate the page under both route groups unless a temporary redirect is required.
- Preserve SEO value with redirect or canonical strategy from `/[locale]/ai-luxury/` to `/[locale]/luxury/`.
- Update metadata, sitemap route discovery, and internal links.

### Smart Food AI -> Smart Food

Refactor:

```text
src/app/[locale]/(legacy)/smart-food-ai
```

Into:

```text
src/app/[locale]/(roadmap)/smart-food
```

Guidance:

- Reuse the strongest completed Smart Food AI content and components where practical.
- Reposition from a narrow Smart Food AI page into the broader ChornPlanet Smart Food channel.
- Do not duplicate the page under both route groups unless a temporary redirect is required.
- Preserve SEO value with redirect or canonical strategy from `/[locale]/smart-food-ai/` to `/[locale]/smart-food/`.
- Update metadata, sitemap route discovery, and internal links.

## Platform Channel Meanings

### World

For ChornPlanet civilization, zones, world-building, scene systems, and
destination-like content.

### Outfit

For lady/gentleman outfit, civilization clothing, Chorn DNA-inspired fashion,
and product story posts.

### Media

For news, entertainment, technology digest, AI/future lifestyle articles, and
daily follow-up content.

### Commerce

For premium products, outfit commerce, grocery/online supermarket concepts,
product stories, and TikTok-first marketplace direction.

### Smart Food

For Smart Food system project, food ordering concept, favorite meal, Line OA
login future idea, food lifestyle content, and MenuMatch cooperation.

### Luxury

For luxury projects, smart city destination vision, Circular Mountain Crown,
future mobility, real estate/lifestyle showcases, AI Luxury positioning, and
investment-facing stories.

## Navigation and Footer Direction

Primary navigation should focus on platform channels:

```text
World | Outfit | Media | Commerce | Smart Food | Luxury
```

Legacy technical pages should remain discoverable in the footer instead of
dominating the primary navigation.

Recommended footer grouping:

```text
Important Links
- About
- History
- Smart City
- Smart Mobility
- Technology
- AI Integration
- Technical Expertise
- Contact
```

Footer should also expose platform channels:

```text
Platform
- World
- Outfit
- Media
- Commerce
- Smart Food
- Luxury
```

## Homepage Direction

The homepage should communicate the new ChornPlanet concept as a platform/world,
not a normal company profile site.

Recommended first-pass homepage sections:

```text
1. Hero Civilization Campaign
2. Today on ChornPlanet
3. Civilization Outfit Collection
4. Explore ChornPlanet Zones
5. Premium Commerce
6. Smart Food Experience
7. Luxury Projects
8. Daily Digest / Media
```

The first pass should be practical. Avoid making this feature too large by
building complex detail pages, checkout flows, admin dashboards, runtime Chorn
DNA validation, or publishing automation.

## About and History

Create or refactor these routes under the roadmap group:

```text
src/app/[locale]/(roadmap)/about/page.tsx
src/app/[locale]/(roadmap)/history/page.tsx
```

### `/about/`

`/[locale]/about/` should explain ChornPlanet as the new platform concept:

```text
ChornPlanet is a Luxury Civilization Media & Commerce Platform combining world-building, AI-assisted media, Chorn DNA-powered outfit/civilization content, premium commerce, Smart Food, luxury projects, and analytics-assisted growth.
```

### `/history/`

`/[locale]/history/` should describe origin/history/background.

If `/[locale]/about-chorn/` exists, refactor or redirect it to `/[locale]/history/`
so `/about/` and `/history/` do not duplicate the same concept.

## Language Strategy

Start with refined Thai and English content.

Preserve the existing 10-language routing and localization structure:

```text
da, de, en, fi, fr, ja, ko, nl, th, zh
```

For non-Thai/English locales, preserve existing fallback or translated behavior
where practical. Do not remove locale support.

## Existing Roadmap Items Preserved

The following previous roadmap directions remain valid, but should be implemented
as later separate feature plans/branches after the layout refactor:

1. MCP Agent Workspace Foundation
2. Repository Understanding and Platform Maps
3. Multi-Repo MCP Integration Contract
4. SEO and LLM Visibility
5. Content Draft Foundation
6. Outfit / Civilization Content Draft Pipeline
7. Metadata to MongoDB Migration
8. Analytics Growth Foundation and MCP-Invoked Data Access
9. TikTok-first Commerce Linking
10. Daily Media Digest Draft Pipeline
11. Smart Food Evolution and MenuMatch Integration
12. Controlled Automation and Publishing

## Future Feature Note

Add a future feature direction:

```text
Crypto Currency and Blockchain Integration
```

Initial positioning:

- future blockchain-enabled commerce story
- future token/payment/loyalty exploration only after the core platform is stable
- no production crypto payment, wallet custody, token launch, trading, or financial integration until a dedicated planning file, legal/compliance review, and explicit approval exist

Recommended future planning file:

```text
.chatgpt/planning/feature-crypto-blockchain-integration.md
```

## Multi-Repo Cooperation Model

ChornPlanet should cooperate with Chorn DNA and MenuMatch through two layers:

```text
1. .mcp <-> .mcp
   Agent-level cooperation for planning, contracts, authority, policies, and workflows.

2. REST <-> REST
   Runtime cooperation between ChornPlanet Next.js, future Chorn DNA services, and MenuMatch backend services.
```

### ChornPlanet responsibility

ChornPlanet owns the platform layer:

```text
- website and content platform
- investor-facing showcase pages
- content draft foundation
- outfit/civilization content draft pipeline
- commerce and marketplace linking direction
- SEO and LLM visibility
- analytics growth foundation
- Smart Food web presentation
- Luxury platform presentation
- client adapters to external authority systems
```

### Chorn DNA responsibility

Chorn DNA owns the DNA authority layer:

```text
- StoryGenProduct authority
- AutoScene validation
- Zone List -> Zone File -> exactly one Sub-Zone
- ImagePrompt / VdoPrompt / StoryPostEngine contract validation
- premium ChornPlanet visual/story direction
```

### MenuMatch responsibility

MenuMatch owns or supports the Smart Food backend layer:

```text
- menu matching
- conversational commerce
- order-related backend behavior
- food/menu question answering
- Smart Food production workflow direction
```

## Immediate Feature Queue

Recommended next implementation features:

1. `feature/new-platform-layout`
2. `llm-visibility-files`
3. `content-draft-foundation`
4. `feature-mcp-multi-repo`
5. `mcp-repository-understanding-upgrade`
6. `outfit-civilization-content-draft-pipeline`
7. `metadata-mongodb-migration`
8. `analytics-growth-foundation`
9. `analytics-mcp-data-access`
10. `chorn-dna-client-adapter`
11. `tiktok-product-linking-draft`
12. `daily-media-digest-draft`
13. `smartfood-line-login-planning`
14. `crypto-blockchain-integration-planning`

## Safety Rules

- `.mcp` defines planning and contracts.
- REST APIs execute runtime communication.
- ChornPlanet must not duplicate Chorn DNA authority rules.
- ChornPlanet should call Chorn DNA validation APIs when runtime validation exists.
- Smart Food AI and AI Luxury are completed page foundations; future work should extend them through platform integration, content quality, analytics, and visibility rather than reopening the initial page-build scope.
- Do not duplicate completed `/ai-luxury` and `/smart-food-ai` pages into competing routes. Refactor them into `/luxury/` and `/smart-food/`.
- External publishing requires explicit approval.
- Marketplace writes require explicit approval.
- Smart Food customer/order/payment mutations require explicit approval.
- Production authentication changes require explicit approval.
- Crypto/blockchain runtime features require dedicated planning, legal/compliance review, and explicit approval.
- Secrets and credentials must not be committed.

## Acceptance Criteria for `feature/new-platform-layout`

- The roadmap remains one seamless planning structure in this file.
- The next implementation branch is clearly `feature/new-platform-layout`.
- New public platform channels are implemented under `src/app/[locale]/(roadmap)/...`.
- Existing `src/app/[locale]/(legacy)/...` routes are preserved unless specific routes are intentionally refactored or redirected.
- The `(roadmap)` layout strategy is explicit: shared extracted shell or separate roadmap layout based on the existing desktop base.
- Primary navigation uses World / Outfit / Media / Commerce / Smart Food / Luxury.
- Legacy technical pages are preserved in footer links where applicable.
- `src/app/[locale]/(legacy)/ai-luxury` is refactored to `src/app/[locale]/(roadmap)/luxury` or redirected/canonicalized cleanly.
- `src/app/[locale]/(legacy)/smart-food-ai` is refactored to `src/app/[locale]/(roadmap)/smart-food` or redirected/canonicalized cleanly.
- Public URLs target `/[locale]/luxury/` and `/[locale]/smart-food/`.
- `/[locale]/world/`, `/[locale]/outfit/`, `/[locale]/media/`, `/[locale]/commerce/`, `/[locale]/smart-food/`, `/[locale]/luxury/`, `/[locale]/about/`, and `/[locale]/history/` work.
- Homepage communicates “Luxury Civilization Media & Commerce Platform”.
- Homepage links to Smart Food and Luxury project sections.
- Thai and English content are refined first.
- Existing 10-language routing support is preserved.
- Metadata, sitemap route discovery, redirects, and internal links are updated or explicitly handled.
- `yarn lint` passes.
- `yarn build` passes.
