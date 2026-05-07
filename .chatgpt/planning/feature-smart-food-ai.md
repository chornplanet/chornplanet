# Feature Plan: Smart Food AI Production Showcase

Repository: `khachornchit/chornplanet`
Branch for planning: `feature/mcp-agent-workspace`
Implementation branch recommendation: `feature/smart-food-ai`
Status: Planning
Owner: Khachornchit Chief Architect → ChatGPT planning → Codex review/implementation

## Problem Statement

ChornPlanet needs an immediate Phase 1 feature that proves real AI-native platform capability on the current website layout before the full New Platform Layout is implemented.

The Smart Food AI project should show that ChornPlanet is working on a real production platform, starting from local business in Chiang Mai, not only a sample project or concept demo.

This page should help attract:

- investors
- venture capital
- CEOs and strategic partners
- recruitment and HR audiences
- product/platform collaborators
- future local business customers

The page must communicate business capability and production readiness without exposing sensitive or unnecessary technical internals such as LangGraph, LangChain, RAG, vector databases, orchestration internals, or backend implementation details.

## Strategic Goal

Create a premium Smart Food AI landing page on the existing layout that converts a poster-style explanation into a responsive UI-ready page using Next.js components and SCSS.

The page should say, visually and structurally:

```text
ChornPlanet can build real AI-native production platforms.
Smart Food AI is the first practical proof, launched from local business in Chiang Mai.
```

## References

### Existing ChornPlanet implementation references

Possible source page:

```text
src/app/[locale]/(desktop)/ai-companions/fah/page.tsx
```

Existing reusable concepts/components:

```text
AiFahLandingPage
AiSolutionsMain
HomeFeatureMain
```

Possible starting composition:

```tsx
return (
  <div className="smart-container-top">
    <AiFahLandingPage lang={lang} fah={content.aiCompanions.fah} />
    <AiSolutionsMain
      lang={lang}
      service={content.service}
      llmSlides={content.media.llmSlides}
    />
    <HomeFeatureMain
      lang={lang}
      feature={content.feature}
      featureImage={content.media.featureImage}
      isHideTopTitle={true}
    />
  </div>
);
```

Codex should inspect these components and decide whether to reuse, wrap, or rebuild them as dedicated Smart Food AI components.

### MenuMatch capability reference

```text
https://github.com/khachornchit/menumatch/blob/main/.chatgpt/Agents.md
```

Use MenuMatch as the source direction for Smart Food / conversational commerce capability. Preserve the boundary that MenuMatch is the backend and production workflow layer, while ChornPlanet presents the platform story.

### Chorn DNA visual/style reference

```text
https://github.com/khachornchit/chorn-dna/blob/main/.chatgpt/Agents.md
```

Use Chorn DNA for premium visual/story direction, especially ChornPlanet luxury editorial style, young lifestyle characters, scene diversity, product clarity, and premium presentation.

## Goals

- Add a new Smart Food AI page.
- Replace the primary navbar label `AI Integration` with `Smart Food AI`.
- Preserve `AI Integration` as a footer Technology/Important link.
- Update the footer AI Integration link target.
- Convert the poster idea into real responsive UI sections.
- Present the production story from local business in Chiang Mai.
- Explain workflow, platform features, and business value in a premium, non-technical way.
- Use English-only content first.
- Prepare the page so content can later be pushed to MongoDB Atlas before launch.

## Non-Goals

- Do not expose low-level internal technical details such as LangGraph, LangChain, RAG, vector stores, model orchestration, or backend internals.
- Do not implement Smart Food ordering from this page unless explicitly approved.
- Do not mutate customer/order/payment data.
- Do not implement MenuMatch runtime API integration in this feature.
- Do not implement LINE Login in this feature.
- Do not implement full New Platform Layout in this feature.
- Do not remove existing AI/Fah or AI Integration pages.
- Do not remove 10-language routing support.

## Route and File Scope

Recommended new route:

```text
src/app/[locale]/smart-food-ai/page.tsx
```

If the repository currently keeps public desktop pages under `(desktop)`, Codex should follow the actual route convention after inspection. Acceptable alternative:

```text
src/app/[locale]/(desktop)/smart-food-ai/page.tsx
```

Recommended component area:

```text
src/components/smart-food-ai/
```

Possible components:

