import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChannelMarquee from "./components/ChannelMarquee";
import FinalCta from "./components/FinalCta";
import Features from "./components/Features";
import Devices from "./components/Devices";
import Setup from "./components/Setup";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import StickyBar from "./components/StickyBar";
import JsonLd from "./components/JsonLd";
import IptvPolskaIntro from "./components/IptvPolskaIntro";
import { OG_IMAGE, PAGES_UPDATED, SITE_URL } from "./lib/site";
import { SUPPORT_EMAIL, WHATSAPP_NUMBER } from "./lib/contact";
import { homeFaqs } from "./lib/faq";
import { products } from "./lib/products";

const TITLE = "IPTV Polska — Telewizja Internetowa w 4K od €15 | IPTV Telewizja";
const DESCRIPTION =
  "IPTV Polska od €15: 50 000+ kanałów na żywo w 4K, polskie kanały i sport, 7-dniowy catch-up i 200 000+ VOD. Działa w Polsce i za granicą. Darmowy test 3h.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/", images: [OG_IMAGE] },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

// One connected graph so search engines read the brand, site, page, offer and FAQ as related entities.
const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "IPTV Telewizja",
      alternateName: ["IPTVTelewizja", "IPTV Telewizja Polska"],
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
      email: SUPPORT_EMAIL,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SUPPORT_EMAIL,
        telephone: `+${WHATSAPP_NUMBER}`,
        availableLanguage: ["pl", "en"],
        hoursAvailable: { "@type": "OpeningHoursSpecification", opens: "00:00", closes: "23:59" },
      },
    },
    {
      "@type": "WebSite",
      "@id": SITE_ID,
      url: SITE_URL,
      name: "IPTV Telewizja",
      inLanguage: "pl-PL",
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "pl-PL",
      isPartOf: { "@id": SITE_ID },
      about: { "@id": `${SITE_URL}/#service` },
      primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}/og-image.png` },
      dateModified: PAGES_UPDATED,
    },
    {
      "@type": "Product",
      "@id": `${SITE_URL}/#service`,
      name: "IPTV Polska — subskrypcja IPTV Telewizja",
      description:
        "Subskrypcja IPTV Polska: 50 000+ kanałów na żywo, polskie kanały ogólnopolskie i sportowe, 200 000+ filmów i seriali VOD, jakość do 4K i 7-dniowy catch-up.",
      image: `${SITE_URL}/og-image.png`,
      brand: { "@id": ORG_ID },
      category: "Telewizja internetowa (IPTV)",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        lowPrice: Math.min(...products.map((p) => p.price)),
        highPrice: Math.max(...products.map((p) => p.price)),
        offerCount: products.length,
        availability: "https://schema.org/InStock",
        offers: products.map((p) => ({
          "@type": "Offer",
          name: p.name,
          price: p.price,
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/product/${p.slug}`,
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      inLanguage: "pl-PL",
      mainEntity: homeFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <JsonLd data={homeSchema} />
      <Navbar />
      <Hero />
      <ChannelMarquee />
      <IptvPolskaIntro />
      <Features />
      <Pricing />
      <Devices />
      <Setup />
      <Testimonials />
      <FAQ />
      <FinalCta />
      <Footer />
      <WhatsAppButton />
      <StickyBar />
    </main>
  );
}
