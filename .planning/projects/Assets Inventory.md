# ChornPlanet Assets Inventory Project

Status: Draft for planning
Owner: Khachornchit Chief Architect -> ChatGPT planning -> Codex implementation/review
Project Type: Platform product evolution, user inventory, AI content assets, loyalty, commerce
Target Area: ChornPlanet platform, Smart Food, StoryGenProduct, MTS, future commerce layer

## Purpose

This project converts ChornPlanet from a story/content platform into a user-owned digital asset ecosystem.

The core idea is simple:

```text
ChornPlanet becomes a cinematic AI asset ecosystem where users can collect, own, equip, use, upgrade, and display digital assets across stories, profiles, AI generation, Smart Food rewards, commerce, MTS travel concepts, and future real-world experiences.
```

The first practical direction should not start as an NFT/blockchain-first feature. The recommended first version is:

```text
Digital Asset Inventory + Loyalty Rewards + AI Prompt Components
```

Blockchain, marketplace trading, or NFT-style ownership can be considered later only after the platform has real user demand and stable product value.

## Strategic Positioning

ChornPlanet should evolve into:

```text
A cinematic world where users collect and use digital assets: characters, outfits, scenes, homes, rooms, MTS passes, food coupons, product cards, badges, and lifestyle items.
```

These assets become part of the user's ChornPlanet identity and can be used to personalize:

- user profile
- avatar/character identity
- story generation
- image generation
- short video generation
- StoryGenProduct output
- Smart Food rewards
- product recommendation
- future commerce/tourism/mixed-use experiences

## Why This Matters

This project connects the strongest existing ChornPlanet strengths:

```text
AI storytelling
+ cinematic scenes
+ outfits and visual identity
+ Smart Food commerce
+ MTS world system
+ TikTok product storytelling
+ future tourism/mixed-use ecosystem
= user-owned platform experience
```

Instead of users only watching ChornPlanet content, they can now participate in the world.

## Product North Star

```text
My ChornPlanet Inventory
```

Each user should eventually have a personal inventory that contains:

```text
My Character
My Outfits
My Scenes
My Food Coupons
My Badges
My MTS Passes
My Product Items
My Room / Home Items
```

The user can select assets from inventory and use them as structured inputs for AI generation.

Example:

```json
{
  "character": "Mountain Traveler",
  "outfit": "Coastal MTS Traveler Outfit",
  "scene": "Coastal Luxury MTS Station",
  "item": "Smart Food Bento",
  "style": "Nature Future Luxury"
}
```

This creates a bridge between asset ownership and AI prompt generation.

## Core Asset Categories

### 1. Character Assets

Character assets represent user identity, avatars, story participants, and world citizens.

Examples:

- Mountain Traveler
- Coastal Gentleman
- Flower Valley Lady
- MTS Passenger
- Smart Food Chef
- ChornPlanet Executive
- Sakura Couple
- Snow Resort Guest

Example schema:

```json
{
  "type": "character",
  "name": "Mountain Traveler",
  "rarity": "rare",
  "style": "Lanna luxury casual",
  "environment": "Mountain",
  "usableIn": ["story", "profile", "avatar", "video"]
}
```

### 2. Outfit Assets

Outfit assets are one of the strongest first asset categories because ChornPlanet already has strong visual fashion/story production logic.

Examples:

- Coastal MTS Traveler Outfit
- Flower Valley Gentleman Casual
- Soft Morning Luxury Safe Outfit
- Mountain Resort Casual
- Yacht Club Holiday Outfit
- Sakura Spring Couple Outfit

Example schema:

```json
{
  "type": "outfit",
  "name": "Coastal MTS Traveler Outfit",
  "category": "resort casual",
  "rarity": "premium",
  "environment": "Coastal",
  "genderStyle": "unisex",
  "imageLandscape": "/assets/outfits/coastal-mts-traveler-landscape.webp",
  "imagePortrait": "/assets/outfits/coastal-mts-traveler-portrait.webp"
}
```

Outfit assets can be used for:

- AI image generation
- StoryGenProduct
- user avatar/profile
- character customization
- TikTok product story matching
- future e-commerce item matching

### 3. Scene / Location Assets

Scene assets allow users to collect places inside ChornPlanet.

Examples:

- Mountain Luxury Terrace
- Coastal MTS Station
- Sakura Bridge
- Snow Valley Balcony
- Volcano Observatory
- Crystal Lake Villa
- Flower Desert Lounge
- Golden Rice Valley Resort

Example schema:

```json
{
  "type": "scene",
  "name": "Coastal Luxury MTS Station",
  "environment": "Coastal",
  "biome": "MTS Network",
  "rarity": "legendary",
  "usableIn": ["story", "background", "video", "profile"]
}
```

### 4. Home / Room Assets

Home and room assets make ChornPlanet feel like a lifestyle world.

Examples:

- Mountain Morning Living Room
- Coastal Condo Room
- Sakura Tea Room
- Smart Food Kitchen
- MTS Cabin Room
- Snow Resort Suite
- Flower Valley Cafe Corner

Example schema:

