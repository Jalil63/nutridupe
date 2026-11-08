import React from 'react';
import Link from 'next/link';

export default function ResearchGuidesIndex() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-slate-800">
      <header className="text-center mb-12">
        <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 border border-emerald-200">
          Research Guides
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          NutriDupe Research Guides & Scientific Audits
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
          Evidence-based breakdowns, active-ingredient audits, and price-per-serving analyses.
        </p>
      </header>

      {/* 1. Featured Article: The New Pillar Article */}
      <div className="mb-12">
        <Link 
          href="/research-guides/science-of-supplement-duping"
          className="block bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-emerald-500 hover:shadow-lg transition-all group"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-emerald-600 text-white font-bold px-4 py-2 rounded-lg text-xs uppercase tracking-wider">
              Featured Article
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                <span>Methodology & Science</span>
                <span>•</span>
                <span>6 Min Read</span>
                <span>•</span>
                <span>November 2026</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-3">
                The Science of Supplement Duping: How to Spot Clinical Equivalents and Stop Overpaying
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Supplement &quot;duping&quot; isn&apos;t about buying cheap knockoffs. It is the systematic process of matching active chemical forms, bioavailable chelates, precise milligram dosages, and third-party certifications (NSF/USP).
              </p>
              <span className="text-emerald-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Full Guide &rarr;
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* 2, 3, 4. More Research Guides Grid */}
      <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 text-center">
        More Research Guides & Audits
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Article 2 */}
        <Link
          href="/research-guides/athletic-greens-ag1-alternatives"
          className="bg-white border border-slate-200 rounded-xl p-6 hover:border-emerald-500 hover:shadow-md transition-all group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
              <span className="font-semibold text-emerald-700">Scientific Audit</span>
              <span>•</span>
              <span>7 Min Read</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2">
              Athletic Greens AG1: Scientific Analysis & Top cGMP Alternatives (2026 Audit)
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              Our active-ingredient audit of AG1 reveals cGMP alternatives delivering equivalent profiles at half the cost.
            </p>
          </div>
          <span className="text-emerald-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            Read Guide &rarr;
          </span>
        </Link>

        {/* Article 3 */}
        <Link
          href="/research-guides/magnesium-glycinate-vs-oxide"
          className="bg-white border border-slate-200 rounded-xl p-6 hover:border-emerald-500 hover:shadow-md transition-all group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
              <span className="font-semibold text-emerald-700">Bioavailability Guide</span>
              <span>•</span>
              <span>5 Min Read</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2">
              Magnesium Glycinate vs. Oxide: Bioavailability Breakdown & Cost Comparison
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              Why magnesium oxide absorbs at just 4% while chelated glycinate reaches over 80%.
            </p>
          </div>
          <span className="text-emerald-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            Read Guide &rarr;
          </span>
        </Link>

        {/* Article 4 */}
        <Link
          href="/research-guides/ksm-66-ashwagandha"
          className="bg-white border border-slate-200 rounded-xl p-6 hover:border-emerald-500 hover:shadow-md transition-all group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
              <span className="font-semibold text-emerald-700">Ingredient Deep Dive</span>
              <span>•</span>
              <span>6 Min Read</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2">
              KSM-66 Ashwagandha: Sourcing Standards and cGMP Equivalents
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              Comparing KSM-66 root-only extraction against generic powders to identify verified alternatives.
            </p>
          </div>
          <span className="text-emerald-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            Read Guide &rarr;
          </span>
        </Link>

      </div>
    </div>
  );
}
