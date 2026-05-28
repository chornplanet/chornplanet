# Feature Plan: Home Banner + Smart Food AI Introduction Module

Repository: `khachornchit/chornplanet`
Branch recommendation: `feature/home-banner-smart-food-intro`
Status: Planning
Owner: Khachornchit Chief Architect → ChatGPT planning → Codex implementation

## Purpose

Chorn Planet has recently implemented the Smart Food AI production showcase at:

```text
/[locale]/smart-food-ai/
```

The next homepage move is to make the main Chorn Planet site feel more cinematic, premium, and platform-ready by adding:

1. A new homepage banner image section for Chorn Planet.
2. A new Smart Food AI introduction section directly below the banner.
3. A Smart Food AI introduction image featuring Thai young women and men, age 19–22.
4. A clear call-to-action link to the existing Smart Food AI showcase page:

```text
/[locale]/smart-food-ai/
```

This feature should improve the homepage as a premium production showcase without replacing the existing Smart City and platform sections yet.

## Existing Repository Review

### Homepage Route

The current homepage route is:

```text
src/app/[locale]/(legacy)/page.tsx
```

Current render order inside `<main>`:

```tsx
<HeroSection lang={lang} data={homePageContent.heroSection}/>
<SmartCityMain ... />
<HumanDailyFlow ... />
<LocalToGlobal ... />
<SystemExplainers ... />
<MobilityFocus ... />
<CitySystems ... />
<GlobalPatterns ... />
<UrbanSignals ... />
<EditorialPositioning ... />
```

Recommended new render order:

```tsx
<HomeBannerSection lang={lang} />
<HomeSmartFoodIntro lang={lang} />
<HeroSection lang={lang} data={homePageContent.heroSection}/>
<SmartCityMain ... />
...
```

or, if preserving the existing `HeroSection` as the first content block is preferred:

```tsx
<HeroSection lang={lang} data={homePageContent.heroSection}/>
<HomeBannerSection lang={lang} />
<HomeSmartFoodIntro lang={lang} />
<SmartCityMain ... />
...
```

Recommended final direction for this feature:

```tsx
<HomeBannerSection lang={lang} />
<HomeSmartFoodIntro lang={lang} />
<HeroSection lang={lang} data={homePageContent.heroSection}/>
<SmartCityMain ... />
...
```

Reason: the banner should become the new premium Chorn Planet visual entry point.

### Existing Hero Component

Current file:

```text
src/components/Home/HeroSection.tsx
```

The existing hero is content-driven from `homePageContent.heroSection`, uses `next/image`, and links to `landingUrl` using locale prefix.

This feature should not delete or heavily rewrite the existing `HeroSection`. Instead, add new dedicated components so the current homepage content remains safe.

### Existing Smart Food AI Page

Current Smart Food AI page component:

```text
src/components/SmartFoodAi/SmartFoodAiLandingPage.tsx
```

Current Smart Food AI route:

```text
src/app/[locale]/(legacy)/smart-food-ai/page.tsx
```

The page is already production-style and uses:

```text
/smart-food/smart-food-overview.png
/smart-food/chat-ordering.png
/smart-food/process1-chat-ordering.png
/smart-food/process2-bill-processing.png
/smart-food/process3-cooking.png
/smart-food/process4-delivery.png
/smart-food/process5-receiving.png
```

The homepage intro section should visually connect to this existing page but should not duplicate the full page content.

### Styles

Current global desktop layout imports styles in:

```text
src/app/[locale]/(legacy)/layout.tsx
```

Existing imported home-related SCSS includes:

```text
src/styles/smart-hero-section.scss
src/styles/human-daily-flow.sass.scss
src/styles/local-to-global.scss
src/styles/system-explainers.scss
src/styles/mobility-focus.scss
src/styles/city-systems.scss
src/styles/global-patterns.scss
src/styles/urban-signals.scss
src/styles/editorial-positioning.scss
src/styles/smart-food-ai.scss
```

