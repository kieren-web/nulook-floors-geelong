import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/generateMetadata";
import { BlogLayout } from "@/components/layout/BlogLayout";
import { FAQSchema } from "@/components/seo/FAQSchema";
import Link from "next/link";
import type { FAQ } from "@/types";

export const metadata: Metadata = buildMetadata({
  title: "How Long Does Epoxy Flooring Last? (Honest Answer for Geelong)",
  description:
    "How long epoxy flooring really lasts — and what makes the difference between 3 years and 20 years. What to ask your installer before you commit.",
  path: "/blog/how-long-does-epoxy-flooring-last",
});

const faqItems: FAQ[] = [
  {
    id: "lifespan-faq-1",
    question: "How long does epoxy flooring last in a residential garage?",
    answer:
      "A professionally installed epoxy floor in a residential garage typically lasts 10–20 years. The most important factor is surface preparation — floors prepared with diamond grinding and properly primed will outlast floors where this step was skipped by a wide margin.",
    page: "home",
  },
  {
    id: "lifespan-faq-2",
    question: "Why is my epoxy floor peeling after only a few years?",
    answer:
      "Peeling is almost always caused by poor surface preparation. If the concrete wasn't diamond ground before the epoxy was applied, or if there was moisture in the slab, the coating can't form a permanent bond. DIY kits and cheaper installers who use acid etching instead of diamond grinding are the most common cause of early delamination.",
    page: "home",
  },
  {
    id: "lifespan-faq-3",
    question: "Does epoxy flooring need to be recoated?",
    answer:
      "A properly installed professional epoxy floor should not need recoating within its warranty period. In high-traffic commercial environments, a maintenance topcoat may be applied after 5–10 years depending on use and traffic levels. Residential floors rarely need this.",
    page: "home",
  },
  {
    id: "lifespan-faq-4",
    question: "How do I make my epoxy floor last longer?",
    answer:
      "Clean spills promptly (especially acidic substances like battery acid), use a soft-bristle broom or mop for regular cleaning, avoid dragging sharp metal objects across the surface, and use furniture pads under heavy equipment. These simple steps will help a professional epoxy floor last the full 15–20 years.",
    page: "home",
  },
];

