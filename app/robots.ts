import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

// Everything is crawlable. The AI search crawlers are listed explicitly so the intent is unambiguous:
// they decide whether pages can be cited in ChatGPT Search, Claude and Perplexity answers.
const aiSearchBots = ["OAI-SearchBot", "ChatGPT-User", "Claude-SearchBot", "Claude-User", "PerplexityBot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiSearchBots, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
