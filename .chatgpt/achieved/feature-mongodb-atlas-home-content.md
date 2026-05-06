# Feature Plan: MongoDB Atlas Home Content Migration

Branch: `feature-mongodb-atlas-home-content`
Status: Completed - Migrated hardcode to MongoDB Atlas and cleanup all hardcode data.
Owner: ChatGPT planning → Codex review/implementation/testing

## Problem Statement

ChornPlanet has been migrating desktop page content from repository hardcode to MongoDB Atlas. The goal is to make MongoDB Atlas the source of truth for page content while preserving the existing Next.js rendering behavior and the existing server-side hexagonal architecture.

The migration of hardcoded content for all target pages in the tracked page list is now finished. The remaining work should be limited to layout-level components still reached from:

```text
src/app/[locale]/(desktop)/layout.tsx
```

After the remaining layout dependencies are migrated and verified, the old hardcoded source-of-truth data must be cleaned from:

```text
src/data/info/main/InfoTranslation.ts
```

and relevant language/content modules that are no longer needed by runtime page rendering.

## Critical Hardcode Source of Truth

The `src/data/info/main/InfoTranslation.ts` file is the current source of truth for hardcode-all-pages data in the current situation.

This is an important hardcode section and must be treated as the final cleanup target after migration of all pages and layout data to MongoDB is finished.

Do not remove `InfoTranslation.ts` or its related modules until:

- All page content has been migrated and verified from MongoDB Atlas.
- All layout-level content has been migrated and verified from MongoDB Atlas.
- `src/app/[locale]/(desktop)/layout.tsx` and its child components no longer import data through `InfoTranslation.ts`.
- Runtime components such as navbar, footer, and consent no longer depend on the hardcoded info tree.
- Any remaining seed/test usage has been moved to an intentional fixture or seed location.

## Current Migration Status

### Completed

Hardcode migration has been completed for all pages in the tracked migration list.

This includes the previously migrated desktop page families such as:

```text
home
contact
privacy-policy
terms-of-service
workplace-policy
gallery
about-chorn
ai-companions
smart-city
smart-mobility
technical-expertise root pages
technical-expertise front-end category and detail pages
technical-expertise full-stack category and detail pages
```

The previous legal and technical-expertise pending phases are no longer active migration targets because those pages have already been migrated.

### Completed Since Latest Codex Review

Desktop layout content has been migrated to MongoDB Atlas through the existing hexagonal server architecture.

Added runtime layout content domain:

```text
server/core/domain/layout-content.entity.ts
server/core/ports/layout-content.interface.ts
server/core/services/layout-content.service.ts
server/adapters/outbound/mongo.repository/layout-content.repository.ts
src/lib/layout-content/layoutContent.service.ts
src/app/api/layout-content/route.ts
```

Updated:

```text
src/app/[locale]/(desktop)/layout.tsx
src/components/Consent/*
src/components/Navbar/*
src/components/Footer/*
```

Layout now loads `navbar`, `footer`, `consent`, and `languageOptions` from MongoDB Atlas and passes typed props into layout components. The consent, navbar, footer, and desktop layout dependency chain no longer imports `src/data/info/main/InfoTranslation.ts`.

Migration script added and run successfully:

```text
scripts/migrate-layout-to-mongo.cjs
npm run migrate:layout
```

Migration result on 2026-04-29:

```json
{
  "target": "layout_content",
  "migratedCount": 10,
  "failedCount": 0
}
```

Validation:

```text
npm run build
```

Build passed. `npm run lint` is currently blocked by repo config because ESLint 9 requires `eslint.config.(js|mjs|cjs)` and none exists.

### Layout Runtime Target: Completed

Remaining hardcoded runtime dependencies should be only some components used from:

```text
src/app/[locale]/(desktop)/layout.tsx
```

Current layout imports:

```ts
import FooterMain from "@/components/Footer/FooterMain";
import NavbarContainer from "@/components/Navbar/NavbarContainer";

import CookieConsentChecking from "@/components/Consent/CookieConsentChecking";
```

Previously known dependency chain, now migrated:

