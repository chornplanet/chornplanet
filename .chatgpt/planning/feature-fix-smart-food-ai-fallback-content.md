# Feature Plan: Fix Smart Food AI Production Fallback Content

Repository: `khachornchit/chornplanet`
Branch: `feature/fix-smart-food-ai-fallback-content`
Status: Ready for Codex review / validation
Owner: Khachornchit Chief Architect -> ChatGPT planning/fix proposal -> Codex review/validation

## Problem Statement

After the earlier Smart Food AI server-render reliability fix, `/smart-food-ai/` no longer shows the generic server error. However, the public route can still render low-quality static fallback copy when localized MongoDB content is unavailable.

Observed screenshot symptoms:

```text
STATIC FALLBACK
Smart Food AI
This page is temporarily using static fallback content while localized MongoDB content is unavailable.
Restore Content
Repair or reseed Smart Food AI MongoDB content.
```

This confirms the route is now render-safe, but the fallback experience is not production-quality and exposes internal recovery wording to public users.

## Root Cause

The previous fix protected the render path, but `getFallbackSmartFoodAiContent()` still returns generic system fallback text from `src/lib/static-content/publicContentFallbacks.ts`.

That generic fallback is useful for engineering diagnostics, but it is not suitable as the public Smart Food AI fallback experience.

## Goals

- Keep the page render-safe when MongoDB Smart Food AI content is unavailable.
- Replace public Smart Food AI fallback copy with production-safe Smart Food AI product messaging.
- Avoid exposing internal maintenance language such as `Static fallback`, `Restore Content`, or `Repair or reseed MongoDB content` to public visitors.
- Keep the fallback independent from live MongoDB availability.
- Keep the fix focused on Smart Food AI fallback behavior.

## Non-Goals

- Do not redesign the Smart Food AI page.
- Do not change the complete MongoDB-backed Smart Food AI content when it is available.
- Do not change global static fallback wording for all pages.
- Do not implement Smart Food ordering or MenuMatch runtime integration.
- Do not expose low-level architecture details such as LangGraph, LangChain, RAG, vector stores, or model orchestration.

## Proposed Architecture

### 1. Dedicated production-safe Smart Food AI fallback

Add a dedicated fallback module:

```text
src/lib/smart-food-ai-content/smartFoodAiStaticFallback.ts
```

This module contains:

- `SMART_FOOD_AI_STATIC_METADATA_FALLBACK`
- `getSmartFoodAiStaticFallback(locale)`

The fallback uses product-facing Smart Food AI language and valid placeholder image paths.

### 2. Public page fallback routing

Update:

```text
src/lib/smart-food-ai-content/smartFoodAiContent.service.ts
```

Change `getSmartFoodAiContentForPublicPage()` fallback from the generic static content fallback to the dedicated Smart Food AI fallback.

### 3. Metadata fallback reuse

Update:

```text
src/metadata/main/MetadataSmartFoodAi.ts
```

Use `SMART_FOOD_AI_STATIC_METADATA_FALLBACK` so page fallback and metadata fallback remain aligned.

## Project Structure Guideline

Keep the fallback under the Smart Food AI feature namespace:

```text
src/lib/smart-food-ai-content/
```

This avoids making global fallback content overly product-specific and reduces regression risk for unrelated public pages.

## Testing Plan

Recommended validation:

1. Run `npm run lint`.
2. Run `npm run build`.
3. Temporarily force Smart Food AI MongoDB content lookup failure and open `/en/smart-food-ai/`.
4. Confirm the page renders production-safe Smart Food AI copy instead of generic fallback/restore/reseed copy.
5. Confirm metadata still resolves with Smart Food AI public product description.
6. Confirm normal MongoDB-backed Smart Food AI content remains unchanged when available.

## Acceptance Criteria

- `/[locale]/smart-food-ai/` never displays `STATIC FALLBACK`, `Restore Content`, or `Repair or reseed Smart Food AI MongoDB content` to public visitors when using fallback content.
- The fallback page still explains Smart Food AI as an AI-native food service platform.
- The fallback page remains render-safe with valid image sources.
- The fallback content does not expose sensitive/internal architecture.
- The fix is scoped to Smart Food AI fallback behavior and does not alter unrelated pages.

## Implementation Summary

Implemented in this branch:

- Added `src/lib/smart-food-ai-content/smartFoodAiStaticFallback.ts`.
- Updated `src/lib/smart-food-ai-content/smartFoodAiContent.service.ts` to use the dedicated production-safe fallback.
- Updated `src/metadata/main/MetadataSmartFoodAi.ts` to reuse the dedicated metadata fallback.
