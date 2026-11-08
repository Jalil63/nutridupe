import React from 'react';
import Link from 'next/link';

export default function MagnesiumGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 text-slate-800">
      <header className="mb-10 border-b border-slate-200 pb-8">
        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
          <span className="bg-emerald-50 text-emerald-700 font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-emerald-200">
            Bioavailability Guide
          </span>
          <span>5 Min Read</span>
          <span>•</span>
          <span>November 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
          Magnesium Glycinate vs. Oxide: Bioavailability Breakdown
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed">
          Why cheap magnesium oxide absorbs at just 4% while chelated glycinate reaches over 80% tissue retention without laxative side effects.
        </p>
      </header>

      <section className="space-y-8 text-slate-700 leading-relaxed">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Why Magnesium Oxide Fails</h2>
          <p>
            Magnesium Oxide is cheap to manufacture and frequently used in budget multivitamins. However, its bioavailability sits below 4%, with the unabsorbed mineral drawing water into the intestines—effectively acting as a strong laxative rather than cellular nourishment.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Chelation Chemistry Summary</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><strong>Magnesium Oxide:</strong> ~4% absorption; severe GI distress at higher doses.</li>
            <li><strong>Magnesium Glycinate (Albion® TRAACS):</strong> 80%+ absorption; bound to amino acid glycine for gentle neural and muscular relaxation.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Sourcing True Albion® Chelates</h2>
          <p>
            Always verify that chelated magnesium supplements utilize certified amino acid chelates to guarantee high absorption rates and protect against heavy metal contaminants.
          </p>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl mt-8">
          <h3 className="text-xl font-bold text-emerald-900 mb-2">Audit Your Magnesium Supplement</h3>
          <p className="text-emerald-800 mb-4">
            Compare chelated magnesium forms and price-per-serving ratios in our database.
          </p>
          <Link 
            href="/compare" 
            className="inline-block bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors"
          >
            Launch Magnesium Comparison &rarr;
          </Link>
        </div>
      </section>
    </article>
  );
}
