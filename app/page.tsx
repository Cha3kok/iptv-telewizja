import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
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
import OfferBanner from "./components/OfferBanner";
import SocialProof from "./components/SocialProof";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "IPTVTelewizja",
  url: "https://iptvtelewizja.com",
  logo: "https://iptvtelewizja.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "goldengateiptv@gmail.com",
    availableLanguage: ["Polish", "English"],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "IPTV Telewizja — Subskrypcja",
  description:
    "Oglądaj 50 000+ polskich i zagranicznych kanałów na żywo w jakości 4K Ultra HD. Bez zacięć, 7-dniowy catch-up, działa na każdym urządzeniu.",
  image: "https://iptvtelewizja.com/og-image.svg",
  brand: { "@type": "Brand", name: "IPTVTelewizja" },
  offers: [
    { "@type": "Offer", name: "Plan 1 Miesiąc", price: "15", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
    { "@type": "Offer", name: "Plan 3 Miesiące", price: "35", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
    { "@type": "Offer", name: "Plan 6 Miesięcy", price: "45", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
    { "@type": "Offer", name: "Plan 12 Miesięcy", price: "60", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
    { "@type": "Offer", name: "Plan 24 Miesiące", price: "110", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "3124",
    bestRating: "5",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Na jakich urządzeniach działa IPTV Telewizja?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usługa działa na Smart TV, Amazon Firestick, dekodery Android TV, telefony Android, iPhone, iPad, dekodery MAG oraz każdy odtwarzacz IPTV.",
      },
    },
    {
      "@type": "Question",
      name: "Czy oferujecie darmowy okres próbny?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak, oferujemy darmowy test trwający 3 godziny. Nie wymagamy karty kredytowej.",
      },
    },
    {
      "@type": "Question",
      name: "Czy mogę oglądać polskie kanały za granicą?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Nasza usługa działa na całym świecie. Możesz oglądać wszystkie polskie kanały bez względu na to, gdzie jesteś — bez VPN.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={productSchema} />
      <JsonLd data={faqSchema} />
      <OfferBanner />
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Devices />
      <Setup />
      <Testimonials />
      <FAQ />
      <Footer />
      <WhatsAppButton />
      <StickyBar />
      <SocialProof />
    </>
  );
}
