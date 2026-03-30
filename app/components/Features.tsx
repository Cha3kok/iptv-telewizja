import { Tv2, Wifi, MonitorPlay, Globe, Clock, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Tv2,
    title: "50 000+ kanałów na żywo",
    description:
      "Polskie, zagraniczne, sport, wiadomości, dla dzieci — ogromna biblioteka kanałów pokrywająca każdy gatunek i region.",
  },
  {
    icon: MonitorPlay,
    title: "Streaming 4K Ultra HD",
    description:
      "Krystaliczna jakość obrazu z obsługą Dolby Audio. Oglądaj jak w studiu telewizyjnym.",
  },
  {
    icon: Wifi,
    title: "Zero zacięć",
    description:
      "Nasza zoptymalizowana sieć CDN zapewnia płynne, nieprzerwane oglądanie nawet w godzinach szczytu.",
  },
  {
    icon: Globe,
    title: "Działa wszędzie",
    description:
      "Kompatybilne z Smart TV, Firestick, Android, iOS, MAG i każdym odtwarzaczem IPTV. Każde urządzenie, o każdej porze.",
  },
  {
    icon: Clock,
    title: "7-dniowy catch-up TV",
    description:
      "Przegapiłeś ulubiony program? Odtwórz dowolną audycję z ostatnich 7 dni na obsługiwanych kanałach.",
  },
  {
    icon: HeadphonesIcon,
    title: "Wsparcie 24/7",
    description:
      "Całodobowa pomoc techniczna przez czat na żywo i WhatsApp. Zawsze jesteśmy do Twojej dyspozycji.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Dlaczego my
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Wszystko czego potrzebujesz
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Stworzone dla polskich widzów, którzy oczekują najwyższej jakości. Bez umów, bez ukrytych opłat.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-[#111111] hover:bg-[#1a1a1a] border border-white/5 hover:border-amber-500/30 rounded-2xl p-8 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-amber-500/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-500/25 transition-colors">
                <Icon size={22} className="text-amber-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
