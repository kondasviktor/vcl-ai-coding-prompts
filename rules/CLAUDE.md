# Claude / Claude Code project guide (starter)

Save as `CLAUDE.md` in the repo root (or merge into yours).

## Project

{{ONE_SENTENCE_WHAT_THIS_REPO_DOES}}

## How to work here

1. **Plan first** for multi-file tasks: list files, risks, and verification.
2. Wait for approval on risky changes (auth, payments, migrations, public API).
3. Prefer surgical edits over new abstractions.
4. Use the project's package manager and test commands only.

## Never

- Commit secrets or paste API keys into files
- Claim something works without saying how you verified
- Expand scope beyond the asked task

## Verify

```bash
{{TEST_OR_SMOKE_CMD}}
```
