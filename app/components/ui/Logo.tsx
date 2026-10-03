export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 font-extrabold tracking-tight text-white ${className}`}>
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-600 shadow-lg shadow-brand-600/30">
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true">
          <rect x="2.5" y="4.5" width="19" height="13" rx="2.5" fill="none" stroke="white" strokeWidth="2" />
          <path d="M10 8.5v5l4.5-2.5z" fill="white" />
          <path d="M8 21h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
      <span className="text-lg">
        IPTV<span className="text-gradient">Telewizja</span>
      </span>
    </span>
  );
}
