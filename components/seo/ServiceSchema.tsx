import { siteConfig } from "@/data/siteConfig";

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
}

export function ServiceSchema({ name, description, url }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteConfig.siteUrl}${url}`,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.businessName,
      telephone: siteConfig.phoneFormatted,
      url: siteConfig.siteUrl,
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    serviceType: "Epoxy Flooring",
    offers: {
      "@type": "Offer",
      description: "Free on-site quote. Fixed written price - we honour our quotes.",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "AUD",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
