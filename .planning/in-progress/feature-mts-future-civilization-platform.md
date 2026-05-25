# Feature: MTS Future Civilization Platform

## Branch

feature/mts-future-civilization-platform

## Objective

Make Smart Mobility the MTS future civilization layer of Chorn Planet: a connected system for intelligent mobility, future tourism, lifestyle storytelling, and human-centered infrastructure.

## Implemented Outline

- Replaced the roadmap Smart Mobility landing page with the MTS platform experience.
- Added a full-bleed randomized MTS station hero on `/smart-mobility/`.
- Added Coastal and Valley MTS sections with 3-card desktop rows and 6 random station cards per line.
- Added MTS station detail pages at `/smart-mobility/mts/[slug]/`.
- Added station detail backlinks to the MTS system and Circulatory Story.
- Added the Circulatory Story page at `/story/`.
- Added homepage Circulatory System and Circulatory Story entry points.
- Added Story to the main navbar and Platform footer group.
- Added Future Chiang Mai to Footer -> Projects.
- Kept Chiang Mai Smart Mobility pages as separate legacy/future project pages, not embedded in the new MTS landing/detail flow.

## Main Files

- `src/app/[locale]/(roadmap)/smart-mobility/page.tsx`
- `src/app/[locale]/(roadmap)/smart-mobility/mts/[slug]/page.tsx`
- `src/app/[locale]/(roadmap)/story/page.tsx`
- `src/components/Platform/PlatformHomePage.tsx`
- `src/lib/platform-content/smartMobilityContent.ts`
- `src/data/smart-mobility/coastal/en.coastal.json`
- `src/data/smart-mobility/valley/en.valley.json`
- `src/data/story/sofa-couple/en.sofa-couple.json`
- `src/styles/platform/platform.scss`
- `src/lib/layout-content/layoutContent.service.ts`

## Content Strategy

- English seed content is the starting source.
- Other locales display English until dedicated translations are added.
- Future station groups can join the shared `/smart-mobility/mts/[slug]/` route namespace.

## Future Ideas

- Interactive MTS network map.
- Animated route visualization.
- More station groups beyond Coastal and Valley.
- AI mobility systems and smart city integration.
