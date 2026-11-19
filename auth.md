# auth.md — Multi-Agent LLM Teams

This document tells an AI agent how to obtain access to the resources on <https://multi-agent-llm-teams.github.io/>. Short version: **no registration, no credentials, and no scopes are required — every resource on this site is public.**

## Audience

Any AI agent, crawler, search engine, or automated client is welcome to read this site. It is a static project page for the COLM 2026 paper *"When Does Personality Composition Matter for Multi-Agent LLM Teams?"* by Aryan Keluskar, Amrita Bhattacharjee, and Huan Liu (Arizona State University). Content is released under CC BY-SA 4.0.

## Registration

No agent registration endpoint exists, and none is needed: there are no accounts, no protected endpoints, and no per-agent state. Nothing is gated behind an authorization server, so there is no registration or provisioning step to perform before fetching any URL on this site.

## Credentials and scopes

- **Credentials:** none are issued, accepted, or required. No OAuth flows, API keys, or bearer tokens are implemented.
- **Scopes:** no scopes exist because no resource is access-controlled.
- **Rate limits:** none are configured. The site is served by GitHub Pages; be a good citizen and follow GitHub's platform policies rather than hammering the origin.

## Machine-readable metadata

- `/.well-known/oauth-protected-resource` (RFC 9728) — this resource's metadata. It declares `authorization_servers: []` and `scopes_supported: []`, i.e. no authorization server guards this resource and no scopes are used. This file exists so that agents performing OAuth discovery learn definitively that no authentication is needed, rather than having to guess.
- `/.well-known/api-catalog` (RFC 9727) — linkset of this site's read-only JSON APIs (`/api/paper.json`, `/api/results.json`, `/api/status.json`), all public.
- `/.well-known/ai-catalog.json` — Agentic Resource Discovery manifest of everything on this site an agent can use.
- `/llms.txt` — curated plain-text site summary.

## Contact

Site content questions: [Aryan Keluskar](https://aryankeluskar.com). This site publishes no security-sensitive functionality; if you believe you have found a problem, open an issue at <https://github.com/multi-agent-llm-teams/multi-agent-llm-teams.github.io>.
