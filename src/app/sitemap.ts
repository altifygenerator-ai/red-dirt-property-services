import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://reddirtpropertyservicesar.com";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/bush-hogging`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.94,
    },
    {
      url: `${baseUrl}/cleanouts`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/light-demolition`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/glenwood-ar`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hot-springs-ar`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/arkadelphia-ar`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.88,
    },
  ];
}
