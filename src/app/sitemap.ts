import type { MetadataRoute } from "next";
import { allSeoPageSlugs } from "@/data/seoPages";
import { siteData } from "@/data/site";

const lastModified = new Date("2026-07-16");

const priorityBySlug: Record<string, number> = {
  "hot-springs-ar": 0.96,
  "hot-springs-junk-removal": 0.95,
  "hot-springs-property-cleanup": 0.95,
  "hot-springs-brush-hogging": 0.94,
  "hot-springs-cleanouts": 0.94,
  "hot-springs-shed-removal": 0.92,
  "hot-springs-storm-cleanup": 0.92,
  "hot-springs-dirt-work": 0.92,
  "hot-springs-stump-grinding": 0.9,
  "lake-hamilton-ar": 0.9,
  "hot-springs-village-ar": 0.9,
  "royal-ar": 0.88,
  "pearcy-ar": 0.88,
  "bismarck-ar": 0.88,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteData.siteUrl;
  const uniqueSlugs = Array.from(new Set(allSeoPageSlugs)).sort();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...uniqueSlugs.map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified,
      changeFrequency: slug.includes("hot-springs") ? ("monthly" as const) : ("monthly" as const),
      priority: priorityBySlug[slug] ?? (slug.includes("hot-springs") ? 0.88 : 0.82),
    })),
  ];
}
