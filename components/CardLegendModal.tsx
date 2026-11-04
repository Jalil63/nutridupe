'use client';

import React, { useState } from 'react';

interface CardLegendModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CardLegendModal({ isOpen, onClose }: CardLegendModalProps) {
  const [activePin, setActivePin] = useState<number | null>(1);

  if (!isOpen) return null;

  const pins = [
    {
      id: 1,
      title: 'Active Match Percentage',
      description:
        'Algorithmic comparison of active compound profiles and bioavailable dosages against the reference benchmark product.',
    },
    {
      id: 2,
      title: 'Savings & Price Comparison',
      description:
        'Calculates the direct cost savings percentage compared to purchasing the premium name-brand reference product.',
    },
    {
      id: 3,
      title: 'Quality Certifications (cGMP, FDA-Reg, 3rd-Party)',
      description:
        'Verifies manufacturing standards. cGMP ensures strict quality control, FDA-Reg indicates registered facility status, and 3rd-Party testing confirms purity and potency.',
    },
    {
      id: 4,
      title: 'Price per Serving',
      description:
        'Breaks down the exact daily cost per serving based on standard recommended usage sizing to give you true value comparison.',
    },
    {
      id: 5,
      title: 'Cost Difference vs. Benchmark',
      description:
        'Shows the absolute dollar amount saved per serving when choosing this alternative over the benchmark brand.',
    },
    {
      id: 6,
      title: 'View Active Ingredients Breakdown',
      description:
        'Expands the full ingredient matrix to inspect individual active compounds, milligram dosages, and potencies side-by-side.',
    },
    {
      id: 7,
      title: 'Verified Retailer Link (Shop Now)',
      description:
        'Directs you securely to the verified manufacturer or trusted retail partner to purchase with affiliate tracking assurance.',
    },
  ];

  const activeContent = pins.find((p) => p.id === activePin);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-gray-100 pb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">How to Read a NutriDupe Card</h2>
            <p className="mt-1 text-sm text-gray-500">
              Click any numbered badge to explore how we benchmark, calculate savings, and verify ingredients.
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition"
          >
            ✕
          </button>
        </div>

        {/* Mock Card UI with Uniform Circular Badges */}
        <div className="my-6 rounded-xl border border-emerald-100 bg-emerald-50/30 p-5 shadow-sm space-y-4">
          {/* Badges 1 & 2 */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => setActivePin(1)}
              className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white transition shadow-sm ${
                activePin === 1
                  ? 'bg-emerald-700 ring-2 ring-emerald-400 ring-offset-1'
                  : 'bg-emerald-600 hover:bg-emerald-700'
              }`}
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-emerald-700 text-[11px] font-bold">
                1
              </span>
              94% Active Match
            </button>

            <button
              onClick={() => setActivePin(2)}
              className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white transition shadow-sm ${
                activePin === 2
                  ? 'bg-emerald-700 ring-2 ring-emerald-400 ring-offset-1'
                  : 'bg-emerald-600 hover:bg-emerald-700'
              }`}
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-emerald-700 text-[11px] font-bold">
                2
              </span>
              50% cheaper
            </button>
          </div>

          {/* Product Title */}
          <div>
            <h3 className="text-base font-bold text-gray-900">NutriDupe Ashwagandha & L-Theanine</h3>
            <p className="text-xs text-gray-500">by NutriDupe Labs</p>
          </div>

          {/* Badge 3 inside a solid green circle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActivePin(3)}
              className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium transition border ${
                activePin === 3
                  ? 'bg-emerald-100 border-emerald-500 text-emerald-900 ring-2 ring-emerald-200'
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-[11px] font-bold">
                3
              </span>
              <span>cGMP · FDA-Reg · 3rd-Party</span>
            </button>
          </div>

          {/* Badges 4 & 5 inside solid green circles */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              onClick={() => setActivePin(4)}
              className={`text-left rounded-lg p-3 bg-white border transition shadow-xs ${
                activePin === 4 ? 'border-emerald-600 ring-2 ring-emerald-100' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2 text-[11px] font-medium text-gray-500">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-[11px] font-bold">
                  4
                </span>
                Price / serving
              </div>
              <div className="mt-1 text-base font-bold text-gray-900">$0.63</div>
            </button>

            <button
              onClick={() => setActivePin(5)}
              className={`text-left rounded-lg p-3 bg-white border transition shadow-xs ${
                activePin === 5 ? 'border-emerald-600 ring-2 ring-emerald-100' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2 text-[11px] font-medium text-gray-500">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-[11px] font-bold">
                  5
                </span>
                vs. benchmark
              </div>
              <div className="mt-1 text-base font-bold text-emerald-600">-$0.64</div>
            </button>
          </div>

          {/* Badge 6 */}
          <button
            onClick={() => setActivePin(6)}
            className={`w-full flex items-center justify-center gap-2 rounded-lg py-2.5 px-4 bg-white border text-xs font-semibold transition shadow-xs ${
              activePin === 6 ? 'border-emerald-600 text-emerald-800 ring-2 ring-emerald-100' : 'border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-[11px] font-bold">
              6
            </span>
            <span>ⓘ View Active Ingredients</span>
          </button>

          {/* Badge 7 */}
          <button
            onClick={() => setActivePin(7)}
            className={`w-full flex items-center justify-center gap-2 rounded-lg py-3 px-4 text-white font-medium text-xs transition shadow-sm ${
              activePin === 7 ? 'bg-emerald-800 ring-2 ring-emerald-300' : 'bg-emerald-600 hover:bg-emerald-700'
            }`}
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-emerald-700 text-[11px] font-bold">
              7
            </span>
            <span>Shop Now</span>
          </button>
        </div>

        {/* Active Description Box */}
        {activeContent && (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4">
            <div className="flex items-center gap-2 text-sm font-bold text-emerald-900">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-xs font-bold">
                {activeContent.id}
              </span>
              {activeContent.title}
            </div>
            <p className="mt-1.5 text-xs text-gray-600 leading-relaxed">
              {activeContent.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
