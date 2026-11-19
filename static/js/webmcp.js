/*
 * WebMCP — expose this paper site's content and actions as tools that an AI
 * agent can call directly in the browser.
 *
 * Spec: https://webmachinelearning.github.io/webmcp/
 * The API surface lives on document.modelContext (May 2026 draft); older
 * Chrome builds expose it on navigator.modelContext. Feature-detect both.
 * With no WebMCP-capable browser (or scanner shim) present, this file is a
 * silent no-op — the site behaves exactly as before.
 */
(function () {
  'use strict';

  function getModelContext() {
    if (typeof document !== 'undefined' && document.modelContext) {
      return document.modelContext;
    }
    if (typeof navigator !== 'undefined' && navigator.modelContext) {
      return navigator.modelContext; // deprecated in Chromium 150
    }
    return null;
  }

  var SITE = 'https://multi-agent-llm-teams.github.io/';

  var PAPER = {
    title: 'When Does Personality Composition Matter for Multi-Agent LLM Teams?',
    authors: [
      { name: 'Aryan Keluskar', url: 'https://aryankeluskar.com' },
      { name: 'Amrita Bhattacharjee', url: 'https://amritabh.github.io/' },
      { name: 'Huan Liu', url: 'https://faculty.engineering.asu.edu/huanliu/' }
    ],
    affiliation: 'School of Computing & AI, Arizona State University',
    venue: 'Conference on Language Modeling (COLM 2026), San Francisco',
    arxiv: 'https://arxiv.org/abs/2606.27443',
    pdf: 'https://arxiv.org/pdf/2606.27443',
    openreview: 'https://openreview.net/forum?id=MS8jsgZC62',
    code: 'https://github.com/multi-agent-llm-teams',
    project_page: SITE,
    structured_data: SITE + 'api/paper.json',
    bibtex: '@article{keluskar2026personality,\n' +
      '  author  = {Keluskar, Aryan and Bhattacharjee, Amrita and Liu, Huan},\n' +
      '  title   = {When Does Personality Composition Matter for Multi-Agent LLM Teams?},\n' +
      '  journal = {arXiv preprint arXiv:2606.27443},\n' +
      '  year    = {2026},\n' +
      '}'
  };

  var FINDINGS = [
    'Communication always shifts: low agreeableness drives every model to a disagreement-dominated profile (phi ~= 0.93; Cohen\'s d from -1.17 to -12.39).',
    'Structured coding is buffered: milestone completion is essentially unchanged for 3 of 4 models (Claude 12.1 -> 12.4, d = 0.06) — the code artifact filters out process degradation ("artifact-mediated buffering").',
    'Research and bargaining are exposed: research milestones drop up to 66%; bargaining agreement collapses from ~40% to <=1% under low agreeableness. High-A roughly doubles agreement.',
    'Only agreeableness matters: conscientiousness and openness ablations leave communication near baseline; high-A is null because RLHF-trained models are already cooperative.',
    'Loaded adjectives inflate effects: a neutral paraphrase attenuates the shift and removes cross-model convergence, but a model-specific residual persists.',
    'Design recommendation: deploy low agreeableness as a bounded, lead-position critic, not a team-wide trait.'
  ];

  /* Searchable content index: page sections + FAQ questions, mirrored from
   * the rendered page so tool results always match what a user sees. */
  var CONTENT_INDEX = [
    {
      anchor: '#abstract',
      section: 'Abstract',
      text: 'Personality prompting shapes how large language models communicate, yet whether those shifts change objective task outcomes has not been tested directly. Personality effects depend critically on task structure: in coding tasks low agreeableness leads to large communication shifts with little effect on milestone completion; in open-ended collaboration and bargaining the same manipulation substantially degrades performance.'
    },
    {
      anchor: '#findings',
      section: 'Key Findings',
      text: FINDINGS.join(' ')
    },
    {
      anchor: '#taxonomy',
      section: 'Task Taxonomy',
      text: 'Two dimensions determine how communication quality reaches the outcome: artifact structure (formal constraints on the deliverable) and goal alignment (shared vs opposing objectives). Coding is high-structure cooperative; research is low-structure cooperative; bargaining is low-structure competitive.'
    },
    {
      anchor: '#results',
      section: 'Results',
      text: 'Low-A drives Claude, GPT-4o, and Grok-3 to phi 0.93 disagreement-dominated profiles. Coding milestones hold near baseline for 3 of 4 models (Claude 12.1 to 12.4, d=0.06; GPT-4o 10.9 to 9.5; Grok-3 14.4 to 10.9; DeepSeek 10.7 to 8.8). Research milestones drop up to 66% (GPT-4o 10.5 to 3.5). Bargaining acceptance collapses: GPT-4o 37% to 1%, DeepSeek 18% to 0%, Claude 40% to 0%; high-A roughly doubles acceptance (GPT-4o 71%, Claude 80%).'
    },
    {
      anchor: '#faq',
      section: 'FAQ',
      text: 'Does giving an LLM agent a personality change its task performance? It depends on task structure. What is artifact-mediated buffering? A formal deliverable with syntactic and semantic constraints insulates outcomes from degraded communication. Why is agreeableness the trait that matters most? Only agreeableness produces the large communication shift; frontier LLMs are already trained to be cooperative. How should I use personality in a production multi-agent system? Deploy low agreeableness as a bounded, lead-position critic. Which models and benchmarks were used? Claude Sonnet 4.5, GPT-4o, Grok-3, DeepSeek V3.1 on MultiAgentBench coding, research, and bargaining.'
    },
    {
      anchor: '#BibTeX',
      section: 'Cite',
      text: 'BibTeX citation: keluskar2026personality, When Does Personality Composition Matter for Multi-Agent LLM Teams?, arXiv preprint arXiv:2606.27443, 2026.'
    }
  ];

  var SECTIONS = ['abstract', 'findings', 'taxonomy', 'results', 'faq', 'BibTeX'];

  function searchText(query, maxResults) {
    var q = String(query || '').toLowerCase();
    var terms = q.split(/\s+/).filter(Boolean);
    var scored = [];
    CONTENT_INDEX.forEach(function (entry) {
      var hay = (entry.section + ' ' + entry.text).toLowerCase();
      var score = 0;
      terms.forEach(function (t) {
        var idx = hay.indexOf(t);
        if (idx !== -1) score += 1;
      });
      if (score > 0) {
        scored.push({
          anchor: entry.anchor,
          section: entry.section,
          url: SITE + entry.anchor,
          excerpt: entry.text.slice(0, 400),
          matched_terms: score
        });
      }
    });
    scored.sort(function (a, b) { return b.matched_terms - a.matched_terms; });
    return scored.slice(0, maxResults);
  }

  var TOOLS = [
    {
      name: 'get_paper_metadata',
      description: 'Get the title, authors, venue (COLM 2026), arXiv/OpenReview/PDF links, and ready-to-use BibTeX for the paper "When Does Personality Composition Matter for Multi-Agent LLM Teams?".',
      inputSchema: { type: 'object', properties: {} },
      annotations: { readOnlyHint: true },
      execute: function () {
        return Promise.resolve(PAPER);
      }
    },
    {
      name: 'get_key_findings',
      description: 'Get the key findings of the paper: communication shifts everywhere, artifact-mediated buffering in coding, exposed outcomes in research and bargaining, agreeableness specificity, and the deployment recommendation.',
      inputSchema: { type: 'object', properties: {} },
      annotations: { readOnlyHint: true },
      execute: function () {
        return Promise.resolve({ findings: FINDINGS });
      }
    },
    {
      name: 'search_site_content',
      description: 'Search this paper site\'s content (abstract, findings, taxonomy, results, FAQ) and get matching excerpts with anchors. Use this before answering questions about the paper\'s content.',
      inputSchema: {
        type: 'object',
        properties: {
          query: { type: 'string', description: 'Free-text search terms' },
          max_results: { type: 'integer', minimum: 1, maximum: 6, default: 3, description: 'Maximum number of matches to return' }
        },
        required: ['query']
      },
      annotations: { readOnlyHint: true },
      execute: function (input) {
        var n = (input && input.max_results) || 3;
        var hits = searchText(input && input.query, n);
        return Promise.resolve({
          query: (input && input.query) || '',
          matches: hits,
          hint: hits.length ? 'Fetch the anchor URLs for full context.' : 'No match; try broader terms or fetch /llms.txt.'
        });
      }
    },
    {
      name: 'navigate_to_section',
      description: 'Scroll this page to one of its sections: abstract, findings, taxonomy, results, faq, or bibTeX. Use when the user wants to see or read a specific part of the paper page.',
      inputSchema: {
        type: 'object',
        properties: {
          section: { type: 'string', enum: SECTIONS, description: 'Section to navigate to' }
        },
        required: ['section']
      },
      execute: function (input) {
        var target = input && input.section;
        var el = target ? document.getElementById(target) : null;
        if (!el) {
          return Promise.reject(new Error('Unknown section: ' + target + '. Valid sections: ' + SECTIONS.join(', ')));
        }
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return Promise.resolve({
          navigated: true,
          section: target,
          anchor: '#' + target,
          url: SITE + '#' + target
        });
      }
    }
  ];

  var registered = false;

  function registerAgentTools() {
    if (registered) return;
    var mc = getModelContext();
    if (!mc || typeof mc.registerTool !== 'function') return;
    registered = true;
    // Unregisters every tool if aborted; we keep tools for the page lifetime,
    // but the signal is passed per the spec so hosts can clean up.
    var controller = new AbortController();
    TOOLS.forEach(function (tool) {
      try {
        var p = mc.registerTool(tool, { signal: controller.signal });
        if (p && typeof p.catch === 'function') {
          p.catch(function () { /* never break the page on a rejected registration */ });
        }
      } catch (e) { /* registration is best-effort */ }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', registerAgentTools);
  } else {
    registerAgentTools();
  }
})();
