# Agents Guide

This file is the working brief for Codex agents in the `chornplanet` project. Treat it as the first project-specific context to read before editing code.

## Project Snapshot

- Product: ChornPlanet Next.js platform for content, media, civilization storytelling, premium commerce, Smart Food integration, luxury projects, outfit/clothing presentation, and future AI-assisted growth operations.
- Framework: Next.js 16 app router, React 18, TypeScript 5.
- Styling: SCSS and imported vendor CSS. Tailwind exists, but existing pages mostly use SCSS classes.
- State: Redux Toolkit through `src/provider/`.
- Server/data integrations: MongoDB, OpenAI SDK, AWS SDK, Vercel Speed Insights.
- CDN: public image paths redirect to `https://cdn.chornplanet.com` through `next.config.mjs`.

## Shared MCP Agent Workspace

Shared AI-facing project context, product direction, tool contracts, policies, resources, and workflows live in:

```text
.mcp/
```

Codex must treat `.mcp/` as the shared agent workspace layer for ChornPlanet.

Use this mental model:

```text
.chatgpt/ = ChatGPT planning and architecture handoff
.codex/   = Codex implementation and validation rules
.mcp/     = shared agent context, resources, tool contracts, policies, workflows
app/      = Next.js runtime application code and platform implementation
```

Codex startup order:

1. Read `.codex/Agents.md`.
2. Read `.mcp/README.md`.
3. Read `.mcp/manifest.yaml`.
4. Read relevant `.mcp/repository/` maps before route, locale, styling, UX, metadata, content, server, or deployment work.
5. Read relevant `.mcp/resources/`, `.mcp/policies/`, `.mcp/tools/`, and `.mcp/workflows/` files.
6. Read the relevant `.chatgpt/planning/feature-<feature-name>.md` file when the work is planned.
7. Read `.chatgpt/engine/ContentTranlation.md` when the feature involves website content, localization, multilingual copy, or MongoDB-backed translated content.
8. Review runtime application code, scripts, schemas, and content services.

For media automation, outfit/civilization posting, commerce, Smart Food, analytics, SEO/LLM visibility, or Chorn DNA work, also read the matching `.mcp/` resource, policy, tool contract, or workflow file before implementing.

When `.chatgpt/Agents.md` defines a feature-specific workflow, Codex should sync to the necessary handoff items without duplicating that full workflow here. In practice, Codex must honor the active ChatGPT planning, content-generation, translation, TH review, regenerated EN, all-language sync, MongoDB migration, and completion requirements that apply to the current task.

# Critical

Every feature, fix, or content migration must check for route-level render reliability across all related public pages, not only the page where the symptom was first reported.

Before deployment or shipping to `main`, Codex must run a regression pass appropriate to the change and confirm it passes. For production-facing runtime changes, this means at minimum:

- `npm run lint`
- `npm run build`
- Any targeted route/content audit, e2e test, or manual localized URL check that matches the touched feature area

For MongoDB-backed public content, metadata, layout, or image changes, verify that each public-safe loader still follows this fallback chain:

```text
requested locale -> English -> static in-repo fallback
```

Public pages must target 100% available production content through the normal Next.js rendering/data strategy. Do not treat static fallback as an acceptable steady state, a content source of truth, or a substitute for complete localized content. Static fallback is a worst-case safety net for transient content/database unavailability only; after adding or changing fallback behavior, also verify the normal requested-locale and English content paths still work and remain the preferred rendering path.

Static fallbacks must be render-safe. Do not pass empty image paths, missing arrays, or incomplete nested objects into React components or `next/image`. If a static fallback is needed, use a valid local placeholder asset or a component-level placeholder so production Server Components never fail with a generic digest because optional live content is unavailable.

Public static fallbacks must also be production-safe copy, not engineering diagnostics. Do not expose wording such as `Static fallback`, `Restore Content`, `Repair or reseed`, `MongoDB content unavailable`, collection names, seed status, or internal recovery instructions to public visitors. Feature-specific public pages should use dedicated product-facing fallback modules under the feature namespace when generic fallback wording would leak maintenance details; keep metadata fallback aligned with the page fallback.

When fixing a production Server Components render error, inspect the same failure pattern across every feature family touched by the shared loader, shared fallback data, metadata generator, layout, navbar, footer, image model, or route group. The fix is not complete until the regression risk is addressed at the shared source or explicitly documented as route-specific.

## Commands

