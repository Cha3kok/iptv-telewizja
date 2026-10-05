# Full SEO Audit — www.iptvtelewizja.com

**Date:** 2026-10-03 (third run) · **Focus keyword:** IPTV Polska
**Audited:** the current working tree (content fixes, not yet deployed) as a local production build, 27 pages.
Hosting-dependent results (redirects, DNS, server speed, AI-crawler access) carry over from the live audit earlier
today, since the infrastructure hasn't changed.
**Data limits:** no Search Console, CrUX, GA4, Moz, DataForSEO or PageSpeed API key. Lab data only.

## Executive summary

**SEO Health Score: 80 / 100 once deployed** (live site today: 76; first audit: 74).

**Business type:** online IPTV subscription for a Polish audience in Poland and abroad, sold via WhatsApp. Not local.

| Category | Weight | Live (earlier today) | After this deploy |
|---|---|---|---|
| Technical SEO | 22% | 84 | 84 |
| Content quality | 23% | 60 | 74 |
| On-page SEO | 20% | 72 | 76 |
| Schema / structured data | 10% | 85 | 85 |
| Performance (lab) | 10% | 95 | 95 |
| AI search readiness | 10% | 72 | 75 |
| Images | 5% | 75 | 75 |

### What changed since the last audit
- Five thin posts were rewritten (about 250–300 → 738–1,046 body words), each with a direct answer, tables, FAQ and links.
- The duplicate Smart TV post was merged; four English slugs became Polish; 6 old URLs 308-redirect; 0 broken internal links.
- Unverifiable claims were removed ("25 000+ subskrybentów", "99,9% dostępności", "najbardziej zaufana", "2 miliony
  gospodarstw", a non-existent "ThinQ" app). /about now has an editorial-standards section.
- Brand name is unified as "IPTV Telewizja" (variants kept only as schema `alternateName`).
- Content quality scorer: 90–91 on every rewritten page; 0 filler, 0 AI-pattern flags.

### Top 5 remaining issues
1. **High — not deployed.** Everything above is local. Deploying moves the live score from 76 to about 80.
2. **High — no business identity (E-E-A-T).** No company name, address or NIP; Gmail contact; no named author.
   This needs real details from the owner.
3. **High — almost no backlinks.** The domain isn't in the Common Crawl web graph; competitors with exact-match
   domains dominate "IPTV Polska".
4. **High — apex redirect still 307** (`iptvtelewizja.com` → `www`); should be 308 (Vercel setting).
5. **Medium — titles too long.** 18 of 27 titles exceed 60 characters (blog 61–90, products 63–72); 11 descriptions
   are outside 70–160 characters.

### Top 5 quick wins
1. Deploy the working tree; set the apex redirect to 308; verify Search Console and submit the sitemap.
2. Shorten 18 titles (drop the " — IPTV Telewizja" suffix on long ones or trim frontmatter titles).
3. Render all six /setup device guides in the HTML (only Firestick is crawlable today).
4. Link the 24-month plan from the homepage pricing and other product pages (1 inbound link).
5. Expand `tanie-iptv-polska` (534 body words, now the shortest post).

## 1. Technical SEO — 84 (unchanged)
**Works:** 27/27 URLs return 200 with self-referencing `www` canonicals; 6 legacy blog URLs 308-redirect to their new
slugs; real 404s; security headers; fully server-rendered; AI search crawlers allowed and not challenged (live check).
**Findings:** High — apex 307 → www. Medium — second `www` IP (64.29.17.1) unreachable from the audit network;
verify from several regions. Medium — no Search Console, Bing or IndexNow. Low — no CSP header.

## 2. Content quality — 74 (was 60)
**Works**
- Every blog post is now 534–1,060 body words; no post under 500.
- Each rewritten post opens with a self-contained "Krótka odpowiedź".
- Question-based headings; comparison tables; FAQ sections.
- Facts consistent with the offer (prices, 48 h refund, 1–4 devices, speeds).
- No unverifiable statistics left in visible copy.
- Bylines and updated dates on every post; editorial-standards section on /about.

**Findings**
- High: no company name, address, NIP or branded email; the author is "Redakcja IPTV Telewizja" with no named person.
- Medium: `tanie-iptv-polska` is the shortest post (534 words) and targets a competitive query.
- Medium: brand confusion with myiptvtelewizja.com (a separate site).
- Low: testimonials are unattributed customer quotes with no verification source.

## 3. On-page SEO — 76 (was 72)
**Works:** one H1 per page; keyword-led homepage; Polish slugs; 0 broken internal links; inbound links improved
(every blog post now has 3+ inbound links).
**Findings**
- Medium: 18/27 titles over 60 characters; 11 descriptions outside 70–160.
- Medium: /setup exposes 1 of 6 guides in HTML.
- Medium: `/product/24-miesiace-iptv-telewizja` has 1 inbound internal link.

## 4. Schema — 85 (unchanged)
Valid JSON-LD on all 27 pages (Organization, WebSite, WebPage, Product and AggregateOffer, FAQPage; BlogPosting and
BreadcrumbList on posts; Product and BreadcrumbList on plans). Missing: `sameAs` profiles; CollectionPage on /blog.

## 5. Performance — 95 (live lab data from earlier today)
Mobile Lighthouse 97–99, desktop 100; mobile LCP 1.8–2.1 s; CLS 0; TTFB about 50 ms. Lab re-check of the rewritten
pages: SEO 100, accessibility 94–95, best practices 96 (local build). Remaining: hero H1 fade-in; unsized blog images.

## 6. AI search readiness — 75 (was 72)
More citable passages: five new "Krótka odpowiedź" blocks, comparison tables and FAQs in the raw HTML. Crawler
access and `llms.txt` pass. The biggest gap is still off-site: no YouTube, Reddit, Wikipedia or LinkedIn presence, and
the domain isn't in Common Crawl.

## 7. Images — 75
0 images without alt text across 27 pages; 5 new logo-free cover images. Still served as JPEG through a plain `<img>`
without width/height.