```text
src/app/[locale]/(desktop)/layout.tsx
  -> CookieConsentChecking
  -> import CookieConsentDisplay from "@/components/Consent/modules/CookieConsentDisplay";
  -> src/components/Consent/modules/CookieConsentDisplay.tsx
  -> src/components/Consent/modules/ConsentCookieButton.tsx
  -> src/data/info/main/InfoTranslation.ts
```

Verified layout-level components no longer import hardcoded data directly or indirectly:

```text
src/components/Footer/FooterMain
src/components/Navbar/NavbarContainer
```

### Active Component InfoTranslation Cleanup Completed

The active component hardcode list was grouped and migrated. All 79 active `src/components` entries that previously imported `InfoTranslation` now receive content from MongoDB-backed page/layout loaders or typed props.

Updated content paths include:

```text
ai-companions components
ai-solutions components
homepage/supporting feature components
technical-expertise web/front-end/full-stack/devops/cloud/web3 components
technical-expertise sidebars and FAQ/detail components
smart-city and smart-mobility bottom components
```

`src/app` and `src/components` no longer import `InfoTranslation`.

The old aggregate hardcode source was removed:

```text
src/data/info/main/InfoTranslation.ts
src/data/info/Info*.ts
src/data/info/model/IInfo.ts
```

The temporary layout migration script was removed after content had already been migrated:

```text
scripts/migrate-layout-to-mongo.cjs
```

Current component audit after regeneration:

```text
Active components: 151
Active components requiring InfoTranslation/Mongo review: 0
Active components with no InfoTranslation and no direct Mongo infra: 151
Inactive components: 0
```

Validation:

```text
npm run build
```

Build passed.

### Remaining Runtime Hardcode Cleanup

The original assumption that only layout dependencies remained was not accurate. The previously remaining active `InfoTranslation` imports have now been removed.

Current search:

```text
rg "InfoTranslation" src/app src/components
```

Result after active component migration on 2026-04-29:

```text
0 matches
```

Follow-up hardcode cleanup should focus on remaining non-`InfoTranslation` data fallbacks, especially smart city/smart mobility helper components that still import legacy `src/data/*` modules as fallback content. These are separate from the 79 active `InfoTranslation` components already migrated.

## Current Hardcode Source Tree

The current hardcode-all-pages source of truth is:

```text
src/data/info/main/InfoTranslation.ts
```

It maps each locale to language-specific `Info*` modules. Example language module:

```text
src/data/info/InfoEN.ts
```

A current module imports many page/content families, for example:

```ts
import {IInfo} from "@/data/info/model/IInfo";
import {Recommend2025} from "@/data/recommend/Recommend2025";
import {AboutEN} from "@/data/about/AboutEN";
import {LanguageOptions} from "@/data/translate/LanguageOptions";
import {GalleryEN} from "@/data/gallery/GalleryEN";
import {FullStackEN} from "@/data/fullstack/FullStackEN";
import {FrontEndEN} from "@/data/frontend/FrontEndEN";
import {BusinessEN} from "@/data/business/BusinessEN";
import {ServiceEN} from "@/data/service/ServiceEN";
import {FeatureEN} from "@/data/feature/FeatureEN";
import {CloudEN} from "@/data/cloud/CloudEN";
import {NavbarEN} from "@/data/navbar/NavbarEN";
import {DevOpsEN} from "@/data/devops/DevOpsEN";
import {FooterEN} from "@/data/footer/FooterEN";
import {Web3EN} from "@/data/web3/Web3EN";
import {PrivacyPolicyEN} from "@/data/policy/privacy-policy/PrivacyPolicyEN";
import {TermOfServiceEN} from "@/data/policy/term-of-service/TermOfServiceEN";
import {WorkplacePolicyEN} from "@/data/policy/workplace-policy/WorkplacePolicyEN";
import {CloudSolutionEN} from "@/data/cloud-solutions/CloudSolutionEN";
import {ConsentEN} from "@/data/consent/ConsentEN";
import {TransformBusinessEN} from "@/data/transform-business/TransformBusinessEN";
import {AiFahCoverEN} from "@/data/ai/fah-cover/AiFahCoverEN";
import {AiCompanionEN} from "@/data/ai/companions/AiCompanionEN";
import {ServicePackagesEN} from "@/data/service-packages/ServicePackagesEN";
import {ContactEN} from "../contact/ContactEN";
```

