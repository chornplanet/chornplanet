# ChornPlanet Roadmap

Branch for planning: `feature/mcp-agent-workspace`
Implementation branch recommendation: `feature/chornplanet-roadmap`
Status: Planning
Owner: Khachornchit Chief Architect -> ChatGPT planning -> Codex review/implementation

## Purpose

This roadmap defines the next ChornPlanet platform evolution after the recent
`/ai-luxury` and `/smart-food-ai` launches.

```text
Completed = AI Luxury and Smart Food AI are now live platform capabilities
Next = Execute the broader ChornPlanet Roadmap and New Platform Layout
```

The immediate priority is to choose the next platform step that compounds these
completed pages into clearer product positioning, stronger SEO/LLM visibility,
and a more coherent premium platform architecture.

## Strategic Positioning

ChornPlanet should communicate three layers clearly:

```text
1. Real production platform
   - Smart Food AI is already represented as a public AI-native production showcase.
   - AI Luxury is already represented as a premium AI companion/luxury platform direction.
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
  Existing ChornPlanet Roadmap + New Platform Layout
  Goal: complete the broader luxury civilization media/commerce platform redesign and ecosystem expansion
```

---

# Achieved Items

## `/ai-luxury`

- `/[locale]/ai-luxury/` has been implemented as a public premium AI Luxury platform page.
- The page establishes ChornPlanet's luxury AI companion/platform direction.
- The route is now part of the platform surface and should be treated as completed baseline work rather than an open roadmap item.

## `/smart-food-ai`

- `/[locale]/smart-food-ai/` has been implemented as a public Smart Food AI showcase.
- Primary navigation now highlights Smart Food AI as a real AI-native production capability.
- The page communicates workflow, platform value, and local Chiang Mai business production direction without exposing unnecessary low-level internals.
- Future Smart Food work should continue as integration, content growth, SEO/LLM visibility, analytics, and MenuMatch cooperation rather than first-page implementation.

---

# Codex To ChatGPT

ChatGPT should review the achieved `/ai-luxury` and `/smart-food-ai` pages as
completed platform foundations, then recommend the next highest-leverage roadmap
step.

Please analyze:

- Which next feature best compounds the completed AI Luxury and Smart Food AI surfaces.
- Whether the next step should prioritize `feature-new-platform-layout`, `llm-visibility-files`, `content-draft-foundation`, analytics growth, or multi-repo MCP integration.
- What implementation branch Codex should create next.
- What acceptance criteria should define the next feature so Codex can implement it without reopening completed `/ai-luxury` or `/smart-food-ai` scope.

---

# Next Phase: Existing Roadmap + New Platform Layout

## Goal

The next phase contains the broader ChornPlanet platform evolution from the
existing roadmap and New Platform Layout plan.

Primary planning files:

```text
.chatgpt/planning/chornplanet-roadmap.md
.chatgpt/planning/feature-new-platform-layout.md
```

This phase should preserve and continue the previous roadmap direction, but
execute it under the new platform layout strategy.

## Platform Layout Direction

Primary identity:

```text
ChornPlanet
Luxury Civilization Media & Commerce Platform
```

Recommended primary navigation:

```text
World | Outfit | Media | Commerce | Smart Food | Luxury
```

Legacy technical pages should remain discoverable in the footer instead of
dominating the primary navigation.

## Existing Roadmap Items Preserved

The following previous roadmap directions remain valid:

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

These should be implemented as separate feature plans and branches, not as one
large feature.

## New Feature Note

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
- Smart Food AI web presentation
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

1. `feature-new-platform-layout`
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
- External publishing requires explicit approval.
- Marketplace writes require explicit approval.
- Smart Food customer/order/payment mutations require explicit approval.
- Production authentication changes require explicit approval.
- Crypto/blockchain runtime features require dedicated planning, legal/compliance review, and explicit approval.
- Secrets and credentials must not be committed.

## Roadmap Acceptance Criteria

- Roadmap clearly separates achieved page foundations from the next platform phase.
- Achieved items summarize `/ai-luxury` and `/smart-food-ai` without carrying long completed implementation briefs.
- The next phase preserves the existing roadmap and New Platform Layout direction.
- The next phase includes the future Crypto Currency and Blockchain Integration note.
- The `Codex To ChatGPT` section gives ChatGPT a clear prompt for recommending the next implementation step.
- ChornPlanet, Chorn DNA, and MenuMatch responsibilities remain clearly separated.
- The roadmap can be used by Codex to create implementation branches per feature.
