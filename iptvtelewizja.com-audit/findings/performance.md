## 6. Performance (lab, Lighthouse mobile) — 82
| Page | Perf | A11y | Best pr. | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| / | 94 | 90 | 96 | 100 | 3.0 s | 0 | 60 ms |
| /blog/najlepsze-iptv-polska | 94 | 95 | 96 | 100 | 3.1 s | 0 | 0 ms |

- Medium: home LCP is the H1, delayed by its opacity fade-in (532 ms render delay).
- Medium: post LCP is the cover `<img>` without width/height (362 ms render delay); images are JPEG through a plain `<img>`.
- Low: render-blocking CSS (~130–150 ms), unused and legacy JavaScript.
- Info: the console error (Vercel Analytics 404) only happens off Vercel.
