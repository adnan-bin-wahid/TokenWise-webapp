import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tokenwise-webapp.vercel.app",
      lastModified: new Date("2026-10-06"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
