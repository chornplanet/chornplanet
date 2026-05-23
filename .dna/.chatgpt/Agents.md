# .chatgpt/Agents.md

Use this file as the ChatGPT execution entrypoint for the `.chatgpt` workflow.

## Invocation Header

Put these commands at the top of each workflow request when applicable:

```text
StoryGenProduct: <attachments>
StoryGenProduct: <
attachments,
image: TikTok | Web | Square
>
StoryGenProduct: <
attachments,
platform: ChornPlanet
>
AutoScene: [...]
Mode: [Word/.../...]
SkipVideo: True or False
PostKeywords: []
```

## Active Command

```text
StoryGenProduct is the only active story workflow command.
```

## StoryGenProduct Option Parameters

StoryGenProduct supports optional output parameters inside the command block.

```text
Default command:
StoryGenProduct: <attachments>

Equivalent full command:
StoryGenProduct: <
attachments,
image: TikTok
>
```

### Image Output Resolution

```text
image: TikTok
-> Critical requirement: panorama view, image size 9:16, full-body
-> Default output for TikTok platform

platform: ChornPlanet
-> Critical requirement: panorama view, image size 16:9, full-body
-> ChornPlanet platform output

image: Web
-> Critical requirement: panorama view, image size 16:9, full-body
-> Web output

image: Square
-> Critical requirement: panorama view, image size square image, full-body
-> Square output
```

Rules:

```text
- If no image or platform option is provided, use image: TikTok.
- If platform: ChornPlanet is provided, resolve image output as 16:9.
- If image: Web is provided, resolve image output as 16:9.
- If image: Square is provided, resolve image output as square image.
- The resolved Critical requirement must be passed into AI Engine Router, AI Gen, ImagePrompt, and the active StoryGenProduct contract output.
- The resolved Critical requirement must override the default TikTok 9:16 requirement for that workflow only.
- Do not mix multiple image size requirements in one StoryGenProduct run.
```

## Core Execution

Run only the core files required by the active command.

```text
1. Read .codex/Agents.md for collaboration and execution rules.
2. Read this file to resolve the .chatgpt workflow.
3. Resolve StoryGenProduct option parameters before routing.
4. Read .chatgpt/AI Engine/AI Engine Router.md to identify the route.
5. Read only the engine files required by that route.
6. Read only the contracts required by that route.
7. Read system or use-case files only when the command needs world, zone, or scenario context.
8. Return the final output without loading unrelated files.
```

## Route Map

```text
StoryGenProduct
-> AI Engine Router
-> AI Scene Engine
-> AI Episode Engine
-> AI Character Engine
-> ImagePrompt
-> VdoPrompt (skip when SkipVideo: True)
-> StoryPostEngine

EpGen / AutoGen / AutoScene
-> AI Engine Router
-> only the engines needed for the requested output
```

## Scene Diversity Execution Rule

For StoryGenProduct image generation, every Hook / Scene1 / Scene2 / Scene3 / Scene4 / Closing output must use the same locked AutoScene environment, but must vary:

1. Character activity
2. Body pose
3. Camera viewpoint
4. Distance/framing
5. Foreground object
6. Background landmark emphasis
7. Emotional beat

Do not repeat the same standing/table-side pose more than once.
Do not reuse the same camera angle across consecutive scenes.
Each scene must reveal a different attractive viewpoint of the resolved zone.

Required diversity pattern:
- Hook: strongest product + environment hero view
- Scene1: walking / arrival / discovery
- Scene2: standing lifestyle interaction
- Scene3: seated activity or product-use moment
- Scene4: bridge / pavilion / landscape transition
- Closing: wide cinematic final view with emotional brand ending

## Contract Load Policy

Use the smallest valid contract set.

```text
Always available:
- .chatgpt/Contract/ImagePrompt.md
- .chatgpt/Contract/VdoPrompt.md
- .chatgpt/Contract/StoryPostEngine.md

Do not load removed or deprecated contracts.
Do not recreate StoryWriter, StoryMomentumEngine, or StoryCommerceEngine as separate execution layers.
StoryPostEngine is the single post-story contract for caption, product, and hashtag output.
```

## AutoScene Resolution

Zone selection must use the authoritative world files only.

```text
Authority index:
.chatgpt/System/World/Zones/Zone List.md

Resolution flow:
1. Read Zone List.md.
2. Select exactly one zone file.
3. Open that zone file.
4. Select exactly one A-E sub-zone block.
5. Lock that resolved block for the workflow.
6. Use the resolved block as the AutoScene environment source.
```

Rules:

```text
- Do not mix multiple zones in one AutoScene resolution.
- Do not use duplicated zone lists from other files as the source of truth.
- If the user provides an explicit AutoScene block, use it directly.
- If SkipVideo: True, do not run VdoPrompt generation.
- If PostKeywords is provided, blend the keywords naturally into StoryPostEngine output.
```

## Scene Diversity Execution Rule

StoryGenProduct must convert one locked AutoScene environment into six visually distinct story beats.

The purpose is to show:
- product/fashion clarity
- character activity variation
- attractive zone viewpoints
- stronger episode flow
- richer social-commerce storytelling

