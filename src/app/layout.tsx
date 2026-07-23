import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { siteData } from "@/data/site";
import "./globals.css";

const siteUrl = siteData.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Red Dirt Property Services LLC | Property Cleanup, Dirt Work & Hauling in Arkansas",
    template: "%s | Red Dirt Property Services LLC",
  },
  description:
    "Licensed and insured Red Dirt Property Services LLC provides property cleanup, dirt work, driveway work, ditches, culverts, stump grinding, small tree work, junk removal, brush hogging, cleanouts, hauling, storm cleanup, and light demolition around Amity, Glenwood, Mount Ida, Hot Springs, Arkadelphia, and nearby Arkansas communities.",
  authors: [{ name: "Red Dirt Property Services LLC" }],
  creator: "Red Dirt Property Services LLC",
  publisher: "Red Dirt Property Services LLC",
  applicationName: "Red Dirt Property Services LLC",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Red Dirt Property Services LLC",
    title:
      "Red Dirt Property Services LLC | Property Cleanup, Dirt Work & Hauling",
    description:
      "Licensed and insured local property cleanup, dirt work, driveway help, stump grinding, tree cleanup, hauling, junk removal, brush hogging, cleanouts, storm cleanup, and light demolition around Southwest Arkansas.",
    images: [
      {
        url: "/images/cover.png",
        width: 1200,
        height: 630,
        alt: "Red Dirt Property Services LLC truck and property cleanup work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Red Dirt Property Services LLC | Property Cleanup, Dirt Work & Hauling",
    description:
      "Licensed and insured local property cleanup, dirt work, hauling, tree cleanup, stump grinding, junk removal, brush hogging, cleanouts, storm cleanup, and light demolition around Southwest Arkansas.",
    images: ["/images/cover.png"],
  },
  other: {
    "geo.region": "US-AR",
    "geo.placename": "Amity, Glenwood, Hot Springs, Arkansas",
    "geo.position": "34.264;-93.462",
    ICBM: "34.264, -93.462",
    "business:contact_data:locality": "Amity",
    "business:contact_data:region": "Arkansas",
    "business:contact_data:country_name": "United States",
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
    "@id": `${siteUrl}/#localbusiness`,
    name: "Red Dirt Property Services LLC",
    image: `${siteUrl}/images/logo2.png`,
    logo: `${siteUrl}/images/logo2.png`,
    url: siteUrl,
    telephone: siteData.phone,
    email: siteData.email,
    description:
      "Licensed and insured property cleanup, dirt work, driveway help, ditches, culverts, stump grinding, small tree work, junk removal, brush hogging, cleanouts, hauling, storm cleanup, and light demolition serving Amity, Glenwood, Mount Ida, Kirby, Hot Springs, Arkadelphia, and surrounding Arkansas communities.",
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
      "Royal AR",
      "Pearcy AR",
      "Murfreesboro AR",
      "Malvern AR",
      "Mountain Pine AR",
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
          name: "Dirt Work",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tree Work",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Stump Grinding",
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
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Shed Removal",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <body>
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
