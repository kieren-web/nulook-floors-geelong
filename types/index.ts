// ─── Colour ───────────────────────────────────────────────────────────────────
export interface Colour {
  id: string;
  name: string;
  hex: string;
  imagePath: string;
  description: string;
  popular?: boolean;
  category: "neutral" | "warm" | "cool" | "bold";
}

// ─── Service ──────────────────────────────────────────────────────────────────
export interface ServiceFeature {
  text: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  heroImagePath: string;
  icon: string;
  features: ServiceFeature[];
  metaTitle: string;
  metaDescription: string;
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export type FAQPage = "home" | "residential" | "commercial" | "landing";

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  page: FAQPage;
}

// ─── Testimonial ──────────────────────────────────────────────────────────────
export interface Testimonial {
  id: string;
  name: string;
  suburb: string;
  text: string;
  projectType: "residential" | "commercial" | "workshop";
  date: string;
}

// ─── Stat ─────────────────────────────────────────────────────────────────────
export interface Stat {
  value: string;
  label: string;
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
}

// ─── Gallery Image ────────────────────────────────────────────────────────────
export type GalleryCategory = "all" | "garage" | "commercial" | "workshop" | "patio";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "all">;
  caption?: string;
}

// ─── Multi-Step Survey ────────────────────────────────────────────────────────
export type ProjectType = "garage" | "workshop" | "commercial" | "other";
export type PropertyType = "residential" | "commercial" | "industrial";
export type AreaOption = "garage-floor" | "workshop" | "showroom" | "warehouse" | "patio" | "other";
export type SizeOption = "under-30" | "30-60" | "60-100" | "100-plus";
export type TimelineOption = "asap" | "within-1-month" | "1-3-months" | "just-exploring";

export interface SurveyData {
  projectType: ProjectType | null;
  propertyType: PropertyType | null;
  areas: AreaOption[];
  size: SizeOption | null;
  timeline: TimelineOption | null;
  contact: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    suburb: string;
  };
}

// ─── Contact Form ─────────────────────────────────────────────────────────────
export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  suburb: string;
  serviceType?: string;
  message?: string;
}
