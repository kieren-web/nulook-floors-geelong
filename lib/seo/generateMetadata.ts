import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

interface PageSEO {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
}

export function buildMetadata({ title, description, path, ogImage, noindex }: PageSEO): Metadata {
  const url = `${siteConfig.siteUrl}${path}`;
  const image = ogImage ?? `${siteConfig.siteUrl}/og-default.jpg`;

  return {
    title,
    description,
    ...(noindex && { robots: { index: false, follow: false } }),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.businessName,
      images: [{ url: image, width: 1200, height: 630 }],
      locale: "en_AU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
