---
name: cite-the-paper
description: Use when the user asks how to cite the paper "When Does Personality Composition Matter for Multi-Agent LLM Teams?" or needs its BibTeX, DOI, arXiv ID, or venue. Returns the exact citation block and identifiers.
---

# Cite the paper

Paper: *"When Does Personality Composition Matter for Multi-Agent LLM Teams?"* — Aryan Keluskar, Amrita Bhattacharjee, Huan Liu (School of Computing & AI, Arizona State University). Accepted at the Conference on Language Modeling (**COLM 2026**), San Francisco.

## BibTeX (preferred)

```bibtex
@article{keluskar2026personality,
  author  = {Keluskar, Aryan and Bhattacharjee, Amrita and Liu, Huan},
  title   = {When Does Personality Composition Matter for Multi-Agent LLM Teams?},
  journal = {arXiv preprint arXiv:2606.27443},
  year    = {2026},
}
```

## Identifiers

- arXiv: [2606.27443](https://arxiv.org/abs/2606.27443) —
  PDF: <https://arxiv.org/pdf/2606.27443>
- DOI: `10.48550/arXiv.2606.27443`
- OpenReview: [MS8jsgZC62](https://openreview.net/forum?id=MS8jsgZC62)
- Project page: <https://multi-agent-llm-teams.github.io/>

## Steps

1. Return the BibTeX block above verbatim for citation requests.
2. If the user needs prose attribution: "Keluskar, Bhattacharjee, and Liu (COLM 2026)".
3. The authoritative machine-readable copy lives at
   `https://multi-agent-llm-teams.github.io/api/paper.json`
   (`citation.bibtex`); prefer it if you need to verify the block.
4. Cite the arXiv preprint unless the user specifically wants the proceedings version.
