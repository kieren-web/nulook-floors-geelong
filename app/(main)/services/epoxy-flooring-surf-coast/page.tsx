import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/generateMetadata";
import { SuburbPage } from "@/components/sections/SuburbPage";

export const metadata: Metadata = buildMetadata({
  title: "Epoxy Flooring Surf Coast | NuLook Floors Geelong",
  description:
    "Professional epoxy flooring on the Surf Coast. NuLook Floors services Torquay, Anglesea, Lorne & surrounds. 5-year warranty, free on-site quote.",
  path: "/services/epoxy-flooring-surf-coast",
});

export default function Page() {
  return (
    <SuburbPage
      suburb="Surf Coast"
      slug="surf-coast"
      description="NuLook Floors Geelong services the Surf Coast for premium residential and commercial epoxy flooring. From Torquay holiday home garages to Anglesea workshops - we deliver the same NuLook quality finish and 5-year warranty across the entire Surf Coast."
      nearbySuburbs={["Torquay", "Jan Juc", "Anglesea", "Aireys Inlet", "Lorne", "Winchelsea"]}
    />
  );
}
