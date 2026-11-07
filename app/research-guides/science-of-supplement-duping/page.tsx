import React from 'react';
import Link from 'next/link';

export default function SupplementDupingGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 text-slate-800">
      <header className="mb-10 border-b pb-8">
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
          Research & Clinical Analysis
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
          The Science of Supplement Duping: How to Spot Clinical Equivalents and Stop Overpaying
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed">
          Supplement &quot;duping&quot; isn&apos;t about buying cheap knockoffs—it&apos;s the systematic process of matching active chemical forms, bioavailable chelates, precise milligram dosages, and independent third-party lab verifications (NSF/USP) to get 1:1 clinical outcomes at fair market value.
        </p>
      </header>

      <section className="space-y-10 text-slate-700 leading-relaxed">
        {/* Section 1 */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            1. The 4 Non-Negotiable Quality Benchmarks
          </h2>
          <p className="mb-4">
            Before switching from a premium brand to an alternative formulation, run the product through these four analytical checks:
          </p>
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse border border-slate-200 text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-900">
                  <th className="border border-slate-200 p-3 text-left">Benchmark Parameter</th>
                  <th className="border border-slate-200 p-3 text-left">Premium Brand Claim</th>
                  <th className="border border-slate-200 p-3 text-left">NutriDupe Equivalent Standard</th>
                  <th className="border border-slate-200 p-3 text-left">Biological & Efficacy Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-3 font-semibold">Active Chemical Form</td>
                  <td className="border border-slate-200 p-3">Organic chelate or isolated compound (e.g., Magnesium Glycinate)</td>
                  <td className="border border-slate-200 p-3">Identical chemical structure (avoiding inorganic oxides)</td>
                  <td className="border border-slate-200 p-3">Determines gut absorption rates and prevents GI distress.</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 p-3 font-semibold">Clinical Dosing</td>
                  <td className="border border-slate-200 p-3">Disclosed milligram strength per serving</td>
                  <td className="border border-slate-200 p-3">1:1 match against study-backed human trial levels</td>
                  <td className="border border-slate-200 p-3">Ensures therapeutic threshold is reached per dose.</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 font-semibold">cGMP Compliance</td>
                  <td className="border border-slate-200 p-3">cGMP certified facility status</td>
                  <td className="border border-slate-200 p-3">FDA-registered & cGMP audited facility</td>
                  <td className="border border-slate-200 p-3">Prevents heavy metal and micro-organism contamination.</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 p-3 font-semibold">Independent Purity Audit</td>
                  <td className="border border-slate-200 p-3">Third-party lab tested (COA verified)</td>
                  <td className="border border-slate-200 p-3">NSF, USP, or Informed Choice certification</td>
                  <td className="border border-slate-200 p-3">Guarantees bottle label accuracy match batch to batch.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            2. Proprietary Blends vs. Fully Disclosed Labels
          </h2>
          <p className="mb-3">
            One common industry practice is hiding ingredients behind a total &quot;Proprietary Blend&quot; weight. A product might advertise 20 high-value botanicals in a 5,000 mg matrix, but conceal individual amounts. In practice, cheap bulk powders often take up 95% of the formula, while active compounds are present in minimal trace amounts (&quot;fairy dusting&quot;).
          </p>
          <p>
            When choosing a clinical alternative, only rely on transparent supplement facts panels that list exact milligram amounts for every active component.
          </p>
        </div>

        {/* Section 3: Peer-reviewed citations */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            Scientific Evidence & Peer-Reviewed References
          </h2>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex gap-2">
              <span className="font-bold text-emerald-700">[1]</span>
              <span>
                <strong>Magnesium Bioavailability:</strong> Walker et al. (2003). <em>&quot;Mg citrate found more bioavailable than other Mg preparations in a randomized, double-blind study.&quot;</em> Magnesium Research, 16(3), 183-191. (PubMed ID: 14596323)
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-emerald-700">[2]</span>
              <span>
                <strong>Zinc Absorption Pathways:</strong> Barrie et al. (1987). <em>&quot;Comparative absorption of zinc picolinate, zinc citrate and zinc gluconate in humans.&quot;</em> Agents and Actions, 21(1-2), 223-228. (PubMed ID: 3630857)
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-emerald-700">[3]</span>
              <span>
                <strong>Third-Party Quality Verification:</strong> U.S. Pharmacopeia (USP) Dietary Supplement Verification Standards (USP-NF 2024).
              </span>
            </li>
          </ul>
        </div>

        {/* Call to action */}
        <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl mt-8">
          <h3 className="text-xl font-bold text-emerald-900 mb-2">
            Compare Your Supplement Stack
          </h3>
          <p className="text-emerald-800 mb-4">
            Search your current daily supplements in our comparison database to check active ingredient matches, bioavailability scores, and price-per-serving breakdowns.
          </p>
          <Link 
            href="/compare" 
            className="inline-block bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors"
          >
            Launch Comparison Engine &rarr;
          </Link>
        </div>
      </section>
    </article>
  );
}
