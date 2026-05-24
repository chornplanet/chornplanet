# DNA Authority Context

ChornPlanet outfit, civilization, StoryGenProduct, AutoScene, image/video prompt, and social-commerce story workflows should follow the DNA authority when applicable.

## Local authority files

```text
.chatgpt/MediaGenerationWorkflow.md
.chatgpt/VersionControl.md
.chatgpt/system/world/Zones/Zone List.md
.dna/manual/
```

## Command header pattern

Use this command structure when integrating ChornPlanet content generation with DNA workflows:

```text
StoryGenProduct: <attachments>
AutoScene: [...]
Mode: [Word/.../...]
SkipVideo: True or False
PostKeywords: []
```

## Active command rule

`StoryGenProduct` is the active story workflow command.

Deprecated workflows should not be revived unless Khachornchit explicitly approves a new version.

## Zone resolution rule

Zone List is only the entry point.

Every outfit/civilization generation must resolve:

```text
Zone List -> Zone File -> exactly one Sub-Zone
```

After a Sub-Zone is selected:

- lock it for all six scenes
- preserve environment identity
- preserve object system
- preserve lighting behavior
- preserve mood direction
- vary only micro-details such as pose, camera, emotion, and interaction

## Forbidden

- Do not generate directly from zone name.
- Do not mix multiple zones in one AutoScene resolution.
- Do not use generic fallback environments.
- Do not lose Sub-Zone identity.
- Do not repeat the same pose/viewpoint across the six-scene sequence.

## ChornPlanet integration direction

ChornPlanet should use this authority for:

- lady/gentleman outfit posts
- civilization clothing posts
- product storytelling posts
- premium social-commerce content
- zone-randomized content generation
- image/video campaign planning
- TikTok-first commerce posts
