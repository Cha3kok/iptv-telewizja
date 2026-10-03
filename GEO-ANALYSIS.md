# GEO / AI Search Analysis — iptvtelewizja.com

Focus keyword: **IPTV Polska** · Date: 2026-10-03 · Scope: code changes on branch `audit-fixes` (not yet deployed)

Google's own position (AI optimization guide, Search Central): optimizing for AI Overviews and AI Mode
"is still SEO". Everything below is SEO fundamentals applied to AI-search surfaces.

## 1. GEO Readiness Score: ~68 / 100 (after changes; estimate, not tool-measured)

| Criterion | Weight | Before | After | Notes |
|---|---|---|---|---|
| Citability | 25% | Low | Good | Self-contained "Czym jest IPTV Polska?" definition and facts table near the top of the homepage; short answer block on the pillar post |
| Structural readability | 20% | Fair | Good | Question-based H2/H3s, 11-question FAQ, facts table, ordered steps |
| Multi-modal | 15% | Fair | Fair | Images and an animated mockup only; no video |
| Authority & brand | 20% | Low | Low–fair | Visible updated dates and byline added; no named expert, no off-site brand presence |
| Technical accessibility | 20% | Good | Good | Static SSR HTML, AI search crawlers allowed, sitemap, canonical on www |

## 2. Platform readiness (qualitative — not measured)

Semrush and DataForSEO were not available in this session, so rankings and AI citations were not measured.

- **Google AI Overviews:** depends on ranking in the top 10 first. On-page work is done; ranking now needs links and brand mentions.
- **Google AI Mode:** draws on a wider pool and rewards freshness and entity clarity, both improved.
- **ChatGPT / Perplexity:** lean on Wikipedia and Reddit. The brand has no presence there.

Competitors seen for "IPTV Polska": iptv-polska.pl, iptv-poland.pl, iptv-polska.store (exact-match domains with
fact-dense pages: channel counts, number of Polish channels, refund guarantee, minimum speed).

## 3. AI crawler access (robots.txt)

| User agent | Governs | Status |
|---|---|---|
| Googlebot | Google Search, AI Overviews, AI Mode | Allowed (`*`) |
| OAI-SearchBot | ChatGPT Search citations | Allowed (explicit) |
| ChatGPT-User | ChatGPT browsing for a user | Allowed (explicit) |
| Claude-SearchBot | Claude search citations | Allowed (explicit) |
| Claude-User | Claude browsing for a user | Allowed (explicit) |
| PerplexityBot | Perplexity search | Allowed (explicit) |
| GPTBot | OpenAI model training only | Allowed (`*`) — block if you don't want training use |
| ClaudeBot | Anthropic model training only | Allowed (`*`) |
| Google-Extended | Gemini/Vertex training & grounding (not Search) | Allowed (`*`) |
| CCBot | Common Crawl training | Allowed (`*`) |

## 4. llms.txt

Added at `/llms.txt`, generated from the plans and blog posts. **Google says it neither helps nor hurts Search**;
it may be read by other AI tools. It carries no weight in the score above.

## 5. Brand mentions

None found on Wikipedia, Reddit, YouTube or LinkedIn. Brand mentions correlate with AI citations about 3x more than
backlinks (Ahrefs, 75k brands, 2025-12-12). This is the largest remaining gap and cannot be fixed in code.

## 6. Passage-level citability

- Homepage: "Czym jest IPTV Polska?" (~120 words, direct definition in the first sentence, specific facts) — citable.
- Homepage facts table: price, channels, VOD, quality, catch-up, devices, speed, trial, refund — citable.
- FAQ: 11 self-contained answers, each repeating the subject so it stands alone.
- `/blog/najlepsze-iptv-polska`: "Krótka odpowiedź" block at the top.

## 7. Server-side rendering

All pages are statically prerendered. The definition, facts table, and every FAQ answer (including collapsed ones)
are in the raw HTML, so crawlers that don't run JavaScript still see them.

## 8. Top 5 highest-impact next steps (off-page)

1. Build brand presence: a YouTube channel with setup tutorials ("IPTV Polska — jak zainstalować na Firestick"),
   and genuine participation in Polish expat communities on Reddit and Facebook.
2. Earn links and mentions from Polish expat sites and forums in the UK, Germany and Ireland.
3. Connect Google Search Console and Bing Webmaster Tools, submit the sitemap, and use IndexNow after deploys.
4. Refresh the homepage facts and the top posts every 2–3 months (pages under 3 months old are cited far more often).
5. Publish one piece of original data (e.g. measured stream stability or a price comparison you update monthly) —
   unique data is what AI answers cite.

## 9. Schema in place

- Homepage `@graph`: Organization, WebSite, WebPage, Product (AggregateOffer €15–€110 with 5 offers), FAQPage
  generated from the same data as the visible FAQ.
- Blog posts: BlogPosting (published + modified dates, section, publisher logo) and BreadcrumbList.
- Product pages: Product + BreadcrumbList (existing).
- Missing (needs real data): `sameAs` links to official social profiles; Person author with credentials.

## 10. Content changes made

- Title: "IPTV Polska — Telewizja Internetowa w 4K od €15 | IPTV Telewizja"; meta description leads with the keyword.
- H1 "IPTV Polska — telewizja internetowa w 4K"; keyword added to the intro, pricing, devices and FAQ headings
  (15 visible mentions, natural density).
- Internal links: every blog post links to the homepage with the anchor "IPTV Polska od IPTV Telewizja"; the homepage links to the pillar post.
- Blog posts show "Zaktualizowano" dates and an author byline linking to /about.
