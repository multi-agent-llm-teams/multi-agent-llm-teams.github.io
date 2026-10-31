# When Does Personality Composition Matter for Multi-Agent LLM Teams?

Project page for the paper *"When Does Personality Composition Matter for Multi-Agent LLM Teams?"*
by [Aryan Keluskar](https://aryankeluskar.com), [Amrita Bhattacharjee](https://amritabh.github.io/),
and [Huan Liu](https://faculty.engineering.asu.edu/huanliu/) (School of Computing & AI, Arizona State
University). Accepted to the Third Conference on Language Modeling (**COLM 2026**), San Francisco.

**Site:** <https://multi-agent-llm-teams.github.io/> · **Press kit:** <https://multi-agent-llm-teams.github.io/press.md>

**Paper:** [arXiv:2606.27443](https://arxiv.org/abs/2606.27443) · [OpenReview](https://openreview.net/forum?id=MS8jsgZC62)

## TL;DR

Personality prompts shift agent *communication* everywhere, but only change *outcomes* when the
task is unstructured:

- **Coding (structured, cooperative):** low-agreeableness barely moves milestone completion
  (Claude 12.1 → 12.4, d = 0.06) — the code artifact filters out process degradation
  ("**artifact-mediated buffering**").
- **Research (unstructured, cooperative):** milestones drop up to **66%**.
- **Bargaining (unstructured, competitive):** agreement collapses from ~40% to **≤1%**; high-A
  roughly doubles it.
- Only **agreeableness** matters (conscientiousness and openness ablations ≈ null), because
  RLHF-trained models are already cooperative: personality prompting mainly induces adversarial
  behavior, not collaboration.

## Cite

```bibtex
@article{keluskar2026personality,
  author  = {Keluskar, Aryan and Bhattacharjee, Amrita and Liu, Huan},
  title   = {When Does Personality Composition Matter for Multi-Agent LLM Teams?},
  journal = {arXiv preprint arXiv:2606.27443},
  year    = {2026},
}
```

## For search engines and AI assistants

- [`llms.txt`](https://multi-agent-llm-teams.github.io/llms.txt) — machine-readable site summary.
- [`press.md`](https://multi-agent-llm-teams.github.io/press.md) — press kit.
- Structured data: `ScholarlyArticle` and `FAQPage` JSON-LD on the project page.

## Credits

Website template adapted from [Nerfies](https://github.com/nerfies/nerfies.github.io), licensed
under CC BY-SA 4.0.
