"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Na jakich urządzeniach działa IPTV Telewizja?",
    a: "Nasza usługa działa na praktycznie każdym urządzeniu: Smart TV (Samsung, LG, Sony), Amazon Firestick, dekodery Android TV, telefony Android, iPhone, iPad, dekodery MAG oraz każdy odtwarzacz IPTV, jak TiviMate, IPTV Smarters lub Perfect Player.",
  },
  {
    q: "Czy oferujecie darmowy okres próbny?",
    a: "Tak! Oferujemy darmowy test 3-godzinny, dzięki któremu możesz przetestować naszą usługę przed subskrypcją. Karta kredytowa nie jest wymagana. Skontaktuj się z nami przez WhatsApp lub czat na żywo, aby aktywować test.",
  },
  {
    q: "Czy występują zacięcia lub zamrażanie obrazu?",
    a: "Intensywnie inwestujemy w infrastrukturę serwerową i CDN, aby zapewnić płynne działanie. Zdecydowana większość naszych klientów nie zgłasza żadnych zacięć. Zalecamy stabilne połączenie internetowe min. 10 Mbps dla HD i 25 Mbps dla 4K.",
  },
  {
    q: "Ile urządzeń mogę używać jednocześnie?",
    a: "To zależy od wybranego planu. Plan 1-miesięczny obsługuje 1 połączenie jednoczesne, 3-miesięczny — 2, 6-miesięczny — 3, a plan 12-miesięczny obsługuje do 4 połączeń. Każde połączenie może być na innym urządzeniu.",
  },
  {
    q: "Czy mogę oglądać polskie kanały za granicą?",
    a: "Tak. Nasza usługa działa na całym świecie. Możesz oglądać wszystkie polskie kanały bez względu na to, gdzie się znajdujesz — VPN nie jest wymagany.",
  },
  {
    q: "Jak skonfigurować usługę?",
    a: "Konfiguracja jest prosta. Po subskrypcji otrzymujesz link M3U lub dane logowania Xtream Codes w ciągu kilku minut. Wprowadź je do dowolnej kompatybilnej aplikacji IPTV i już oglądasz. Udostępniamy przewodniki krok po kroku i możemy pomóc przez czat.",
  },
  {
    q: "Jakie metody płatności akceptujecie?",
    a: "Akceptujemy wszystkie główne karty kredytowe/debetowe, PayPal oraz kryptowaluty. Wszystkie płatności są bezpieczne i szyfrowane.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-white font-medium text-sm sm:text-base">{q}</span>
        <ChevronDown
          size={18}
          className={`text-amber-400 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="text-zinc-400 text-sm leading-relaxed pb-5">{a}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-black py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Często zadawane pytania
          </h2>
          <p className="text-zinc-400 text-lg">
            Nie możesz znaleźć odpowiedzi? Czatuj z nami 24/7 na WhatsApp.
          </p>
        </div>

        <div className="bg-[#111111] border border-white/5 rounded-2xl px-6 sm:px-8">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
