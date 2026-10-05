import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      // Renamed or merged blog posts keep their old URLs working.
      ...(
        [
          ["watch-sky-sports-without-sky-subscription", "jak-ogladac-sport-bez-telewizji-satelitarnej"],
          ["what-is-iptv-complete-guide", "co-to-jest-iptv"],
          ["iptv-buffering-fix-guide", "iptv-zacina-sie"],
          ["iptv-vs-satellite-tv-comparison", "iptv-czy-telewizja-satelitarna"],
          ["best-iptv-app-firestick-2025", "najlepsze-aplikacje-iptv-firestick"],
          ["iptv-setup-guide-smart-tv-2025", "iptv-smart-tv-polska"],
        ] as const
      ).map(([from, to]) => ({ source: `/blog/${from}`, destination: `/blog/${to}`, permanent: true })),
    ];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
