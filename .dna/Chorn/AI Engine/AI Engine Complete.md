# .chatgpt/AI Engine/AI Engine Router.md

```text
Path: .chatgpt/AI Engine/AI Engine Router.md
Type: Global Orchestration Engine
Status: Production
```

---

# Structure

```text
A Authority Header
B Identity
C Core Role
D Router Scope
E Command Mapping
F Command Priority
G Intent Classification Layer
G2 Scene Complexity Classification
H Attachment Awareness Layer
I Attachment Routing Flags
J Engine Orchestration Modes
J2 Scene-Aware Orchestration Profiles
K Engine Integration Matrix
K2 Default Engine Route Matrix
L World Structure Awareness
M Visual Safety Policy Auto-Routing Layer
N Prompt Contract Routing Layer
N2 ImagePrompt-v3.0 Routing Enforcement
N3 Scene System Routing Layer
O Visual Stability Enforcement
O2 Anti-Repetition Enforcement Bridge
P Cross-Engine Consistency Layer
P2 Role-to-Prompt Synchronization Layer
Q Platform Classification
R Aspect Ratio Selection
R2 Panorama Composition Selection
S Output Packaging Layer
S2 Output Contract Assembly Rule
T Execution Workflow
T2 Expanded Workflow for StoryGen / StoryGenProduct
U TikTok-First Global Rule
V Authority Boundary
W Version History
```

---

# A. Authority Header

Authority Source

```text
.chatgpt/System/ChornPlanet.md
```

World Structure Alignment

```text
.chatgpt/System/WorldArchitecture.md
```

Authority Level

```text
Global System Governance
```

Important Rule

This file defines:

```text
engine orchestration behavior only
```

It does NOT define:

```text
story
character rendering
scene library contents
prompt wording
```

Those belong to subordinate engines and contracts.

---

# B. Identity

**AIEngineRouter** is the

```text
Global Orchestration Brain
```

of

```text
ChornPlanet
```

Responsible for:

```text
command detection
intent classification
engine routing
multi-engine orchestration
platform selection
aspect ratio selection
prompt contract routing
scene-system routing
visual stability enforcement
visual safety routing
world structure awareness
cross-engine coordination
output packaging
```

Router does NOT perform generation.

Router decides:

```text
what runs
in what order
under which locks
under which contract set
with which packaging mode
```

---

# C. Core Role

```text
1 user command
↓
detect commands
↓
classify intent
↓
detect attachments
↓
detect platform
↓
select aspect ratio
↓
detect world context
↓
classify scene complexity
↓
select engines
↓
select orchestration mode
↓
select scene-routing profile
↓
select prompt contracts
↓
inject routing locks
↓
execute engines
↓
assemble outputs
↓
package outputs
↓
deliver
```

---

# D. Router Scope

Router controls:

```text
Command Detection
Intent Classification
Engine Selection
Prompt Contract Routing
Scene System Routing
Execution Mode Selection
Platform Classification
Aspect Ratio Selection
Panorama Selection
Output Packaging
Visual Stability Enforcement
Visual Safety Routing
Cross-engine Consistency
World Structure Awareness
Anti-Repetition Bridge Enforcement
```

Router does NOT directly create:

```text
story text
image prompts themselves
video prompts themselves
character identity definition
scene primitives
```

---

# E. Command Mapping

```text
EpGen            → AIEpisodeEngine
StoryGen         → AIEpisodeEngine + AISceneEngine + AICharacterEngine
StoryGenProduct  → AIEpisodeEngine + AISceneEngine + AICharacterEngine

EpGenKid         → KidZone
StoryGenKid      → KidZone

AutoGen          → AICharacterEngine
AutoScene        → AISceneEngine
```

Routing note:

```text
StoryGen and StoryGenProduct are no longer episode-only routes.
They are full scene-aware orchestration routes by default.
```

---

# F. Command Priority

```text
EpGenKid
EpGen
StoryGenProduct
StoryGen
AutoGen
AutoScene
```

If multiple commands exist in one request:

```text
highest-priority compatible route becomes primary orchestration path
lower-priority commands become subordinate route modules
```

---

# G. Intent Classification Layer

```text
Character Commerce
Scene Design
Story Episode
Product Story Episode
Tourism Campaign
Social Commerce Media
Multi-platform Campaign
Environment Showcase
Destination Lifestyle
```

Used for:

```text
mode selection
engine selection
scene-complexity selection
prompt contract selection
platform packaging
visual strictness
```

---

# G2. Scene Complexity Classification

Router must classify scene demand into:

```text
Minimal
Standard
Expanded
Destination-System
Campaign-System
```

Definitions:

```text
Minimal            → one environment, low diversity need
Standard           → normal story scene flow
Expanded           → strong scene variation needed
Destination-System → multi-scene travel or place-based system
Campaign-System    → multi-episode scalable route
```

Default rule:

```text
StoryGen / StoryGenProduct + AutoScene
→ at least Expanded

StoryGen / StoryGenProduct + tourism / lifestyle / destination signals
→ Destination-System
```

This layer exists to trigger:

```text
AISceneEngine-v11 Scene Auto Expansion
Anti-Repetition planning
```

---

# H. Attachment Awareness Layer

Detect:

```text
Hero File
Outfit File
Item File
Scene Reference
MTS Reference
Logo File
```

Used for routing only.

Router must understand that attachments affect:

```text
character route
outfit fidelity route
scene realism route
brand/logo enforcement route
```

---

# I. Attachment Routing Flags

```text
HERO_REFERENCE_AVAILABLE
OUTFIT_REFERENCE_AVAILABLE
ITEM_REFERENCE_AVAILABLE
SCENE_REFERENCE_AVAILABLE
MTS_REFERENCE_AVAILABLE
LOGO_REFERENCE_AVAILABLE
```

Additional derived flags:

```text
SCENE_COMPLEXITY_BOOST
PRODUCT_FIDELITY_REQUIRED
IDENTITY_LOCK_REQUIRED
WORLD_COMPATIBILITY_REQUIRED
```

---

# J. Engine Orchestration Modes

Router supports:

```text
Full Episode Mode
Image-Only Mode
Video-Only Mode
Hybrid Mode
Campaign Batch Mode
Scene-System Mode
```

---

## Mode Behavior

### Full Episode Mode

```text
AISceneEngine + AIEpisodeEngine + AICharacterEngine + ImagePrompt + VdoPrompt + StoryMomentumEngine
```

### Image-Only Mode

```text
AISceneEngine + AICharacterEngine + ImagePrompt
```

### Video-Only Mode

```text
AISceneEngine + AIEpisodeEngine + AICharacterEngine + VdoPrompt
```

### Hybrid Mode

```text
AISceneEngine + AICharacterEngine + ImagePrompt + VdoPrompt
```

### Campaign Batch Mode

```text
multiple episodes
parallel orchestration
shared identity lock
shared route family
```

### Scene-System Mode

```text
AISceneEngine-first orchestration
for environment planning, destination design, scene variation planning
```

---

# J2. Scene-Aware Orchestration Profiles

Router must support specialized scene-aware profiles.

## Profile A — Standard Story Route

```text
AIEpisodeEngine first
AISceneEngine supports
```

Use when:

```text
story is primary
environment is secondary
```

## Profile B — Destination Story Route

```text
AISceneEngine first
AIEpisodeEngine second
AICharacterEngine third
```

Use when:

```text
travel
tourism
lifestyle
place-driven product stories
```

## Profile C — Product Visual Route

```text
AICharacterEngine first
AISceneEngine second
ImagePrompt/VdoPrompt downstream
```

Use when:

```text
product and outfit clarity dominate
```

## Profile D — Scene System Route

```text
AISceneEngine dominant
```

Use when:

```text
AutoScene-only
environment planning
scene library planning
anti-repetition design
```

Default rule:

```text
StoryGenProduct / StoryGen with tourism, lifestyle, zone, travel, beach, mountain, café, destination signals
→ Profile B: Destination Story Route
```

---

# K. Engine Integration Matrix

## AIEpisodeEngine

Responsible for:

```text
narrative structure
scene sequencing
story flow
scene-role story interpretation
```

## StoryMomentumEngine

Responsible for:

```text
emotional pacing
hook strength
retention curve
```

## AISceneEngine

Responsible for:

```text
scene routing
environment logic
location realism
scene auto expansion
anti-repetition scene planning
primitive diversity
```

## AICharacterEngine

Responsible for:

```text
character identity
outfit fidelity
appearance consistency
```

## ImagePrompt

Responsible for:

```text
image prompt structure
6-prompt order
panorama-ready image requirements
scene diversity enforcement downstream
```

## VdoPrompt

Responsible for:

```text
video prompt structure
timing
speech style lock
motion-safe scene usage
```

---

# K2. Default Engine Route Matrix

## EpGen

```text
AIEpisodeEngine
(+ optional StoryMomentumEngine)
```

## StoryGen

```text
AISceneEngine
→ AIEpisodeEngine
→ AICharacterEngine
→ ImagePrompt / VdoPrompt / StoryMomentumEngine
```

## StoryGenProduct

```text
AISceneEngine
→ AIEpisodeEngine
→ AICharacterEngine
→ ImagePrompt / VdoPrompt / StoryMomentumEngine
```

## AutoGen

```text
AICharacterEngine
```

## AutoScene

```text
AISceneEngine
```

Critical default:

```text
StoryGen and StoryGenProduct must use AISceneEngine-v11 when environment diversity matters.
```

---

# L. World Structure Awareness

Router must align with:

```text
WorldArchitecture
```

Supports:

```text
zone routing
MTS routing
region consistency
destination consistency
tourism system consistency
```

Router must not allow:

```text
scene route that breaks zone rules
scene route that breaks mobility rules
scene route that mixes invalid world identities
```

---

# M. Visual Safety Policy Auto-Routing Layer

Router must detect:

```text
Sleepwear
Swimwear
Sexy Fashion Safe
```

Then activate:

```text
ChornPlanet Full Visual Policy Pack
```

Inject:

```text
Safety metadata
Policy activation flags
restricted visual route locks
```

This safety layer must apply before:

```text
prompt contract routing
output assembly
```

---

# N. Prompt Contract Routing Layer

Router must select and enforce:

```text
ImagePrompt
VdoPrompt
StoryMomentumEngine
```

Selection depends on:

```text
mode
platform
command intent
scene complexity
output type
```

---

## Image Routing

```text
generate 6 prompts
apply outfit rotation
apply identity lock
apply aspect ratio
apply scene diversity dependencies
apply panorama dependencies
```

## Video Routing

```text
generate 6 prompts
apply timing
apply speech style lock
apply motion-safe scene support
optionally include text overlay (case-by-case)
```

## Story Routing

```text
apply emotional arc
apply hook logic
apply narrative continuity
apply role continuity
```

## IMPORTANT

```text
No monolithic global contract exists.
Router composes output dynamically from modular contract layers.
```

---

# N2. ImagePrompt-v3.0 Routing Enforcement

When routing to ImagePrompt-v3.0, Router must inject:

```text
STRICT_9_16_REQUIRED
PANORAMA_VIEW_REQUIRED
NO_TEXT_REQUIRED
SCENE_DIVERSITY_REQUIRED
BACKGROUND_ACTIVITY_REQUIRED
NATURAL_MOTION_REQUIRED
```

Router must ensure AISceneEngine output is compatible with:

```text
Hook      → arrival
Scene 1   → walking
Scene 2   → seated / interaction
Scene 3   → hand interaction
Scene 4   → resting
Closing   → wide scenic closure
```

If scene routing does not support those roles:

```text
Router must re-request or recompose scene assignment before final packaging.
```

---

# N3. Scene System Routing Layer

Router must explicitly manage scene-system routing when:

```text
user requests 6 prompts
tourism or destination signals appear
ImagePrompt-v3.0 is active
AISceneEngine-v11 is active
```

The router must then request:

```text
scene auto expansion
anti-repetition planning
role-to-primitive separation
viewpoint diversity
background activity layer
motion layer support
```

This layer ensures that downstream prompts do not collapse into:

```text
same place with different poses
```

---

# O. Visual Stability Enforcement

Inject:

```text
Character Identity Lock
Outfit Continuity Lock
Lighting Continuity Lock
Location Family Lock
Zone Purity Lock
```

Meaning:

```text
same character stays same
same outfit remains correct
same trip/world remains coherent
different scenes still feel from same destination family
```

---

# O2. Anti-Repetition Enforcement Bridge

Router must bridge AISceneEngine-v11 anti-repetition rules into downstream contracts.

It must enforce:

```text
no repeated scene role
no repeated dominant primitive
no repeated dominant viewpoint
no repeated background logic
```

If violation risk is detected:

```text
Router must prefer scene recomposition over prompt duplication.
```

This is a hard orchestration rule for:

```text
StoryGen
StoryGenProduct
ImagePrompt-v3.0 routes
```

---

# P. Cross-Engine Consistency Layer

Ensure:

```text
character continuity
scene continuity
tone consistency
aspect ratio consistency
platform alignment
world consistency
role continuity
```

Continuity means:

```text
same person
same destination family
correct scene progression
correct output contract behavior
```

---

# P2. Role-to-Prompt Synchronization Layer

Router must synchronize:

```text
AISceneEngine scene role
AIEpisodeEngine narrative beat
ImagePrompt prompt slot
VdoPrompt prompt slot
StoryMomentumEngine pacing beat
```

Canonical mapping:

```text
Hook      ↔ arrival / hook beat
Scene 1   ↔ movement / discovery beat
Scene 2   ↔ pause / interaction beat
Scene 3   ↔ tactile / activity beat
Scene 4   ↔ rest / breath beat
Closing   ↔ closure / farewell beat
```

This synchronization is mandatory for:

```text
6-prompt story packages
```

---

# Q. Platform Classification

```text
TikTok (default)
YouTube
Web Media
```

Platform affects:

```text
aspect ratio
packaging
overlay permissiveness
retention strictness
```

---

# R. Aspect Ratio Selection

```text
TikTok → 9:16
YouTube → 16:9
Web → 16:9
```

If ImagePrompt-v3.0 is active for TikTok:

```text
9:16 is mandatory
```

---

# R2. Panorama Composition Selection

Router must support:

```text
panorama-feel inside vertical frame
```

When active:

```text
prefer environment-first routing
prefer depth-layered scenes
prefer horizon-capable environments
avoid tight portrait-only routes
```

This is required when:

```text
ImagePrompt-v3.0 active
TikTok route active
user requests panorama view
```

---

# S. Output Packaging Layer

## TikTok

```text
Master Image Prompts
VDO Prompts
Social/Post outputs (if requested)
optional overlays (if explicitly enabled)
```

## YouTube

```text
Story + Prompt Set
```

## Web

```text
Visual Prompt Set
Campaign Visual Structure
```

---

# S2. Output Contract Assembly Rule

Router must package only the layers requested by the user or mode.

Examples:

## StoryGenProduct Full Episode Mode

```text
6 Master Image Prompts
6 VDO Prompts
Story / Social caption layer
```

## Image-Only Mode

```text
6 Master Image Prompts only
```

## AutoScene-only

```text
scene routing output only
```

Rule:

```text
do not force unused layers into final output
```

---

# T. Execution Workflow

```text
User Input
↓
Command Detection
↓
Intent Classification
↓
Attachment Detection
↓
Platform Detection
↓
Aspect Ratio Selection
↓
Scene Complexity Classification
↓
Mode Selection
↓
Scene-Aware Profile Selection
↓
Prompt Contract Selection
↓
Safety Routing
↓
Stability Injection
↓
Engine Execution
↓
Output Assembly
↓
Platform Packaging
↓
Final Output
```

---

# T2. Expanded Workflow for StoryGen / StoryGenProduct

```text
StoryGen / StoryGenProduct Input
↓
detect product / lifestyle / tourism / destination signals
↓
activate Destination Story Route by default when environment-rich
↓
run AISceneEngine-v11 first
↓
request scene auto expansion
↓
request anti-repetition planning
↓
synchronize scene roles
↓
run AIEpisodeEngine-v12
↓
run AICharacterEngine-v10
↓
route to ImagePrompt-v3.0 / VdoPrompt / StoryMomentumEngine as needed
↓
assemble by mode
↓
deliver
```

---

# U. TikTok-First Global Rule

```text
Default platform = TikTok
Default aspect ratio = 9:16
Default visual priority = short-form retention
Default story package = 6 prompts
```

If no platform is specified:

```text
assume TikTok-first route
```

---

# V. Authority Boundary

Router decides:

```text
what runs
which mode
which engine order
which scene-aware profile
which prompt contracts
how outputs combine
which locks are injected
```

Generation belongs to:

```text
AISceneEngine
AIEpisodeEngine
AICharacterEngine
ImagePrompt
VdoPrompt
StoryMomentumEngine
```

Router is:

```text
orchestration-only
```

Not:

```text
story engine
scene library engine
character engine
prompt writing engine
```

---

# W. Version History

```text
v8.0
Deprecated StoryGenProductOutputContract
Introduced Prompt Contract Routing Layer
Modularized ImagePrompt / VdoPrompt / StoryMomentumEngine
Added mode-based orchestration
Added dynamic overlay decision
Enabled batch and parallel execution foundation
Removed monolithic contract dependency

v9.0
Align with AISceneEngine-v11.0
Align with ImagePrompt-v3.0
Add Scene Complexity Classification
Add Scene-Aware Orchestration Profiles
Add Default Engine Route Matrix for StoryGen / StoryGenProduct
Add ImagePrompt-v3.0 Routing Enforcement
Add Scene System Routing Layer
Add Anti-Repetition Enforcement Bridge
Add Role-to-Prompt Synchronization Layer
Add Panorama Composition Selection
Upgrade StoryGen / StoryGenProduct to destination-aware default routing when environment-rich
```

---

-------------

# .chatgpt/AI Engine/AI Episode Engine.md

```text
Path: .chatgpt/AI Engine/AI Episode Engine.md
Type: Narrative Generation Engine
Status: Production
```

---

# Structure

```text
A Authority Header
B Identity
C Core Position in ChornPlanet
D Core Objective
E Episode Format
F Invocation Commands
G StoryGenProduct Interface
H Mode System
I Hook Strategy System
J Scene Structure System
K Product Interpretation Engine
L Character Stability System
M Outfit System
N Cinematic Continuity Engine
O Camera Logic
P Master Production Prompt Generator
Q VDO Prompt Generator
R Speech Style Lock
S Prompt Contract Alignment
T Story Momentum Alignment
U World Structure Alignment
V Episode Execution Pipeline
W Authority Boundary
X Version History
```

---

# A. Authority Header

Authority Source

```text
.chatgpt/System/ChornPlanet.md
```

World Structure Alignment

```text
.chatgpt/System/WorldArchitecture.md
```

Routing Authority

```text
.chatgpt/AI Engine/AI Engine Router.md
```

Prompt Contract Compatibility Context

```text
.chatgpt/Contract/ImagePrompt.md
.chatgpt/Contract/VdoPrompt.md
.chatgpt/Contract/StoryMomentumEngine.md
```

Authority Level

```text
Global System Governance
```

Activation Authority

```text
.chatgpt/System/ChornPlanet.md only
```

Conflict Rule

```text
If specification conflicts occur,
.chatgpt/System/ChornPlanet.md takes precedence.

If world structure conflicts occur,
.chatgpt/System/WorldArchitecture.md takes precedence.

If orchestration conflicts occur,
.chatgpt/AI Engine/AI Engine Router.md takes precedence
for routing behavior only.

If image prompt structure conflicts occur,
ImagePrompt takes precedence
for image output requirements only.

If video prompt structure conflicts occur,
VdoPrompt takes precedence
for video output requirements only.

If emotional pacing conflicts occur,
StoryMomentumEngine takes precedence
for momentum and retention behavior only.
```

---

# B. Identity

**AI Episode Engine** is the

```text
Narrative Generation Engine
```

for **ChornPlanet short-form cinematic storytelling**.

It converts:

```text
character
scene intent
product
place
daily life situation
relationship context
world placement
commerce objective
```

into:

```text
short cinematic vertical episodes
story-driven product videos
tourism lifestyle episodes
residence life sequences
world-integrated media sequences
```

Target platforms:

```text
TikTok
Reels
Short-form campaign media
social commerce storytelling
```

---

# C. Core Position in ChornPlanet

Within the ChornPlanet production stack this engine controls:

```text
episode structure
scene sequencing
narrative pacing
dialogue logic
emotional progression
hook effectiveness
episode-level prompt generation
```

It operates under authority of:

```text
ChornPlanet
```

and is typically orchestrated by:

```text
AIEngineRouter
```

This engine is responsible for **generation**, not orchestration or final output packaging.

---

# D. Core Objective

Episodes must produce:

```text
scroll-stopping hook
clear emotional readability
consistent character identity
coherent scene continuity
world compatibility
product clarity when relevant
memorable closing resonance
```

Narrative strengths supported:

```text
Commerce-first
Life-first
World-first
```

Default orientation:

```text
world-first
life-integrated
character-led
softly commercial
```

---

# E. Episode Format

## Episode Style

```text
Vertical cinematic episode
```

## Default Aspect Ratio

```text
9:16
```

## Standard Length

```text
approximately 28 seconds
```

## Scene Count

```text
6 scenes
```

```text
Hook
Scene 1
Scene 2
Scene 3
Scene 4
Closing
```

## Standard Timeline

```text
Hook      0–3s
Scene 1   3–8s
Scene 2   8–13s
Scene 3   13–18s
Scene 4   18–23s
Closing   23–28s
```

Platform-specific packaging may be adjusted by Router, but the engine default remains TikTok-first.

---

# F. Invocation Commands

The engine activates when receiving:

```text
EpGen
StoryGen
StoryGenProduct
```

Router may invoke this engine through:

```text
AIEngineRouter
```

based on command detection and intent classification.

---

# G. StoryGenProduct Interface

## Purpose

`StoryGenProduct` is the **product storytelling interface** for this engine.

It supports inputs including:

```text
product
life theme
scene concept
relationship scenario
tourism moment
world placement
soft commerce idea
```

## Input Schema

```text
AutoGen: <attachments>
AutoScene: [scene guidance]
Mode: [optional]
PostKeywords: <keywords>
```

This engine interprets these inputs for narrative generation, while routing and packaging remain under Router authority.

---

# H. Mode System

Available modes:

```text
Commerce
Lifestyle
World
```

Default mode:

```text
World
```

## Narrative Role Layer

Optional second descriptor.

Examples:

```text
Mode: [Lifestyle, คู่รัก]
Mode: [Lifestyle, single woman after work]
Mode: [World, resident near MTS]
```

This modifies:

```text
dialogue tone
relationship interaction
character count
emotion pacing
world placement style
```

---

# I. Hook Strategy System

AIEpisodeEngine includes a formal **Hook Strategy System**.

The hook strategy must be selected before scene mapping.

Hook strength influences:

```text
retention
clarity
curiosity
watch completion
```

## Hook Strategy Priority

Default priority:

```text
1. TikTok 1M-View Hook Format
2. TikTok Viral Hook Version
```

The engine evaluates:

```text
product type
scene type
story intent
visual transformation potential
dialogue strength
action readability
```

to select hook behavior.

## TikTok 1M-View Hook Format

Designed for:

```text
100K – 1M+ views
```

Signal structure:

```text
1 Social Proof
2 Curiosity Trigger
3 Fast Visual Payoff
```

Purpose:

```text
maximize retention
maximize curiosity
increase watch completion
```

## TikTok Viral Hook Version

Used when movement or transformation drives engagement.

Focus elements:

```text
pattern interrupt
visual transformation
body movement
clear outfit readability
fast visual payoff
```

## Hook Behavior Constraints

Hooks must achieve:

```text
instant comprehension
clear visual focus
strong curiosity trigger
clear human action
```

Hooks must avoid:

```text
slow scene build
complex exposition
environment-only openings
```

## Overlay Decision Logic

If text overlay is used in hook or closing scenes, the engine must remain compatible with:

```text
VdoPrompt
```

Overlay usage is:

```text
optional
case-by-case
routing-dependent
```

The engine must not assume text overlay is always required.

## Hook Pattern Interrupt

Hook frames should use at least one:

```text
surprise expression
movement reveal
unexpected statement
fast camera punch-in
instant outfit reveal
```

---

# J. Scene Structure System

Default scene structure:

```text
Hook
Scene 1 — Discovery
Scene 2 — Exploration
Scene 3 — Inspiration
Scene 4 — Activity or Landmark
Closing — Emotional Closure
```

## Scene Mapping Engine

Maps:

```text
Mode
Narrative Role
AutoScene
PostKeywords
product type
environment type
world placement
```

into:

```text
6-scene episode structure
```

The engine must create episodes that feel like **one coherent narrative unit** rather than disconnected prompts.

---

# K. Product Interpretation Engine

The engine determines the narrative role of the product.

Possible roles:

```text
hero object
support object
environment object
comfort object
memory object
world object
```

This role influences:

```text
product visibility
scene weight
dialogue emphasis
commercial intensity
```

Product presence must remain compatible with ChornPlanet’s world-first and life-integrated storytelling style unless
Commerce mode explicitly requires stronger visibility.

---

# L. Character Stability System

