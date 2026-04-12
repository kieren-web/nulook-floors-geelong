import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/generateMetadata";
import { BlogLayout } from "@/components/layout/BlogLayout";
import { FAQSchema } from "@/components/seo/FAQSchema";
import Link from "next/link";
import type { FAQ } from "@/types";

export const metadata: Metadata = buildMetadata({
  title: "Epoxy vs Garage Floor Tiles: Which is Better for Geelong Garages?",
  description:
    "Comparing epoxy flooring vs interlocking garage tiles for Geelong homes. Cost, durability, installation, and resale value — an honest side-by-side comparison.",
  path: "/blog/epoxy-vs-tiles-garage-floor",
});

const faqItems: FAQ[] = [
  {
    id: "tiles-faq-1",
    question: "Is epoxy flooring better than garage tiles?",
    answer:
      "For most Geelong garages, epoxy flooring offers better value long-term. Epoxy is seamless (no joints to trap dirt), more durable under vehicles and forklifts, harder to damage, and typically lasts 2–3x longer than interlocking tiles. Tiles can be a good DIY option for renters or those wanting a removable solution.",
    page: "home",
  },
  {
    id: "tiles-faq-2",
    question: "Can you put epoxy over garage tiles?",
    answer:
      "No — epoxy cannot be applied over interlocking garage tiles. The tiles would need to be removed first, and the concrete beneath would need to be diamond ground before any epoxy coating can be applied.",
    page: "home",
  },
  {
    id: "tiles-faq-3",
    question: "How long do garage floor tiles last compared to epoxy?",
    answer:
      "Good quality interlocking garage tiles typically last 5–10 years before fading, cracking, or lifting. A professionally installed epoxy floor lasts 10–20 years with minimal maintenance. Epoxy also retains its gloss finish far longer than tiles.",
    page: "home",
  },
];

