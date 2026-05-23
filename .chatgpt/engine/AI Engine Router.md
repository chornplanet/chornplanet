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
T2 Expanded Workflow for StoryGenProduct
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
StoryGenProduct  → AIEpisodeEngine + AISceneEngine + AICharacterEngine

EpGenKid         → KidZone
StoryGenKid      → KidZone

AutoGen          → AICharacterEngine
AutoScene        → AISceneEngine
```

Routing note:

```text
StoryGenProduct is no longer an episode-only route.
It is a full scene-aware orchestration route by default.
```

---

# F. Command Priority

```text
EpGenKid
EpGen
StoryGenProduct
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
StoryGenProduct + AutoScene
→ at least Expanded

StoryGenProduct + tourism / lifestyle / destination signals
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
AISceneEngine + AIEpisodeEngine + AICharacterEngine + ImagePrompt + VdoPrompt + StoryPostEngine
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
StoryGenProduct with tourism, lifestyle, zone, travel, beach, mountain, cafe, destination signals
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

## StoryPostEngine

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
(+ optional StoryPostEngine)
```

## StoryGenProduct

```text
AISceneEngine
→ AIEpisodeEngine
→ AICharacterEngine
→ ImagePrompt / VdoPrompt / StoryPostEngine
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
StoryGenProduct must use AISceneEngine-v11 when environment diversity matters.
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
StoryPostEngine
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
StoryPostEngine pacing beat
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

# T2. Expanded Workflow for StoryGenProduct

```text
StoryGenProduct Input
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
route to ImagePrompt-v3.0 / VdoPrompt / StoryPostEngine as needed
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
StoryPostEngine
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
Modularized ImagePrompt / VdoPrompt / StoryPostEngine
Added mode-based orchestration
Added dynamic overlay decision
Enabled batch and parallel execution foundation
Removed monolithic contract dependency

v9.0
Align with AISceneEngine-v11.0
Align with ImagePrompt-v3.0
Add Scene Complexity Classification
Add Scene-Aware Orchestration Profiles
Add Default Engine Route Matrix for StoryGenProduct
Add ImagePrompt-v3.0 Routing Enforcement
Add Scene System Routing Layer
Add Anti-Repetition Enforcement Bridge
Add Role-to-Prompt Synchronization Layer
Add Panorama Composition Selection
Upgrade StoryGenProduct to destination-aware default routing when environment-rich
```

---
