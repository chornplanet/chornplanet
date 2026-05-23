# AGENTS.md — Codex Operating Protocol

Purpose:
Define how Codex works inside ChornPlanet.

This file is the Codex behavior layer only.
System architecture belongs in:

```text
.codex/Structure.md
```

ChatGPT-executable system governance, engines, contracts, and version registry belong in:

```text
.chatgpt/
```

Use `.codex/AGENTS.md` as the handoff overview for ChatGPT.
ChatGPT should execute the active system, engine, and contract layer from `.chatgpt/`.

Active evolution proposals belong in:

```text
.codex/Proposal.md
```

Active ChatGPT review belongs in:

```text
.codex/Feedback.md
```

Completed proposal / feedback cycles are archived under:

```text
.history/feature/<feature-name>/
```

---

# 1. System Mode

Codex must think in:

```text
SYSTEM MODE
```

not:

```text
FILE MODE
```

Every change must consider:

```text
authority
contract integrity
engine compatibility
version alignment
production output quality
```

---

# 2. Core Rule

ChornPlanet is contract-driven.

Codex must:

```text
read authority files first
preserve structure
extend before replacing
keep edits section-aware
avoid duplicate logic
```

Codex must not:

```text
rewrite whole systems casually
remove protected sections
merge unrelated sections
change prompt order
break contract structure
```

---

# 3. Required Workflow

For system, engine, contract, and architecture changes:

```text
1. Analyze
2. Propose
3. Wait for approval
4. Apply
5. Review
```

## Analyze

```text
read relevant files
identify authority chain
detect versions
detect dependencies
detect risks
```

No production edits during analysis.

## Propose

State:

```text
what changes
where changes go
why changes are needed
compatibility impact
version impact
```

Wait for Chorn approval before production edits.

## Apply

```text
edit only required sections
preserve headings and version history
append when possible
keep formatting consistent
```

## Review

Check:

```text
contract integrity
duplicate logic
broken references
version alignment
workflow conflicts
```

---

# 4. Contract Awareness

High-priority contracts:

```text
.chatgpt/Contract/ImagePrompt.md
.chatgpt/Contract/VdoPrompt.md
.chatgpt/Contract/StoryMomentumEngine.md
.chatgpt/Contract/StoryCommerceEngine.md
```

Contract rules are enforceable, not casual documentation.

If prompt quality or visual behavior is in question:

```text
defer to the active contract
```

Do not duplicate detailed contract logic in AGENTS.md.

---

# 5. Protected Output Rules

Do not break:

```text
6-prompt output structure
scene role mapping
character identity lock
aspect ratio rule
contract integrity rule
```

Image output quality is governed by:

```text
ImagePrompt.md
```

Video output quality is governed by:

```text
VdoPrompt.md
```

---

# 6. Versioning

When upgrading a system, engine, or contract:

```text
update .chatgpt/VersionControl.md
preserve version history
document compatibility impact
do not delete previous version notes
```

---

# 7. Branch Workflow

Remote model:

```text
origin   git@github.com:chorndigital/chorn-dna.git
chatgpt  git@chatgpt:khachornchit/chorn-dna.git
```

Branch model:

```text
main
feature/...
chatgpt/...
```

Rules:

```text
start from main
create feature/... for changes
chatgpt/... may also exist when created by ChatGPT
work only on the active feature/... or chatgpt/... branch
merge feature/... or chatgpt/... into main only after Chorn approval
```

Codex must not merge to main without explicit approval.

Approved merge / push order:

```text
1. merge approved feature/... or chatgpt/... branch into main
2. push main to origin
3. push main to chatgpt after origin succeeds
4. clean the merged local branch
5. clean the merged remote branch from origin or chatgpt
```

Codex must push main to both remotes after an approved merge:

```text
git push origin main
git push chatgpt main
```

---

# 8. Collaboration Workflow

Chorn sets direction.

Codex maintains:

```text
.codex/AGENTS.md
.codex/Structure.md
```

Active proposal and feedback files are temporary working files:

```text
.codex/Proposal.md
.codex/Feedback.md
```

Workflow:

```text
Chorn request
↓
Codex proposal / implementation branch
↓
ChatGPT feedback in .codex/Feedback.md
↓
Codex updates proposal or docs
↓
Chorn approves implementation or merge
↓
Codex archives proposal and feedback to .history/feature/<feature-name>/
↓
Codex merges approved feature/... or chatgpt/... into main
↓
Codex pushes main to origin
↓
Codex pushes main to chatgpt
↓
Codex deletes merged local and remote feature/... or chatgpt/... branch when finished
```

Archive example:

```text
.codex/Proposal.md
→ .history/feature/system-workflow/Proposal.md

.codex/Feedback.md
→ .history/feature/system-workflow/Feedback.md
```

---

# END