and exports a combined object such as:

```ts
export const InfoEN: IInfo = {
  AiCompanions: AiCompanionEN,

  Service: ServiceEN,
  Feature: FeatureEN,
  About: AboutEN,
  Cloud: CloudEN,
  Navbar: NavbarEN,

  FrontEnd: FrontEndEN,
  FullStack: FullStackEN,
  DevOps: DevOpsEN,
  Web3: Web3EN,

  Recommend: Recommend2025,
  Footer: FooterEN,
  Business: BusinessEN,

  PrivacyPolicy: PrivacyPolicyEN,
  TermOfService: TermOfServiceEN,
  WorkplacePolicy: WorkplacePolicyEN,

  Contact: ContactEN,
  Consent: ConsentEN,

  Gallery: GalleryEN,
  Translates: LanguageOptions,
  CloudSolution: CloudSolutionEN,
  TransformBusiness: TransformBusinessEN,

  AiFahCover: AiFahCoverEN,
  ServicePackages: ServicePackagesEN,
}
```

This file and its related locale modules should not remain the runtime source of truth after the layout migration is complete. Clean them only after no live layout/page path still imports them.

## Existing Hexagonal Architecture Review

The active branch already uses this architecture pattern:

```text
server/
  adapters/
    outbound/
      mongo.repository/
        about-content.repository.ts
        ...
  core/
    domain/
      about-content.entity.ts
      ...
    ports/
      about-content.interface.ts
      ...
    services/
      about-content.service.ts
      ...
  infrastructure/
    db/
      infra.mongodb.ts
      ...
```

This remains the governing structure for MongoDB content migration.

Do not replace it with a generic `server/content/*` architecture.

### Layer Responsibilities

#### Domain Layer

```text
server/core/domain/*-content.entity.ts
```

Responsibilities:

- Define content payloads, records, responses, locale types, and mapping functions.
- Normalize locale when needed.
- Keep domain shape independent from page/component implementation.

#### Port Layer

```text
server/core/ports/*-content.interface.ts
```

Responsibilities:

- Define repository/service contracts.
- Keep core services independent from MongoDB implementation.
- Allow outbound adapters to be swapped or tested.

#### Service Layer

```text
server/core/services/*-content.service.ts
```

Responsibilities:

- Own application/domain operations.
- Call the port interface, not MongoDB directly.
- Keep page/server callers from depending on outbound repository details.

#### Outbound Mongo Adapter Layer

```text
server/adapters/outbound/mongo.repository/*-content.repository.ts
```

Responsibilities:

- Implement the corresponding port/interface.
- Use MongoDB collections from `server/infrastructure/db/infra.mongodb.ts`.
- Own indexes, queries, upsert/delete operations, and document-to-domain mapping.

#### Infrastructure DB Layer

```text
server/infrastructure/db/infra.mongodb.ts
```

Responsibilities:

- Create/reuse MongoDB client.
- Resolve database and collection names from environment variables.
- Export typed MongoDB collections.
- Avoid page-specific business logic.

## Expected Final State

After this feature is complete:

- All target desktop pages load content from MongoDB Atlas instead of hardcoded page data.
- Desktop layout components no longer depend on `src/data/info/main/InfoTranslation.ts` for runtime content.
- Consent, footer, and navbar content are loaded through MongoDB-backed services where runtime content is needed.
- Hardcoded content modules are removed, archived, or retained only as intentional seed/fixture data.
- MongoDB connection and content loading continue to use the existing hexagonal architecture under:

```text
server/core/domain
server/core/ports
server/core/services
server/adapters/outbound/mongo.repository
server/infrastructure/db
```

- Page and layout components remain reusable renderers driven by database content.
- The repository is prepared for the next feature: premium eCommerce civilization media with daily posts stored in MongoDB.

## Goals

- Finish the remaining layout-level hardcode migration in `src/app/[locale]/(desktop)/layout.tsx` dependency paths.
- Preserve current footer, navbar, and cookie consent rendering behavior.
- Preserve the existing hexagonal architecture exactly as the server-side pattern.
- Avoid direct MongoDB collection usage inside Next.js page/layout/component files.
- Remove or archive hardcoded source-of-truth data only after imports are fully migrated.
- Specifically clean `src/data/info/main/InfoTranslation.ts` after all pages and layout data have moved to MongoDB.
- Update `migrated-target-pages.log` to reflect that page migration is complete and only layout cleanup remains, if the log is still used.
- Prepare content architecture for future premium eCommerce civilization media and daily post features.

