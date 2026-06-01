# ContentTranslation.md

## 1. Purpose

This procedure defines the ChornPlanet standard for content generation, rewriting, translation, localization, and multilingual review.

The default writing style is **clear public communication with executive-grade discipline**.

For both **English and Thai**, ChornPlanet content must read as if it is written or approved by a **CEO, CTO, Director of Information System Development, Head of Engineering, or Chief Architect**.

The content must be clear, structured, credible, operationally accurate, and suitable for public business and technology communication.

---

## 2. Scope

This procedure applies to:

- Public website pages
- Landing pages
- Product and service pages
- Smart Food pages
- Smart city, mobility, MTS, and infrastructure pages
- Platform and system capability pages
- AI-generated or conceptual content disclosures
- Terms of Service and Privacy Policy content
- Static JSON content
- MongoDB-backed content
- Metadata, page titles, descriptions, captions, image alt text, and UX labels
- Executive summaries and business-facing platform descriptions

---

## 3. Core Standard

All generated, rewritten, or translated content must be:

- Easy to read
- Easy to understand
- Polite and respectful
- Accurate to the approved product or service status
- Safe for all supported locales and cultures
- Professional enough for public publication
- Implementation-ready for reusable web components and database-backed content services
- Clear enough for general users and strong enough for executive review

Avoid:

- Casual wording in official content
- Unsupported claims
- Future guarantees
- Over-promotional wording
- Confusing technical language
- Literal translation that sounds unnatural in the target language
- Vague executive wording that does not explain real capability, status, scope, or value

---

## 4. Executive-Grade EN and TH Writing

English and Thai are the primary authority languages for ChornPlanet communication.

Executive-grade writing means the content must explain:

1. Purpose
2. Scope
3. Capability
4. Operating model
5. Current status
6. User or business value
7. Governance, reliability, or system clarity where relevant

The writing must be strategic, structured, credible, and readable. It must not become too complex, too casual, too technical, or too promotional.

---

## 5. English Executive Writing Standard

English content must be clear, globally readable, and suitable for business, technology, platform, and system communication.

English writing should be:

- Clear
- Strategic
- Concise
- Credible
- Operationally grounded
- Internationally understandable
- Professional without sounding inflated

Prefer:

- “designed to support”
- “connects”
- “helps structure”
- “provides visibility”
- “coordinates”
- “enables”
- “supports”

Avoid hype-driven wording such as “ultimate,” “revolutionary,” “world-changing,” or “guaranteed” unless explicitly approved and supported.

Example:

```text
ChornPlanet is an AI-native platform designed to connect content, services, and digital operating workflows. It focuses on practical AI adoption across food, lifestyle, commerce, and connected environments, while keeping product status, service scope, and user-facing communication clear.
```

---

## 6. Thai Executive Writing Standard

Thai content must be natural, professional, and suitable for official ChornPlanet communication.

Thai writing should be:

- สุภาพ
- ชัดเจน
- เป็นระบบ
- น่าเชื่อถือ
- มีมุมมองเชิงกลยุทธ์
- สะท้อนความเข้าใจด้านระบบและการดำเนินงาน
- เหมาะสำหรับการสื่อสารของผู้บริหาร เทคโนโลยี แพลตฟอร์ม และองค์กร
- อ่านเข้าใจได้สำหรับผู้ใช้งานทั่วไป

Prefer Thai wording that explains purpose, capability, operating model, business value, system reliability, and governance.

Use professional Thai wording such as:

- สามารถ
- ออกแบบมาเพื่อ
- สนับสนุน
- เชื่อมโยง
- บริหารจัดการ
- สอดคล้องกับ
- ภายใต้ขอบเขต
- ในบริบทของ
- เชิงระบบ
- ความต่อเนื่องในการดำเนินงาน

Avoid casual official-content wording such as:

- นะคะ
- เลยค่ะ
- จ้า
- เก่งมาก
- สุดล้ำ
- เปลี่ยนโลก
- ทำทุกอย่างอัตโนมัติ

Example:

```text
ChornPlanet เป็นแพลตฟอร์ม AI-native ที่พัฒนาเพื่อเชื่อมโยงคอนเทนต์ บริการ และระบบปฏิบัติการดิจิทัลเข้าด้วยกัน โดยมุ่งเน้นการนำ AI มาใช้สนับสนุนการทำงานจริงในบริบทของธุรกิจ อาหาร ไลฟ์สไตล์ และสภาพแวดล้อมเมืองแห่งอนาคต
```

---

## 7. Product and Service Truth

Content must preserve the factual status approved by the Chief Architect.

Do not imply that a product, service, system, AI feature, commerce flow, or automation is live, production-ready, fully automated, guaranteed, available worldwide, officially partnered, certified, or superior to competitors unless this is explicitly approved or clearly present in the source content.

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

## 8. Tone Modes by Content Type

### 8.1 Public Website Mode

Use clear, warm, trustworthy, and executive-ready wording when the content represents ChornPlanet as a platform, system, or business direction.

### 8.2 UX/UI Microcopy Mode

