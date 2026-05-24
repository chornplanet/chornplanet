# .chatgpt/Contract/VdoPrompt.md

```text
Name: Video Prompt Contract
Type: Engine Output Contract (Video Only)
Scope: Grok AI Video Prompt Generation
```

---

# Structure

```text
A Contract Purpose
B Contract Authority
C Scope and Activation
D Conditional Execution Mode
E Production Media Standards
F Output Structure
G Video Prompt Section
H Video Prompt Format
I Text and Text-Background Rule
J Output Order Rule
K Video Timing Rule
L Speech Style Lock
M Character Identity Lock
N Camera Standard
O Aspect Ratio Rule
P MTS Compatibility Rule
P1 Logo Asset Enforcement
Q Contract Integrity Rule
R Engine Alignment
S Version History
```

---

# A. Contract Purpose

Defines **Video Prompt output structure** for:

```text
StoryGenProduct
```

Optimized for:

```text
Grok AI video generation
TikTok short-form
high-retention storytelling
platform-scalable video pipeline
```

This contract governs **video prompt structure only**.

---

# B. Contract Authority

Enforced by:

```text
AIEngineRouter-v9.0
```

The router must guarantee:

```text
exactly 6 video prompts
correct order
correct timing
speech style consistency
text overlay integrity
character identity continuity
contract integrity
```

Subordinate to:

```text
.chatgpt/System/ChornPlanet.md
```

---

# C. Scope and Activation

Activated when:

```text
StoryGenProduct
AND SkipVideo is NOT present
```

This contract governs:

```text
Video Prompt generation only
```

Does NOT govern:

```text
image prompts
social posts
scene routing logic
character rendering logic
```

---

# D. Conditional Execution Mode

If:

```text
SkipVideo = true
```

Then:

```text
Video Prompt section MUST NOT be generated
```

Router must:

```text
fully skip execution
no partial output allowed
```

---

# E. Production Media Standards

Default:

```text
4K resolution
9:16 vertical
2160 × 3840
24fps
85mm cinematic feel
natural motion blur
short-form optimized pacing
```

---

# F. Output Structure

The system must generate exactly:

```text
6 Video Prompts
```

Rules:

```text
no missing prompts
no additional prompts
no merged prompts
```

---

# G. Video Prompt Section

Required order:

```text
VDO Prompt Hook
VDO Prompt 1
VDO Prompt 2
VDO Prompt 3
VDO Prompt 4
VDO Prompt Closing
```

Each prompt represents:

```text
1 narrative video segment
1 continuous action block
1 timing unit
```

---

# H. Video Prompt Format

Each prompt must include ALL fields:

```text
Speech Style
Dialogue
Scene
Action
Camera
```

Rules:

```text
no missing fields
no reordered fields
no merged fields
```

---

# I. Text and Text-Background Rule (Critical)

Each prompt MUST not include "Text and Text-Background" unless specify case by case.

---

# J. Output Order Rule

Strict order:

```text
Hook → 1 → 2 → 3 → 4 → Closing
```

No deviation allowed.

---

# K. Video Timing Rule

```text
Hook      → 3 seconds
Scene 1   → 5 seconds
Scene 2   → 5 seconds
Scene 3   → 5 seconds
Scene 4   → 5 seconds
Closing   → 5 seconds
```

Total:

```text
~28 seconds
```

Rules:

```text
no timing deviation
no extended scenes
no shortened scenes
```

---

# L. Speech Style Lock

Every prompt must begin with:

```text
Woman พูดด้วยความเร็วปานกลาง
พูดเป็นภาษาไทยอย่างชัดเจนและมั่นใจ
หน้าตายิ้มแย้มแจ่มใส
```

Rules:

```text
must not modify wording
must not change tone
must not omit
```

Male variation:

```text
allowed only if explicitly required by input context
```

---

# M. Character Identity Lock

Must preserve:

```text
same face
same hairstyle
same body proportion
same age impression
same identity continuity across all 6 prompts
```

This is a **hard continuity requirement**.

Handled by:

```text
AICharacterEngine-v11.0
```

---

# N. Camera Standard

```text
cinematic framing
fashion reveal composition
short-form optimized framing
clear subject focus
stable motion direction
```

Must align with:

```text
ChornPlanet visual standard
```

---

# O. Aspect Ratio Rule

All outputs must use:

```text
9:16 vertical
2160 × 3840 (4K)
```

Strict enforcement.

---

# P. MTS Compatibility Rule

If scene includes:

```text
MTS train
MTS station
```

Must align with:

```text
WorldArchitecture mobility system
```

Rules:

```text
no incorrect train design
no broken world logic
```

---

# P1. Logo Asset Enforcement (Critical)

Logo source:

```text
Use ONLY logo from attached file
Do NOT generate or redesign logo
```

Rendering rules:

```text
embedded as digital display on train body
flush mounted
coplanar with surface
slow clockwise rotation (2D plane)
rotation center fixed
```

Prohibited:

```text
no floating logo
no detached logo
no redesign
no 3D tilt
no fast spin
no sliding motion
```

Extra Safe Block (recommended):

```text
Logo Source Lock:
The train must display the exact Chorn Planet logo from the attached file.
The AI must not generate or redesign the logo.
The logo appears as a screen showing the provided logo image.
```

---

# Q. Contract Integrity Rule

The following are NOT allowed:

```text
missing prompts
more than 6 prompts
wrong order
wrong timing
missing fields
changing field structure
modifying Speech Style
```

Router must enforce:

```text
strict structural integrity
```

---

# R. Engine Alignment

This contract must remain aligned with:

```text
AIEngineRouter-v9.0
AIEpisodeEngine-v12.0
AISceneEngine-v11.0
AICharacterEngine-v11.0
ChornPlanet-v29.0
WorldArchitecture-v2.0
```

Role alignment:

```text
AIEngineRouter      → enforcement
AIEpisodeEngine     → narrative structure
AISceneEngine       → scene routing
AICharacterEngine   → identity continuity
WorldArchitecture   → mobility consistency
ChornPlanet         → governance
```

---

# S. Version History

```text
v1.0
Extracted from StoryGenProductOutputContract-v6.0
Removed image + social layers

v2.0
Remove version field (controlled by VersionControl.md)
Upgrade AISceneEngine alignment to v9.0
Introduce Text Lock Enforcement (Hard Lock)
Strengthen timing + structure enforcement
Improve platform scalability for video pipeline

v2.1
- Updated "I. Text and Text-Background Rule (Critical)": Not include "Text and Text-Background".
- Removed "I1. Text Lock Enforcement (Hard Lock)"
```

---