```text
src/components/smart-food-ai/SmartFoodAiLandingPage.tsx
src/components/smart-food-ai/SmartFoodAiHero.tsx
src/components/smart-food-ai/SmartFoodAiProductionProof.tsx
src/components/smart-food-ai/SmartFoodAiWorkflow.tsx
src/components/smart-food-ai/SmartFoodAiFeatures.tsx
src/components/smart-food-ai/SmartFoodAiBusinessValue.tsx
src/components/smart-food-ai/SmartFoodAiVisualStory.tsx
src/components/smart-food-ai/SmartFoodAiCta.tsx
```

Recommended SCSS area:

```text
src/components/smart-food-ai/scss/
```

or follow the closest existing SCSS convention found in the repository.

## Navigation Change

Replace the existing primary navigation label:

```text
AI Integration
```

with:

```text
Smart Food AI
```

Recommended target route:

```text
/[locale]/smart-food-ai/
```

Reason:

`AI Integration` is already available in the footer under Technology/Important links. The primary navigation should showcase the real production capability first.

## Footer Change

Change the footer AI Integration link target from:

```text
/[locale]/technical-expertise/ai-solutions/
```

to:

```text
/[locale]/ai-companions/fah/
```

Public English equivalent:

```text
https://www.chornplanet.com/en/ai-companions/fah/
```

The footer may still show `AI Integration` as the label if that matches existing footer grouping.

## Content Strategy

Start with English-only content.

Content may begin as:

```text
Option A: hardcoded content inside the Smart Food AI page/components
Option B: typed data file under src/data or src/content
Option C: existing content loader/server-service pattern
```

Final launch target:

```text
Push final content to MongoDB Atlas before production launch.
```

Codex should preserve compatibility with existing content loading patterns and avoid over-engineering if the first implementation is a Phase 1 showcase.

## Suggested Page Narrative

### 1. Hero: Smart Food AI

Purpose:

Immediately communicate investor-facing production capability.

Suggested message:

```text
Smart Food AI
A real AI-native food platform experience, launched from local business in Chiang Mai.
```

Supporting message:

```text
ChornPlanet turns conversational food discovery, menu guidance, and order-ready workflows into a premium production platform experience for real businesses.
```

CTA ideas:

```text
Explore Workflow
View Production Capability
```

### 2. Production Proof: From Chiang Mai Local Business

Purpose:

Show real-world credibility.

Key points:

- launched from local business context in Chiang Mai
- practical customer-facing direction
- designed for real menu/service operations
- production-minded platform, not a sample demo

### 3. How It Works: End-to-End Workflow

Purpose:

Explain the experience without exposing technical detail.

Suggested flow:

```text
Customer asks naturally
  ↓
Smart Food AI understands food intent
  ↓
Menu and service options are matched
  ↓
Order-ready summary is prepared
  ↓
Kitchen / operation team can continue the workflow
  ↓
Delivery or pickup flow can be coordinated
```

Use UI cards, step cards, or a premium vertical timeline.

### 4. Platform Features

Suggested feature cards:

- Natural food conversation
- Menu discovery and matching
- Favorite meal memory direction
- Order-ready summary
- Local business operation support
- Future LINE OA / website ordering direction
- Multi-channel platform readiness
- Content-to-commerce growth potential

### 5. Business Value

Suggested business cards:

- Investor-ready production proof
- Local business launch story
- Recruitment and HR technology signal
- AI-native platform development capability
- Future SaaS/product expansion direction
- ChornPlanet ecosystem integration

### 6. ChornPlanet Style Visual Story

Purpose:

Convert the poster idea into a premium responsive UI.

Visual direction:

- young men/women, 19–22 years old
- food ordering / restaurant / cafe / local business context
- premium Chiang Mai lifestyle atmosphere
- luxury editorial but believable production platform mood
- ChornPlanet style with soft cinematic lighting, clean UI panels, refined spacing, and immersive cards

### 7. Technical Capability Without Technical Exposure

Purpose:

Show capability without revealing implementation details.

Allowed language:

```text
AI-native platform
conversational experience
workflow automation
production-ready architecture
multi-channel service experience
content-to-commerce ecosystem
```

Avoid language:

```text
LangGraph
LangChain
RAG
FAISS
vector database
model orchestration details
internal prompt chain
private backend architecture
```

### 8. Future Direction

Optional section:

- Website order flow
- LINE OA connection
- MenuMatch backend cooperation
- Smart Food commerce layer
- analytics-assisted growth
- future integration with ChornPlanet media/commerce/luxury ecosystem

