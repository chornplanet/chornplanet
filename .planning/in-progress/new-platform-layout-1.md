# Feature Plan: New ChornPlanet Platform Layout - Phase 1

Repository: `khachornchit/chornplanet`
Branch: `feature/new-platform-layout`
Status: In Progress - aligned to current implementation
Owner: Khachornchit Chief Architect -> ChatGPT planning -> Codex implementation

## Phase 1 Goal

Ship the first platform-facing ChornPlanet layout: platform home, platform navigation, footer normalization, Luxury, Smart Food, Style, Story, and the MTS future civilization layer for Smart Mobility.

Phase 1 keeps mature legacy route families available while the platform route group becomes the main public presentation layer.

## Current Implementation Snapshot

- Home uses `src/components/Platform/PlatformHomePage.tsx` from `src/app/[locale]/(legacy)/page.tsx`.
- Platform content lives in `src/lib/platform-content/homeContent.ts`, `styleContent.ts`, and `smartMobilityContent.ts`.
- Platform routes live under `src/app/[locale]/(roadmap)/`; the route group is hidden from the public URL.
- Luxury route: `/luxury/`.
- Smart Food route: `/smart-food/`, backed by the Smart Food AI public content loader.
- Style route: `/style/` plus `/style/[slug]/`.
- Story route: `/story/`.
- Smart Mobility MTS route: `/smart-mobility/` plus `/smart-mobility/mts/[slug]/`.
- Layout navigation and footer are normalized in `src/lib/layout-content/layoutContent.service.ts`.
- Existing Chiang Mai Smart Mobility pages remain under `/smart-mobility/chiang-mai/...` as legacy/future-project pages.

## Primary Navigation

Current Phase 1 primary navigation:

```text
Home
Luxury
Smart Food
Style
Smart City
Smart Mobility
Story
About
```

Navigation behavior:

- `Smart City` highlights on `/smart-city/` and Smart City detail routes.
- `Smart Mobility` highlights on `/smart-mobility/`, MTS routes, and Chiang Mai Smart Mobility routes.
- `Story` highlights on `/story/`.
- `About` highlights on `/about/` and `/about-chorn/`.
- Language options remain normalized from `LanguageOptionList`; exposed behavior should stay launch-safe.

## Footer

Footer normalization in `layoutContent.service.ts` is the current source for Phase 1 footer shape:

- Platform: Luxury, Smart Food, Style, Story, Smart City, Smart Mobility.
- Projects: Luxury Project, Smart Food System, Graceful Style, Future Chiang Mai, Chorn Planet.
- Commerce: Outfit Commerce and TikTok.
- Important Links: About, Technology, Contact.
- Connect removes YouTube and Facebook.

## Platform Pages

### Home

- Uses the platform hero and platform sections from `homeContent`.
- Includes Circulatory System / Circulatory Story entry points.
- Includes Style outfit cards on the homepage.
- Uses the sofa-couple story data from `src/data/story/sofa-couple/en.sofa-couple.json`.

### Luxury

- Uses `src/app/[locale]/(roadmap)/luxury/page.tsx`.
- Uses the platform metadata helper from `homeContent`.
- Renders the AI Luxury page component for the platform launch.

### Smart Food

- Uses `src/app/[locale]/(roadmap)/smart-food/page.tsx`.
- Loads production-safe Smart Food AI content through `getSmartFoodAiContentForPublicPage(lang)`.
- Uses platform metadata key `smart-food`.

### Style

- Uses `src/app/[locale]/(roadmap)/style/page.tsx`.
- Detail pages use `src/app/[locale]/(roadmap)/style/[slug]/page.tsx`.
- Seed content lives in `src/lib/platform-content/styleContent.ts`.
- Detail pages include gallery, TikTok CTA, portrait-safe image crops, and related outfit cards.

### Story

- Uses `src/app/[locale]/(roadmap)/story/page.tsx`.
- Renders `PlatformStorySection`.
- Links the sofa-couple story to related Valley and Coastal MTS station pages.

### Smart Mobility / MTS

- Uses `src/app/[locale]/(legacy)/smart-mobility/page.tsx`.
- `src/lib/platform-content/smartMobilityContent.ts` loads Coastal and Valley station seed JSON.
- Landing hero randomizes the featured MTS station.
- Coastal and Valley sections show randomized station cards.
- Station detail pages live at `/smart-mobility/mts/[slug]/`.
- Station details link back to the MTS network and Circulatory Story.

## Content Strategy

- English platform seed content is the current working source for Style, Story, and MTS station data.
- MongoDB-backed loaders remain the preferred target for durable public content.
- Public loaders must stay render-safe with requested locale -> English -> static fallback behavior when available.
- Platform seed data should be treated as seed/fallback until a future MongoDB migration plan is approved.

## Deferred To Later Phases

- Full Media landing page.
- Full Commerce landing page.
- Interactive MTS network map.
- Animated route visualization.
- More MTS station groups beyond Coastal and Valley.
- MongoDB migration for current platform seed data.
- Dedicated translations for current MTS/Story/Style seed content.

## Acceptance Criteria

- Primary navigation matches the Phase 1 platform list including Story.
- Footer groups match current platform normalization.
- Home, Luxury, Smart Food, Style, Story, Smart City, Smart Mobility, and About routes render with localized prefixes.
- `/smart-mobility/` presents the MTS future civilization platform.
- `/smart-mobility/mts/[slug]/` renders station details and related station cards.
- `/story/` renders the Circulatory Story and links back to MTS stations.
- Chiang Mai Smart Mobility routes remain reachable as separate legacy/future-project pages.
- `.planning/achieved/released.md` remains the only file under `.planning/achieved/`.
- `npm run build` passes before shipping production-facing runtime changes.
