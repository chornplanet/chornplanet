# SYSTEM_MAP.md — Chorn AI System Architecture (v1.3)

---

# PURPOSE

This file defines the high-level system map of ChornPlanet AI.

It aligns:

* Human (Chorn)
* ChatGPT (architecture)
* Codex (execution)

Detailed repository structure belongs in:

```text
.codex/Structure.md
```

Codex behavior rules belong in:

```text
.codex/AGENTS.md
```

---

# SYSTEM IDENTITY

ChornPlanet is:

> Civilization Framework + AI Production Platform

This is NOT a normal codebase.

This is a:

* contract-driven system
* multi-engine orchestration platform
* content production pipeline

---

# SYSTEM LAYERS

## 1. Governance Layer

Source of truth:

```text
.chatgpt/System/ChornPlanet.md
```

Defines:

* world vision
* production distribution (80/5/5/5/5)
* content rules
* system direction

---

## 2. Router Layer

```text
AIEngineRouter
```

Responsibilities:

* detect user intent
* select engines
* enforce contracts
* package output

---

## 3. Engine Layer

### AISceneEngine

* environment selection
* world compatibility
* scene composition
* scene diversity
* anti-repetition

---

### AIEpisodeEngine

* narrative structure
* story flow
* emotional pacing

---

### AICharacterEngine

* character identity
* face lock
* outfit consistency
* hero readability

---

## 4. Contract Layer

```text
.chatgpt/Contract/
```

Includes:

* ImagePrompt.md
* VdoPrompt.md
* StoryMomentumEngine.md
* StoryCommerceEngine.md

---

### Important

Contracts are:

> EXECUTION RULES (NOT DOCUMENTATION)

They define:

* output structure
* protected prompt order
* aspect ratio rules
* cinematic quality
* platform readiness

---

## 5. Codex Layer

```text
.codex/
```

Includes:

* AGENTS.md → behavior rules
* Structure.md → system structure
* SYSTEM_MAP.md → (this file)

Temporary review files:

```text
.codex/Proposal.md
.codex/Feedback.md
```

Completed proposal / feedback cycles move to:

```text
.history/feature/<feature-name>/
```

ChatGPT execution layer:

```text
.chatgpt/System/
.chatgpt/AI Engine/
.chatgpt/Contract/
.chatgpt/VersionControl.md
```

---

# EXECUTION FLOW

```text
User Input
→ AIEngineRouter
→ AISceneEngine (environment / destination logic when needed)
→ AIEpisodeEngine (story / episode logic when needed)
→ AICharacterEngine (identity / face / outfit logic when needed)
→ Contract Layer (ImagePrompt / VdoPrompt / StoryMomentum / StoryCommerce)
→ Output Packaging
```

---

# RESPONSIBILITY MAP

| Component | Responsibility | Boundary |
| --- | --- | --- |
| ChornPlanet | highest governance | does not write prompt detail |
| VersionControl | active version registry | does not define behavior |
| WorldArchitecture | geography / mobility structure | does not generate prompts |
| AIEngineRouter | orchestration | does not generate content |
| AISceneEngine | environment routing | does not own story or identity |
| AIEpisodeEngine | narrative sequencing | does not own routing or contracts |
| AICharacterEngine | identity / face / outfit | does not own world registry |
| Contract Layer | output enforcement | does not own world authority |
| Codex | safe implementation | waits for Chorn approval on production changes |
| ChatGPT | architecture feedback | feedback is recorded in Feedback.md during review |
| Chorn | vision and decision | approves merge / production evolution |

---

# SYSTEM BEHAVIOR MODEL

## ChatGPT

* designs architecture
* defines upgrades
* aligns system logic

---

## Codex

* reads AGENTS.md
* follows workflow:

  * analyze
  * propose
  * wait for approval
  * apply
  * review
* modifies files safely

---

## Human (Chorn)

* defines direction
* approves changes
* controls system evolution

---

# PRODUCTION PIPELINE

## StoryGenProduct Flow

```text
Input
→ AIEngineRouter
→ AISceneEngine (scene expansion / anti-repetition)
→ AIEpisodeEngine (story sequence / emotional arc)
→ AICharacterEngine (identity / face / outfit lock)
→ ImagePrompt Contract (6 Master Production Prompts)
→ VdoPrompt Contract when video is requested
→ StoryMomentumEngine / StoryCommerceEngine when captions or commerce output are requested
→ Final Package
```

---

# QUALITY STANDARD

All outputs must reach:

* cinematic level
* emotional connection
* luxury editorial quality
* TikTok-ready format

---

# SYSTEM RULES

## 1. CONTRACT FIRST

Contracts override all engines.

---

## 2. ROUTER AUTHORITY

Router controls execution.

---

## 3. NON-DESTRUCTIVE EVOLUTION

System must:

* extend
* not break
* preserve structure

---

## 4. HUMAN CONNECTION PRIORITY

All outputs must:

* show face
* show emotion
* feel real

---

# FUTURE EXPANSION

Planned:

* Campaign Mode (auto high-end output)
* Codex Skills (task-specific behavior)
* System Monitoring Layer
* Automated QA for prompts

---

# FINAL GOAL

Transform system into:

> Global AI Content Production Engine

Output level:

* Global Campaign
* Luxury Brand
* Viral Media

---

# VERSION

```text
v1.0 Initial System Map (ChatGPT Alignment Layer)
v1.1 Align with AGENTS.md and Structure.md
     Replace deprecated monolithic contract reference
     Align execution flow with Router → Scene → Episode → Character → Contracts
     Clarify Proposal / Feedback temporary review workflow
v1.2 Align ChatGPT execution layer with .chatgpt engine and contract paths
v1.3 Move ChatGPT-executable system governance into .chatgpt/System
```

---
