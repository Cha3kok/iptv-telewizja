import { getAllPosts } from "../lib/mdx";
import { products } from "../lib/products";
import { SITE_URL } from "../lib/site";

export const dynamic = "force-static";

// Optional map for AI assistants (llmstxt.org). Google Search ignores it; it costs nothing to serve.
export function GET() {
  const lines = [
    "# IPTV Telewizja — IPTV Polska",
    "",
    "> IPTV Polska: telewizja internetowa z 50 000+ kanałami na żywo (w tym pełny pakiet polskich kanałów ogólnopolskich i sportowych), 200 000+ filmów i seriali VOD, jakością do 4K i 7-dniowym catch-upem. Plany od €15 za miesiąc do €110 za 24 miesiące, bez umowy, z darmowym testem 3h. Działa w Polsce i za granicą.",
    "",
    "## Najważniejsze strony",
    `- [IPTV Polska — strona główna](${SITE_URL}/): oferta, cennik, urządzenia i FAQ`,
    `- [Plany i cennik](${SITE_URL}/product): porównanie planów 1–24 miesiące`,
    `- [Instrukcja instalacji](${SITE_URL}/setup): konfiguracja na Firestick, Smart TV, Android, iPhone, MAG i Windows`,
    `- [Kontakt](${SITE_URL}/contact): wsparcie 24/7 przez WhatsApp i e-mail`,
    "",
    "## Plany",
    ...products.map((p) => `- [${p.name}](${SITE_URL}/product/${p.slug}): €${p.price}, ${p.period}`),
    "",
    "## Blog",
    ...getAllPosts().map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.excerpt}`),
    "",
    "## Zasady",
    `- [Polityka zwrotów](${SITE_URL}/refund-policy)`,
    `- [Regulamin](${SITE_URL}/terms-of-service)`,
    `- [Polityka prywatności](${SITE_URL}/privacy-policy)`,
    `- [DMCA](${SITE_URL}/dmca)`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
