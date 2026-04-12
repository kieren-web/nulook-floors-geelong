"use client";

import { useMobileMenu } from "@/hooks/useMobileMenu";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  {
    label: "Residential Garage Flooring",
    href: "/services/residential-garage-flooring",
    indent: true,
  },
  {
    label: "Commercial & Industrial",
    href: "/services/commercial-industrial-flooring",
    indent: true,
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Colours", href: "/colours" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export function MobileMenu() {
  const { isOpen, open, close } = useMobileMenu();

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="lg:hidden p-2 text-muted hover:text-white"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[60]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={close}
          />
          {/* Panel */}
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-background border-l border-border flex flex-col">
            {/* Top */}
            <div className="flex items-center justify-between px-4 h-20 border-b border-border">
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold text-white tracking-tight">
                  NuLook Floors
                </span>
                <span className="text-xs font-semibold text-orange tracking-widest uppercase">
                  Geelong
                </span>
              </div>
              <button
                type="button"
                onClick={close}
                className="p-2 text-muted hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 min-h-0 overflow-y-auto py-4 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className={`block py-3 text-lg ${
                    "indent" in item && item.indent
                      ? "pl-6 text-muted text-base"
                      : "text-white font-medium"
                  } hover:text-orange transition-colors`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Bottom */}
            <div className="p-4 border-t border-border space-y-3">
              <a
                href={siteConfig.phoneTel}
                className="flex items-center gap-2 text-white font-medium"
              >
                <Phone className="w-5 h-5 text-orange" />
                {siteConfig.phoneFormatted}
              </a>
              <Button href="/contact" className="w-full" onClick={close}>
                Get a Free Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