export default function EpoxyVsTilesPage() {
  return (
    <>
      <FAQSchema faqs={faqItems} />
      <BlogLayout
        title="Epoxy vs Garage Floor Tiles: Which is Better for Geelong Garages?"
        label="BUYER'S GUIDE"
        date="April 2025"
        readTime="6 min read"
        intro="Garage floor tiles look great in YouTube videos and hardware store displays. But how do they actually compare to professional epoxy flooring when you're living with the result every day? Here's the honest comparison."
      >
        <h2>The Quick Verdict</h2>
        <p>
          For most Geelong homeowners who own their property and want a long-term result, <strong>epoxy flooring wins on almost every measure</strong>: durability, appearance, maintenance, and cost per year of use.
        </p>
        <p>
          Garage floor tiles have their place — specifically for renters, people who want a DIY weekend project, or those who need a temporary or movable solution. But if you're treating your garage seriously, the comparison isn't particularly close.
        </p>

        <h2>Side-by-Side Comparison</h2>
        <table>
          <thead>
            <tr>
              <th>Factor</th>
              <th>Epoxy Flooring</th>
              <th>Interlocking Tiles</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Installed cost</strong></td>
              <td>$90–$100/m² (professional)</td>
              <td>$15–$30/m² (DIY or installed)</td>
            </tr>
            <tr>
              <td><strong>Lifespan</strong></td>
              <td>10–20 years</td>
              <td>5–10 years</td>
            </tr>
            <tr>
              <td><strong>Maintenance</strong></td>
              <td>Very low — hose or mop</td>
              <td>Medium — joints trap dirt</td>
            </tr>
            <tr>
              <td><strong>Vehicle traffic</strong></td>
              <td>Excellent</td>
              <td>Moderate (tiles can shift or crack)</td>
            </tr>
            <tr>
              <td><strong>Hot tyre lifting</strong></td>
              <td>Not an issue with quality epoxy</td>
              <td>Not an issue</td>
            </tr>
            <tr>
              <td><strong>Chemical resistance</strong></td>
              <td>High</td>
              <td>Moderate</td>
            </tr>
            <tr>
              <td><strong>Appearance long-term</strong></td>
              <td>Retains gloss</td>
              <td>Fades, tiles may lift at edges</td>
            </tr>
            <tr>
              <td><strong>Seamless surface</strong></td>
              <td>Yes</td>
              <td>No — joints collect grime</td>
            </tr>
            <tr>
              <td><strong>Installation</strong></td>
              <td>Professional (2–3 days)</td>
              <td>DIY possible</td>
            </tr>
            <tr>
              <td><strong>Removable</strong></td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><strong>Warranty (typical)</strong></td>
              <td>5 years (NuLook)</td>
              <td>Manufacturer warranty only</td>
            </tr>
          </tbody>
        </table>

        <h2>Where Epoxy Wins</h2>

        <h3>Seamless, joint-free surface</h3>
        <p>
          Every interlocking tile floor has seams. Over time, oil, grime, dust, and moisture settle into those joints — making them harder to clean and less hygienic. An epoxy floor is 100% seamless, so a quick hose-down or mop is genuinely all it takes.
        </p>

        <h3>Durability under real use</h3>
        <p>
          A car weighing 1,500–2,000kg parks on your garage floor every day. Combined with heat from the engine, oil drips, and foot traffic — tiles take a battering. Tiles can crack, chip at the edges, and shift over time. A properly installed epoxy floor — bonded directly to the concrete — holds up to this use without shifting or lifting.
        </p>

        <h3>Cost per year of use</h3>
        <p>
          A double garage epoxy floor installed by NuLook costs $3,200–$4,000 and lasts 15+ years. A tile floor at $1,500–$2,000 typically lasts 7 years — meaning over the same 15-year period you'd be replacing them at least twice, spending $3,000–$4,000 in total anyway. Except you still have joints, fading, and two rounds of disruption. <strong>The long-term cost is comparable, the result is not.</strong>
        </p>

        <h3>Resale and presentation</h3>
        <p>
          A glossy epoxy floor photographs better, looks more premium to buyers, and signals that the owner takes care of the property. Faded, lifting garage tiles send the opposite message. For Geelong homeowners looking to sell, an epoxy floor is a genuine value-add.
        </p>

        <h2>Where Tiles Might Win</h2>

        <h3>Renters and temporary setups</h3>
        <p>
          If you're renting, you almost certainly can't install epoxy — your landlord would need to approve any permanent modification to the concrete. Interlocking tiles are a reasonable compromise and can go with you when you move.
        </p>

        <h3>DIY weekenders</h3>
        <p>
          Interlocking tiles require no special skills or equipment. If you want a Saturday project and a modest improvement without booking a tradesperson, tiles get the job done. Just manage your expectations around longevity and cleanliness.
        </p>

        <h3>Budget-constrained situations</h3>
        <p>
          If the budget simply isn't there right now, a decent tile floor is better than bare concrete. But if you're planning to epoxy eventually, do it first — removing tiles and then grinding the floor adds unnecessary cost.
        </p>

        <h2>What About DIY Epoxy Kits?</h2>
        <p>
          You'll find epoxy kits at Bunnings and online for $150–$400 that promise a garage floor transformation. Here's the honest assessment: <strong>they work, but not well and not for long.</strong>
        </p>
        <p>
          The reason is preparation. DIY epoxy kits rely on acid etching to open the concrete — but etching only works on clean, uncontaminated concrete. Most garages have oil stains, tyre marks, and years of grime. Without diamond grinding, the coating won't bond properly and will begin to peel within 1–3 years.
        </p>
        <p>
          Professional epoxy uses commercial-grade products at 2–3x the solids content of retail kits — meaning a much thicker, more durable coating that actually lasts.
        </p>

        <div className="callout">
          <p>
            <strong>Bottom line:</strong> If you own your home and want a floor that performs and looks great for a decade or more, professional epoxy is the clear winner. If you're renting or want a short-term DIY fix, tiles are a reasonable option — just don't expect them to last.
          </p>
        </div>

        <h2>Ready to Compare for Your Specific Garage?</h2>
        <p>
          Every garage is different — size, concrete condition, how it gets used. The best way to know exactly what your floor needs is a free on-site assessment.{" "}
          <Link href="/contact">Book yours here</Link> or call Michael &amp; Gabe on{" "}
          <a href="tel:+61466385069">0466 385 069</a>. We'll give you an honest recommendation and a fixed written quote.
        </p>
      </BlogLayout>
    </>
  );
}
