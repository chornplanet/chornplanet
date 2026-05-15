# ChatGPT × Codex Agent Workflow

## Purpose

This document defines how Khachornchit, ChatGPT, and Codex collaborate on ChornPlanet feature planning, web content generation, UX/UI implementation, translation, localization logic, MongoDB migration, review, testing, and archival.

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
5. Read `.chatgpt/engine/ContentTranlation.md` when the feature involves website content, localization, multilingual copy, or MongoDB-backed translated content.
6. Read or create the relevant `.chatgpt/planning/feature-<feature-name>.md` file.
7. Review runtime application code, scripts, schemas, and content services.

Important distinction:

```text
.mcp/ = shared agent workspace and governance contract
app/  = Next.js runtime application code and platform implementation
```

When planning Chorn DNA, StoryGenProduct, AutoScene, outfit, clothing, or civilization content, ChatGPT should also reference the external Chorn DNA authority described in `.mcp/resources/chorn-dna-authority.md`.

## Roles

### Khachornchit — Chief Architect

Khachornchit is the Chief Architect of ChornPlanet and owns the overall product vision, architecture direction, implementation priorities, source-of-truth decisions, and final decision-making authority.

Khachornchit should:

- Define the product and architecture direction for ChornPlanet.
- Approve major feature scope, migration priorities, and architectural decisions.
- Clarify source-of-truth rules, especially when moving from hardcoded content to MongoDB Atlas.
- Review and refine the TH version when website content requires business-positioning accuracy.
- Decide when the refined TH version becomes the product meaning authority for regenerated EN and all other languages.
- Decide when hardcoded modules can be removed, archived, retained as seed/fixture data, or kept as static fallback.
- Review final outcomes for alignment with ChornPlanet's long-term platform direction.

### ChatGPT

ChatGPT is responsible for feature discovery, planning, architectural proposal, scope definition, first-pass web content generation, translation, and multilingual content regeneration.

ChatGPT should:

- Create planning items and scope for each feature.
- Use **one branch per feature**, using the pattern `feature/<feature-name>` or the branch name approved by Khachornchit.
- Write the proposed architecture, workflow, scope, assumptions, risks, and acceptance criteria into `.chatgpt/planning/feature-<feature-name>.md`.
- Include project-structure guidelines for each feature branch when architecture or folder layout changes are expected.
- Use `.mcp/` as the shared source for product context, media strategy, commerce direction, Chorn DNA integration, Smart Food evolution, analytics, SEO/LLM visibility, safety policies, and workflows.
- Follow `.chatgpt/engine/ContentTranlation.md` for web content generation, TH review workflow, regenerated EN, all-language translation, and MongoDB migration handoff.
- Keep each feature plan focused, reviewable, and implementation-ready.
- Avoid mixing multiple unrelated features in one branch or one planning document.

### Codex

Codex is responsible for reviewing the feature planning document, implementing UX/UI, implementing localization logic, migrating hardcoded content to MongoDB when required, writing or updating tests, and validating the implementation.

Codex should:

- Review the planning file under `.chatgpt/planning/`.
- Confirm or adjust the proposed architecture before implementation.
- Implement the feature according to the agreed scope and Khachornchit's architecture direction.
- Build UX/UI based on the first EN web content when the workflow calls for it.
- Implement all-language rendering logic after ChatGPT generates approved multilingual content.
- Migrate hardcoded translation content to MongoDB by adding or updating `lib`, repository, server loader, seed, audit, and fallback logic based on the existing ChornPlanet structure.
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
   - Content generation and translation workflow when applicable
   - MongoDB migration plan when applicable
   - Testing plan
   - Risks and open questions
   - Acceptance criteria

5. Codex reviews the planning document.

6. ChatGPT and Codex follow the role-specific workflow for the feature type.

7. Codex implements and tests the feature.

8. Khachornchit reviews or approves the final result when architectural, product-positioning, translation, or source-of-truth decisions are involved.

9. After the feature is completed and merged, move the planning document to:

   ```text
   .chatgpt/achieved/feature-<feature-name>.md
   ```

## Web Content Generation and Translation Workflow

All website content generation, localization, and translation work must follow `.chatgpt/engine/ContentTranlation.md`.

For feature pages such as Smart Food AI, use this required sequence:

1. **ChatGPT generates the first web content based on EN.**
   - EN defines the first page purpose, section structure, UX copy direction, JSON shape, and neutral institutional wording.
   - This first EN version is implementation-ready but remains draft until Chief Architect review is completed.

2. **Codex develops a new UX/UI based on EN.**
   - Codex builds reusable components and keeps layout decoupled from locale-specific content.
   - Codex avoids embedding new hardcoded content arrays directly into page files unless temporary and documented.

3. **ChatGPT translates EN to TH.**
   - Same JSON structure, same keys, same nesting, and same implementation values must be preserved.
   - TH must be natural and business-accurate rather than literal when literal translation weakens meaning.

4. **Chief Architect reviews and refines the TH version.**
   - The refined TH version becomes the product meaning authority when it clarifies business status, product truth, service status, or strategic positioning.
   - Examples include correcting wording from “showcase” to “serves customers in Chiang Mai,” correcting product names, and removing unsupported promotional framing.

5. **ChatGPT regenerates EN based on the refined TH version.**
   - This regenerated EN becomes the canonical multilingual source for non-Thai languages.
   - The regenerated EN must preserve the Chief Architect-approved TH meaning.

6. **ChatGPT generates all languages based on regenerated EN.**
   - Required languages: DA, DE, FI, FR, JA, KO, NL, ZH_CN.
   - All language files must preserve object structure, keys, nesting, ordering, routes, anchors, image paths, IDs, and variants.

7. **Codex implements all language logic.**
   - Codex wires locale files or content records into the loader.
   - Public localized pages must use fallback behavior: requested locale → EN → static fallback when available.
   - Page rendering must not crash when non-English content is missing or incomplete.

8. **Codex migrates hardcoded translation to MongoDB when required.**
   - Codex adds or updates `lib`, typed schemas, repository access, server loader/service logic, seed or migration scripts, fallback logic, and audit logic based on the existing structure.
   - Hardcoded JSON may remain only as temporary static fallback, seed data, fixture data, or a documented migration bridge.

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

## Locale E2E Regression Policy

The Playwright home locale-switching test in `tests/e2e/home-locale.spec.ts` is an on-demand regression test. It was added and executed once to verify the current language-switching behavior and homepage localized rendering across supported languages.

Do not rerun this E2E test automatically for every future language or content update. Run it only when Khachornchit explicitly requests language regression testing, when the Navigation language switcher changes, when locale routing changes, or when a feature directly affects homepage localized rendering.

## Completion Rule

A feature is considered complete only when:

- The planning document has been reviewed.
- The implementation is complete.
- Web content generation and translation workflow has been followed when applicable.
- Chief Architect TH review has been incorporated when business-positioning accuracy is required.
- Regenerated EN and all required languages have been synced when localization is part of the feature.
- MongoDB migration or fallback status has been clearly documented when content is not yet database-backed.
- Tests or validation steps are completed.
- Khachornchit's architecture direction has been followed.
- The feature branch is ready for pull request or merge.
- The planning file is moved from `.chatgpt/planning/` to `.chatgpt/achieved/` after completion.
