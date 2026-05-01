# Feature Plan: Outfit / Civilization Content Draft Pipeline

Branch for planning: `feature/mcp-agent-workspace`
Implementation branch: `feature/outfit-civilization-content-draft-pipeline`
Status: Planning
Owner: Khachornchit Chief Architect → ChatGPT planning → Codex review/implementation

## Problem Statement

ChornPlanet should start commerce/media growth from outfit and civilization clothing content because it strongly aligns with Chorn DNA, visual storytelling, TikTok-first commerce, and the ChornPlanet civilization brand.

The platform needs a draft-only pipeline that can create structured outfit/civilization post drafts before any external posting or marketplace linking is automated.

## Goals

- Create an internal draft pipeline for lady/gentleman outfit and civilization clothing posts.
- Follow Chorn DNA authority for `StoryGenProduct`, `AutoScene`, zone/sub-zone resolution, scene diversity, and social-commerce output.
- Support random zone/sub-zone planning from Chorn DNA Zone List.
- Store or structure drafts in a way that can later connect to product links and analytics.
- Keep all external posting as approval-only.

## Non-Goals

- Do not auto-post to TikTok or any external platform.
- Do not publish products to TikTok, Shopee, Lazada, Amazon, or owned commerce.
- Do not implement image/video generation runtime yet unless explicitly approved.
- Do not duplicate Chorn DNA workflow logic inside ChornPlanet if it should remain sourced from chorn-dna.

## Existing Architecture Review

External Chorn DNA authority:

```text
khachornchit/chorn-dna/.chatgpt/Agents.md
khachornchit/chorn-dna/.chatgpt/System/World/Zones/Zone List.md
```

Required command pattern:

```text
StoryGenProduct: <attachments>
AutoScene: [...]
Mode: [Word/.../...]
SkipVideo: True or False
PostKeywords: []
```

Mandatory zone resolution:

```text
Zone List -> Zone File -> exactly one Sub-Zone
```

ChornPlanet `.mcp` files governing this feature:

```text
.mcp/resources/chorn-dna-authority.md
.mcp/tools/chorn-dna-tools.yaml
.mcp/workflows/outfit-civilization-posting.md
.mcp/policies/content-policy.md
.mcp/policies/commerce-policy.md
```

## Proposed Architecture

```text
Outfit Draft Request
  ↓
Chorn DNA Zone Resolver Contract
  ↓
Resolved Zone File + Sub-Zone
  ↓
StoryGenProduct Draft Request Builder
  ↓
Six-scene Draft Plan
  ↓
Content Draft Service / MongoDB Repository
  ↓
Review / Approval Status
```

## Proposed Data Fields

Add outfit/civilization-specific fields on top of the content draft foundation:

```ts
type OutfitCivilizationDraft = {
  draftId: string;
  contentType: "outfit" | "civilization-clothing";
  audience: "lady" | "gentleman" | "unisex";
  styleKeywords: string[];
  productName?: string;
  chornDna: {
    command: "StoryGenProduct";
    autoSceneSource: "explicit" | "random-zone";
    zoneListPath: string;
    zoneFile: string;
    subZone: string;
    skipVideo: boolean;
    postKeywords: string[];
  };
  scenePlan: {
    hook: string;
    scene1: string;
    scene2: string;
    scene3: string;
    scene4: string;
    closing: string;
  };
  commerce?: {
    marketplacePriority?: "tiktok" | "shopee" | "lazada" | "amazon" | "owned";
    productUrl?: string;
    trackingCode?: string;
  };
};
```

## Project Structure Guideline

Possible implementation locations:

```text
server/core/domain/outfit-civilization-draft.entity.ts
server/core/services/outfit-civilization-draft.service.ts
server/core/ports/outfit-civilization-draft.interface.ts
server/adapters/outbound/mongo.repository/outfit-civilization-draft.repository.ts
src/app/api/outfit-civilization-drafts/route.ts   # only if API route is approved
```

If the content draft foundation is implemented first, this feature should extend that model rather than creating a separate incompatible storage pattern.

## Implementation Scope

Phase 1:

- Define draft schema or service extension.
- Define Chorn DNA request builder contract.
- Define zone/sub-zone reference fields.
- Define six-scene plan structure.
- No external publishing.

Phase 2:

- Add draft creation UI or internal API if approved.
- Add TikTok product-link placeholders.

Phase 3:

- Connect to analytics events.
- Add reviewed publishing workflow only after approval.

## Testing Plan

- Validate all draft objects include one resolved zone file and one sub-zone.
- Validate six-scene plan has Hook, Scene1, Scene2, Scene3, Scene4, Closing.
- Validate no external publishing occurs.
- Validate marketplace links are draft placeholders only.
- Run:

```bash
yarn lint
yarn build
```

## Risks and Open Questions

- Should ChornPlanet read Chorn DNA files directly, or should the selected zone/sub-zone be copied into draft metadata by ChatGPT during planning?
- Should random zone selection be implemented in code or left to agent workflows first?
- Should the first UI be admin-only or data-only?
- How should generated image/video prompts be stored: in content draft body, separate prompt fields, or related prompt collection?

## Acceptance Criteria

- Draft pipeline supports outfit/civilization content.
- Draft pipeline follows Chorn DNA zone/sub-zone authority.
- Draft pipeline supports six-scene story structure.
- Draft pipeline supports TikTok-first commerce placeholders.
- No external posting is implemented.
- No marketplace product publication is implemented.
- Lint/build pass for code changes.
