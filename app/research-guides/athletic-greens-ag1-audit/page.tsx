import React from 'react';
import Link from 'next/link';

export default function AG1AuditPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 text-slate-800">
      <header className="mb-10 border-b pb-8">
        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
          <span className="bg-emerald-50 text-emerald-700 font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-emerald-200">
            Scientific Audit
          </span>
          <span>7 Min Read</span>
          <span>•</span>
          <span>October 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
          Athletic Greens AG1: Scientific Analysis & Top cGMP Alternatives (2026 Audit)
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed">
          Our 50/30/20 active-ingredient audit of AG1 reveals two cGMP-certified alternatives delivering clinically equivalent spirulina, ashwagandha, and digestive enzyme profiles at less than half the cost per serving.
        </p>
      </header>

      <section className="space-y-8 text-slate-700 leading-relaxed">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Executive Formula Analysis</h2>
          <p>
            Athletic Greens AG1 remains the market leader in daily greens powders, pricing out at over $3.00 per serving. While its formula contains 75 vitamins, minerals, and whole-food sourced ingredients, our active-ingredient breakdown reveals significant proprietary blend masking.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Key Audit Metrics</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><strong>Cost Per Serving:</strong> ~$3.30/day</li>
            <li><strong>Proprietary Blends:</strong> 4 distinct complexes (exact dosage per ingredient undisclosed)</li>
            <li><strong>Key Bioactives:</strong> Spirulina, Organic Chlorella, KSM-66 Ashwagandha, Probiotics (7.2B CFU)</li>
            <li><strong>Certifications:</strong> NSF Certified for Sport, cGMP</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Identifying Clinical Equivalents</h2>
          <p>
            When matching AG1 against affordable alternatives, we focus on three core pillars: equivalent adaptogen dosing (ashwagandha/rhodiola), verified probiotic CFU counts, and third-party cGMP manufacturing standards.
          </p>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl mt-8">
          <h3 className="text-xl font-bold text-emerald-900 mb-2">Compare AG1 Against Top Dupes</h3>
          <p className="text-emerald-800 mb-4">
            See ingredient match percentages and price-per-gram savings in our interactive comparison engine.
          </p>
          <Link 
            href="/compare" 
            className="inline-block bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors"
          >
            Launch AG1 Comparison &rarr;
          </Link>
        </div>
      </section>
    </article>
  );
}
