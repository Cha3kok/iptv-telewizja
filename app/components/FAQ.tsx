"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { whatsappLink } from "../lib/contact";
import { homeFaqs as faqs } from "../lib/faq";


function FAQItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={`rounded-2xl border transition-colors duration-300 ${
        open ? "border-brand-500/30 bg-card-2/80" : "border-white/[0.07] bg-card/70 hover:border-white/15"
      }`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left"
      >
        <span className="text-sm sm:text-base font-semibold text-white">{q}</span>
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
            open ? "rotate-45 bg-gradient-to-br from-brand-500 to-accent-600 text-white" : "bg-white/5 text-slate-300"
          }`}
        >
          <Plus size={16} />
        </span>
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="px-5 sm:px-6 pb-5 text-sm leading-relaxed text-slate-400">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            className="lg:text-left lg:mx-0"
            eyebrow="FAQ"
            title={
              <>
                IPTV Polska — <span className="text-gradient">najczęstsze pytania</span>
              </>
            }
            subtitle="Nie możesz znaleźć odpowiedzi? Napisz do nas — odpowiadamy na WhatsApp przez całą dobę."
          />
          <Reveal className="text-center lg:text-left -mt-6">
            <a
              href={whatsappLink("Cześć, mam pytanie o IPTV Telewizja")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/10"
            >
              Zadaj pytanie na WhatsApp
            </a>
          </Reveal>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 60}>
              <FAQItem q={faq.q} a={faq.a} defaultOpen={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
