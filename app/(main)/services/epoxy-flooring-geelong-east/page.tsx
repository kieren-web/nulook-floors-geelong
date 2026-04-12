import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/generateMetadata";
import { SuburbPage } from "@/components/sections/SuburbPage";

export const metadata: Metadata = buildMetadata({
  title: "Epoxy Flooring Geelong East | NuLook Floors",
  description:
    "Professional epoxy flooring in Geelong East. NuLook Floors installs residential garage and commercial epoxy systems with a 5-year warranty. Free on-site quote.",
  path: "/services/epoxy-flooring-geelong-east",
});

export default function Page() {
  return (
    <SuburbPage
      suburb="Geelong East"
      slug="geelong-east"
      description="NuLook Floors Geelong services Geelong East and surrounding suburbs for premium residential and commercial epoxy flooring. Whether you're transforming a home garage or a commercial workshop, our team delivers a fast, clean installation with a fixed written quote and a 5-year warranty."
      nearbySuburbs={["Newtown", "Chilwell", "Geelong CBD", "South Geelong", "East Geelong"]}
    />
  );
}
