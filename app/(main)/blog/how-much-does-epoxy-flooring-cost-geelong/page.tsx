import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/generateMetadata";
import { BlogLayout } from "@/components/layout/BlogLayout";
import { FAQSchema } from "@/components/seo/FAQSchema";
import Link from "next/link";
import type { FAQ } from "@/types";

export const metadata: Metadata = buildMetadata({
  title: "How Much Does Epoxy Flooring Cost in Geelong? (2025 Guide)",
  description:
    "Honest 2025 pricing guide for epoxy flooring in Geelong. Residential garages priced at $90–$100/m² installed. What affects price and how to get a fair quote.",
  path: "/blog/how-much-does-epoxy-flooring-cost-geelong",
});

const faqItems: FAQ[] = [
  {
    id: "cost-faq-1",
    question: "How much does epoxy flooring cost per square metre in Geelong?",
    answer:
      "Residential epoxy flooring in Geelong is priced at $90–$100 per square metre installed. This includes diamond grinding preparation, primer, epoxy coat, colour flake blend, and UV-stable topcoat. Commercial and large-scale industrial floors are priced on inspection due to the variation in size and specification.",
    page: "home",
  },
  {
    id: "cost-faq-2",
    question: "Why is epoxy flooring cheaper from some contractors?",
    answer:
      "Lower prices often mean thinner coatings, no diamond grinding preparation, or inferior products. A properly installed epoxy floor requires diamond grinding the concrete before application - without it, the coating will peel within a few years. Always ask what preparation is included.",
    page: "home",
  },
  {
    id: "cost-faq-3",
    question: "Is epoxy flooring worth it for a residential garage in Geelong?",
    answer:
      "Yes - for most Geelong homeowners, epoxy flooring delivers strong value. A typical double garage costs $3,200–$4,000 installed and lasts well over a decade with minimal maintenance. Compared to replacing the floor or dealing with bare concrete, it's one of the best-value home improvements available.",
    page: "home",
  },
];

