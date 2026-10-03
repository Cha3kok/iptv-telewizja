## 5. Schema — 85
**Works:** all JSON-LD parses. Home: Organization, WebSite, WebPage, Product with AggregateOffer (€15–€110), FAQPage
mirrored from the visible FAQ. Posts: BlogPosting + BreadcrumbList with published and modified dates. Products:
Product + BreadcrumbList. Fake AggregateRating removed.

**Findings**
- Medium: Organization has no `sameAs` (no official social profiles exist yet).
- Low: /blog has no CollectionPage/ItemList; /about and /contact use standalone nodes not linked to `#organization`.
- Info: FAQ rich results are limited to government and health sites; FAQPage stays for understanding only.
