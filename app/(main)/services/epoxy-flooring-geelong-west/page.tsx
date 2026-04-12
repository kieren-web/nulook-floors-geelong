import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/generateMetadata";
import { SuburbPage } from "@/components/sections/SuburbPage";

export const metadata: Metadata = buildMetadata({
  title: "Epoxy Flooring Geelong West | NuLook Floors",
  description:
    "Professional epoxy flooring in Geelong West. NuLook Floors installs residential garage and commercial epoxy systems with a 5-year warranty. Free on-site quote.",
  path: "/services/epoxy-flooring-geelong-west",
});

export default function Page() {
  return (
    <SuburbPage
      suburb="Geelong West"
      slug="geelong-west"
      description="NuLook Floors Geelong services Geelong West and surrounding suburbs for premium residential garage and commercial epoxy flooring. Local installers with a 5-year warranty and a fixed written quote on every job — no surprises."
      nearbySuburbs={["Hamlyn Heights", "Herne Hill", "Manifold Heights", "Norlane", "North Geelong"]}
    />
  );
}
