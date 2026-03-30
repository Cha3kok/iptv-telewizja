import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://iptvtelewizja.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "IPTV Telewizja — Polska TV Online od €15 | 50 000+ Kanałów 4K",
    template: "%s — IPTVTelewizja",
  },
  description:
    "Oglądaj 50 000+ polskich i zagranicznych kanałów w jakości 4K Ultra HD od €15. Bez zacięć, 7-dniowy catch-up, działa na każdym urządzeniu. Darmowy test 3h — bez karty.",
  keywords: [
    "iptv telewizja",
    "polska telewizja iptv",
    "iptv polska",
    "polskie kanały przez internet",
    "najlepsza iptv 2025",
    "iptv firestick polska",
    "polsat sport iptv",
    "tvp iptv",
    "4k iptv polska",
    "telewizja internetowa",
  ],
  authors: [{ name: "IPTVTelewizja" }],
  creator: "IPTVTelewizja",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: BASE_URL,
    siteName: "IPTV Telewizja",
    title: "IPTV Telewizja — Polska TV Online od €15 | 50 000+ Kanałów 4K",
    description:
      "Oglądaj 50 000+ polskich i zagranicznych kanałów w jakości 4K Ultra HD od €15. Bez zacięć, 7-dniowy catch-up, działa na każdym urządzeniu. Darmowy test 3h — bez karty.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "IPTV Telewizja — 50 000+ Kanałów w 4K",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Telewizja — Polska TV Online od €15 | 50 000+ Kanałów 4K",
    description:
      "Oglądaj 50 000+ polskich i zagranicznych kanałów w 4K Ultra HD od €15. Darmowy test 3h — bez karty kredytowej.",
    images: ["/og-image.svg"],
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
  alternates: {
    canonical: BASE_URL,
    languages: {
      "pl": BASE_URL,
      "pl-PL": BASE_URL,
      "x-default": BASE_URL,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
