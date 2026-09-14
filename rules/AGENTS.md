# Agent rules (starter)

Copy or merge into your project's `AGENTS.md`. Edit the placeholders. Do not commit secrets.

## Product

- Purpose: {{ONE_SENTENCE_WHAT_THIS_REPO_DOES}}
- Audience: {{WHO_IT_IS_FOR}}

## Stack

- Language / runtime: {{STACK}}
- Hosting: {{HOST}}
- Data: {{DB_OR_NONE}}

## Hard constraints

1. Prefer small, reviewable diffs. Do not rewrite unrelated files.
2. Never invent or commit secrets. Use env var **names** only (e.g. `DATABASE_URL`).
3. Do not create `.env` files with real values. Document required keys in README.
4. Match existing code style, folder layout, and test runner.
5. Read before writing. Cite real paths.
6. If a change needs a migration, include forward SQL and a rollback note.
7. Ask before deleting public APIs or changing auth/payment flows.

## Done means

- Code compiles / app starts
- Relevant tests or a short smoke checklist pass
- README or comments updated only when behavior changed for users

## Commands

```bash
{{INSTALL_CMD}}
{{TEST_CMD}}
{{DEV_CMD}}
```
