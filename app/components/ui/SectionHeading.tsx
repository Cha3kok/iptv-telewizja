import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
};

export default function SectionHeading({ eyebrow, title, subtitle, className = "" }: Props) {
  return (
    <Reveal className={`text-center max-w-3xl mx-auto mb-14 sm:mb-16 ${className}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/25 bg-brand-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight text-white text-balance">{title}</h2>
      {subtitle && <p className="mt-4 text-base sm:text-lg text-slate-400 text-pretty">{subtitle}</p>}
    </Reveal>
  );
}
