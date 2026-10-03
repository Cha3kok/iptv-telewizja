"use client";

import { useState } from "react";
import { Check, ShieldCheck, Zap } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { whatsappLink } from "../lib/contact";

type Devices = 1 | 2 | 3 | 4;

const deviceOptions: Devices[] = [1, 2, 3, 4];

const plans: {
  name: string;
  months: number;
  devicePrices: Record<Devices, number>;
  description: string;
  badge?: string;
  highlight: boolean;
}[] = [
  { name: "1 Miesiąc", months: 1, devicePrices: { 1: 15, 2: 20, 3: 25, 4: 30 }, description: "Idealne na start", highlight: false },
  { name: "3 Miesiące", months: 3, devicePrices: { 1: 35, 2: 45, 3: 55, 4: 65 }, description: "Dla regularnych widzów", highlight: false },
  {
    name: "6 Miesięcy",
    months: 6,
    devicePrices: { 1: 45, 2: 60, 3: 75, 4: 90 },
    badge: "Najpopularniejszy",
    description: "Najlepszy balans ceny i elastyczności",
    highlight: true,
  },
  { name: "12 Miesięcy", months: 12, devicePrices: { 1: 60, 2: 80, 3: 100, 4: 120 }, description: "Cały sezon sportowy", highlight: false },
  {
    name: "24 Miesiące",
    months: 24,
    devicePrices: { 1: 110, 2: 145, 3: 180, 4: 215 },
    badge: "Najlepsza cena",
    description: "Ustaw i zapomnij na 2 lata",
    highlight: false,
  },
];

const features = [
  "50 000+ kanałów na żywo",
  "Jakość 4K / FHD / HD",
  "7-dniowy catch-up TV",
  "200 000+ filmów i seriali",
  "Przewodnik EPG",
  "Wsparcie 24/7",
];

const extras = [
  "Technologia Anti-Freeze™",
  "Bezpłatne aktualizacje",
  "Pomoc w konfiguracji",
  "Kompatybilny z VPN",
  "Zwrot pieniędzy w 48h",
  "Działa na każdym urządzeniu",
];

const deviceLabel = (d: number) => (d === 1 ? "urządzenie" : "urządzenia");
const formatEuro = (n: number) => n.toLocaleString("pl-PL", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function Pricing() {
  const [devices, setDevices] = useState<Devices>(1);
  const activeIndex = deviceOptions.indexOf(devices);

  return (
    <section id="pricing" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-40 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand-700/15 blur-[140px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cennik IPTV Polska"
          title={
            <>
              Prosta, <span className="text-gradient">uczciwa cena</span>
            </>
          }
          subtitle="Płacisz raz, bez automatycznego odnawiania i ukrytych opłat. Przed zakupem wypróbuj za darmo przez 3 godziny."
        />

        {/* Device selector with sliding indicator */}
        <Reveal className="mb-14 flex flex-col items-center">
          <p className="mb-4 text-sm text-slate-400">Ile urządzeń jednocześnie?</p>
          <div className="relative grid grid-cols-4 rounded-full border border-white/10 bg-card p-1" role="radiogroup" aria-label="Liczba urządzeń">
            <span
              className="absolute inset-y-1 left-1 w-[calc((100%-0.5rem)/4)] rounded-full bg-gradient-to-r from-brand-600 to-accent-600 shadow-lg shadow-brand-600/30 transition-transform duration-300 ease-out"
              style={{ transform: `translateX(${activeIndex * 100}%)` }}
              aria-hidden="true"
            />
            {deviceOptions.map((d) => (
              <button
                key={d}
                role="radio"
                aria-checked={devices === d}
                onClick={() => setDevices(d)}
                className={`relative z-10 px-4 sm:px-6 py-2 text-sm font-semibold transition-colors ${
                  devices === d ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {d} <span className="hidden sm:inline">{deviceLabel(d)}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
          {plans.map((plan, i) => {
            const price = plan.devicePrices[devices];
            const monthly = price / plan.months;
            const orderLink = whatsappLink(
              `iptvtelewizja.com - ${plan.name} / ${devices} ${devices === 1 ? "Urządzenie" : "Urządzenia"} - €${price}`,
            );
            return (
              <Reveal key={plan.name} delay={i * 80} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1.5 ${
                    plan.highlight
                      ? "glow-border bg-gradient-to-b from-card-3 to-card shadow-2xl shadow-brand-900/40 lg:scale-[1.04] lg:hover:scale-[1.04]"
                      : "border border-white/[0.07] bg-card/80 hover:border-white/15"
                  }`}
                >
                  {plan.badge && (
                    <span
                      className={`absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-bold ${
                        plan.highlight
                          ? "bg-gradient-to-r from-brand-500 to-accent-600 text-white shadow-lg shadow-brand-600/40"
                          : "border border-white/10 bg-card-2 text-brand-300"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  )}

                  <p className="text-base font-bold text-white">{plan.name}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{plan.description}</p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span key={`${plan.name}-${price}`} className="animate-fade-up text-4xl font-extrabold tracking-tight text-white">
                      €{price}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    jednorazowo · {devices} {deviceLabel(devices)}
                  </p>
                  <p className={`mt-3 inline-flex w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${plan.highlight ? "bg-brand-500/15 text-brand-300" : "bg-white/5 text-slate-300"}`}>
                    €{formatEuro(monthly)} / mies.
                  </p>

                  <a
                    href={orderLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto block shrink-0 rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                      plan.highlight ? "btn-primary" : "border border-white/15 bg-white/5 text-white hover:border-brand-500/50 hover:bg-brand-500/10"
                    }`}
                    style={{ marginTop: "1.75rem" }}
                  >
                    Zamów teraz
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Included in every plan */}
        <Reveal className="mt-12">
          <div className="grid gap-8 rounded-3xl border border-white/[0.07] bg-card/60 p-7 sm:p-9 lg:grid-cols-[1fr_auto_1fr]">
            <div>
              <p className="mb-5 flex items-center gap-2 text-sm font-semibold text-white">
                <Zap size={16} className="text-brand-400" /> W każdym planie
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500/15">
                      <Check size={12} className="text-brand-300" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:block w-px bg-white/10" />
            <div>
              <p className="mb-5 flex items-center gap-2 text-sm font-semibold text-white">
                <ShieldCheck size={16} className="text-emerald-400" /> Bez ryzyka
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {extras.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500/15">
                      <Check size={12} className="text-emerald-400" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <p className="mt-8 text-center text-sm text-slate-500">
          Nie jesteś pewien? Napisz na WhatsApp, aktywujemy darmowy test 3h — bez karty kredytowej.
        </p>
      </div>
    </section>
  );
}