## Non-Goals

- Do not start the premium eCommerce daily post feature in this branch.
- Do not redesign the visual UI unless required for data-driven rendering.
- Do not replace the existing hexagonal server architecture with another folder structure.
- Do not add a new generic `server/content/*` architecture that bypasses domain/ports/services/adapters.
- Do not change public routes or URL structure unless explicitly required.
- Do not mix unrelated media/eCommerce schemas into this home-content migration unless needed for future compatibility.

## Proposed Runtime Architecture

```text
Next.js Page / Layout
   ↓
Server-side Loader / Composition Function
   ↓
server/core/services/<domain>-content.service.ts
   ↓
server/core/ports/<domain>-content.interface.ts
   ↓
server/adapters/outbound/mongo.repository/<domain>-content.repository.ts
   ↓
server/infrastructure/db/infra.mongodb.ts
   ↓
MongoDB Atlas Collection
   ↓
server/core/domain/<domain>-content.entity.ts
   ↓
Reusable Page/Layout Renderer Components
```

Recommended layout direction:

```text
src/app/[locale]/(desktop)/layout.tsx
   ↓
load layout content by locale
   ↓
pass typed content into Navbar/Footer/Consent components
   ↓
components render without importing InfoTranslation
```

## Remaining Implementation Plan

### Phase 1: Confirm page migration is complete

- Review `migrated-target-pages.log`.
- Confirm all pages in the tracked list are marked done.
- Confirm the previous legal and technical-expertise pending items no longer appear as active pending work.
- Confirm page files load through MongoDB-backed services and not through `InfoTranslation`.

### Phase 2: Migrate layout dependency chain

Primary target:

```text
src/app/[locale]/(desktop)/layout.tsx
```

Review these direct or indirect paths:

```text
src/components/Consent/CookieConsentChecking
src/components/Consent/modules/CookieConsentDisplay.tsx
src/components/Consent/modules/ConsentCookieButton.tsx
src/components/Footer/FooterMain
src/components/Navbar/NavbarContainer
src/data/info/main/InfoTranslation.ts
```

Status: Completed on 2026-04-29.

Implementation guidance:

- Identify which content fields are still read from `InfoTranslation`.
- Prefer existing content domains if the data already exists in MongoDB.
- If needed, add or extend a layout/content domain using the same architecture pattern.
- Keep the component API typed and explicit.
- Pass content from the layout/loader into components instead of importing the global hardcoded `InfoTranslation` object inside nested components.

Suggested content domains if new/extended modules are required:

```text
layout-content
navbar-content
footer-content
consent-content
```

Required structure pattern for any new domain:

```text
server/core/domain/<domain>-content.entity.ts
server/core/ports/<domain>-content.interface.ts
server/core/services/<domain>-content.service.ts
server/adapters/outbound/mongo.repository/<domain>-content.repository.ts
server/infrastructure/db/infra.mongodb.ts
```

### Phase 3: Remove remaining runtime dependencies on InfoTranslation

Before deleting hardcoded modules, migrate the remaining non-layout active page/component imports, then verify there are no runtime imports from active page/layout/component code:

```text
src/data/info/main/InfoTranslation.ts
src/data/info/Info*.ts
src/data/about/*
src/data/ai/*
src/data/business/*
src/data/cloud*
src/data/consent/*
src/data/contact/*
src/data/devops/*
src/data/feature/*
src/data/footer/*
src/data/frontend/*
src/data/fullstack/*
src/data/gallery/*
src/data/navbar/*
src/data/policy/*
src/data/recommend/*
src/data/service*
src/data/transform-business/*
src/data/web3/*
```

Use code search to distinguish between:

- Runtime imports that must be migrated.
- Seed scripts that may still intentionally import hardcoded data for MongoDB seeding.
- Tests/fixtures that may be retained intentionally.
- Dead modules that can be removed.

### Phase 4: Clean hardcoded source of truth

After layout migration is complete:

