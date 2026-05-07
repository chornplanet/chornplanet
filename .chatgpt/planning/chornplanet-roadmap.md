# ChornPlanet Roadmap

Branch for planning: `feature/mcp-agent-workspace`
Implementation branch recommendation: `feature/chornplanet-roadmap`
Status: Planning
Owner: Khachornchit Chief Architect → ChatGPT planning → Codex review/implementation

## Purpose

This roadmap defines the next ChornPlanet platform evolution in two major phases:

```text
Phase 1 = Improve the existing layout with investor-facing production capability
Phase 2 = Execute the broader ChornPlanet Roadmap and New Platform Layout
```

The immediate priority is to show that ChornPlanet is not only a concept or sample project. ChornPlanet should demonstrate a real AI-native production platform capability through the Smart Food AI project, starting from the current local business production launch in Chiang Mai.

## Strategic Positioning

ChornPlanet should communicate three layers clearly:

```text
1. Real production platform
   - Smart Food AI is already connected to real local business direction in Chiang Mai.
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

### Khachornchit — Chief Architect

Khachornchit owns final architecture direction, product direction, ChornPlanet platform direction, and production approval.

### ChatGPT

ChatGPT owns discovery, planning, architecture proposals, product strategy, UI/content direction, and implementation handoff.

### Codex

Codex owns implementation, tests, validation, and preserving compatibility with the existing Next.js/MongoDB architecture.

## Current State

ChornPlanet is a Next.js platform with `.mcp` support and a growing planning system under `.chatgpt/planning/`.

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

MenuMatch can join as the Smart Food backend and conversational commerce source of truth.

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
Phase 1
  Smart Food AI on the existing layout
  Goal: prove real production AI-native capability immediately

Phase 2
  Existing ChornPlanet Roadmap + New Platform Layout
  Goal: complete the broader luxury civilization media/commerce platform redesign and ecosystem expansion
```

---

# Phase 1: Smart Food AI Production Showcase on Existing Layout

## Goal

Add or improve features on the existing layout first, with Smart Food AI as the main Phase 1 feature.

Smart Food AI should show that ChornPlanet is building a real AI-native platform, not only a sample project. It should attract investors, venture capital, CEOs, recruitment, HR, strategic partners, and future customers by presenting production readiness in a premium ChornPlanet style.

## Main Feature

Dedicated planning file:

```text
.chatgpt/planning/feature-smart-food-ai.md
```

Recommended implementation route:

```text
src/app/[locale]/smart-food-ai/page.tsx
```

Recommended component area:

```text
src/components/smart-food-ai/
```

## Phase 1 Scope Outline

### 1. Smart Food AI Landing Page

Create a new Smart Food AI landing page based on the existing AI/Fah, AI Solutions, and Home Feature page concepts.

Possible starting composition:

```tsx
return (
  <div className="smart-container-top">
    <AiFahLandingPage lang={lang} fah={content.aiCompanions.fah} />
    <AiSolutionsMain
      lang={lang}
      service={content.service}
      llmSlides={content.media.llmSlides}
    />
    <HomeFeatureMain
      lang={lang}
      feature={content.feature}
      featureImage={content.media.featureImage}
      isHideTopTitle={true}
    />
  </div>
);
```

Codex may rebuild this into dedicated Smart Food AI components and SCSS instead of directly reusing the existing components.

### 2. Navbar Label Update

Replace the existing primary navigation label:

```text
AI Integration -> Smart Food AI
```

Reason:

- `AI Integration` already exists in the footer under Technology.
- Primary navigation should highlight the real production capability and investor-facing Smart Food AI project.

Recommended route:

```text
/[locale]/smart-food-ai/
```

### 3. Footer Link Update

Change the footer label/link for AI Integration from:

```text
https://www.chornplanet.com/en/technical-expertise/ai-solutions/
```

to:

```text
https://www.chornplanet.com/en/ai-companions/fah/
```

### 4. Premium Poster-to-UI Storytelling

Convert the Smart Food poster concept into responsive Next.js pages/components/SCSS.

The page should explain:

- how Smart Food AI works
- end-to-end workflow
- production launch from local business in Chiang Mai
- key platform features
- business value and readiness
- ChornPlanet ability to build AI-native products

It must not expose low-level technical detail such as LangGraph, LangChain, RAG, vector databases, model orchestration, or internal implementation specifics.

