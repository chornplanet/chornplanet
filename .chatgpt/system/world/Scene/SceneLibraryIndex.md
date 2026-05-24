# .chatgpt/System/World/Scene/SceneLibraryIndex.md

```text
Type: Index Registry
Path: .chatgpt/System/World/Scene/SceneLibraryIndex.md
Version: SceneLibraryIndex-v1.0
Status: Approved
```

---

# Structure

```text
A Authority Header
B Identity
C Core Purpose
D Index Scope
E Scene Library Registry
F Scene Library Classification
G Routing Integration (AISceneEngine)
H Expansion Protocol
I Governance Boundary
J Version History
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

Scene Library Sources

```text
.chatgpt/System/World/Scene/Mountain.md
.chatgpt/System/World/Scene/Coastal.md
```

AI Integration Context

```text
.chatgpt/AI Engine/AI Scene Engine.md
```

Authority Level

```text
Scene Library Index Authority
```

Conflict Rule

```text
If governance conflicts occur,
.chatgpt/System/ChornPlanet.md takes precedence.

If world structure conflicts occur,
.chatgpt/System/WorldArchitecture.md takes precedence.

If scene definition conflicts occur,
the individual Scene Library files take precedence.

This file does not define scene logic.
It only registers and organizes scene libraries.
```

---

# B. Identity

SceneLibraryIndex is the

```text
central registry of all Scene Libraries
```

within the ChornPlanet World Layer.

It acts as the

```text
single source of truth for scene library discovery
```

used by:

```text
AISceneEngine
AIEngineRouter
AIEpisodeEngine
System-level routing logic
```

SceneLibraryIndex does not contain scene definitions.

It only defines:

```text
what libraries exist
where they are located
how they are classified
how they should be selected
```

---

# C. Core Purpose

The index exists to:

```text
standardize scene library discovery
enable deterministic routing
separate library identity from routing logic
support scalable world expansion
prevent duplicated or fragmented scene systems
```

It ensures that all scene routing flows through:

```text
SceneLibraryIndex → Scene Library → Scene Output
```

instead of direct hard-coded references.

---

# D. Index Scope

Initial version includes:

```text
Mountain Scene Library
Coastal Scene Library
```

Future expansions may include:

```text
Urban Scene Library
Residence Scene Library
Hybrid Scene Library
Special Zone Scene Libraries
```

This file is designed to scale without breaking existing routing behavior.

---

# E. Scene Library Registry

## Registered Scene Libraries

---

### 1. Mountain Scene Library

```text
NAME
Mountain

TYPE
Environment Scene Library

PATH
.chatgpt/System/World/Scene/Mountain.md

STATUS
Approved

ZONE COMPATIBILITY
Mountain

PRIMARY DESIGN AUTHORITY
Tourism Destination Design

CORE IDENTITY
Luxury Alpine Mountain Environment
Living Corner Viewpoint
Flower Valley + Waterfall + Ridge System

CORE FEATURES
Flower Valley
Waterfall System
Alpine Ridge
Mountain Terrace
Tourism Viewing Platforms
Nature Leisure Spaces

STATION COMPATIBILITY
Yes (Mountain MTS Station Layer)

AISceneEngine CLASS
Mountain Authority
```

---

### 2. Coastal Scene Library

```text
NAME
Coastal

TYPE
Environment Scene Library

PATH
.chatgpt/System/World/Scene/Coastal.md

STATUS
Approved

ZONE COMPATIBILITY
Coastal

PRIMARY DESIGN AUTHORITY
Tourism Destination Design

CORE IDENTITY
Luxury Tropical Coastal Environment
Living Corner Viewpoint
Beach + Ocean + Marina System

CORE FEATURES
White Sand Beach
Lagoon Bay
Marina Harbor
Coastal Cliff
Resort Terrace
Market Promenade

STATION COMPATIBILITY
Yes (Coastal MTS Station Layer)

AISceneEngine CLASS
Coastal Authority
```

---

# F. Scene Library Classification

Scene libraries are categorized into:

```text
Environment Scene Library
→ Mountain
→ Coastal
```

Future classification layers:

```text
Urban Scene Library
Residence Scene Library
Hybrid Scene Library
Special Purpose Scene Library
```

Classification is used by:

```text
AISceneEngine
for library selection
```

---

# G. Routing Integration (AISceneEngine)

AISceneEngine must use SceneLibraryIndex as:

```text
the first reference point
for selecting scene libraries
```

Routing flow:

```text
AutoScene Input
↓
Zone Detection
↓
SceneLibraryIndex Lookup
↓
Scene Library Selection
↓
Scene Routing Output
```

Mapping rules:

```text
Mountain signals → Mountain Library
Coastal signals → Coastal Library
```

AISceneEngine must NOT:

```text
bypass SceneLibraryIndex
hardcode library paths
invent non-registered libraries
```

---

# H. Expansion Protocol

When adding a new scene library:

## Step 1

Create new library file:

```text
.chatgpt/System/World/Scene/{LibraryName}.md
```

## Step 2

Define:

```text
identity
environment logic
scene structure
station compatibility
design authority compatibility
```

## Step 3

Register inside SceneLibraryIndex:

```text
NAME
TYPE
PATH
VERSION
STATUS
ZONE COMPATIBILITY
DESIGN AUTHORITY
CORE IDENTITY
CORE FEATURES
AISceneEngine CLASS
```

## Step 4

Update AISceneEngine compatibility if needed

---

# I. Governance Boundary

SceneLibraryIndex is responsible for:

```text
scene library registry
library classification
library discovery structure
routing entry point definition
```

SceneLibraryIndex is NOT responsible for:

```text
scene design logic
scene composition rules
prompt generation logic
world geography definition
mobility infrastructure definition
```

These belong to:

```text
Scene Library files
WorldArchitecture
MTSNetwork / Lines / Stations
AISceneEngine
```

---

# J. Version History

```text
v1.0
Initial Scene Library Index
Register Mountain and Coastal libraries
Define registry structure
Define AISceneEngine integration
Enable scalable scene system architecture
```

---