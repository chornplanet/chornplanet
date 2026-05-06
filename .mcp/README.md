# ChornPlanet MCP Agent Workspace

This directory defines the shared AI-facing workspace for ChornPlanet.

ChornPlanet is a Next.js platform for content, media, civilization storytelling, premium commerce, Smart Food integration, luxury projects, outfit/clothing presentation, and future AI-assisted growth operations.

## Why `.mcp` exists

`.mcp` is not application runtime code.

It is the repository-level agent workspace contract used by Khachornchit, ChatGPT, Codex, and future MCP-compatible tools.

Use this mental model:

```text
Repo-as-Codebase
  Next.js app, content services, MongoDB repositories, UI, scripts, APIs

Repo-as-Product
  media platform, commerce platform, civilization platform, Smart Food evolution, luxury project, analytics, growth

Repo-as-Agent-Workspace
  .chatgpt/ = ChatGPT planning and architecture handoff
  .codex/   = Codex implementation and validation rules
  .mcp/     = shared agent context, resources, tool contracts, policies, workflows
```

## Product direction

ChornPlanet can evolve as a mix of:

- news / entertainment / technology follow-up media platform
- AI-generated daily digest and posting platform
- premium commerce platform
- grocery and online supermarket platform
- lady/gentleman outfit and civilization clothing platform
- Chorn DNA / ChornPlanet civilization scene platform
- Smart Food web evolution and Line OA user experience layer
- luxury project showcase and commerce layer
- analytics-assisted growth platform

## Traffic target

Long-term traffic growth direction:

```text
10K daily traffic -> 100K -> 500K -> 1M
```

`.mcp` should help agents plan work that improves content quality, automation, commerce conversion, SEO/LLM visibility, analytics, and user retention.

## Relationship with Chorn DNA

ChornPlanet content and outfit/civilization generation should follow the Chorn DNA workflow authority when generating StoryGenProduct / AutoScene / outfit posts.

External authority:

```text
khachornchit/chorn-dna/.chatgpt/Agents.md
khachornchit/chorn-dna/.chatgpt/System/World/Zones/Zone List.md
```

Important rule:

```text
Zone List -> Zone File -> exactly one Sub-Zone
```

Do not generate outfit/civilization scenes directly from a zone name.

## Agent startup sequence

When ChatGPT or Codex starts work on ChornPlanet, read in this order:

1. `.chatgpt/Agents.md` or `.codex/Agents.md`, depending on the agent.
2. `.mcp/README.md`.
3. `.mcp/manifest.yaml`.
4. Relevant `.mcp/repository/` maps for routing, locales, styling, UX, metadata, content, server, and deployment context.
5. Relevant `.mcp/resources/`, `.mcp/policies/`, `.mcp/tools/`, and `.mcp/workflows/` files.
6. Related `.chatgpt/planning/feature-*.md` file.
7. Runtime app code, scripts, schemas, and content services.

## Repository understanding layer

Practical codebase maps live in:

```text
.mcp/repository/
```

These files document the current Next.js routes, locale contract, SCSS/Tailwind usage, UX/UI patterns, navigation/layout, metadata/SEO, content loaders, server layers, deployment behavior, and phase-by-phase improvement path. Use them as shared repository maps, while `.codex/Agents.md` remains the Codex execution guide.

## Roadmap and analytics layers

Platform roadmap documents live in:

```text
.mcp/roadmap/
```

On-demand analytics planning contracts live in:

```text
.mcp/analytics/
```

The analytics layer is documentation and contract design first. It does not connect to Google Search Console, Google Analytics, Vercel, commerce, or social APIs by itself. Runtime analytics API routes and server services require explicit approval for credentials, authorization, and source-of-truth properties before implementation.

## Source-of-truth principle

ChornPlanet should move from hardcoded page data toward database-backed, reusable, scalable services.

Target architecture direction:

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

## Phase 1 `.mcp` scope

Phase 1 is documentation and contract design only.

It defines product context, repository maps, roadmap direction, analytics contracts, policies, tool contracts, and workflows before introducing real MCP servers or automation that can post, publish, mutate commerce data, or call external platforms.