- Install dependencies with the package manager already represented by the lockfiles in the workspace. `package.json` declares Yarn 4, while `package-lock.json` is present too; do not churn lockfiles unless the task requires dependency changes.
- Run dev server: `npm run dev` or `yarn dev`.
- Production build: `npm run build` or `yarn build`.
- Serve static output: `npm run start` runs `npx serve@latest out`.
- Lint: `npm run lint` or `yarn lint`.

When a change is narrow, run the smallest relevant check first. For page, metadata, routing, or i18n changes, prefer at least `npm run lint`; use `npm run build` before production-sensitive changes.

## Roles

### Khachornchit — Chief Architect

Khachornchit is the Chief Architect of ChornPlanet and owns the overall product vision, architecture direction, implementation priorities, and final decision-making authority.

Khachornchit should:

- Define the product and architecture direction for ChornPlanet.
- Approve major feature scope, migration priorities, and architectural decisions.
- Clarify source-of-truth rules, especially when moving from hardcoded content to MongoDB Atlas.
- Decide when hardcoded modules can be removed, archived, or retained as seed/fixture data.
- Review final outcomes for alignment with ChornPlanet's long-term platform direction.

### ChatGPT

ChatGPT owns feature discovery, planning, architectural proposal, and scope definition before implementation begins.

ChatGPT should:

- Create or update planning items for each feature under `.chatgpt/planning/`.
- Use `.mcp/` as the shared source for product context, media strategy, commerce direction, Chorn DNA integration, Smart Food evolution, analytics, SEO/LLM visibility, safety policies, and workflows.
- Keep feature plans focused, reviewable, and implementation-ready.
- Avoid mixing multiple unrelated features in one branch or planning document.

### Codex

Codex owns implementation, tests, validation, and code review readiness.

Codex should:

- Review the relevant `.chatgpt/planning/feature-<feature-name>.md` file when one exists.
- Confirm or adjust the proposed architecture before implementation.
- Implement according to the agreed scope and Khachornchit's architecture direction.
- Add or update tests where applicable.
- Validate through local checks, automated tests, and review readiness.
- Document important implementation notes in the related feature branch or pull request.

## i18n Contract

- Every user-facing content addition should support all 10 locales.
- Runtime content usually flows through `src/lib/*-content/` loaders backed by `server/core` services and `server/adapters/outbound/mongo.repository` repositories.
- If a feature uses temporary file-backed data, document whether it is seed data, fixtures, or a short-lived migration fallback.
- Components should receive `lang: string` and read translated data from the relevant locale map or feature data object.
- Do not hardcode English copy in shared components unless the component is intentionally non-localized.
- Metadata must also be present for all 10 locales.
- When adding or renaming a locale, update `src/lib/SiteUrlLocales.ts`, `src/proxy.ts` matchers, metadata maps, content maps, and sitemap behavior together.

## Metadata And SEO

- Main metadata aggregators live in `src/metadata/main/Metadata<Name>.ts`.
- Locale-specific metadata lives under `src/metadata/pages/...` or feature-specific metadata folders.
- Pages commonly implement:

```ts
export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataName[lang];
}
```

- Public service-style pages commonly include `SchemaMarkupServicePage` from `src/components/GoogleSchemaMarkup/`.
- `src/app/robots.ts` and `src/app/sitemap.ts` are source-controlled Next metadata routes; update them when SEO behavior changes.

## Images

- Use `next/image` for React-rendered images. Avoid raw `<img>` unless there is a strong compatibility reason.
- Keep image paths as local public paths such as `/images/...`; `next.config.mjs` handles CDN redirects.
- `images.unoptimized: true` is already set globally; do not add per-image `unoptimized`.
- Because global CSS sets `img { max-width: 100%; height: auto; }`, add `style={{ height: 'auto' }}` on `Image` components when width is controlled by props or CSS.
- When SCSS sets an explicit image width, include `height: auto` in the same image rule.
- Allowed remote image hosts are configured in `next.config.mjs`.

## Styling

