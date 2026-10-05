const rowOne = [
  "Kanały ogólnopolskie", "Sport na żywo", "Piłka nożna", "Wiadomości 24/7", "Filmy premierowe", "Seriale",
  "Kanały regionalne", "Sporty motorowe", "Tenis", "Siatkówka", "Boks i MMA", "Koszykówka",
];
const rowTwo = [
  "Dokumenty", "Przyroda", "Historia", "Bajki dla dzieci", "Muzyka", "Lifestyle i kuchnia",
  "Motoryzacja", "Podróże", "Komedia", "Kino akcji", "Kanały zagraniczne", "Nauka i technologia",
];

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  // The list is rendered twice so the -50% translate loops seamlessly.
  const loop = [...items, ...items];
  return (
    <div className="mask-fade-x overflow-hidden">
      <ul
        className={`flex w-max gap-3 hover:[animation-play-state:paused] ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ "--marquee-duration": "55s" } as React.CSSProperties}
      >
        {loop.map((name, i) => (
          <li
            key={`${name}-${i}`}
            aria-hidden={i >= items.length}
            className="flex items-center gap-2.5 whitespace-nowrap rounded-2xl border border-white/[0.07] bg-card/70 px-5 py-3 text-sm font-semibold text-slate-300 transition-colors hover:border-brand-500/40 hover:text-white"
          >
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-brand-400 to-accent-500" />
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ChannelMarquee() {
  return (
    <section id="channels" className="relative bg-ink py-14 sm:py-20" aria-labelledby="channels-heading">
      <h2 id="channels-heading" className="mb-8 px-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
        Wszystkie kategorie w jednej subskrypcji
      </h2>
      <div className="flex flex-col gap-3">
        <Row items={rowOne} />
        <Row items={rowTwo} reverse />
      </div>
    </section>
  );
}
