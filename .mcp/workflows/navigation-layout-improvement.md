# Workflow: Navigation And Layout Improvement

Use this workflow for navbar, footer, language, cookie consent, root layout, or route-linking changes.

## Steps

1. Read `.mcp/repository/layout-navigation-map.md`, `.mcp/repository/locale-i18n-map.md`, and `.mcp/repository/routing-map.md`.
2. Inspect `src/app/[locale]/(legacy)/layout.tsx`.
3. Inspect navbar/footer components and layout content loaders.
4. Keep all internal public links localized and trailing-slashed.
5. Update content source, component rendering, sitemap, and metadata together when needed.
6. Validate at least one localized URL for layout-sensitive changes.

## Guardrails

- Keep `<html data-scroll-behavior="smooth">`.
- Preserve `AppProvider`, cookie consent, navbar, footer, `AosAnimation`, `GoTop`, and `SpeedInsights` unless the active plan explicitly changes layout composition.
- Do not bypass layout content services for long-term nav/footer copy.
