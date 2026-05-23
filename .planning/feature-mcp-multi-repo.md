# Feature Plan: MCP Multi-Repo Integration

Repository: `khachornchit/chornplanet`
Branch for planning: `feature/mcp-agent-workspace`
Implementation branch recommendation: `feature/mcp-multi-repo`
Status: Planning
Owner: Khachornchit Chief Architect → ChatGPT planning → Codex review/implementation

## Problem Statement

ChornPlanet depends on Chorn DNA for StoryGenProduct, AutoScene, zone/sub-zone resolution, and output contract authority. Both repositories now have `.mcp` workspaces, so the next step is to formalize how the repositories cooperate through `.mcp` before runtime REST APIs are implemented.

This multi-repo contract will let ChatGPT and Codex know when a feature belongs in ChornPlanet, when it belongs in Chorn DNA, and how to plan cross-repo implementation safely.

## Goals

- Define ChornPlanet's `.mcp` integration contract with Chorn DNA.
- Document what ChornPlanet consumes from Chorn DNA.
- Prepare for future runtime REST communication with the Chorn DNA Go backend.
- Keep `.mcp <-> .mcp` as the planning/contract layer.
- Keep `REST <-> REST` as the runtime communication layer.
- Prepare later MenuMatch integration as a separate Smart Food phase.

## Non-Goals

- Do not implement the Chorn DNA client adapter in this feature.
- Do not call real Chorn DNA REST APIs yet.
- Do not publish content externally.
- Do not mutate commerce or Smart Food data.
- Do not duplicate Chorn DNA authority rules inside ChornPlanet.

## Proposed `.mcp` Additions

Create:

```text
.mcp/integrations/chorn-dna.md
.mcp/tools/integration-tools.yaml
.mcp/workflows/chorn-dna-integration.md
```

Optional later:

```text
.mcp/integrations/menumatch.md
```

## Integration Contract

### ChornPlanet consumes from Chorn DNA

```text
- active workflow metadata
- StoryGenProduct validation authority
- AutoScene validation authority
- Zone List -> Zone File -> exactly one Sub-Zone authority
- ImagePrompt / VdoPrompt / StoryPostEngine contract references
- future Go REST validation APIs
```

### ChornPlanet owns

```text
- content pages and platform UX
- content draft foundation
- outfit/civilization draft pipeline
- commerce and marketplace linking direction
- analytics and SEO/LLM visibility
- Smart Food web evolution
- calling Chorn DNA for validation, not duplicating Chorn DNA rules
```

## Agent-Level Flow

```text
ChornPlanet feature needs DNA authority
  ↓
Read ChornPlanet .mcp/integrations/chorn-dna.md
  ↓
Read Chorn DNA .mcp/integrations/chornplanet.md
  ↓
ChatGPT creates planning file in ChornPlanet or Chorn DNA depending on ownership
  ↓
Codex implements in the correct repository branch
```

## Future Runtime Flow

```text
ChornPlanet Next.js
  ↓ REST
Chorn DNA Go API
  ↓
DNA validation / zone resolver / contract validator
```

## Proposed ChornPlanet Runtime Client Preview

Future ChornPlanet client location:

```text
server/adapters/outbound/chorn-dna/
  chorn-dna.client.ts
  chorn-dna.types.ts
```

Future environment variables:

```text
CHORN_DNA_API_URL=
CHORN_DNA_API_TOKEN=
```

Token is optional until protected APIs are implemented.

## Proposed Runtime Use Case

Outfit/civilization draft validation:

```text
Create ChornPlanet content draft
  ↓
Build StoryGenProduct request
  ↓
Call Chorn DNA validateStoryGenProduct API
  ↓
If valid, store draft
  ↓
If invalid, show validation feedback
```

## Future MenuMatch Extension

After ChornPlanet <-> Chorn DNA is stable, add MenuMatch integration:

```text
ChornPlanet Next.js
  ↓ REST
MenuMatch FastAPI
  ↓
menu matching / favorite meals / food order flow
```

This should be handled as a later feature, not mixed into the first Chorn DNA integration.

## Testing Plan

Documentation-only validation:

- Confirm `.mcp/integrations/chorn-dna.md` exists.
- Confirm ChornPlanet does not duplicate Chorn DNA authority.
- Confirm runtime REST contracts are marked future until implemented.
- Confirm MenuMatch is documented as a later extension.

If any code is added, run:

```bash
yarn lint
yarn build
```

## Risks and Open Questions

- Should ChornPlanet read Chorn DNA `.mcp` manually during planning or through a future MCP server?
- Which Chorn DNA validation APIs should ChornPlanet call first?
- Should validation happen during draft creation, publish approval, or both?
- How should API versioning be handled?
- Should ChornPlanet cache Chorn DNA workflow metadata?

## Acceptance Criteria

- ChornPlanet has `.mcp/integrations/chorn-dna.md`.
- ChornPlanet documents agent-level and runtime-level integration boundaries.
- ChornPlanet preserves Chorn DNA as the authority for StoryGenProduct, AutoScene, and zone/sub-zone rules.
- ChornPlanet defines future client adapter location and environment variable contract.
- MenuMatch is documented as a later Smart Food integration phase.
- Codex can implement this documentation/contract feature safely before runtime REST integration.
