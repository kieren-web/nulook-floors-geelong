import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Colours", href: "/colours" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  {
    label: "Residential Garage Flooring",
    href: "/services/residential-garage-flooring",
  },
  {
    label: "Commercial & Industrial Flooring",
    href: "/services/commercial-industrial-flooring",
  },
];

export function Footer() {
  return (
    <footer className="bg-[#111] border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-tight mb-4">
              <span className="text-xl font-bold text-white tracking-tight">
                NuLook Floors
              </span>
              <span className="text-xs font-semibold text-orange tracking-widest uppercase">
                Geelong
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              {siteConfig.tagline}
            </p>
            <p className="text-muted text-xs mt-3">
              Part of the {siteConfig.franchiseNetwork} network.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.phoneTel}
                  className="flex items-center gap-2 text-muted text-sm hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  {siteConfig.phoneFormatted}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-muted text-sm hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <address className="not-italic">
                  {siteConfig.businessName}<br />
                  {siteConfig.address.suburb}, {siteConfig.address.state}{" "}
                  {siteConfig.address.postcode}
                </address>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-xs text-muted mb-2">Service Areas:</p>
              <p className="text-xs text-muted">
                {siteConfig.serviceAreas.slice(0, 8).join(" \u00B7 ")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.businessName}. All
            rights reserved.
          </p>
          <p>ABN: 65 972 602 676</p>
          <p>
            {siteConfig.businessName} is an independently owned franchise of{" "}
            {siteConfig.franchiseNetwork}.
          </p>
          <p>
            Built by{" "}
            <a
              href="https://axiondigital.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Axion Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
