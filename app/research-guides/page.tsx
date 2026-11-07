import React from 'react';
import Link from 'next/link';

export default function ResearchGuidesIndex() {
  const guides = [
    {
      title: "The Science of Supplement Duping: How to Spot Clinical Equivalents and Stop Overpaying",
      excerpt: "Learn how to audit active chemical forms, bioavailable chelates, precise milligram dosages, and third-party certifications (NSF/USP) to find 1:1 clinical alternatives.",
      category: "Methodology & Science",
      readTime: "6 Min Read",
      date: "November 2026",
      slug: "/research-guides/science-of-supplement-duping",
      isFeatured: true,
    },
    {
      title: "Athletic Greens AG1: Scientific Analysis & Top cGMP Alternatives (2026 Audit)",
      excerpt: "Our 50/30/20 active-ingredient audit of AG1 reveals two cGMP-certified alternatives delivering clinically equivalent spirulina, ashwagandha, and digestive enzyme profiles.",
      category: "Scientific Audit",
      readTime: "7 Min Read",
      date: "October 2026",
      slug: "/research-guides/athletic-greens-ag1-alternatives", // replace with your actual path if different
      isFeatured: false,
    },
    {
      title: "Magnesium Glycinate vs. Oxide: Bioavailability Grade 5 vs. Grade 1 Explained",
      excerpt: "Why magnesium oxide absorbs at just 4% while chelated glycinate reaches over 80%. We break down the chemistry, clinical data, and cost implications.",
      category: "Bioavailability Guide",
      readTime: "5 Min Read",
      date: "November 2026",
      slug: "/research-guides/magnesium-glycinate-vs-oxide",
      isFeatured: false,
    },
  ];

  const featured = guides.find((g) => g.isFeatured) || guides[0];
  const secondary = guides.filter((g) => !g.isFeatured);

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

      {/* Featured Card */}
      <div className="mb-12">
        <Link 
          href={featured.slug}
          className="block bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-emerald-500 hover:shadow-lg transition-all group"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-emerald-600 text-white font-bold px-4 py-2 rounded-lg text-xs uppercase tracking-wider">
              Featured Article
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                <span>{featured.category}</span>
                <span>•</span>
                <span>{featured.readTime}</span>
                <span>•</span>
                <span>{featured.date}</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-3">
                {featured.title}
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                {featured.excerpt}
              </p>
              <span className="text-emerald-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Full Guide &rarr;
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* Secondary Cards */}
      <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 text-center">
        More Research Guides
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {secondary.map((guide, idx) => (
          <Link
            key={idx}
            href={guide.slug}
            className="bg-white border border-slate-200 rounded-xl p-6 hover:border-emerald-500 hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                <span className="font-semibold text-emerald-700">{guide.category}</span>
                <span>•</span>
                <span>{guide.readTime}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2">
                {guide.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                {guide.excerpt}
              </p>
            </div>
            <span className="text-emerald-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Read Guide &rarr;
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
