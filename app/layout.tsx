import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import { OG_IMAGE, SITE_URL } from "./lib/site";
import "./globals.css";

// latin-ext carries the Polish letters (ą, ę, ł, ś, ż …).
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "IPTV Telewizja — Polska TV Online od €15 | 50 000+ Kanałów 4K",
    template: "%s — IPTVTelewizja",
  },
  description:
    "Oglądaj 50 000+ polskich i zagranicznych kanałów w jakości 4K Ultra HD od €15. Bez zacięć, 7-dniowy catch-up, działa na każdym urządzeniu. Darmowy test 3h — bez karty.",
  authors: [{ name: "IPTVTelewizja" }],
  creator: "IPTVTelewizja",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: SITE_URL,
    siteName: "IPTV Telewizja",
    title: "IPTV Telewizja — Polska TV Online od €15 | 50 000+ Kanałów 4K",
    description:
      "Oglądaj 50 000+ polskich i zagranicznych kanałów w jakości 4K Ultra HD od €15. Bez zacięć, 7-dniowy catch-up, działa na każdym urządzeniu. Darmowy test 3h — bez karty.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Telewizja — Polska TV Online od €15 | 50 000+ Kanałów 4K",
    description:
      "Oglądaj 50 000+ polskich i zagranicznych kanałów w 4K Ultra HD od €15. Darmowy test 3h — bez karty kredytowej.",
    images: ["/og-image.png"],
    creator: "@iptvtelewizja",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${jakarta.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-ink text-slate-200">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
