import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const devices = [
  {
    name: "Amazon Firestick",
    desc: "Fire TV Stick i Cube",
    svg: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 transition-transform duration-300 group-hover:scale-110">
        <rect x="8" y="22" width="48" height="20" rx="4" fill="#FF9900" />
        <rect x="28" y="42" width="8" height="6" rx="1" fill="#FF9900" />
        <rect x="24" y="48" width="16" height="3" rx="1.5" fill="#FF9900" />
        <circle cx="32" cy="32" r="5" fill="white" />
        <circle cx="32" cy="32" r="2" fill="#FF9900" />
      </svg>
    ),
  },
  {
    name: "Smart TV",
    desc: "Samsung, LG, Sony i inne",
    svg: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 transition-transform duration-300 group-hover:scale-110">
        <rect x="4" y="10" width="56" height="36" rx="3" fill="#374151" />
        <rect x="8" y="14" width="48" height="28" rx="1" fill="#1E293B" />
        <rect x="24" y="46" width="16" height="4" rx="1" fill="#374151" />
        <rect x="20" y="50" width="24" height="3" rx="1.5" fill="#374151" />
        <rect x="14" y="20" width="36" height="16" rx="1" fill="#3B82F6" opacity="0.4" />
        <polygon points="26,24 26,34 38,29" fill="white" opacity="0.8" />
      </svg>
    ),
  },
  {
    name: "Android Box",
    desc: "Wszystkie boxy Android TV",
    svg: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 transition-transform duration-300 group-hover:scale-110">
        <rect x="10" y="20" width="44" height="28" rx="4" fill="#3DDC84" />
        <rect x="14" y="24" width="36" height="20" rx="2" fill="#171c36" />
        <circle cx="20" cy="52" r="3" fill="#3DDC84" />
        <circle cx="32" cy="52" r="3" fill="#3DDC84" />
        <circle cx="44" cy="52" r="3" fill="#3DDC84" />
        <rect x="22" y="30" width="20" height="8" rx="1" fill="#3DDC84" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: "iPhone i iPad",
    desc: "iOS 14 i nowsze",
    svg: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 transition-transform duration-300 group-hover:scale-110">
        <rect x="18" y="6" width="28" height="52" rx="6" fill="#1C1C1E" />
        <rect x="21" y="12" width="22" height="38" rx="2" fill="#3B82F6" opacity="0.5" />
        <circle cx="32" cy="54" r="2.5" fill="#374151" />
        <rect x="27" y="8" width="10" height="2" rx="1" fill="#374151" />
        <polygon points="26,26 26,36 38,31" fill="white" opacity="0.9" />
      </svg>
    ),
  },
  {
    name: "Android Phone",
    desc: "Android 8.0 i nowsze",
    svg: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 transition-transform duration-300 group-hover:scale-110">
        <rect x="16" y="6" width="32" height="52" rx="6" fill="#1C1C1E" />
        <rect x="20" y="12" width="24" height="38" rx="2" fill="#3DDC84" opacity="0.4" />
        <circle cx="32" cy="54" r="2.5" fill="#374151" />
        <rect x="29" y="8" width="6" height="2" rx="1" fill="#374151" />
        <polygon points="26,26 26,36 38,31" fill="white" opacity="0.9" />
      </svg>
    ),
  },
  {
    name: "MAG Box",
    desc: "MAG 250, 254, 322 i inne",
    svg: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 transition-transform duration-300 group-hover:scale-110">
        <rect x="6" y="22" width="52" height="22" rx="4" fill="#6366F1" />
        <rect x="10" y="26" width="30" height="14" rx="2" fill="#1E1B4B" />
        <circle cx="48" cy="33" r="5" fill="#4338CA" />
        <circle cx="48" cy="33" r="2" fill="#818CF8" />
        <rect x="6" y="44" width="52" height="4" rx="2" fill="#4F46E5" />
        <rect x="14" y="29" width="22" height="8" rx="1" fill="#6366F1" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: "Windows PC",
    desc: "Dowolny odtwarzacz IPTV",
    svg: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 transition-transform duration-300 group-hover:scale-110">
        <rect x="6" y="10" width="52" height="36" rx="3" fill="#374151" />
        <rect x="10" y="14" width="44" height="28" rx="1" fill="#0EA5E9" opacity="0.5" />
        <rect x="24" y="46" width="16" height="4" rx="1" fill="#374151" />
        <rect x="16" y="50" width="32" height="3" rx="1.5" fill="#4B5563" />
        <polygon points="24,24 24,34 40,29" fill="white" opacity="0.9" />
      </svg>
    ),
  },
  {
    name: "macOS",
    desc: "Przez aplikacje IPTV",
    svg: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 transition-transform duration-300 group-hover:scale-110">
        <rect x="8" y="10" width="48" height="32" rx="4" fill="#1C1C1E" />
        <rect x="12" y="14" width="40" height="24" rx="2" fill="#6B7280" opacity="0.4" />
        <rect x="24" y="42" width="16" height="4" rx="1" fill="#374151" />
        <rect x="18" y="46" width="28" height="3" rx="1.5" fill="#4B5563" />
        <polygon points="24,22 24,32 40,27" fill="white" opacity="0.9" />
      </svg>
    ),
  },
];

export default function Devices() {
  return (
    <section id="devices" className="relative bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Kompatybilność"
          title={
            <>
              IPTV Polska na <span className="text-gradient">każdym Twoim urządzeniu</span>
            </>
          }
          subtitle="Jedna subskrypcja, wszystkie Twoje ekrany. Konfiguracja w kilka minut na każdej platformie."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {devices.map((device, i) => (
            <Reveal key={device.name} delay={(i % 4) * 80} className="h-full">
              <div className="group flex h-full flex-col items-center gap-4 rounded-3xl border border-white/[0.07] bg-card/80 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:bg-card-2">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-card-2 ring-1 ring-inset ring-white/5 transition-colors group-hover:bg-card-3">
                  {device.svg}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{device.name}</p>
                  <p className="mt-0.5 text-xs text-slate-400">{device.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-400">
          Kompatybilne z TiviMate, IPTV Smarters Pro, GSE IPTV, Perfect Player i wszystkimi standardowymi odtwarzaczami M3U.
        </p>
      </div>
    </section>
  );
}