Recommended new style file:

```text
src/styles/home-platform-showcase.scss
```

Import it in desktop layout near the other homepage SCSS imports.

## Goals

- Add a premium Chorn Planet banner section to the homepage.
- Add a Smart Food AI intro module directly below the banner.
- Link the Smart Food AI intro module to `/${lang}/smart-food-ai/`.
- Use cinematic, premium, modern production-showcase style.
- Include Thai young women and men aged 19–22 in the Smart Food image direction.
- Preserve current homepage data fetching and existing sections.
- Preserve current locale routing pattern.
- Preserve current Smart Food AI page implementation.
- Keep code small, safe, and easy for Codex to implement.

## Non-Goals

- Do not rebuild the entire homepage platform layout in this feature.
- Do not remove `HeroSection`, `SmartCityMain`, or current homepage sections.
- Do not redesign the Smart Food AI page.
- Do not implement ordering, checkout, or LINE OA integration.
- Do not introduce MongoDB schema changes unless a later feature requires dynamic homepage content.
- Do not add authentication.
- Do not change navigation in this feature unless separately approved.

## Proposed Components

### 1. `HomeBannerSection`

Create:

```text
src/components/Home/HomeBannerSection.tsx
```

Purpose:

A full-width premium Chorn Planet banner that communicates:

```text
Chorn Planet
Nature • Adventure • Friendship • Smart Food • Future Lifestyle
```

Recommended content:

```text
Eyebrow:
CHORN PLANET SHOWCASE

Headline:
A cinematic world where nature, youth, culture, and AI-powered lifestyle meet.

Body:
Explore Chorn Planet through immersive landscapes, Thai soft power, smart food innovation, future mobility, and premium visual storytelling.

CTA Primary:
Explore Smart Food AI
-> /${lang}/smart-food-ai/

CTA Secondary:
Discover Chorn Planet
-> /${lang}/
```

Recommended visual:

Use the generated YouTube/banner-style Chorn Planet waterfall friendship image if it is added to the repository.

Recommended asset path:

```text
public/home/chorn-planet-waterfall-friends-banner.png
```

Alternative if the asset is not added yet:

```text
public/home/chorn-planet-home-banner.png
```

Implementation detail:

Use `next/image` with `fill`, `priority`, and `sizes="100vw"`.

Suggested markup pattern:

```tsx
import Image from "next/image";
import Link from "next/link";

export default function HomeBannerSection({ lang }: { lang: string }) {
  return (
    <section className="home-platform-banner">
      <Image
        src="/home/chorn-planet-waterfall-friends-banner.png"
        alt="Chorn Planet cinematic waterfall friendship banner"
        fill
        priority
        sizes="100vw"
      />
      <div className="home-platform-banner__overlay" />
      <div className="home-platform-banner__content">
        <p>CHORN PLANET SHOWCASE</p>
        <h1>A cinematic world where nature, youth, culture, and AI-powered lifestyle meet.</h1>
        <div className="home-platform-banner__actions">
          <Link href={`/${lang}/smart-food-ai/`}>Explore Smart Food AI</Link>
          <Link href={`/${lang}/`}>Discover Chorn Planet</Link>
        </div>
      </div>
    </section>
  );
}
```

### 2. `HomeSmartFoodIntro`

Create:

```text
src/components/Home/HomeSmartFoodIntro.tsx
```

Purpose:

Introduce the Smart Food AI project on the homepage as a premium real-world production showcase.

Recommended positioning:

```text
Smart Food AI is the real production proof that Chorn Planet can connect storytelling, local food business, AI conversation, ordering workflow, payment readiness, kitchen operations, delivery, and future commerce.
```

Recommended content:

```text
Eyebrow:
SMART FOOD AI

Headline:
From Chiang Mai local business to AI-native food platform.

Body:
Smart Food AI shows how Chorn Planet turns natural food conversations, menu guidance, order-ready summaries, kitchen workflow, payment support, and delivery coordination into a production-minded platform experience.

CTA:
View Smart Food AI Showcase
-> /${lang}/smart-food-ai/
```

