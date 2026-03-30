import { Star } from "lucide-react";

const reviews = [
  {
    name: "Marek W.",
    location: "Warszawa, Polska",
    avatar: "MW",
    rating: 5,
    title: "W końcu porzuciłem kablówkę — najlepsza decyzja",
    body: "Płaciłem 180 zł miesięcznie za kablówkę. Przeszedłem na IPTV Telewizja i mam więcej kanałów, lepszą jakość obrazu, a kosztuje mnie to ułamek tej ceny. Zero zacięć przez 6 miesięcy użytkowania.",
    plan: "Plan 12 Miesięcy",
  },
  {
    name: "Anna K.",
    location: "Kraków, Polska",
    avatar: "AK",
    rating: 5,
    title: "Konfiguracja była prosta, świetnie działa na Firesticku",
    body: "Bałam się, że będzie skomplikowane, ale instrukcja konfiguracji była jasna i oglądałam już po 10 minutach. Kanały sportowe są niesamowite — mam Polsat Sport, Canal+ i wszystkie ważne kanały.",
    plan: "Plan 3 Miesiące",
  },
  {
    name: "Piotr N.",
    location: "Gdańsk, Polska",
    avatar: "PN",
    rating: 5,
    title: "Jestem z nimi 2 lata i nie żałuję ani chwili",
    body: "Próbowałem kilku usług IPTV przez lata i ta jest zdecydowanie najbardziej niezawodna. Obsługa klienta faktycznie odpowiada szybko. Sama funkcja catch-up TV jest warta każdej złotówki.",
    plan: "Plan 12 Miesięcy",
  },
  {
    name: "Katarzyna R.",
    location: "Wrocław, Polska",
    avatar: "KR",
    rating: 5,
    title: "Idealne dla całej rodziny",
    body: "4 połączenia oznaczają, że każdy w domu może oglądać coś innego w tym samym czasie. Dzieci mają swoje bajki, mąż oglądał mecz, ja swoje seriale. Wspaniała usługa.",
    plan: "Plan 12 Miesięcy",
  },
  {
    name: "Tomasz B.",
    location: "Londyn, UK",
    avatar: "TB",
    rating: 5,
    title: "Polskie kanały za granicą bez VPN!",
    body: "Mieszkam w Londynie i w końcu mogę oglądać TVP, Polsat i TVN bez żadnych problemów. Jakość jest doskonała, żadnych buforowania. Polecam wszystkim Polakom za granicą.",
    plan: "Plan 6 Miesięcy",
  },
  {
    name: "Monika S.",
    location: "Poznań, Polska",
    avatar: "MS",
    rating: 4,
    title: "Świetna usługa, wsparcie WhatsApp to ogromny plus",
    body: "Skontaktowałam się przez WhatsApp o 23:00 z pytaniem o konfigurację i otrzymałam odpowiedź w kilka minut. Taki poziom wsparcia jest rzadkością. Sama usługa działa solidnie od 4 miesięcy.",
    plan: "Plan 1 Miesiąc",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "fill-yellow-400 text-yellow-400" : "text-zinc-600"}
        />
      ))}
    </div>
  );
}

function Avatar({ initials }: { initials: string }) {
  const colors: Record<string, string> = {
    MW: "bg-blue-600",
    AK: "bg-pink-600",
    PN: "bg-purple-600",
    KR: "bg-emerald-600",
    TB: "bg-orange-600",
    MS: "bg-teal-600",
  };
  return (
    <div
      className={`w-10 h-10 rounded-full ${colors[initials] ?? "bg-amber-500"} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
    >
      {initials}
    </div>
  );
}

export default function Testimonials() {
  const totalReviews = 3124;
  const avgRating = 4.9;

  return (
    <section id="reviews" className="bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Opinie klientów
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Tysiące zadowolonych użytkowników w Polsce i za granicą
          </h2>

          {/* Aggregate rating */}
          <div className="inline-flex flex-col items-center gap-2 bg-[#111111] border border-white/10 rounded-2xl px-8 py-5">
            <div className="flex items-end gap-2">
              <span className="text-5xl font-bold text-white">{avgRating}</span>
              <span className="text-zinc-400 text-sm mb-2">/ 5.0</span>
            </div>
            <Stars count={5} />
            <p className="text-zinc-400 text-sm mt-1">
              Na podstawie <span className="text-white font-medium">{totalReviews.toLocaleString("pl-PL")}</span> zweryfikowanych opinii
            </p>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="break-inside-avoid bg-[#111111] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <Avatar initials={r.avatar} />
                <div>
                  <p className="text-white font-semibold text-sm">{r.name}</p>
                  <p className="text-zinc-500 text-xs">{r.location}</p>
                </div>
                <span className="ml-auto bg-amber-500/15 text-amber-400 text-xs px-2.5 py-1 rounded-full font-medium">
                  {r.plan}
                </span>
              </div>
              <Stars count={r.rating} />
              <h4 className="text-white font-semibold text-sm mt-3 mb-2">{r.title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
