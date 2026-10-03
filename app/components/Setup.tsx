import { CreditCard, Download, Tv2 } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { SETUP_HELP_LINK } from "../lib/contact";

const steps = [
  {
    icon: CreditCard,
    title: "Wybierz plan",
    description:
      "Wybierz subskrypcję od 1 do 24 miesięcy i napisz do nas na WhatsApp. Najpierw możesz skorzystać z darmowego testu 3h — bez karty kredytowej.",
    detail: "Aktywacja zaraz po płatności",
  },
  {
    icon: Download,
    title: "Zainstaluj aplikację",
    description:
      "Pobierz bezpłatny odtwarzacz IPTV na swoje urządzenie — TiviMate, IPTV Smarters lub GSE IPTV. Obsługujemy wszystkie popularne aplikacje.",
    detail: "Przewodniki dla każdego urządzenia",
  },
  {
    icon: Tv2,
    title: "Zacznij oglądać",
    description:
      "Wprowadź link M3U lub dane Xtream Codes do aplikacji. Twoje 50 000+ kanałów ładuje się od razu — telewizja na żywo, catch-up i VOD.",
    detail: "Na żywo w mniej niż 5 minut",
  },
];

export default function Setup() {
  return (
    <section id="setup" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Prosta instalacja"
          title={
            <>
              Gotowy w <span className="text-gradient">3 prostych krokach</span>
            </>
          }
          subtitle="Bez wiedzy technicznej. Jeśli potrafisz pobrać aplikację, dasz radę to skonfigurować."
        />

        <div className="relative">
          {/* Animated connector (desktop) */}
          <div className="absolute left-[16.66%] right-[16.66%] top-10 hidden h-px overflow-hidden bg-white/10 lg:block" aria-hidden="true">
            <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-brand-400 to-transparent animate-line" />
          </div>

          <ol className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
            {steps.map(({ icon: Icon, title, description, detail }, i) => (
              <Reveal as="li" key={title} delay={i * 150} className="relative flex flex-col items-center text-center">
                <div className="relative mb-7">
                  <div className="absolute inset-0 rounded-3xl bg-brand-500/40 blur-xl" aria-hidden="true" />
                  <div className="relative grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-brand-500 to-accent-600 shadow-xl">
                    <Icon size={30} className="text-white" />
                  </div>
                  <span className="absolute -right-2.5 -top-2.5 grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-card text-xs font-extrabold text-white">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">{description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {detail}
                </span>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal className="mt-16">
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/[0.07] bg-gradient-to-r from-card to-card-2 p-8 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="text-lg font-semibold text-white">Potrzebujesz pomocy z konfiguracją?</p>
              <p className="text-sm text-slate-400">Nasz zespół skonfiguruje wszystko za Ciebie — bezpłatnie.</p>
            </div>
            <a
              href={SETUP_HELP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 transition-all hover:-translate-y-0.5 hover:bg-[#20bd5a]"
            >
              Uzyskaj bezpłatną pomoc
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
