# Repository Overview

This directory is the repository-understanding layer for agents. Read it after `.mcp/README.md` and `.mcp/manifest.yaml`, and before proposing or editing application code.

## Current Stack

- Next.js 16 app router, React 18, TypeScript 5.
- Public pages live under `src/app/[locale]/(desktop)/`.
- API routes live under `src/app/api/`.
- Locales are `da`, `de`, `en`, `fi`, `fr`, `ja`, `ko`, `nl`, `th`, and `zh`.
- Styling is SCSS-first with imported vendor CSS. Tailwind exists, but most existing UI is class-based SCSS.
- Client state is provided through `src/provider/`.
- Content loaders live under `src/lib/*-content/`.
- Server architecture lives under `server/core`, `server/adapters`, and `server/infrastructure`.
- Metadata lives under `src/metadata/`, with Next metadata routes in `src/app/robots.ts` and `src/app/sitemap.ts`.
- Image registry and sitemap image paths use `src/image/ImageUrl.ts` and `src/lib/UrlMaps.ts`.

## Agent Source Order

Use these files in order for implementation work:

1. `.codex/Agents.md` for Codex execution rules.
2. `.mcp/README.md` and `.mcp/manifest.yaml` for shared product and safety context.
3. Relevant files under `.mcp/repository/`.
4. Relevant `.mcp/resources`, `.mcp/policies`, `.mcp/tools`, and `.mcp/workflows`.
5. The active `.planning/feature-*.md` file.
6. Runtime files close to the proposed change.

## Important Correction

Some older planning language references `src/data/`. This repository currently uses `src/lib/*-content/` loaders and server-backed content services instead. If future work introduces `src/data/`, document whether it is temporary seed data, fixtures, or a real source of truth.

## Safe Implementation Bias

- Prefer nearby page/component patterns over new abstractions.
- Keep locale, metadata, sitemap, and URL map changes together.
- Keep SCSS conventions intact unless a plan explicitly scopes a style migration.
- Do not expose credentials or environment values in `.mcp` docs.
- For documentation-only work, validate by path checks and `git diff --check`; lint/build is optional unless runtime code changes.