- Global styles are imported in `src/app/[locale]/(desktop)/layout.tsx`.
- Main SCSS files include `globals.scss`, `style.scss`, `responsive.scss`, `addition.scss`, navbar `x-*` files, smart-city/smart-mobility feature files, and `footer.scss`.
- Prefer existing SCSS patterns over new styling systems.
- Avoid adding Tailwind utility-heavy markup to files that already follow SCSS component classes.
- Every project update, fix, or feature addition must aim for best-practice UX/UI, responsive performance, and polished behavior across desktop, tablet, and mobile views.
- Use `add-` prefixes for custom utility classes and `x-` prefixes for navbar variants, following existing conventions.
- The desktop root `<html>` must keep `data-scroll-behavior="smooth"`.
- Before creating or renaming components, check spelling in filenames, exports, imports, and JSX usage. Prefer clear English names such as `HighlightSmartFood`; avoid carrying forward typos like `Hightlight`.
- For the home hero and Smart Food highlight styling in `src/styles/smart-hero-section.scss`, keep the sharp-corner visual direction: do not add `border-radius`, and do not add borders around the Smart Hero image or Highlight Smart Food image/media block unless Khachornchit explicitly asks for that design change.

## Reference Responsive UX and Visual Consistency

Use the Smart Food AI page as the active reference for responsive UX, visual consistency, element structure, and SCSS style across desktop, tablet, and mobile views:

```text
src/app/[locale]/(desktop)/smart-food-ai/page.tsx
src/components/SmartFoodAi/SmartFoodAiLandingPage.tsx
src/styles/smart-food-ai.scss
```

Reference `src/app/[locale]/(desktop)/smart-food-ai/page.tsx` for the localized page route pattern, metadata loading, `headers()` locale lookup, and clean handoff into a page component.

Reference `src/components/SmartFoodAi/SmartFoodAiLandingPage.tsx` for section structure and semantic element use, including `main`, `section`, `div`, heading tags, paragraphs, actions, repeated `article` cards, and `Image` components.

Reference `src/styles/smart-food-ai.scss` for good fit across all views: responsive padding, margin, grid changes, font size, font color, heading/body color consistency, image sizing, section spacing, card spacing, and desktop/tablet/mobile breakpoints.

Current preferred pattern for premium content sections:

- On mobile/tablet widths below `992px`, avoid nested card spacing that makes content feel squeezed. Flatten section grids when needed by removing outer grid padding, left/right margins, column gutters, decorative borders, background cards, and shadows.
- For home and editorial sections, use the same flat editorial section concept across breakpoints as the Smart Food highlight, Human Daily Flow, and Smart City main sections: no outer border, no wrapper background, no wrapper shadow, and no extra wrapper padding. Keep hierarchy through grid rhythm, typography, image scale, inner content spacing, and clear actions instead of a framed outer shell.
- Keep desktop and larger tablet layouts visually premium. Desktop grids may keep framed backgrounds, padding, borders, and shadows when they support hierarchy and do not reduce readability.
- Images, headings, and paragraphs inside the same mobile section should align to the same readable content width. Do not let Bootstrap row negative margins, column gutters, or nested `.smart-food-ai-proof` padding create inconsistent left/right edges.
- On mobile, remove decorative borders when they force text into a narrow column. A border should never cost paragraph readability.
- Keep font sizes consistent within a page section and across sibling sections on the same page. Use headings for hierarchy; avoid making the first body paragraph larger unless the design explicitly calls for a lead paragraph.
- Keep body copy color consistent across the whole page. Prefer one readable muted text color for paragraphs, one stronger heading color, and one accent color for section labels or interactive states.
- Scope page-specific typography and color normalization to the page wrapper when possible, such as `.smart-container-top-about`, instead of changing global typography.
- For desktop responsive QA, include both `1536x864` and `1920x1080` viewports in addition to tablet and mobile checks. Hero and editorial headings should keep stable, intentional line counts across both desktop sizes; do not let viewport-scaled typography grow so much at `1920x1080` that text wraps into more rows than it does at `1536x864`.
- After visual spacing changes, verify mobile behavior and keep desktop/tablet behavior intact with `npm run lint`, `npm run build`, and a localized dev URL check when practical.

## Page Creation Checklist

For a new localized public page:

1. Add `page.tsx` under `src/app/[locale]/(desktop)/<route>/`.
2. Read `lang` from `await headers()`.
3. Add or reuse typed content through `src/lib/*-content/` and the matching server content service when the content is durable.
4. Add metadata for all 10 locales under `src/metadata/`.
5. Include schema markup when the page is public/service-like.
6. Add images to `src/image/ImageUrl.ts` when the route participates in existing image registries.
7. Add the route to `src/lib/UrlMaps.ts` or the dynamic sitemap source if it should be indexed.
8. Ensure all internal links include trailing slashes.
9. Run lint/build checks appropriate to the scope.

## Server And API Notes

