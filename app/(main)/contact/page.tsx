import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/generateMetadata";
import { ContactForm } from "@/components/sections/ContactForm";
import { MapPlaceholder } from "@/components/sections/MapPlaceholder";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { siteConfig } from "@/data/siteConfig";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Free Epoxy Flooring Quote Geelong | NuLook Floors",
  description:
    "Get a free epoxy flooring quote in Geelong. Call 0402 185 502 or fill in the form. NuLook Floors responds within 24 hours and provides fixed written quotes. No obligation.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <LocalBusinessSchema />

      {/* Hero */}
      <section className="bg-[#111] border-b border-border py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-muted text-sm mb-2">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            / Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Get a Free Epoxy Flooring Quote
          </h1>
          <p className="mt-4 text-muted text-lg max-w-2xl">
            Fill out the form or call us directly. We&apos;ll respond within 24
            hours to arrange a free site visit and provide a fixed written quote.
          </p>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - contact info */}
          <div className="space-y-6">
            {/* Phone card */}
            <a
              href={siteConfig.phoneTel}
              className="flex items-center gap-4 bg-surface border border-border rounded-xl p-5 hover:border-orange transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-orange" />
              </div>
              <div>
                <p className="text-white font-semibold">Call Us</p>
                <p className="text-muted text-sm">{siteConfig.phoneFormatted}</p>
              </div>
            </a>

            {/* Email card */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-4 bg-surface border border-border rounded-xl p-5 hover:border-orange transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-orange" />
              </div>
              <div>
                <p className="text-white font-semibold">Email Us</p>
                <p className="text-muted text-sm">{siteConfig.email}</p>
              </div>
            </a>

            {/* Location card */}
            <div className="flex items-center gap-4 bg-surface border border-border rounded-xl p-5">
              <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-orange" />
              </div>
              <div>
                <p className="text-white font-semibold">Location</p>
                <p className="text-muted text-sm">
                  {siteConfig.address.suburb}, {siteConfig.address.state}{" "}
                  {siteConfig.address.postcode}
                </p>
              </div>
            </div>

            <MapPlaceholder />

            {/* Response time note */}
            <div className="flex items-center gap-3 text-muted text-sm">
              <Clock className="w-4 h-4 text-orange shrink-0" />
              <span>We respond to all enquiries within 24 hours.</span>
            </div>

            {/* Service areas */}
            <div className="bg-surface border border-border rounded-xl p-5">
              <p className="text-white font-semibold mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange" />
                Areas We Service
              </p>
              <div className="flex flex-wrap gap-2">
                {siteConfig.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="flex items-center gap-1 text-xs text-muted bg-background border border-border rounded-full px-3 py-1"
                  >
                    <CheckCircle className="w-3 h-3 text-orange shrink-0" />
                    {area}
                  </span>
                ))}
              </div>
              <p className="text-xs text-muted mt-3">
                Not sure if we cover your suburb? Just call us on{" "}
                <a href={siteConfig.phoneTel} className="text-orange hover:underline">
                  {siteConfig.phoneFormatted}
                </a>
              </p>
            </div>
          </div>

          {/* Right - form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