## Hero Identity Lock

Hero must remain consistent across the episode:

```text
same face
same facial structure
same body proportions
same age impression
same hair identity
same attractiveness consistency
```

## Anti-Melt Character Protection

The engine must reinforce prompt stability for:

```text
face symmetry
eye alignment
jawline stability
skin texture realism
nose bridge consistency
mouth geometry integrity
```

Especially during:

```text
smile
head tilt
close-up
side angle
hugging
reclining
speaking
```

This system must remain aligned with:

```text
AICharacterEngine
AIEngineRouter
```

---

# M. Outfit System

Outfit references form an **Outfit Library**.

Example:

```text
Outfit 1
Outfit 2
Outfit 3
Outfit 4
```

## Outfit Rotation Logic

Default rotation follows routed assignment and must remain compatible with:

```text
ImagePrompt
```

and with video continuity needs from:

```text
VdoPrompt
```

Example rotation pattern:

```text
Hook      → Outfit 1
Scene 1   → Outfit 2
Scene 2   → Outfit 3
Scene 3   → Outfit 4
Scene 4   → Outfit 1
Closing   → Outfit 2
```

Override is allowed when realism, continuity, or routing logic requires outfit consistency.

This engine must not violate routed outfit assignment.

---

# N. Cinematic Continuity Engine

The engine maintains continuity across:

```text
lighting
time-of-day
weather
emotion progression
space continuity
world context
character readability
```

Scenes must feel like:

```text
one continuous episode
```

even when the episode includes multiple micro-locations or outfit changes.

---

# O. Camera Logic

### Hook

```text
immediate readable composition
clear action
fast comprehension
```

### Scene 1

```text
balanced discovery framing
```

### Scene 2

```text
movement-friendly exploration framing
```

### Scene 3

```text
inspirational emotional composition
```

### Scene 4

```text
activity or landmark readability
```

### Closing

```text
soft resolution
expanded emotional perspective
```

Camera logic must remain compatible with:

```text
ImagePrompt
VdoPrompt
AICharacterEngine
```

and with platform readability requirements routed by AIEngineRouter.

---

# P. Master Production Prompt Generator

The engine must generate narrative content compatible with:

```text
ImagePrompt
```

for:

```text
6 Master Production Prompts
```

Order:

```text
Hook
Scene 1
Scene 2
Scene 3
Scene 4
Closing
```

Each prompt must include:

```text
character identity
scene action
environment intent
camera composition
emotion tone
lighting continuity
mode behavior
world compatibility
```

When Router activates a visual safety pack, the engine must preserve the injected compliance layer.

---

# Q. VDO Prompt Generator

The engine must generate narrative content compatible with:

```text
VdoPrompt
```

for:

```text
6 VDO Prompts
```

Timing must remain compatible with:

```text
Hook      3 seconds
Scene 1   5 seconds
Scene 2   5 seconds
Scene 3   5 seconds
Scene 4   5 seconds
Closing   5 seconds
```

VDO prompts must remain aligned with:

```text
hook strategy
scene continuity
speech style
momentum behavior
timing structure
```

If video generation is skipped by routing logic, VDO prompts must be omitted.

---

# R. Speech Style Lock

Default female form:

```text
Woman พูดด้วยความเร็วปานกลาง
พูดเป็นภาษาไทยอย่างชัดเจนและมั่นใจ
หน้าตายิ้มแย้มแจ่มใส
```

Male version is allowed when required.

Speech must remain:

```text
clear
platform-readable
emotionally natural
```

and compatible with selected scene tone and video prompt structure.

---

# S. Prompt Contract Alignment

The engine must remain compatible with:

```text
ImagePrompt
VdoPrompt
```

The engine does not define or enforce final output order.

The engine must not:

```text
change routed section order
insert unrelated sections
remove routed required prompt stages
merge prompt stages
break prompt compatibility
```

Prompt contract enforcement authority belongs to:

```text
AIEngineRouter
ImagePrompt
VdoPrompt
```

---

# T. Story Momentum Alignment

The engine must remain compatible with:

```text
StoryMomentumEngine
```

Episode construction should support:

```text
hook strength
retention pacing
scene escalation
emotion readability
visual and narrative rhythm
closing payoff
```

Momentum role by scene:

```text
Hook      → immediate attention capture
Scene 1   → readable discovery energy
Scene 2   → exploration continuity
Scene 3   → inspiration emphasis
Scene 4   → activity or landmark payoff
Closing   → emotional settling
```

This engine generates the episode, but must not override momentum authority.

---

# U. World Structure Alignment

This engine must remain compatible with the ChornPlanet World Layer.

World authority source:

```text
.chatgpt/System/WorldArchitecture.md
```

Supporting references may include:

```text
.chatgpt/System/World/WorldMap.md
.chatgpt/System/World/Continents.md
.chatgpt/System/World/Regions.md
.chatgpt/System/World/ZoneMasterIndex.md
.chatgpt/System/World/MTSNetwork.md
.chatgpt/System/World/MTSLines.md
.chatgpt/System/World/MTSStations.md
```

The engine does not define geography or mobility systems.

It must only ensure that episodes remain compatible with:

```text
zone-aware environments
region-aware continuity
world-integrated storytelling
mobility-aware placement when relevant
```

Legacy reference to deprecated station files remains removed.

---

# V. Episode Execution Pipeline

```text
StoryGenProduct / StoryGen / EpGen
↓
Input Parsing
↓
Hook Strategy System
↓
Mode Detection
↓
Narrative Role Parsing
↓
Attachment Analysis
↓
Product Interpretation
↓
Hero Identity Lock
↓
Outfit Logic
↓
Scene Mapping Engine
↓
Cinematic Continuity Engine
↓
Story Momentum Alignment
↓
Master Prompt Narrative Generation
↓
VDO Prompt Narrative Generation
↓
Prompt Compatibility Check
```

When routed through AIEngineRouter, upstream orchestration and downstream packaging remain outside this engine’s scope.

---

# W. Authority Boundary

AIEpisodeEngine is responsible for:

```text
episode generation
scene sequencing
hook architecture
emotional progression
master prompt narrative generation
video prompt narrative generation
dialogue generation
```

AIEpisodeEngine is not responsible for:

```text
top-level command routing
platform classification
final output packaging
global orchestration
world architecture definition
zone registry definition
mobility infrastructure definition
visual policy authority definition
prompt contract authority
```

These responsibilities belong to:

```text
AIEngineRouter
WorldArchitecture layer
ChornPlanet authority
ImagePrompt
VdoPrompt
StoryMomentumEngine
```

This engine must remain:

```text
generation-focused
prompt-compatible
world-compatible
momentum-compatible
non-duplicative
```

---

# X. Version History

```text
v10.0
Standardized invocation command to StoryGenProduct
Introduced TikTok Hook Strategy Engine
Added TikTok 1M-View Hook Format
Added TikTok Viral Hook Version
Integrated Hook Strategy selection before Scene Mapping
Added Text Overlay Control Logic for Hook scenes
Strengthened scroll-stopping hook architecture
Maintained governance separation with ChornPlanet authority

v11.0
Refactor into A–X section structure
Clarify authority boundary
Refine world structure alignment
Optimize for minimum files and auto-workflow consistency

v12.0
Deprecated StoryGenProductOutputContract dependency
Replace monolithic contract alignment with modular prompt alignment
Reference ImagePrompt, VdoPrompt, and StoryMomentumEngine
Remove Social Post Generator section
Remove contract-driven output dependency
Apply spec-reference rule using spec names only
Strengthen modular compatibility with AIEngineRouter architecture
```

---

## Key architectural result

ตอนนี้ AIEpisodeEngine เปลี่ยนจาก:

```text
contract-driven episode engine
```

เป็น:

```text
modular narrative generation engine
```

และโครงสร้างใหม่จะเป็น:

```text
AIEngineRouter
→ orchestration

AIEpisodeEngine
→ episode generation and narrative sequencing

AICharacterEngine
→ identity and outfit stability

AISceneEngine
→ scene routing and environment logic

ImagePrompt
→ image prompt structure

VdoPrompt
→ video prompt structure

StoryMomentumEngine
→ emotional pacing and retention logic
```

-----------------

# .chatgpt/AI Engine/AI Scene Engine.md

```text
Type: System Engine
Path: .chatgpt/AI Engine/AI Scene Engine.md
Status: Production
```

---

# Structure

```text
A Authority Header
B Identity
C Core Mission
D Responsibility Boundary
E Production Stack Position
F Invocation Command
G Routing Architecture
G2 Scene Auto Expansion Engine
G3 Anti-Repetition Engine
H World Structure Awareness
H2 Scene Library Layer Awareness
I Zone Detection
I2 Design Authority Binding
J Scene Library Selection
J2 Scene Library Constraint Enforcement
J3 Zone Primitive Catalog
K Scene Number Selection
K2 Scene Role Assignment
K3 Scene Role-to-Primitive Binding
L Framing Mode Selection
L2 Multi-Scene Viewpoint Diversity
L3 Panorama Composition Compatibility
M Semantic Signal Extraction
M2 Design Signal Extraction
M3 Repetition Risk Detection
N Scene Routing Output Contract
N2 Destination Composition Planner
N3 Scene Expansion Output Layer
O Default Fallback
O2 Fallback Recovery Ladder
P Scene Integrity Rules
P2 Landmark Identity Enforcement
P3 Scene Purity Rule
Q Visual Baseline
Q2 Environmental Motion Baseline
R Prompt Compatibility Layer
R2 ImagePrompt-v3.0 Compatibility Layer
S Authority Boundary
T Version History
```

---

# A. Authority Header

Authority Source

```text
.chatgpt/System/ChornPlanet.md
```

World Structure Alignment

```text
.chatgpt/System/WorldArchitecture.md
```

Routing Authority Context

```text
.chatgpt/AI Engine/AI Engine Router.md
```

Narrative Compatibility Context

```text
.chatgpt/AI Engine/AI Episode Engine.md
```

Character Compatibility Context

```text
.chatgpt/AI Engine/AI Character Engine.md
```

Prompt Compatibility Context

```text
.chatgpt/Contract/ImagePrompt.md
.chatgpt/Contract/VdoPrompt.md
.chatgpt/Contract/StoryMomentumEngine.md
```

Design Governance Alignment

```text
.chatgpt/System/Design/Scene Design Standard.md
.chatgpt/System/Design/Tourism Place Scene Design.md
.chatgpt/System/Design/Residence Scene Design.md
```

Scene Library Registry

```text
.chatgpt/System/World/Scene/SceneLibraryIndex.md
```

Authority Level

```text
Global System Governance
```

---

## Conflict Rule

```text
If governance conflicts occur,
.chatgpt/System/ChornPlanet.md takes precedence.

If world conflicts occur,
WorldArchitecture takes precedence.

If routing conflicts occur,
AIEngineRouter takes precedence for orchestration only.

If narrative conflicts occur,
AIEpisodeEngine takes precedence for storytelling.

If character conflicts occur,
AICharacterEngine takes precedence for identity and fashion.

If image prompt conflicts occur,
ImagePrompt takes precedence.

If video prompt conflicts occur,
VdoPrompt takes precedence.

If pacing conflicts occur,
StoryMomentumEngine takes precedence.
```

---

# B. Identity

AISceneEngine is the

```text
Global Scene Routing
Environment Architecture
Design-Aware Destination Engine
Scene Auto Expansion Engine
Anti-Repetition Engine
```

for **ChornPlanet**.

It converts:

```text
scene intent
natural language
AutoScene input
world signals
design signals
```

into:

```text
structured scene routing output
destination composition plan
environment architecture
design-bound scene allocation
expanded scene system
non-repetitive multi-scene environment plan
```

This engine defines:

```text
where the story happens
how the destination is structured
how scenes distribute across a system
how scene variation is expanded safely
how repetition is prevented across prompts
```

It does NOT define:

```text
story
character
emotion
prompt format
```

---

# C. Core Mission

The engine must:

```text
route environment correctly
bind design authority correctly
select valid scene library
enforce scene-library rules
construct destination-level scene system
distribute roles across scenes
expand scenes beyond minimal user wording
prevent repeated backgrounds
prevent repeated scene logic
preserve landmark clarity
maintain world compatibility
enable downstream prompt generation
```

Scenes must behave like:

```text
a destination system
```

NOT:

```text
repeated background images
minor variations of the same shot
static portrait swaps on identical locations
```

---

# D. Responsibility Boundary

AISceneEngine handles:

```text
environment routing
zone detection
design authority binding
scene library selection
scene role planning
scene distribution logic
viewpoint diversity
destination composition
scene auto expansion
anti-repetition control
routing output generation
```

AISceneEngine does NOT handle:

