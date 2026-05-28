# Feature Plan: New ChornPlanet Platform Layout - Phase 2

Repository: `khachornchit/chornplanet`
Branch: `feature/new-platform-layout`
Status: Planning
Owner: Khachornchit Chief Architect -> ChatGPT planning -> Codex implementation

## Phase 2 Goal

Complete the deferred platform page/component work for Home, Media, and Commerce after Phase 1 stabilizes the latest `main` merge, new theme, navigation, footer, Luxury, Smart Food, and Style routes.

## Deferred From Phase 1

Move pending page work into reusable component structure under `src/components/...` before reactivating those public pages as platform experiences:

- Home platform experience
- Media platform landing experience
- Commerce platform landing experience

## Phase 2 Scope

- Design and implement the new platform Home experience as reusable components.
- Design and implement the Media platform landing experience as reusable components.
- Design and implement the Commerce platform landing experience as reusable components.
- Keep compatibility with all 10 locales.
- Reuse the latest blue platform theme unless Khachornchit approves a new direction.
- Preserve Phase 1 navigation unless Phase 2 explicitly changes it.
- Preserve the new footer theme/content direction.

## Suggested Component Direction

Potential component structure:

```text
src/components/Platform/Home/
  PlatformHero.tsx
  TodayOnChornPlanet.tsx
  OutfitCollectionSection.tsx
  ZonesSection.tsx
  PremiumCommerceSection.tsx
  SmartFoodSection.tsx
  DailyDigestSection.tsx
  LuxuryProjectsSection.tsx
  TrendingSection.tsx

src/components/Platform/Media/
  PlatformMediaLandingPage.tsx
  MediaDigestSection.tsx
  MediaFeatureCard.tsx

src/components/Platform/Commerce/
  PlatformCommerceLandingPage.tsx
  CommerceStorySection.tsx
  CommerceFeatureCard.tsx
```

Follow the closest existing project naming and SCSS patterns before creating new folders.

## Route Decisions To Reconfirm

Before Phase 2 implementation, confirm whether these routes should become active public platform routes:

```text
/[locale]/
/[locale]/media/
/[locale]/commerce/
```

If Phase 2 replaces latest `main` Home, document the route ownership change clearly and remove any duplicate route ownership between route groups.

## Responsive UX/UI Standard

Use the project responsive standard in `.codex/Agents.md`:

```text
Desktop primary reference 1: 1536 x 864
Desktop primary reference 2: 1920 x 1080
Tablet reference: 768 x 1024
Mobile reference: 390 x 844
Small mobile guardrail: 360 x 800
```

Desktop `1536x864` and `1920x1080` are the first priority for Home, Media, and Commerce design acceptance.

## Testing Plan

Run before completion:

```bash
npm run build
```

Run targeted route checks for the routes activated in Phase 2, including at least:

```text
/en/
/th/
/en/media/
/th/media/
/en/commerce/
/th/commerce/
```

Add or update route checks if sitemap, metadata, footer, or navigation behavior changes.

## Acceptance Criteria

- Phase 2 page work is componentized under `src/components/...`.
- Home, Media, and Commerce ownership is explicit.
- All active Phase 2 routes render for all 10 locales.
- Responsive layout is checked against both desktop reference sizes first.
- Footer and navigation remain consistent with the approved platform direction.
- `npm run build` passes.
