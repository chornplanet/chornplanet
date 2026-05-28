# ContentTranslation.md

## 1. Purpose

This document defines the ChornPlanet standard for website content generation, translation, localization, and multilingual review.

All ChornPlanet public content must be:

- Easy to read
- Easy to understand
- Suitable for general users
- Polite and respectful
- Safe for all supported locales and cultures
- Accurate to the approved product or service status
- Implementation-ready for reusable web components and database-backed content services

The default writing style is **clear public communication**.

When content is legal, privacy, policy, investor-facing, government-facing, infrastructure-facing, or AI-disclosure related, the tone must become more conservative and formal while still remaining readable for general users.

This standard prevents:

- slang or rude language
- culturally sensitive wording
- discriminatory wording
- over-promotional wording
- unsupported claims
- future guarantees
- confusing technical language
- literal translations that sound unnatural or unsafe in the target language

---

## 2. Scope

This standard applies to all ChornPlanet generated and translated content, including but not limited to:

- Public website pages
- Landing pages
- Product and service pages
- Smart Food and commerce/service platform pages
- Smart city, mobility, MTS, infrastructure, and system explanation pages
- ChornPlanet world, zone, outfit, clothing, civilization, and luxury pages
- AI-generated or conceptual content disclosures
- Terms of Service
- Privacy Policy
- Investor-facing pages
- Government or policy-oriented content
- Static JSON content
- MongoDB-backed content
- Reusable page components
- Server content loaders
- Metadata, page titles, descriptions, captions, image alt text, and UX labels

This standard applies to both static and dynamically generated content.

---

## 3. Target Languages & Review Sequence

Translations must be reviewed **language-by-language**, not treated as unvalidated bulk translation.

### Required Language Set

1. EN
2. TH
3. DA
4. DE
5. FI
6. FR
7. JA
8. KO
9. NL
10. ZH_CN

Each language must preserve the same product meaning while adapting naturally to its own cultural and language norms.

Literal equivalence is secondary to:

- User understanding
- Cultural safety
- Legal and policy safety
- Product accuracy
- Natural readability

---

## 4. Core Translation Principles

### 4.1 General User Plain-Language Default

The default ChornPlanet language style must be clear enough for general users.

All generated or translated content should:

- Use short, clear sentences where possible
- Prefer common words over complex words
- Explain technical ideas in simple terms when the page is public-facing
- Avoid unnecessary jargon
- Avoid overly academic, legalistic, or bureaucratic wording unless the content type requires it
- Avoid local slang, internet slang, and informal speech that may not translate well
- Avoid aggressive, dramatic, or emotionally exaggerated wording
- Avoid language that makes the user feel pressured, judged, excluded, or confused

The goal is:

```text
Clear enough for general users.
Professional enough for public publication.
Safe enough for every supported locale.
Accurate enough for product and service truth.
```

---

### 4.2 Polite, Respectful, and Family-Safe Language

All content must be suitable for public website publication across different cultures.

Do not use:

- Rude words
- Profanity
- Sexualized wording
- Insults
- Shaming language
- Mocking tone
- Degrading words
- Violent or threatening language
- Political attack language
- Religious disrespect
- Ethnic, national, gender, age, disability, or class stereotypes
- Words that may create unnecessary fear, panic, or social conflict

If source wording is too strong, soften it into neutral and respectful language.

Examples:

| Avoid | Prefer |
| --- | --- |
| This system destroys the old model. | This system provides a different operating model. |
| The best solution for everyone. | A solution designed to support this use case. |
| Users will definitely gain more sales. | Users may use the system to support sales workflows. |
| Everyone must use this. | The service is available for users who need this workflow. |

---

### 4.3 Cultural and Locale Safety

Each locale must sound natural and culturally appropriate.

Translations must avoid:

