# Action Plan — iptvtelewizja.com

Ordered by priority. "Code" items can be done in the repo; "Owner" items need your accounts or business details.

## Critical (now)
1. **Deploy the `audit-fixes` branch** — fixes canonicals, share image, `/dmca`, `/llms.txt`, Next.js security. *(Code — merge + deploy)*
2. **Set apex → www redirect to permanent (308)** in Vercel → Project → Settings → Domains. *(Owner)*
3. **Verify Google Search Console and Bing Webmaster Tools**, submit `https://www.iptvtelewizja.com/sitemap.xml`. *(Owner)*

## High (this week)
4. **Hero LCP:** remove the opacity fade on the hero H1 and intro paragraph; keep a transform-only entrance. Expected −0.5 s mobile LCP. *(Code)*
5. **Trust / E-E-A-T:** add company name, address and NIP to the legal pages and footer; use a branded email (e.g. kontakt@iptvtelewizja.com); name a real author with a short bio on /about. *(Owner provides details, then code)*
6. **Thin posts:** expand to 1 000+ words or merge: `what-is-iptv-complete-guide`, `iptv-buffering-fix-guide`, `jak-ogladac-sport-bez-telewizji-satelitarnej`, `iptv-vs-satellite-tv-comparison`, `best-iptv-app-firestick-2025`. *(Code/content)*
7. **Merge duplicate Smart TV posts:** fold `iptv-setup-guide-smart-tv-2025` into `iptv-smart-tv-polska`, 308 redirect. *(Code)*

## Medium (this month)
8. **Titles ≤ 60 characters** on all blog and product pages (use `title.absolute` or shorter frontmatter titles). *(Code)*
9. **Descriptions 120–160 characters** on 13 pages; lengthen /terms-of-service. *(Code)*
10. **Blog images:** move to `next/image` (WebP/AVIF, width/height, responsive sizes); preload the post cover. *(Code)*
11. **Internal links:** link the 24-month plan from the pricing section and product pages; link the weak posts from related posts and the homepage intro. *(Code)*
12. **Accessibility:** move `aria-label` off the star `<div>` (use `role="img"`), match logo link label to visible text, footer `<h4>` → `<h3>`, raise small-text contrast (`slate-500` → `slate-400`). *(Code)*
13. **Polish slugs** for the four English-slug posts, with 308 redirects. *(Code)*
14. **Check the `www` DNS IP** (64.29.17.1 didn't respond from the audit network); run PageSpeed Insights from several regions. *(Owner)*

## Low (backlog)
15. `sameAs` links once official social profiles exist. *(Owner → code)*
16. CollectionPage/ItemList schema on /blog; link /about and /contact schema to `#organization`. *(Code)*
17. Auto-hide the WhatsApp tooltip on desktop after a few seconds. *(Code)*
18. IndexNow key + ping after each deploy. *(Code)*

## Off-site (ongoing — biggest lever for "IPTV Polska" and AI answers)
- YouTube setup tutorials in Polish; genuine participation in Polish expat communities (UK, DE, IE).
- Links from Polish expat portals and forums.
- Refresh homepage facts and top posts every 2–3 months.