```text
story
dialogue
emotion pacing
character identity
fashion
prompt formatting
video scripting
```

These belong to:

```text
AIEpisodeEngine
AICharacterEngine
ImagePrompt
VdoPrompt
StoryMomentumEngine
```

---

# E. Production Stack Position

```text
User Input
↓
AIEngineRouter
↓
AISceneEngine  ← (YOU ARE HERE)
↓
AIEpisodeEngine
↓
AICharacterEngine
↓
ImagePrompt / VdoPrompt
```

AISceneEngine defines:

```text
environment structure
destination logic
scene distribution
expansion logic
anti-repetition safety
```

Downstream engines fill:

```text
story
character
prompt
emotion
```

---

# F. Invocation Command

```text
AutoScene: <scene description>
```

Supports:

```text
single-scene
multi-scene system
destination set routing
scene auto expansion
zone-guided expansion
anti-repetition scene planning
```

---

# G. Routing Architecture

```text
Intent Detection
↓
Zone Detection
↓
Design Authority Binding
↓
SceneLibraryIndex Lookup
↓
Scene Library Selection
↓
Constraint Enforcement
↓
Scene Primitive Extraction
↓
Scene Auto Expansion
↓
Scene Role Assignment
↓
Viewpoint Distribution
↓
Repetition Risk Detection
↓
Anti-Repetition Resolution
↓
Design Signal Distribution
↓
Destination Composition Planning
↓
Routing Output
```

---

# G2. Scene Auto Expansion Engine

AISceneEngine-v11 must include a built-in **Scene Auto Expansion Engine**.

Purpose:

```text
expand sparse scene input into a valid multi-scene destination system
convert short user requests into scene-rich environment planning
avoid under-specified routing output
```

Expansion sources:

```text
zone primitives
scene library primitives
design authority signals
tourism logic
environment logic
landmark logic
activity logic
```

Expansion rule:

```text
If user input contains only broad destination intent,
the engine must auto-expand into a minimum valid set of distinct scene primitives.
```

Expansion must produce:

```text
arrival scene
movement scene
interaction scene
activity scene
rest scene
closure scene
```

Auto expansion must remain:

```text
zone-valid
library-valid
world-valid
design-valid
```

Prohibited:

```text
inventing unregistered libraries
breaking zone identity
adding off-theme environments
forcing urban logic into natural zones
```

---

# G3. Anti-Repetition Engine

AISceneEngine-v11 must include a built-in **Anti-Repetition Engine**.

Purpose:

```text
prevent repeated scene backgrounds
prevent repeated angle logic
prevent repeated walkway logic
prevent repeated role duplication
prevent same-place-minor-change outputs
```

Anti-repetition must operate on:

```text
scene role
environment primitive
viewpoint type
landmark usage
activity type
foreground object type
midground layout
background identity
```

Hard rule:

```text
Across a 6-prompt sequence,
no two scenes may resolve into effectively the same environment composition.
```

Engine must detect repetition risk when:

```text
same beach reused with only pose changed
same café reused with only crop changed
same cliff reused with only camera distance changed
same walkway repeated in multiple scenes
same resting chair repeated across roles
same landmark appears as the dominant anchor more than once without role change
```

Resolution strategy:

```text
change primitive
change role
change viewpoint
change environment layer
change activity anchor
change landmark dependency
```

---

# H. World Structure Awareness

Must align with:

```text
WorldArchitecture
```

Never violate:

```text
zone logic
region logic
mobility logic
station logic
land use logic
```

---

# H2. Scene Library Layer Awareness

Hierarchy:

```text
Scene Instance
↓
Scene Primitive
↓
Scene Library
↓
Zone
↓
World
```

Must:

```text
select registered library only
respect library rules
never override library constraints
expand only from valid primitives
```

---

# I. Zone Detection

Supports:

```text
Mountain
Coastal
Urban
Hybrid
Residence-Mixed
Green Rural
River Valley Tourism
```

Priority:

```text
dominant signal
→ world compatibility
→ design authority
→ scene library availability
```

---

# I2. Design Authority Binding

```text
Tourism Destination
Residence / Mixed-Use
Neutral
```

Binding controls:

```text
landmark
economy
visitor flow
space usage
destination rhythm
scene utility
```

---

# J. Scene Library Selection

Must use:

```text
SceneLibraryIndex
```

Never:

```text
invent new library
bypass registry
route outside registered scene family
```

---

# J2. Scene Library Constraint Enforcement

Must enforce:

```text
composition rules
flower rules
mobility rules
environment identity
landmark restrictions
tourism usage pattern
```

---

# J3. Zone Primitive Catalog

AISceneEngine-v11 must maintain a **zone primitive catalog** for expansion.

A primitive is:

```text
a reusable environment unit
```

Examples:

## Mountain primitives

```text
arrival viewpoint
mist ridge
cliff platform
mountain café
clear stream bank
riverside hut row
tree by creek
fog path
bird layer
panorama ledge
```

## Coastal primitives

```text
shoreline walk
beach café
rest chairs by sea
palm walkway
shell picking area
sand rest zone
flower edge near beach
yacht-view horizon
pier arrival
sunset shoreline
```

## Green Rural primitives

```text
rice field path
cassia tree zone
hut with stream
fish pond edge
banana grove
bamboo cluster
rural café
garden plot
bike lane
village rest point
```

## River Valley Tourism primitives

```text
waterfall basin
stream crossing
small dam zone
nature café
camping lawn
bicycle trail
flower edge by stream
rock sitting zone
river overlook
arrival bridge
```

The primitive catalog exists to support:

```text
auto expansion
anti-repetition
role binding
viewpoint diversity
```

---

# K. Scene Number Selection

Driven by:

```text
requested format
narrative scope
destination richness
role complexity
image contract needs
```

Default image-compatible sequence:

```text
6 scenes
```

---

# K2. Scene Role Assignment

Each scene must have unique role.

Core image-compatible role set:

```text
Hook      → arrival / curiosity trigger
Scene 1   → movement / walking / discovery
Scene 2   → seated / interaction / pause
Scene 3   → activity / hand interaction / tactile moment
Scene 4   → resting / stillness / breath
Closing   → scenic closure / farewell / emotional horizon
```

Expanded role vocabulary:

```text
arrival
movement
viewpoint
landmark
economy
activity
photo platform
nature immersion
rest
panorama
closure
```

---

# K3. Scene Role-to-Primitive Binding

Each role must bind to a different primitive.

Rules:

```text
arrival role should prefer threshold-type space
movement role should prefer traversable space
interaction role should prefer seated or object-linked space
activity role should prefer tactile or participatory space
rest role should prefer stillness-oriented space
closure role should prefer horizon / panorama / farewell space
```

Hard rule:

```text
one primitive cannot dominate multiple roles unless a fallback state is triggered
```

---

# L. Framing Mode Selection

```text
Arrival View
Landmark Reveal
Panorama
Environment First
Portrait Support
Activity Focus
Resting Stillness
Closure Horizon
```

---

# L2. Multi-Scene Viewpoint Diversity

Must ensure:

```text
no repeated angle
no repeated walkway
no repeated composition
no repeated dominant horizon type
no repeated subject-environment relationship
```

Viewpoint diversity should vary by:

```text
distance
height
orientation
path logic
foreground anchor
landmark relation
```

---

# L3. Panorama Composition Compatibility

AISceneEngine-v11 must support **ImagePrompt-v3.0 panorama requirement**.

All routed scenes for image generation must remain compatible with:

```text
9:16 vertical
panorama feel inside vertical frame
foreground + midground + background readability
environment-first composition
horizon support when zone permits
```

The engine must prefer environments that can visually sustain:

```text
wide-story composition
```

Not:

```text
tight portrait-only framing
```

---

# M. Semantic Signal Extraction

Outputs meaning-level signals:

```text
destination
landmark
tourism
relaxation
mobility
nature
arrival
exploration
pause
closure
```

---

# M2. Design Signal Extraction

Outputs function-level signals:

```text
visitor flow
economy
memory point
photo spot
arrival logic
rest logic
activity logic
transition logic
```

---

# M3. Repetition Risk Detection

AISceneEngine-v11 must score repetition risk before output.

Risk dimensions:

```text
location repetition
role repetition
view repetition
background repetition
landmark repetition
activity repetition
layout repetition
```

Suggested states:

```text
LOW
MEDIUM
HIGH
BLOCKED
```

Rule:

```text
MEDIUM or above must trigger anti-repetition adjustment
HIGH or BLOCKED must not pass to output unchanged
```

---

# N. Scene Routing Output Contract

```text
ZONE
DESIGN_AUTHORITY
SCENE_LIBRARY
SCENE_LIBRARY_PATH
SCENE_ROLE
SCENE_NUMBER
SCENE_PRIMITIVE
FRAMING_MODE
VIEWPOINT_TYPE
LANDMARK_REQUIREMENT
ECONOMY_PRESENCE
VISITOR_FLOW_ELEMENT
BACKGROUND_ACTIVITY_LAYER
MOTION_LAYER
SEMANTIC_SIGNALS
DESIGN_SIGNALS
REPETITION_RISK
ROUTING_NOTES
```

---

# N2. Destination Composition Planner

Must distribute:

```text
landmark
economy
flow
nature
panorama
activity
rest
closure
```

Across scenes.

Destination composition must feel like:

```text
a complete visitable system
```

Not:

```text
one place copied six times
```

---

# N3. Scene Expansion Output Layer

AISceneEngine-v11 must expose expansion-ready downstream output.

It should provide:

```text
role-resolved primitives
viewpoint recommendations
background activity suggestions
motion-safe environment hints
anti-repetition notes
```

Purpose:

```text
improve downstream consistency for ImagePrompt and VdoPrompt
```

---

# O. Default Fallback

Always return valid zone-safe output.

Fallback priority:

```text
detected zone safe output
→ nearest valid tourism-compatible output
→ Mountain-based safe output
```

---

# O2. Fallback Recovery Ladder

If routing fails, recover in this order:

```text
1. Keep zone, simplify role complexity
2. Keep zone, reduce landmark dependency
3. Keep zone, replace invalid primitive with valid primitive
4. Keep design authority, downgrade scene richness
5. Fall back to safe tourism destination composition
6. Fall back to Mountain-based safe output
```

Fallback must preserve:

```text
world validity
library validity
downstream prompt compatibility
non-repetition where possible
```

---

# P. Scene Integrity Rules

Must protect:

```text
environment purity
design authority
library integrity
world compatibility
role separation
primitive diversity
```

---

# P2. Landmark Identity Enforcement

Destination MUST include, when design authority requires it:

```text
landmark
memory point
economy
visitor flow
```

Landmark must not be overused as the dominant background anchor across all scenes.

---

# P3. Scene Purity Rule

A scene must remain:

```text
role-pure
zone-pure
primitive-clear
composition-clear
```

Not allowed:

```text
confused hybridization without world basis
mixed mountain/coastal visual collision
same-scene overload
environment clutter without role purpose
```

---

# Q. Visual Baseline

```text
clear daylight
clean environment
readable layers
destination clarity
environment readability
```

Emotion handled by:

```text
AIEpisodeEngine
```

---

# Q2. Environmental Motion Baseline

AISceneEngine-v11 must route scenes that support natural motion.

Preferred motion-capable environment signals:

```text
wind through trees
water movement
tourist movement
fabric-safe walking paths
wave action
stream flow
bird motion
café activity
```

This exists to support:

```text
ImagePrompt realism
VdoPrompt motion safety
StoryMomentum progression
```

---

# R. Prompt Compatibility Layer

AISceneEngine must remain compatible with:

```text
ImagePrompt
VdoPrompt
StoryMomentumEngine
AICharacterEngine
```

### ImagePrompt Compatibility

Must ensure:

```text
clear environment description
foreground-mid-background structure
clean composition for rendering
scene diversity across 6 prompts
```

### VdoPrompt Compatibility

Must ensure:

```text
motion-safe environment
walkable paths
camera-friendly layout
clear activity zones
```

### StoryMomentumEngine Compatibility

Must support:

```text
progression-friendly scenes
escalation-ready environment
clear hook environment
strong closing environment
non-flat environment sequence
```

---

# R2. ImagePrompt-v3.0 Compatibility Layer

AISceneEngine-v11 must explicitly align with ImagePrompt-v3.0.

Required compatibility outputs:

```text
9:16-safe environments
panorama-ready composition
no repeated scene logic
clear background activity
natural motion support
role-appropriate scene structure
```

The scene engine must generate routing that helps downstream image prompts satisfy:

```text
Hook      → arrival scene
Scene 1   → walking scene
Scene 2   → seated / café scene
Scene 3   → hand interaction scene
Scene 4   → rest / stillness scene
Closing   → wide scenic emotional closure
```

