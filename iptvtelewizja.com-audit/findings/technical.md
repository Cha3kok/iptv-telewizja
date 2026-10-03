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