```json
{
  "type": "room",
  "name": "Mountain Morning Living Room",
  "style": "Nature Future Luxury",
  "items": ["sofa", "tea table", "window view", "plant", "lamp"],
  "usableIn": ["profile", "story scene", "AI image"]
}
```

### 5. MTS Transport Assets

MTS assets can turn the existing MTS world system into a user progression and exploration layer.

Examples:

- MTS ticket
- station pass
- train skin
- passenger badge
- route card
- biome travel stamp
- luxury cabin upgrade

Example schema:

```json
{
  "type": "mts_pass",
  "name": "Mountain to Coastal Route Pass",
  "route": ["Mountain Core", "Coastal Core"],
  "rarity": "rare",
  "benefit": "Unlock Coastal scenes for story generation"
}
```

### 6. Food / Smart Food Assets

Smart Food assets connect digital inventory to real customer behavior.

Examples:

- menu cards
- seasonal dishes
- chef badges
- digital meal stamps
- member food coupons
- AI recommended meal set
- StoryGenProduct food scene assets

Example schema:

```json
{
  "type": "food_item",
  "name": "ข้าวต้มปลาดอลลี่",
  "category": "healthy meal",
  "usableIn": ["menu", "story", "recommendation", "coupon"],
  "realWorldAvailable": true
}
```

## Asset Rarity System

Use a simple rarity system for user motivation and campaign design.

```json
{
  "rarityLevels": [
    "common",
    "uncommon",
    "rare",
    "premium",
    "legendary",
    "limited"
  ]
}
```

Recommended meaning:

| Rarity | Meaning |
|---|---|
| Common | Normal user assets |
| Uncommon | Slightly special assets from normal usage |
| Rare | Special scene/item assets |
| Premium | Paid, member, or campaign assets |
| Legendary | High-value ChornPlanet identity assets |
| Limited | Seasonal or campaign-only assets |

Examples:

- Mountain MTS Morning Pass = Common
- Coastal Yacht Club Scene = Premium
- Golden Aurora Train Skin = Legendary
- New Year Sakura Festival Outfit = Limited

## Asset Acquisition Rules

Users can receive assets through:

1. joining as a member
2. ordering food
3. watching or interacting with TikTok content
4. buying products
5. completing story missions
6. joining events
7. daily login
8. referral
9. seasonal campaign
10. admin grant

Example reward trigger:

```json
{
  "rewardTrigger": "food_order_completed",
  "reward": {
    "assetType": "stamp",
    "name": "Smart Food Member Stamp"
  }
}
```

## User Inventory Concept

Each user should have an inventory containing owned assets.

Example:

```json
{
  "userId": "user_001",
  "inventory": [
    {
      "assetId": "scene_mountain_terrace_001",
      "type": "scene",
      "ownedAt": "2026-05-28",
      "source": "campaign",
      "status": "active"
    },
    {
      "assetId": "outfit_coastal_traveler_001",
      "type": "outfit",
      "ownedAt": "2026-05-28",
      "source": "reward",
      "status": "available"
    }
  ]
}
```

## Base Asset Schema

Recommended base asset model:

```json
{
  "id": "asset_001",
  "name": "Coastal MTS Traveler Outfit",
  "slug": "coastal-mts-traveler-outfit",
  "type": "outfit",
  "category": "fashion",
  "environment": "Coastal",
  "biome": "MTS Network",
  "rarity": "premium",
  "status": "active",
  "description": "A clean resort-casual outfit for coastal MTS travel scenes.",
  "media": {
    "imageLandscape": "/assets/outfits/coastal-mts-traveler-landscape.webp",
    "imagePortrait": "/assets/outfits/coastal-mts-traveler-portrait.webp"
  },
  "usage": {
    "canUseInStory": true,
    "canUseInAvatar": true,
    "canUseInVideo": true,
    "canUseInCommerce": true
  },
  "source": {
    "createdBy": "ChornPlanet",
    "collection": "Coastal MTS Collection"
  }
}
```

## Base User Asset Schema

Recommended user-owned asset model:

```json
{
  "id": "user_asset_001",
  "userId": "user_001",
  "assetId": "asset_001",
  "ownedAt": "2026-05-28T00:00:00.000Z",
  "source": "purchase | reward | order | campaign | admin",
  "status": "owned | equipped | expired",
  "metadata": {
    "campaignId": "campaign_001",
    "orderId": "order_001"
  }
}
```

## MVP Scope

Start with only five asset types:

```text
1. Character
2. Outfit
3. Scene
4. Food Coupon
5. Badge
```

This keeps the first implementation useful and not too complex.

### MVP Database Models

```json
{
  "Asset": {
    "id": "string",
    "name": "string",
    "slug": "string",
    "type": "character | outfit | scene | coupon | badge",
    "rarity": "common | uncommon | rare | premium | legendary | limited",
    "environment": "Mountain | Coastal | Hybrid",
    "imagePortrait": "string",
    "imageLandscape": "string",
    "description": "string",
    "isActive": true
  }
}
```

```json
{
  "UserAsset": {
    "id": "string",
    "userId": "string",
    "assetId": "string",
    "ownedAt": "datetime",
    "source": "purchase | reward | order | campaign | admin",
    "status": "owned | equipped | expired"
  }
}
```