### 5. Visual Direction

Use ChornPlanet / Chorn DNA premium image direction:

- young men/women, 19–22 years old
- premium lifestyle and restaurant/food service atmosphere
- modern Chiang Mai/local-business production context
- luxury editorial but practical platform-readiness feeling
- AI-native capability shown through UI, workflow, and service experience, not through raw technical diagrams

### 6. Content Strategy

Start with English-only content.

Allowed first content options:

```text
Option A: hardcoded local content in the page/component layer
Option B: existing content loader/server service pattern
Option C: MongoDB Atlas content document before launch
```

Final launch target:

```text
Push final content to MongoDB Atlas before production launch.
```

### 7. Reference Sources

Use MenuMatch for Smart Food capability direction:

```text
https://github.com/khachornchit/menumatch/blob/main/.chatgpt/Agents.md
```

Use Chorn DNA for premium visual/story direction:

```text
https://github.com/khachornchit/chorn-dna/blob/main/.chatgpt/Agents.md
```

### 8. Acceptance Criteria

- `/[locale]/smart-food-ai/` exists and renders correctly.
- Primary navigation label uses `Smart Food AI` instead of `AI Integration`.
- Footer AI Integration link points to `/[locale]/ai-companions/fah/`.
- Smart Food AI page communicates real production readiness from local business in Chiang Mai.
- Page explains workflow, features, and business value without exposing low-level technical details.
- UI is premium, responsive, and implemented with Next.js components and SCSS.
- English content is ready first.
- MongoDB Atlas content push is planned before production launch.

---

# Phase 2: Existing Roadmap + New Platform Layout

## Goal

Phase 2 contains the broader ChornPlanet platform evolution from the existing roadmap and New Platform Layout plan.

Primary planning files:

```text
.chatgpt/planning/chornplanet-roadmap.md
.chatgpt/planning/feature-new-platform-layout.md
```

Phase 2 should preserve and continue the previous roadmap direction, but execute it under the new platform layout strategy.

## Phase 2 Platform Layout Direction

Primary identity:

```text
ChornPlanet
Luxury Civilization Media & Commerce Platform
```

Recommended primary navigation:

```text
World | Outfit | Media | Commerce | Smart Food | Luxury
```

Legacy technical pages should remain discoverable in the footer instead of dominating the primary navigation.

## Existing Roadmap Items Preserved Under Phase 2

The following previous roadmap directions remain valid under Phase 2:

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

These should be implemented as separate feature plans and branches, not as one large feature.

## Phase 2 New Feature Note

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

1. `feature-smart-food-ai`
2. `feature-new-platform-layout`
3. `feature-mcp-multi-repo`
4. `mcp-repository-understanding-upgrade`
5. `llm-visibility-files`
6. `content-draft-foundation`
7. `outfit-civilization-content-draft-pipeline`
8. `metadata-mongodb-migration`
9. `analytics-growth-foundation`
10. `analytics-mcp-data-access`
11. `chorn-dna-client-adapter`
12. `tiktok-product-linking-draft`
13. `daily-media-digest-draft`
14. `smartfood-line-login-planning`
15. `crypto-blockchain-integration-planning`

## Safety Rules

- `.mcp` defines planning and contracts.
- REST APIs execute runtime communication.
- ChornPlanet must not duplicate Chorn DNA authority rules.
- ChornPlanet should call Chorn DNA validation APIs when runtime validation exists.
- Smart Food AI page may explain capability but must not expose internal technical architecture unnecessarily.
- External publishing requires explicit approval.
- Marketplace writes require explicit approval.
- Smart Food customer/order/payment mutations require explicit approval.
- Production authentication changes require explicit approval.
- Crypto/blockchain runtime features require dedicated planning, legal/compliance review, and explicit approval.
- Secrets and credentials must not be committed.

## Roadmap Acceptance Criteria

- Roadmap clearly separates Phase 1 and Phase 2.
- Phase 1 prioritizes Smart Food AI on the existing layout.
- Phase 1 references the dedicated feature plan.
- Phase 2 preserves the existing roadmap and New Platform Layout direction.
- Phase 2 includes the future Crypto Currency and Blockchain Integration note.
- ChornPlanet, Chorn DNA, and MenuMatch responsibilities remain clearly separated.
- The roadmap can be used by Codex to create implementation branches per feature.