Recommended cards / proof points:

```text
- Chat Ordering
- Bill Processing
- Kitchen Workflow
- Delivery Handoff
- Customer Receiving
```

Recommended intro image:

```text
public/home/smart-food-ai-youth-intro.png
```

Image direction:

```text
Thai young women and men, age 19–22, stylish and friendly, gathered around a premium Smart Food ordering screen/tablet in a modern Chiang Mai cafe or nature-lifestyle food space. Mood: warm, professional, youthful, premium production showcase, AI food ordering, Thai soft power, clean daylight, cinematic editorial realism.
```

Implementation detail:

Use a two-column layout on desktop:

```text
left: content + CTA + proof chips
right: image card
```

Mobile:

```text
single-column, image below content or image first if visually stronger
```

Suggested markup pattern:

```tsx
import Image from "next/image";
import Link from "next/link";

const proofPoints = [
  "Chat Ordering",
  "Bill Processing",
  "Kitchen Workflow",
  "Delivery Handoff",
  "Customer Receiving",
];

export default function HomeSmartFoodIntro({ lang }: { lang: string }) {
  return (
    <section className="home-smart-food-intro">
      <div className="home-smart-food-intro__grid">
        <div className="home-smart-food-intro__content">
          <p className="home-smart-food-intro__eyebrow">SMART FOOD AI</p>
          <h2>From Chiang Mai local business to AI-native food platform.</h2>
          <p>
            Smart Food AI shows how Chorn Planet turns natural food conversations,
            menu guidance, order-ready summaries, kitchen workflow, payment support,
            and delivery coordination into a production-minded platform experience.
          </p>
          <div className="home-smart-food-intro__chips">
            {proofPoints.map((item) => <span key={item}>{item}</span>)}
          </div>
          <Link className="home-smart-food-intro__cta" href={`/${lang}/smart-food-ai/`}>
            View Smart Food AI Showcase
          </Link>
        </div>
        <div className="home-smart-food-intro__image">
          <Image
            src="/home/smart-food-ai-youth-intro.png"
            alt="Thai young adults exploring Smart Food AI ordering platform"
            width={1200}
            height={850}
            sizes="(max-width: 991px) 100vw, 48vw"
          />
        </div>
      </div>
    </section>
  );
}
```

## Recommended Homepage Integration

Update:

```text
src/app/[locale]/(legacy)/page.tsx
```

Add imports:

```tsx
import HomeBannerSection from "@/components/Home/HomeBannerSection";
import HomeSmartFoodIntro from "@/components/Home/HomeSmartFoodIntro";
```

Add to render order:

```tsx
<main className="flex flex-col">
  <div className="container">
    <HomeBannerSection lang={lang} />
    <HomeSmartFoodIntro lang={lang} />
    <HeroSection lang={lang} data={homePageContent.heroSection}/>
    <SmartCityMain ... />
    ...
  </div>
</main>
```

Important note:

If the new banner needs true full-bleed width, place `HomeBannerSection` outside the `.container` and keep `HomeSmartFoodIntro` inside the container, or make the banner internally break out to full viewport width.

Recommended practical implementation:

```tsx
<main className="flex flex-col">
  <HomeBannerSection lang={lang} />
  <div className="container">
    <HomeSmartFoodIntro lang={lang} />
    <HeroSection lang={lang} data={homePageContent.heroSection}/>
    <SmartCityMain ... />
    ...
  </div>
</main>
```

This provides a premium full-width banner while preserving the existing content container.

## Style Direction

Create:

```text
src/styles/home-platform-showcase.scss
```

Import in:

```text
src/app/[locale]/(legacy)/layout.tsx
```

near:

```tsx
import "@/styles/smart-hero-section.scss"
import "@/styles/smart-food-ai.scss"
```

Recommended style identity:

