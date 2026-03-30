"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, CheckCircle2, ExternalLink } from "lucide-react";

type Step = { title: string; body: string; tip?: string };

type Device = {
  id: string;
  name: string;
  subtitle: string;
  appName: string;
  appUrl: string;
  steps: Step[];
};

const devices: Device[] = [
  {
    id: "firestick",
    name: "Amazon Firestick",
    subtitle: "Fire TV Stick / Cube / 4K",
    appName: "IPTV Smarters Pro",
    appUrl: "https://www.amazon.co.uk/",
    steps: [
      {
        title: "Włącz aplikacje z nieznanych źródeł",
        body: 'Przejdź do Ustawienia → Mój Fire TV → Opcje deweloperskie i włącz „Aplikacje z nieznanych źródeł" oraz „Debugowanie ADB".',
        tip: "Wystarczy zrobić to tylko raz.",
      },
      {
        title: "Zainstaluj aplikację Downloader",
        body: 'Wyszukaj „Downloader" w Amazon App Store i zainstaluj. Pozwala to zainstalować dowolny plik APK na Firestick.',
      },
      {
        title: "Pobierz IPTV Smarters Pro",
        body: 'Otwórz Downloader i wpisz adres URL pliku APK IPTV Smarters Pro. Możesz też wyszukać „IPTV Smarters" bezpośrednio w App Store, jeśli jest dostępne w Twoim regionie.',
      },
      {
        title: "Otwórz IPTV Smarters i dodaj playlistę",
        body: 'Uruchom aplikację, stuknij „Dodaj użytkownika" → „Załaduj playlistę lub plik/URL". Wybierz „URL M3U", wklej swój link M3U i nadaj playliście nazwę.',
        tip: "Link M3U zostaje przesłany na Twój adres e-mail po zakupie.",
      },
      {
        title: "Zacznij oglądać",
        body: "Kanały załadują się automatycznie. Przeglądaj według kategorii, wyszukaj kanał lub przejdź do TV na żywo. Miłego oglądania!",
      },
    ],
  },
  {
    id: "smarttv",
    name: "Smart TV",
    subtitle: "Samsung, LG, Sony & others",
    appName: "Smart IPTV / SSIPTV",
    appUrl: "https://samsung.com/",
    steps: [
      {
        title: "Zainstaluj Smart IPTV ze sklepu z aplikacjami",
        body: "Otwórz sklep z aplikacjami telewizora (Samsung Smart Hub / LG Content Store) i wyszukaj 'Smart IPTV' lub 'SSIPTV'. Zainstaluj za darmo.",
        tip: "Jeśli nie znajdziesz w sklepie, użyj pendrive'a do zainstalowania aplikacji.",
      },
      {
        title: "Zapisz adres MAC swojego telewizora",
        body: "Otwórz Smart IPTV — na ekranie powitalnym zobaczysz adres MAC. Zanotuj go, będzie potrzebny do zarejestrowania playlisty.",
      },
      {
        title: "Zarejestruj M3U na stronie internetowej",
        body: "Odwiedź siptv.eu (dla Smart IPTV) w przeglądarce, wpisz adres MAC telewizora i wklej URL M3U, a następnie kliknij Wyślij.",
      },
      {
        title: "Odśwież aplikację na telewizorze",
        body: "Wróć do telewizora i odśwież aplikację Smart IPTV. Kanały powinny teraz się pojawić. Naciśnij przycisk menu, aby przełączać się między TV na żywo, Filmami i Serialami.",
        tip: "Jeśli kanały się nie pojawiają, przytrzymaj przycisk cofania, aby przeładować playlistę.",
      },
    ],
  },
  {
    id: "android",
    name: "Android Device",
    subtitle: "Android Phone, Tablet & TV Box",
    appName: "TiviMate",
    appUrl: "https://play.google.com/",
    steps: [
      {
        title: "Zainstaluj TiviMate z Play Store",
        body: "Otwórz Google Play Store, wyszukaj 'TiviMate IPTV Player' i zainstaluj. Jest darmowy z opcjonalnym ulepszeniem premium.",
      },
      {
        title: "Otwórz TiviMate i dodaj playlistę",
        body: "Uruchom TiviMate, stuknij 'Dodaj playlistę', następnie 'Playlista M3U'. Wpisz URL M3U i stuknij 'Dalej'.",
        tip: "W przypadku Xtream Codes wybierz 'Xtream Codes API' i podaj adres portalu, nazwę użytkownika i hasło.",
      },
      {
        title: "Nazwij swoją playlistę",
        body: "Nadaj playliście nazwę (np. IPTVTelewizja) i stuknij 'Dodaj'. TiviMate pobierze wszystkie kanały — może to chwilę potrwać.",
      },
      {
        title: "Przeglądaj i oglądaj",
        body: "Użyj paska bocznego, aby przeglądać TV na żywo, Filmy i Seriale. Możesz dodawać kanały do ulubionych, skonfigurować przewodnik programowy (EPG) i dostosować układ.",
      },
    ],
  },
  {
    id: "ios",
    name: "iPhone & iPad",
    subtitle: "iOS 14 and above",
    appName: "GSE Smart IPTV",
    appUrl: "https://apps.apple.com/",
    steps: [
      {
        title: "Pobierz GSE Smart IPTV",
        body: "Otwórz App Store, wyszukaj 'GSE Smart IPTV' i zainstaluj. Jest darmowy z opcjonalnym ulepszeniem pro.",
      },
      {
        title: "Dodaj playlistę M3U",
        body: "Otwórz aplikację i stuknij menu (≡) → Zdalne playlisty → ikonę '+' → 'Dodaj URL M3U'. Wpisz nazwę i wklej swój link M3U.",
        tip: "Możesz też użyć 'Dodaj Xtream Codes API', jeśli masz dane dostępu do portalu.",
      },
      {
        title: "Załaduj playlistę",
        body: "Stuknij 'Dodaj', a aplikacja pobierze Twoje kanały. Może to potrwać 30–60 sekund w zależności od połączenia.",
      },
      {
        title: "Oglądaj swoje kanały",
        body: "Stuknij dowolną grupę kanałów, a następnie wybierz kanał, aby rozpocząć strumieniowanie. Użyj przycisku EPG, aby wyświetlić przewodnik programowy.",
      },
    ],
  },
  {
    id: "mag",
    name: "MAG Box",
    subtitle: "MAG 250, 254, 322, 410 & others",
    appName: "Built-in Portal",
    appUrl: "",
    steps: [
      {
        title: "Znajdź adres MAC swojego MAG Boxa",
        body: "Włącz MAG Boxa. Na ekranie głównym lub w Ustawienia → Informacje o systemie znajdziesz adres MAC (format: AA:BB:CC:DD:EE:FF).",
        tip: "Prześlij nam ten adres MAC podczas zamawiania, abyśmy mogli zarejestrować Twoją subskrypcję.",
      },
      {
        title: "Wpisz adres URL portalu",
        body: "Przejdź do Ustawienia → Ustawienia systemu → Serwery → Portale. W 'Portal 1 URL' wpisz adres URL portalu, który dostarczymy Ci po zakupie.",
      },
      {
        title: "Zapisz i uruchom ponownie",
        body: "Zapisz ustawienia i zrestartuj MAG Boxa. Przy uruchomieniu automatycznie połączy się z naszym portalem.",
      },
      {
        title: "Przeglądaj kanały",
        body: "Użyj pilota do nawigowania po liście kanałów. Naciśnij OK, aby oglądać kanał. Użyj przycisku EPG dla przewodnika programowego.",
        tip: "Jeśli widzisz 'Incorrect STB subscription', skontaktuj się z pomocą techniczną — Twój adres MAC może wymagać ponownej rejestracji.",
      },
    ],
  },
  {
    id: "windows",
    name: "Windows PC",
    subtitle: "Windows 10 & 11",
    appName: "VLC or IPTV Smarters",
    appUrl: "https://www.videolan.org/",
    steps: [
      {
        title: "Pobierz VLC Media Player",
        body: "Pobierz i zainstaluj VLC z videolan.org, jeśli jeszcze go nie masz. Jest darmowy i natywnie obsługuje playlisty M3U.",
      },
      {
        title: "Otwórz strumień sieciowy",
        body: "W VLC przejdź do Media → Otwórz strumień sieciowy (Ctrl+N). Wklej URL M3U i kliknij 'Odtwórz'.",
        tip: "VLC załaduje wszystkie kanały jako playlistę. To najszybsza metoda.",
      },
      {
        title: "Alternatywa: użyj IPTV Smarters dla Windows",
        body: "Pobierz IPTV Smarters z ich oficjalnej strony, aby uzyskać pełne doświadczenie IPTV z EPG, catch-up i przeglądaniem VOD.",
      },
      {
        title: "Dodaj swoje dane logowania",
        body: "W IPTV Smarters kliknij 'Dodaj użytkownika' i wybierz URL M3U lub Xtream Codes. Wpisz dane subskrypcji i załaduj kanały.",
      },
    ],
  },
];