- Culture-specific jokes or idioms
- Wordplay that does not translate well
- Local stereotypes
- Sensitive historical or political references unless explicitly required and approved
- Religious or national symbols used casually or commercially without purpose
- Overly direct wording that may sound rude in high-context cultures
- Overly casual wording that may sound unprofessional in formal cultures
- Overly formal wording that may sound cold or confusing in public UX content

Adaptation is required when literal translation creates cultural risk.

Examples:

- JA and KO should avoid overly forceful claims or direct commands in public content.
- DE and FR should prioritize precision, legal clarity, and clear data or service status.
- DA, FI, and NL should remain simple, practical, and not exaggerated.
- ZH_CN should avoid politically sensitive or culturally ambiguous wording unless the source content explicitly requires it and the meaning is safe.
- TH should be natural, polite, easy to read, and accurate to the Chief Architect-approved business meaning.

---

### 4.4 Product and Service Truth

Translations must preserve the factual status approved by the Chief Architect.

Do not imply that a product, service, system, AI feature, commerce flow, or automation is:

- live
- production-ready
- fully automated
- guaranteed
- available worldwide
- officially partnered
- government-approved
- investor-ready
- legally certified
- superior to competitors

unless this is explicitly approved or clearly present in the source content.

When status is uncertain, use safe wording such as:

- planned
- under development
- designed to support
- intended to help
- currently used for
- available for selected use cases
- operating in a limited scope
- part of a future direction

---

### 4.5 Non-Promotional and Non-Speculative Discipline

ChornPlanet content may describe systems, services, concepts, workflows, design methods, and operations.

It must not overpromise outcomes.

Avoid wording that implies:

- guaranteed success
- guaranteed revenue
- guaranteed growth
- guaranteed ranking
- guaranteed search traffic
- guaranteed AI performance
- certain future social, environmental, or economic outcomes
- universal suitability for all users
- superiority without evidence

Prefer descriptive wording:

| Avoid | Prefer |
| --- | --- |
| This will transform the future of cities. | This describes a framework for future city planning. |
| The most advanced AI food system. | An AI-assisted food ordering and recommendation system. |
| Guaranteed to increase traffic. | Designed to support traffic growth through structured content. |
| The ultimate platform. | A platform that combines content, services, and system workflows. |

---

### 4.6 Technical Clarity for General Users

When explaining technical topics, use a layered style:

1. Start with a simple explanation.
2. Add operational detail only when useful.
3. Keep implementation detail separate from user-facing benefit.
4. Avoid unnecessary acronyms unless explained.

Example:

```text
MongoDB stores content records so the website can load pages dynamically. This helps ChornPlanet manage many localized pages without hardcoding every page manually.
```

Do not write public content as if it is only for engineers unless the target page is technical documentation.

---

## 5. Tone Modes by Content Type

Use the correct tone mode for each content type.

### 5.1 Public Website / General User Mode

Use for landing pages, platform pages, product pages, story pages, Smart Food pages, style pages, world pages, mobility pages, and most user-facing content.

Tone:

- Clear
- Warm but not casual
- Helpful
- Polite
- Natural
- Trustworthy
- Not exaggerated

### 5.2 UX/UI Microcopy Mode

Use for buttons, labels, cards, forms, empty states, error states, and navigation.

Tone:

- Short
- Direct
- Friendly
- Unambiguous
- Action-oriented without pressure

Rules:

- Do not use long sentences.
- Do not add legal or marketing wording inside buttons.
- Avoid confusing verbs.
- Keep meaning consistent across locales.

### 5.3 Policy / Privacy / Terms Mode

Use for Terms of Service, Privacy Policy, consent, rights, legal notices, and data processing explanations.

Tone:

- Clear
- Conservative
- Legally careful
- Easy to understand
- No marketing language

Rules:

- Preserve data minimization and purpose limitation.
- Do not expand data processing scope during translation.
- Do not imply automated decision-making unless it is factually implemented.
- Avoid vague legal wording when clearer wording is possible.

### 5.4 Investor / Government / Infrastructure Mode

Use only when the page or document is clearly intended for investor, government, policy, or infrastructure review.

