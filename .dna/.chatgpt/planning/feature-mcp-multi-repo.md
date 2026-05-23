# Feature Plan: MCP Multi-Repo Integration

Repository: `khachornchit/chorn-dna`
Branch for planning: `feature/mcp-agent-workspace`
Implementation branch recommendation: `feature/mcp-multi-repo`
Status: Planning
Owner: Khachornchit Chief Architect → ChatGPT planning → Codex review/implementation

## Problem Statement

Chorn DNA and ChornPlanet now both have `.mcp` workspaces. ChornPlanet depends on Chorn DNA for StoryGenProduct, AutoScene, zone/sub-zone resolution, and generation contract authority.

The next step is to formalize the cross-repository cooperation model so agents can understand the dependency before runtime REST APIs are implemented.

## Goals

- Define Chorn DNA's `.mcp` integration contract for ChornPlanet.
- Document what Chorn DNA owns and exposes as authority.
- Document what ChornPlanet may consume.
- Prepare for future Chorn DNA Go REST APIs.
- Keep `.mcp <-> .mcp` as the planning/contract layer.
- Keep `REST <-> REST` as the runtime communication layer.

## Non-Goals

- Do not implement Go REST APIs in this feature.
- Do not deploy to Vercel in this feature.
- Do not change active StoryGenProduct authority.
- Do not expose private/internal DNA rules publicly.
- Do not add mutation APIs.

## Proposed `.mcp` Additions

Create:

```text
.mcp/integrations/chornplanet.md
.mcp/tools/integration-tools.yaml
.mcp/workflows/chornplanet-integration.md
```

## Integration Contract

### Chorn DNA provides

```text
- active workflow metadata
- StoryGenProduct validation authority
- AutoScene validation authority
- Zone List -> Zone File -> exactly one Sub-Zone authority
- ImagePrompt / VdoPrompt / StoryPostEngine contract references
- future Go REST validation APIs
```

### ChornPlanet consumes

```text
- DNA workflow metadata
- StoryGenProduct request validation
- AutoScene validation
- zone/sub-zone resolution
- contract validation responses
```

## Agent-Level Flow

```text
ChornPlanet feature planning needs DNA authority
  ↓
Read ChornPlanet .mcp/integrations/chorn-dna.md
  ↓
Read Chorn DNA .mcp/integrations/chornplanet.md
  ↓
ChatGPT creates planning file in the correct repo
  ↓
Codex implements in the correct repo branch
```

## Future Runtime Flow

```text
ChornPlanet Next.js
  ↓ REST
Chorn DNA Go API
  ↓
DNA validation / zone resolver / contract validator
```

## Proposed Runtime API Contract Preview

Future APIs from Chorn DNA:

```text
GET  /api/health
GET  /api/dna/workflow
POST /api/dna/validate-storygenproduct
POST /api/dna/validate-autoscene
GET  /api/zones
GET  /api/zones/{zoneFile}
POST /api/zones/resolve-subzone
```

## Environment Contract Preview

Future ChornPlanet environment variables:

```text
CHORN_DNA_API_URL=
CHORN_DNA_API_TOKEN=
```

Token is optional until protected APIs are implemented.

## Testing Plan

Documentation-only validation:

- Confirm `.mcp/integrations/chornplanet.md` exists.
- Confirm Chorn DNA remains authority for StoryGenProduct and zone/sub-zone rules.
- Confirm no secrets or internal-only rules are exposed.
- Confirm runtime API contracts are marked future until implemented.

If any code is added, run relevant checks.

## Risks and Open Questions

- Which DNA rules should be public to ChornPlanet and which should remain internal?
- Should ChornPlanet read Chorn DNA `.mcp` directly at planning time only, or should an MCP server expose it later?
- Should runtime validation use REST only, or a future MCP server adapter over REST?
- How should API versioning be handled?

## Acceptance Criteria

- Chorn DNA has `.mcp/integrations/chornplanet.md`.
- Chorn DNA documents agent-level and runtime-level integration boundaries.
- Chorn DNA preserves StoryGenProduct and zone/sub-zone authority.
- Chorn DNA defines future REST API contract preview for ChornPlanet.
- Codex can implement this documentation/contract feature safely before Go runtime APIs are implemented.
