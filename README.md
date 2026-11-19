# When Does Personality Composition Matter for Multi-Agent LLM Teams?

Project page for the paper *"When Does Personality Composition Matter for Multi-Agent LLM Teams?"* by [Aryan Keluskar](https://aryankeluskar.com), [Amrita Bhattacharjee](https://amritabh.github.io/), and [Huan Liu](https://faculty.engineering.asu.edu/huanliu/) (School of Computing & AI, Arizona State University). Accepted to the Third Conference on Language Modeling (**COLM 2026**), San Francisco.

**Site:** <https://multi-agent-llm-teams.github.io/> · **Press kit:** <https://multi-agent-llm-teams.github.io/press.md>

**Paper:** [arXiv:2606.27443](https://arxiv.org/abs/2606.27443) · [OpenReview](https://openreview.net/forum?id=MS8jsgZC62)

## TL;DR

Personality prompts shift agent *communication* everywhere, but only change *outcomes* when the task is unstructured:

- **Coding (structured, cooperative):** low-agreeableness barely moves milestone completion (Claude 12.1 → 12.4, d = 0.06) — the code artifact filters out process degradation ("**artifact-mediated buffering**").
- **Research (unstructured, cooperative):** milestones drop up to **66%**.
- **Bargaining (unstructured, competitive):** agreement collapses from ~40% to **≤1%**; high-A roughly doubles it.
- Only **agreeableness** matters (conscientiousness and openness ablations ≈ null), because RLHF-trained models are already cooperative: personality prompting mainly induces adversarial behavior, not collaboration.

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

## For AI agents (agent-readiness)

The site publishes the full set of agent-discovery surfaces. Everything is public — no authentication exists (see [`auth.md`](https://multi-agent-llm-teams.github.io/auth.md)).

| Surface | Path | Spec |
|---|---|---|
| Content Signals | `Content-Signal:` in [`robots.txt`](robots.txt) | [contentsignals.org](https://contentsignals.org/) |
| ARD capability manifest | [`.well-known/ai-catalog.json`](.well-known/ai-catalog.json) | [ARD spec](https://agenticresourcediscovery.org/) |
| API catalog | [`.well-known/api-catalog`](.well-known/api-catalog) | RFC 9727 |
| Paper data API | [`api/paper.json`](api/paper.json), [`api/results.json`](api/results.json), [`api/status.json`](api/status.json) — described by [`api/openapi.json`](api/openapi.json) | OpenAPI 3.1 |
| OAuth Protected Resource Metadata | [`.well-known/oauth-protected-resource`](.well-known/oauth-protected-resource) | RFC 9728 |
| MCP server card | [`.well-known/mcp/server-card.json`](.well-known/mcp/server-card.json) | SEP-2127 |
| Agent skills index | [`.well-known/agent-skills/index.json`](.well-known/agent-skills/index.json) | [Agent Skills Discovery RFC v0.2.0](https://github.com/cloudflare/agent-skills-discovery-rfc) |
| WebMCP tools | [`static/js/webmcp.js`](static/js/webmcp.js) — registered via `document.modelContext` on page load | [WebMCP](https://webmachinelearning.github.io/webmcp/) |

Two implementation notes:

- The site deploys through the `Deploy to GitHub Pages` workflow (Pages build type: **workflow**), which serves the repository verbatim — dot-directories like `/.well-known/` ship as-is and Markdown files (`auth.md`, `press.md`, the `SKILL.md` files) are served raw as `text/markdown`. [`_config.yml`](_config.yml) is kept as a fallback for the case where the site is ever switched back to legacy branch serving, where Jekyll would otherwise drop dot-directories unless `include: [.well-known]` is set.
- The workflow injects umami analytics at deploy time: set the `UMAMI_WEBSITE_ID` repo Actions variable (`gh variable set UMAMI_WEBSITE_ID --body "<id>"`) — and `UMAMI_SCRIPT_URL` if self-hosting — to switch tracking on. Until then the whole analytics block is stripped from the deployed HTML and nothing loads or tracks.
- `Link` response headers, `Accept: text/markdown` negotiation, and DNS-AID records cannot be configured on `github.io` (no custom headers, no content negotiation, no DNS control). The `<link rel="...">` tags in `index.html` carry the equivalent discovery pointers in HTML, and `/llms.txt` + `llms-full.txt` + `press.md` serve raw Markdown.
  A custom domain behind a configurable edge (e.g. Cloudflare) would be needed to close those three checks.

When editing a skill under `.well-known/agent-skills/`, recompute its `sha256` digest (`shasum -a 256 .well-known/agent-skills/<name>/SKILL.md`) and update [`.well-known/agent-skills/index.json`](.well-known/agent-skills/index.json).

### Keeping search engines fresh (IndexNow)

The file [`b002208d8198fa4db2637140bc2c4c2a.txt`](b002208d8198fa4db2637140bc2c4c2a.txt) is this site's [IndexNow](https://www.indexnow.org/) key. After deploying meaningful content changes, push the updated URLs to Bing/Yandex/Seznam/Naver:

```bash
curl -X POST https://api.indexnow.org/indexnow \
  -H "Content-Type: application/json; charset=utf-8" \
  -d '{
    "host": "multi-agent-llm-teams.github.io",
    "key": "b002208d8198fa4db2637140bc2c4c2a",
    "keyLocation": "https://multi-agent-llm-teams.github.io/b002208d8198fa4db2637140bc2c4c2a.txt",
    "urlList": ["https://multi-agent-llm-teams.github.io/"]
  }'
```

## Credits

Website template adapted from [Nerfies](https://github.com/nerfies/nerfies.github.io), licensed under CC BY-SA 4.0.
