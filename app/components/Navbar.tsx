"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./ui/Logo";

const links = [
  { label: "Strona główna", href: "/" },
  { label: "Oferta", href: "/product" },
  { label: "Cennik", href: "/#pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Instalacja", href: "/setup" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-3">
      <nav
        className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-500 ${
          scrolled || open
            ? "border-white/10 bg-ink/75 shadow-2xl shadow-black/40 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="flex h-14 sm:h-16 items-center justify-between px-4 sm:px-5">
          <Link href="/" aria-label="IPTV Telewizja — strona główna" onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1 rounded-full border border-white/5 bg-white/[0.03] p-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  isActive(l.href) ? "bg-white/10 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link href="/#pricing" className="btn-primary inline-flex rounded-full px-5 py-2.5 text-sm font-semibold">
              Zacznij teraz
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden -mr-1 rounded-lg p-2 text-white hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Przełącz menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden grid transition-[grid-template-rows] duration-300 ease-out ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-1 border-t border-white/10 px-3 pb-4 pt-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive(l.href) ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/#pricing"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 rounded-xl px-4 py-3 text-center text-sm font-semibold"
              >
                Zacznij teraz
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
