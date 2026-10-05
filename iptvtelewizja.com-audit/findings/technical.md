## 1. Technical SEO — 84 (unchanged)
**Works:** 27/27 URLs return 200 with self-referencing `www` canonicals; 6 legacy blog URLs 308-redirect to their new
slugs; real 404s; security headers; fully server-rendered; AI search crawlers allowed and not challenged (live check).
**Findings:** High — apex 307 → www. Medium — second `www` IP (64.29.17.1) unreachable from the audit network;
verify from several regions. Medium — no Search Console, Bing or IndexNow. Low — no CSP header.
