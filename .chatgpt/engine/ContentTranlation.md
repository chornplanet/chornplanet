# ContentTranslation.md

## 1. Purpose

To ensure all Chorn website and policy-facing content generation and translations are:

- Semantically accurate
- Regulation-safe
- Jurisdiction-adaptive
- Investor-grade
- Government-review compatible
- Implementation-ready for reusable web components and database-backed content services

Translations must reflect institutional clarity and governance maturity, suitable for:

- Public communication
- Infrastructure documentation
- Policy stakeholder review
- Investor due diligence
- Product and platform documentation
- Website UX/UI content implementation

This DNA operates under **zero promotional tolerance** and **zero speculative framing discipline**.

---

## 2. Scope

This DNA applies to all translated and generated web/documentation content, including but not limited to:

- Public website pages
- Investor-facing pages
- Government / policy-oriented content
- Terms of Service
- Privacy Policy
- AI-generated / conceptual content disclosures
- Product, system, and infrastructure explanations
- Smart city / preventive infrastructure documentation
- Governance and framework descriptions
- Smart Food and other commerce/service platform pages
- Static JSON content, MongoDB-backed content, reusable page components, and server content loaders

This standard applies to both static and dynamically generated content.

---

## 3. Target Languages & Review Sequence

Translations must be reviewed **language-by-language**, never as unvalidated bulk translation.

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

Each language must undergo independent compliance validation according to its legal, regulatory, and cultural strictness profile.

Literal equivalence is secondary to regulatory safety.

---

## 4. Core Translation Principles

### 4.1 Institutional Neutrality & Natural Readability

All translations must:

- Avoid culture-specific idioms, metaphors, rhetorical devices, or persuasive tone
- Maintain professional, institutional clarity
- Avoid dramatic, visionary, or emotionally charged phrasing
- Avoid visionary or future-promising framing
- Preserve the factual product/service status approved by the Chief Architect

**Goal:**
Government-grade clarity.
Investor-safe neutrality.
Infrastructure-level seriousness.
Real-business service accuracy.

---

### 4.2 Regulatory & Context Compatibility (100% Allowance Rule)

All translated content must be acceptable under the strictest interpretation of:

- Public communication law
- Investor disclosure standards
- Government and infrastructure documentation norms
- EU/Nordic regulatory conservatism
- AI product disclosure expectations where AI functionality is referenced

If wording is not **clearly permissible in all strict contexts**, it must be:

- Rewritten into descriptive, governance-based language, or
- Removed entirely

**No interpretive ambiguity tolerance.**

---

### 4.3 Conservative Filtering Rule (Zero Speculation Discipline)

Remove or neutralize any content that may imply:

- Guaranteed outcomes
- Promises or commitments
- Sales positioning
- Competitive superiority
- Political or ideological positioning
- Certainty about future societal, environmental, or economic outcomes
- Unsupported claims that a system is live, production-ready, investor-ready, or AI-native unless approved by the Chief Architect or reflected in the source content

Statements must remain:

- Descriptive
- Evaluative
- Governance-oriented
- System-based
- Grounded in the approved product/service status

---

### 4.4 Philosophical Alignment (Non-Promotional Doctrine)

All translations must align with Chorn’s core doctrine:

- The content explains systems, frameworks, evaluation logic, service workflows, and design methodology
- The content demonstrates governance awareness
- The content does not promote, sell, or predict futures
- The content may describe real service operations when the Chief Architect confirms that the service is operating

**Key Principle:**
Chorn does not promote futures.
Chorn demonstrates structured understanding of how futures are designed, evaluated, governed, and implemented as real systems.

---

## 5. Output Format Rules (Strict Format Integrity)

Translations must be returned in the **identical structure and format** as the source content.

### Mandatory Requirements

- Same object structure
- Same keys
- Same nesting
- Same ordering
- Same route, image, href, id, and variant values unless implementation requires a change
- Only text values may be adjusted during translation

### Prohibited

- Adding new keys during translation
- Removing fields during translation
- Reordering content blocks during translation
- Embedding translator commentary inside the output
- Changing image paths, anchors, IDs, or route values during translation unless the implementation task explicitly requires it

If clarification or explanation is necessary, it must be provided **outside** the translated structure.

---

## 6. Web Content Generation and Translation Workflow

This workflow governs feature pages such as Smart Food AI and other ChornPlanet public web content.

### Stage 1 — Generate First Web Content Based on EN

ChatGPT generates the first canonical web content in EN.

EN is used at this stage to define:

- Page purpose
- Section structure
- UX copy direction
- Component content blocks
- Initial JSON shape or content schema
- Neutral institutional wording

The initial EN content must be implementation-ready but still treated as a draft until Chief Architect review is completed.

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
- Institutional clarity and natural Thai readability

TH must not be a literal translation if the literal translation weakens product accuracy or cultural clarity.

---

### Stage 4 — Chief Architect Reviews and Refines TH

