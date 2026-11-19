---
name: use-paper-api
description: Use when you need structured data from the paper "When Does Personality Composition Matter for Multi-Agent LLM Teams?" (COLM 2026). Fetch /api/paper.json for metadata, links, and BibTeX, or /api/results.json for the result tables, instead of scraping the HTML project page.
---

# Use the paper data API

The project page at https://multi-agent-llm-teams.github.io/ publishes its data as small, public, read-only JSON endpoints. Prefer them over parsing HTML. No authentication or API key is needed.

## Endpoints

- `GET https://multi-agent-llm-teams.github.io/api/paper.json` — title, authors, venue (COLM 2026), arXiv/DOI/OpenReview identifiers, abstract, canonical links, and a ready-to-use BibTeX block under `citation.bibtex`.
- `GET https://multi-agent-llm-teams.github.io/api/results.json` — the paper's tables as JSON: `communication_state` (phi and act rates per model and condition), `cross_domain_outcomes` (milestone counts and Cohen's d per domain), `bargaining_acceptance` (accept rates with 95% CIs), and a `key_findings` list.
- `GET https://multi-agent-llm-teams.github.io/api/status.json` — health check for the static host.

The full machine description of these endpoints is the OpenAPI 3.1 document at `https://multi-agent-llm-teams.github.io/api/openapi.json`, discoverable via `/.well-known/api-catalog` (RFC 9727).

## How to use

1. Need citation info, author list, venue, or links? Fetch `/api/paper.json` and read the `citation` and `paper` objects.
2. Need a specific number (a phi value, a milestone delta, an accept rate)?
   Fetch `/api/results.json` and locate the row by model and condition.
   Numbers there are the authoritative copy of the page's tables.
3. Cite the paper with the BibTeX in `citation.bibtex`.

## Notes

- Everything is public; see `/auth.md` — no registration, scopes, or credentials exist for this site.
- If a field you need is missing from the JSON, fall back to `/llms.txt` (curated summary) or the HTML project page.
