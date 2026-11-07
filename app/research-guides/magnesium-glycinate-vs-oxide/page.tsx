import React from 'react';
import Link from 'next/link';

export default function MagnesiumGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 text-slate-800">
      <header className="mb-10 border-b pb-8">
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
          Bioavailability Guide
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
          Magnesium Glycinate vs. Oxide: Bioavailability Breakdown & Cost Comparison
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed">
          Why cheap Magnesium Oxide absorbs at under 5% while chelated Magnesium Glycinate reaches high systemic absorption—and how to spot overpriced brand-name markups.
        </p>
      </header>

      <section className="space-y-8 text-slate-700 leading-relaxed">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">1. The Bioavailability Delta</h2>
          <p>
            Magnesium oxide is the most common form of magnesium found in low-cost supplements. While it boasts high elemental magnesium by weight (~60%), its solubility in the gastrointestinal tract is exceptionally poor.
          </p>
          <p className="mt-3">
            In contrast, <strong>Magnesium Glycinate</strong> (magnesium bound to two glycine amino acid molecules) utilizes organic amino acid transport pathways, resulting in significantly higher biological utilization without laxative side effects.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Key Comparison Summary</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
            <li><strong>Magnesium Oxide:</strong> ~4% absorption rate; frequent GI distress; cheap filler material.</li>
            <li><strong>Magnesium Glycinate:</strong> High systemic absorption; stomach-friendly; optimal for muscle recovery and sleep support.</li>
          </ul>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl mt-8">
          <h3 className="text-xl font-bold text-emerald-900 mb-2">Audit Your Magnesium Supplement</h3>
          <p className="text-emerald-800 mb-4">
            Check your current magnesium product against verified cGMP alternatives in our comparison database.
          </p>
          <Link 
            href="/compare" 
            className="inline-block bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors"
          >
            Run Comparison &rarr;
          </Link>
        </div>
      </section>
    </article>
  );
}
