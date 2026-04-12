import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/generateMetadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { CTABanner } from "@/components/ui/CTABanner";
import { testimonials } from "@/data/testimonials";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Epoxy Flooring Reviews Geelong | NuLook Floors",
  description:
    "Read what Geelong homeowners and businesses say about NuLook Floors Geelong. Real feedback from real customers on our epoxy flooring projects across the region.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111] border-b border-border py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-muted text-sm mb-2">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            / Testimonials
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            What Our Customers Say
          </h1>
          <p className="mt-4 text-muted text-lg max-w-2xl">
            We let our workmanship speak for itself. Here&apos;s what Geelong
            homeowners and businesses have to say about working with NuLook
            Floors Geelong.
          </p>
        </div>
      </section>

      {/* All testimonials */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </section>

      {/* Trust CTA */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <SectionHeading
          heading="Work With a Team You Can Trust"
          subtext="Michael and Gabe bring hands-on expertise and local knowledge to every project. Honest quoting, premium results, and a 5-year warranty on every install."
          align="center"
        />
      </section>

      <CTABanner
        heading="Ready to Join Our Happy Customers?"
        subtext="Get a free, no-obligation quote for your epoxy flooring project."
        primaryCta={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCta={{ label: "View Our Work", href: "/gallery" }}
      />
    </>
  );
}
