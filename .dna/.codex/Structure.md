# ChornPlanet Project Structure

Purpose:
This file summarizes the current repository structure so Codex, ChatGPT, and future AI agents can understand the project before editing or generating production outputs.

This repository is not a conventional software codebase. It is a Markdown-based, contract-driven AI production system for ChornPlanet.

Core rule:

```text
Treat the project as CONTRACT-DRIVEN, not code-driven.
Read authority files first.
Preserve structure.
Extend before modifying.
Do not simplify contracts.
```

---

# 1. Agent Operating Protocol

Primary agent guidance:

```text
.codex/AGENTS.md
```

This file defines how Codex and other AI coding agents must behave inside ChornPlanet.

Collaboration documents:

```text
.codex/AGENTS.md    -> how Codex behaves
.codex/Structure.md -> what the system looks like
.codex/Proposal.md  -> active evolution proposal while a feature branch is under review
.codex/Feedback.md  -> active ChatGPT review while a feature branch is under review
.chatgpt/           -> ChatGPT-executable AI engines, contracts, and version registry
.history/feature/   -> archived proposal and feedback after merge approval
```

Required behavior:

```text
1. Analyze before editing
2. Propose section-aware changes for contract or engine updates
3. Apply only required changes
4. Review contract integrity after changes
```

Agent mindset:

```text
SYSTEM ARCHITECT MODE
```

Not:

```text
TEXT EDITOR MODE
```

Protected production rules:

```text
Output Structure / 6 prompts
Scene Role Mapping
Character Identity Lock
Aspect Ratio Rule
Contract Integrity Rule
```

---

# 2. System Identity

ChornPlanet is:

```text
Civilization Framework
AI Production Platform
Multi-Engine Orchestrated System
```

The system produces cinematic, TikTok-first, campaign-grade AI outputs across:

```text
story episodes
image prompts
video prompts
character identity
scene routing
commerce storytelling
world and mobility systems
```

Target quality:

```text
Global Campaign
Luxury Editorial
TikTok Viral Ready
Commercially usable output
```

---

# 3. Highest Authority Layer

## 3.1 ChornPlanet Master Framework

```text
.chatgpt/System/ChornPlanet.md
```

Role:

```text
highest governing civilization framework
single source of truth for authoritative systems
```

Governs:

```text
narrative universe
environmental authority
media architecture
commerce expansion
infrastructure integration
AI-human governance
content generation standards
```

Key structure sections:

```text
A Framework Identity
B Dual-Layer Civilization Model
C Planet Civilization Framework
D Environmental Authority System
E Cultural & Aesthetic DNA
F Integrated Media Architecture
G Short-Video Civilization Layer
H Civilization Pillar System
I Commerce Architecture
J StoryGenProduct Interface
K Conditional Output Mode
L Visual Safety Governance
M Production Media Standards
N AI-Human Authority Model
O AI Engine Ecosystem
P Router Governance Layer
Q Output Contract Governance
R Official Production Pipeline
S Active Production Stack
T Governance Design Principle
U World Architecture Alignment
V Deprecated Systems
W Version History
```

Important authority rule:

```text
Any system not referenced by ChornPlanet.md is non-authoritative for production.
```

---

# 4. Version Registry

```text
.chatgpt/VersionControl.md
```

Role:

```text
central version registry for active production stack
```

Current registered stack:

```text
ChornPlanet                     v29.0
WorldArchitecture               v2.0

AIEngineRouter                  v9.0
AIEpisodeEngine                 v12.0
AISceneEngine                   v11.0
AICharacterEngine               v11.0

SceneDesignStandard             v3.0
TourismPlaceSceneDesign         v2.0
ResidenceSceneDesign            v2.0

SceneLibraryIndex               v1.0
Mountain                        v3.0
Coastal                         v5.0

ImagePrompt                     v5.0
VdoPrompt                       v2.1
StoryMomentumEngine             v1.0
StoryCommerceEngine             v2.0
```

Version alignment notes:

```text
No known active version mismatch after the .chatgpt execution-layer migration.
```

These are not edits to make automatically. They are alignment risks to confirm before formal version upgrades.

---

# 5. World Architecture Layer

Primary world authority:

```text
.chatgpt/System/WorldArchitecture.md
```

Role:

```text
planet geography
mobility architecture
spatial hierarchy
world consistency
```

Authority hierarchy:

```text
ChornPlanet.md
↓
WorldArchitecture.md
↓
WorldMap.md
↓
Continents.md
↓
Regions.md
↓
ZoneMasterIndex.md
↓
MTSNetwork.md
↓
MTSLines.md
↓
MTSStations.md
```

