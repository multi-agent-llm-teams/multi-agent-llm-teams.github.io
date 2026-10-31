# When Does Personality Composition Matter for Multi-Agent LLM Teams? — press kit

**Paper:** "When Does Personality Composition Matter for Multi-Agent LLM Teams?"
**Authors:** Aryan Keluskar, Amrita Bhattacharjee, Huan Liu — School of Computing & AI, Arizona State University
**Venue:** Conference on Language Modeling (COLM 2026), San Francisco, October 6–9 · [arXiv:2606.27443](https://arxiv.org/abs/2606.27443) · [OpenReview](https://openreview.net/forum?id=MS8jsgZC62)
**Project page:** [multi-agent-llm-teams.github.io](https://multi-agent-llm-teams.github.io/)
**Contact:** contact@aryankeluskar.com · [Aryan Keluskar on X](https://x.com/soydotrun) · [aryankeluskar.com](https://aryankeluskar.com)

## The story in one paragraph

People building teams of AI agents often give each agent a personality prompt — "be cooperative,"
"be direct." This paper asks the obvious question nobody had tested directly: does it actually change
what the team *accomplishes*, or just how it talks? The authors gave agents low-agreeableness
("unkind, uncooperative, distrustful") and high-agreeableness prompts across four frontier models
and three very different tasks. The result: communication shifts dramatically *every* time, but
objective outcomes only suffer when the task's output is unstructured. Teams writing code together
are fine — the code has to compile, so process degradation gets filtered out. Research collaboration
and negotiation collapse: agreement in a buyer–seller bargaining game fell from ~40% to at most 1%.

## Headline numbers

- **φ ≈ 0.93** — the communication state every model converges to under low agreeableness (disagreement-dominated), across all domains.
- **0%** — bargaining deals closed by Claude Sonnet 4.5 agents under low-A (vs. 40% baseline); GPT-4o: 1% (vs. 37%); DeepSeek: 0% (vs. 18%).
- **~2×** — high-agreeableness roughly doubles agreement rates (Claude: 40% → 80%).
- **−66%** — research milestones under low-A in the worst case (GPT-4o: 10.5 → 3.5).
- **d = 0.06** — the near-zero effect on coding milestones for Claude despite the massive communication shift: "artifact-mediated buffering."

## Why it matters

- **For multi-agent system builders:** personality prompts are a real lever, but they act on process,
  not on product. If your deliverable is a formal artifact (code), hostile-sounding agents mostly
  won't hurt it. If your deliverable is text (research ideas, negotiation), it will.
- **For the emerging "agent personalities" tooling space:** only *agreeableness* moves the needle —
  conscientiousness and openness ablations do nothing. RLHF-trained models are already cooperative,
  so "be nicer" saturates; "be rude" is what pushes against the training.
- **A caution for researchers:** loaded Goldberg adjectives ("unkind, uncooperative") partly measure
  prompt toxicity, not personality. A neutral paraphrase ("direct, candid, skeptical of consensus")
  shrinks the effect and breaks cross-model convergence, though a model-specific residual remains.

## Quotable findings (attribute to the paper)

- "Personality prompting reliably shifts how agents communicate across every domain, but whether
  that reaches objective outcomes depends on the output medium."
- "In structured coding tasks, low agreeableness barely changes milestone completion. In open-ended
  research and competitive bargaining, the same manipulation substantially degrades performance."
- "Personality prompting is therefore mainly a tool for inducing adversarial behavior, not for
  enhancing cooperation."

## Figures (free to republish with attribution)

- [Hero: artifact-mediated buffering across three domains](https://multi-agent-llm-teams.github.io/static/images/hero_buffering.png)
- [Personality prompt construction (qualifier × adjective pole)](https://multi-agent-llm-teams.github.io/static/images/2x2_pole_exp.png)
- [Trait ablation: only low-A produces the characteristic shift](https://multi-agent-llm-teams.github.io/static/images/fig_trait_ablation_phi.png)
- [Coding task outcomes across conditions and models](https://multi-agent-llm-teams.github.io/static/images/fig7_task_success.png)

## Citation

```bibtex
@article{keluskar2026personality,
  author  = {Keluskar, Aryan and Bhattacharjee, Amrita and Liu, Huan},
  title   = {When Does Personality Composition Matter for Multi-Agent LLM Teams?},
  journal = {arXiv preprint arXiv:2606.27443},
  year    = {2026},
}
```

## Related work by this group

- [ToolAlignBench](https://toolalignbench.github.io/) (ICML 2026 workshop): safety-aligned tool-calling agents override deployment instructions up to 43.4% of the time.
- [Do LLMs Understand Ambiguity in Text?](https://llm-ambiguity.github.io/) (IEEE BigData 2024): training-free prompts that fix ambiguous questions for GPT-4o.
