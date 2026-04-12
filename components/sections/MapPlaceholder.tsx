import { MapPin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function MapPlaceholder() {
  return (
    <div className="bg-surface border border-border rounded-xl p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
      <MapPin className="w-10 h-10 text-orange mb-4" />
      <h3 className="text-lg font-bold text-white">
        {siteConfig.businessName}
      </h3>
      <p className="text-muted text-sm mt-1">
        Servicing Geelong &amp; Surrounding Areas
      </p>
      <p className="text-muted text-sm mt-1">
        {siteConfig.address.suburb}, {siteConfig.address.state}{" "}
        {siteConfig.address.postcode}
      </p>
      <a
        href="https://www.google.com/maps/search/NuLook+Floors+Geelong"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-orange font-semibold text-sm hover:underline"
      >
        View on Google Maps &rarr;
      </a>
    </div>
  );
}
