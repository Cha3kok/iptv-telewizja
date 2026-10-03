import type { MetadataRoute } from "next";
import { SITE_URL, PAGES_UPDATED } from "./lib/site";
import { getAllPosts } from "./lib/mdx";
import { products } from "./lib/products";

const updated = new Date(PAGES_UPDATED);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: updated, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/product`, lastModified: updated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: updated, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/setup`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: updated, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: updated, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/privacy-policy`, lastModified: updated, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/terms-of-service`, lastModified: updated, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/refund-policy`, lastModified: updated, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/dmca`, lastModified: updated, changeFrequency: "yearly", priority: 0.3 },
    ...products.map((p) => ({
      url: `${SITE_URL}/product/${p.slug}`,
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...getAllPosts().map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.updated ?? post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