Tone:

- Formal
- Neutral
- Governance-aware
- Evidence-based
- No exaggeration

This mode should still be readable by general users where possible.

### 5.5 Media / Digest / News Follow-Up Mode

Use for news, entertainment, technology follow-up, daily digest, and factual content.

Tone:

- Neutral
- Source-aware
- Copyright-safe
- Non-sensational
- Clear about facts versus analysis

Rules:

- Do not copy full articles.
- Do not overstate claims from sources.
- Do not use clickbait.
- Do not use shocking or fear-based framing.
- Include source tracking when required.

### 5.6 Commerce / Product Story Mode

Use for product stories, TikTok-first product links, Smart Food commerce, outfit, clothing, and service pages.

Tone:

- Helpful
- Descriptive
- Trustworthy
- Purchase-supportive but not pushy

Rules:

- Avoid false scarcity.
- Avoid guaranteed results.
- Avoid unsupported superiority claims.
- Avoid pressuring the user.
- Product availability, pricing, and delivery status must be accurate when stated.

---

## 6. Output Format Rules

Translations must be returned in the **identical structure and format** as the source content.

### Mandatory Requirements

- Same object structure
- Same keys
- Same nesting
- Same ordering
- Same route values
- Same image paths
- Same href values
- Same IDs
- Same variants
- Same implementation values unless the task explicitly requires a change
- Only user-facing text values may be adjusted during translation

### Prohibited

- Adding new keys during translation
- Removing fields during translation
- Reordering content blocks during translation
- Embedding translator commentary inside JSON or implementation output
- Changing image paths, anchors, IDs, route values, or implementation values unless explicitly requested
- Translating brand names, product names, file paths, route paths, or code identifiers unless explicitly required

If clarification or explanation is necessary, provide it **outside** the translated structure.

---

## 7. Web Content Generation and Translation Workflow

This workflow governs feature pages and public ChornPlanet web content.

### Stage 1 — Generate First Web Content Based on EN

ChatGPT generates the first canonical web content in EN.

EN is used at this stage to define:

- Page purpose
- Section structure
- UX copy direction
- Component content blocks
- Initial JSON shape or content schema
- Clear general-user wording
- Neutral product/service positioning

The initial EN content must be implementation-ready but remains a draft until Chief Architect review is completed.

---

### Stage 2 — Codex Develops New UX/UI Based on EN

Codex implements or updates the UX/UI using the EN content as the first working source.

Codex should:

- Build reusable page components
- Preserve content shape and keys
- Avoid embedding new hardcoded arrays directly into page files unless temporary and documented
- Keep UI layout decoupled from locale-specific content
- Ensure the page can later consume localized JSON or MongoDB-backed content

---

### Stage 3 — ChatGPT Translates EN to TH

ChatGPT translates the EN source into TH while preserving:

- Same JSON structure
- Same keys
- Same ordering
- Same routes, anchors, image paths, and implementation values
- Natural Thai readability
- Polite and general-user-friendly Thai wording
- Product meaning accuracy

TH must not be a literal translation if literal translation weakens product accuracy, user understanding, or cultural clarity.

---

### Stage 4 — Chief Architect Reviews and Refines TH

Khachornchit, as Chief Architect, reviews and refines the TH version.

The refined TH version becomes the **product meaning authority** for the feature when it clarifies product truth, business status, service status, or strategic positioning.

Examples of Chief Architect corrections include:

- Replacing “showcase” wording with “serves customers in Chiang Mai” when the service is active
- Clarifying whether a feature is operating, planned, under development, or future direction
- Correcting product names such as TrueMoney Wallet, Menu Match, LINE OA, or local program names
- Removing wording that sounds like recruitment, CEO targeting, investor marketing, unsupported sales positioning, or overclaiming
- Adjusting tone so Thai content sounds natural, polite, and clear for general users

---

### Stage 5 — ChatGPT Regenerates EN Based on Refined TH

