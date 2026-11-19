# auth.md — Multi-Agent LLM Teams

Protocol: auth.md — <https://github.com/workos/auth.md>
This document tells an AI agent how to obtain access to the resources on <https://multi-agent-llm-teams.github.io/>.

**Supported access method: `anonymous`.** This is a fully public, static site: there is no user sign-up, no registration endpoint, no identity assertion (ID-JAG, verified email, or otherwise), no credential issuance, and no authorization server. An agent already has complete access via plain HTTP — no credentials, no scopes, no `Authorization` header on any endpoint.

## Audience

Any AI agent, crawler, search engine, or automated client. The site is the project page for the COLM 2026 paper *"When Does Personality Composition Matter for Multi-Agent LLM Teams?"* by Aryan Keluskar, Amrita Bhattacharjee, and Huan Liu (Arizona State University). Site content is licensed CC BY-SA 4.0.

## Access flow (self-contained — no OAuth metadata exists for this site)

This document is the complete, standalone registration recipe. There is nothing to register and no credential to exchange; the flow is:

1. **Discover.** Fetch `https://multi-agent-llm-teams.github.io/llms.txt` (curated site summary) or the capability manifest at `/.well-known/ai-catalog.json` to enumerate every machine-readable surface this site offers.
2. **Register (step intentionally empty).** No registration, provisioning call, claim, or token exchange exists: access is provisioned by the origin to everyone by default. Fetch any URL — for example the paper metadata at `/api/paper.json` or the results tables at `/api/results.json`. Requests that carry credentials are not treated differently.
3. **Use.** Every endpoint is read-only and public. No `Authorization` header is required or recognized. Nothing needs revoking, because no credential is ever issued.

## Endpoints

| Purpose | URL |
|---|---|
| Origin — provisions access to every resource | `https://multi-agent-llm-teams.github.io/` |
| Site summary for agents | `https://multi-agent-llm-teams.github.io/llms.txt` |
| Full site content in Markdown | `https://multi-agent-llm-teams.github.io/llms-full.txt` |
| Capability manifest (ARD) | `https://multi-agent-llm-teams.github.io/.well-known/ai-catalog.json` |
| API catalog (RFC 9727) | `https://multi-agent-llm-teams.github.io/.well-known/api-catalog` |
| Paper metadata JSON | `https://multi-agent-llm-teams.github.io/api/paper.json` |
| Results data JSON | `https://multi-agent-llm-teams.github.io/api/results.json` |
| OAuth Protected Resource Metadata (RFC 9728) | `https://multi-agent-llm-teams.github.io/.well-known/oauth-protected-resource` |

## Credentials, scopes, and revocation

- **Credentials:** none are issued, accepted, or required. No OAuth flows, API keys, bearer tokens, or claim ceremonies are implemented anywhere on this origin.
- **Scopes:** none exist because no resource is access-controlled.
- **Revocation:** not applicable — no credential is ever issued.
- **Rate limits:** none configured (GitHub Pages static hosting). Be a good citizen and follow GitHub's platform policies.

## Machine-readable metadata

- `/.well-known/oauth-protected-resource` (RFC 9728) — declares `authorization_servers: []` and `scopes_supported: []`: no authorization server guards this resource. Published so that agents performing OAuth discovery learn definitively that no authentication is needed, rather than having to guess.
- `/.well-known/api-catalog` (RFC 9727), `/.well-known/ai-catalog.json`, `/.well-known/agent-skills/index.json`, and `/api/openapi.json` — every other discovery surface, all public.

## Contact

Questions about site content: [Aryan Keluskar](https://aryankeluskar.com).
Problems with the site: open an issue at
<https://github.com/multi-agent-llm-teams/multi-agent-llm-teams.github.io>.
