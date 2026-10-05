import { Quote, Star } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

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
    body: "Bałam się, że będzie skomplikowane, ale instrukcja konfiguracji była jasna i oglądałam już po 10 minutach. Kanały sportowe są niesamowite — mam wszystkie ważne transmisje w jednym miejscu.",
    plan: "Plan 3 Miesiące",
  },
  {
    name: "Piotr N.",
    location: "Gdańsk, Polska",
    avatar: "PN",
    rating: 5,
    title: "Jestem z nimi 2 lata i nie żałuję ani chwili",
    body: "Próbowałem kilku usług IPTV przez lata i ta działa u mnie najstabilniej. Obsługa klienta faktycznie odpowiada szybko. Sama funkcja catch-up TV jest warta każdej złotówki.",
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
    body: "Mieszkam w Londynie i w końcu mogę oglądać polskie kanały bez żadnych problemów. Jakość jest doskonała, żadnych buforowania. Polecam wszystkim Polakom za granicą.",
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
    <div className="flex gap-0.5" role="img" aria-label={`Ocena ${count} na 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className={i < count ? "fill-yellow-400 text-yellow-400" : "text-slate-400"} />
      ))}
    </div>
  );
}

const avatarColors = ["from-brand-500 to-accent-600", "from-sky-500 to-indigo-600", "from-emerald-500 to-teal-600", "from-orange-500 to-brand-600"];

function ReviewCard({ r, index }: { r: (typeof reviews)[number]; index: number }) {
  return (
    <figure className="relative flex h-full flex-col w-[20rem] sm:w-[24rem] shrink-0 rounded-3xl border border-white/[0.07] bg-card/80 p-6 transition-colors hover:border-brand-500/30">
      <Quote className="absolute right-5 top-5 h-8 w-8 text-white/[0.06]" aria-hidden="true" />
      <Stars count={r.rating} />
      <blockquote className="mt-4 mb-5">
        <p className="font-semibold text-white">{r.title}</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{r.body}</p>
      </blockquote>
      <figcaption className="mt-auto pt-5 flex items-center gap-3 border-t border-white/5">
        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br ${avatarColors[index % avatarColors.length]} text-xs font-bold text-white`}>
          {r.avatar}
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold text-white">{r.name}</span>
          <span className="block text-xs text-slate-400">{r.location}</span>
        </span>
        <span className="ml-auto whitespace-nowrap rounded-full bg-brand-500/10 px-2.5 py-1 text-[11px] font-medium text-brand-300">
          {r.plan}
        </span>
      </figcaption>
    </figure>
  );
}

function Row({ items, reverse = false }: { items: typeof reviews; reverse?: boolean }) {
  // Two copies per half so a row is always wider than the screen; -50% loops seamlessly.
  const half = [...items, ...items];
  const loop = [...half, ...half];
  return (
    <div className="mask-fade-x overflow-hidden">
      <div
        className={`flex w-max gap-5 hover:[animation-play-state:paused] ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ "--marquee-duration": "70s" } as React.CSSProperties}
      >
        {loop.map((r, i) => (
          <div key={`${r.name}-${i}`} aria-hidden={i >= items.length}>
            <ReviewCard r={r} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const half = Math.ceil(reviews.length / 2);
  return (
    <section id="reviews" className="relative bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Opinie klientów"
          title={
            <>
              Co mówią <span className="text-gradient">nasi klienci</span>
            </>
          }
          subtitle="Widzowie w Polsce i Polacy za granicą o swoich wrażeniach z IPTV Telewizja."
        />
      </div>
      <div className="flex flex-col gap-5">
        <Row items={reviews.slice(0, half)} />
        <Row items={reviews.slice(half)} reverse />
      </div>
    </section>
  );
}