- API routes live under `src/app/api/`.
- Server-side domain/service/repository layers live under `server/`.
- Path alias `@/*` can resolve into `src/*`, `backend/*`, and `server/*` per `tsconfig.json`.
- Keep secrets in environment variables. Do not commit `.env` files or new credentials.
- OpenAI route/provider code exists in both `src/app/api/openai/...` and `server/adapters/outbound/openai/...`; inspect both before changing AI behavior.

## Production Server Components Render Reliability

Issue found on production: localized pages could intermittently show `This page could not load` with a production Server Components render digest, while localhost stayed healthy. The observed example was `/ja/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway/`.

Root causes to check first:

- Page/layout Server Components read MongoDB-backed content during render. Short MongoDB server selection, connection, or cold-start hiccups can throw during the RSC render and surface only as an omitted production digest.
- `src/proxy.ts` must forward locale context on request headers, not only response headers. Server Components read `await headers()`, so `x-locale`, `x-cookie-consent`, and `x-pathname` need to be set through `NextResponse.next({ request: { headers } })`.

Current fix pattern:

- Reuse the Mongo client through `globalThis.mongoClient` in production as well as development.
- Keep bounded MongoDB timeouts in `server/infrastructure/db/infra.mongodb.ts`.
- Wrap runtime content reads with `withMongoReadRetry(...)` in `server/adapters/outbound/mongo.repository/*-content.repository.ts`.
- Keep `src/proxy.ts` request-header forwarding intact when editing locale or cookie handling.
- Public localized pages must use public-safe content loaders that try the requested locale first, then English, then a static fallback when one exists. Contact content now follows this pattern with an in-repo final fallback so `/contact/` can still render during transient MongoDB or locale-content failures.
- Validate nested MongoDB content before rendering. Required top-level fields are not enough when components expect arrays or nested objects such as `contact.contactInfo.roles` or `socialLinks`.
- Public page components should tolerate safe empty arrays/default titles when rendering optional content. A partial content record should degrade gracefully instead of crashing the page.
- Keep strict loaders for APIs, admin tools, migration scripts, audit scripts, and tests.
- Use `npm run audit:locale-content` to check MongoDB-backed public content completeness across all supported locales. Do not fix this symptom only by increasing MongoDB timeout.

When this production symptom appears again, inspect Vercel function logs by digest/time first, then check MongoDB connectivity, missing/incomplete content records, and proxy request headers before changing page components.

## Chorn DNA Authority

When planning or implementing StoryGenProduct, AutoScene, ImagePrompt, VdoPrompt, StoryPostEngine, outfit, clothing, or civilization content, reference `.mcp/resources/chorn-dna-authority.md` and the external Chorn DNA authority described there.

Important rule:

```text
Zone List -> Zone File -> exactly one Sub-Zone
```

Do not generate outfit or civilization scenes directly from a zone name.

## Safety And Approval

Follow `.mcp/policies/ai-agent-policy.md` and the relevant domain policy before implementing automation or data mutations.

Do not do these without explicit approval:

- Publish externally or auto-post to TikTok, Shopee, Lazada, Amazon, or other platforms.
- Send customer messages.
- Mutate Smart Food orders, payments, customers, or identity data.
- Change production login/authentication behavior.
- Change Google Analytics production configuration.
- Expose secrets or credentials.
- Deploy production.
- Delete branches.
- Change public API contracts.
- Change production database schemas.

## Working Practice

- Read nearby files before editing. This project has repeated patterns; copying the closest working example is usually safer than inventing a new shape.
- Keep diffs scoped. Do not reformat large generated-looking locale or metadata files unless the task requires it.
- Preserve user changes in a dirty worktree. Check `git status --short` before and after meaningful edits.
- For planned ChatGPT features, review the matching `.chatgpt/planning/feature-<feature-name>.md` file before implementation and keep the work on the matching `feature/<feature-name>` branch when that branch exists.
- For unplanned fixes or docs work, create a new task branch from the latest `main` before making changes. Use a clear prefix such as `fix/...`, `feature/...`, or `docs/...`; do not work directly on long-lived or previously completed task branches.
- Prefer `rg` for searching.
- Use `apply_patch` for manual edits.
- For broad locale work, audit all 10 locales and compare keys against English.
- For route work, test at least one localized URL such as `/en/.../` and consider whether sitemap/redirects need updates.

## ChatGPT And Codex Workflow

ChatGPT owns discovery, planning, architectural proposals, and scope definition. Codex owns planning review, implementation, tests, validation, and code review readiness.