World structure:

```text
WorldMap
↓
Continents
↓
Regions
↓
Zones
↓
Scenes
```

Phase-1 world model:

```text
2 continents
7 regions
21 zones
```

Important Phase-1 rule:

```text
If it does not map an existing asset,
do not add it yet.
```

World files:

```text
.chatgpt/System/World/WorldMap.md
.chatgpt/System/World/Continents.md
.chatgpt/System/World/Regions.md
.chatgpt/System/World/ZoneMasterIndex.md
.chatgpt/System/World/MTSNetwork.md
.chatgpt/System/World/MTSLines.md
.chatgpt/System/World/MTSStations.md
.chatgpt/System/World/Zones/*.md
.chatgpt/System/World/Scene/*.md
```

Mobility stack:

```text
MTSNetwork.md  -> mobility infrastructure rules
MTSLines.md    -> rail route topology
MTSStations.md -> official station layer
```

---

# 6. AI Engine Layer

Main ChatGPT-executable engine directory:

```text
.chatgpt/AI Engine/
```

The system is modular. Each active ChatGPT-executable engine owns a specific responsibility and must not overwrite another engine's authority.

## 6.1 AIEngineRouter

```text
.chatgpt/AI Engine/AI Engine Router.md
```

Role:

```text
global orchestration brain
```

Responsible for:

```text
command detection
intent classification
engine routing
mode selection
scene complexity classification
prompt contract routing
visual safety routing
platform selection
aspect ratio selection
output packaging
cross-engine consistency
```

Router does not generate story, characters, scenes, or prompt wording. It decides:

```text
what runs
in what order
under which locks
under which contract set
with which packaging mode
```

Common command mapping:

```text
EpGen            -> AIEpisodeEngine
StoryGen         -> AIEpisodeEngine + AISceneEngine + AICharacterEngine
StoryGenProduct  -> AIEpisodeEngine + AISceneEngine + AICharacterEngine
EpGenKid         -> KidZone
StoryGenKid      -> KidZone
AutoGen          -> AICharacterEngine
AutoScene        -> AISceneEngine
```

Default full route for environment-rich StoryGen / StoryGenProduct:

```text
AISceneEngine
→ AIEpisodeEngine
→ AICharacterEngine
→ ImagePrompt / VdoPrompt / StoryMomentumEngine
```

## 6.2 AISceneEngine

```text
.chatgpt/AI Engine/AI Scene Engine.md
```

Role:

```text
scene routing
environment architecture
destination composition
scene auto expansion
anti-repetition
```

Responsible for:

```text
zone detection
scene library selection
scene role planning
scene primitive selection
viewpoint diversity
destination composition
background activity
motion-safe environment hints
world compatibility
```

AISceneEngine does not write story, character identity, or final prompt format.

Critical rule:

```text
Across a 6-prompt sequence,
no two scenes may resolve into effectively the same environment composition.
```

## 6.3 AIEpisodeEngine

```text
.chatgpt/AI Engine/AI Episode Engine.md
```

Role:

```text
narrative generation engine
```

Responsible for:

```text
episode structure
scene sequencing
hook strategy
dialogue logic
emotional progression
product story role
prompt-compatible narrative generation
```

Default short-form format:

```text
9:16 vertical
approximately 28 seconds
6 scenes

Hook      0-3s
Scene 1   3-8s
Scene 2   8-13s
Scene 3   13-18s
Scene 4   18-23s
Closing   23-28s
```

## 6.4 AICharacterEngine

```text
.chatgpt/AI Engine/AI Character Engine.md
```

Role:

```text
character rendering
identity preservation
fashion execution
face visibility
commerce media character logic
```

Responsible for:

```text
hero identity lock
facial stability
face visibility
outfit fidelity
pose and activity logic
product visibility support
real-life human behavior
image/video prompt compatibility
```

Critical character rule:

```text
face visibility wins over scenic composition.
```

Back-facing rule:

```text
maximum 1 back-facing or near-back-facing prompt per 6-prompt set
Hook cannot be full back-facing by default
partial face visibility is required when back-facing is used
```

## 6.5 AI Kids Engine

```text
.chatgpt/AI Engine/AI Kids Engine.md
```

Role:

```text
kid-safe or child-oriented generation route
```

Activated by:

```text
EpGenKid
StoryGenKid
```

## 6.6 AI Engine Complete

```text
Chorn/AI Engine/AI Engine Complete.md
```

Role:

```text
combined or reference engine document
```