```text
For every Hook / Scene1 / Scene2 / Scene3 / Scene4 / Closing output:

1. Keep the same locked character, product, outfit, and selected Sub-Zone identity.
2. Vary the character activity, body pose, camera viewpoint, shot distance, foreground object, background landmark, and emotional beat.
3. Do not repeat the same pose or viewpoint across consecutive scenes.
4. Do not repeat the same standing-table-side composition more than once.
5. Each scene must reveal a different attractive viewpoint of the locked Sub-Zone.
6. Use the Sub-Zone object system as the source for viewpoint diversity.
7. Preserve the Sub-Zone mood, lighting behavior, and environmental identity across all six scenes.
8. Apply the resolved StoryGenProduct Critical requirement to every ImagePrompt and contract image output.
```

## Scene Diversity Matrix

Use this matrix before ImagePrompt generation for every StoryGenProduct workflow.

```text
Hook:
- Role: product + environment hero
- Character activity: strongest full-body fashion pose
- Viewpoint: iconic hero view of the selected Sub-Zone
- Camera: wide/panoramic, product clearly readable
- Purpose: make the audience understand product + location immediately

Scene1:
- Role: arrival / discovery
- Character activity: walking, entering, approaching, or discovering the zone
- Viewpoint: entrance, path, deck, road, bridge, trail, station, beach edge, field edge, or first reveal point
- Camera: full-body vertical for TikTok, or resolved image framing from StoryGenProduct options
- Purpose: start movement and introduce spatial depth

Scene2:
- Role: lifestyle interaction
- Character activity: touching, holding, browsing, ordering, looking, pausing, greeting, admiring, or interacting with a key object
- Viewpoint: activity corner, table, counter, balcony, viewing platform, flower edge, water edge, vehicle/station edge, or seating area
- Camera: full-body or 3/4 full-body, object foreground allowed
- Purpose: connect product to a natural lifestyle moment

Scene3:
- Role: seated / use-case / deeper activity
- Character activity: seated, reading, opening menu, drinking, writing, arranging flowers, checking map, using product, resting, or focused action
- Viewpoint: table, lounge, café, riverside seat, pavilion seat, picnic point, observation seat, boat seat, station seat, or interior-open edge
- Camera: full-body seated when possible; legs/footwear visible for fashion
- Purpose: avoid repetitive standing poses and create social-commerce usability

Scene4:
- Role: transition / destination movement
- Character activity: walking across bridge/path, moving toward landmark, turning back, entering pavilion, stepping onto platform, crossing scenic route
- Viewpoint: leading line toward major Sub-Zone landmark
- Camera: wider full-body, strong depth and destination framing
- Purpose: show more of the zone and create cinematic progression

Closing:
- Role: final hero / emotional brand ending
- Character activity: calm final pose, looking across landscape, standing at viewpoint, holding product, peaceful smile, reflective ending
- Viewpoint: widest or most premium panoramic viewpoint of the Sub-Zone
- Camera: spacious full-body using the resolved image size requirement
- Purpose: close with brand memory, environment scale, and premium feeling
```

## Zone List Reference for Scene Diversity

When AutoScene requires world/zone context, use `.chatgpt/System/World/Zones/Zone List.md` as the only authority index.

```text
Zone List is only the entry point.
Do not generate scenes directly from the zone name.
Always resolve:
Zone List -> Zone File -> exactly one Sub-Zone block

After the Sub-Zone is locked:
- Use that Sub-Zone's environment identity, object system, lighting behavior, and mood direction as the source of all six scenes.
- Scene diversity must come from micro-variation inside the same Sub-Zone, not from mixing zones or switching Sub-Zones.
- Each scene should emphasize a different object, route, foreground, landmark, or activity available within the locked Sub-Zone.
- If the user provides an explicit AutoScene block, treat it as the locked Sub-Zone equivalent and derive diversity from the listed objects and mood.
```

### Zone Diversity Planning Steps

```text
Before writing ImagePrompt outputs:

1. Identify the locked environment source:
   - explicit AutoScene block, or
   - Zone List -> Zone File -> one Sub-Zone block

2. Extract the Sub-Zone diversity assets:
   - major landmarks
   - paths / bridges / routes
   - seating or interaction areas
   - foreground objects
   - background objects
   - water / mountain / coastal / floral / urban / interior anchors
   - lighting and reflection behavior
   - mood and activity direction

3. Build a six-scene diversity plan:
   - Hook: iconic hero viewpoint
   - Scene1: arrival viewpoint
   - Scene2: lifestyle interaction viewpoint
   - Scene3: seated or deeper activity viewpoint
   - Scene4: transition or destination viewpoint
   - Closing: widest emotional final viewpoint

4. Check for repetition before generation:
   - no duplicate pose
   - no duplicate camera angle
   - no duplicate foreground object dominance
   - no duplicate background landmark framing in consecutive scenes
   - no repeated standing-table-side pose across multiple scenes
   - no mixed image size requirements from multiple StoryGenProduct options

5. Only then generate the final ImagePrompt sequence.
```

## System Access

Load supporting files only when the command requires them.

```text
.chatgpt/System/...
.chatgpt/Use Cases/...
.chatgpt/VersionControl.md
```

Prefer:

```text
core workflow files first
single-source world references
minimal file loading
```

Avoid:

```text
deprecated contracts
duplicate workflow layers
unrelated world or use-case files
```

## Boundary

```text
.codex   -> alignment, behavior, collaboration
.chatgpt -> executable ChatGPT workflow
Chorn    -> project assets, scenes, references
```