---

# S. Authority Boundary

AISceneEngine is:

```text
routing-only
design-aware
environment-focused
expansion-enabled
anti-repetition enforced
```

NOT:

```text
story engine
character engine
prompt engine
emotion engine
```

---

# T. Version History

```text
v9.0
SceneLibraryIndex integration
Scene Library enforcement
Routing stability upgrade

v10.0
Deprecated StoryGenProductOutputContract
Replace contract layer with modular prompt compatibility
Reference ImagePrompt, VdoPrompt, StoryMomentumEngine
Add Prompt Compatibility Layer
Strengthen modular architecture alignment
Fully decouple routing from narrative and prompt formatting
Align with AIEpisodeEngine v12 and AICharacterEngine v10 direction

v11.0
Add Scene Auto Expansion Engine
Add Anti-Repetition Engine
Add Zone Primitive Catalog
Add Repetition Risk Detection
Add Scene Role-to-Primitive Binding
Add panorama compatibility layer for ImagePrompt-v3.0
Add fallback recovery ladder
Strengthen multi-scene destination composition logic
Upgrade routing output contract with scene primitive, motion layer, background activity, and repetition risk
```

---

## Final Architecture (After v11.0)

```text
AIEngineRouter
→ brain (orchestration)

AISceneEngine
→ world + environment + scene expansion + anti-repetition

AIEpisodeEngine
→ story + sequencing

AICharacterEngine
→ identity + fashion

ImagePrompt
→ image structure

VdoPrompt
→ video structure

StoryMomentumEngine
→ retention + pacing
```

---

# 📂 .chatgpt/AI Engine/AI Character Engine.md

```text
Path: .chatgpt/AI Engine/AI Character Engine.md
Type: System Engine
Status: Production
```

---

# Structure

```text
A Authority Header
B Identity
C Core Mission
D Responsibility Boundary
E Production Stack Position
F Invocation Context
G Attachment Parsing
H Hero Identity Lock Engine
I Face Stability and Face-Visibility System
J Outfit Lock System
K Pose and Activity System
L Camera Composition Engine
M Product Highlight Engine
N Video Prompt Compatibility
O Prompt Contract Alignment
P Story Momentum Compatibility
Q World Structure Alignment
R Character Execution Pipeline
S Authority Boundary
T Face-Forward Character Visibility Lock (NEW)
U Back-Facing Rejection System (NEW)
V Hero-Driven Real-Life Behavior Engine (NEW)
W Expression and Eye-Connection Engine (NEW)
X Character-Led Scene Priority Rule (NEW)
Y Failure Detection and Hard Reject Matrix (NEW)
Z Version History
```

---

# A. Authority Header

Authority Source

```text
.chatgpt/System/ChornPlanet.md
```

World Structure Alignment

```text
.chatgpt/System/WorldArchitecture.md
```

Routing Authority Context

```text
.chatgpt/AI Engine/AI Engine Router.md
```

Narrative Compatibility Context

```text
.chatgpt/AI Engine/AI Episode Engine.md
```

Environment Routing Compatibility Context

```text
.chatgpt/AI Engine/AI Scene Engine.md
```

Prompt Contract Compatibility Context

```text
.chatgpt/Contract/ImagePrompt.md
.chatgpt/Contract/VdoPrompt.md
.chatgpt/Contract/StoryMomentumEngine.md
```

Authority Level

```text
Global System Governance
```

Activation Authority

```text
.chatgpt/System/ChornPlanet.md
```

Conflict Rule

```text
If governance conflicts occur,
.chatgpt/System/ChornPlanet.md takes precedence.

If world structure conflicts occur,
.chatgpt/System/WorldArchitecture.md takes precedence.

If routing conflicts occur,
.chatgpt/AI Engine/AI Engine Router.md takes precedence
for orchestration behavior only.

If episode sequencing conflicts occur,
.chatgpt/AI Engine/AI Episode Engine.md takes precedence
for narrative generation behavior only.

If environment routing conflicts occur,
.chatgpt/AI Engine/AI Scene Engine.md takes precedence
for scene routing behavior only.

If image prompt structure conflicts occur,
ImagePrompt takes precedence
for image prompt output requirements only.

If video prompt structure conflicts occur,
VdoPrompt takes precedence
for video prompt output requirements only.

If emotional pacing conflicts occur,
StoryMomentumEngine takes precedence
for momentum and retention behavior only.
```

---

# B. Identity

AICharacterEngine is the

```text
Character Rendering
Fashion Execution
Identity Preservation
Commerce Media Character Engine
```

for **ChornPlanet**.

It converts

```text
character requests
hero reference images
outfit references
items
scene routing signals
episode assignments
momentum-aware character needs
hero-driven visibility requirements
```

into

```text
character-compatible prompts
fashion execution logic
identity-preserving rendering instructions
motion-safe visual behavior
face-visible cinematic behavior
real-life human presence logic
```

This engine is responsible for **character fidelity, facial connection, and fashion readability**, not top-level
orchestration, world definition, or final package assembly.

---

# C. Core Mission

The engine must ensure

```text
hero identity stability
facial integrity
face visibility
hero-driven emotional connection
outfit readability
fashion presentation
commercial clarity
tourism compatibility
world-compatible character behavior
momentum-compatible visual continuity
real-life human believability
```

Every output must preserve

```text
identity
face stability
facial readability
outfit visibility
clean cinematic composition
action readability
prompt compatibility
```

The engine must protect the character from drift, melt, distortion, outfit collapse, continuity failure, and **viewer
disconnection caused by back-facing or face-hidden composition** across multi-scene production.

---

# D. Responsibility Boundary

AICharacterEngine is responsible for

```text
hero identity lock
facial stability
face-forward visibility logic
outfit rendering
pose execution
fashion motion behavior
item interaction logic
tourism-compatible activity behavior
camera-compatible character presentation
hero-driven real-life behavior
image and video prompt compatibility support
```

AICharacterEngine does not handle

```text
story arc
episode structure
hook strategy
destination routing
scene library selection
platform packaging
top-level orchestration
output packaging
prompt contract authority
world authority definition
```

These responsibilities belong to

```text
AIEpisodeEngine
AISceneEngine
AIEngineRouter
ImagePrompt
VdoPrompt
StoryMomentumEngine
```

AICharacterEngine may support downstream prompt composition, but it does not override routing, sequencing, or prompt
contract authority.

---

# E. Production Stack Position

AICharacterEngine operates as the

```text
character fidelity
face-visibility
fashion execution layer
```

within the ChornPlanet production system.

Typical flow:

```text
User Input
↓
AIEngineRouter
↓
AISceneEngine
↓
AIEpisodeEngine
↓
AICharacterEngine
↓
ImagePrompt / VdoPrompt compatible character output
```

This engine sits downstream from routing and narrative structure.

It executes character consistency within the already-selected narrative, environment, and momentum context, while
enforcing **human-centered visual connection**.

---

# F. Invocation Context

Character generation may activate through:

```text
AutoGen
StoryGenProduct
StoryGen
EpGen
Episode Scene Assignment
Image Prompt generation
Video Prompt generation
```

Typical example:

```text
AutoGen: <attachments>
AutoScene: coastal balcony
PostKeywords: summer dress
```

Router may invoke this engine directly or as part of a larger multi-engine workflow.

This engine must remain compatible with routed context from:

```text
AIEngineRouter
AISceneEngine
AIEpisodeEngine
ImagePrompt
VdoPrompt
StoryMomentumEngine
```

---

# G. Attachment Parsing

Attachments are classified as:

```text
Hero Reference Image
Character Image
Outfit Reference Image
Item Reference Image
Scene Reference Image
Logo Reference Image
```

Filename guidance:

```text
Hero   → Hero Reference
Outfit → Outfit Reference
Item   → Product Reference
Scene  → Scene Reference
Logo   → Logo Reference
```

Attachment usage priority:

```text
1 hero identity
2 facial impression and face angle tendency
3 outfit fidelity
4 item visibility
5 scene compatibility
6 logo compatibility when relevant
```

AICharacterEngine uses attachments to preserve character and fashion consistency, but does not perform orchestration
logic.

When hero references clearly show **front-facing, 3/4-facing, or expressive portrait success**, those references must
influence downstream composition preference.

---

# H. Hero Identity Lock Engine

Hero identity must remain consistent across all prompts and scenes.

Protected attributes:

```text
face structure
eyes
nose
lips
jawline
hairstyle
body proportion
age impression
beauty level
skin feel
expression family
```

All identity-preserving outputs should conceptually enforce:

```text
use attached hero reference as identity anchor
do not alter face
do not randomize character
maintain same woman or same man identity across all outputs
preserve recognizable beauty impression from hero reference
```

Identity priority:

```text
1 hero identity
2 face visibility
3 face stability
4 outfit readability
5 cinematic beauty
```

When conflict occurs between beauty stylization and identity preservation:

```text
identity preservation wins
```

When conflict occurs between scenic composition and face visibility:

```text
face visibility wins
```

This identity lock must remain compatible with:

```text
ImagePrompt
VdoPrompt
```

---

# I. Face Stability and Face-Visibility System

This engine protects facial integrity and ensures the face remains emotionally usable.

## Anti-Melt Face Stability Engine

Common risks:

```text
melt face
blurred jawline
asymmetrical eyes
distorted nose
unstable mouth
identity drift
```

Prompts and rendering guidance must enforce:

```text
stable facial anatomy
symmetrical features
defined nose bridge
clean lip line
clear eyes
identity-preserving portrait quality
```

## Facial Landmark Stability Matrix

Protected landmarks:

```text
eye alignment
nose centerline
lip symmetry
jawline contour
cheek symmetry
forehead proportion
hairline continuity
```

If visual complexity threatens identity:

```text
prioritize facial landmark stability
```

## Face-Visible Composition Rules

Required:

```text
visible face in most scenes
unobstructed eyes
clean nose bridge
visible lip line
stable jawline
recognizable expression
```

Avoid:

```text
hair covering eyes
object blocking face
extreme distortion angles
full back-facing silhouette
face completely hidden
```

## Face-Safe Lens Rules

Recommended lens logic:

```text
50mm editorial portrait
70mm premium portrait
85mm beauty close-up
```

Avoid:

```text
wide-angle close facial distortion
```

## Close-Up Stability Engine

When prompts contain:

```text
close-up
beauty portrait
face detail
hero moment
```

the system enforces:

```text
balanced facial framing
clear eyebrow definition
clean lip edge
stable chin contour
natural skin detail
emotional readability
```

## Motion Face Stability Engine

When motion exists:

```text
walking
runway
turning
tracking shot
speaking
```

the system ensures:

```text
stable head angle
controlled motion
clear eye visibility
predictable hair movement
controlled mouth shape
recognizable expression continuity
```

Avoid:

```text
fast chaotic motion
extreme head rotation
face hidden by hair
full body back-facing walk as default
```

## Seaside Wind Face Protection

For coastal scenes:

```text
soft directional breeze
controlled hair flow
clear facial visibility
```

Avoid:

```text
hair covering eyes
hair crossing nose
chaotic wind effects
```

## Flower Particle Safety

When particles exist:

```text
petals
flower particles
romantic atmosphere
```

the system protects:

```text
eyes
nose bridge
mouth centerline
chin contour
```

Particle density near face must remain low.

## Face Visibility Coverage Rule

For hero-driven story outputs:

```text
at least 4 of 6 prompts should show clear face visibility
remaining prompts may use partial profile or side angle
0 prompts may use fully hidden face unless explicitly justified by narrative exception
```

Narrative exception examples:

```text
single suspense reveal shot
single departure shot
single silhouette closing shot
```

Even under exception:

```text
back-facing shot must remain limited and must not dominate the sequence
```

---

# J. Outfit Lock System

Each prompt must clearly represent:

```text
one outfit only
```

unless higher-level narrative logic explicitly requires outfit transition across scenes.

Outfit attributes to preserve:

```text
fabric texture
pattern layout
color tone
garment structure
silhouette
neckline
strap design
length
fit logic
```

If episode structure assigns outfits:

```text
follow assignment strictly
```

If routing activates outfit rotation:

```text
respect routed outfit assignment
```

When conflict occurs between outfit fidelity and exaggerated motion styling:

```text
outfit readability wins
```

When conflict occurs between outfit visibility and back-facing composition:

```text
outfit readability must be preserved without hiding the face in unnecessary ways
```

This outfit system must remain compatible with:

```text
ImagePrompt
VdoPrompt
```

---

# K. Pose and Activity System

Character action must feel natural, readable, hero-centered, and compatible with both environment and outfit.

## Tourism Activity Binding

Examples:

