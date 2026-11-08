import React from 'react';
import Link from 'next/link';

export default function Omega3Guide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 text-slate-800">
      <header className="mb-10 border-b border-slate-200 pb-8">
        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
          <span className="bg-emerald-50 text-emerald-700 font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-emerald-200">
            Scientific Audit
          </span>
          <span>7 Min Read</span>
          <span>•</span>
          <span>November 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
          Omega-3 Fish Oil: Triglyceride vs. Ethyl Ester & IFOS Standards
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed">
          Most off-the-shelf fish oils use cheap synthetic Ethyl Esters that suffer low intestinal absorption. Here is how re-esterified Triglyceride (rTG) forms deliver up to 70% higher EPA/DHA uptake—and how to spot overpriced brand markups.
        </p>
      </header>

      <section className="space-y-8 text-slate-700 leading-relaxed">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">1. The Molecular Trap: Ethyl Ester vs. Re-Esterified Triglyceride</h2>
          <p>
            During industrial processing, raw fish oil is reacted with ethanol to concentrate fatty acids, yielding Ethyl Esters (EE). While cheap to produce, human pancreatic lipase breaks down EE bonds poorly, causing up to 50% lower acute systemic absorption and frequent &quot;fishy burps.&quot;
          </p>
          <p className="mt-3">
            Re-esterified Triglyceride (rTG) processes those fatty acids back into their natural glycerol backbone. When we audit labels, we look for explicit rTG confirmation: it absorbs roughly 70% better than EE variants without liver processing overhead.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Audit Summary: What to Look For</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><strong>Ethyl Ester (EE):</strong> Cheap synthetic form; poor bioavailability; prone to rapid oxidation.</li>
            <li><strong>Re-Esterified Triglyceride (rTG):</strong> Natural structure; max tissue retention; GI-friendly.</li>
            <li><strong>IFOS 5-Star Seal:</strong> Verifies heavy metal clearance and TOTOX oxidation limits per batch.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Rancidity & The TOTOX Score</h2>
          <p>
            Rancid fish oil acts as a pro-oxidant, triggering tissue inflammation instead of resolving it. A legitimate brand will make its IFOS batch reports public, proving a Total Oxidation (TOTOX) score under 26 meq/kg and heavy metal levels far below USP safety thresholds.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">3. The Front-Label Deception: Math That Saves You Money</h2>
          <p>
            Ignore prominent front-label claims like &quot;1,000mg Fish Oil.&quot; Always check the supplement facts panel on the back: add the actual combined EPA and DHA milligrams together. If a 1,000mg softgel only yields 300mg of active EPA/DHA, 70% of that capsule is filler oil.
          </p>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl mt-8">
          <h3 className="text-xl font-bold text-emerald-900 mb-2">Audit Your Omega-3 Supplement</h3>
          <p className="text-emerald-800 mb-4">
            Compare active EPA/DHA ratios, molecular forms, and true cost-per-gram savings in our database.
          </p>
          <Link 
            href="/compare" 
            className="inline-block bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors"
          >
            Launch Omega-3 Comparison &rarr;
          </Link>
        </div>
      </section>
    </article>
  );
}
