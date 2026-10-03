# Full SEO Audit — iptvtelewizja.com

**Date:** 2026-10-03 · **Focus keyword:** IPTV Polska · **Pages crawled:** 29 (all HTTP 200)
**Audited build:** branch `audit-fixes` served as a local production build. The live site still runs the old
version; the differences are listed in section 1.
**Data limits:** no Google Search Console, CrUX, GA4, Moz or DataForSEO credentials, so this is a lab audit: no field
Core Web Vitals, rankings, traffic or backlink data.

## Executive summary

**SEO Health Score: 74 / 100** (branch build). The live site would score much lower until the branch is deployed,
mainly because of its canonical/domain mismatch.

**Business type:** online subscription service (IPTV), sold through WhatsApp; Polish audience in Poland and abroad. Not
a local business, so local SEO and Maps checks were skipped.

| Category | Weight | Score |
|---|---|---|
| Technical SEO | 22% | 80 |
| Content quality | 23% | 62 |
| On-page SEO | 20% | 72 |
| Schema / structured data | 10% | 85 |
| Performance (lab) | 10% | 82 |
| AI search readiness | 10% | 75 |
| Images | 5% | 75 |

### Top 5 issues
1. **Critical — the fixes aren't live.** The live homepage still has `canonical: https://iptvtelewizja.com`, which
   307-redirects to `www`. `/dmca`, `/llms.txt` and `/og-image.png` return 404 on the live site.
2. **High — weak trust signals (E-E-A-T).** No named author or company details (name, address, NIP); support via a
   Moroccan WhatsApp number and an off-brand Gmail address; "25 000+ subskrybentów" on /about can't be verified.
3. **High — thin, overlapping blog content.** Six older posts have roughly 200–270 words of real content, and two posts
   both cover Smart TV setup (`iptv-setup-guide-smart-tv-2025` and `iptv-smart-tv-polska`).
4. **Medium — titles too long.** 21 of 28 titles exceed 60 characters (blog titles up to 89) because the template adds
   " — IPTVTelewizja" to already long titles; 13 meta descriptions are over 160 characters.
5. **Medium — mobile LCP 3.0 s (lab).** The LCP element is the homepage H1, which starts at opacity 0 for its fade-in
   animation (532 ms render delay). Target is 2.5 s.

### Top 5 quick wins
1. Deploy the branch, set the apex → www redirect to permanent (308) in Vercel, and submit the sitemap in Search Console.
2. Remove the opacity fade from the hero H1 and paragraph (keep a transform-only animation): about −0.5 s LCP.
3. Shorten blog and product titles to ≤ 60 characters, or drop the brand suffix for long titles.
4. Add width/height to blog `<img>` tags and serve WebP via `next/image`.
5. Fix the three accessibility failures: `aria-label` on the star-rating `<div>`, logo link label mismatch, footer
   `<h4>` heading order; raise `slate-500` small-text contrast.

## 1. Live site vs branch

| Check | Live now | Branch |
|---|---|---|
| Canonical | `https://iptvtelewizja.com` (redirects) | `https://www.iptvtelewizja.com` |
| Title | "IPTV Telewizja — Polska TV Online…" | "IPTV Polska — Telewizja Internetowa w 4K od €15…" |
| Share image | SVG with "BritishIPTV" branding | 1200×630 PNG, correct brand |
| `/dmca`, `/llms.txt` | 404 | 200 |
| Next.js | 16.2.1 (critical advisories) | 16.3.8 |
| Apex redirect | 307 (temporary) | needs Vercel setting → 308 |

## 2. Technical SEO — 80
**Works:** static prerendering for every page (content in raw HTML); one canonical per page; XML sitemap with real
`lastmod`; robots.txt allows all crawlers and explicitly the AI search bots; real 404s with a Polish 404 page; 308
redirect from the renamed blog slug; security headers (nosniff, X-Frame-Options, Referrer-Policy, Permissions-Policy, HSTS).

**Findings**
- Critical: branch not deployed (see section 1).
- High: apex → www uses a 307 (temporary) redirect; it should be 308 (Vercel → Domains).
- Medium: on 2026-10-03 one of the two IPs that `www` resolves to (64.29.17.1) didn't respond from the audit network,
  adding 15–30 s per request. Verify with PageSpeed Insights from several locations; consider using the apex as the
  primary domain, since it resolves only to the working IP.
