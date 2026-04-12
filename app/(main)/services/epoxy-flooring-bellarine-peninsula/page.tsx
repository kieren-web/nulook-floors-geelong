import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/generateMetadata";
import { SuburbPage } from "@/components/sections/SuburbPage";

export const metadata: Metadata = buildMetadata({
  title: "Epoxy Flooring Bellarine Peninsula | NuLook Floors",
  description:
    "Professional epoxy flooring on the Bellarine Peninsula. NuLook Floors services Ocean Grove, Drysdale, Queenscliff & surrounds. 5-year warranty, free on-site quote.",
  path: "/services/epoxy-flooring-bellarine-peninsula",
});

export default function Page() {
  return (
    <SuburbPage
      suburb="Bellarine Peninsula"
      slug="bellarine-peninsula"
      description="NuLook Floors Geelong services the Bellarine Peninsula for premium residential and commercial epoxy flooring. From Ocean Grove garages to Drysdale workshops — we bring the same quality finish and 5-year warranty to every job on the Peninsula."
      nearbySuburbs={["Ocean Grove", "Drysdale", "Queenscliff", "Barwon Heads", "Leopold", "Portarlington"]}
    />
  );
}
