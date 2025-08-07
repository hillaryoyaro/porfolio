import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Hillary Oyaro | Software Engineer Portfolio",
  description:
    "Explore the portfolio of Hillary Oyaro, a skilled software engineer specializing in web development, Solution Architecture , and Entrepreneurship. View projects, services, and contact details.",
  keywords:
    "developer portfolio, web developer, Hillary Oyaro, software engineer, web development, Solution Architecture, JavaScript, Next.js, frontend developer, backend developer and cloud computing",
  authors: [{ name: "Hillary Oyaro" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://portfoliofive.reactbd.com/",
    title: "Hillary Oyaro | Developer Portfolio",
    description:
      "Discover Hillary Oyaro's portfolio showcasing expertise in web development, Solution Architecture, and entrepreneurship. Contact for services or collaboration.",
    images: [
      {
        url: "https://portfoliofive.reactbd.com/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hillary Oyaro Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@YourTwitterHandle", // Replace with your Twitter handle
    title: "Hillary Oyaro | Developer Portfolio",
    description:
      "Check out Hillary Oyaro's portfolio for web development and Solution Architecture design projects.",
    images: ["https://portfoliofive.reactbd.com/assets/og-image.jpg"],
  },
  alternates: {
    canonical: "https://portfoliofive.reactbd.com/",
  },
  other: {
    "theme-color": "#000000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GADSENSE_CLIENT_ID = "ca-pub-6542623777003381";
  return (
    <html lang="en">
      <head>
        {/* Structured Data (JSON-LD) for WebSite */}

        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
      </head>
      <body>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Toaster />
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GADSENSE_CLIENT_ID}`}
          strategy="beforeInteractive"
        />
        <Script
          id="application"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "John Doe Portfolio",
              url: "https://portfoliofive.reactbd.com/",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://portfoliofive.reactbd.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
