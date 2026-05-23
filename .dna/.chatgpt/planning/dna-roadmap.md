# Chorn DNA Roadmap

Branch for planning: `feature/mcp-agent-workspace`
Implementation branch recommendation: `feature/dna-roadmap`
Status: Planning
Owner: Khachornchit Chief Architect → ChatGPT planning → Codex review/implementation

## Purpose

This roadmap defines how Chorn DNA evolves from a prompt/workflow authority repository into a structured DNA system that can support ChatGPT, Codex, ChornPlanet, and a future Go backend through `.mcp`.

## Roles

### Khachornchit — Chief Architect

Khachornchit owns final architecture direction, creative DNA authority, ChornPlanet alignment, and production approval.

### ChatGPT

ChatGPT owns discovery, planning, workflow interpretation, architecture proposals, and implementation handoff.

### Codex

Codex owns implementation, tests, validation, and preserving compatibility with existing Chorn DNA workflows.

## Current State

Chorn DNA currently uses `.chatgpt/Agents.md` as the ChatGPT execution entrypoint.

Current active workflow:

```text
StoryGenProduct
```

Deprecated workflow:

```text
StoryGen
```

Required command header:

```text
StoryGenProduct: <attachments>
AutoScene: [...]
Mode: [Word/.../...]
SkipVideo: True or False
PostKeywords: []
```

Mandatory AutoScene resolution:

```text
Zone List -> Zone File -> exactly one Sub-Zone
```

## North Star

Chorn DNA should become the authoritative DNA system for:

- ChornPlanet scene and product generation
- StoryGenProduct workflows
- AutoScene resolution
- ChornPlanet zone/sub-zone consistency
- image prompt and video prompt contracts
- social-commerce post output
- future API validation through Go backend
- future MCP-compatible tool access
- multi-repository cooperation with ChornPlanet and later MenuMatch

## Multi-Repo Cooperation Model

Chorn DNA should cooperate with ChornPlanet through two layers:

```text
1. .mcp <-> .mcp
   Agent-level cooperation for planning, contracts, authority, policies, and workflows.

2. REST <-> REST
   Runtime cooperation between ChornPlanet Next.js and the future Chorn DNA Go backend.
```

### Chorn DNA responsibility

Chorn DNA owns the authority layer:

```text
- StoryGenProduct authority
- AutoScene validation
- Zone List -> Zone File -> exactly one Sub-Zone
- ImagePrompt / VdoPrompt / StoryPostEngine contract validation
- Go backend validation APIs
- ChornPlanet integration API contracts
```

### ChornPlanet responsibility

ChornPlanet owns the platform layer:

```text
- content pages
- media and commerce workflows
- outfit/civilization content draft pipeline
- analytics and SEO/LLM visibility
- TikTok-first commerce direction
- calling Chorn DNA for validation and workflow authority
```

### Future MenuMatch responsibility

MenuMatch can join later as the Smart Food backend layer:

```text
- menu matching
- RAG/menu question answering
- order-related backend behavior
- Smart Food conversational commerce
```

## Roadmap Phases

### Phase 1: MCP Agent Workspace Foundation

Goal:

Create `.mcp` as the shared agent workspace for ChatGPT and Codex.

Deliverables:

- `.mcp/README.md`
- `.mcp/manifest.yaml`
- resources for DNA workflow, zone authority, and Go backend context
- policies for AI agents and Go backend development
- tool contracts for DNA validation and Go APIs
- workflows for DNA feature development and Go backend implementation

### Phase 2: Repository Understanding and DNA Maps

Goal:

Create clear maps of the Chorn DNA repository so agents can navigate only the files required for each task.

Possible deliverables:

```text
.mcp/repository/
  overview.md
  workflow-map.md
  engine-map.md
  contract-map.md
  zone-map.md
  use-case-map.md
  dependency-map.md
```

### Phase 3: Multi-Repo MCP Integration Contract

Goal:

Define how Chorn DNA and ChornPlanet cooperate through `.mcp` before runtime APIs are implemented.

Deliverables in Chorn DNA:

```text
.mcp/integrations/chornplanet.md
.mcp/tools/integration-tools.yaml
.mcp/workflows/chornplanet-integration.md
.chatgpt/planning/feature-mcp-multi-repo.md
```

Deliverables expected in ChornPlanet:

```text
.mcp/integrations/chorn-dna.md
.chatgpt/planning/feature-mcp-multi-repo.md
```

Contract direction:

```text
ChornPlanet asks for DNA authority.
Chorn DNA provides workflow, AutoScene, zone/sub-zone, and contract validation rules.
```

### Phase 4: Go Backend Foundation

Goal:

Add the first safe Go backend foundation for Vercel-compatible deployment.

Deliverables:

- `go.mod`
- health endpoint
- package structure
- test structure
- Vercel deployment notes

### Phase 5: DNA Validation APIs

Goal:

Expose read-only validation APIs for Chorn DNA workflows.

Possible APIs:

```text
POST /api/dna/parse-command
POST /api/dna/validate-storygenproduct
POST /api/dna/validate-autoscene
GET  /api/dna/workflow
```

### Phase 6: Zone/Sub-Zone Resolver APIs

Goal:

Expose safe zone resolution APIs while preserving the existing zone authority.

Possible APIs:

```text
GET  /api/zones
GET  /api/zones/{zoneFile}
POST /api/zones/resolve-subzone
```

Rules:

- Zone List remains the authority index.
- Do not generate directly from zone name.
- Resolve exactly one Sub-Zone.

### Phase 7: Contract and Output Schema Validation

Goal:

Validate output structure for:

- ImagePrompt
- VdoPrompt
- StoryPostEngine
- Hook / Scene1 / Scene2 / Scene3 / Scene4 / Closing
- SkipVideo behavior
- PostKeywords behavior

### Phase 8: ChornPlanet Runtime Integration Readiness

Goal:

Prepare stable REST API contracts so ChornPlanet can call the Chorn DNA backend.

Deliverables:

- API response schemas
- error schema
- integration guide
- ChornPlanet client planning file
- environment variable contract such as `CHORN_DNA_API_URL`

Runtime flow:

```text
ChornPlanet Next.js
  ↓ REST
Chorn DNA Go API
  ↓
DNA validation / zone resolver / contract validator
```

### Phase 9: Controlled Expansion

Future possibilities after approval:

- draft storage
- versioned DNA rules
- workflow audit reports
- ChornPlanet content draft integration
- analytics feedback from ChornPlanet into DNA workflow improvements
- MenuMatch / Smart Food content integration later

## Immediate Feature Queue

Recommended next implementation features:

1. `feature-mcp-multi-repo`
2. `implement-go-dna`
3. `dna-repository-map`
4. `dna-command-parser-api`
5. `dna-autoscene-validator-api`
6. `dna-zone-resolver-api`
7. `dna-contract-validator-api`
8. `dna-chornplanet-integration-contract`

## Safety Rules

- Preserve StoryGenProduct as active workflow command.
- Preserve StoryGen deprecation.
- Preserve Zone List -> Zone File -> exactly one Sub-Zone.
- Do not expose private/internal DNA rules publicly without approval.
- Do not add mutation APIs before validation APIs are stable.
- Do not deploy production without approval.
- `.mcp` describes authority and contracts; REST APIs execute runtime integration.

## Acceptance Criteria

- `.mcp` exists and defines shared agent workspace rules.
- Roadmap defines Go backend evolution phases.
- Roadmap defines ChatGPT and Codex collaboration model.
- Roadmap preserves current creative DNA authority.
- Roadmap defines multi-repo cooperation with ChornPlanet through `.mcp <-> .mcp` and future `REST <-> REST`.
- Roadmap can be used by Codex to create new implementation branches per feature.