```text
Luxury editorial
Premium cinematic nature
Deep green / ivory / warm gold
Soft daylight
Large hero typography
Glass-like content panel only if readable
Rounded image cards
Professional production showcase
```

Recommended CSS classes:

```text
.home-platform-banner
.home-platform-banner__overlay
.home-platform-banner__content
.home-platform-banner__actions
.home-smart-food-intro
.home-smart-food-intro__grid
.home-smart-food-intro__content
.home-smart-food-intro__eyebrow
.home-smart-food-intro__chips
.home-smart-food-intro__cta
.home-smart-food-intro__image
```

Recommended banner sizing:

```scss
.home-platform-banner {
  position: relative;
  min-height: clamp(540px, 72vh, 860px);
  overflow: hidden;
}
```

Recommended Smart Food intro image ratio:

```scss
.home-smart-food-intro__image img {
  display: block;
  width: 100%;
  height: auto;
}
```

## Image Asset Requirements

### Banner Image

Preferred asset:

```text
public/home/chorn-planet-waterfall-friends-banner.png
```

Size recommendation:

```text
2048 x 1152 px
```

Visual direction:

```text
Thai young adults, male and female, age 19–22, playful friendship group, mountain mist, large waterfall, clear stream, forest ferns, tourists, wooden bridge, cinematic soft daylight, fresh powerful nature mood, Chorn Planet premium banner composition.
```

### Smart Food Intro Image

Preferred asset:

```text
public/home/smart-food-ai-youth-intro.png
```

Size recommendation:

```text
1600 x 1100 px or 1800 x 1200 px
```

Visual direction:

```text
Thai young women and men, age 19–22, friendly and stylish, gathered around a Smart Food AI ordering screen/tablet in a clean modern Chiang Mai cafe or food lifestyle setting. Include subtle food plates, menu UI, warm daylight, professional production showcase tone, premium editorial realism.
```

## Content Copy

### English Copy

Banner eyebrow:

```text
CHORN PLANET SHOWCASE
```

Banner headline:

```text
A cinematic world where nature, youth, culture, and AI-powered lifestyle meet.
```

Banner body:

```text
Explore immersive landscapes, Thai soft power, smart food innovation, future mobility, and premium visual storytelling from Chorn Planet.
```

Smart Food eyebrow:

```text
SMART FOOD AI
```

Smart Food headline:

```text
From Chiang Mai local business to AI-native food platform.
```

Smart Food body:

```text
Smart Food AI shows how Chorn Planet turns natural food conversations, menu guidance, order-ready summaries, kitchen workflow, payment support, and delivery coordination into a production-minded platform experience.
```

CTA:

```text
View Smart Food AI Showcase
```

### Thai Copy

Banner eyebrow:

```text
CHORN PLANET SHOWCASE
```

Banner headline:

```text
โลกภาพยนตร์ที่เชื่อมธรรมชาติ วัยรุ่น วัฒนธรรม และไลฟ์สไตล์ AI เข้าด้วยกัน
```

Banner body:

```text
สำรวจภูมิทัศน์ระดับภาพยนตร์ ซอฟต์พาวเวอร์ไทย Smart Food นวัตกรรมไลฟ์สไตล์ และเรื่องเล่าพรีเมียมจาก Chorn Planet
```

Smart Food eyebrow:

```text
SMART FOOD AI
```

Smart Food headline:

```text
จากธุรกิจอาหารท้องถิ่นเชียงใหม่ สู่แพลตฟอร์มอาหาร AI-native
```

Smart Food body:

```text
Smart Food AI แสดงให้เห็นว่า Chorn Planet สามารถเปลี่ยนบทสนทนาเรื่องอาหาร การแนะนำเมนู สรุปออเดอร์ เวิร์กโฟลว์ครัว การชำระเงิน และการส่งมอบ ให้กลายเป็นประสบการณ์แพลตฟอร์มที่พร้อมต่อยอดสู่การใช้งานจริง
```

CTA:

```text
ดู Smart Food AI Showcase
```

