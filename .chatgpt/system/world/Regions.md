# .chatgpt/System/World/Regions.md

```text
Name: ChornPlanet Regions
Version: Regions-v1.0
Type: Regional Structure Registry
Scope: Existing Zone Grouping by Regional Layer
Authority: Subordinate to .chatgpt/System/World/Continents.md
```

---

# A. Purpose

This file defines the **regional layer of ChornPlanet** within the standardized world structure.

Its purpose is to organize the official zones from `.chatgpt/System/World/Zones/Zone List.md` into a **clear geographic and functional regional hierarchy**.

This file supports:

```text
scene placement
zone grouping
continent alignment
MTS route planning
future migration of zones out of ChornPlanet.md
```

The regional layer sits between continents and zones:

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

This file does not redefine civilization authority.

`ChornPlanet.md` remains the **highest authority**.

---

# B. Authority

This file operates under:

```text
.chatgpt/System/ChornPlanet.md
.chatgpt/System/WorldArchitecture.md
.chatgpt/System/World/Continents.md
```

Authority chain:

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
Zones/Zone List.md
```

Regions organize zones within continents to create a coherent world structure.

---

# C. Key Principle — Phase1

```text
If it does not map an existing asset
→ do not add it yet
```

Regions must exist only to support **official zones listed in `.chatgpt/System/World/Zones/Zone List.md`**.

This ensures:

```text
minimal complexity
clean architecture
stable AI scene generation
future scalability
```

---

# D. Region Structure Rule

Each region must define:

```text
Region ID
Region Name
Assigned Continent
Purpose
Assigned Zones
```

Rules:

```text
Every region belongs to exactly 1 continent
Every zone belongs to exactly 1 region
```

Regions act as **organizational geography** rather than detailed political territories.

---

# E. Regions

Phase-1 uses **7 operational regions**.

These regions are designed to group the current official zones without adding unnecessary planetary complexity.

---

## Region01 — Highland Nature Region

```text
Region ID: Region01
Region Name: Highland Nature Region
Continent: Continent01 Origin Continent
```

Purpose:

```text
valley landscapes
seasonal nature environments
alpine tourism destinations
```

Assigned zones:

```text
Zone1  Valley
Zone3  Sakura
Zone5  Snow
Zone7  Crystal Lake

Zone23 Cosmos Valley
Zone24 Tulip Valley
Zone25 Lavender Valley
Zone26 Sunflower Valley
Zone27 Cherry Blossom Valley
Zone28 Peony Valley
Zone29 Marigold Valley
Zone30 Hydrangea Valley
Zone31 Poppy Valley
Zone32 Lily Valley
Zone33 Buffalo Meadow Sanctuary
```

Typical scenes:

```text
valley travel
flower valley landscapes
mist environments
lake reflections
seasonal tourism visuals
```

---

## Region02 — Inland Living & Knowledge Region

```text
Region ID: Region02
Region Name: Inland Living & Knowledge Region
Continent: Continent01 Origin Continent
```

Purpose:

```text
residential environments
daily life storytelling
education ecosystems
```

Assigned zones:

```text
Zone10  Suburban Living
Zone11  Green Rural
Zone14  University City
```

Typical scenes:

```text
family environments
student life
community storytelling
lifestyle narratives
```

---

## Region03 — River & Park Tourism Region

```text
Region ID: Region03
Region Name: River & Park Tourism Region
Continent: Continent01 Origin Continent
```

Purpose:

```text
river valley tourism
eco-travel
national park environments
agro-scenic landscapes
```

Assigned zones:

```text
Zone9   Golden Rice Valley
Zone20  National Park
Zone21  River Valley Tourism System
Zone22  Lotus Pond Sanctuary
```

Typical scenes:

```text
river walks
bicycle tourism
camping
waterfall exploration
eco-tourism storytelling
```

---

## Region04 — Coastal Leisure Region

```text
Region ID: Region04
Region Name: Coastal Leisure Region
Continent: Continent02 Expansion Continent
```

Purpose:

```text
beach tourism
coastal relaxation
marine leisure
port arrival environments
```

Assigned zones:

```text
Zone2   Coastal
Zone19  Harbor Port
```

Typical scenes:

```text
white sand beaches
coconut shorelines
coastal cafés
harbor arrival scenes
cruise tourism
```

---

## Region05 — Urban Civilization Region

```text
Region ID: Region05
Region Name: Urban Civilization Region
Continent: Continent02 Expansion Continent
```

Purpose:

```text
city environments
commerce activity
entertainment ecosystems
innovation districts
medical infrastructure
```

Assigned zones:

```text
Zone12  Urban Core
Zone16  Entertainment District
Zone17  Tech Innovation Zone
Zone18  Medical City
```

Typical scenes:

```text
urban mobility
night districts
city lifestyle
technology hubs
health infrastructure
```

---

## Region06 — Infrastructure & Logistics Region

```text
Region ID: Region06
Region Name: Infrastructure & Logistics Region
Continent: Continent02 Expansion Continent
```

Purpose:

```text
transport infrastructure
airport systems
industrial support
global logistics
```

Assigned zones:

```text
Zone13  Industrial District
Zone15  Airport Gateway
```

Typical scenes:

```text
airport mobility
cargo logistics
industrial activity
global travel gateways
```

---

## Region07 — Extreme & Signature Landscape Region

```text
Region ID: Region07
Region Name: Extreme & Signature Landscape Region
Continent: Continent02 Expansion Continent
```

Purpose:

```text
cinematic landscapes
unique environments
destination-scale tourism
```

Assigned zones:

```text
Zone4  Volcano
Zone6  Sky Island
Zone8  Flower Desert
```

Typical scenes:

```text
epic nature
dramatic landscapes
fantasy-like travel destinations
high-impact tourism visuals
```

---

# F. Region Design Logic

Regions are designed to balance **environmental identity and functional storytelling**.

The regional grouping follows this logic:

```text
nature environments
living environments
tourism landscapes
urban civilization
infrastructure mobility
signature landscapes
```

This structure supports:

```text
AI scene routing
StoryGenProduct environment selection
MTS mobility planning
tourism narrative continuity
```

---

# G. Future Expansion Rule

New regions may be introduced only when:

```text
new official zones are approved
continent complexity increases
MTS network expansion requires new grouping
scene density exceeds current structure
```

Until then, the official Phase-1 structure remains:

```text
7 regions
```

---

# H. Dependency

This file must align with:

```text
.chatgpt/System/World/WorldMap.md
.chatgpt/System/World/Continents.md
.chatgpt/System/World/Zones/Zone List.md
.chatgpt/System/World/MTSNetwork.md
```

Regions must remain consistent with both continents and zones.

---

# Version History

```text
v1.0 Initial regional structure aligned with Zones/Zone List.md
```

---

หากต้องการ ผมสามารถช่วย **refactor `WorldMap.md` ให้ใช้ section style A–H เหมือนกันทั้งชุด** เพื่อให้ไฟล์ใน

```text
.chatgpt/System/World/
```


