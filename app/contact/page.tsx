import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, Mail, MessageCircle, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Skontaktuj się z pomocą techniczną IPTVTelewizja. Dostępni 24/7 przez WhatsApp i email — pomoc przy konfiguracji, płatnościach i problemach technicznych.",
  alternates: { canonical: "https://iptvtelewizja.com/contact" },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Kontakt — IPTVTelewizja",
  url: "https://iptvtelewizja.com/contact",
  description: "Skontaktuj się z pomocą techniczną IPTVTelewizja przez WhatsApp lub email.",
};

const channels = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Najszybszy sposób na kontakt. Odpowiedź w ciągu kilku minut, dzień i noc.",
    action: "Napisz na WhatsApp",
    href: "https://wa.me/212707711512?text=Cześć%2C%20chciałbym%20uzyskać%20pomoc%20z%20IPTVTelewizja",
    highlight: true,
    detail: "+212 707 711 512",
  },
  {
    icon: Mail,
    title: "Email",
    description: "W sprawie pytań dotyczących płatności, wniosków o zwrot lub szczegółowych problemów technicznych.",
    action: "Wyślij email",
    href: "mailto:goldengateiptv@gmail.com",
    highlight: false,
    detail: "goldengateiptv@gmail.com",
  },
];

const faqs = [
  { q: "Jak uzyskać darmowy test?", a: "Napisz do nas na WhatsApp — aktywujemy Twój test w ciągu kilku minut." },
  { q: "Zapomniałem danych logowania.", a: "Skontaktuj się przez WhatsApp lub email, a odzyskamy Twoje dane." },
  { q: "Moje strumienie się zacinają.", a: "Sprawdź nasz przewodnik instalacji, a następnie skontaktuj się z pomocą techniczną, jeśli problem nadal występuje." },
  { q: "Jak odnowić subskrypcję?", a: "Skontaktuj się z nami przed wygaśnięciem subskrypcji, a zajmiemy się odnowieniem." },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <JsonLd data={contactSchema} />
      <Navbar />

      <div className="bg-[#0a0a0a] border-b border-white/5 pt-24 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-white text-sm mb-6 transition-colors"
          >
            <ChevronLeft size={14} /> Powrót do strony głównej
          </Link>
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Kontakt</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Jesteśmy tu, żeby pomóc</h1>
          <p className="text-zinc-400 text-lg max-w-xl">
            Prawdziwa pomoc od prawdziwych ludzi — dostępna 24 godziny na dobę, 7 dni w tygodniu.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-14">
        {/* Availability banner */}
        <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-xl px-5 py-3.5">
          <Clock size={16} className="text-green-400 flex-shrink-0" />
          <p className="text-green-300 text-sm">
            <span className="font-semibold">Pomoc techniczna jest teraz dostępna.</span>{" "}
            Średni czas odpowiedzi: poniżej 5 minut na WhatsApp.
          </p>
          <span className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
        </div>

        {/* Contact channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {channels.map((ch) => (
            <div
              key={ch.title}
              className={`rounded-2xl p-7 border flex flex-col gap-4 ${
                ch.highlight
                  ? "bg-[#25D366]/10 border-[#25D366]/30"
                  : "bg-[#111111] border-white/5"
              }`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${ch.highlight ? "bg-[#25D366]/20" : "bg-[#1a1a1a]"}`}>
                <ch.icon size={20} className={ch.highlight ? "text-[#25D366]" : "text-amber-400"} />
              </div>
              <div>
                <h2 className="text-white font-bold text-lg mb-1">{ch.title}</h2>
                <p className="text-zinc-400 text-sm leading-relaxed mb-1">{ch.description}</p>
                <p className="text-zinc-500 text-xs">{ch.detail}</p>
              </div>
              <a
                href={ch.href}
                target={ch.href.startsWith("http") ? "_blank" : undefined}
                rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`mt-auto self-start font-semibold text-sm px-5 py-2.5 rounded-full transition-colors ${
                  ch.highlight
                    ? "bg-[#25D366] hover:bg-[#20bd5a] text-white"
                    : "bg-amber-500 hover:bg-amber-400 text-white"
                }`}
              >
                {ch.action}
              </a>
            </div>
          ))}
        </div>

        {/* Common questions */}
        <div>
          <h2 className="text-xl font-bold text-white mb-6">Szybkie odpowiedzi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-[#111111] border border-white/5 rounded-xl p-5">
                <p className="text-white font-semibold text-sm mb-2">{faq.q}</p>
                <p className="text-zinc-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
          <p className="text-zinc-500 text-sm mt-5">
            Więcej pytań?{" "}
            <Link href="/#faq" className="text-amber-400 hover:text-amber-300 transition-colors">
              Zobacz nasze pełne FAQ
            </Link>
            {" "}lub{" "}
            <Link href="/setup" className="text-amber-400 hover:text-amber-300 transition-colors">
              odwiedź nasz przewodnik instalacji
            </Link>.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
