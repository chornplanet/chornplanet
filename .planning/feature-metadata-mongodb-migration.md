# Feature Plan: Metadata to MongoDB Migration

Branch for planning: `feature/mcp-agent-workspace`
Implementation branch: `feature/metadata-mongodb-migration`
Status: Planning
Owner: Khachornchit Chief Architect → ChatGPT planning → Codex review/implementation

## Problem Statement

ChornPlanet currently stores SEO metadata as hardcoded TypeScript modules under:

```text
src/metadata
```

Existing pages import hardcoded metadata aggregators directly. Example:

```ts
// src/app/[locale]/(desktop)/about-chorn/page.tsx
import {MetadataAbout} from "@/metadata/main/MetadataAbout";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataAbout[lang]
}
```

The aggregator then maps locales to hardcoded page metadata files:

```ts
// src/metadata/main/MetadataAbout.ts
export const MetadataAbout: Record<string, Metadata> = {
    en: MetadataAboutEN,
    th: MetadataAboutTH,
    fr: MetadataAboutFR,
    ja: MetadataAboutJA,
    zh: MetadataAboutZH,
    de: MetadataAboutDE,
    nl: MetadataAboutNL,
    da: MetadataAboutDA,
    fi: MetadataAboutFI,
    ko: MetadataAboutKO
}
```

This makes metadata harder to manage at scale as ChornPlanet adds media, commerce, Smart Food, luxury, and daily content pages.

## Goals

- Migrate hardcoded metadata toward MongoDB-backed metadata content.
- Preserve current `generateMetadata()` behavior for all existing pages.
- Keep locale support for all 10 locales.
- Create a safe fallback to existing hardcoded metadata during migration.
- Avoid breaking SEO, sitemap, route metadata, or localized pages.
- Follow the existing architecture direction: content loader/service → MongoDB repository → typed schema → reusable page components.
- Enable future metadata management for dynamic media, commerce, outfit, and Smart Food pages.

## Non-Goals

- Do not remove all existing hardcoded metadata in one risky step.
- Do not break public routes.
- Do not remove fallback metadata until MongoDB data is seeded and validated.
- Do not change route URLs or locale behavior.
- Do not implement a full metadata admin CMS unless separately approved.

## Existing Architecture Review

Known existing metadata pattern:

```text
src/metadata/main/Metadata<Name>.ts
  ↓ imports
src/metadata/pages/<page>/Metadata<Name><LOCALE>.ts
  ↓ used by
src/app/[locale]/.../page.tsx generateMetadata()
```

Example confirmed page:

```text
src/app/[locale]/(desktop)/about-chorn/page.tsx
```

It imports:

```text
@/metadata/main/MetadataAbout
```

Current locale set from Codex guide:

```text
da, de, en, fi, fr, ja, ko, nl, th, zh
```

Existing MongoDB content direction:

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

Codex should inspect existing server/domain/repository patterns before implementation.

## Proposed Architecture

Introduce a metadata content service:

```text
Next.js generateMetadata()
  ↓
getPageMetadata(routeKey, locale)
  ↓
Metadata Content Service
  ↓
MongoDB Metadata Repository
  ↓
metadata collection
  ↓ fallback if missing
Existing hardcoded metadata module
```

## Proposed Metadata Schema

Suggested typed entity:

```ts
type ChornPlanetPageMetadata = {
  id: string;
  routeKey: string;        // e.g. "about-chorn"
  routePath: string;       // e.g. "/about-chorn/"
  locale: "da" | "de" | "en" | "fi" | "fr" | "ja" | "ko" | "nl" | "th" | "zh";
  title: string;
  description: string;
  keywords?: string[];
  alternates?: unknown;
  openGraph?: unknown;
  twitter?: unknown;
  robots?: unknown;
  canonicalUrl?: string;
  source: "mongodb" | "hardcoded-fallback" | "seed";
  status: "draft" | "active" | "archived";
  createdAt: string;
  updatedAt: string;
};
```

The service should return a Next.js `Metadata` object.

## Project Structure Guideline

Possible implementation locations:

```text
server/core/domain/page-metadata.entity.ts
server/core/ports/page-metadata.interface.ts
server/core/services/page-metadata.service.ts
server/adapters/outbound/mongo.repository/page-metadata.repository.ts
src/lib/page-metadata/pageMetadata.service.ts
src/lib/page-metadata/pageMetadataFallbacks.ts
scripts/seed-page-metadata.cjs or scripts/sync-page-metadata.cjs
```

Codex should adapt to existing repository conventions.

## Migration Plan

### Phase 1: Metadata Service with Fallback

- Create typed metadata entity and service contract.
- Create `getPageMetadata(routeKey, locale, fallback)` helper.
- Keep existing hardcoded metadata as fallback.
- Migrate one low-risk page first, such as `about-chorn`.

Example target page pattern:

```ts
export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return getPageMetadata("about-chorn", lang, MetadataAbout[lang]);
}
```

### Phase 2: Seed Existing Metadata

- Add seed/sync script that reads current hardcoded metadata modules and writes MongoDB records.
- Seed all locale metadata for migrated route keys.
- Keep fallback in place.

### Phase 3: Page-by-Page Migration

- Migrate metadata imports page-by-page.
- Keep routeKey naming consistent.
- Validate all 10 locales.

### Phase 4: Deprecate Hardcoded Metadata

Only after all metadata exists in MongoDB and route validation passes:

- mark hardcoded metadata as fallback/deprecated
- remove only when safe and approved

## Testing Plan

- Run lint:

```bash
yarn lint
```

- Run build:

```bash
yarn build
```

- Validate at least one migrated page:

```text
/en/about-chorn/
/th/about-chorn/
/ja/about-chorn/
```

- Validate all 10 locale metadata results for the migrated page.
- Validate fallback behavior when MongoDB record is missing.
- Validate no route regression.
- Validate metadata shape returned is compatible with Next.js `Metadata`.

## Risks and Open Questions

- Can current hardcoded metadata modules be imported safely by a seed script?
- Which MongoDB collection name should be used?
- Should metadata be editable through admin UI later?
- How should draft vs active metadata be selected?
- Should dynamic media/commerce pages use the same metadata service?
- Should metadata fallback be per page or global?

## Acceptance Criteria

- Metadata migration plan is implemented with fallback safety.
- One pilot page, preferably `about-chorn`, can load metadata through the new service.
- All 10 locales remain supported for the pilot page.
- Missing MongoDB metadata falls back to existing hardcoded metadata.
- Existing public route behavior is preserved.
- Lint/build pass.
- Hardcoded metadata is not removed until explicitly approved after full validation.
