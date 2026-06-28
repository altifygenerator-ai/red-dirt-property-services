import type { MetadataRoute } from "next";
import { siteData } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteData.siteUrl;
  const lastModified = new Date();

  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/bush-hogging", priority: 0.96, changeFrequency: "monthly" as const },
    { path: "/property-cleanup", priority: 0.95, changeFrequency: "monthly" as const },
    { path: "/junk-removal", priority: 0.94, changeFrequency: "monthly" as const },
    { path: "/cleanouts", priority: 0.93, changeFrequency: "monthly" as const },
    { path: "/shed-removal", priority: 0.91, changeFrequency: "monthly" as const },
    { path: "/storm-cleanup", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/light-demolition", priority: 0.89, changeFrequency: "monthly" as const },
    { path: "/amity-ar", priority: 0.92, changeFrequency: "monthly" as const },
    { path: "/glenwood-ar", priority: 0.92, changeFrequency: "monthly" as const },
    { path: "/mount-ida-ar", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/kirby-ar", priority: 0.88, changeFrequency: "monthly" as const },
    { path: "/norman-ar", priority: 0.87, changeFrequency: "monthly" as const },
    { path: "/mountain-pine-ar", priority: 0.87, changeFrequency: "monthly" as const },
    { path: "/hot-springs-ar", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/arkadelphia-ar", priority: 0.89, changeFrequency: "monthly" as const },
    { path: "/malvern-ar", priority: 0.86, changeFrequency: "monthly" as const },
    { path: "/murfreesboro-ar", priority: 0.85, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
