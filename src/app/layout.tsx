import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const heading = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const siteUrl = "https://reddirtpropertyservicesar.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Red Dirt Property Services | Junk Removal, Brush Hogging & Property Cleanup in Arkansas",
    template: "%s | Red Dirt Property Services",
  },
  description:
    "Red Dirt Property Services provides junk removal, brush hogging, bush hogging, property cleanup, cleanouts, hauling, storm cleanup, and light demolition around Amity, Glenwood, Mount Ida, Hot Springs, Arkadelphia, and nearby Arkansas communities.",
  keywords: [
    "Red Dirt Property Services",
    "property cleanup Amity AR",
    "junk removal Amity AR",
    "hauling Amity AR",
    "brush hogging Amity AR",
    "bush hogging Amity AR",
    "cleanouts Amity AR",
    "light demolition Amity AR",

    "property cleanup Glenwood AR",
    "junk removal Glenwood AR",
    "hauling Glenwood AR",
    "brush hogging Glenwood AR",
    "bush hogging Glenwood AR",
    "cleanouts Glenwood AR",
    "light demolition Glenwood AR",

    "junk removal Hot Springs AR",
    "property cleanup Hot Springs AR",
    "hauling Hot Springs AR",
    "brush hogging Hot Springs AR",
    "bush hogging Hot Springs AR",
    "cleanouts Hot Springs AR",
    "storm cleanup Hot Springs AR",
    "light demolition Hot Springs AR",

    "junk removal Arkadelphia AR",
    "property cleanup Arkadelphia AR",
    "hauling Arkadelphia AR",
    "brush hogging Arkadelphia AR",
    "bush hogging Arkadelphia AR",
    "cleanouts Arkadelphia AR",
    "storm cleanup Arkadelphia AR",

    "property cleanup Mount Ida AR",
    "junk removal Mount Ida AR",
    "brush hogging Mount Ida AR",
    "bush hogging Mount Ida AR",
    "property cleanup Kirby AR",
    "brush hogging Kirby AR",
    "property cleanup Norman AR",
    "junk removal Caddo Valley AR",
    "property cleanup Caddo Valley AR",
    "junk removal Bismarck AR",
    "brush hogging Bismarck AR",
    "property cleanup Malvern AR",
    "junk removal Malvern AR",
    "property cleanup Murfreesboro AR",

    "junk removal near me",
    "brush hogging near me",
    "bush hogging near me",
    "property cleanup near me",
    "hauling near me",
    "cleanout service near me",
    "rural property cleanup Arkansas",
    "land cleanup Arkansas",
    "brush removal Arkansas",
    "storm debris cleanup Arkansas",
    "rental cleanout Arkansas",
    "estate cleanout Arkansas",
    "garage cleanout Arkansas",
    "shed removal Arkansas",
    "small demolition Arkansas",
    "light demolition Arkansas",
  ],
  authors: [{ name: "Red Dirt Property Services" }],
  creator: "Red Dirt Property Services",
  publisher: "Red Dirt Property Services",
  applicationName: "Red Dirt Property Services",
  category: "Property Services",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Red Dirt Property Services",
    title:
      "Red Dirt Property Services | Junk Removal, Brush Hogging & Property Cleanup",
    description:
      "Local junk removal, brush hogging, bush hogging, property cleanup, cleanouts, hauling, storm cleanup, and light demolition around Amity, Glenwood, Hot Springs, Arkadelphia, Mount Ida, and nearby Arkansas communities.",
    images: [
      {
        url: "/images/logo2.png",
        width: 1200,
        height: 1200,
        alt: "Red Dirt Property Services logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Red Dirt Property Services | Junk Removal, Brush Hogging & Property Cleanup",
    description:
      "Local property cleanup, hauling, junk removal, brush hogging, cleanouts, storm cleanup, and light demolition around Southwest Arkansas.",
    images: ["/images/logo2.png"],
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
};

export const viewport: Viewport = {
  themeColor: "#9f3a2a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Red Dirt Property Services",
    image: `${siteUrl}/images/logo2.png`,
    url: siteUrl,
    telephone: "870-260-4880",
    email: "reddirtpropertyservicesar@gmail.com",
    description:
      "Junk removal, brush hogging, bush hogging, property cleanup, cleanouts, hauling, storm cleanup, and light demolition serving Amity, Glenwood, Mount Ida, Kirby, Hot Springs, Arkadelphia, and surrounding Arkansas communities.",
    areaServed: [
      "Amity AR",
      "Glenwood AR",
      "Kirby AR",
      "Norman AR",
      "Mount Ida AR",
      "Bonnerdale AR",
      "Bismarck AR",
      "Caddo Valley AR",
      "Arkadelphia AR",
      "Hot Springs AR",
      "Hot Springs Village AR",
      "Lake Hamilton AR",
      "Murfreesboro AR",
      "Malvern AR",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Amity",
      addressRegion: "AR",
      addressCountry: "US",
    },
    priceRange: "$$",
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Junk Removal",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Brush Hogging",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bush Hogging",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Property Cleanup",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cleanouts",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hauling",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Light Demolition",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Storm Cleanup",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