After Chief Architect review, ChatGPT regenerates EN from the refined TH version.

This regenerated EN becomes the **canonical multilingual source** for all non-Thai translations.

The regenerated EN must:

- Preserve the corrected TH meaning
- Use natural plain English
- Avoid over-promotional phrasing
- Reflect real service status accurately
- Preserve JSON structure exactly
- Be suitable for general users and international localization

---

### Stage 6 — ChatGPT Generates All Languages Based on Regenerated EN

ChatGPT generates the remaining language versions from the regenerated EN.

Required output languages:

- DA
- DE
- FI
- FR
- JA
- KO
- NL
- ZH_CN

Each language must preserve:

- Same object structure
- Same keys and nesting
- Same ordering
- Same implementation values
- Same product meaning approved through TH review and regenerated EN
- Natural readability in the target language
- Cultural and public-facing safety

Each language must be reviewed independently for cultural, legal, policy, and user-readability safety.

---

### Stage 7 — Codex Implements All Language Logic

Codex implements the localized content logic for the page.

Codex should:

- Wire all language files or content records into the page loader
- Ensure locale fallback behavior: requested locale → EN → static fallback if available
- Avoid page crashes when a non-English locale is missing or incomplete
- Preserve route and anchor behavior across locales
- Keep content rendering reusable and schema-safe
- Add or update tests only when routing, loader, schema, or rendering logic changes

---

### Stage 8 — Codex Migrates Hardcoded Translation to MongoDB

When the feature is ready for database-backed content, Codex migrates hardcoded translation into MongoDB based on the existing ChornPlanet structure.

Codex should add or update:

- `lib` content schema or repository logic
- Server-side content loader/service logic
- MongoDB repository access based on existing patterns
- Locale fallback logic
- Seed/migration scripts when needed
- Audit logic when locale completeness must be checked

Target architecture:

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

Hardcoded JSON may remain only as:

- Temporary static fallback
- Seed data
- Development fixture
- Explicitly documented migration bridge

---

## 8. Terms of Service Translation Rules

### 8.1 Tone Requirements

ToS translations must remain:

- Legally conservative
- Clear for general users
- Policy-safe
- Public-facing
- Government-review compatible when needed

Language must be accurate and careful, but not unnecessarily difficult.

---

### 8.2 Quote Inclusion Rule

The following quote may be embedded only when legally appropriate and not framed as marketing:

> “Chorn Digital is not selling a future. He is showing that he understands how futures are designed, evaluated, and governed.”

The quote must:

- Be presented as contextual philosophy, not promotional messaging
- Not appear as branding emphasis
- Not create forward-looking interpretation risk
- Not replace clear legal or policy explanation

---

### 8.3 Prohibited Language

Avoid wording that implies:

- Guarantees
- Promises
- Service-level commitments beyond explicit contractual terms
- Product superiority claims
- Forward-looking certainty
- Marketing tone
- User blame or unfair limitation

---

## 9. Privacy Policy Translation Rules

### 9.1 Privacy-Minimal Default Standard

All translations must assume:

- No personal data collection unless strictly necessary and stated
- Clear purpose limitation
- Clear disclosure of data categories
- Explicit consent where legally required
- Clear user rights language where required

No inferred or implied processing expansion is permitted.

---

### 9.2 GDPR & Strict EU Alignment

Privacy translations must align with strict privacy principles, including:

- Data minimization
- Lawful basis clarity
- Transparent retention logic
- Clear data subject rights language
- Clear contact or request process when present in the source
- No vague processing statements

---

### 9.3 AI / Conceptual Content Disclosure Rule

If AI-generated or conceptual content is referenced, the translation must:

- Clearly state that content may be AI-generated and/or conceptual when relevant
- Avoid expanding the implied scope of data processing
- Avoid profiling assumptions
- Avoid behavioral tracking implications unless explicitly accurate
- Avoid implying automated decision-making unless factually implemented

