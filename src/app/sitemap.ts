import type { MetadataRoute } from "next";
import { allSeoPageSlugs } from "@/data/seoPages";
import { siteData } from "@/data/site";

const lastModified = new Date("2026-11-09T00:00:00-06:00");

const addedSeoSlugs = [
  "hot-springs-tree-removal",
  "amity-dirt-work",
  "glenwood-dirt-work",
  "gutter-cleaning",
  "exterior-window-cleaning",
];

const priorityBySlug: Record<string, number> = {
  "dirt-work": 0.97,
  "property-cleanup": 0.95,
  "bush-hogging": 0.94,
  "junk-removal": 0.93,
  "stump-grinding": 0.92,
  "gutter-cleaning": 0.90,
  "exterior-window-cleaning": 0.89,

  "amity-ar": 0.96,
  "glenwood-ar": 0.96,
  "amity-dirt-work": 0.95,
  "glenwood-dirt-work": 0.95,

  "hot-springs-ar": 0.93,
  "hot-springs-tree-removal": 0.91,
  "hot-springs-junk-removal": 0.92,
  "hot-springs-property-cleanup": 0.92,
  "hot-springs-brush-hogging": 0.91,
  "hot-springs-cleanouts": 0.9,
  "hot-springs-shed-removal": 0.89,
  "hot-springs-storm-cleanup": 0.89,
  "hot-springs-dirt-work": 0.92,
  "hot-springs-stump-grinding": 0.89,

  "mount-ida-ar": 0.9,
  "kirby-ar": 0.9,
  "arkadelphia-ar": 0.9,
  "lake-hamilton-ar": 0.88,
  "hot-springs-village-ar": 0.88,
  "royal-ar": 0.87,
  "pearcy-ar": 0.87,
  "bismarck-ar": 0.87,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteData.siteUrl;
  const uniqueSlugs = Array.from(
    new Set([...allSeoPageSlugs, ...addedSeoSlugs]),
  ).sort();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2026-11-12T00:00:00-06:00"),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...uniqueSlugs.map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: slug === "hot-springs-tree-removal" ? new Date("2026-11-12T00:00:00-06:00") : lastModified,
      changeFrequency: "monthly" as const,
      priority: priorityBySlug[slug] ?? 0.82,
    })),
  ];
}
