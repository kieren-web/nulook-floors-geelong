@AGENTS.md

# NuLook Floors Geelong — Project Context

## What This Is
A premium Next.js website for **NuLook Floors Geelong** — a NuLook franchise owned by **Michael & Gabe**. The site is designed to out-perform other franchise sites in design, SEO, and conversion. Running locally on port 3001.

**Planned domain:** `nulookfloorsgeelong.com.au`
**Stack:** Next.js (App Router), TypeScript, Tailwind v4, Lucide icons, next/image

---

## Business Context

| Detail | Value |
|--------|-------|
| Business | NuLook Floors Geelong |
| Owners | Michael & Gabe |
| Phone | 0466 385 069 |
| Email | michael@nulookfloors.com.au |
| Location | Geelong, VIC 3220 |
| Franchise network | NuLook Floors Australia (25+ years, 26,000+ floors nationally) |
| Warranty | **5-year residential warranty** (NOT 10-year) |
| Award | Best Garage — The Block |

**Service areas:** Geelong, Geelong West, Newtown, Belmont, Highton, Waurn Ponds, Torquay, Ocean Grove, Drysdale, Leopold, Lara, Corio, Norlane, North Geelong, Grovedale, Bannockburn, Queenscliff, Barwon Heads

**Services offered:** Residential garage floors, patio/outdoor, shed/workshop, commercial/industrial
**DO NOT include:** Grind and seal, Polished concrete

**Key trust points:**
- Over 25 years in the epoxy business (NuLook network)
- Completed over 26,000 floors nationally
- Winner of Best Garage on The Block
- 5-year residential warranty
- On time, every time
- Quote never changes if underquoted

---

## Site Architecture

```
app/
├── (main)/                          # Has Header + Footer
│   ├── page.tsx                     # Homepage /
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── services/residential-garage-flooring/page.tsx
│   ├── services/commercial-industrial-flooring/page.tsx
│   ├── gallery/page.tsx
│   ├── colours/page.tsx
│   ├── testimonials/page.tsx
│   └── contact/page.tsx
└── garage-epoxy-geelong/            # Isolated landing page (noindex, no nav)
    └── page.tsx
```

---

## Design System (Tailwind v4 — tokens in globals.css)

| Token | Value |
|-------|-------|
| `--color-background` | `#1a1a1a` |
| `--color-surface` | `#222222` |
| `--color-border` | `#333333` |
| `--color-orange` | `#E8640C` |
| `--color-orange-hover` | `#D4580A` |
| `--color-muted` | `#9CA3AF` |
| Font | Inter (next/font/google) |

**Important:** Tailwind v4 uses `@theme inline` in `globals.css` — NOT `tailwind.config.ts` for custom tokens.

Custom CSS classes in globals.css:
- `.btn-glow` — orange box-shadow glow on hover
- `.section-divider` — subtle orange gradient line

---

## What's Been Built

### Pages (all complete)
- **Homepage** (`/`) — Full-bleed hero with multi-step form, stats, services, process steps, testimonials, colour preview, FAQ, CTA
- **Residential service page** (`/services/residential-garage-flooring`)
- **Commercial service page** (`/services/commercial-industrial-flooring`)
- **Gallery** (`/gallery`) — 9 real job photos with category filter
- **Colours** (`/colours`) — 13 colour swatches with modal
- **About** (`/about`)
- **Testimonials** (`/testimonials`)
- **Contact** (`/contact`) — Full contact form
- **Landing page** (`/garage-epoxy-geelong`) — Conversion-focused, noindex, no nav

### Key Components
- `HeroSection` — Full-bleed garage photo background, dark overlay, faded logo watermark, 3-step inline form (floor type → suburb → contact)
- `MultiStepSurvey` — 4-step survey on landing page (floor type → size → timeline → contact)
- `LandingHero` — Same full-bleed photo style as HeroSection, uses MultiStepSurvey
- `LandingLogoBar` — Sticky bar with real logo + phone only (no nav links)
- `ColourGrid` + `ColourModal` — 13 colour swatches, click to open detail modal
- `GalleryGrid` — 9 real photos, category filter
- `ScrollReveal` — IntersectionObserver scroll animations (fire-once)
- `FAQAccordion`, `StatsGrid`, `ProcessSteps`, `CTABanner`, `TestimonialCard`
- `LocalBusinessSchema`, `FAQSchema` — JSON-LD structured data

### Real Assets in Place
- **Logo:** `/public/images/nulook-logo.jpg`
- **Gallery photos (9):** `/public/images/gallery/` — garage-classic-cars.jpg, residential-puppy.jpg, residential-stairs.jpg, residential-carport.jpg, commercial-warehouse.jpg, commercial-industrial.jpg, commercial-shed.jpg, outdoor-alfresco-inside.jpg, outdoor-alfresco-outside.jpg
- **Before/after:** geelong-before.jpg, geelong-after.jpg, stlenards-before.jpg (not yet used in a before/after slider)
- **Colour swatches (13):** `/public/images/colours/colour-1.jpg` through `colour-13.jpg` — downloaded from nulookfloors.com.au

### Data Files
- `data/siteConfig.ts` — single source of truth for contact info, service areas
- `data/colours.ts` — 13 colours, names currently "Colour 1–13" (pending official names from Michael)
- `data/faqs.ts` — FAQs grouped by page: home / residential / commercial / landing
- `data/services.ts` — service definitions
- `data/testimonials.ts` — placeholder testimonials (do NOT fabricate real reviews)

### Forms & API
- All forms submit to `/api/contact` (POST)
- API validates with Zod (`contactFormSchema` requires: name, phone, email, suburb, serviceType)
- Currently logs to console — **not yet connected to Supabase or GHL webhook**
- Supabase table planned: `leads_nulook_geelong`
- GHL webhook URL: to be added to `.env.local`

### SEO
- Each page has `export const metadata` with unique title + description
- `LocalBusinessSchema` on home + contact pages
- `FAQSchema` on home, residential, commercial pages
- `app/sitemap.ts` — all main pages (landing page excluded)
- `app/robots.ts`

---

## What's Pending

| Item | Status |
|------|--------|
| Official colour names (1–13) | Waiting on Michael/Gabe |
| Supabase + GHL webhook connection | Not started — `.env.local` keys needed |
| Vercel deployment | Not deployed — running locally on port 3001 |
| Real testimonials | Still placeholder names/text |
| Before/after photo slider | Photos exist, component not built |
| Social media links (Facebook, Instagram) | Empty in siteConfig |
| Domain confirmed | Placeholder: nulookfloorsgeelong.com.au |
| SEO competitor research + action plan | Not started |

---

## Primary SEO Keywords
- epoxy flooring Geelong
- garage epoxy flooring Geelong  
- commercial epoxy flooring Geelong
- epoxy floor coating Geelong

---

## Reference Project
`C:\Users\Kieren\OneDrive\Documents\psr-epoxy\` — same stack, similar franchise site. Reference for Supabase lead storage pattern and GHL webhook integration.
