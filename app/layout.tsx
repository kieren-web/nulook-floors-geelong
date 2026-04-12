import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NuLook Floors Geelong | Premium Epoxy Flooring",
  description:
    "Geelong's premium epoxy flooring specialists. Residential garage floors, commercial and industrial flooring. 5-year warranty, 13 colour options. Free quote.",
  icons: {
    icon: "/favicon.ico",
    apple: "/images/nulook-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={inter.variable}>
      <body className="bg-background text-white font-sans antialiased">
        {children}
      </body>
      {/* GA4 — replace G-XXXXXXXXXX with real Measurement ID once created */}
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
