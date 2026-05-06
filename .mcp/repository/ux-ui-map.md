# UX/UI Map

## Current Experience Shape

ChornPlanet uses a public-site composition with premium technology, Smart City, AI companion, and service pages. The repo favors reusable page sections, image-led hero areas, and SCSS-driven visual systems.

## Component Areas

Major component directories:

- `src/components/Home`
- `src/components/About`
- `src/components/Contact`
- `src/components/Gallery`
- `src/components/AiCompanions`
- `src/components/AiSolutions`
- `src/components/Services`
- `src/components/SmartCity`
- `src/components/SmartMobility`
- `src/components/Navbar`
- `src/components/Footer`
- `src/components/Consent`
- `src/components/GoogleSchemaMarkup`

## Existing UX Patterns

- Shared localized layout with navbar, footer, cookie consent, scroll animation, and go-top control.
- Service pages split into domain modules under `src/components/Services`.
- Smart City and Smart Mobility pages use editorial/system language with dedicated SCSS files.
- AI companion pages have individual routes for named companions.
- Public service pages often include Google schema markup components.

## Design Direction

- Preserve premium/luxury tone without making operational pages too decorative.
- Keep information scannable for repeated use.
- Use existing section and module patterns before inventing new layouts.
- For commerce expansion, prioritize clear product/category navigation, trust signals, price/action clarity, and localized copy.
- For media expansion, prioritize topic clarity, freshness, source traceability, and strong canonical pages.

## UX Review Checklist

- Does the page work in all 10 locales?
- Does the layout fit mobile and desktop without overlapping text?
- Are images using existing registries and CDN path rules?
- Does the page match nearby component and SCSS patterns?
- Are calls to action clear without becoming noisy?
- Does the route need schema markup, sitemap inclusion, or metadata updates?
