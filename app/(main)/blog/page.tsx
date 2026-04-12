import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/generateMetadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Epoxy Flooring Blog | Geelong Tips & Guides | NuLook Floors",
  description:
    "Epoxy flooring guides, pricing information, and tips for Geelong homeowners and businesses. Written by NuLook Floors Geelong - local epoxy specialists.",
  path: "/blog",
});

const posts = [
  {
    slug: "how-much-does-epoxy-flooring-cost-geelong",
    title: "How Much Does Epoxy Flooring Cost in Geelong? (2025 Guide)",
    excerpt:
      "Residential garages from $25–$40/m², commercial from $30–$55/m². What affects price, what to watch for in cheap quotes, and how to get a fair deal.",
    label: "Pricing Guide",
    date: "April 2025",
    readTime: "5 min read",
  },
  {
    slug: "epoxy-vs-tiles-garage-floor",
    title: "Epoxy vs Garage Floor Tiles: Which is Better for Geelong Garages?",
    excerpt:
      "An honest side-by-side comparison of professional epoxy flooring vs interlocking garage tiles - cost, durability, maintenance, and long-term value.",
    label: "Buyer's Guide",
    date: "April 2025",
    readTime: "6 min read",
  },
  {
    slug: "how-long-does-epoxy-flooring-last",
    title: "How Long Does Epoxy Flooring Last? (Honest Answer for Geelong)",
    excerpt:
      "The difference between a floor that lasts 20 years and one that peels in three comes down to one thing. Here's what to ask before you commit.",
    label: "Epoxy Guide",
    date: "April 2025",
    readTime: "5 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111] border-b border-border py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-muted text-sm mb-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {" / "}Blog
          </p>
          <SectionHeading
            label="GEELONG EPOXY GUIDES"
            heading="Epoxy Flooring Tips &amp; Guides"
            subtext="Practical information for Geelong homeowners and businesses - written by the people who install these floors every day."
          />
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-surface border border-border rounded-xl p-6 md:p-8 hover:border-orange transition-all group"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold text-orange tracking-widest uppercase">
                  {post.label}
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-orange transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-4 text-muted text-sm">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-orange" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-orange" />
                    {post.readTime}
                  </span>
                </div>
                <span className="flex items-center gap-1 text-orange text-sm font-semibold group-hover:gap-2 transition-all">
                  Read article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner
        heading="Have a Question Not Covered Here?"
        subtext="Call Michael & Gabe directly - we're happy to answer any questions about your specific floor or project."
        primaryCta={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCta={{ label: "Call 0402 185 502", href: "tel:+61402185502" }}
      />
    </>
  );
}
