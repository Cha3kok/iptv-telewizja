import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Nie znaleziono strony",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ink text-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 pt-32 pb-16">
        <div className="text-center max-w-md">
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">Błąd 404</p>
          <h1 className="text-4xl font-bold mb-4">Nie znaleziono strony</h1>
          <p className="text-slate-400 mb-8">
            Strona, której szukasz, nie istnieje lub została przeniesiona.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="btn-primary font-semibold px-6 py-3 rounded-full text-sm transition-colors"
            >
              Strona główna
            </Link>
            <Link
              href="/blog"
              className="border border-white/20 hover:border-white/40 text-slate-300 hover:text-white px-6 py-3 rounded-full text-sm transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
