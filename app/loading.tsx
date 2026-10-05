export default function RootLoading() {
  return (
    <div className="min-h-screen bg-ink flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-10 h-10 border-2 border-slate-800 border-t-brand-500 rounded-full animate-spin" />
        <p className="text-slate-400 text-sm">Ładowanie…</p>
      </div>
    </div>
  );
}
