# Workflow: UX/UI Improvement

Use this workflow for public page, component, Smart City, Smart Mobility, commerce, media, or luxury UX changes.

## Steps

1. Read `.mcp/repository/ux-ui-map.md` and `.mcp/repository/styling-map.md`.
2. Inspect the closest page and component family.
3. Keep existing SCSS conventions unless the plan scopes a migration.
4. Confirm localized content and metadata needs.
5. Check image usage through `next/image`, `src/image/ImageUrl.ts`, and CDN path rules.
6. Validate mobile and desktop layout behavior when runtime UI changes.

## Guardrails

- Do not introduce unrelated visual redesigns.
- Do not add Tailwind-heavy markup inside SCSS-driven pages without a clear local reason.
- Do not hardcode English copy in shared localized components.
- Keep commerce and media UX draft-first until publication flows are approved.
