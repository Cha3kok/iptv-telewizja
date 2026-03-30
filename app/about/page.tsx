import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, Tv, Users, Globe, Shield } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import JsonLd from "../components/JsonLd";

export const metadata: Metadata = {
  title: "O nas",
  description:
    "Poznaj IPTVTelewizja — kim jesteśmy, nasza misja i dlaczego tysiące użytkowników nam ufa jako swojemu dostawcy IPTV.",
  alternates: { canonical: "https://iptvtelewizja.com/about" },
};

const stats = [
  { icon: Users, value: "25 000+", label: "Aktywnych subskrybentów" },
  { icon: Tv, value: "50 000+", label: "Kanałów na żywo" },
  { icon: Globe, value: "Na całym świecie", label: "Dostępność" },
  { icon: Shield, value: "99,9%", label: "Dostępność usługi" },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "O nas — IPTVTelewizja",
  url: "https://iptvtelewizja.com/about",
  description:
    "IPTVTelewizja to usługa IPTV oferująca 50 000+ kanałów na żywo w jakości 4K.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <JsonLd data={aboutSchema} />
      <Navbar />

      <div className="bg-[#0a0a0a] border-b border-white/5 pt-24 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-white text-sm mb-6 transition-colors"
          >
            <ChevronLeft size={14} /> Powrót do strony głównej
          </Link>
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">O nas</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Najbardziej zaufana polska IPTV Telewizja
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            Stworzyliśmy IPTVTelewizja, aby dać polskim widzom lepszą i bardziej przystępną alternatywę dla drogiej telewizji kablowej i satelitarnej — i od tamtej pory stale się rozwijamy.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="bg-[#111111] border border-white/5 rounded-2xl p-6 text-center">
              <Icon size={22} className="text-amber-400 mx-auto mb-3" />
              <p className="text-white font-bold text-2xl mb-1">{value}</p>
              <p className="text-zinc-400 text-xs">{label}</p>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Nasza historia</h2>
          <p className="text-zinc-300 leading-8">
            IPTVTelewizja powstała z prostą misją: uczynić doskonałą telewizję dostępną i przystępną cenowo dla każdego. Obserwowaliśmy, jak ceny telewizji satelitarnej i kablowej rosły rok po roku, podczas gdy wartość oferowana widzom pozostawała bez zmian. Długie umowy, drogie sprzęty i ograniczony wybór kanałów — to nie było wystarczające.
          </p>
          <p className="text-zinc-300 leading-8">
            Zbudowaliśmy usługę od podstaw, koncentrując się na niezawodności, jakości obrazu i wartości. Zaczynając od małej grupy polskich użytkowników, rozrosliśmy się do obsługi ponad 25 000 aktywnych subskrybentów w Polsce i na całym świecie.
          </p>
          <p className="text-zinc-300 leading-8">
            Nasza infrastruktura obejmuje wiele centrów danych z automatycznym przełączaniem awaryjnym, zapewniając płynne, nieprzerwane oglądanie. Stale dodajemy nowe kanały, ulepszamy obsługę aplikacji i rozszerzamy bibliotekę VOD na podstawie opinii klientów.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-[#111111] border border-white/5 rounded-2xl p-8 space-y-4">
          <h2 className="text-2xl font-bold text-white">Nasza misja</h2>
          <p className="text-zinc-300 leading-8">
            Zapewnić każdemu gospodarstwu domowemu w Polsce i polskiej diasporze dostęp do telewizji najwyższej klasy w uczciwej cenie — bez umów, bez ukrytych opłat i bez kompromisów w jakości. Wierzymy, że doskonała telewizja powinna być dla każdego.
          </p>
        </div>

        {/* Why us */}
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-white">Dlaczego klienci nas wybierają</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ["Niezawodność na pierwszym miejscu", "Nasz cel 99,9% dostępności to nie hasło marketingowe — to zobowiązanie poparte redundantną infrastrukturą serwerową."],
              ["Wsparcie 24/7 od prawdziwych ludzi", "Każda wiadomość wsparcia jest odpowiadana przez prawdziwą osobę. Bez botów, bez kolejek. Jesteśmy dostępni na WhatsApp przez całą dobę."],
              ["Żadnych długich umów", "Miesięcznie, kwartalnie lub rocznie — Twój wybór. Anuluj w dowolnym momencie bez kary."],
              ["Ciągłe ulepszenia", "Co miesiąc wypuszczamy aktualizacje, dodajemy kanały i poprawiamy wydajność na podstawie tego, co mówią nam nasi klienci."],
            ].map(([title, desc]) => (
              <div key={title} className="bg-[#111111] border border-white/5 rounded-xl p-5">
                <p className="text-white font-semibold mb-2">{title}</p>
                <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-amber-950/40 to-zinc-900 border border-amber-900/30 rounded-2xl p-10 text-center">
          <h3 className="text-white font-bold text-2xl mb-3">Gotowy, żeby dołączyć?</h3>
          <p className="text-zinc-400 mb-7 max-w-md mx-auto">
            Wypróbuj usługę bezpłatnie przez 3 godziny — karta kredytowa nie jest wymagana. Przekonaj się, dlaczego 25 000+ klientów nas wybrało.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/212707711512?text=iptvtelewizja.com%20-%20Darmowy%20test%203h"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-colors"
            >
              Zacznij darmowy test
            </a>
            <Link
              href="/contact"
              className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-colors"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
