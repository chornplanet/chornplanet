# Feature: AI Luxury Page

## Branch

`feature/ai-luxury-page`

## Route

`/[locale]/ai-luxury`

## Objective

Create a new public Chorn Planet page for `/ai-luxury` that presents Chorn Planet as an AI-native luxury platform builder for real estate companies, hospitality ventures, mixed-use destinations, tourism ecosystems, and premium lifestyle businesses.

The page should feel more premium and venture-ready than `/smart-food-ai`, while staying grounded in real platform capability rather than sounding like a direct investor or recruitment pitch.

## Positioning

**Chorn Planet AI Luxury turns premium places, services, and lifestyle brands into AI-native business ecosystems.**

The page should communicate:

- AI-native platform development for luxury real estate, hospitality, tourism, and lifestyle ventures.
- Business readiness for premium service workflows, customer journeys, commerce, and destination experiences.
- Chorn Planet can build and deliver real AI-powered production platforms, not only concept visuals.
- The page should be attractive to real estate companies, venture partners, hospitality operators, and premium collaborators.

## Implementation Scope

### Included in this branch

- Create `src/app/[locale]/(desktop)/ai-luxury/page.tsx`.
- Create `src/components/AiLuxury/AiLuxuryLandingPage.tsx`.
- Create `src/metadata/main/MetadataAiLuxury.ts`.
- Create `src/styles/ai-luxury.scss`.
- Import `ai-luxury.scss` in the desktop layout.
- Use static readiness content first so the route can render without MongoDB dependency.
- Include image source path placeholders for all content blocks so image generation can be planned later.

### Not included yet

- MongoDB content collection.
- Admin/editor CMS interface.
- Final image assets.
- Navigation/footer exposure decision.
- Thai-localized copy pass.

## Readiness Content Structure

### 1. Hero

Purpose: Show premium business direction immediately.

Image path:

`/images/ai-luxury/hero-ai-luxury-real-estate-platform.webp`

### 2. Strategic Readiness

Purpose: Explain that AI Luxury means platform readiness across brand, place, service, commerce, and operations.

Image path:

`/images/ai-luxury/ai-luxury-strategic-readiness.webp`

### 3. Built For Premium Business Ecosystems

Purpose: Speak to real estate, mixed-use, resort, hospitality, tourism, and premium lifestyle businesses.

Image paths:

- `/images/ai-luxury/segment-real-estate-mixed-use.webp`
- `/images/ai-luxury/segment-hospitality-resort.webp`
- `/images/ai-luxury/segment-tourism-destination.webp`
- `/images/ai-luxury/segment-luxury-commerce.webp`

### 4. AI Luxury Platform Layers

Purpose: Show practical capability areas.

Image paths:

- `/images/ai-luxury/layer-brand-storytelling.webp`
- `/images/ai-luxury/layer-customer-journey.webp`
- `/images/ai-luxury/layer-service-workflow.webp`
- `/images/ai-luxury/layer-commerce-intelligence.webp`
- `/images/ai-luxury/layer-venture-readiness.webp`

### 5. Venture-Ready Business Signal

Purpose: Communicate credibility without using direct recruitment language.

Image path:

`/images/ai-luxury/venture-ready-business-signal.webp`

## Copy Guardrails

- Avoid direct recruitment wording.
- Avoid overusing investor-pitch language.
- Use premium, calm, business-ready language.
- Emphasize AI-native production platform capability.
- Mention real estate companies and ventures naturally.
- Keep Chorn Planet positioned as a platform builder and ecosystem operator.

## Future Image Generation Notes

Images should use Chorn Planet luxury editorial direction:

- Premium real estate and hospitality atmosphere.
- AI-native platform overlays that feel elegant, not overly technical.
- Realistic luxury destination/business setting.
- Calm confidence, natural light, refined materials.
- No hard sci-fi UI clutter.
- 16:9 or 4:3 web hero/section composition, with responsive crop safety.
