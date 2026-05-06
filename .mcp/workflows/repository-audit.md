# Workflow: Repository Audit

Use this workflow before broad architecture, route, metadata, content, or styling work.

## Steps

1. Read `.codex/Agents.md`, `.mcp/README.md`, `.mcp/manifest.yaml`, and relevant `.mcp/repository/` maps.
2. Search the actual code with `rg` or file listing commands.
3. Identify the nearest existing implementation pattern.
4. Compare route, locale, metadata, content, styling, and server impacts.
5. Record any mismatch between planning docs and actual code.
6. Recommend the smallest safe implementation path.

## Output

- Relevant files inspected.
- Current pattern summary.
- Proposed change boundary.
- Required validation checks.
- Open questions for Khachornchit only when code context cannot answer them safely.
