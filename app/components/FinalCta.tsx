import Reveal from "./ui/Reveal";
import { TRIAL_LINK } from "../lib/contact";

export default function FinalCta() {
  return (
    <section className="relative bg-ink px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-brand-700 via-brand-600 to-accent-600 px-6 py-16 text-center sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-white/20 blur-3xl animate-aurora" />
            <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-accent-400/40 blur-3xl animate-aurora [animation-delay:-8s]" />
            <div className="absolute inset-0 bg-grid opacity-50" />
          </div>

          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl text-balance">
              Gotowy na telewizję bez kompromisów?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-white/80 sm:text-lg">
              Wypróbuj IPTV Telewizja za darmo przez 3 godziny. Bez karty kredytowej, bez zobowiązań — aktywacja w kilka
              minut przez WhatsApp.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={TRIAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-white px-8 py-4 text-base font-bold text-brand-700 shadow-xl shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-brand-50 sm:w-auto"
              >
                Zacznij darmowy test 3h
              </a>
              <a
                href="#pricing"
                className="w-full rounded-full border border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
              >
                Zobacz plany
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
