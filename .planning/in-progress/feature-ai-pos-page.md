# Feature: AI POS Page

## Problem Statement
ChornPlanet Smart Food currently explains AI Smart Food workflows, but does not yet present MenuMatch + LineBot as a dedicated AI POS SaaS product page.

## Goal
Create an AI POS landing page under Smart Food that positions MenuMatch + LineBot + Bill Processing as an AI-native conversational POS SaaS.

## Content Source
Use `src/data/smart-food/en.pos.json` as the initial EN source of truth.

## Core Narrative
1. Customer ordering workflow
2. Conversational cashier / ordering terminal
3. POS transaction engine
4. Payment automation via bill processing
5. SaaS-ready multi-tenant architecture
6. More advanced than traditional POS

## Expected Outcome
- Dedicated AI POS page inside ChornPlanet Smart Food
- Reusable JSON content source
- Future locale translation to TH and other languages
- Future MongoDB migration if promoted from static content

## Suggested Route
`/en/smart-food/ai-pos`

## Implementation Notes for Codex
- Review `src/components/SmartFoodAi/SmartFoodAiLandingPage.tsx`
- Reuse existing Smart Food visual language where possible
- Prefer database-backed structure later; static JSON acceptable in phase 1
