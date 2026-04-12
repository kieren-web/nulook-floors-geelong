import { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

const BASE = siteConfig.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/services`, changeFrequency: "monthly", priority: 0.9 },
    {
      url: `${BASE}/services/residential-garage-flooring`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/services/commercial-industrial-flooring`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: `${BASE}/gallery`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/colours`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/testimonials`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE}/contact`, changeFrequency: "monthly", priority: 0.8 },
    // Suburb landing pages
    { url: `${BASE}/services/epoxy-flooring-geelong-east`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/epoxy-flooring-geelong-west`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/epoxy-flooring-bellarine-peninsula`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/services/epoxy-flooring-surf-coast`, changeFrequency: "monthly", priority: 0.7 },
    // Blog
    { url: `${BASE}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/blog/how-much-does-epoxy-flooring-cost-geelong`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/epoxy-vs-tiles-garage-floor`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/how-long-does-epoxy-flooring-last`, changeFrequency: "monthly", priority: 0.7 },
    // Landing page intentionally excluded - paid traffic noindex
  ];
}
