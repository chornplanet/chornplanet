## 🔷 Zone Execution Rule (MANDATORY)

Zone List is ONLY the entry point.

Each Zone MUST be resolved into Sub-Zone before use.

### Execution Flow:

Zone List → Zone File → Sub-Zone

Example:

Zone List → Zone02-Coastal.md → Zone2B

### ❗ IMPORTANT:
DO NOT generate scenes directly from Zone name.

Every scene MUST come from:
→ Sub-Zone definition (Zone2A–2E)

### Sub-Zone Responsibility:
Each Sub-Zone defines:
- environment identity
- object system
- lighting behavior
- mood direction

These MUST be preserved across all 6 scenes.

### Scene Generation Rule:
Once a Sub-Zone is selected:
- Lock it for all 6 scenes
- Apply only micro-variation:
  - pose
  - camera
  - emotion
  - interaction

### ❌ Forbidden:
- Mixing multiple sub-zones
- Generic fallback environments
- Losing Sub-Zone identity

-----
Zone01-Mountain.md
Zone02-Coastal.md
Zone03-Sakura.md
Zone04-Volcano.md
Zone05-Snow.md
Zone06-Sky-Island.md
Zone07-Crystal-Lake.md
Zone08-Flower-Desert.md
Zone09-Golden-Rice-Valley.md
Zone10-Suburban-Living.md
Zone11-Green-Rural.md
Zone12-Urban-Core.md
Zone13-Industrial-District.md
Zone14-University-City.md
Zone15-Airport-Gateway.md
Zone16-Entertainment-District.md
Zone17-Tech-Innovation-Zone.md
Zone18-Medical-City.md
Zone19-Harbor-Port.md
Zone20-National-Park.md
Zone21-River-Valley-Tourism-System.md
Zone22-Lotus-Pond-Sanctuary.md
Zone23-Mountain-Cosmos-Valley.md
Zone24-Mountain-Tulip-Valley.md
Zone25-Mountain-Lavender-Valley.md
Zone26-Mountain-Sunflower-Valley.md
Zone27-Mountain-Cherry-Blossom-Valley.md
Zone28-Mountain-Peony-Valley.md
Zone29-Mountain-Marigold-Valley.md
Zone30-Mountain-Hydrangea-Valley.md
Zone31-Mountain-Poppy-Valley.md
Zone32-Mountain-Lily-Valley.md
Zone33-Mountain-Buffalo-Meadow-Sanctuary.md
