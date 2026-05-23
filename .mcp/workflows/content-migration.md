# Workflow: Content Migration

Use this workflow when moving hardcoded page content toward MongoDB-backed services or adding new content domains.

## Steps

1. Read `.mcp/repository/content-data-map.md` and `.mcp/repository/server-architecture-map.md`.
2. Identify the current page/component content source.
3. Check whether a matching `src/lib/*-content/` domain already exists.
4. If a domain exists, extend its entity, port, service, repository, API route, and loader consistently.
5. If a new domain is needed, mirror the closest existing content domain.
6. Preserve all 10 locales.
7. Keep temporary hardcoded fallbacks documented with a removal path.
8. Run lint/build for runtime changes.

## Guardrails

- Do not change production database schemas without explicit approval.
- Do not commit secrets or connection strings.
- Do not remove hardcoded content until the replacement service is validated.
- Keep source-of-truth decisions visible in the active `.planning/` file.
