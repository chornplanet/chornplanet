# ChornPlanet Assets Inventory: Starter Points Idea

Status: Draft for planning
Owner: Khachornchit Chief Architect -> ChatGPT planning -> Codex implementation/review
Repository: `khachornchit/chornplanet`
Branch: `main`
Project Area: Assets Inventory, Account Economy, User Rewards, Future Web3 Integration

## Purpose

This document captures the initial account economy idea for ChornPlanet Assets Inventory.

The goal is to allow users to register for free, receive a large starter point balance, and begin building their ChornPlanet identity by buying starter assets such as characters, outfits, scenes, badges, MTS passes, and future Smart Food-related items.

Core direction:

```text
Free user registration
+ Primary account level
+ initial Genesis Points grant
+ asset inventory
+ starter asset store
+ future paid level
+ optional Web3 account integration later
```

Recommended product framing:

```text
ChornPlanet Account Economy allows every new user to register for free as a Primary Citizen and receive 10M Genesis Points. These points are non-cash, non-withdrawable starter points used to buy beginner characters, outfits, scenes, badges, and MTS passes. As users interact with ChornPlanet, Smart Food, TikTok commerce, and story missions, they can earn additional credits. Later, paid users can purchase Premium Gems or memberships to unlock premium assets, limited collections, advanced AI generation, and exclusive ChornPlanet experiences. Web3 wallet linking should be introduced later as an optional identity and ownership layer, not as the required first login method.
```

## Initial Idea

Every new user can register for free and start at the Primary level.

At registration, ChornPlanet gives the user an initial starter balance.

Example:

```text
Primary Level user receives 10,000,000 Genesis Points.
```

The user can use these starter points to buy initial assets in ChornPlanet.

Important rule:

```text
Genesis Points are not money.
Genesis Points have no cash value.
Genesis Points cannot be withdrawn.
Genesis Points cannot be converted to real money.
Genesis Points are used only inside ChornPlanet.
```

## Recommended Economy Design

Do not use only one point type for everything.

Use a layered economy instead.

```text
1. Genesis Points
2. Chorn Credits
3. Premium Gems / Paid Credits
```

This creates a clear path:

```text
Free user -> engaged user -> paid user -> premium collector
```

## Currency Layer 1: Genesis Points

Genesis Points are free starter points granted to new users.

Recommended starting amount:

```text
10,000,000 Genesis Points
```

Use cases:

- common assets
- starter characters
- starter outfits
- starter scenes
- basic badges
- beginner MTS passes
- basic room or home decorations later

Recommended restrictions:

```text
Genesis Points can buy starter assets only.
Premium, Limited, Legendary, and campaign-only assets require earned credits, paid credits, membership, or unlock conditions.
```

Example model:

```json
{
  "currency": "GENESIS_POINTS",
  "startingBalance": 10000000,
  "cashValue": false,
  "transferable": false,
  "withdrawable": false
}
```

## Currency Layer 2: Chorn Credits

Chorn Credits are earned from real user activity.

Users can earn Chorn Credits from:

- food orders
- daily login
- seasonal campaigns
- TikTok interactions
- story missions
- referrals
- events
- Smart Food member activity
- future tourism or mixed-use participation

Use cases:

- rare assets
- coupon unlocks
- story generation boosts
- limited campaign assets
- MTS route unlocks
- Smart Food reward items

## Currency Layer 3: Premium Gems / Paid Credits

Premium Gems are the future paid currency or premium credit layer.

Use cases:

- premium outfits
- legendary scenes
- limited event assets
- advanced AI generation packs
- special avatar styles
- commercial-use story packs
- premium product scenes
- premium MTS cabin upgrades

This layer should be added later after the free economy and inventory system are stable.

## Recommended User Levels

Simple MVP levels:

| Level   | Type               | Description                                            |
| ------- | ------------------ | ------------------------------------------------------ |
| Primary | Free               | Free account with 10M Genesis Points                   |
| Premium | Paid               | Paid membership with premium access and special assets |
| Founder | Limited / campaign | Early supporter or special campaign tier               |

Future expanded progression:

```text
Level 1: Primary Citizen
Level 2: Explorer
Level 3: Collector
Level 4: Creator
Level 5: Premium Citizen
Level 6: Founder / Patron
```

## What Users Can Buy With Starter Points

Users should not be able to buy everything with free starter points.

Recommended rule:

```text
Genesis Points can buy starter assets only.
```

Example pricing:

| Asset Type            | Example Price | Currency       |
| --------------------- | ------------: | -------------- |
| Common outfit         |        50,000 | Genesis Points |
| Common scene          |       100,000 | Genesis Points |
| Starter character     |       200,000 | Genesis Points |
| Beginner MTS pass     |       150,000 | Genesis Points |
| Basic badge           |        20,000 | Genesis Points |
| Rare outfit           |         1,000 | Chorn Credits  |
| Premium scene         |           500 | Premium Gems   |
| Limited founder badge | Campaign only | Unlock         |

## Recommended Registration Flow

Do not start with wallet-only registration.

Recommended MVP flow:

```text
User registers with email/social login
-> ChornPlanet creates Primary account
-> ChornPlanet grants 10M Genesis Points once
-> user opens Asset Store
-> user buys starter assets
-> assets appear in My ChornPlanet Inventory
-> user can use selected assets in AI story/image/video generation later
```

Future Web3 flow:

```text
Primary account exists first
-> user optionally links Web3 wallet
-> wallet becomes an identity/ownership extension
-> selected rare/premium/limited assets may later support blockchain minting
```

