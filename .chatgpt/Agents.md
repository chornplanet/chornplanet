# ChatGPT × Codex Agent Workflow

## Purpose

This document defines how Khachornchit, ChatGPT, and Codex collaborate on ChornPlanet feature planning, implementation, review, testing, and archival.

ChornPlanet is a Next.js application with content, media, and civilization-commerce features. Feature planning should preserve the architecture direction: content should move from hardcoded page data toward database-backed, reusable, and scalable services.

## Shared MCP Agent Workspace

Shared AI-facing project context, product direction, tool contracts, policies, resources, and workflows live in:

```text
.mcp/
```

ChatGPT must treat `.mcp/` as the shared agent workspace layer for ChornPlanet.

Recommended ChatGPT startup order:

1. Read this file.
2. Read `.mcp/README.md`.
3. Read `.mcp/manifest.yaml`.
4. Read the relevant `.mcp/resources/`, `.mcp/policies/`, `.mcp/tools/`, and `.mcp/workflows/` files.
5. Read or create the relevant `.chatgpt/planning/feature-<feature-name>.md` file.
6. Review runtime application code, scripts, schemas, and content services.

Important distinction:

```text
.mcp/ = shared agent workspace and governance contract
app/  = Next.js runtime application code and platform implementation
```

When planning Chorn DNA, StoryGenProduct, AutoScene, outfit, clothing, or civilization content, ChatGPT should also reference the external Chorn DNA authority described in `.mcp/resources/chorn-dna-authority.md`.

## Roles

### Khachornchit — Chief Architect

Khachornchit is the Chief Architect of ChornPlanet and owns the overall product vision, architecture direction, implementation priorities, and final decision-making authority.

Khachornchit should:

- Define the product and architecture direction for ChornPlanet.
- Approve major feature scope, migration priorities, and architectural decisions.
- Clarify source-of-truth rules, especially when moving from hardcoded content to MongoDB Atlas.
- Decide when hardcoded modules can be removed, archived, or retained as seed/fixture data.
- Review final outcomes for alignment with ChornPlanet's long-term platform direction.

### ChatGPT

ChatGPT is responsible for feature discovery, planning, architectural proposal, and scope definition before implementation begins.

ChatGPT should:

- Create planning items and scope for each feature.
- Use **one branch per feature**, using the pattern `feature/<feature-name>` or the branch name approved by Khachornchit.
- Write the proposed architecture, workflow, scope, assumptions, risks, and acceptance criteria into `.chatgpt/planning/feature-<feature-name>.md`.
- Include project-structure guidelines for each feature branch when architecture or folder layout changes are expected.
- Use `.mcp/` as the shared source for product context, media strategy, commerce direction, Chorn DNA integration, Smart Food evolution, analytics, SEO/LLM visibility, safety policies, and workflows.
- Keep each feature plan focused, reviewable, and implementation-ready.
- Avoid mixing multiple unrelated features in one branch or one planning document.

### Codex

Codex is responsible for reviewing the feature planning document, implementing the feature, writing or updating tests, and validating the implementation.

Codex should:

- Review the planning file under `.chatgpt/planning/`.
- Confirm or adjust the proposed architecture before implementation.
- Implement the feature according to the agreed scope and Khachornchit's architecture direction.
- Add or update tests where applicable.
- Validate the implementation through local checks, automated tests, and code review readiness.
- Document important implementation notes in the related feature branch or pull request.

## Feature Branch Workflow

1. Khachornchit defines or approves the feature direction and target branch.

2. ChatGPT creates or updates a feature branch:

   ```text
   feature/<feature-name>
   ```

3. ChatGPT creates or updates a planning file:

   ```text
   .chatgpt/planning/feature-<feature-name>.md
   ```

4. The planning file should include:

   - Problem statement
   - Goals
   - Non-goals
   - Existing architecture review
   - Proposed architecture
   - Project structure guideline
   - Migration plan
   - Testing plan
   - Risks and open questions
   - Acceptance criteria

5. Codex reviews the planning document.

6. Codex implements and tests the feature.

7. Khachornchit reviews or approves the final result when architectural or source-of-truth decisions are involved.

8. After the feature is completed and merged, move the planning document to:

   ```text
   .chatgpt/achieved/feature-<feature-name>.md
   ```

## Architecture Rule

ChornPlanet page content should move toward database-backed content services and reusable page-rendering components.

For MongoDB Atlas content migration, the target pattern is:

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

Avoid adding new hardcoded content arrays into page files unless explicitly temporary and documented in the active planning file.

When the feature relates to media automation, outfit/civilization posting, commerce, Smart Food, analytics, SEO/LLM visibility, or Chorn DNA integration, ChatGPT should reference the relevant `.mcp/` resource, policy, tool, or workflow file.

## Localized MongoDB Render Reliability

Public localized pages should not crash when non-English MongoDB content is missing, incomplete, or temporarily unavailable. Public render loaders should try the requested locale first, then English, then a static fallback when one exists. Strict loaders should remain available for admin tools, migration scripts, audit scripts, and tests.

When production shows a generic Server Components digest page, check Vercel logs by digest/time first. Then check missing locale documents, incomplete fields, missing nested slug/content, MongoDB transient errors, and `src/proxy.ts` request-header forwarding for `x-locale`, `x-cookie-consent`, and `x-pathname`. Do not fix this symptom only by increasing MongoDB timeout.

Use `npm run audit:locale-content` to check MongoDB-backed public content completeness across supported locales.

## Completion Rule

A feature is considered complete only when:

- The planning document has been reviewed.
- The implementation is complete.
- Tests or validation steps are completed.
- Khachornchit's architecture direction has been followed.
- The feature branch is ready for pull request or merge.
- The planning file is moved from `.chatgpt/planning/` to `.chatgpt/achieved/` after completion.