Use as supporting context only unless ChornPlanet or Router explicitly grants it authority.

---

# 7. Contract Layer

Main ChatGPT-executable contract directory:

```text
.chatgpt/Contract/
```

Contracts are enforceable system rules, not casual documentation.

## 7.1 ImagePrompt

```text
.chatgpt/Contract/ImagePrompt.md
```

Role:

```text
image prompt output contract
```

Governs:

```text
6 Master Production Prompts
prompt order
9:16 vertical image requirements
camera/framing rules
character identity lock
face visibility
outfit visibility
scene diversity
natural motion
background activity
campaign-grade visual enhancements
```

Required output order:

```text
Master Prompt - Hook
Master Prompt - Scene 1
Master Prompt - Scene 2
Master Prompt - Scene 3
Master Prompt - Scene 4
Master Prompt - Closing
```

Hard requirements:

```text
exactly 6 prompts
9:16 vertical
2160 x 3840
no extra prompts
no missing prompts
no merged prompts
no text / captions / watermark / UI unless explicitly governed
```

Global Campaign Enhancement Layer:

```text
Option A - Back-Facing Emotional Recovery
Option B - Natural Micro-Motion Enhancement
Option C - Premium Light Reflection System
```

## 7.2 VdoPrompt

```text
.chatgpt/Contract/VdoPrompt.md
```

Role:

```text
video prompt output contract
```

Governs:

```text
video prompt structure
scene timing
motion-safe usage
speech style
video continuity
```

## 7.3 StoryMomentumEngine

```text
.chatgpt/Contract/StoryMomentumEngine.md
```

Role:

```text
retention and emotional pacing contract
```

Governs:

```text
hook strength
emotional escalation
retention curve
scene momentum
closing payoff
```

## 7.4 StoryCommerceEngine

```text
.chatgpt/Contract/StoryCommerceEngine.md
```

Role:

```text
commerce storytelling support
```

Governs:

```text
product integration
commercial readability
life-integrated product story
```

## 7.5 Legacy Contract Note

Older project context may reference:

```text
StoryGenProductOutputContract.md
```

Current active engine files indicate this monolithic contract has been deprecated in favor of modular contracts:

```text
ImagePrompt
VdoPrompt
StoryMomentumEngine
StoryCommerceEngine
```

Do not recreate the old monolithic contract unless explicitly requested by the project owner.

---

# 8. Design Governance Layer

Directory:

```text
.chatgpt/System/Design/
```

Known files:

```text
.chatgpt/System/Design/Scene Design Standard.md
.chatgpt/System/Design/Tourism Scene Design.md
.chatgpt/System/Design/Residence Scene Design.md
```

Role:

```text
scene design standards
tourism destination design
residence / mixed-use scene design
visual and spatial design governance
```

AISceneEngine uses this layer for design authority binding:

```text
Tourism Destination
Residence / Mixed-Use
Neutral
```

---

# 9. Scene Library And Scene Assets

Scene library registry:

```text
.chatgpt/System/World/Scene/SceneLibraryIndex.md
```

Scene library files:

```text
.chatgpt/System/World/Scene/Mountain.md
.chatgpt/System/World/Scene/Coastal.md
```

Production scene directories:

```text
Chorn/Scene/Mountain/
Chorn/Scene/Coastal/
Chorn/Scene/Sakura/
Chorn/Scene/Snow/
Chorn/Scene/Sky Island/
Chorn/Scene/Festival/
Chorn/Scene/Flower Desert/
Chorn/Scene/Golden Rice Valley/
Chorn/Scene/Crytal Lake/
Chorn/Scene/Vocalno/
Chorn/Scene/Zone21 River Valley Tourism System/
```

Role:

```text
concrete scene definitions
scene master prompts
destination-specific visual systems
environment-specific prompt assets
```

Scene engine rule:

```text
Use registered scene libraries.
Do not invent a new library when an existing one should govern the route.
```

---

# 10. Channel Layer

Directory:

```text
Chorn/Channel/
```

Known channel files:

```text
Chorn/Channel/ChannelMasterIndex.md
Chorn/Channel/Main/Prompt7Days.md
Chorn/Channel/Main/Main-03-Mar-v2.md
Chorn/Channel/Aun/Aun-03-Mar-v2.md
Chorn/Channel/Aun/Characters/AUN-FEMALE-01.md
```

Role:

```text
content channel planning
channel-specific prompts
character/channel assets
publishing-oriented production support
```

---

# 11. Hero Scene And 4K Production Assets

Hero scenes:

```text
Chorn/HeroScene/
```

