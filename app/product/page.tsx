import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import JsonLd from "../components/JsonLd";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { products } from "../lib/products";

export const metadata: Metadata = {
  title: "Plany i cennik IPTV — od €15 | IPTVTelewizja",
  description:
    "Porównaj wszystkie plany subskrypcji IPTVTelewizja od €15. 50 000+ kanałów, 4K Ultra HD, 7-dniowy catch-up. Wybierz 1, 3, 6, 12 lub 24 miesiące. Bez umowy. Natychmiastowa aktywacja.",
  alternates: { canonical: "https://iptvtelewizja.com/product" },
  openGraph: {
    title: "Plany i cennik IPTV — od €15 | IPTVTelewizja",
    description:
      "50 000+ kanałów, streaming 4K, 7-dniowy catch-up. Plany od €15. Porównaj subskrypcje IPTV na 1, 3, 6, 12 i 24 miesiące.",
    url: "https://iptvtelewizja.com/product",
  },
};

const catalogSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "IPTVTelewizja Subskrypcja",
  description:
    "Premium polska subskrypcja IPTV z 50 000+ kanałami na żywo, 200 000+ VOD, jakością 4K Ultra HD, 7-dniowym catch-up TV i wsparciem 24/7.",
  image: "https://iptvtelewizja.com/og-image.svg",
  brand: { "@type": "Brand", name: "IPTVTelewizja" },
  offers: products.map((p) => ({
    "@type": "Offer",
    name: p.name,
    price: p.price.toString(),
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: `https://iptvtelewizja.com/product/${p.slug}`,
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2847",
    bestRating: "5",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://iptvtelewizja.com" },
    { "@type": "ListItem", position: 2, name: "Plany", item: "https://iptvtelewizja.com/product" },
  ],
};

const TRIAL_LINK = "https://wa.me/212707711512?text=iptvtelewizja.com%20-%20Darmowy%20test%203h";

const planFeatures = [
  "50 000+ kanałów na żywo",
  "Streaming 4K Ultra HD",
  "7-dniowy catch-up TV",
  "Wsparcie 24/7",
];

const trustPoints = [
  {
    icon: "📡",
    title: "50 000+ kanałów na żywo",
    description:
      "Polskie, sportowe, informacyjne, dla dzieci i kanały zagraniczne — wszystko w jednej subskrypcji. TVP, Polsat, Canal+, Eleven Sports i tysiące innych.",
  },
  {
    icon: "⚡",
    title: "Technologia Anti-Freeze™",
    description:
      "Nasza infrastruktura CDN oceniana na 9,8 zapewnia płynne, bezbuforowe strumieniowanie nawet podczas największych wydarzeń na żywo i w godzinach szczytu.",
  },
  {
    icon: "🔒",
    title: "Gwarancja zwrotu przez 48h",
    description:
      "Nie jesteś zadowolony w ciągu pierwszych 48 godzin? Zwrócimy Ci pieniądze bez zadawania pytań. Jesteśmy pewni jakości naszej usługi.",
  },
  {
    icon: "🌍",
    title: "Działa wszędzie",
    description:
      "Korzystaj z subskrypcji gdziekolwiek na świecie. Idealny dla Polaków za granicą lub każdego w podróży. Nie wymaga VPN.",
  },
];

const monthlyEquivalents: Record<string, string> = {
  "1-miesiac-iptv-telewizja": "€15,00/mies.",
  "3-miesiace-iptv-telewizja": "€11,67/mies.",
  "6-miesiecy-iptv-telewizja": "€7,50/mies.",
  "12-miesiecy-iptv-telewizja": "€5,00/mies.",
  "24-miesiace-iptv-telewizja": "€4,58/mies.",
};

const devicesBySlug: Record<string, string> = {
  "1-miesiac-iptv-telewizja": "Do 4",
  "3-miesiace-iptv-telewizja": "Do 4",
  "6-miesiecy-iptv-telewizja": "Do 4",
  "12-miesiecy-iptv-telewizja": "Do 4",
  "24-miesiace-iptv-telewizja": "Do 4",
};

export default function ProductCatalogPage() {
  return (
    <>
      <JsonLd data={catalogSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />

      <main className="bg-[#0a0a0a] pt-[100px]">

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
          <nav className="text-zinc-500 text-sm flex items-center gap-1.5">
            <Link href="/" className="hover:text-white transition-colors">Strona główna</Link>
            <span>/</span>
            <span className="text-zinc-300">Plany</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="py-16 text-center px-4">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Plany cenowe
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Wybierz swój plan IPTV
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
            Wszystkie plany zawierają te same funkcje premium — 50 000+ kanałów, jakość 4K, 7-dniowy catch-up. Jedyną różnicą jest długość subskrypcji i oszczędności.
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap text-sm text-zinc-400">
            <span>⭐ 4,9 / 2 847 opinii</span>
            <span className="text-zinc-700">|</span>
            <span>✅ Bez umów</span>
            <span className="text-zinc-700">|</span>
            <span>🔒 Zwrot w 48h</span>
          </div>
        </section>

        {/* Product Cards Grid */}
        <section className="py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => {
                const waLink = `https://wa.me/212707711512?text=${encodeURIComponent(product.whatsappMessage)}`;
                return (
                  <div
                    key={product.slug}
                    className={`relative rounded-2xl border p-7 flex flex-col transition-all duration-300 ${
                      product.highlight
                        ? "bg-gradient-to-br from-amber-500 to-amber-600 border-amber-400 shadow-lg shadow-amber-500/20"
                        : "bg-[#111111] border-white/5 hover:border-amber-500/30"
                    }`}
                  >
                    {/* Badge */}
                    {product.badge && (
                      <span
                        className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold px-3 py-0.5 rounded-full whitespace-nowrap ${
                          product.highlight
                            ? "bg-white text-amber-600"
                            : "bg-amber-500 text-white"
                        }`}
                      >
                        {product.badge}
                      </span>
                    )}

                    {/* Plan name & price */}
                    <div className="mb-6">
                      <h2
                        className={`text-lg font-bold mb-1 ${
                          product.highlight ? "text-white" : "text-white"
                        }`}
                      >
                        {product.name}
                      </h2>
                      <div className="flex items-baseline gap-2">
                        <span
                          className={`text-4xl font-extrabold ${
                            product.highlight ? "text-white" : "text-white"
                          }`}
                        >
                          €{product.price}
                        </span>
                        <span
                          className={`text-sm ${
                            product.highlight ? "text-amber-100" : "text-zinc-400"
                          }`}
                        >
                          {product.period}
                        </span>
                      </div>
                      <p
                        className={`text-xs mt-1 font-medium ${
                          product.highlight ? "text-amber-100" : "text-amber-400"
                        }`}
                      >
                        {monthlyEquivalents[product.slug]}
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                      {planFeatures.map((feat) => (
                        <li key={feat} className="flex items-center gap-2.5 text-sm">
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                              product.highlight
                                ? "bg-white/25"
                                : "bg-amber-500/15"
                            }`}
                          >
                            <Check
                              size={11}
                              className={product.highlight ? "text-white" : "text-amber-400"}
                            />
                          </span>
                          <span
                            className={product.highlight ? "text-amber-50" : "text-zinc-300"}
                          >
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Buttons */}
                    <div className="flex flex-col gap-2.5">
                      <Link
                        href={`/product/${product.slug}`}
                        className={`text-center text-sm font-semibold px-5 py-2.5 rounded-full transition-colors ${
                          product.highlight
                            ? "bg-white text-amber-600 hover:bg-amber-50"
                            : "bg-amber-500 hover:bg-amber-400 text-white"
                        }`}
                      >
                        Zobacz plan
                      </Link>
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-center text-sm font-medium px-5 py-2.5 rounded-full transition-colors ${
                          product.highlight
                            ? "bg-white/20 hover:bg-white/30 text-white border border-white/30"
                            : "border border-white/10 hover:border-amber-500/40 text-zinc-300 hover:text-white"
                        }`}
                      >
                        Subskrybuj teraz
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 px-4 bg-[#0d0d0d] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Porównaj plany
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Wszystkie plany obok siebie
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-zinc-400 text-sm font-medium py-3 pr-6 w-1/3">
                      Funkcja
                    </th>
                    {products.map((p) => (
                      <th
                        key={p.slug}
                        className={`text-center text-sm font-semibold py-3 px-3 ${
                          p.highlight ? "text-amber-400" : "text-white"
                        }`}
                      >
                        {p.badge && (
                          <span className="block text-[10px] text-amber-400 font-bold uppercase mb-0.5">
                            {p.badge}
                          </span>
                        )}
                        {p.name.replace(" IPTV Telewizja", "")}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="py-3.5 pr-6 text-zinc-400 text-sm">Cena</td>
                    {products.map((p) => (
                      <td
                        key={p.slug}
                        className={`text-center text-sm font-bold py-3.5 px-3 ${
                          p.highlight ? "text-amber-400" : "text-white"
                        }`}
                      >
                        €{p.price}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-6 text-zinc-400 text-sm">Czas trwania</td>
                    {products.map((p) => (
                      <td
                        key={p.slug}
                        className="text-center text-sm text-zinc-300 py-3.5 px-3"
                      >
                        {p.name.split(" ").slice(0, 2).join(" ")}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-6 text-zinc-400 text-sm">Ekwiwalent miesięczny</td>
                    {products.map((p) => (
                      <td
                        key={p.slug}
                        className={`text-center text-sm font-semibold py-3.5 px-3 ${
                          p.highlight ? "text-amber-400" : "text-amber-400/80"
                        }`}
                      >
                        {monthlyEquivalents[p.slug]}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-6 text-zinc-400 text-sm">Urządzenia</td>
                    {products.map((p) => (
                      <td
                        key={p.slug}
                        className="text-center text-sm text-zinc-300 py-3.5 px-3"
                      >
                        {devicesBySlug[p.slug]}
                      </td>
                    ))}
                  </tr>
                  {[
                    "50 000+ kanałów",
                    "4K Ultra HD",
                    "7-dniowy catch-up",
                    "200 000+ VOD",
                    "Przewodnik EPG",
                    "Wsparcie 24/7",
                  ].map((feature) => (
                    <tr key={feature}>
                      <td className="py-3.5 pr-6 text-zinc-400 text-sm">{feature}</td>
                      {products.map((p) => (
                        <td key={p.slug} className="text-center py-3.5 px-3">
                          <span className="inline-flex items-center justify-center w-5 h-5 bg-amber-500/15 rounded-full">
                            <Check size={11} className="text-amber-400" />
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why IPTVTelewizja */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Dlaczego my
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Dlaczego IPTVTelewizja?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustPoints.map((point) => (
                <div
                  key={point.title}
                  className="bg-[#111111] border border-white/5 hover:border-amber-500/20 rounded-2xl p-7 transition-all"
                >
                  <div className="text-3xl mb-4">{point.icon}</div>
                  <h3 className="text-white font-semibold text-base mb-2">{point.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 px-4 bg-gradient-to-b from-[#0d0d0d] to-[#0a0a0a] border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Nie jesteś pewien?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Wypróbuj IPTVTelewizja za darmo przez 3 godziny
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              Bez karty kredytowej. Bez zobowiązań. Napisz do nas na WhatsApp, a aktywujemy Twój darmowy test w ciągu kilku minut.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={TRIAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-sm w-full sm:w-auto text-center"
              >
                Zacznij darmowy test 3h
              </a>
              <Link
                href="/product/6-miesiecy-iptv-telewizja"
                className="border border-white/15 hover:border-amber-500/40 text-zinc-300 hover:text-white font-medium px-8 py-3.5 rounded-full transition-colors text-sm w-full sm:w-auto text-center"
              >
                Zobacz najpopularniejszy plan
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
