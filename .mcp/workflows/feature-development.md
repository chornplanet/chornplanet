# Feature Development Workflow

Use this workflow for ChornPlanet feature work.

## 1. Start with agent context

ChatGPT:

1. Read `.chatgpt/Agents.md`.
2. Read `.mcp/README.md` and `.mcp/manifest.yaml`.
3. Read relevant `.mcp/resources/`, `.mcp/policies/`, `.mcp/tools/`, and `.mcp/workflows/` files.
4. Create or update `.planning/feature-<name>.md`.

Codex:

1. Read `.codex/Agents.md`.
2. Read `.mcp/README.md` and `.mcp/manifest.yaml`.
3. Read relevant planning file under `.planning/`.
4. Inspect code and tests.
5. Implement with the smallest safe change.

## 2. Preserve architecture direction

ChornPlanet should move from hardcoded page data toward database-backed reusable services.

Preferred pattern:

```text
Next.js Page / Route
   ↓
Content Loader / Server Service
   ↓
MongoDB Atlas Repository
   ↓
Typed Content Schema
   ↓
Reusable Page Components
```

## 3. Validate

Use the smallest useful validation first.

Common commands:

```bash
yarn lint
yarn build
```

Run additional checks when the feature changes data loading, content migration, authentication, commerce, analytics, or publishing behavior.

## 4. Completion

A feature is complete only after:

- planning is reviewed
- implementation is complete
- validation is complete
- Khachornchit's architecture direction is followed
- branch is ready for PR or merge
- planning file is archived after completion
