"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Residential Garage Flooring",
        href: "/services/residential-garage-flooring",
      },
      {
        label: "Commercial & Industrial",
        href: "/services/commercial-industrial-flooring",
      },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Colours", href: "/colours" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function DesktopNav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {navItems.map((item) => {
        const hasChildren = item.children && item.children.length > 0;
        const isOpen = openDropdown === item.label;

        if (hasChildren) {
          return (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 px-3 py-2 text-sm text-muted hover:text-white transition-colors"
              >
                {item.label}
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-transform",
                    isOpen && "rotate-180"
                  )}
                />
              </Link>
              {isOpen && (
                <div className="absolute top-full left-0 pt-1">
                  <div className="bg-surface border border-border rounded-lg py-2 min-w-[260px] shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-muted hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        }

        return (
          <Link
            key={item.label}
            href={item.href}
            className="px-3 py-2 text-sm text-muted hover:text-white transition-colors"
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
