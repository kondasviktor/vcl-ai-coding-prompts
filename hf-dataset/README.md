---
pretty_name: VCL AI Coding Power Prompts
license: cc-by-4.0
language:
  - en
task_categories:
  - text-generation
size_categories:
  - n<1K
tags:
  - prompt-engineering
  - coding
  - vibe-coding
  - claude
  - cursor
  - gemini
  - codex
  - agents
configs:
  - config_name: prompts
    data_files: prompts.jsonl
---

# VCL AI Coding Power Prompts

**50 battle-tested prompts for Claude Code, Codex, Gemini CLI, and Cursor** — by [Vibe Coder's Life](https://vibecoderslife.com/?utm_source=huggingface&utm_medium=dataset&utm_campaign=coding-prompts#subscribe-email).

Free catalog for vibe coders. Replace `{{PLACEHOLDERS}}` with your facts. Not the paid Apify Playbook prompt pack (those stay private).

## Load

```python
from datasets import load_dataset

ds = load_dataset("kondasviktor/vcl-ai-coding-prompts", "prompts")
print(ds["train"][0]["title"])
```

## Columns

| Column | Description |
| --- | --- |
| `id` | Stable id (`01`–`50`) |
| `title` | Short name |
| `category` | e.g. `spec`, `debug`, `apify-teaser` |
| `prompt` | Full prompt text with `{{PLACEHOLDERS}}` |
| `works_with` | Tools: `claude`, `codex`, `gemini`, `cursor` |
| `difficulty` | `beginner` / `intermediate` / `advanced` |
| `expected_output` | What a good run should produce |
| `tags` | Search tags |

## Drop-in rules

Generic starters (`AGENTS.md`, `.cursorrules`, `CLAUDE.md`, `GEMINI.md`) live in the [GitHub repo](https://github.com/kondasviktor/vcl-ai-coding-prompts/tree/main/rules) — not in this JSONL.

## Links

- Interactive explorer (Static Space): [kondasviktor/vcl-ai-coding-prompts](https://huggingface.co/spaces/kondasviktor/vcl-ai-coding-prompts)
- Source: [github.com/kondasviktor/vcl-ai-coding-prompts](https://github.com/kondasviktor/vcl-ai-coding-prompts)
- Newsletter: [vibecoderslife.com](https://vibecoderslife.com/?utm_source=huggingface&utm_medium=dataset&utm_campaign=coding-prompts#subscribe-email)
- Apify Actors: [apify.com/kondasviktor](https://apify.com/kondasviktor?utm_source=huggingface&utm_medium=dataset&utm_campaign=coding-prompts)

Prompts: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Repo tooling on GitHub: MIT.
