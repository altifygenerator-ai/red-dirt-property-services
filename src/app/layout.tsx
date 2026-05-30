import type { Metadata } from "next";
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
      "Red Dirt Property Services | Property Cleanup, Hauling & Light Demolition",
    template: "%s | Red Dirt Property Services",
  },
  description:
    "Red Dirt Property Services provides property cleanup, hauling, junk removal, storm cleanup, and light demolition around Amity, Glenwood, Mount Ida, Kirby, Hot Springs, Arkadelphia, and surrounding Arkansas communities.",
  keywords: [
    "Red Dirt Property Services",
    "property cleanup Glenwood AR",
    "hauling Glenwood AR",
    "junk removal Glenwood AR",
    "light demolition Glenwood AR",
    "property cleanup Amity AR",
    "junk removal Amity AR",
    "property cleanup Mount Ida AR",
    "junk removal Mount Ida AR",
    "storm cleanup Arkansas",
    "shed removal Arkansas",
    "brush removal Arkansas",
    "rental cleanout Arkansas",
    "estate cleanout Arkansas",
    "property cleanup Hot Springs AR",
    "junk removal Hot Springs AR",
    "property cleanup Arkadelphia AR",
    "hauling Arkadelphia AR",
  ],
  authors: [{ name: "Red Dirt Property Services" }],
  creator: "Red Dirt Property Services",
  publisher: "Red Dirt Property Services",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Red Dirt Property Services",
    title:
      "Red Dirt Property Services | Property Cleanup, Hauling & Light Demolition",
    description:
      "Local property cleanup, hauling, junk removal, storm cleanup, and light demolition serving Amity, Glenwood, Mount Ida, Kirby, Hot Springs, Arkadelphia, and nearby rural Arkansas communities.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 1200,
        alt: "Red Dirt Property Services logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Red Dirt Property Services | Property Cleanup, Hauling & Light Demolition",
    description:
      "Local property cleanup, hauling, junk removal, storm cleanup, and light demolition around Amity, Glenwood, and surrounding Arkansas communities.",
    images: ["/images/logo.png"],
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Red Dirt Property Services",
    image: `${siteUrl}/images/logo.png`,
    url: siteUrl,
    telephone: "870-260-4880",
    email: "reddirtpropertyservicesar@gmail.com",
    description:
      "Property cleanup, hauling, junk removal, storm cleanup, and light demolition serving Amity, Glenwood, Mount Ida, Kirby, Hot Springs, Arkadelphia, and surrounding Arkansas communities.",
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
          name: "Property Cleanup",
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