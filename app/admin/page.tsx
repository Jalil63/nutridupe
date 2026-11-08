'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'guides' | 'affiliates'>('guides');
  
  // State for adding a new guide easily via form
  const [guides, setGuides] = useState([
    { title: "The Science of Supplement Duping", category: "Methodology", slug: "/research-guides/science-of-supplement-duping", status: "Published" },
    { title: "Magnesium Glycinate vs. Oxide", category: "Bioavailability", slug: "/research-guides/magnesium-glycinate-vs-oxide", status: "Published" },
    { title: "KSM-66 Ashwagandha Standards", category: "Ingredient Deep Dive", slug: "/research-guides/ksm-66-ashwagandha", status: "Published" },
    { title: "Athletic Greens AG1 Audit", category: "Scientific Audit", slug: "/research-guides/athletic-greens-ag1-alternatives", status: "Published" },
  ]);

  const [affiliates, setAffiliates] = useState([
    { product: "Magnesium Glycinate (Brand A)", partner: "Amazon Associates", link: "https://amazon.dp/example" },
    { product: "KSM-66 Root Extract (Brand B)", partner: "Lemon Squeezy", link: "https://lemonsqueezy.com/example" },
  ]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-slate-800">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 pb-6 border-b border-slate-200">
        <div>
          <span className="inline-block bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2 border border-amber-200">
            Secure Control Panel
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            NutriDupe Admin Dashboard
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Manage your published research guides, structural content, and affiliate partner links.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-3">
          <Link 
            href="/research-guides" 
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-4 py-2 rounded-xl text-sm transition-colors"
          >
            View Live Guides &rarr;
          </Link>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="flex gap-4 border-b border-slate-200 mb-8">
        <button
          onClick={() => setActiveTab('guides')}
          className={`pb-3 font-semibold text-sm transition-colors border-b-2 ${
            activeTab === 'guides' 
              ? 'border-emerald-600 text-emerald-700' 
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Research Guides Management ({guides.length})
        </button>
        <button
          onClick={() => setActiveTab('affiliates')}
          className={`pb-3 font-semibold text-sm transition-colors border-b-2 ${
            activeTab === 'affiliates' 
              ? 'border-emerald-600 text-emerald-700' 
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Affiliate Link Manager ({affiliates.length})
        </button>
      </div>

      {/* Tab 1: Research Guides */}
      {activeTab === 'guides' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Published Research Guides Index</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-700 border-b border-slate-200">
                    <th className="p-3">Guide Title</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Route Path</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {guides.map((g, idx) => (
                    <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50/50">
                      <td className="p-3 font-semibold text-slate-900">{g.title}</td>
                      <td className="p-3 text-slate-600">{g.category}</td>
                      <td className="p-3 text-emerald-700 font-mono text-xs">{g.slug}</td>
                      <td className="p-3">
                        <span className="bg-emerald-50 text-emerald-700 text-xs px-2.5 py-1 rounded-full font-medium border border-emerald-200">
                          {g.status}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <Link href={g.slug} className="text-emerald-600 hover:underline font-semibold text-xs mr-3">
                          Preview
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Affiliate Links */}
      {activeTab === 'affiliates' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Active Affiliate & Monetization Links</h2>
            <p className="text-sm text-slate-600 mb-6">
              Track and configure destination URLs for comparison recommendations across your database.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-700 border-b border-slate-200">
                    <th className="p-3">Target Supplement</th>
                    <th className="p-3">Partner Network</th>
                    <th className="p-3">Destination URL</th>
                    <th className="p-3 text-right">Quick Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {affiliates.map((a, idx) => (
                    <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50/50">
                      <td className="p-3 font-semibold text-slate-900">{a.product}</td>
                      <td className="p-3 text-slate-600">{a.partner}</td>
                      <td className="p-3 text-emerald-700 font-mono text-xs truncate max-w-xs">{a.link}</td>
                      <td className="p-3 text-right">
                        <button className="text-emerald-600 hover:underline font-semibold text-xs">
                          Edit Link
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
