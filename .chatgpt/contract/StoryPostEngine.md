# .chatgpt/Contract/StoryPostEngine.md

```text
Name: StoryPostEngine Contract
Version: StoryPostEngine-v1.0
Type: Unified Story Post-Processing Engine
Scope: Story Narrative -> Social Post Output
Status: Production Standard
```

---

# Structure

```text
A. Contract Purpose
B. Engine Role in Content Pipeline
C. Input Source
D. Post-Processing Pipeline
E. Narrative Preservation Rules
F. Hook and Retention Rules
G. Product Integration Rules
H. Output Structure Rules
I. PostKeywords Rules
J. Safety Rules
K. Engine Compatibility
L. Design Philosophy
Version History
```

---

# A. Contract Purpose

StoryPostEngine is the single post-generation engine used by the ChornPlanet AI workflow.

Its purpose is to transform a resolved story scene into a final social post that may include:

```text
viral-ready caption
story momentum
soft product integration
exactly 5 hashtags
```

This contract replaces the split responsibilities previously handled by:

```text
StoryWriter
StoryMomentumEngine
StoryCommerceEngine
```

---

# B. Engine Role in Content Pipeline

StoryPostEngine runs after the scene, episode, and character layers have already resolved the narrative.

Core pipeline:

```text
Workflow Command
        v
AI Engine Router
        v
AISceneEngine
        v
AIEpisodeEngine
        v
AICharacterEngine
        v
StoryPostEngine
        v
Final Social Post Output
```

If image or video prompts are requested, they run alongside this post layer and do not replace it.

---

# C. Input Source

StoryPostEngine receives the resolved storytelling context from the active workflow, including:

```text
environment
character presence
wardrobe
action
scene mood
product data (optional)
PostKeywords (optional)
SkipVideo flag
```

The engine must preserve:

```text
scene identity
character identity
emotional tone
world consistency
```

---

# D. Post-Processing Pipeline

StoryPostEngine must follow this pipeline:

```text
Resolved Story Context
        v
Hook Detection
        v
Narrative Compression
        v
Emotion and Momentum Shaping
        v
Retention Formatting
        v
Soft Product Integration (optional)
        v
Hashtag Optimization
        v
Final Post Output
```

The engine may improve clarity and pacing, but it must not invent unrelated story events.

---

# E. Narrative Preservation Rules

The engine must treat the upstream story as the source of truth.

Required behavior:

```text
keep the same environment
keep the same subject focus
keep the same scene logic
keep the same emotional direction
```

Not allowed:

```text
new characters
new locations
hard-selling interruption
plot expansion unrelated to the prompt
```

Use short cinematic sentences and visual language.

---

# F. Hook and Retention Rules

The opening must create immediate curiosity without breaking the calm ChornPlanet tone.

Hook requirements:

```text
must appear at the start
must be short
must trigger visual or emotional curiosity
must fit the active scene
```

Momentum model:

```text
scene
presence
emotion
reflection
```

Retention formatting rules:

```text
short lines
clear breathing space
natural rhythm
4-12 lines for the story block
```

If the workflow requests a word-only mode, keep the output compact and readable as a standalone caption.

---

# G. Product Integration Rules

When product data is present in `StoryGenProduct`, product integration is required.

Product block rules:

```text
must follow the story block
must feel natural
must not interrupt the emotional landing
must avoid aggressive selling language
must describe benefit, fit, usage, or styling context
```

Allowed product tone:

```text
calm
lifestyle-oriented
soft recommendation
scene-aligned
```

Disallowed product tone:

```text
discount pressure
urgent CTA
hard sell phrasing
spam keyword stuffing
```

If product data is not present, omit the product block completely.

---

# H. Output Structure Rules

Default final structure:

```text
[Hook]

[Story Block]

[Reflection or emotional landing]

[Product Block - optional]

[Hashtag Block]
```

Formatting rules:

```text
no unnecessary headings
no technical labels
exactly 5 hashtags
last hashtag must always be #ChornPlanet
```

Hashtag guidance:

```text
first 4 hashtags should match scene, lifestyle, travel, fashion, or discovery context
keep hashtags short and readable
```

---

# I. PostKeywords Rules

When `PostKeywords` is provided:

```text
use only keywords relevant to the resolved scene
blend them naturally into the caption or hashtags
do not force every keyword
do not break tone or readability
```

When `PostKeywords` is empty:

```text
use normal scene-based keyword selection
```

---

# J. Safety Rules

StoryPostEngine must enforce the following restrictions:

```text
no sexual content
no explicit descriptions
no violent themes
no political messaging
no misleading product claims
```

Content must remain suitable for:

```text
public social media
tourism storytelling
lifestyle storytelling
soft commerce storytelling
```

---

# K. Engine Compatibility

StoryPostEngine is compatible with:

```text
StoryGenProduct
AIEpisodeEngine
AISceneEngine
AICharacterEngine
ImagePrompt
VdoPrompt
TikTok Commerce Engine
```

It is the single post-story contract for the ChatGPT workflow.

---

# L. Design Philosophy

StoryPostEngine follows these principles:

```text
story first
emotion first
scene consistency first
product follows naturally
social readability matters
```

The goal is a final post that feels cinematic, clear, and platform-ready without fragmenting the workflow into
multiple overlapping contracts.

---

# Version History

```text
v1.0 Initial unified release
     - merged story writing expectations into the post layer
     - merged momentum and retention logic
     - merged soft product integration rules
     - standardized 5-hashtag final output
```
