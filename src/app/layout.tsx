import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { ContactWidget } from "@/components/contact-widget";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { homeJsonLd, siteMeta, siteUrl } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteMeta.name,
  title: {
    default: siteMeta.title,
    template: "%s - peptech.dev",
  },
  description: siteMeta.description,
  authors: [{ name: siteMeta.author, url: siteUrl }],
  creator: siteMeta.author,
  publisher: siteMeta.author,
  keywords: siteMeta.keywords,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicons/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.socialDescription,
    url: siteUrl,
    siteName: siteMeta.name,
    type: "website",
    locale: siteMeta.locale,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "peptech.dev - Jesse Peplinski builds AI products in public",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: siteMeta.handle,
    creator: siteMeta.handle,
    title: siteMeta.title,
    description: siteMeta.socialDescription,
    images: ["/twitter-image"],
  },
  other: {
    "geo.placename": siteMeta.location.name,
    "geo.position": `${siteMeta.location.latitude};${siteMeta.location.longitude}`,
    ICBM: `${siteMeta.location.latitude}, ${siteMeta.location.longitude}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0f1a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <ContactWidget />
        <JsonLd data={homeJsonLd} />
        <Analytics />
      </body>
    </html>
  );
}
