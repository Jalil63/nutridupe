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
      desc: 'Algorithmically compares active compound profiles and bioavailable dosages against the reference benchmark product.',
    },
    {
      id: 2,
      title: 'Savings Metric',
      desc: 'Shows net percentage savings calculated by comparing baseline price per serving against the benchmark MSRP.',
    },
    {
      id: 3,
      title: 'Verification Badges',
      desc: 'Independent 3rd-party manufacturing certifications including cGMP, NSF Certified for Sport, and FDA-Registered facilities.',
    },
    {
      id: 4,
      title: 'Unit Cost per Serving',
      desc: 'Breakdown of cost per individual serving based on container size and retail MSRP.',
    },
    {
      id: 5,
      title: 'Cost Difference',
      desc: 'Direct dollar savings per serving compared to the brand-name benchmark product.',
    },
    {
      id: 6,
      title: 'Active Ingredients Drawer',
      desc: 'Click to open full clinical profile, milligram dosages, bioavailability scores, and research study references.',
    },
    {
      id: 7,
      title: 'Retail Gateway',
      desc: 'Direct trackable link to purchase the verified alternative directly from Amazon or official brand storefronts.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative border border-gray-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100"
        >
          ✕
        </button>

        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">How to Read a NutriDupe Card</h2>
          <p className="text-sm text-gray-500 mt-1">
            Click any numbered badge to explore how we benchmark, calculate savings, and verify ingredients.
          </p>
        </div>

        {/* Mock Annotated Product Card */}
        <div className="bg-emerald-50/40 border border-emerald-100 rounded-xl p-5 relative mb-6">
          <div className="flex justify-between items-center mb-3">
            <span
              onClick={() => setActivePin(1)}
              className={`cursor-pointer inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition ${
                activePin === 1 ? 'ring-2 ring-emerald-600 bg-emerald-700 text-white' : 'bg-emerald-600 text-white'
              }`}
            >
              <span className="w-4 h-4 bg-white text-emerald-700 rounded-full text-center text-[10px] font-bold leading-4">1</span>
              94% Active Match
            </span>
            <span
              onClick={() => setActivePin(2)}
              className={`cursor-pointer text-xs font-bold px-2 py-1 rounded transition ${
                activePin === 2 ? 'ring-2 ring-emerald-600 bg-emerald-100 text-emerald-800' : 'text-emerald-700'
              }`}
            >
              <span className="mr-1 inline-block w-4 h-4 bg-emerald-600 text-white rounded-full text-center text-[10px] leading-4">2</span>
              50% cheaper
            </span>
          </div>

          <h3 className="font-bold text-gray-900 text-base mb-1">NutriDupe Ashwagandha & L-Theanine</h3>
          <p className="text-xs text-gray-500 mb-3">by NutriDupe Labs</p>

          <div className="flex flex-wrap gap-1.5 mb-4" onClick={() => setActivePin(3)}>
            <span className={`text-[11px] px-2 py-0.5 rounded font-medium border cursor-pointer ${
              activePin === 3 ? 'bg-emerald-100 border-emerald-500 text-emerald-900' : 'bg-gray-100 border-gray-200 text-gray-700'
            }`}>
              <span className="mr-1 text-emerald-600 font-bold">3</span> cGMP
            </span>
            <span className="text-[11px] px-2 py-0.5 rounded font-medium border bg-gray-100 border-gray-200 text-gray-700">FDA-Reg</span>
            <span className="text-[11px] px-2 py-0.5 rounded font-medium border bg-gray-100 border-gray-200 text-gray-700">3rd-Party</span>
          </div>

          <div className="bg-white rounded-lg p-3 border border-gray-100 grid grid-cols-2 gap-4 mb-4">
            <div onClick={() => setActivePin(4)} className="cursor-pointer">
              <span className="text-[11px] text-gray-400 block font-medium">
                <span className="mr-1 text-emerald-600 font-bold">4</span> Price / serving
              </span>
              <span className="text-lg font-bold text-gray-900">$0.63</span>
            </div>
            <div onClick={() => setActivePin(5)} className="cursor-pointer">
              <span className="text-[11px] text-gray-400 block font-medium">
                <span className="mr-1 text-emerald-600 font-bold">5</span> vs. benchmark
              </span>
              <span className="text-lg font-bold text-emerald-600">-$0.64</span>
            </div>
          </div>

          <div
            onClick={() => setActivePin(6)}
            className={`cursor-pointer border rounded-lg p-2.5 text-xs text-center font-medium mb-3 transition ${
              activePin === 6 ? 'border-emerald-600 bg-emerald-50 text-emerald-900' : 'border-gray-200 bg-white text-gray-700'
            }`}
          >
            <span className="mr-1 inline-block w-4 h-4 bg-emerald-600 text-white rounded-full text-center text-[10px] leading-4">6</span>
            ⓘ View Active Ingredients
          </div>

          <div
            onClick={() => setActivePin(7)}
            className={`cursor-pointer rounded-lg p-2.5 text-xs text-center font-bold text-white transition ${
              activePin === 7 ? 'bg-emerald-800 ring-2 ring-emerald-500' : 'bg-emerald-700'
            }`}
          >
            <span className="mr-1 inline-block w-4 h-4 bg-white text-emerald-800 rounded-full text-center text-[10px] leading-4">7</span>
            Shop Now
          </div>
          <p className="text-[10px] text-gray-400 text-center mt-1.5">*Earns commission.</p>
        </div>

        {/* Selected Explanation Box */}
        {activePin && (
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-5 h-5 bg-emerald-700 text-white rounded-full text-center text-xs font-bold leading-5">
                {activePin}
              </span>
              <h4 className="font-semibold text-gray-900 text-sm">{pins.find((p) => p.id === activePin)?.title}</h4>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed pl-7">
              {pins.find((p) => p.id === activePin)?.desc}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