export default function HowLongLastsPage() {
  return (
    <>
      <FAQSchema faqs={faqItems} />
      <BlogLayout
        title="How Long Does Epoxy Flooring Last? (Honest Answer for Geelong)"
        label="EPOXY GUIDE"
        date="April 2025"
        readTime="5 min read"
        intro="You'll see claims ranging from '3 years' to 'a lifetime' when researching epoxy flooring. The honest answer is: it depends almost entirely on how it was installed. Here's what actually determines how long your floor will last."
      >
        <h2>The Honest Numbers</h2>
        <p>
          Here's a realistic breakdown of epoxy floor lifespans based on installation quality:
        </p>
        <table>
          <thead>
            <tr>
              <th>Installation Type</th>
              <th>Typical Lifespan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DIY kit (hardware store, acid etch prep)</td>
              <td>1–3 years</td>
            </tr>
            <tr>
              <td>Budget professional (single coat, minimal prep)</td>
              <td>3–6 years</td>
            </tr>
            <tr>
              <td>Professional multi-coat (diamond grind, no UV topcoat)</td>
              <td>7–12 years</td>
            </tr>
            <tr>
              <td>Professional multi-coat system (diamond grind + UV topcoat)</td>
              <td>10–20 years</td>
            </tr>
            <tr>
              <td>Commercial-grade polyaspartic topcoat</td>
              <td>15–25 years</td>
            </tr>
          </tbody>
        </table>

        <p>
          The NuLook system uses a full multi-coat process with a UV-stable topcoat — which is why we back it with a <strong>5-year residential warranty</strong> and expect floors to perform well beyond the warranty period. For commercial floors in heavy-use environments, a maintenance topcoat is typically recommended every 5–10 years depending on traffic.
        </p>

        <h2>The #1 Factor: Surface Preparation</h2>
        <p>
          No other factor matters more than what happens before the first coat goes down. Epoxy adheres to concrete through a mechanical bond — meaning the concrete surface needs to be opened up so the epoxy can penetrate and grip.
        </p>
        <p>
          The only way to properly achieve this is <strong>diamond grinding</strong>: using industrial diamond-tipped grinding discs to remove the top layer of the concrete surface, exposing fresh aggregate and creating a profile for the epoxy to bond to.
        </p>
        <p>
          Cheaper alternatives — acid etching, shot blasting, or simply cleaning the floor — don't achieve the same result. A floor prepared this way will begin to delaminate (peel away from the concrete) within years, sometimes months, regardless of how good the epoxy product is.
        </p>

        <blockquote>
          Every NuLook Floors Geelong installation begins with diamond grinding. It's non-negotiable — it's what makes the floor last.
        </blockquote>

        <h2>Other Factors That Affect Lifespan</h2>

        <h3>UV stability of the topcoat</h3>
        <p>
          Standard epoxy yellows and becomes brittle when exposed to UV light. This is why garages with natural light, patios, and any outdoor applications need a UV-stable polyurethane or polyaspartic topcoat as the final layer. Without it, the floor will discolour and lose its gloss within a few years in any sun-exposed area.
        </p>

        <h3>Slab moisture</h3>
        <p>
          Concrete naturally contains moisture, and epoxy doesn't bond well to wet concrete. A properly installed floor includes a moisture-tolerant primer that manages this — but if moisture levels are exceptionally high (common in older Geelong homes with no underslab membrane), your installer should flag this before starting.
        </p>

        <h3>Traffic and use</h3>
        <p>
          A residential garage seeing one or two cars daily will outlast a commercial workshop floor with forklift traffic. Commercial environments need heavier-grade systems specified to the actual load — a residential-grade system installed in a warehouse won't hold up.
        </p>

        <h3>Maintenance habits</h3>
        <p>
          Epoxy floors are genuinely low-maintenance, but "low maintenance" isn't "no maintenance." The things that shorten a floor's life:
        </p>
        <ul>
          <li>Leaving acidic spills (battery acid, certain cleaning chemicals) sitting on the surface</li>
          <li>Dragging sharp or jagged metal objects across it</li>
          <li>Using abrasive cleaning pads that scratch the topcoat</li>
          <li>Pressure washing with high-pressure concentrated nozzles directly on the surface</li>
        </ul>

        <h2>Signs Your Epoxy Floor Needs Attention</h2>
        <p>
          Even the best floors show wear eventually. Here's what to watch for:
        </p>
        <ul>
          <li><strong>Loss of gloss:</strong> Normal after many years, but early gloss loss can indicate a poor topcoat</li>
          <li><strong>Delamination or bubbling:</strong> Almost always a preparation issue — the coating is separating from the concrete</li>
          <li><strong>Micro-cracking in the coating:</strong> Can occur if the floor was installed over a slab with significant movement</li>
          <li><strong>Yellowing:</strong> Usually means the topcoat wasn't UV-stable</li>
        </ul>

        <h2>What to Ask Your Installer Before Committing</h2>
        <p>
          Before you book any epoxy installer in Geelong, ask these questions:
        </p>
        <ol>
          <li><strong>Do you diamond grind?</strong> If they say they use acid etching or just clean the floor, walk away.</li>
          <li><strong>How many coats is the system?</strong> A minimum of three (primer, epoxy, topcoat) is the professional standard.</li>
          <li><strong>Is the topcoat UV-stable?</strong> Especially important for garages with light exposure or outdoor areas.</li>
          <li><strong>What warranty do you provide?</strong> A confident installer backs their work.</li>
          <li><strong>What products do you use?</strong> Commercial-grade products are significantly more durable than retail alternatives.</li>
        </ol>

        <div className="callout">
          <p>
            <strong>NuLook Floors Geelong answers yes to all of the above.</strong> We diamond grind every floor, apply a full 5-layer system, and back every residential installation with a 5-year warranty.{" "}
            <Link href="/contact">Book a free on-site quote</Link> or call{" "}
            <a href="tel:+61466385069">0466 385 069</a>.
          </p>
        </div>

        <h2>The Bottom Line</h2>
        <p>
          A professionally installed epoxy floor, done properly, should last well over a decade with minimal care. The difference between a floor that lasts 20 years and one that peels in three comes down to one thing: preparation. Ask about it before you sign anything.
        </p>
      </BlogLayout>
    </>
  );
}