function StepItem({ step, index, total }: { step: Step; index: number; total: number }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
          {index + 1}
        </div>
        {index < total - 1 && <div className="w-px flex-1 bg-white/10 mt-2" />}
      </div>
      <div className={`pb-8 ${index === total - 1 ? "pb-0" : ""}`}>
        <h3 className="text-white font-semibold mb-1">{step.title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{step.body}</p>
        {step.tip && (
          <p className="mt-2 text-xs text-yellow-400/80 bg-yellow-400/10 border border-yellow-400/20 rounded-lg px-3 py-2">
            💡 {step.tip}
          </p>
        )}
      </div>
    </div>
  );
}

export default function SetupClient() {
  const [activeId, setActiveId] = useState(devices[0].id);
  const active = devices.find((d) => d.id === activeId)!;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-[#0a0a0a] border-b border-white/5 pt-24 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-zinc-500 hover:text-white text-sm mb-6 transition-colors"
          >
            <ChevronLeft size={14} /> Powrót do strony głównej
          </Link>
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Instrukcja instalacji
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            Zacznij w kilka minut
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Wybierz swoje urządzenie poniżej, aby uzyskać przewodnik krok po kroku. Wiedza techniczna nie jest wymagana.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Device selector sidebar */}
          <aside className="lg:w-56 flex-shrink-0">
            <p className="text-zinc-500 text-xs uppercase tracking-wider font-medium mb-3">
              Wybierz urządzenie
            </p>
            <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
              {devices.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setActiveId(d.id)}
                  className={`flex-shrink-0 text-left px-4 py-3 rounded-xl text-sm transition-all ${
                    activeId === d.id
                      ? "bg-amber-500 text-white font-semibold"
                      : "bg-[#111111] text-zinc-400 hover:text-white hover:bg-[#1a1a1a]"
                  }`}
                >
                  <span className="block font-medium">{d.name}</span>
                  <span className={`text-xs ${activeId === d.id ? "text-amber-100" : "text-zinc-600"}`}>
                    {d.subtitle}
                  </span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Guide content */}
          <main className="flex-1 min-w-0">
            <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 sm:p-8">
              {/* Device header */}
              <div className="flex items-start justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-white">{active.name}</h2>
                  <p className="text-zinc-400 text-sm mt-0.5">{active.subtitle}</p>
                </div>
                <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium px-3 py-1.5 rounded-full flex-shrink-0">
                  <CheckCircle2 size={13} />
                  Obsługiwane
                </div>
              </div>

              {/* Recommended app */}
              <div className="bg-[#1a1a1a] border border-white/5 rounded-xl p-4 flex items-center justify-between gap-4 mb-8">
                <div>
                  <p className="text-zinc-500 text-xs mb-0.5">Zalecana aplikacja</p>
                  <p className="text-white font-semibold">{active.appName}</p>
                </div>
                {active.appUrl && (
                  <a
                    href={active.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors flex-shrink-0"
                  >
                    Pobierz <ExternalLink size={13} />
                  </a>
                )}
              </div>

              {/* Steps */}
              <div>
                {active.steps.map((step, i) => (
                  <StepItem key={i} step={step} index={i} total={active.steps.length} />
                ))}
              </div>

              {/* Nav buttons */}
              <div className="flex justify-between mt-10 pt-6 border-t border-white/5">
                <button
                  onClick={() => {
                    const idx = devices.findIndex((d) => d.id === activeId);
                    if (idx > 0) setActiveId(devices[idx - 1].id);
                  }}
                  disabled={devices[0].id === activeId}
                  className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={16} /> Poprzedni
                </button>
                <button
                  onClick={() => {
                    const idx = devices.findIndex((d) => d.id === activeId);
                    if (idx < devices.length - 1) setActiveId(devices[idx + 1].id);
                  }}
                  disabled={devices[devices.length - 1].id === activeId}
                  className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  Następny <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Still stuck CTA */}
            <div className="mt-6 bg-[#111111] border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-white font-semibold">Potrzebujesz pomocy?</p>
                <p className="text-zinc-400 text-sm">Nasz zespół skonfiguruje wszystko za Ciebie — bezpłatnie.</p>
              </div>
              <a
                href="https://wa.me/212707711512?text=Cze%C5%9B%C4%87%2C%20potrzebuję%20pomocy%20z%20konfiguracją%20IPTV"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
              >
                Pomoc WhatsApp
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
