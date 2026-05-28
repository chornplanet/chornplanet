# Repository Overview

This directory is the repository-understanding layer for agents. Read it after `.mcp/README.md` and `.mcp/manifest.yaml`, and before proposing or editing application code.

## Current Stack

- Next.js 16 app router, React 18, TypeScript 5.
- Public pages live under `src/app/[locale]/(legacy)/`.
- Platform route-group pages also live under `src/app/[locale]/(roadmap)/` for the current Luxury, Smart Food, Style, Story, and MTS platform layer. The route group does not appear in URLs.
- API routes live under `src/app/api/`.
- Locales are `da`, `de`, `en`, `fi`, `fr`, `ja`, `ko`, `nl`, `th`, and `zh`.
- Styling is SCSS-first with imported vendor CSS. Tailwind exists, but most existing UI is class-based SCSS.
- Client state is provided through `src/provider/`.
- Content loaders live under `src/lib/*-content/`.
- Platform seed/loaders for the new platform layout live under `src/lib/platform-content/`; some current platform seed content is intentionally file-backed under `src/data/` until it is migrated.
- Server architecture lives under `server/core`, `server/adapters`, and `server/infrastructure`.
- Metadata lives under `src/metadata/`, with Next metadata routes in `src/app/robots.ts` and `src/app/sitemap.ts`.
- Image registry and sitemap image paths use `src/image/ImageUrl.ts` and `src/lib/UrlMaps.ts`.

## Agent Source Order

Use these files in order for implementation work:

1. `.codex/Agents.md` for Codex execution rules.
2. `.mcp/README.md` and `.mcp/manifest.yaml` for shared product and safety context.
3. Relevant files under `.mcp/repository/`.
4. Relevant `.mcp/resources`, `.mcp/policies`, `.mcp/tools`, and `.mcp/workflows`.
5. `.planning/achieved/released.md` for released feature source paths.
6. The active `.planning/in-progress/feature-*.md` file.
7. Runtime files close to the proposed change.

## Release Index

Completed feature families are indexed in `.planning/achieved/released.md`. Keep that file compact and use its `Source Path` values as the starting points for source-code inspection.

## Important Correction

Some older planning language references `src/data/`. The MongoDB-backed desktop content pattern uses `src/lib/*-content/` loaders and server-backed content services. Current platform seed areas also use `src/lib/platform-content/` plus `src/data/` JSON for MTS, Style, and Story content; treat those files as platform seed/fallback content unless a future plan migrates them to MongoDB.

## Safe Implementation Bias

- Prefer nearby page/component patterns over new abstractions.
- Keep locale, metadata, sitemap, and URL map changes together.
- Keep SCSS conventions intact unless a plan explicitly scopes a style migration.
- Do not expose credentials or environment values in `.mcp` docs.
- For documentation-only work, validate by path checks and `git diff --check`; lint/build is optional unless runtime code changes.
