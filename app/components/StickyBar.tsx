"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { TRIAL_LINK } from "../lib/contact";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 right-24 z-40 transition-all duration-500 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-card/85 py-2 pl-4 pr-2 shadow-2xl shadow-black/50 backdrop-blur-xl">
        <span className="hidden items-center gap-1.5 text-xs font-semibold text-emerald-400 sm:flex">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Na żywo
        </span>
        <p className="hidden truncate text-sm text-slate-300 md:block">
          <span className="font-semibold text-white">50 000+ kanałów</span> · 4K · test 3h za darmo
        </p>
        <a
          href={TRIAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex-1 whitespace-nowrap rounded-full px-5 py-2.5 text-center text-sm font-semibold sm:flex-none"
        >
          Zacznij darmowy test
        </a>
        <button
          onClick={() => setDismissed(true)}
          className="rounded-full p-1.5 text-slate-500 transition-colors hover:bg-white/5 hover:text-slate-300"
          aria-label="Zamknij"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