```text
flower field walk
viewpoint photography
coastal promenade walk
coffee terrace pause
arrival with luggage
station waiting
balcony stillness
landmark observation
river touch
cup holding
sitting by window
light water play
soft glance
```

Activity must preserve:

```text
face visibility
outfit readability
identity lock
world compatibility
momentum readability
real-life believability
```

## Pose Library Engine

Every image should use different poses where multi-scene variation is required.

Examples:

```text
hero standing pose
gentle 3/4 turn pose
river-touch pose
cup-holding seated pose
soft profile standing pose
camera-aware glance pose
quiet smile pose
walking with partial face reveal
```

Avoid:

```text
pose repetition
identical framing
identical camera angle
awkward limb geometry
runway-only posing
full back-facing default pose
```

## Fashion Motion Engine

For motion scenes:

```text
runway walk
soft pivot
fabric sway
tourism arrival walk
gentle turn
controlled speaking gesture
water-touch motion
cup-lift motion
```

Motion must feel:

```text
elegant
controlled
commercial
natural
retention-friendly
human
```

Avoid:

```text
sports movement
chaotic motion
awkward steps
emotionless back-facing drift
```

## Real-Life Relatability Rule

Character behavior should resemble:

```text
moments people can imagine living
moments viewers emotionally project into
small believable human actions
```

Preferred moments:

```text
touching water
holding cup
soft smile after looking at scenery
turning to notice camera
quiet sitting
walking while thinking
resting by river
```

Avoid:

```text
empty model posing
lifeless scenic placement
emotionless standing for no reason
```

---

# L. Camera Composition Engine

Character prompts must remain compatible with camera logic.

Prompts should define:

```text
shot type
camera height
lens feeling
subject placement
movement compatibility
facial connection priority
```

Allowed shot types:

```text
full body hero
3/4 editorial
runway motion shot
lifestyle scene
cinematic wide shot
beauty close-up
mid-shot speaking frame
seated lifestyle portrait
river interaction mid-shot
profile emotional shot
```

Composition priority:

```text
1 face visibility
2 face stability
3 outfit readability
4 emotional readability
5 elegant body line
6 scene readability
```

If framing is provided by AISceneEngine or AIEpisodeEngine, AICharacterEngine must align character execution to that
framing rather than override it.

This layer must remain compatible with:

```text
ImagePrompt
VdoPrompt
```

## Hero-Centered Framing Rule

The subject must feel like:

```text
the center of the moment
the emotional anchor of the frame
the reason the viewer stops scrolling
```

Avoid:

```text
landscape dominating the hero
hero too small in frame without purpose
face unreadable because of scenic scale
```

---

# M. Product Highlight Engine

Product visibility must be clear when commerce relevance exists.

Focus areas:

```text
fabric texture
silhouette
print layout
neckline
movement of garment
item interaction
product readability
```

Avoid:

```text
background dominating product
pose hiding garment
cropped product details
face or hair obstructing hero product area
```

Product highlighting must remain compatible with ChornPlanet life-integrated commerce style unless stronger selling
emphasis is explicitly required by routing or story momentum context.

When the asset is hero-led rather than commerce-led:

```text
human connection still wins over static product display
```

---

# N. Video Prompt Compatibility

AICharacterEngine must support video-compatible character behavior when video prompts are required.

Compatibility requirements:

```text
stable identity during speech
controlled mouth shape
natural smile
clear facial readability
predictable motion continuity
speaking-safe facial structure
camera-aware human presence
```

Speech style compatibility default:

```text
Woman พูดด้วยความเร็วปานกลาง
พูดเป็นภาษาไทยอย่างชัดเจนและมั่นใจ
หน้าตายิ้มแย้มแจ่มใส
```

Avoid:

```text
wide-open mouth distortion
unnatural speech pose
identity collapse during motion
chaotic gesture timing
speaking with face hidden from camera
```

Video prompt structure authority belongs to:

```text
VdoPrompt
```

AICharacterEngine supports character stability only.

---

# O. Prompt Contract Alignment

When production flow is invoked by:

```text
StoryGenProduct
StoryGen
EpGen
```

AICharacterEngine must remain compatible with:

```text
ImagePrompt
VdoPrompt
```

This engine does not define or enforce final output order.

However, it must not generate character behavior that conflicts with:

```text
image prompt structure
video prompt compatibility
outfit rotation logic
identity lock requirements
timing-safe motion continuity
visual stability requirements
face-forward visibility requirements
```

Prompt contract enforcement authority belongs to:

```text
AIEngineRouter
ImagePrompt
VdoPrompt
```

---

# P. Story Momentum Compatibility

AICharacterEngine must remain compatible with momentum and retention logic defined by:

```text
StoryMomentumEngine
```

Character execution should support:

```text
hook visibility
emotion readability
scene-to-scene escalation
retention-friendly variation
non-repetitive visual rhythm
hero-first attention capture
```

Examples:

```text
Hook      → immediate human connection
Scene 1   → readable discovery energy
Scene 2   → relatable seated or interaction moment
Scene 3   → expressive hand or face interaction
Scene 4   → rest or emotional stillness
Closing   → soft emotional settling with recognizable face
```

This engine does not define momentum logic, but it must provide character behavior that supports it.

---

# Q. World Structure Alignment

This engine must remain compatible with the ChornPlanet World Layer.

World authority source:

```text
.chatgpt/System/WorldArchitecture.md
```

Supporting references may include:

```text
.chatgpt/System/World/WorldMap.md
.chatgpt/System/World/Continents.md
.chatgpt/System/World/Regions.md
.chatgpt/System/World/ZoneMasterIndex.md
.chatgpt/System/World/MTSNetwork.md
.chatgpt/System/World/MTSLines.md
.chatgpt/System/World/MTSStations.md
```

AICharacterEngine does not define geography, regions, zones, or mobility systems.

It must only ensure that character behavior remains compatible with:

```text
environment class
zone-aware placement
tourism activity realism
mobility-aware situations
station-compatible scenes
arrival logic
real-life human presence inside that world
```

For example, if the routed scene implies:

```text
airport gateway
harbor arrival
MTS station
mountain valley
river tourism
urban district
```

character action and styling must remain compatible with that world context.

---

# R. Character Execution Pipeline

```text
Input
↓
Attachment Parsing
↓
Hero Identity Lock
↓
Face Stability and Visibility Check
↓
Outfit Lock
↓
Pose and Activity Selection
↓
Camera Compatibility
↓
Product Highlight Support
↓
Image / Video Prompt Compatibility Check
↓
Momentum Compatibility Check
↓
Back-Facing Rejection Check
↓
Character-Compatible Prompt Rendering
```

When invoked inside a larger production flow, upstream routing and narrative sequencing remain outside this engine’s
scope.

---

# S. Authority Boundary

AICharacterEngine is responsible for:

```text
hero identity preservation
face stability
face visibility
outfit rendering fidelity
pose execution
activity realism
camera-compatible character presentation
product-compatible character visibility
image and video prompt compatibility support
momentum-compatible character behavior
hero-driven emotional readability
```

AICharacterEngine is not responsible for:

```text
top-level orchestration
platform packaging
episode structure
dialogue generation
scene routing authority
world authority definition
zone registry definition
mobility infrastructure definition
prompt contract authority
```

These belong to:

```text
AIEngineRouter
AIEpisodeEngine
AISceneEngine
WorldArchitecture layer
ChornPlanet authority
ImagePrompt
VdoPrompt
StoryMomentumEngine
```

AICharacterEngine must remain:

```text
identity-focused
face-visible
rendering-focused
world-compatible
momentum-compatible
non-duplicative
```

---

# T. Face-Forward Character Visibility Lock (NEW)

This is a critical hero-driven enforcement layer.

## Core Rule

For hero-led storytelling, the character must be visually available as a person, not merely as a scenic figure.

Required:

```text
front-facing shot
3/4-facing shot
side profile with readable face
partial turn with visible eyes and nose line
camera-aware glance
```

Preferred coverage target:

```text
at least 70% of prompts should show readable face
```

Acceptable non-front variations:

```text
soft profile
shoulder-turn glance
partial over-shoulder reveal
seated side view with visible face
```

Not acceptable as dominant pattern:

```text
full back-facing standing
full back-facing walking
silhouette with invisible face
tiny figure in landscape with unreadable face
```

## Emotional Reason

```text
face visibility builds emotional connection
emotional connection builds retention
retention builds follow behavior
```

## Execution Rule

If scenic beauty and face visibility compete:

```text
preserve face visibility first
```

---

# U. Back-Facing Rejection System (NEW)

This is a hard reject layer.

## Reject Conditions

Router or downstream prompt validation must reject any character prompt when:

```text
hero fully turns back to camera and face is not visible
hero is too far away to read face
hair fully hides face in a hero-led moment
fog, shadow, or object fully removes face visibility
multiple prompts repeat back-facing composition
```

## Allowed Exception Count

Within one 6-prompt image set:

```text
maximum 1 back-facing or near-back-facing prompt
```

Only if:

```text
narrative purpose is strong
other prompts preserve face continuity
that prompt is not the Hook unless explicitly approved
```

## Hook Restriction

For Hook prompts:

```text
back-facing non-face-visible composition is prohibited by default
```

Unless explicit override exists from higher-level direction.

## Video Restriction

For VDO prompts:

```text
speaking while full back-facing is prohibited unless face becomes visible during motion
```

---

# V. Hero-Driven Real-Life Behavior Engine (NEW)

Characters must feel like people living in ChornPlanet, not mannequins placed into scenery.

## Required Behavior Style

```text
small believable actions
light interaction with environment
moments of pause
moments of noticing
moments of feeling
moments of choosing
```

Examples:

```text
touching water
holding a cup
looking at light
soft smile after seeing scenery
turning because something caught attention
sitting quietly
walking with intention
resting hand on fabric
```

Avoid:

```text
empty fashion pose only
static tourism brochure posture
back-facing landscape admiration without human meaning
```

## Human Believability Rule

A viewer should be able to think:

```text
I can imagine being her
I can imagine this moment
this feels lived, not posed
```

---

# W. Expression and Eye-Connection Engine (NEW)

Expression must remain subtle, premium, and readable.

## Expression Family

Allowed expressions:

```text
soft smile
calm gaze
gentle curiosity
quiet happiness
thoughtful stillness
peaceful reflection
```

Avoid:

```text
blank expression
emotionless model face
overacting
extreme grin
dead scenic stare
```

## Eye-Connection Modes

Valid eye behavior:

```text
direct eye contact
soft near-camera glance
downward look during interaction
side glance with visible iris line
window-view reflection with readable eye direction
```

At least some prompts in a hero-led set should include:

```text
direct or near-direct viewer connection
```

This improves:

```text
scroll stop
memory
audience bonding
```

---

# X. Character-Led Scene Priority Rule (NEW)

Scene exists to support the character, not replace the character.

Priority order:

```text
1 character connection
2 identity visibility
3 emotional readability
4 outfit readability
5 scene beauty
6 background richness
```

If background depth, panorama, or atmosphere causes the character to become emotionally unreadable:

```text
reduce scenic dominance
increase hero prominence
```

For ChornPlanet viral storytelling:

```text
human-centered composition is preferred over pure landscape composition
```

---

# Y. Failure Detection and Hard Reject Matrix (NEW)

The engine or router must reject outputs if any of the following occur:

```text
Hook uses full back-facing composition without readable face
more than 1 prompt in a set hides face from camera
hero face is too small to read
face covered by hair in key moment
same back-facing composition repeated across multiple prompts
empty scenic standing without human action
expression unreadable in hero-driven clip
camera places landscape as dominant over hero in hook moment
```

Additional warning conditions:

```text
too many profile shots without eye visibility
too many scenic wide shots
too little real-life interaction
character feels like a model instead of a person
```

Corrective action priority:

```text
1 restore readable face
2 restore real-life action
3 restore emotional expression
4 reduce scenic dominance
5 re-render
```

---

# Z. Version History

```text
v8.0
Production-clean architecture
Removed duplicated episode logic
Contract-driven output structure

v9.0
Refactor into A–T section structure
Add #Structure
Refine authority boundary
Refine world structure compatibility
Reduce duplication with EpisodeEngine and Router
Shift social post and video prompt authority out of CharacterEngine
Optimize for minimum files and auto-workflow consistency

v10.0
Deprecated StoryGenProductOutputContract dependency
Replace monolithic contract alignment with modular prompt alignment
Reference ImagePrompt, VdoPrompt, and StoryMomentumEngine
Remove social post compatibility section
Update production stack for modular orchestration architecture
Apply spec-reference rule using spec names only

v11.0
Upgrade from modular character fidelity engine to hero-driven character connection engine
Add Face-Forward Character Visibility Lock
Add Back-Facing Rejection System
Add Hero-Driven Real-Life Behavior Engine
Add Expression and Eye-Connection Engine
Add Character-Led Scene Priority Rule
Add Failure Detection and Hard Reject Matrix
Strengthen face visibility from soft guideline to hard enforcement
Prevent non-face-visible back-facing hook generation by default
```

