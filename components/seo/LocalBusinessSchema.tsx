import { siteConfig } from "@/data/siteConfig";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.businessName,
    description: siteConfig.tagline,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phoneFormatted,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Geelong East",
      addressRegion: "VIC",
      postalCode: "3219",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -38.1486,
      longitude: 144.3937,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Epoxy Flooring Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential Garage Epoxy Flooring",
            description: "Premium epoxy floor coatings for residential garages across Geelong. Diamond-ground prep, 13 colour options, anti-slip finish, 5-year warranty.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial & Industrial Epoxy Flooring",
            description: "Heavy-duty epoxy flooring for warehouses, workshops, showrooms and industrial facilities. Chemical resistant, minimal downtime.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Outdoor Patio & Alfresco Epoxy Coating",
            description: "UV-stable epoxy coatings for outdoor patios, alfresco areas, and driveways across the Geelong region.",
          },
        },
      ],
    },
    award: "Best Garage — The Block (Channel 9)",
    slogan: "Geelong's Premium Epoxy Flooring Specialists",
    priceRange: "$$",
    sameAs: (
      [siteConfig.socialLinks.facebook, siteConfig.socialLinks.instagram] as string[]
    ).filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