Known files:

```text
Hero1.md
Hero2.md
Hero3.md
Hero4.md
Hero5 Couple.md
Hero6 Monk.md
Hero7 Man.md
```

4K production:

```text
Chorn/4K/4K Image Generation.md
Chorn/4K/4K VDO.md
```

Role:

```text
hero-scene prompt references
image/video production standards
production prompt examples
```

---

# 12. Character Prompt Assets

Directory:

```text
CharacterPrompt/
```

Role:

```text
fashion prompt assets
hero outfit references
cloth shop design
dress scene assets
male/female outfit prompt sets
```

Common asset themes:

```text
dress hero woman
dress hero man
dress female sets
dress male
cloth shop design
dress scene
```

These files support AICharacterEngine, ImagePrompt, and commerce/fashion production workflows.

---

# 13. Content Generation Assets

Directory:

```text
ContentGeneration/
```

Known files:

```text
DigitalPlanetFlowContent.md
DigitalPlanetFlowVisualPromptEngine.md
FutureMobilityEcology.md
FutureMobilityVisualPromptEngine.md
HeroContentDNA.md
```

Role:

```text
content systems
visual prompt engines
future mobility content
hero content DNA
```

These are supporting content-generation references, not the top-level authority unless explicitly routed.

---

# 14. Ecosystem Layer

Directory:

```text
.chatgpt/System/Ecosystem/
```

Known groups:

```text
Priority1/
Priority2/
Priority3/
```

Role:

```text
ecosystem identity
commerce integration
architecture
flywheel
mixed-use model
data intelligence
audience community
roadmap
```

Use this layer for business ecosystem and civilization expansion context.

---

# 15. Project And Domain Documents

Project files:

```text
Projects/LuxuryAIStudio.md
Projects/SmartFoodNLP.md
```

Other domain documents include:

```text
Smart Mobility.md
Smart City/Smart City.md
Kid Smart City.md
Flood Solution.md
Drone.md
Funding/Loan Structure.md
Life Operating System/
Lanna/
```

Role:

```text
adjacent project concepts
domain-specific blueprints
funding/business structures
life operating system concepts
smart city/mobility extensions
```

These documents are important context, but they do not override ChornPlanet, WorldArchitecture, Router, or contracts unless explicitly referenced by an authority file.

---

# 16. Root-Level DNA And Prompt Documents

Root-level examples:

```text
Buddha.md
BuddhaStandard.md
BuddhaTH.md
DressDNA.md
SeasonDNA.md
Sword.md
Content Translation.md
LannaPlanetScenario.md
```

Role:

```text
specialized prompt DNA
cultural/visual standards
translation guidance
scene or concept-specific prompt assets
```

Use as supporting references based on user intent.

---

# 17. Execution Flow Layer

The system should be understood by execution responsibility, not only by file location.

Primary request flow:

```text
User Input
↓
AIEngineRouter
↓
AISceneEngine when environment or destination logic is needed
↓
AIEpisodeEngine when story, episode, or narrative sequencing is needed
↓
AICharacterEngine when hero identity, face, outfit, or body behavior is needed
↓
Contract Enforcement
↓
Output Packaging
```

Contract enforcement layer:

```text
ImagePrompt       -> image prompt structure and visual enforcement
VdoPrompt         -> video prompt structure and timing enforcement
StoryMomentum     -> retention / momentum support
StoryCommerce     -> story-to-commerce caption support
```

Responsibility table:

| Component | Responsibility | Must Not Own |
| --- | --- | --- |
| ChornPlanet | highest governance | detailed scene or prompt wording |
| VersionControl | active version registry | engine behavior |
| WorldArchitecture | geography and mobility structure | character or prompt generation |
| AIEngineRouter | orchestration and routing | generation |
| AISceneEngine | environment and scene routing | story, character, final prompt format |
| AIEpisodeEngine | story and episode sequencing | top-level routing or contract enforcement |
| AICharacterEngine | identity, face, outfit, human behavior | world structure or output packaging |
| ImagePrompt | image output contract | world registry or story engine logic |
| VdoPrompt | video output contract | image prompt rules |
| StoryMomentumEngine | retention and emotional pacing | product commerce block ownership |
| StoryCommerceEngine | soft commerce caption integration | image or video prompt structure |

---

# 18. Production Pipeline Summary

Official high-level pipeline:

```text
StoryGenProduct / StoryGen / EpGen
↓
AIEngineRouter
↓
AISceneEngine
↓
AIEpisodeEngine
↓
AICharacterEngine
↓
ImagePrompt / VdoPrompt / StoryMomentumEngine
↓
Output Packaging
```

