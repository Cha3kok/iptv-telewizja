"use client";

import type { ReactNode } from "react";

/** Feeds the pointer position to any `.spotlight` card inside it. */
export default function SpotlightGroup({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={className}
      onPointerMove={(e) => {
        const card = (e.target as HTMLElement).closest<HTMLElement>(".spotlight");
        if (!card) return;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--y", `${e.clientY - rect.top}px`);
      }}
    >
      {children}
    </div>
  );
}