export default function CostGuidePage() {
  return (
    <>
      <FAQSchema faqs={faqItems} />
      <BlogLayout
        title="How Much Does Epoxy Flooring Cost in Geelong? (2025 Guide)"
        label="PRICING GUIDE"
        date="April 2025"
        readTime="5 min read"
        intro="If you've been quoted wildly different prices for epoxy flooring in Geelong, you're not alone. This guide breaks down exactly what drives the cost - so you know what a fair quote looks like before you commit."
      >
        <h2>The Short Answer: What Epoxy Flooring Costs in Geelong</h2>
        <p>
          For most Geelong homeowners, residential epoxy flooring is priced at <strong>$90–$100 per square metre installed</strong>. Here's how that works out across typical floor sizes:
        </p>

        <table>
          <thead>
            <tr>
              <th>Floor Type</th>
              <th>Typical Size</th>
              <th>Approximate Installed Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Single garage</td>
              <td>~18–20m²</td>
              <td>$1,600 – $2,000</td>
            </tr>
            <tr>
              <td>Double garage</td>
              <td>~36–40m²</td>
              <td>$3,200 – $4,000</td>
            </tr>
            <tr>
              <td>Triple garage / large workshop</td>
              <td>~54–60m²</td>
              <td>$4,900 – $6,000</td>
            </tr>
            <tr>
              <td>Patio / alfresco</td>
              <td>~20–30m²</td>
              <td>$1,800 – $3,000</td>
            </tr>
            <tr>
              <td>Shed / workshop</td>
              <td>~40–60m²</td>
              <td>$3,600 – $6,000</td>
            </tr>
            <tr>
              <td>Commercial / warehouse</td>
              <td>250m²+</td>
              <td>Priced on inspection</td>
            </tr>
          </tbody>
        </table>

        <p>
          These prices include everything: diamond grinding, primer, epoxy coat, colour flake blend, and the UV-stable topcoat. They're what you should expect from a professional installer in the Greater Geelong area in 2025.
        </p>

        <div className="callout">
          <p>
            <strong>NuLook Floors Geelong pricing:</strong> We charge a fixed written price per job - if we underquote, we absorb the difference. Call{" "}
            <a href="tel:+61466385069">0466 385 069</a> or{" "}
            <Link href="/contact">request a free on-site quote</Link>.
          </p>
        </div>

        <h2>What Affects the Price of Epoxy Flooring?</h2>
        <p>
          Not all epoxy quotes are created equal. Here's what actually drives the cost - and what to watch for when comparing quotes.
        </p>

        <h3>1. Floor Size</h3>
        <p>
          This is the obvious one. Most epoxy installers price per square metre, so the bigger the floor, the higher the total cost. Larger jobs typically attract a lower per-metre rate since setup, travel, and labour are spread across more area.
        </p>

        <h3>2. Surface Preparation</h3>
        <p>
          This is the single biggest factor in both cost and quality. A properly installed epoxy floor requires <strong>diamond grinding</strong> the concrete surface before any coating goes down. This opens the concrete pores for a permanent mechanical bond.
        </p>
        <p>
          Contractors who skip this step (or use acid etching instead) can quote cheaper - but the floor will delaminate within a few years. If a quote doesn't explicitly mention diamond grinding, ask why.
        </p>

        <h3>3. Number of Coats &amp; System Specification</h3>
        <p>
          A professional epoxy system uses multiple coats: primer, base epoxy coat, colour flake broadcast, and a UV-stable polyurethane or polyaspartic topcoat. Single-coat systems are cheaper but won't last or look as good. The NuLook system uses a proven 5-layer application refined over 25+ years.
        </p>

        <h3>4. Condition of the Existing Concrete</h3>
        <p>
          Cracked, contaminated, or previously coated concrete takes more preparation time. Oil stains, paint, or old coatings need to be removed before epoxy can bond properly. Your installer should assess this at the quote stage and factor it into the price upfront.
        </p>

        <h3>5. Colour Choice</h3>
        <p>
          Standard colours and flake blends are included in most base prices. Some specialty colours or solid-colour finishes (no flake) may vary slightly in cost. With NuLook, all 13 colours are available at the standard rate.
        </p>

        <h3>6. Add-Ons</h3>
        <ul>
          <li><strong>Anti-slip grit</strong> - often included as standard (it should be)</li>
          <li><strong>Coved skirting</strong> - a curved edge where floor meets wall for hygiene; common in food-grade and commercial environments</li>
          <li><strong>Extra crack repair</strong> - depends on severity and will be noted in your quote</li>
        </ul>

        <h2>Why Some Quotes Are Much Cheaper</h2>
        <p>
          If you've received a quote that seems too good to be true, here's what's likely being cut:
        </p>
        <ul>
          <li><strong>No diamond grinding</strong> - using acid etch or nothing at all</li>
          <li><strong>Thin single-coat system</strong> - no primer, no topcoat</li>
          <li><strong>Off-the-shelf hardware store products</strong> - not commercial-grade epoxy</li>
          <li><strong>No warranty</strong> - or a warranty that isn't backed by anything meaningful</li>
        </ul>
        <p>
          A cheap epoxy floor that peels in three years costs more in the long run than a properly installed floor that lasts 15–20 years.
        </p>

        <h2>Epoxy vs Other Flooring Options in Geelong</h2>
        <table>
          <thead>
            <tr>
              <th>Flooring Option</th>
              <th>Installed Cost (m²)</th>
              <th>Lifespan</th>
              <th>Maintenance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Epoxy (professional)</td>
              <td>$90 – $100</td>
              <td>10–20 years</td>
              <td>Very low</td>
            </tr>
            <tr>
              <td>Garage tiles (interlocking)</td>
              <td>$15 – $30</td>
              <td>5–10 years</td>
              <td>Medium (joints collect dirt)</td>
            </tr>
            <tr>
              <td>Concrete sealer</td>
              <td>$10 – $20</td>
              <td>2–5 years</td>
              <td>High (needs resealing)</td>
            </tr>
            <tr>
              <td>Bare concrete</td>
              <td>$0</td>
              <td>-</td>
              <td>High (dusts, stains, cracks)</td>
            </tr>
          </tbody>
        </table>

        <h2>How to Get an Accurate Quote in Geelong</h2>
        <p>
          The most accurate way to get a price is a free on-site quote - no installer can price a floor accurately from a photo or a floor plan. When you book a quote, have these ready:
        </p>
        <ol>
          <li>Approximate floor size (or we can measure)</li>
          <li>Current floor condition - any cracks, oil stains, previous coatings?</li>
          <li>Preferred colour or finish</li>
          <li>Any specific requirements (anti-slip, coved skirting, etc.)</li>
        </ol>

        <blockquote>
          "Our quoted price never changes. If we underquote a job, we cover the difference - our customers shouldn't pay for our mistakes." - Michael &amp; Gabe, NuLook Floors Geelong
        </blockquote>

        <h2>Frequently Asked Questions</h2>

        <h3>Can I get epoxy flooring in Geelong West, Belmont, or the Surf Coast?</h3>
        <p>
          Yes - NuLook Floors Geelong services the full Greater Geelong area including Geelong West, Belmont, Highton, Newtown, Torquay, Ocean Grove, Drysdale, Leopold, and more.{" "}
          <Link href="/contact">Book a free quote</Link> and we'll come to you.
        </p>

        <h3>How long does installation take?</h3>
        <p>
          Most residential garage floors take 2–3 days to complete. Commercial jobs vary based on the size and specification of the project - your installer will give you a timeline at the quote stage.
          You can walk on the floor within 24 hours and drive on it within 72 hours.
        </p>

        <h3>Is there a warranty?</h3>
        <p>
          Every NuLook Floors Geelong installation comes with a <strong>5-year residential warranty</strong> on materials and workmanship, backed by the national NuLook network.
        </p>
      </BlogLayout>
    </>
  );
}
