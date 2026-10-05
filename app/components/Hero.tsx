import { Check, Clock3, Film, Tv2, Zap } from "lucide-react";
import HeroScreen from "./HeroScreen";
import CountUp from "./ui/CountUp";
import { TRIAL_LINK } from "../lib/contact";

const trust = ["Bez karty kredytowej", "Aktywacja w kilka minut", "Wsparcie 24/7 na WhatsApp"];

const stats = [
  { icon: Tv2, value: 50000, suffix: "+", label: "kanałów na żywo" },
  { icon: Film, value: 200000, suffix: "+", label: "filmów i seriali VOD" },
  { icon: Clock3, value: 7, suffix: " dni", label: "catch-up TV" },
  { icon: Zap, value: 4, suffix: "K", label: "Ultra HD" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-28 sm:pt-36 pb-16 sm:pb-24">
      {/* Animated aurora */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-brand-600/30 blur-[120px] animate-aurora" />
        <div className="absolute top-10 -right-40 h-[30rem] w-[30rem] rounded-full bg-accent-600/25 blur-[120px] animate-aurora [animation-delay:-6s]" />
        <div className="absolute -bottom-40 left-1/3 h-[26rem] w-[26rem] rounded-full bg-sky-500/10 blur-[120px] animate-aurora [animation-delay:-12s]" />
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:px-8">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1 pl-1 pr-3.5 text-xs font-medium text-slate-300 backdrop-blur">
            <span className="flex items-center gap-1.5 rounded-full bg-brand-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              Live
            </span>
            Transmisje na żywo dostępne teraz
          </div>

          <h1 className="animate-rise mt-6 text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white text-balance">
            IPTV Polska&nbsp;—{" "}
            <span className="text-gradient">telewizja internetowa</span> w 4K
          </h1>

          <p className="animate-rise [animation-delay:80ms] mx-auto lg:mx-0 mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-slate-400 text-pretty">
            Oglądaj 50 000+ kanałów na żywo, polskie kanały, sport, filmy i seriale w jakości 4K — w Polsce i za
            granicą. Bez umowy, bez dekodera, z darmowym testem 3h.
          </p>

          <div className="animate-fade-up [animation-delay:360ms] mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            <a
              href={TRIAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto rounded-full px-8 py-4 text-base font-semibold text-center"
            >
              Zacznij darmowy test 3h
            </a>
            <a
              href="#pricing"
              className="w-full sm:w-auto rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white text-center backdrop-blur transition-colors hover:border-white/30 hover:bg-white/10"
            >
              Zobacz cennik od €15
            </a>
          </div>

          <ul className="animate-fade-up [animation-delay:480ms] mt-8 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-slate-400">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-500/15">
                  <Check size={12} className="text-emerald-400" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* TV mockup */}
        <div className="animate-fade-up [animation-delay:300ms] relative mx-auto w-full max-w-xl lg:max-w-none">
          <HeroScreen />

          {/* Floating chips */}
          <div className="absolute -left-3 sm:-left-8 top-[42%] hidden sm:flex animate-float items-center gap-2.5 rounded-2xl border border-white/10 bg-card/90 px-3.5 py-2.5 shadow-xl backdrop-blur">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-brand-500/15 text-brand-300">
              <Tv2 size={16} />
            </span>
            <span className="text-left">
              <span className="block text-sm font-bold text-white">50 000+</span>
              <span className="block text-[11px] text-slate-400">kanałów</span>
            </span>
          </div>
          <div className="absolute -right-3 sm:-right-6 bottom-20 hidden sm:flex animate-float [animation-delay:-3s] items-center gap-2.5 rounded-2xl border border-white/10 bg-card/90 px-3.5 py-2.5 shadow-xl backdrop-blur">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-accent-500/15 text-accent-400">
              <Clock3 size={16} />
            </span>
            <span className="text-left">
              <span className="block text-sm font-bold text-white">Catch-up</span>
              <span className="block text-[11px] text-slate-400">do 7 dni wstecz</span>
            </span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative mx-auto mt-16 sm:mt-24 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur">
          {stats.map(({ icon: Icon, value, suffix, label }, i) => (
            <div
              key={label}
              className={`flex items-center gap-4 p-5 sm:p-7 ${i % 2 === 1 ? "border-l border-white/10" : ""} ${
                i > 1 ? "border-t lg:border-t-0 border-white/10" : ""
              } ${i === 2 ? "lg:border-l" : ""}`}
            >
              <span className="hidden sm:grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-brand-300">
                <Icon size={20} />
              </span>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">
                  <CountUp to={value} suffix={suffix} />
                </p>
                <p className="text-xs sm:text-sm text-slate-400">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
