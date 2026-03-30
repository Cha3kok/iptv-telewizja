import Link from "next/link";
import { Tv, Mail } from "lucide-react";

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
  ],
};

const WHATSAPP = "https://wa.me/212707711512";
const EMAIL = "goldengateiptv@gmail.com";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg mb-4">
              <Tv className="text-amber-400" size={20} />
              IPTV<span className="text-amber-400">Telewizja</span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Najbardziej niezawodna usługa IPTV w Polsce. 50 000+ kanałów, jakość 4K, zero zacięć.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/212707711512?text=iptvtelewizja.com%20-%20Darmowy%20test%203h"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit bg-amber-500 hover:bg-amber-400 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
              >
                Darmowy test
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white text-xs transition-colors"
              >
                WhatsApp: +212 707 711 512
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-1.5 text-zinc-400 hover:text-white text-xs transition-colors"
              >
                <Mail size={12} />
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-white font-semibold text-sm mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-zinc-400 hover:text-white text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-xs">
            &copy; {new Date().getFullYear()} IPTVTelewizja. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-zinc-600 text-xs">
            Wyłącznie do celów rozrywkowych. Prosimy o przestrzeganie lokalnych przepisów prawa.
          </p>
        </div>
      </div>
    </footer>
  );
}
