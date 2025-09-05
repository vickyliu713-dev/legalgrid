import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LegalGrid",
    template: "%s | LegalGrid",
  },
  description:
    "Legal services for UK startups & SMEs: incorporation, fundraising, employment, policies, and commercial contracts.",
  keywords: [
    "legal",
    "contracts",
    "startup",
    "SME",
    "UK",
    "employment",
    "fundraising",
    "policies",
  ],
  openGraph: {
    title: "LegalGrid",
    description:
      "Legal services for UK startups & SMEs: incorporation, fundraising, employment, policies, and commercial contracts.",
    url: "/",
    siteName: "LegalGrid",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "LegalGrid",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LegalGrid",
    description:
      "Legal services for UK startups & SMEs: incorporation, fundraising, employment, policies, and commercial contracts.",
    images: ["/logo.svg"],
    creator: "@LegalGrid",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "LegalGrid",
              url: siteUrl,
              logo: new URL("/logo.svg", siteUrl).toString(),
              sameAs: [],
            }),
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
