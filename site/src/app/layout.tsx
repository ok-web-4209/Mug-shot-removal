import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCtaBar } from "@/components/layout/StickyCtaBar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hoffman.legal"),
  title: {
    default: "Mug Shot Removal Attorney | David Hoffman | Hoffman.Legal",
    template: "%s | Hoffman.Legal",
  },
  description:
    "Attorney David Hoffman specializes in removing mugshots from the internet. Legal demands, expungement, and Google deindexing services. Free confidential consultation.",
  keywords: [
    "mugshot removal",
    "mug shot removal attorney",
    "remove mugshot from internet",
    "arrest record removal",
    "mugshot removal lawyer",
    "expungement attorney",
    "mugshot removal service",
    "Google mugshot removal",
    "online mugshot removal",
    "criminal record expungement",
  ],
  authors: [{ name: "David Hoffman", url: "https://hoffman.legal" }],
  creator: "Hoffman Legal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hoffman.legal",
    siteName: "Hoffman Legal",
    title: "Mug Shot Removal Attorney | Hoffman.Legal",
    description:
      "Remove your mugshot from the internet permanently. Attorney-powered removal with legal authority. Free confidential consultation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hoffman Legal - Mug Shot Removal Attorney",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mug Shot Removal Attorney | Hoffman.Legal",
    description:
      "Remove your mugshot from the internet permanently. Attorney-powered removal with legal authority.",
    images: ["/og-image.jpg"],
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
    canonical: "https://hoffman.legal",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/InterVariable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Attorney",
              name: "David Hoffman",
              url: "https://hoffman.legal",
              description:
                "Attorney specializing in mugshot removal from the internet through legal demands, expungement, and search engine deindexing.",
              areaServed: "US",
              priceRange: "$$",
              telephone: "(555) 000-0000",
              email: "contact@hoffman.legal",
              knowsAbout: [
                "Mugshot Removal",
                "Criminal Record Expungement",
                "Online Reputation",
                "DMCA Takedowns",
                "Search Engine Deindexing",
              ],
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "LegalService",
                    name: "Mugshot Removal Service",
                    description:
                      "Legal removal of mugshots from websites and search engines",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "LegalService",
                    name: "Record Expungement",
                    description:
                      "Criminal record expungement and sealing services",
                  },
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How long does mugshot removal take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most removals are completed within 2-4 weeks. Simple cases with cooperative websites can resolve in days, while sites requiring legal escalation may take 4-6 weeks.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is mugshot removal legal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. Mugshot removal through legal demands, expungement orders, and deindexing requests is entirely legal. Many states have laws specifically prohibiting mugshot exploitation websites from charging for removal.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does mugshot removal cost?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We offer transparent flat-fee pricing based on the number of sites and complexity of your case. Your free consultation includes a complete assessment with no obligation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why hire an attorney instead of a reputation management company?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Attorneys can file lawsuits, issue legally-binding demands, and leverage court orders. Reputation management companies cannot. Legal demands carry far more weight and achieve faster, more permanent results.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider>
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
          <StickyCtaBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