## Localization Strategy

Minimum implementation:

```text
if lang === "th" use Thai copy
else use English copy
```

Future implementation:

Move copy to MongoDB-backed homepage content service or structured locale data.

Do not block this feature on full 10-language translation.

## SEO and Accessibility

- Use descriptive `alt` text for both images.
- Keep banner text readable over the image with overlay gradient.
- Keep `h1` usage safe. If existing `HeroSection` already produces the homepage primary `h1`, consider making `HomeBannerSection` headline an `h1` only if the existing hero is demoted later. For this feature, either:
  - keep banner headline as `h1` and change old `HeroSection` later, or
  - use `h2` in the banner to avoid multiple top-level homepage headings.
- Recommended safe choice for this feature: use `h1` in `HomeBannerSection` because it becomes the new visual hero, then plan a later cleanup for old `HeroSection` heading hierarchy if needed.
- Link CTA with `next/link`.
- Ensure keyboard focus styles remain visible.

## Implementation Steps

1. Add banner asset under `public/home/`.
2. Add Smart Food intro asset under `public/home/`.
3. Create `src/components/Home/HomeBannerSection.tsx`.
4. Create `src/components/Home/HomeSmartFoodIntro.tsx`.
5. Create `src/styles/home-platform-showcase.scss`.
6. Import the new SCSS file in `src/app/[locale]/(legacy)/layout.tsx`.
7. Update `src/app/[locale]/(legacy)/page.tsx` render order.
8. Verify links resolve to:

```text
/en/smart-food-ai/
/th/smart-food-ai/
```

9. Test responsive layout.
10. Run lint/build.

## Testing Plan

Run:

```bash
yarn lint
yarn build
```

Manual route checks:

```text
/en/
/th/
/en/smart-food-ai/
/th/smart-food-ai/
```

Responsive checks:

```text
Desktop 1440px+
Laptop 1280px
Tablet 768px
Mobile 390px
```

Visual checks:

- Banner image fills full width.
- Banner text remains readable.
- CTA links are visible.
- Smart Food intro appears directly below banner.
- Smart Food intro image loads correctly.
- Smart Food intro CTA links to `/${lang}/smart-food-ai/`.
- Existing Smart City and homepage sections still render.

## Risks and Mitigations

### Risk: Banner inside `.container` feels too small

Mitigation:

Place `HomeBannerSection` outside `.container` and keep only the downstream content inside `.container`.

### Risk: Multiple `h1` headings on homepage

Mitigation:

Use `h1` for the new banner and plan a later small cleanup to adjust old `HeroSection` heading hierarchy, or use `h2` in the new banner for this feature.

### Risk: Image asset not yet committed

Mitigation:

Use temporary fallback image path only if the asset exists. Do not commit broken image paths. Codex should check `public/home/` or add the required assets in the same PR.

### Risk: New static copy bypasses MongoDB content model

Mitigation:

Accept static localized copy for this showcase feature. Move it to content service in a later content-management feature.

## Acceptance Criteria

- `.chatgpt/planning/feature-x.md` exists with this plan.
- Homepage has a new premium Chorn Planet banner image section.
- Homepage has a Smart Food AI intro module directly below the banner.
- Smart Food intro module includes an image direction / asset featuring Thai young women and men aged 19–22.
- Smart Food intro CTA links to `/${lang}/smart-food-ai/`.
- Existing Smart Food AI page remains unchanged.
- Existing homepage sections remain visible after the new modules.
- Responsive layout works on desktop, tablet, and mobile.
- `yarn lint` and `yarn build` pass.

## Future Follow-Up

After this feature, consider:

- Move homepage copy to MongoDB-backed content.
- Add analytics event tracking for Smart Food CTA clicks.
- Add A/B variants for banner image and CTA wording.
- Add a Luxury Project intro module below Smart Food.
- Expand the homepage into the larger platform layout described in `.chatgpt/planning/feature-new-platform-layout.md`.
