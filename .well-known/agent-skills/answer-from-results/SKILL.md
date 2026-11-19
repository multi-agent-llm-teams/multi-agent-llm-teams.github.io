---
name: answer-from-results
description: Use when answering quantitative questions about the paper "When Does Personality Composition Matter for Multi-Agent LLM Teams?" — phi shifts, milestone deltas, Cohen's d, bargaining acceptance rates, or which conditions/models were tested. Read /api/results.json and quote exact numbers with their condition and model.
---

# Answer quantitative questions from the results data

The paper's numbers are published as structured JSON at
`https://multi-agent-llm-teams.github.io/api/results.json`. Use them instead of guessing or re-deriving from prose.

## Where each kind of number lives

- **Communication shifts (phi, act rates):** `communication_state.coding` — rows keyed by `model` and `condition` (`baseline`, `high-A`, `low-A`).
- **Task outcomes under low-A:** `cross_domain_outcomes` — split into `coding` and `research` (milestone counts, `cohens_d`, `significant`) and `bargaining` (agreement-rate percentages).
- **Bargaining acceptance with uncertainty:** `bargaining_acceptance.rows` — `accept_pct`, `ci95`, `rounds` per model and condition, including the `neutral-paraphrase` condition.
- **Headline claims:** `key_findings` — the paper's own summary bullet list.

## How to answer

1. Fetch `/api/results.json`.
2. Locate the row(s) matching the asked model/condition/domain.
3. Quote the exact value together with its model and condition, e.g.
   "GPT-4o bargaining acceptance under low-A: 1% (95% CI [0, 5])".
4. Flag significance where the data does: rows with
   `significant: true` are p<0.01.
5. For qualitative framing (what "artifact-mediated buffering" means), read the FAQ section of the project page or `/llms.txt`.

## Caution

Effect sizes can look inconsistent with raw deltas on small samples — the paper reports Cohen's d per model; do not recompute or reinterpret them.