Use short, direct, friendly, and unambiguous wording. Do not force formal executive language into small buttons or labels.

### 8.3 Policy / Privacy / Terms Mode

Use clear, conservative, careful, and non-marketing wording.

### 8.4 Investor / Partner / Infrastructure Mode

Use formal, neutral, governance-aware, evidence-based, and system-oriented wording.

### 8.5 Commerce / Product Story Mode

Use helpful, descriptive, trustworthy, and purchase-supportive wording without pressure.

### 8.6 Platform / System Capability Mode

Use executive-level, system-oriented, operationally clear, governance-aware, and business-value-aware wording.

For ERP, MES, Logic Controller, Physical Layer, AI-native platform, AI POS, AI Smart Food, MongoDB-backed content, system architecture, operational workflows, and integration pages:

- Explain the capability in practical operating terms.
- Separate current capability, planned capability, and conceptual direction.
- Avoid making architecture sound fully implemented when it is only a target design.
- Connect technical capability to data flow, service flow, operational visibility, control, reliability, or user experience.

---

## 9. Output Format Rules

Translations must be returned in the **identical structure and format** as the source content.

Mandatory requirements:

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

Do not:

- Add new keys during translation
- Remove fields during translation
- Reorder content blocks during translation
- Embed translator commentary inside JSON or implementation output
- Change image paths, anchors, IDs, route values, or implementation values unless explicitly requested
- Translate brand names, product names, file paths, route paths, or code identifiers unless explicitly required

---

## 10. Web Content Generation and Translation Workflow

### Stage 1 — Generate First Web Content Based on EN

Generate initial EN content with clear structure, neutral product positioning, and executive-grade English where needed.

### Stage 2 — Codex Develops UX/UI Based on EN

Codex implements or updates reusable UX/UI while preserving content shape and locale separation.

### Stage 3 — ChatGPT Translates EN to TH

Translate EN into TH using natural, professional, executive-grade Thai while preserving structure and product meaning.

### Stage 4 — Chief Architect Reviews and Refines TH

Khachornchit, as Chief Architect, reviews and refines the TH version. The refined TH becomes the product meaning authority when it clarifies business status, service status, system capability, operating model, or strategic positioning.

### Stage 5 — ChatGPT Regenerates EN Based on Refined TH

Regenerate EN from the approved TH meaning using natural executive-grade English.

### Stage 6 — ChatGPT Generates All Languages Based on Regenerated EN

Generate DA, DE, FI, FR, JA, KO, NL, and ZH_CN from the regenerated EN while preserving approved meaning, structure, and locale safety.

### Stage 7 — Codex Implements All Language Logic

Wire all language files or content records into the page loader with safe locale fallback behavior.

### Stage 8 — Codex Migrates Hardcoded Translation to MongoDB

When ready, migrate hardcoded translation into MongoDB based on the existing ChornPlanet structure.

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

---

## 11. Operational Translation Workflow Standard

### 11.1 EN as Initial Generation Source

EN functions as the first generation source for web content and UX/UI development. The initial EN version must follow executive-grade English when the content represents platform direction, system capability, business positioning, or public ChornPlanet communication.

### 11.2 TH as Chief Architect Review Authority

After Chief Architect review, the refined TH version becomes the authority for corrected product meaning, business positioning, system capability, and executive-level Thai communication quality.

If TH corrects the product status, business truth, system meaning, or strategic positioning, ChatGPT must regenerate EN from TH before generating all other languages.

### 11.3 Regenerated EN as Multilingual Source

The regenerated EN version becomes the source for DA, DE, FI, FR, JA, KO, NL, and ZH_CN.

This ensures all languages follow the Chief Architect-approved TH meaning while preserving international readability and executive-grade clarity where relevant.

---

## 12. Summary Quality Checklist

Every translated and generated output must satisfy:

- Easy to read in the target language
- Natural and neutral in the target language
- Polite and respectful
- No unsupported marketing claims
- No future guarantee language
- No user pressure or manipulative wording
- Product/service status aligned with Chief Architect review
- Privacy-minimal assumptions preserved when privacy is involved
- AI disclosure included only when relevant
- No expansion of scope beyond original content
- Same format and implementation structure as the source
- English output follows CEO / CTO / Director of Information System Development-level professional wording when the content is official, platform-related, system-related, business-facing, or public-facing
- Thai output follows CEO / CTO / Director of Information System Development-level professional wording when the content is official, platform-related, system-related, business-facing, or public-facing
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

1. Review and refine EN using executive-grade English where relevant
2. Provide TH version using executive-grade Thai where relevant
3. Wait for the next instruction group only when the user explicitly requests staged translation

When the user asks to write, rewrite, improve, translate, or localize Thai or English content for ChornPlanet:

1. Preserve approved product meaning and factual status
2. Apply the correct tone mode by content type
3. Use executive-grade EN/TH communication when the content is official, platform-related, system-related, public-facing, business-facing, or stakeholder-facing
4. Avoid hype, unsupported claims, and vague executive wording
5. Preserve implementation structure when content is JSON, code-adjacent, route-based, or component-bound

---