## MVP User Experience

### Page: My ChornPlanet Inventory

Suggested route:

```text
/[locale]/inventory
```

Possible route group implementation:

```text
src/app/[locale]/(roadmap)/inventory
```

Primary sections:

```text
My Character
My Outfits
My Scenes
My Food Coupons
My Badges
```

### Basic User Actions

Users should be able to:

- view owned assets
- filter by asset type
- filter by rarity
- equip one active character
- equip one active outfit
- select one active scene
- view available coupons
- see badges earned
- use selected assets as AI generation inputs

## AI Generation Integration

Assets should act as structured prompt components.

Example input:

```json
{
  "selectedAssets": {
    "character": "Mountain Traveler",
    "outfit": "Coastal MTS Traveler Outfit",
    "scene": "Coastal Luxury MTS Station",
    "foodItem": "Smart Food Bento"
  },
  "generationType": "story | image | video | StoryGenProduct"
}
```

Expected generated output:

- image prompt
- video prompt
- story post
- StoryGenProduct prompt pack
- product recommendation
- social post

## Real-World Connection

This project should connect digital assets to real business value.

| Digital Asset | Real-World Link |
|---|---|
| Food coupon asset | Restaurant order |
| Outfit asset | TikTok product sale |
| MTS pass | Event / travel / content unlock |
| Room asset | Interior product recommendation |
| Scene asset | Tourism / mixed-use promotion |
| Product card asset | E-commerce item |
| Membership badge | Customer loyalty |

Example Smart Food reward:

```json
{
  "assetReward": {
    "type": "badge",
    "name": "Smart Food Member",
    "benefit": "Unlocks healthy meal recommendation stories"
  }
}
```

## Marketplace Direction Later

A future marketplace can be added after the MVP.

Possible sections:

```text
ChornPlanet Asset Store
├── Character
├── Outfit
├── Scene
├── Home & Room
├── MTS Pass
├── Food & Coupon
├── Product Collection
└── Limited Event
```

Marketplace should come after:

1. stable asset schema
2. real user inventory
3. at least one reward flow
4. at least one AI generation integration
5. at least one real-world commerce connection

## Implementation Phases

### Phase 1: Asset Foundation

- Create Asset model
- Create UserAsset model
- Define asset type enum
- Define rarity enum
- Define environment enum
- Add seed assets for Character, Outfit, Scene, Coupon, Badge
- Add static or database-backed asset listing

### Phase 2: Inventory Page

- Create `/[locale]/inventory`
- Add inventory grid
- Add asset detail card
- Add type filter
- Add rarity filter
- Add empty state
- Add locked/unowned visual state if needed

### Phase 3: Equip / Select Assets

- Add selected character
- Add selected outfit
- Add selected scene
- Add equipped badge display
- Store user selection
- Prepare selected asset bundle for AI generation

### Phase 4: Smart Food Reward Connection

- Create reward trigger concept
- Map food order completion to coupon/badge/stamp asset
- Connect digital reward to member flow
- Prepare future MenuMatch/Line OA integration contract

### Phase 5: AI Prompt Component Integration

- Convert selected assets into prompt components
- Integrate with StoryGenProduct prompt structure
- Support image/video/story generation input bundle
- Preserve ChornPlanet visual locks and environment rules

### Phase 6: Product / Commerce Expansion

- Add product card assets
- Link outfit assets to product recommendation
- Link TikTok content to asset unlocks
- Add campaign-based limited assets

## Compatibility Notes

This project should preserve ChornPlanet governance:

- respect Mountain / Coastal / Hybrid environment declaration
- preserve LannaDNA, CHORNPlanetScenarioDNA, and NatureFutureLuxuryDNA
- preserve visual stability locks for character, outfit, lighting, and location
- preserve StoryGenProduct output order if assets are used in StoryGenProduct generation
- avoid exposing low-level internal engine details to public users

## Recommended First Seed Assets

```text
Character
- Mountain Traveler
- Coastal Gentleman
- Smart Food Chef

Outfit
- Coastal MTS Traveler Outfit
- Flower Valley Gentleman Casual
- Soft Morning Luxury Safe Outfit

Scene
- Mountain Luxury Terrace
- Coastal MTS Station
- Flower Valley Cafe Corner

Coupon
- Smart Food Welcome Coupon
- Healthy Meal Reward Coupon

Badge
- ChornPlanet Founding Member
- Smart Food Member
- MTS First Trip Badge
```

## Open Questions

- Should inventory require authentication in MVP, or can a demo guest inventory exist first?
- Should assets initially live in static content, MongoDB, or both?
- Should coupons be purely digital display first, or immediately connected to Smart Food order redemption?
- Should AI generation be included in MVP, or prepared as Phase 2 after inventory UI?
- Should asset ownership be user-specific from the beginning, or should first version be a public showcase of possible assets?

## Recommended Decision

Start with:

```text
Public Asset Showcase + My Inventory foundation
```

Then evolve to:

```text
User-owned Inventory + Smart Food rewards + AI generation components
```

This creates immediate platform value without overbuilding marketplace/blockchain complexity too early.
