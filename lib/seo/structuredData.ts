import { siteConfig } from "@/data/siteConfig";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.businessName,
    description:
      "Premium epoxy flooring for garages and commercial spaces in Geelong, Victoria. Part of the NuLook Floors franchise network.",
    telephone: "+61402185502",
    email: siteConfig.email,
    url: siteConfig.siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Geelong",
      addressRegion: "VIC",
      postalCode: "3220",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -38.1499,
      longitude: 144.3617,
    },
    areaServed: siteConfig.serviceAreas,
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
    ],
    sameAs: [],
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
