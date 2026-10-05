import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import Logo from "./ui/Logo";
import { SUPPORT_EMAIL, TRIAL_LINK, WHATSAPP_NUMBER } from "../lib/contact";

const links: Record<string, { label: string; href: string }[]> = {
  Produkt: [
    { label: "Przegląd oferty", href: "/product" },
    { label: "Funkcje", href: "/#features" },
    { label: "Cennik", href: "/#pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Instrukcja instalacji", href: "/setup" },
    { label: "Darmowy test", href: "/#pricing" },
  ],
  Firma: [
    { label: "O nas", href: "/about" },
    { label: "Kontakt", href: "/contact" },
    { label: "FAQ", href: "/#faq" },
  ],
  Prawne: [
    { label: "Polityka prywatności", href: "/privacy-policy" },
    { label: "Regulamin", href: "/terms-of-service" },
    { label: "Polityka zwrotów", href: "/refund-policy" },
    { label: "DMCA", href: "/dmca" },
  ],
};


export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] bg-surface">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Logo />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Polska telewizja internetowa w 4K. 50 000+ kanałów, 7-dniowy catch-up i wsparcie 24/7 — gdziekolwiek jesteś.
            </p>
            <div className="mt-6 flex flex-col gap-2.5">
              <a href={TRIAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex w-fit rounded-full px-5 py-2.5 text-sm font-semibold">
                Darmowy test 3h
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
              >
                <MessageCircle size={14} /> WhatsApp: +212 707 711 512
              </a>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white">
                <Mail size={14} /> {SUPPORT_EMAIL}
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h3 className="mb-4 text-sm font-semibold text-white">{group}</h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-slate-400 transition-colors hover:text-brand-300">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] pt-8 sm:flex-row">
          <p className="text-xs text-slate-400">&copy; {new Date().getFullYear()} IPTV Telewizja. Wszelkie prawa zastrzeżone.</p>
          <p className="text-xs text-slate-400">Wyłącznie do celów rozrywkowych. Prosimy o przestrzeganie lokalnych przepisów prawa.</p>
        </div>
      </div>
    </footer>
  );
}