1. Khachornchit defines or approves the feature direction and target branch.

2. ChatGPT creates or updates a feature branch:

   ```text
   feature/<feature-name>
   ```

3. ChatGPT creates or updates the planning file:

   ```text
   .chatgpt/planning/feature-<feature-name>.md
   ```

4. The planning file should include:

   - Problem statement
   - Goals
   - Non-goals
   - Existing architecture review
   - Proposed architecture
   - Project structure guideline
   - Migration plan
   - Testing plan
   - Risks and open questions
   - Acceptance criteria

5. Codex reviews the planning document.

6. Codex implements and tests the feature.

7. Khachornchit reviews or approves the final result when architectural or source-of-truth decisions are involved.

8. After the feature is completed, move the planning document to:

   ```text
   .chatgpt/achieved/feature-<feature-name>.md
   ```

## Architecture Rule

ChornPlanet page content should move toward database-backed content services and reusable page-rendering components.

For MongoDB Atlas content migration, the target pattern is:

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

Avoid adding new hardcoded content arrays into page files unless explicitly temporary and documented in the active planning file.

## Branch And Ship Flow

Use this flow when preparing a fix, feature, docs update, or other task for production:

When Khachornchit says `ship to main`, `ship -> main`, `ship`, or any alternative with the same meaning, Codex must treat it as approval to execute the complete ship flow below. Do not shortcut by committing directly on `main` or pushing only `origin/main` unless Khachornchit explicitly narrows the instruction.

1. Start from the approved feature branch for the current task. When the user explicitly asks to continue from the current branch, finish the task on that branch.
2. Implement the change on the feature branch and preserve any intended `.codex/` updates on the same branch.
3. Verify the task branch with the smallest relevant checks, and run `npm run build` before merging production-facing runtime changes.
4. Once the final response can say `Verification: npm run build passed.`, stage and commit all current work on the feature branch:

   ```text
   git add -A
   git commit -m "<feature summary>"
   ```

5. Push the feature branch to `origin` so Khachornchit can run another test pass:

   ```text
   git push origin <feature-branch>
   ```

6. Stop after pushing the feature branch unless Khachornchit has already provided an approval signal in the same request. Continue shipping only after an explicit approval signal such as `ship -> main`, `ship to main`, or equivalent.
7. When shipping is approved, move the completed planning document from `.chatgpt/planning/` to `.chatgpt/achieved/` before shipping. If the planning file is already achieved or no matching planning file exists, leave planning files unchanged.
8. Merge the latest `origin/main` into the feature branch:

   ```text
   git fetch origin
   git merge origin/main
   ```

9. Push the updated feature branch:

   ```text
   git push origin <feature-branch>
   ```

10. Merge the feature branch into the latest `origin/main`:

   ```text
   git switch main
   git pull origin main
   git merge <feature-branch>
   ```

11. Push `main` to all required remotes:

   ```text
   git push origin main
   git push chatgpt main
   git push korapak main
   ```

12. Delete the remote feature branch after `main` is pushed:

   ```text
   git push origin --delete <feature-branch>
   git push chatgpt --delete <feature-branch>
   ```

13. Delete the local feature branch after it has been merged and remote cleanup is complete:

   ```text
   git branch -D <feature-branch>
   ```

14. After shipping, stay on `main` or return to a fresh branch for the next task.

## Deployment And Automation

- The site is deployed through the GitHub-to-Vercel integration. Vercel should automatically build and deploy from repository pushes according to the linked project settings.
- `vercel.json` is present for Vercel-specific headers. Keep deployment-related behavior there or in Next config unless a separate workflow is clearly needed.
- There is currently no repo-root GitHub Actions workflow. Do not add one just to duplicate Vercel builds.
- Add a GitHub workflow only when it provides a distinct value Vercel does not already cover, such as required PR checks, scheduled audits, non-Vercel tests, or multi-environment automation.

## Pre-Ship Checks

Use the smallest useful set, then expand if the blast radius is larger:

- `npm run lint`
- `npm run build`
- Regression pass for every touched feature/fix item before deployment, including targeted e2e/manual localized route checks when page rendering, metadata, images, routing, MongoDB-backed content, or layout changed.
- Manual dev check with `npm run dev` for pages with visual, routing, image, or schema changes.
- Inspect `git diff --check` if whitespace or generated content changed.
- For new pages, verify `/sitemap.xml` behavior after the dev/build check when practical.

