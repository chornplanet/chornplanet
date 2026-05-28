# Feature Development Workflow

Use this workflow for ChornPlanet feature work.

## 1. Start with agent context

ChatGPT:

1. Read `.chatgpt/Agents.md`.
2. Read `.mcp/README.md` and `.mcp/manifest.yaml`.
3. Read `.planning/achieved/released.md` to avoid replanning completed feature families.
4. Read relevant `.mcp/resources/`, `.mcp/policies/`, `.mcp/tools/`, and `.mcp/workflows/` files.
5. Create or update `.planning/in-progress/<name>.md`.

Codex:

1. Read `.codex/Agents.md`.
2. Read `.mcp/README.md` and `.mcp/manifest.yaml`.
3. Read `.planning/achieved/released.md` for completed feature source paths.
4. Read relevant planning file under `.planning/in-progress/`.
5. Inspect code and tests.
6. Implement with the smallest safe change.

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
- `.planning/achieved/released.md` has one compact row for the completed feature
- completed detailed planning files are removed from `.planning/in-progress/`

Do not create per-feature files in `.planning/achieved/`; that directory should contain only `released.md`.
