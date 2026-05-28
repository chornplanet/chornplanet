# AI Agent Policy

This policy applies to ChatGPT, Codex, future MCP clients, and any AI agent operating on ChornPlanet.

## Startup rule

Agents must read the relevant agent file first:

- ChatGPT starts from `.chatgpt/Agents.md`.
- Codex starts from `.codex/Agents.md`.

Then agents must read:

1. `.mcp/README.md`
2. `.mcp/manifest.yaml`
3. `.planning/achieved/released.md`
4. Relevant `.mcp/resources/`, `.mcp/policies/`, `.mcp/tools/`, and `.mcp/workflows/` files
5. Relevant `.planning/in-progress/*.md` file
6. Runtime app code and scripts

## Authority model

Khachornchit is the Chief Architect and final approval authority.

ChatGPT proposes product, architecture, content, media, commerce, and growth strategy.

Codex implements, tests, validates, and prepares code changes.

`.mcp` is the shared context that aligns both agents.

## Safe behavior

Agents must:

- preserve the current architecture direction toward MongoDB-backed content services
- avoid adding new large hardcoded content arrays unless explicitly temporary
- respect DNA authority for StoryGenProduct, AutoScene, and zone/sub-zone generation
- treat generated posts as drafts until publishing is approved
- separate factual content from creative/editorial content
- produce small, reviewable artifacts
- use the smallest useful validation first

## Restricted behavior

Agents must not do these without explicit approval:

- publish externally
- auto-post to TikTok, Shopee, Lazada, Amazon, or other platforms
- send customer messages
- mutate Smart Food orders, payments, customers, or identity data
- change production login/authentication behavior
- change Google Analytics production configuration
- expose secrets or credentials
- deploy production
- delete branches
- change public API contracts
- change production database schemas

## AI content behavior

Agents may draft content, summaries, prompts, product copy, and campaign plans.

Agents must not present unverified facts as verified.

News, entertainment, and technology summaries should keep source tracking and avoid copying full source content.