Khachornchit, as Chief Architect, reviews and refines the TH version.

The refined TH version becomes the **product meaning authority** for the feature when it clarifies product truth, business status, service status, or strategic positioning.

Examples of Chief Architect corrections include:

- Replacing “showcase” wording with “serves customers in Chiang Mai” when the service is active
- Clarifying whether a feature is operating, planned, under development, or future direction
- Correcting product names such as True Money Wallet, Menu Match, LINE OA, or local program names
- Removing wording that sounds like recruitment, CEO targeting, investor marketing, or unsupported sales positioning

---

### Stage 5 — ChatGPT Regenerates EN Based on Refined TH

After Chief Architect review, ChatGPT regenerates EN from the refined TH version.

This regenerated EN becomes the **canonical multilingual source** for all non-Thai translations.

The regenerated EN must:

- Preserve the corrected TH meaning
- Use natural institutional English
- Avoid over-promotional phrasing
- Reflect real service status accurately
- Preserve JSON structure exactly

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

Each language must be reviewed independently for legal, cultural, and regulatory safety.

---

### Stage 7 — Codex Implements All Languages Logic

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

## 7. Terms of Service (ToS) Translation Rules

### 7.1 Tone Requirements

ToS translations must remain:

- Legally conservative
- Policy-grade
- Investor-review compatible
- Government-review compatible

Language must resemble formal infrastructure or institutional documentation.

---

### 7.2 Quote Inclusion Rule (Legally Neutral Context Only)

The following quote must be embedded only when legally appropriate and not framed as marketing:

> “Chorn Digital is not selling a future. He is showing that he understands how futures are designed, evaluated, and governed.”

The quote must:

- Be presented as contextual philosophy, not promotional messaging
- Not appear as branding emphasis
- Not create forward-looking interpretation risk

---

### 7.3 Prohibited Language

Avoid wording that implies:

- Guarantees
- Promises
- Service-level commitments beyond explicit contractual terms
- Product superiority claims
- Forward-looking certainty
- Marketing tone

---

## 8. Privacy Policy Translation Rules

### 8.1 Privacy-Minimal Default Standard

All translations must assume:

- No personal data collection unless strictly necessary
- Clear purpose limitation
- Explicit disclosure of data categories
- Explicit consent where legally required

No inferred or implied processing expansion is permitted.

---

### 8.2 GDPR & Strict EU Alignment

Privacy translations must align with:

- GDPR principles
- Nordic regulatory strictness
- German/French clarity standards

Including:

- Data minimization
- Lawful basis clarity
- Transparent retention logic
- Clear data subject rights language
- No vague processing statements

---

### 8.3 AI / Conceptual Content Disclosure Rule

If AI-generated or conceptual content is referenced, the translation must:

- Clearly state that content may be AI-generated and/or conceptual
- Avoid expanding the implied scope of data processing
- Avoid profiling assumptions
- Avoid behavioral tracking implications unless explicitly accurate
- Avoid implying automated decision-making unless factually implemented

Disclosure must remain factual and limited.

---

## 9. Operational Translation Workflow Standard

### 9.1 EN as Initial Generation Source

EN functions as the first generation source for web content and UX/UI development.

The first EN version is not always the final semantic authority. It is a working source for structure, UX, and initial implementation.

---

### 9.2 TH as Chief Architect Review Authority

After Chief Architect review, the refined TH version becomes the authority for corrected product meaning and business positioning.

If TH corrects the product status or business truth, ChatGPT must regenerate EN from TH before generating all other languages.

---

### 9.3 Regenerated EN as Multilingual Source

The regenerated EN version becomes the source for DA, DE, FI, FR, JA, KO, NL, and ZH_CN.

This ensures all languages follow the Chief Architect-approved TH meaning while preserving international readability.

---

### 9.4 Jurisdiction-Specific Conservative Adaptation

Each language version must be reviewed under its stricter local norms.

If literal translation introduces risk, adaptation is mandatory.

Compliance > Literal accuracy.

---

### 9.5 Acceptable Output Standard

Every translated version must be acceptable for:

- Public website publication
- Investor due diligence
- Government stakeholder review
- Infrastructure and policy documentation archives
- Cross-border legal scrutiny
- Production implementation in ChornPlanet web pages

---

## 10. Summary Compliance Checklist

Every translated and generated output must satisfy:

- Natural and neutral in target language
- Free from idioms and rhetorical exaggeration
- Zero marketing tone
- Zero future guarantee language
- Fully acceptable under strict jurisdictions
- Safe for government and investor review
- Privacy-minimal assumptions preserved
- AI disclosure included only when relevant
- No expansion of scope beyond original content
- Product/service status aligned with Chief Architect review
- Format identical to source structure
- Ready for locale rendering or MongoDB migration

Failure on any checkpoint requires revision.

---

## 11. Activation Phrase (Operational Trigger)

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
