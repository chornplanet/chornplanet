# Released Features

| Feature | Category | Source Path |
| --- | --- | --- |
| AI Luxury Page | Platform Page | `src/app/[locale]/(legacy)/ai-luxury/page.tsx`<br>`src/app/[locale]/(roadmap)/luxury/page.tsx`<br>`src/components/AiLuxury/AiLuxuryLandingPage.tsx`<br>`src/metadata/main/MetadataAiLuxury.ts`<br>`src/styles/platform/luxury.scss` |
| Smart Food AI Production Showcase | Platform Page | `src/app/[locale]/(legacy)/smart-food-ai/page.tsx`<br>`src/app/[locale]/(roadmap)/smart-food/page.tsx`<br>`src/components/SmartFoodAi/SmartFoodAiLandingPage.tsx`<br>`src/lib/smart-food-ai-content/smartFoodAiContent.service.ts`<br>`src/styles/platform/smart-food.scss` |
| Smart Food AI Server Error Fallback Rendering | Reliability Fix | `src/metadata/main/MetadataSmartFoodAi.ts`<br>`src/components/SmartFoodAi/SmartFoodAiLandingPage.tsx`<br>`src/lib/static-content/publicContentFallbacks.ts`<br>`public/fallback-content.svg` |
| Smart Food AI Production-Safe Fallback Content | Reliability Fix | `src/lib/smart-food-ai-content/smartFoodAiStaticFallback.ts`<br>`src/lib/smart-food-ai-content/smartFoodAiContent.service.ts`<br>`src/metadata/main/MetadataSmartFoodAi.ts` |
| MongoDB Atlas Home And Layout Content Migration | Content Architecture | `src/lib/layout-content/layoutContent.service.ts`<br>`server/core/domain/layout-content.entity.ts`<br>`server/core/services/layout-content.service.ts`<br>`server/adapters/outbound/mongo.repository/layout-content.repository.ts`<br>`src/app/api/layout-content/route.ts` |
| MCP Repository Understanding Upgrade | Agent Workspace | `.mcp/repository/`<br>`.mcp/tools/repo-tools.yaml`<br>`.mcp/tools/content-tools.yaml`<br>`.mcp/tools/seo-llm-tools.yaml`<br>`.mcp/workflows/` |
| MCP Phase 2 Platform Roadmap | Agent Workspace | `.mcp/roadmap/chornplanet-platform-roadmap.md`<br>`.mcp/roadmap/feature-queue.md`<br>`.mcp/roadmap/growth-milestones.md`<br>`.mcp/analytics/` |
| MTS Future Civilization Platform | Platform Page | `src/app/[locale]/(roadmap)/smart-mobility/page.tsx`<br>`src/app/[locale]/(roadmap)/smart-mobility/mts/[slug]/page.tsx`<br>`src/app/[locale]/(roadmap)/story/page.tsx`<br>`src/lib/platform-content/smartMobilityContent.ts`<br>`src/data/smart-mobility/`<br>`src/data/story/sofa-couple/en.sofa-couple.json` |
| LLM Visibility Files And Sitemap Route Discovery | SEO / LLM Visibility | `public/llm.txt`<br>`public/llm-full.txt`<br>`src/app/sitemap.ts`<br>`src/lib/sitemap/sitemapRoutes.ts`<br>`src/app/robots.ts`<br>`config/publicRedirects.mjs` |