- Low: no Search Console or Bing Webmaster verification detected; IndexNow not configured.

## 3. Content quality — 62
**Works:** the homepage has a clear definition and facts table for "IPTV Polska"; 11-question FAQ; facts are now
consistent site-wide (price, refund, devices); quality script found no filler or AI-pattern language (overall 90–91).

**Findings**
- High: E-E-A-T. The byline is "Redakcja IPTV Telewizja" with no named person or credentials; legal pages have no company
  identity; contact is a Gmail address unrelated to the brand.
- High: thin posts (real content after removing navigation): `what-is-iptv-complete-guide`, `iptv-buffering-fix-guide`,
  `jak-ogladac-sport-bez-telewizji-satelitarnej`, `iptv-vs-satellite-tv-comparison`, `best-iptv-app-firestick-2025`,
  `iptv-setup-guide-smart-tv-2025`. Expand to 1 000+ words or merge.
- Medium: keyword overlap — `iptv-setup-guide-smart-tv-2025` vs `iptv-smart-tv-polska`. Merge into the latter with a 308.
- Medium: English slugs on Polish posts (`best-iptv-app-firestick-2025`, `what-is-iptv-complete-guide`,
  `iptv-buffering-fix-guide`, `iptv-vs-satellite-tv-comparison`) and "2025" in two slugs.
- Low: /about claims "25 000+ aktywnych subskrybentów" and "99,9% dostępności" without evidence.

## 4. On-page SEO — 72
**Works:** one H1 on every page; homepage title, description and H1 lead with "IPTV Polska"; question-based H2/H3s;
every post links to the homepage with the anchor "IPTV Polska"; no missing descriptions or canonicals.

**Findings**
- Medium: 21 titles over 60 characters — every blog post (65–89) and product page (67–72); home is 64.
- Medium: 13 descriptions over 160 characters (products 166–202, several posts 163–188); /terms-of-service is 63.
- Medium: weak internal links — `/product/24-miesiace-iptv-telewizja` has 1 inbound link, `what-is-iptv-complete-guide` 1,
  `jak-ogladac-sport-bez-telewizji-satelitarnej` 2, `iptv-vs-satellite-tv-comparison` 2.
- Low: /blog has no intro copy targeting "blog IPTV Polska" and no CollectionPage schema.

## 5. Schema — 85
**Works:** all JSON-LD parses. Home: Organization, WebSite, WebPage, Product with AggregateOffer (€15–€110), FAQPage
mirrored from the visible FAQ. Posts: BlogPosting + BreadcrumbList with published and modified dates. Products:
Product + BreadcrumbList. Fake AggregateRating removed.

**Findings**
- Medium: Organization has no `sameAs` (no official social profiles exist yet).
- Low: /blog has no CollectionPage/ItemList; /about and /contact use standalone nodes not linked to `#organization`.
- Info: FAQ rich results are limited to government and health sites; FAQPage stays for understanding only.

## 6. Performance (lab, Lighthouse mobile) — 82
| Page | Perf | A11y | Best pr. | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| / | 94 | 90 | 96 | 100 | 3.0 s | 0 | 60 ms |
| /blog/najlepsze-iptv-polska | 94 | 95 | 96 | 100 | 3.1 s | 0 | 0 ms |

- Medium: home LCP is the H1, delayed by its opacity fade-in (532 ms render delay).
- Medium: post LCP is the cover `<img>` without width/height (362 ms render delay); images are JPEG through a plain `<img>`.
- Low: render-blocking CSS (~130–150 ms), unused and legacy JavaScript.
- Info: the console error (Vercel Analytics 404) only happens off Vercel.

## 7. AI search readiness — 75
See `../GEO-ANALYSIS.md`. Citable definition, facts table and FAQ are in the raw HTML; AI search crawlers are
allowed; `llms.txt` is present (Google ignores it). Biggest gap: no brand presence on YouTube, Reddit, Wikipedia or
LinkedIn.

## 8. Images — 75
**Works:** every `<img>` has alt text (0 missing); the 7 logo-bearing photos were replaced; OG image is a 1200×630 PNG.
**Findings:** Medium — blog images have no width/height and are served as JPEG (no WebP/AVIF, no responsive sizes).

## 9. Visual and mobile
Screenshots in `screenshots/`. No horizontal overflow at 390 px or 1440 px. The WhatsApp tooltip bubble overlaps
content on desktop until dismissed (Low).