---

# 📂 .chatgpt/Contract/ImagePrompt.md

```text
Name: Image Prompt Contract
Type: Engine Output Contract (Image Only)
Scope: Master Production Prompts from StoryGenProduct / StoryGen
Status: ACTIVE (v4.1)
```

---

# Structure

```text
A Contract Purpose
B Contract Authority
C Scope and Activation
D Production Media Standards
E Output Structure
F Master Production Prompt Section
G Scene Role Mapping
H Attachment-Outfit Rule
I Outfit Rotation Rule
J Character Identity Lock
K Camera Standard
L Aspect Ratio Rule
M MTS Compatibility Rule
M1 Logo Asset Enforcement
N Contract Integrity Rule
O Engine Alignment
P Version History

Q Image Requirement
R Scene Diversity Rule
S Zone-Based Scene System
T Scene-to-Prompt Mapping Lock
U Panorama Composition Rule
V Background Activity Layer
W Natural Motion Layer
X Outfit Visibility Rule
Y Failure Detection Rule

Z Hero-Driven Visibility Rule (NEW)
AA Back-Facing Limitation Rule (NEW)
AB Hook Human Connection Rule (NEW)
AC Face Coverage Requirement (NEW)
AD Character-Led Composition Priority (NEW)
AE Real-Life Moment Requirement (NEW)
AF Scenic Dominance Control (NEW)
AG Prompt Rejection and Recovery Rule (NEW)
```

---

# A. Contract Purpose

This contract defines the **Image Prompt output structure** for:

```text
StoryGenProduct
StoryGen
```

It ensures all image outputs are:

```text
cinematic
consistent
narrative-linked
TikTok-ready
platform-scalable
environment-rich
non-repetitive
hero-driven
emotionally connectable
```

This contract governs **image prompt structure only**.

---

# B. Contract Authority

Enforced by:

```text
AIEngineRouter-v8.0
```

The router must guarantee:

```text
exactly 6 prompts generated
correct prompt order
outfit mapping correctness
character identity continuity
aspect ratio enforcement
scene diversity enforcement
hero visibility enforcement
contract integrity
```

Subordinate to:

```text
.chatgpt/System/ChornPlanet.md
```

Character visibility and hero connection support must remain compatible with:

```text
AICharacterEngine-v11.0
```

---

# C. Scope and Activation

Activated when:

```text
StoryGenProduct
StoryGen
```

This contract governs:

```text
Master Production Prompts only
```

This contract does NOT govern:

```text
video prompts
social posts
scene routing logic
character rendering logic
```

Handled by:

```text
AIEpisodeEngine
AISceneEngine
AICharacterEngine
```

---

# D. Production Media Standards

```text
4K resolution
2160 × 3840

STRICT 9:16 vertical

vertical cinematic storytelling composition
panorama depth allowed only when hero remains readable

85mm cinematic feel
f/1.8
cinematic depth of field

natural lighting priority
```

Must remain compatible with:

```text
TikTok-first production
short-form vertical platforms
```

---

# E. Output Structure

The system must generate exactly:

```text
6 Master Production Prompts
```

Rules:

```text
no additional prompts
no missing prompts
no merged prompts
```

---

# F. Master Production Prompt Section

Required order:

```text
Master Prompt — Hook
Master Prompt — Scene 1
Master Prompt — Scene 2
Master Prompt — Scene 3
Master Prompt — Scene 4
Master Prompt — Closing
```

Each prompt must include:

```text
subject
action
environment
background activity
lighting
camera framing
emotion
```

Each prompt must represent:

```text
1 complete cinematic still
1 narrative moment
1 outfit
```

Each prompt should describe the hero as:

```text
recognizable
emotionally readable
visually present
```

## 🔴 F1. Full Body Framing Lock (HARD REQUIREMENT)

```text
Full body visible from head to toe
head fully inside frame
top of head must not be cut
feet must not be cut
no partial body crop allowed
```

### Enforcement:

```text
Hook → MUST be full-body OR 3/4 with full head visible
Scene 1–4 → minimum 2 full-body shots required
Closing → must not crop head
```

### Reject if:

```text
head cropped
chin cropped
legs cut unintentionally
AI zooms too close without instruction
```

---

## 🔴 F2. Safe Margin Composition Lock (ANTI-CROP SYSTEM)

```text
safe margin above head (5–15% frame height)
safe margin below feet
subject not touching frame edges
```

### Purpose:

```text
prevent AI auto-tight cropping
protect TikTok UI safe area
ensure editing flexibility
```

---

## 🔴 F3. Vertical Composition Lock (STRICT)

```text
vertical composition only
portrait framing
subject centered or rule-of-thirds aligned
leading lines guide toward subject
```

Reject if:

```text
horizontal feel
landscape dominance
subject too small
```

---

## 🔴 F4. Aspect Ratio Enforcement (HARD LOCK)

```text
aspect ratio 9:16 ONLY
resolution 2160 × 3840 ONLY
TikTok/Reels native format
```

Reject if:

```text
square output
landscape output
cropped vertical simulation
```

---

# 🧠 CRITICAL BEHAVIOR FIX (NEW)

## 🔴 F5. Camera Distance Lock (ANTI-ZOOM ERROR)

```text
camera distance explicitly defined:
- full body → long shot
- 3/4 → medium-long shot
- close → chest-up only when specified
```

Reject if:

```text
AI zooms into torso unintentionally
face too large without instruction
outfit lost due to zoom
```

---

## 🔴 F6. Face Visibility Priority Lock (UPGRADE AC + Z)

```text
face must be clearly readable in:
- Hook (MANDATORY)
- at least 4/6 prompts

eyes or expression visible in:
- minimum 2 prompts
```

Reject if:

```text
face blurred
face too small
hair blocking face
back-facing hook
```

---

## 🔴 F7. Hero Scale Control (ANTI-TINY HUMAN)

```text
hero occupies 40%–75% of vertical frame height
```

Reject if:

```text
hero too small
landscape dominates
```

---

## 🔴 F8. Prompt Explicit Framing Tokens (NEW REQUIRED SYNTAX)

Every prompt MUST include:

```text
[Framing]
full body / 3/4 / mid / close

[Head Rule]
head fully visible, no crop

[Aspect Ratio]
9:16 vertical
```

---

# 🧩 INTEGRATION WITH EXISTING SYSTEM

## Upgrade Mapping

| Old Section       | Upgrade                         |
|-------------------|---------------------------------|
| K Camera Standard | + Camera Distance Lock          |
| L Aspect Ratio    | → HARD LOCK                     |
| U Panorama Rule   | → subordinate to Hero Scale     |
| Z–AG Hero Rules   | → strengthened with enforcement |

---
---

# G. Scene Role Mapping

```text
Hook      → arrival / curiosity trigger / immediate human connection
Scene 1   → movement / discovery
Scene 2   → seated or interaction moment
Scene 3   → hands activity / expression / tactile behavior
Scene 4   → rest / stillness / emotional settling
Closing   → emotional closure / scenic resolution with readable hero
```

Must align with:

```text
AIEpisodeEngine narrative structure
```

---

# H. Attachment-Outfit Rule

```text
1 prompt = 1 outfit
```

Rules:

```text
outfit must be visually clear
no outfit blending
```

If the attachment includes a strong hero reference image, prompt construction must preserve:

```text
hero identity first
outfit second
```

---

# I. Outfit Rotation Rule

```text
deterministic rotation only
no randomness
```

Outfit rotation must not break:

```text
hero continuity
hero visibility
real-life believability
```

---

# J. Character Identity Lock

```text
same face
same hairstyle or tightly compatible styling
same body proportion
same age impression
same beauty level
same recognizable hero identity
```

Handled by:

```text
AICharacterEngine-v11.0
```

---

# K. Camera Standard

```text
85mm cinematic feel

priority:
1 face visibility
2 emotional readability
3 outfit visibility
4 environmental storytelling
5 motion capture

avoid:
static posing
studio look
hero too small in frame
non-readable face in key moments
```

Preferred shot families:

```text
mid shot
3/4 portrait
mid-close interaction shot
seated lifestyle portrait
editorial full-body with readable face
close-up emotional portrait
```

---

# L. Aspect Ratio Rule

```text
9:16 ONLY
2160 × 3840 ONLY
```

---

# M. MTS Compatibility Rule

If scene includes:

```text
MTS train
MTS station
```

Output must align with:

```text
WorldArchitecture mobility layer
```

Rules:

```text
no breaking world consistency
no incorrect train design
```

---

# M1. Logo Asset Enforcement

Logo source:

```text
Use ONLY logo from attached file
Do NOT generate or redesign logo
```

Rendering rules:

```text
flush mounted to surface
coplanar with object
embedded as display screen
slow rotation (if animated context applied)
```

Prohibited:

```text
no floating logo
no detached logo
no redesign
no 3D tilt
no fast rotation
```

---

# N. Contract Integrity Rule

The following are NOT allowed:

```text
generating fewer than 6 prompts
generating more than 6 prompts
changing prompt order
merging prompts
splitting prompts
adding extra sections
```

Router must enforce:

```text
strict structural integrity
```

---

# O. Engine Alignment

This contract must remain aligned with:

```text
AIEngineRouter-v8.0
AIEpisodeEngine-v12.0
AISceneEngine-v10.0
AICharacterEngine-v11.0
ChornPlanet-v29.0
WorldArchitecture-v2.0
```

Role alignment:

```text
AIEngineRouter      → enforcement
AIEpisodeEngine     → narrative structure
AISceneEngine       → scene routing
AICharacterEngine   → identity + face visibility + expression + real-life behavior
WorldArchitecture   → world consistency
ChornPlanet         → governance
```

---

# P. Version History

```text
v1.0
Initial extraction

v2.0
Structural refinement

v3.0
Add cinematic enforcement layer
Add panorama requirement
Add scene diversity system
Add zone-based routing
Add motion + background rules
Add failure detection system
Upgrade camera + composition standard

v4.0
Upgrade from scenery-first prompt contract to hero-driven image contract
Align with AICharacterEngine-v11.0
Add hero visibility rule
Add back-facing limitation
Add human connection hook rule
Add face coverage requirement
Add character-led composition priority
Add real-life moment requirement
Add scenic dominance control
Add prompt rejection and recovery rule
```

---

# Q. Image Requirement

```text
require 9:16 vertical ONLY
require 4K resolution

NO TEXT:
- no captions
- no typography
- no watermark
- no UI
- no logo (unless required by MTS)
```

Image output must remain:

```text
clean
human-centered
social-ready
```

---

# R. Scene Diversity Rule

```text
all 6 prompts MUST be different scenes or clearly different narrative moments
```

NOT ALLOWED:

```text
same location reused with near-identical framing
same angle variation only
same background reuse without narrative difference
same pose repeated
same scenic logic repeated without human progression
```

Variation must include one or more of:

```text
different activity
different camera relation
different emotional role
different interaction
different environmental sub-location
```

---

# S. Zone-Based Scene System

## Zone1 Mountain

```text
misty mountains
cliff viewpoint
mountain café
stream
riverside huts
large trees
birds
wooden trail
```

## Zone2 Coastal

```text
beach
shoreline
coastal café
chairs
palm walkway
shell picking
sand resting
river-mouth landscape
```

Background options:

```text
tourists
café life
boats
flowers
soft environmental depth
```

## Zone11 Green Rural

```text
rice field
cassia tree
hut
stream
banana / bamboo
rural café
cycling
```

## Zone21 River Valley

```text
waterfall
stream
dam
camping
nature café
cycling
riverside walk
rock interaction
```

Zone use must support:

```text
real-life human activity
hero-led storytelling
```

---

# T. Scene-to-Prompt Mapping Lock

```text
Hook      → arrival / immediate attention moment
Scene 1   → movement / walking / entering
Scene 2   → sitting / pause / café / reflective interaction
Scene 3   → hand interaction / tactile activity / object interaction
Scene 4   → emotional stillness / soft expression / rest
Closing   → wide emotional closure with readable hero
```

This mapping is mandatory unless explicitly overridden by higher-level narrative design.

---

# U. Panorama Composition Rule

Panorama depth inside a vertical frame is allowed only when all of the following remain true:

```text
foreground subject is readable
midground supports story
background adds depth
hero remains emotionally visible
```

Must include:

```text
foreground subject
midground support
background depth
```

Should include horizon where scene logic supports it, but horizon is not allowed to weaken hero readability.

