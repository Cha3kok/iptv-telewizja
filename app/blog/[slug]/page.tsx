import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Clock, Tag, ArrowRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { categoryColor, categoryLabel, formatDate } from "../../lib/blog";
import { getAllPosts, getPostBySlug } from "../../lib/mdx";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import JsonLd from "../../components/JsonLd";
import PostImage from "../../components/PostImage";
import { OG_IMAGE, SITE_URL, pageTitle } from "../../lib/site";

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: pageTitle(post.title),
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.iptvtelewizja.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      images: post.coverImage ? [{ url: post.coverImage, alt: post.coverAlt ?? post.title }] : [OG_IMAGE],
    },
    alternates: { canonical: `https://www.iptvtelewizja.com/blog/${post.slug}` },
  };
}

const mdxComponents = {
  img: ({ src, alt }: React.ImgHTMLAttributes<HTMLImageElement>) =>
    typeof src === "string" && src.startsWith("/") ? (
      <PostImage src={src} alt={alt ?? ""} className="my-8" />
    ) : null,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-xl font-bold text-white mt-10 mb-3" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-lg font-semibold text-white mt-8 mb-2" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-slate-300 leading-8 text-[1.05rem] mb-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside space-y-2 text-slate-300 text-[1.05rem] mb-4 ml-2" {...props} />
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside space-y-2 text-slate-300 text-[1.05rem] mb-4 ml-2" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-7" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="text-white font-semibold" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-brand-400 hover:text-brand-300 underline underline-offset-2 transition-colors" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-brand-500 pl-4 my-6 text-slate-400 italic" {...props} />
  ),
  hr: () => <hr className="border-white/10 my-8" />,
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-card-2 text-brand-400 text-sm px-1.5 py-0.5 rounded font-mono" {...props} />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-8 rounded-xl border border-white/10">
      <table className="w-full text-sm border-collapse" {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-white/5" {...props} />
  ),
  tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody {...props} />
  ),
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors" {...props} />
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className="text-left py-3 px-4 text-brand-400 font-semibold text-sm whitespace-nowrap" {...props} />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="py-3 px-4 text-slate-300 text-sm" {...props} />
  ),
  CTA: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <div className="my-8 bg-gradient-to-br from-brand-950/40 to-slate-900 border border-brand-900/30 rounded-2xl p-6 text-center">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block btn-primary font-semibold px-8 py-3 rounded-full text-sm transition-colors"
      >
        {children}
      </a>
    </div>
  ),
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const url = `${SITE_URL}/blog/${post.slug}`;
  const modified = post.updated ?? post.date;
  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "IPTV Telewizja",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.excerpt,
        inLanguage: "pl-PL",
        datePublished: post.date,
        dateModified: modified,
        image: `${SITE_URL}${post.coverImage ?? "/og-image.png"}`,
        mainEntityOfPage: url,
        articleSection: categoryLabel(post.category),
        author: { ...organization, "@type": "Organization", url: `${SITE_URL}/about` },
        publisher: organization,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "IPTV Polska", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-ink text-white">
      <JsonLd data={articleSchema} />
      <Navbar />
      <main>

      {/* Hero */}
      <div className="page-hero bg-surface border-b border-white/5 pt-32 pb-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-sm mb-6 transition-colors"
          >
            <ChevronLeft size={14} /> Wszystkie artykuły
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border ${categoryColor(post.category)}`}>
              <Tag size={11} /> {categoryLabel(post.category)}
            </span>
            <span className="flex items-center gap-1 text-slate-400 text-xs">
              <Clock size={11} /> {post.readTime}
            </span>
            <span className="text-slate-400 text-xs">
              Zaktualizowano: <time dateTime={modified}>{formatDate(modified)}</time>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">{post.excerpt}</p>
          <p className="mt-6 text-sm text-slate-400">
            Autor:{" "}
            <Link href="/about" className="text-slate-300 hover:text-white underline underline-offset-2">
              Redakcja IPTV Telewizja
            </Link>{" "}
            · Opublikowano: <time dateTime={post.date}>{formatDate(post.date)}</time>
          </p>
        </div>
      </div>

      {/* Cover image */}
      {post.coverImage && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <PostImage src={post.coverImage} alt={post.coverAlt ?? post.title} priority />
        </div>
      )}

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <MDXRemote source={post.content} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />

        {/* CTA box */}
        <div className="mt-14 bg-gradient-to-br from-brand-950/40 to-slate-900 border border-brand-900/30 rounded-2xl p-8 text-center">
          <h3 className="text-white font-bold text-xl mb-2">Gotowy, żeby spróbować?</h3>
          <p className="text-slate-400 text-sm mb-6">
            Sprawdź{" "}
            <Link href="/" className="text-brand-300 underline underline-offset-2 hover:text-brand-200">
              IPTV Polska od IPTV Telewizja
            </Link>{" "}
            — darmowy test 3-godzinny, bez karty kredytowej. Nasz zespół skonfiguruje wszystko za Ciebie.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/212707711512?text=iptvtelewizja.com%20-%20Darmowy%20test%203h"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary font-semibold px-6 py-3 rounded-full text-sm transition-colors"
            >
              Zacznij darmowy test
            </a>
            <a
              href="https://wa.me/212707711512?text=Cze%C5%9B%C4%87%2C%20chcia%C5%82bym%20wi%C4%99cej%20informacji"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-ink font-semibold px-6 py-3 rounded-full text-sm transition-colors"
            >
              Napisz na WhatsApp
            </a>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-14">
            <h3 className="text-white font-bold text-lg mb-5">Powiązane artykuły</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group bg-card border border-white/5 hover:border-brand-500/30 rounded-2xl p-5 transition-all"
                >
                  <p className="text-white font-semibold text-sm mb-2 group-hover:text-brand-400 transition-colors leading-snug">
                    {p.title}
                  </p>
                  <p className="text-slate-400 text-xs line-clamp-2">{p.excerpt}</p>
                  <span className="flex items-center gap-1 text-brand-400 text-xs mt-3 font-medium">
                    Czytaj więcej <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
