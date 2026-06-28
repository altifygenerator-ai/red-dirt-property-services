import type { MetadataRoute } from "next";
import { siteData } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteData.siteUrl;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
