import React from 'react';
import Link from 'next/link';

export default function KSM66Guide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 text-slate-800">
      <header className="mb-10 border-b border-slate-200 pb-8">
        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
          <span className="bg-emerald-50 text-emerald-700 font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-emerald-200">
            Ingredient Deep Dive
          </span>
          <span>6 Min Read</span>
          <span>•</span>
          <span>November 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
          KSM-66 Ashwagandha: Sourcing Standards & Equivalents
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed">
          Comparing KSM-66 root-only extraction against generic leaf powders to identify verified, clinically backed alternatives.
        </p>
      </header>

      <section className="space-y-8 text-slate-700 leading-relaxed">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Root-Only vs. Leaf Extraction</h2>
          <p>
            Many budget ashwagandha extracts utilize cheap aerial plant parts (leaves) to cut manufacturing costs. KSM-66 is strictly a root-only extract standardized to 5% withanolides, backed by over 24 gold-standard clinical trials confirming cortisol reduction and stress relief.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Ashwagandha Audit Metrics</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><strong>Generic Leaf Powder:</strong> Unstandardized active compounds; potential gastrointestinal irritation.</li>
            <li><strong>KSM-66® Root Extract:</strong> Full-spectrum root concentration; clinically proven 600mg daily dosage.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Spotting Branded Raw Materials in Budget Brands</h2>
          <p>
            You do not need to buy expensive boutique adaptogen blends. Many cGMP-certified generic brands license KSM-66 directly, allowing you to secure the exact same clinical extract for a fraction of the cost.
          </p>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl mt-8">
          <h3 className="text-xl font-bold text-emerald-900 mb-2">Compare Adaptogen Supplements</h3>
          <p className="text-emerald-800 mb-4">
            Audit standardized KSM-66 and Shoden extracts against overhyped brand names in our database.
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