## Image Prompt Direction for Assets

The implementation may use temporary assets, existing assets, or generated assets later. Recommended prompt direction for image generation:

```text
Premium ChornPlanet editorial campaign image, young Thai man and woman around 19-22 years old, modern Chiang Mai cafe and local restaurant business atmosphere, AI-native smart food ordering UI panels floating subtly on clean glass interface, natural conversation and menu discovery feeling, premium lifestyle, soft daylight, refined luxury editorial composition, modern responsive web hero style, cinematic depth of field, realistic, elegant, non-technical, no code screens, no visible brand conflict, 9:16 and 16:9 crop-safe composition.
```

Use multiple image ratios as needed:

```text
Hero: 16:9 or wide desktop crop
Mobile hero: 9:16 crop-safe
Cards: 4:5 or 1:1
Workflow: abstract UI cards or lifestyle + interface blend
```

## UI/UX Direction

Design language:

```text
Premium responsive UI
Luxury editorial
Clean AI-native product storytelling
Poster-to-landing-page conversion
Soft gradients
Glass or translucent workflow cards where useful
Large readable typography
High spacing
Clear conversion sections
```

Recommended section style:

- large hero with content and visual panel
- proof/status badge for production launch
- workflow timeline
- feature card grid
- business-value card grid
- visual story section
- final CTA

Accessibility:

- readable contrast
- semantic headings
- alt text for images
- keyboard-safe CTA links
- responsive section spacing

## Implementation Phases

### Phase 1A: Page Shell and Route

- Add Smart Food AI route.
- Add page-level metadata if existing pattern supports it.
- Add base landing component.
- Confirm locale route works.

### Phase 1B: Components and SCSS

- Add Smart Food AI components.
- Add responsive SCSS.
- Reuse existing design tokens/patterns where available.
- Avoid heavy new dependencies.

### Phase 1C: Navigation and Footer

- Replace primary navbar label `AI Integration` with `Smart Food AI`.
- Link it to `/[locale]/smart-food-ai/`.
- Update footer AI Integration link to `/[locale]/ai-companions/fah/`.
- Preserve existing AI Integration discoverability.

### Phase 1D: Content and Visual Polish

- Add English content first.
- Add placeholder or selected visual assets.
- Ensure no exposed internal technical terms.
- Prepare content shape for later MongoDB Atlas migration.

### Phase 1E: Validation

- Run lint/build.
- Manually test English route and responsive layout.
- Check nav/footer link behavior.

## Testing Plan

Run:

```bash
yarn lint
yarn build
```

Manual route checks:

```text
/en/smart-food-ai/
/th/smart-food-ai/   // may show English fallback initially if allowed by current locale behavior
```

Navigation checks:

- Primary nav shows `Smart Food AI` instead of `AI Integration`.
- Primary nav links to Smart Food AI page.
- Footer AI Integration link opens `/[locale]/ai-companions/fah/`.
- Existing AI/Fah page remains accessible.
- Existing AI solutions/technical pages are not accidentally deleted.

Responsive checks:

- desktop wide
- laptop
- tablet
- mobile

Content checks:

- no LangGraph/LangChain/RAG/internal implementation exposure
- Chiang Mai local production story is visible
- investor/business value is visible
- workflow is understandable for non-technical users
- ChornPlanet premium visual direction is preserved

## Risks and Open Questions

- Should the route live directly under `src/app/[locale]/smart-food-ai/` or under `(desktop)` based on current route grouping?
- Should Phase 1 use hardcoded English content or an existing content loader first?
- Which current image assets are approved for first launch?
- Should Smart Food AI be added to sitemap/UrlMaps immediately?
- Should non-English locales fall back to English for this page until localized content is ready?
- Should the page link to a future MenuMatch demo/contact path, or only explain the platform capability for now?

## Acceptance Criteria

- New Smart Food AI planning file exists under `.chatgpt/planning/feature-smart-food-ai.md`.
- Smart Food AI implementation scope is clear for Codex.
- Route plan and component structure are defined.
- Navbar update is defined: `AI Integration` -> `Smart Food AI`.
- Footer link update is defined: AI Integration points to `/[locale]/ai-companions/fah/`.
- Page narrative explains real production capability from local business in Chiang Mai.
- Page avoids exposing low-level technical details.
- English-first content strategy is defined.
- MongoDB Atlas content migration before launch is recorded as a final target.
- Testing and manual validation steps are clear.
