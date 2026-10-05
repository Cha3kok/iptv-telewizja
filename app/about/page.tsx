import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, Tv, Film, Globe, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import JsonLd from "../components/JsonLd";

export const metadata: Metadata = {
  title: "O nas",
  description:
    "Poznaj IPTV Telewizja — kim jesteśmy, co oferujemy, jak działa nasze wsparcie i jak przygotowujemy poradniki o IPTV Polska.",
  alternates: { canonical: "https://www.iptvtelewizja.com/about" },
};

const stats = [
  { icon: Tv, value: "50 000+", label: "Kanałów na żywo" },
  { icon: Film, value: "200 000+", label: "Filmów i seriali VOD" },
  { icon: Clock, value: "24/7", label: "Wsparcie na WhatsApp" },
  { icon: Globe, value: "Na całym świecie", label: "Dostępność usługi" },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "O nas — IPTV Telewizja",
  url: "https://www.iptvtelewizja.com/about",
  description:
    "IPTV Telewizja to usługa IPTV oferująca 50 000+ kanałów na żywo w jakości 4K.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <JsonLd data={aboutSchema} />
      <Navbar />
      <main>

      <div className="page-hero bg-surface border-b border-white/5 pt-32 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-sm mb-6 transition-colors"
          >
            <ChevronLeft size={14} /> Powrót do strony głównej
          </Link>
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">O nas</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Polska telewizja internetowa — prosto i bez umów
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
            Stworzyliśmy IPTV Telewizja, aby dać polskim widzom lepszą i bardziej przystępną alternatywę dla drogiej telewizji kablowej i satelitarnej — i od tamtej pory stale się rozwijamy.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="bg-card border border-white/5 rounded-2xl p-6 text-center">
              <Icon size={22} className="text-brand-400 mx-auto mb-3" />
              <p className="text-white font-bold text-2xl mb-1">{value}</p>
              <p className="text-slate-400 text-xs">{label}</p>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Nasza historia</h2>
          <p className="text-slate-300 leading-8">
            IPTV Telewizja powstała z prostą misją: uczynić doskonałą telewizję dostępną i przystępną cenowo dla każdego. Obserwowaliśmy, jak ceny telewizji satelitarnej i kablowej rosły rok po roku, podczas gdy wartość oferowana widzom pozostawała bez zmian. Długie umowy, drogie sprzęty i ograniczony wybór kanałów — to nie było wystarczające.
          </p>
          <p className="text-slate-300 leading-8">
            Zbudowaliśmy usługę z myślą o widzach w Polsce i Polakach za granicą: pełny pakiet polskich kanałów, sport, filmy i seriale w jednej aplikacji, z jasnym cennikiem od €15 i bez automatycznego odnawiania. Każdy może najpierw bezpłatnie sprawdzić usługę przez 3 godziny.
          </p>
          <p className="text-slate-300 leading-8">
            Pomagamy też w konfiguracji: przez WhatsApp przeprowadzimy Cię przez instalację na Smart TV, Firesticku, Androidzie, iPhonie, dekoderze MAG czy komputerze — albo skonfigurujemy wszystko za Ciebie.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-card border border-white/5 rounded-2xl p-8 space-y-4">
          <h2 className="text-2xl font-bold text-white">Nasza misja</h2>
          <p className="text-slate-300 leading-8">
            Zapewnić każdemu gospodarstwu domowemu w Polsce i polskiej diasporze dostęp do telewizji najwyższej klasy w uczciwej cenie — bez umów, bez ukrytych opłat i bez kompromisów w jakości. Wierzymy, że doskonała telewizja powinna być dla każdego.
          </p>
        </div>

        {/* Editorial standards */}
        <div className="bg-card border border-white/5 rounded-2xl p-8 space-y-4">
          <h2 className="text-2xl font-bold text-white">Jak przygotowujemy poradniki</h2>
          <p className="text-slate-300 leading-8">
            Artykuły na blogu pisze i aktualizuje redakcja IPTV Telewizja — ten sam zespół, który na co dzień pomaga klientom
            w konfiguracji na WhatsApp. Ceny i parametry usługi podajemy na podstawie aktualnej oferty.
          </p>
          <ul className="space-y-2 text-slate-300 text-sm leading-7">
            <li>• Każdy artykuł pokazuje datę publikacji i ostatniej aktualizacji.</li>
            <li>• Gdy zmienia się oferta lub aplikacje, aktualizujemy poradniki.</li>
            <li>
              • Zauważyłeś błąd? Napisz przez{" "}
              <Link href="/contact" className="text-brand-300 underline underline-offset-2 hover:text-brand-200">
                stronę kontaktową
              </Link>{" "}
              — poprawimy go.
            </li>
          </ul>
        </div>

        {/* Why us */}
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-white">Dlaczego klienci nas wybierają</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ["Najpierw test, potem decyzja", "Darmowy test 3h bez karty kredytowej, a po zakupie 48 godzin na zgłoszenie zwrotu, jeśli usługa nie działa zgodnie z opisem."],
              ["Wsparcie 24/7 od prawdziwych ludzi", "Każda wiadomość wsparcia jest odpowiadana przez prawdziwą osobę. Bez botów, bez kolejek. Jesteśmy dostępni na WhatsApp przez całą dobę."],
              ["Żadnych długich umów", "Od 1 do 24 miesięcy — Twój wybór. Płacisz raz, bez automatycznego odnawiania i bez kar."],
              ["Jasne zasady", "Jeden cennik w euro, jednorazowa płatność, opisany regulamin, polityka zwrotów i procedura DMCA."],
            ].map(([title, desc]) => (
              <div key={title} className="bg-card border border-white/5 rounded-xl p-5">
                <p className="text-white font-semibold mb-2">{title}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-brand-950/40 to-slate-900 border border-brand-900/30 rounded-2xl p-10 text-center">
          <h3 className="text-white font-bold text-2xl mb-3">Gotowy, żeby dołączyć?</h3>
          <p className="text-slate-400 mb-7 max-w-md mx-auto">
            Wypróbuj usługę bezpłatnie przez 3 godziny — karta kredytowa nie jest wymagana. Sprawdź jakość obrazu na własnym urządzeniu, zanim cokolwiek zapłacisz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/212707711512?text=iptvtelewizja.com%20-%20Darmowy%20test%203h"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary font-semibold px-8 py-3.5 rounded-full text-sm transition-colors"
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

      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
