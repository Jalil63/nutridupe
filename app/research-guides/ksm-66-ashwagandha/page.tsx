import React from 'react';
import Link from 'next/link';

export default function AshwagandhaGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 text-slate-800">
      <header className="mb-10 border-b pb-8">
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
          Ingredient Deep Dive
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
          KSM-66 Ashwagandha: Sourcing Standards and cGMP Equivalents
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed">
          Not all ashwagandha extracts are created equal. We compare KSM-66 root-only extraction against generic full-spectrum powders and identify verified cGMP alternatives.
        </p>
      </header>

      <section className="space-y-8 text-slate-700 leading-relaxed">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Root-Only vs. Whole Plant Extraction</h2>
          <p>
            Standard ashwagandha powders often grind up both roots and leaves. However, traditional Ayurvedic texts and clinical trials exclusively utilize the root. KSM-66 is a branded, full-spectrum root extract standardized to a high withanolide concentration (&gt;5%) using a "green chemistry" extraction process without alcohol or chemical solvents.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Evaluating Clinical Equivalents</h2>
          <p>
            When searching for alternatives to premium KSM-66 formulations, ensure the budget supplement explicitly discloses <strong>root extract only</strong> and provides independent third-party verification for withanolide potency.
          </p>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl mt-8">
          <h3 className="text-xl font-bold text-emerald-900 mb-2">Compare Adaptogen Supplements</h3>
          <p className="text-emerald-800 mb-4">
            Check your favorite stress and recovery supplements against verified cGMP equivalents in our database.
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