## Anti-Abuse Rules

If every user receives 10M Genesis Points, abuse prevention is important.

Possible abuse risk:

```text
Users can create many accounts to farm points and assets.
```

Recommended protection:

- one Genesis Grant per verified user
- email verification before point grant
- rate limit registration and reward claims
- CAPTCHA or bot protection for signup
- optional phone verification for high-value rewards later
- no wallet-only reward farming in MVP
- no free point transfer between users
- no cash conversion
- no withdrawal
- no marketplace resale for starter assets

## Firebase vs Supabase Recommendation

For this account economy, Supabase is the recommended starting platform.

Reason:

```text
ChornPlanet asset inventory requires relational data:
users, assets, user_assets, point_accounts, point_ledger, orders, asset_prices, wallets, reward_rules.
```

Supabase is a better fit because it uses PostgreSQL and supports relational modeling, SQL joins, views, constraints, and row-level security.

Firebase can work, but Firestore's NoSQL model may require more careful document design for ledger, inventory, and purchase history.

Recommended stack:

```text
MVP: Supabase Auth + PostgreSQL + Row Level Security
Later: Optional Web3 wallet link
Future: Blockchain minting only for selected rare / premium / limited assets
```

## Recommended Account Model

Example user profile:

```json
{
  "userId": "user_001",
  "level": "primary",
  "accountType": "free",
  "walletAddress": null,
  "balances": {
    "genesisPoints": 10000000,
    "chornCredits": 0,
    "premiumGems": 0
  },
  "inventory": [],
  "createdAt": "2026-05-29T00:00:00.000Z"
}
```

After wallet linking:

```json
{
  "wallet": {
    "chain": "ethereum",
    "address": "0x...",
    "verifiedAt": "2026-05-29T00:00:00.000Z"
  }
}
```

## Recommended Supabase Tables

```text
users_profile
assets
user_assets
wallets
point_accounts
point_ledger
asset_orders
asset_prices
membership_levels
reward_rules
```

## Point Ledger Requirement

Do not store only a simple balance.

Every point movement should be stored in a ledger.

Example ledger row:

```json
{
  "userId": "user_001",
  "currency": "GENESIS_POINTS",
  "amount": -50000,
  "reason": "BUY_ASSET",
  "assetId": "outfit_001",
  "createdAt": "2026-05-29T00:00:00.000Z"
}
```

This allows ChornPlanet to answer:

```text
Where did my points go?
How did I receive this reward?
Which asset did I buy?
Was this a campaign reward or purchase?
```

## MVP Scope

Start with:

```text
1. Supabase Auth
2. Free Primary account
3. 10M Genesis Points
4. Asset Store
5. User Inventory
6. Point Ledger
7. Starter Asset Collection
8. Premium assets visible but locked
```

Do not start with:

```text
NFT
blockchain minting
transferable tokens
cash-value points
open marketplace trading
wallet-only registration
```

## Recommended Asset Store Structure

```text
ChornPlanet Asset Store
├── Starter Collection
├── Character
├── Outfit
├── Scene
├── MTS Pass
├── Food Coupon
├── Badge
└── Premium Collection
```

## Recommended First User Promise

```text
Register free.
Receive 10M Genesis Points.
Build your first ChornPlanet identity.
Collect characters, outfits, scenes, and badges.
Use your assets in AI stories and future ChornPlanet experiences.
```

## Implementation Phases

### Phase 1: Account Economy Foundation

- Choose Supabase as the preferred MVP backend for account economy.
- Add user profile model.
- Add membership level model.
- Add point account model.
- Add point ledger model.
- Define initial Genesis Grant rule.

### Phase 2: Starter Point Grant

- On verified registration, grant 10M Genesis Points.
- Record the grant in `point_ledger`.
- Prevent duplicate grant for the same user.
- Add admin visibility for grant records.

### Phase 3: Asset Store MVP

- Create starter asset collection.
- Create price table.
- Allow purchase using Genesis Points.
- Deduct point balance using ledger transaction.
- Add purchased assets to `user_assets`.

### Phase 4: My ChornPlanet Inventory

- Show owned assets.
- Show equipped/selected assets.
- Filter by asset type and rarity.
- Show starter, locked, premium, and limited states.

### Phase 5: Future Paid Level

- Add Premium user level.
- Add Premium Gems or paid credits.
- Add premium-only assets.
- Add subscription or one-time purchase later.

### Phase 6: Future Web3 Account Link

- Allow users to link a wallet after normal account registration.
- Treat wallet as optional identity extension.
- Do not use wallet-only registration for free reward farming.
- Consider minting only rare/premium/limited assets later.

## Open Questions

- Should the first account system use Supabase immediately, or should ChornPlanet keep MongoDB for content and add Supabase only for auth/economy?
- Should the initial Genesis Points amount be exactly 10M, or should it be adjusted after pricing design?
- Should users receive starter assets automatically in addition to points?
- Should starter assets be non-transferable forever?
- Should Premium Gems be subscription-based, one-time purchase, or campaign reward first?
- Should wallet linking support Ethereum first, Solana first, or both later?

## Recommended Decision

Start with:

```text
Supabase Auth + Primary account + 10M Genesis Points + starter Asset Store + User Inventory + point ledger.
```

Delay until later:

```text
Web3 wallet linking, NFT minting, marketplace trading, cash-value mechanics, and transferable assets.
```

This gives ChornPlanet a fun and generous user entry experience while keeping the economy safe, understandable, and expandable.
