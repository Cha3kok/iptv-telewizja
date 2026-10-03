import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { categoryColor, categoryLabel, formatDate } from "../lib/blog";
import { getAllPosts } from "../lib/mdx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { OG_IMAGE } from "../lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Przewodniki IPTV, porady, rozwiązywanie problemów i porównania. Dowiedz się, jak w pełni wykorzystać swoją subskrypcję IPTV Telewizja.",
  openGraph: {
    images: [OG_IMAGE],
    title: "Blog — IPTV Telewizja",
    description: "Przewodniki IPTV, porady, rozwiązywanie problemów i porównania.",
    url: "/blog",
  },
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen bg-ink text-white">
      <Navbar />

      {/* Header */}
      <div className="page-hero bg-surface border-b border-white/5 pt-32 pb-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Blog
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            Przewodniki i porady IPTV
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Wszystko, czego potrzebujesz, aby w pełni korzystać z usługi IPTV — przewodniki instalacji, rozwiązywanie problemów, recenzje aplikacji i więcej.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Featured post */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group block bg-card border border-white/5 hover:border-brand-500/30 rounded-2xl p-8 mb-10 transition-all duration-300"
        >
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
            <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border ${categoryColor(featured.category)}`}>
              <Tag size={11} /> {categoryLabel(featured.category)}
            </span>
            <span className="text-slate-500 text-xs">Wyróżniony</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
            {featured.title}
          </h2>
          <p className="text-slate-400 leading-relaxed mb-6 max-w-3xl">{featured.excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-slate-500 text-xs">
              <span>{formatDate(featured.date)}</span>
              <span className="flex items-center gap-1">
                <Clock size={11} /> {featured.readTime}
              </span>
            </div>
            <span className="flex items-center gap-1 text-brand-400 text-sm font-medium group-hover:gap-2 transition-all">
              Czytaj więcej <ArrowRight size={14} />
            </span>
          </div>
        </Link>

        {/* Rest of posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-card border border-white/5 hover:border-brand-500/30 rounded-2xl p-6 transition-all duration-300"
            >
              <span className={`self-start inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border mb-4 ${categoryColor(post.category)}`}>
                <Tag size={11} /> {categoryLabel(post.category)}
              </span>
              <h2 className="text-white font-bold text-lg mb-2 group-hover:text-brand-400 transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <div className="flex items-center gap-3 text-slate-500 text-xs">
                  <span>{formatDate(post.date)}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} /> {post.readTime}
                  </span>
                </div>
                <ArrowRight size={14} className="text-brand-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
