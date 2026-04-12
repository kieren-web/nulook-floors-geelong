import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTABanner } from "@/components/ui/CTABanner";
import { siteConfig } from "@/data/siteConfig";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

interface BlogLayoutProps {
  children: React.ReactNode;
  title: string;
  label?: string;
  date: string;
  readTime: string;
  intro: string;
}

export function BlogLayout({ children, title, label = "GEELONG EPOXY GUIDE", date, readTime, intro }: BlogLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111] border-b border-border py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {" / "}
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            {" / "}
            <span className="text-white">{title}</span>
          </p>
          <SectionLabel>{label}</SectionLabel>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {title}
          </h1>
          <p className="mt-6 text-muted text-lg leading-relaxed">{intro}</p>
          <div className="mt-6 flex items-center gap-5 text-muted text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-orange" />
              {date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-orange" />
              {readTime}
            </span>
            <span>By {siteConfig.businessName}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 px-4 max-w-3xl mx-auto prose-custom">
        {children}
      </article>

      {/* Back to blog */}
      <div className="px-4 max-w-3xl mx-auto pb-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted hover:text-white text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all articles
        </Link>
      </div>

      <CTABanner
        heading="Ready to Transform Your Floor?"
        subtext="Get a free, no-obligation quote from Geelong's epoxy flooring specialists."
        primaryCta={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCta={{ label: "Call 0402 185 502", href: siteConfig.phoneTel }}
      />
    </>
  );
}