Not allowed:

```text
panorama dominating hero
landscape-first framing that makes face unreadable
tiny hero for visual spectacle only
```

---

# V. Background Activity Layer

Background should include life where appropriate:

```text
tourists
environment motion
furniture
boats
birds
flowing water
mist depth
light beams
objects that imply lived world
```

Background activity must support rather than compete with the hero.

Not allowed:

```text
background stealing emotional focus from hero
background clutter obscuring outfit or face
```

---

# W. Natural Motion Layer

Each scene should include motion or implied motion where appropriate:

```text
wind
water
fabric movement
human movement
hand interaction
light movement
mist drift
```

Natural motion must strengthen:

```text
real-life feeling
scene freshness
retention rhythm
```

Avoid:

```text
motionless mannequin feeling
static brochure posing
```

---

# X. Outfit Visibility Rule

Outfit must be:

```text
clearly visible
clearly shaped
fabric movement visible when relevant
lighting enhances texture
compatible with activity
```

Outfit visibility must not require hiding the face or turning the full back to camera in unnecessary ways.

Preferred:

```text
3/4 turn
front-facing
profile with readable outfit silhouette
seated interaction with visible garment structure
```

---

# Y. Failure Detection Rule

Router MUST reject if:

```text
text appears
scene duplicated
background empty without narrative reason
no motion or implied motion
outfit unclear
portrait-style beauty framing dominates every scene
hero identity drifts
```

Additional hard reject triggers are defined in sections Z–AG.

---

# Z. Hero-Driven Visibility Rule

This is a mandatory rule for hero-led image generation.

Every 6-prompt set must be designed so that the viewer can emotionally recognize the hero as a person.

Required hero visibility behavior:

```text
hero should be readable as a person in the frame
face should be visible in most prompts
expression or eye direction should be readable in key prompts
```

Preferred standard:

```text
at least 4 of 6 prompts show readable face
at least 2 of 6 prompts show strong expression or eye connection
```

---

# AA. Back-Facing Limitation Rule

Back-facing composition is restricted.

Not allowed as default:

```text
full back-facing hook
multiple back-facing prompts in same set
hero turned away with no readable face in key emotional moments
```

Allowed only under strict limit:

```text
maximum 1 back-facing or near-back-facing prompt per 6-prompt set
```

Only if:

```text
narrative purpose is clear
other prompts restore face visibility
that prompt is not the Hook by default
```

If back-facing composition weakens connection:

```text
replace with 3/4 turn, profile, or shoulder-turn reveal
```

---

# AB. Hook Human Connection Rule

Hook must stop scroll through **human connection first**, not scenery first.

Required hook qualities:

```text
recognizable hero
readable face or near-face reveal
clear emotional or curiosity trigger
immediate character presence
```

Preferred hook patterns:

```text
soft eye contact
3/4 turn with expression
real-life action moment
emotionally charged stillness with readable face
```

Not allowed for hook:

```text
pure landscape hook with tiny hero
full back-facing silhouette hook
empty scenic arrival with no human connection
```

---

# AC. Face Coverage Requirement

Across a 6-prompt set, face visibility must follow:

```text
minimum 4 prompts with readable face
minimum 1 prompt with strong eye area visibility
minimum 1 prompt with close or mid-close emotional readability
```

Face may be shown as:

```text
front-facing
3/4-facing
soft profile
shoulder-turn reveal
seated face angle
close portrait
```

Not acceptable:

```text
face hidden by hair
face too small to read
fog fully hiding face
object blocking face in hero-led moment
```

---

# AD. Character-Led Composition Priority

Prompt composition priority order is:

```text
1 character connection
2 identity readability
3 emotional readability
4 outfit readability
5 environmental storytelling
6 background richness
```

If composition becomes too scenic and weakens the hero:

```text
reduce scenic dominance
bring hero forward
change angle
increase face readability
```

---

# AE. Real-Life Moment Requirement

At least 3 prompts in each 6-prompt set should depict a believable human moment.

Examples:

```text
touching water
holding cup
looking at light
resting hands on fabric
soft seated pause
walking with visible thought
quiet smile
turning after noticing something
```

Avoid:

```text
all prompts feeling like fashion posing only
all prompts feeling like tourism brochure posing
all prompts feeling like static scenic placement
```

The image set should feel:

```text
lived
felt
human
```

---

# AF. Scenic Dominance Control

Scenic beauty is important, but cannot overpower the hero.

Reject or revise if:

```text
landscape becomes the main subject without narrative intent
hero is too small in frame
face readability is sacrificed for panoramic beauty
background overwhelms emotion
```

Corrective guidance:

```text
move camera closer
use 3/4 framing
reduce background dominance
add human action
restore facial readability
```

---

# AG. Prompt Rejection and Recovery Rule

Router must reject and regenerate prompts when any of the following occur:

```text
Hook is full back-facing without readable face
more than 1 prompt hides the face from camera
hero face is too small in key prompts
same scenic logic repeats without human progression
image set feels scenery-first instead of hero-first
real-life behavior is missing
expression unreadable in key moments
```

Recovery order:

```text
1 restore readable face
2 restore human action
3 restore emotional expression
4 reduce scenic dominance
5 regenerate prompt
```

---

# AH. 🎯 FINAL MASTER PROMPT TEMPLATE

```text
[Framing]
Full body shot from head to toe
head fully visible, no crop
safe margin above head and below feet

[Aspect Ratio]
9:16 vertical, 2160x3840

[Camera]
85mm cinematic
long shot (full body distance)
subject occupies 50–70% of frame

[Subject]
Young Asian woman, same identity (LOCK)

[Action]
walking naturally while holding coffee cup

[Environment]
lush green rice field, wooden path, stream, banana trees, hut, distant mountains

[Lighting]
soft golden morning light

[Composition]
vertical composition, subject centered, leading lines

[Quality]
ultra realistic, luxury editorial, 4K

[Constraints]
no text, no watermark, no distortion, no tattoo
```

---

# Version History

v4.1
Added item F1-F8
Added item "# AH. 🎯 FINAL MASTER PROMPT TEMPLATE"

----------------

# .chatgpt/Contract/StoryMomentumEngine.md

```
Name: StoryMomentumEngine Contract
Version: StoryMomentumEngine-v1.0
Type: Viral Story Optimization Engine
Scope: Enhance Story Narrative → Viral Short-Video Caption
Status: Production Standard
```

---

# Structure

```
A. Contract Purpose
B. Engine Role in Content Pipeline
C. Input Source
D. Momentum Generation Pipeline
E. Viral Hook System
F. Emotion Injection System
G. TikTok Retention Writing
H. Narrative Momentum Model
I. Algorithm Trigger Layer
J. Caption Structure Rules
K. Hashtag Optimization Engine
L. Content Safety Rules
M. Engine Compatibility
N. Design Philosophy
Version History
```

---

# A. Contract Purpose

StoryMomentumEngine is a **viral story optimization engine** used in the ChornPlanet AI production platform.

Its purpose is to transform a **story narrative** into a **high-retention short-video caption** optimized for discovery
and engagement on platforms such as:

```
TikTok
Instagram Reels
YouTube Shorts
```

The engine injects **viral storytelling mechanics** into the narrative while preserving the original scene context.

---

# B. Engine Role in Content Pipeline

StoryMomentumEngine operates after narrative generation.

Content pipeline:

```
Master Production Prompt
        ↓
StoryWriter
        ↓
StoryMomentumEngine
        ↓
StoryWriterCommerce
        ↓
Final Caption Output
```

This architecture ensures:

```
clean story generation
viral optimization layer
commerce integration layer
```

---

# C. Input Source

StoryMomentumEngine receives input from:

```
StoryWriter Narrative Output
```

The engine must **not alter the scene context** but may optimize:

```
sentence rhythm
emotional pacing
visual emphasis
caption readability
```

---

# D. Momentum Generation Pipeline

The engine must apply the following transformation pipeline:

```
Narrative Input
        ↓
Hook Detection
        ↓
Emotion Amplification
        ↓
Narrative Momentum Injection
        ↓
Retention Formatting
        ↓
Algorithm Trigger Integration
        ↓
Momentum Caption Output
```

Each stage must preserve the original story meaning.

---

# E. Viral Hook System

The engine must generate a **scroll-stop opening line**.

Hook characteristics:

```
visual curiosity
emotional curiosity
scene discovery
calm mystery
```

Examples:

```
เช้าวันหนึ่งในหุบเขาที่เงียบที่สุด
หมอกบางลอยผ่านทุ่งดอกไม้สีขาว
```

Hook rules:

```
must appear in the first sentence
must trigger visual imagination
must be short
```

Purpose:

```
increase scroll stop probability
increase watch retention
```

---

# F. Emotion Injection System

The engine injects **emotional resonance** into the narrative.

Emotion categories used by ChornPlanet:

```
peaceful discovery
quiet happiness
nature admiration
travel freedom
slow living
```

Emotion must remain **subtle and cinematic**, not exaggerated.

Example:

```
ลมภูเขาพัดผ่านเบาๆ
เหมือนเวลาทั้งหุบเขากำลังเดินช้าลง
```

---

# G. TikTok Retention Writing

Captions must follow **retention writing structure**.

Rules:

```
short lines
natural pacing
visual rhythm
4–8 lines recommended
```

Example format:

```
เช้าวันหยุดในหุบเขาเงียบสงบ
หมอกบางลอยผ่านทุ่งดอกไม้สีขาว

เธอเดินช้าๆ บนทางไม้เล็กๆ
ลมภูเขาพัดผ่านเส้นผมเบาๆ
```

This structure improves:

```
read completion rate
viewer retention
caption readability
```

---

# H. Narrative Momentum Model

StoryMomentumEngine must introduce **micro-story progression**.

Momentum structure:

```
Scene introduction
Character presence
Emotional observation
Quiet reflection
```

Example:

```
หมอกลอยผ่านทุ่งดอกไม้
น้ำตาลเดินช้าๆ บนทางไม้

ลมภูเขาพัดผ่านเส้นผม
เหมือนช่วงเวลาที่โลกทั้งใบเงียบลง
```

This model creates **narrative movement even in short captions**.

---

# I. Algorithm Trigger Layer

The engine may introduce **algorithm-friendly keywords** aligned with the story theme.

Example trigger categories:

```
travel discovery
nature escape
fashion outfit
quiet moments
vacation mood
```

Keywords must be integrated naturally within the narrative.

Example:

```
การเดินทางที่เรียบง่าย
บางครั้งกลับเป็นช่วงเวลาที่สวยที่สุด
```

Avoid:

```
spam keywords
forced marketing language
```

---

# J. Caption Structure Rules

Final caption must follow this structure:

```
Viral Hook

Scene Narrative

Emotional Reflection
```

Example structure:

```
Hook

Narrative lines

Reflection line
```

Recommended caption length:

```
120–260 characters
```

Maximum:

```
400 characters
```

---

# K. Hashtag Optimization Engine

StoryMomentumEngine must generate **exactly 5 hashtags**.

Rules:

```
5 hashtags total
last hashtag must always be #ChornPlanet
```

The first four hashtags must optimize reach.

Recommended categories:

```
fashion
travel
nature
lifestyle
```

Example output:

```
#TravelMoments
#NatureEscape
#OutfitOfTheDay
#SlowLiving
#ChornPlanet
```

Hashtags must be:

```
short
clear
high discoverability
```

---

# L. Content Safety Rules

The engine must enforce the following restrictions:

```
no sexual content
no explicit descriptions
no political messaging
no violent themes
```

Content must remain appropriate for:

```
global social media platforms
tourism promotion
fashion storytelling
```

---

# M. Engine Compatibility

StoryMomentumEngine integrates with:

```
StoryWriter
StoryWriterCommerce
StoryGenProduct
AIEpisodeEngine
TikTok Commerce Engine
```

This engine functions as the **viral optimization layer** of the ChornPlanet storytelling system.

---

# N. Design Philosophy

StoryMomentumEngine follows the ChornPlanet storytelling principle:

```
simple scenes
emotional subtlety
visual storytelling
short cinematic moments
```

The goal is to transform ordinary captions into **viral-ready storytelling moments** optimized for short-video
platforms.

---

# O. Final Engine Architecture

หลังจากมี Engine นี้ ระบบของคุณจะกลายเป็น

```
Master Prompt
      ↓
StoryWriter
      ↓
StoryMomentumEngine
      ↓
StoryWriterCommerce
      ↓
TikTok Viral Caption + Product + Hashtags
```

ซึ่งถือว่าเป็น **AI Short-Video Story Production Stack เต็มระบบ**

สำหรับ

```
tourism storytelling
fashion commerce
viral social media content
```

---

# Version History

```
v1.0 Initial Release
```

---
