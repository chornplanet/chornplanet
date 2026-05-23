# Feature Plan: Implement Go DNA Backend

Branch for planning: `feature/mcp-agent-workspace`
Implementation branch recommendation: `feature/implement-go-dna`
Status: Planning
Owner: Khachornchit Chief Architect → ChatGPT planning → Codex review/implementation

## Problem Statement

Chorn DNA currently works as a `.chatgpt` workflow and knowledgebase. To support future ChornPlanet integration, validation, and scalable tooling, Chorn DNA should add a backend system written in Go inside the same repository.

The Go backend should be deployable to Vercel and should initially provide safe read-only and validation APIs for Chorn DNA workflows.

## Goals

- Add Go backend foundation to this repository.
- Keep existing `.chatgpt` workflow authority unchanged.
- Support Vercel-compatible deployment.
- Add a health check endpoint.
- Add request parsing and validation foundation.
- Add initial API contracts for StoryGenProduct and AutoScene validation.
- Add Go test/fmt/vet workflow.
- Align implementation with `.mcp` tool contracts and policies.

## Non-Goals

- Do not replace `.chatgpt/Agents.md` execution workflow.
- Do not generate final creative outputs from Go in Phase 1.
- Do not mutate `.chatgpt` files through API.
- Do not add external publishing.
- Do not add credentials or secrets.
- Do not deploy production without approval.

## Existing Workflow Authority

Current active command:

```text
StoryGenProduct
```

Deprecated command:

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

Mandatory zone resolution:

```text
Zone List -> Zone File -> exactly one Sub-Zone
```

The Go backend must validate and support this authority, not replace it.

## Proposed Architecture

Initial Vercel-compatible structure to verify and adapt:

```text
go.mod
go.sum
api/
  health.go
  dna/
    parse-command.go
    validate-storygenproduct.go
    validate-autoscene.go
    workflow.go
internal/
  dna/
    command.go
    validator.go
    workflow.go
  zones/
    resolver.go
    zone.go
  response/
    error.go
    success.go
```

Codex must verify the correct Vercel Go/serverless function structure before implementation. If Vercel requires a different structure, document the decision and use the Vercel-compatible pattern.

## Proposed API Endpoints

### `GET /api/health`

Purpose:

- Verify backend is running.

Output:

```json
{
  "status": "ok",
  "service": "chorn-dna-go",
  "version": "phase1"
}
```

### `POST /api/dna/parse-command`

Purpose:

- Parse Chorn DNA command header into structured fields.

Input:

```json
{
  "text": "StoryGenProduct: <attachments>\nAutoScene: [...]\nMode: [Word]\nSkipVideo: True\nPostKeywords: []"
}
```

Output:

```json
{
  "command": "StoryGenProduct",
  "autoScene": "[...]",
  "mode": "Word",
  "skipVideo": true,
  "postKeywords": []
}
```

### `POST /api/dna/validate-storygenproduct`

Purpose:

- Validate that a StoryGenProduct request follows current DNA rules.

Validation:

- command must be StoryGenProduct
- StoryGen must be rejected as deprecated
- AutoScene must exist
- SkipVideo must be boolean-compatible
- PostKeywords must be list-compatible

### `POST /api/dna/validate-autoscene`

Purpose:

- Validate AutoScene resolution requirements.

Validation:

- explicit AutoScene may be accepted
- zone-based AutoScene must resolve Zone List -> Zone File -> exactly one Sub-Zone
- ambiguous zone/sub-zone must return validation error

### `GET /api/dna/workflow`

Purpose:

- Return workflow metadata.

Output should include:

- active command
- deprecated commands
- route map
- required contracts
- zone authority

## Implementation Phases

### Phase 1: Go Foundation

- Add Go module.
- Add health endpoint.
- Add response helpers.
- Add tests.
- Verify Vercel-compatible structure.

### Phase 2: Command Parser

- Parse command header text.
- Return structured command request.
- Add tests for valid and invalid command headers.

### Phase 3: StoryGenProduct Validator

- Validate active/deprecated command rules.
- Validate required fields.
- Return AI-readable errors.

### Phase 4: AutoScene Validator

- Validate explicit AutoScene.
- Validate zone/sub-zone resolution inputs.
- Prepare resolver abstraction.

### Phase 5: Workflow Metadata API

- Return active workflow metadata.
- Return route map and contract list.
- Return zone authority summary.

### Phase 6: Vercel Deployment Readiness

- Document Vercel deployment approach.
- Add minimal deployment notes.
- Confirm no secrets are required.
- Deploy only after explicit approval.

## Testing Plan

Run:

```bash
go fmt ./...
go test ./...
go vet ./...
```

Test cases:

- valid StoryGenProduct header
- deprecated StoryGen rejected
- missing AutoScene rejected
- SkipVideo true/false parsed correctly
- PostKeywords list parsed correctly
- health endpoint returns status ok
- workflow metadata returns active command and zone authority

If Vercel routing is involved, document manual endpoint checks.

## Project Structure Guideline

Keep Go backend isolated and clean.

Do not mix Go code with `.chatgpt` creative source files.

The Go backend may read or summarize `.chatgpt` metadata in later phases, but early implementation can use internal constants if safer.

## Risks and Open Questions

- What exact Go serverless layout does Vercel require for this repository?
- Should endpoint paths use flat `api/*.go` or nested directories?
- Should the backend read real `.chatgpt` files at runtime or use versioned constants first?
- Should ChornPlanet call this backend directly later, or through an internal proxy?
- How should CORS be handled when ChornPlanet integration begins?

## Acceptance Criteria

- Go backend foundation exists in the repository.
- Health endpoint is implemented.
- Command parser API is implemented or scaffolded.
- StoryGenProduct validator API is implemented or scaffolded.
- AutoScene validator API is implemented or scaffolded.
- Workflow metadata API is implemented or scaffolded.
- Tests exist for core parser/validator logic.
- `go fmt ./...`, `go test ./...`, and `go vet ./...` pass.
- Existing `.chatgpt` workflow remains unchanged and compatible.
- Production deployment is not performed without explicit approval.
