'use client';
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function DynamicResearchGuide() {
  const params = useParams();
  const slug = params?.slug as string;

  const formattedTitle = slug
    ? slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
    : 'Research Guide Audit';

  return (
    <article className="max-w-4xl mx-auto px-4 py-12 text-slate-800">
      <header className="mb-10 border-b border-slate-200 pb-8">
        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
          <span className="bg-emerald-50 text-emerald-700 font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-emerald-200">
            Scientific Audit
          </span>
          <span>6 Min Read</span>
          <span>•</span>
          <span>November 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
          {formattedTitle}
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed">
          Evidence-based breakdown, formula match analysis, and cGMP verified alternative scoring for {formattedTitle}.
        </p>
      </header>

      <section className="space-y-8 text-slate-700 leading-relaxed">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Executive Overview</h2>
          <p>
            This article is serving via the dynamic NutriDupe route handler while keeping brand layout and typography intact.
          </p>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl mt-8">
          <h3 className="text-xl font-bold text-emerald-900 mb-2">Compare Ingredients</h3>
          <p className="text-emerald-800 mb-4">
            Search our verified database to audit active compounds and pricing per serving.
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