- Remove `src/data/info/main/InfoTranslation.ts` if it has no remaining runtime or seed usage.
- Remove related locale modules and content modules that are no longer used.
- If some hardcoded data is still needed for seeding, move it to an explicit seed/fixture location and rename it so it is not confused with runtime source of truth.
- Update imports, types, and build references.
- Update `migrated-target-pages.log` and this planning file if needed.

## Hardcode Removal Rule

Do not remove hardcoded data until all of the following are true:

- MongoDB content exists for the relevant locale/domain.
- Page or layout rendering loads correctly from MongoDB.
- Dependent runtime modules no longer import the hardcoded data.
- Seed/test usage is either removed or intentionally isolated.
- Lint, typecheck, and build pass.
- Manual route validation shows no regression.

## Improvement Recommendations

Codex should consider the following while completing the remaining work:

1. Keep the existing hexagonal architecture as-is.
2. Add or extend content modules using domain → port → service → Mongo repository → infrastructure DB pattern.
3. Avoid direct MongoDB usage inside Next.js page, layout, or component files.
4. Use typed content schemas and avoid `any` where possible.
5. Make layout components data-driven by props or a typed composition layer.
6. Add controlled missing-content behavior for layout content.
7. Log or surface fallback usage during development only.
8. Keep `migrated-target-pages.log` accurate after final layout migration.
9. Prepare collection naming and schema direction for the next premium eCommerce daily-post feature without implementing that feature in this branch.

## Testing Plan

Minimum validation:

- Run lint/typecheck if available.
- Build the Next.js app.
- Verify all migrated pages render from MongoDB Atlas.
- Verify desktop layout renders correctly for all supported locales.
- Verify cookie consent display and buttons still work.
- Verify navbar and footer still render locale-specific content correctly.
- Verify missing MongoDB content behavior is controlled and does not crash production pages.
- Verify page/layout/component files do not directly import Mongo collections from `infra.mongodb.ts`.
- Verify runtime code no longer imports `src/data/info/main/InfoTranslation.ts` after cleanup.

Suggested route validation checklist:

```text
/[locale]
/[locale]/contact
/[locale]/privacy-policy
/[locale]/terms-of-service
/[locale]/workplace-policy
/[locale]/gallery
/[locale]/about-chorn
/[locale]/ai-companions
/[locale]/smart-city/chiang-mai
/[locale]/technical-expertise/ai-solutions
/[locale]/technical-expertise/front-end-developer/react-developer
/[locale]/technical-expertise/full-stack-developer/nodejs-developer
```

Also validate layout-only behavior across at least two locales:

```text
/en
/th
```

## Risks and Open Questions

- Are navbar, footer, and consent content already represented in existing MongoDB collections, or should they become separate layout collections?
- Should layout content be loaded once in `layout.tsx` or composed through smaller per-component server loaders?
- Should seed scripts continue to use old hardcoded modules, or should seed fixtures be moved to a dedicated `scripts/fixtures` location?
- Should missing layout content fail closed, fallback temporarily, or display a minimal default?
- What is the final collection naming convention for layout/navbar/footer/consent content?

## Next Feature After Completion

After this feature is complete, start a new feature branch for:

```text
premium eCommerce civilization media with daily post feature to MongoDB
```

Suggested future planning file:

```text
.chatgpt/planning/feature-premium-ecommerce-daily-posts.md
```

This future feature should use MongoDB Atlas for daily post content, media metadata, premium product/story content, and publishing workflow while following the same hexagonal architecture pattern.

## Completion Criteria

- Planning reviewed by Codex.
- Existing hexagonal architecture is preserved.
- All tracked page migrations are complete.
- Desktop layout content migration is complete.
- Next.js pages and desktop layout load content from MongoDB Atlas through the existing `server` hexagonal layers.
- Runtime dependency on `src/data/info/main/InfoTranslation.ts` is removed.
- Hardcoded content is removed, archived, or retained only as explicit seed/fixture data after dependencies are migrated and verified.
- `migrated-target-pages.log` is updated accurately.
- Build/typecheck validation is completed.
- The codebase is ready for the next MongoDB-backed daily post/media feature.
- Planning file is moved to `.chatgpt/archived/feature-mongodb-atlas-home-content.md` after implementation is completed and merged.