For environment-rich StoryGenProduct or StoryGen:

```text
1. Router detects intent, platform, attachments, and scene complexity
2. AISceneEngine expands and validates destination scene structure
3. AIEpisodeEngine generates story sequencing and emotional progression
4. AICharacterEngine locks identity, face visibility, outfit, and human behavior
5. Contracts enforce exact image/video prompt structure
6. Router assembles only the requested output layers
```

---

# 19. Output Standards

Default production standard:

```text
TikTok-first
9:16 vertical
4K
6-scene episode structure
human-centered storytelling
campaign-grade cinematic quality
```

Core scene order:

```text
Hook
Scene 1
Scene 2
Scene 3
Scene 4
Closing
```

Core visual priorities:

```text
1. human connection
2. emotional readability
3. motion realism
4. premium lighting
5. environment depth
```

Hard failure risks:

```text
hero face unreadable
hook becomes scenery-first
scene repetition
motion layer missing
back-facing used incorrectly
prompt count not exactly 6
aspect ratio not 9:16
contract structure broken
```

---

# 20. How Codex, ChatGPT, And Chorn Use This File

Before making project changes:

```text
1. Read .codex/AGENTS.md
2. Read this .codex/Structure.md
3. Read the relevant authority file
4. Read the relevant engine or contract file
5. Identify dependency impact before editing
```

Collaboration workflow:

```text
Chorn      -> sets direction and approval
Codex      -> analyzes, proposes, edits, reviews
ChatGPT    -> provides feedback in .codex/Feedback.md during review
Proposal   -> records proposed evolution before production edits
Structure  -> records the current system map
AGENTS     -> keeps Codex behavior short and enforceable
History    -> stores completed proposal / feedback cycles after merge approval
ChatGPT    -> executes active engines and contracts from .chatgpt/
```

When changing a contract:

```text
check Router compatibility
check engine alignment
preserve prompt count/order rules
preserve version history
update .chatgpt/VersionControl.md when version changes
append rather than replace when possible
```

When changing an engine:

```text
respect authority boundaries
do not duplicate another engine's responsibility
keep routing, scene, narrative, character, and contract layers separate
```

When adding a world or scene asset:

```text
map it through WorldArchitecture
confirm zone/region/continent consistency
register it where required
avoid speculative expansion unless explicitly requested
```

When producing prompts:

```text
follow Router route
use contracts as enforceable output rules
keep hero readable
avoid repeated scenes
apply campaign enhancement layers when needed
```

---

# 21. Branch Workflow

Project branch model:

```text
main
feature/...
```

Rules:

```text
main        -> production / approved state
feature/... -> working branch for changes
```

Required workflow:

```text
1. Start from main
2. Create a new feature/... branch from main
3. Make changes on the feature/... branch
4. Merge feature/... into main only after human approval
```

Version changes:

```text
When contracts or engines change version,
update .chatgpt/VersionControl.md in the same feature branch.
```

---

# 22. Current Structure Snapshot

Major repository areas:

```text
.codex/                 agent guidance, structure map, proposal, feedback
.chatgpt/               active ChatGPT-executable system, engines, contracts, VersionControl
.chatgpt/System/        civilization governance, world architecture, design, ecosystem
.chatgpt/System/World/  world map, continents, regions, zones, MTS, scene libraries
Chorn/                  scenes, channels, production assets, legacy/reference engine snapshots
Chorn/AI Engine/        legacy/reference AI snapshots, templates, examples
Chorn/Scene/            production scene systems and master prompts
Chorn/Channel/          channel plans and character/channel assets
Chorn/HeroScene/        hero scene prompt assets
Chorn/4K/               image/video production references
CharacterPrompt/        character, fashion, outfit prompt assets
ContentGeneration/      content and visual prompt generation systems
Projects/               project/business concept documents
Life Operating System/  LifeOS and Physical AI concepts
Lanna/                  Lanna civilization references
Scene/                  standalone scene design documents
Smart City/             smart city domain references
Funding/                finance/funding documents
```

---

# 23. Practical Editing Guidance

Safe default:

```text
Extend > Modify > Replace
```

Do:

```text
preserve headings
preserve section order
preserve version history
make section-aware edits
note compatibility impact
```

Do not:

```text
rewrite whole authority or contract files casually
remove historical versions
merge protected sections
simplify contract language
change prompt count/order
move authority between engines
```

If uncertain:

```text
read the authority chain first
flag the conflict
ask for confirmation before structural contract changes
```