Disclosure must remain factual, limited, and understandable.

---

## 10. Forbidden and Sensitive Language Guide

This section guides wording safety for all locales.

### 10.1 Always Avoid

Avoid:

- Profanity
- Sexualized wording
- Hate, harassment, or demeaning language
- Stereotypes about nationality, ethnicity, gender, religion, age, disability, social class, or occupation
- Shaming language
- Mocking tone
- Threatening or violent language
- Political persuasion or attack language
- Religious disrespect
- Exaggerated fear-based language
- Unsupported health, financial, legal, or safety claims
- Misleading urgency or scarcity
- Overconfident AI claims

### 10.2 Use Safer Replacements

| Risky style | Safer style |
| --- | --- |
| aggressive | clear and direct |
| sales pressure | helpful guidance |
| dramatic | factual |
| absolute | conditional or descriptive |
| slang | standard language |
| culturally narrow | internationally understandable |
| technical-only | explained in plain language |

### 10.3 Brand and Product Names

Do not translate or alter brand names unless an approved local name exists.

Examples:

- ChornPlanet
- Chorn Digital
- Smart Food
- Menu Match
- LINE OA
- TrueMoney Wallet
- TikTok
- Shopee
- Lazada
- Amazon
- MongoDB Atlas
- Next.js

---

## 11. Operational Translation Workflow Standard

### 11.1 EN as Initial Generation Source

EN functions as the first generation source for web content and UX/UI development.

The first EN version is not always the final semantic authority. It is a working source for structure, UX, and initial implementation.

---

### 11.2 TH as Chief Architect Review Authority

After Chief Architect review, the refined TH version becomes the authority for corrected product meaning and business positioning.

If TH corrects the product status or business truth, ChatGPT must regenerate EN from TH before generating all other languages.

---

### 11.3 Regenerated EN as Multilingual Source

The regenerated EN version becomes the source for DA, DE, FI, FR, JA, KO, NL, and ZH_CN.

This ensures all languages follow the Chief Architect-approved TH meaning while preserving international readability.

---

### 11.4 Locale-Specific Conservative Adaptation

Each language version must be reviewed under its local norms.

If literal translation introduces cultural, legal, or user-understanding risk, adaptation is mandatory.

Safe adaptation > literal accuracy.

---

### 11.5 Acceptable Output Standard

Every translated version must be acceptable for:

- Public website publication
- General user readability
- Cross-cultural publication
- Policy and privacy review where relevant
- Investor or government stakeholder review where relevant
- Production implementation in ChornPlanet web pages

---

## 12. Summary Quality Checklist

Every translated and generated output must satisfy:

- Easy to read in the target language
- Natural and neutral in the target language
- Polite and respectful
- Free from profanity, rude wording, hate, stereotypes, and culturally unsafe phrasing
- Free from idioms and rhetorical exaggeration unless clearly safe and useful
- No unsupported marketing claims
- No future guarantee language
- No user pressure or manipulative wording
- Product/service status aligned with Chief Architect review
- Privacy-minimal assumptions preserved when privacy is involved
- AI disclosure included only when relevant
- No expansion of scope beyond original content
- Same format and implementation structure as the source
- Ready for locale rendering or MongoDB migration

Failure on any checkpoint requires revision.

---

## 13. Activation Phrase

When the user says:

**“Start web content generation and translation workflow”**

Process sequence:

1. Generate first web content based on EN
2. Codex develops UX/UI based on EN
3. ChatGPT translates EN to TH
4. Chief Architect reviews and refines TH
5. ChatGPT regenerates EN based on refined TH
6. ChatGPT generates all required languages based on regenerated EN
7. Codex implements all language logic
8. Codex migrates hardcoded translation to MongoDB by adding or updating `lib` and server logic based on the existing structure

When the user says:

**“Start review with EN”**

Legacy process sequence:

1. Review and refine EN
2. Provide TH version
3. Wait for the next instruction group only when the user explicitly requests staged translation

---
