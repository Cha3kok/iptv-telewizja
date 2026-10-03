"use client";

import { useEffect, useState } from "react";

const lineup = [
  { channel: "Sport", show: "Mecz ligowy na żywo", tone: "from-emerald-500/40 via-emerald-900/30" },
  { channel: "Wiadomości", show: "Serwis informacyjny", tone: "from-sky-500/40 via-sky-900/30" },
  { channel: "Piłka nożna", show: "Studio przedmeczowe", tone: "from-brand-500/45 via-brand-900/30" },
  { channel: "Filmy", show: "Wieczór filmowy", tone: "from-amber-400/40 via-orange-900/30" },
  { channel: "Motorsport", show: "Kwalifikacje wyścigu", tone: "from-accent-500/45 via-accent-600/20" },
];

const SLIDE_MS = 3200;

export default function HeroScreen() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % lineup.length), SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  const current = lineup[index];

  return (
    <div className="relative">
      {/* Glow behind the screen */}
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-brand-600/30 via-accent-600/20 to-sky-500/10 blur-3xl" aria-hidden="true" />

      {/* TV frame */}
      <div className="relative rounded-[1.75rem] border border-white/10 bg-card/80 p-2.5 shadow-2xl shadow-black/60 backdrop-blur">
        <div className="relative aspect-video overflow-hidden rounded-[1.25rem] bg-ink">
          {/* Program picture: one layer per channel, cross-faded */}
          {lineup.map((item, i) => (
            <div
              key={item.channel}
              className={`absolute inset-0 bg-gradient-to-br ${item.tone} to-ink transition-opacity duration-1000 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-grid opacity-60" />
              <div className="absolute -bottom-1/3 left-1/2 h-2/3 w-2/3 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
            </div>
          ))}

          {/* Top bar */}
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3 sm:p-4">
            <span className="flex items-center gap-1.5 rounded-md bg-brand-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              Na żywo
            </span>
            <span className="rounded-md border border-white/15 bg-black/30 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur">
              4K UHD
            </span>
          </div>

          {/* Play glyph */}
          <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
            <div className="grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
              <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-white"><path d="M8 5v14l11-7z" /></svg>
            </div>
          </div>

          {/* Now playing */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4">
            <div className="flex items-end justify-between gap-3">
              <div key={current.channel} className="min-w-0 animate-fade-up">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-300">{current.channel}</p>
                <p className="truncate text-sm sm:text-base font-bold text-white">{current.show}</p>
              </div>
              <div className="flex h-5 items-end gap-0.5" aria-hidden="true">
                {[0, 1, 2, 3].map((b) => (
                  <span
                    key={b}
                    className="w-1 origin-bottom rounded-full bg-brand-400 animate-equalizer"
                    style={{ height: "100%", animationDelay: `${b * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
            <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/15">
              <div key={index} className="h-full origin-left rounded-full bg-gradient-to-r from-brand-500 to-accent-500 animate-progress" />
            </div>
          </div>
        </div>

        {/* Channel strip under the screen */}
        <div className="mt-2.5 grid grid-cols-5 gap-1.5">
          {lineup.map((item, i) => (
            <button
              key={item.channel}
              type="button"
              onClick={() => setIndex(i)}
              className={`truncate rounded-lg px-1.5 py-1.5 text-[10px] sm:text-[11px] font-semibold transition-all ${
                i === index
                  ? "bg-gradient-to-r from-brand-600 to-accent-600 text-white shadow-lg shadow-brand-600/30"
                  : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.channel}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
