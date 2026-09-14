# Hugging Face publish notes

Mirrors of this repo:

- Space: https://huggingface.co/spaces/kondasviktor/vcl-ai-coding-prompts
- Dataset: https://huggingface.co/datasets/kondasviktor/vcl-ai-coding-prompts

## Sync workflow

`.github/workflows/sync-huggingface.yml` uploads `hf-space/` and `hf-dataset/` on push to `main` (or via **Actions → Sync to Hugging Face → Run workflow**).

## Required secret

1. Create a Hugging Face [write token](https://huggingface.co/settings/tokens) with write access to:
   - `kondasviktor/vcl-ai-coding-prompts` (Space)
   - `kondasviktor/vcl-ai-coding-prompts` (dataset)
2. Add GitHub repository secret **`HF_TOKEN`**.

Local one-shot:

```bash
hf upload kondasviktor/vcl-ai-coding-prompts ./hf-space --type space
hf upload kondasviktor/vcl-ai-coding-prompts ./hf-dataset --type dataset
```

UTMs: `utm_source=huggingface&utm_medium=space|dataset&utm_campaign=coding-prompts`.
