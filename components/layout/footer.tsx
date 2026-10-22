'use client';

import React, { useState } from 'react';
import CardLegendModal from '@/components/CardLegendModal';

export function Footer() {
  const [isLegendOpen, setIsLegendOpen] = useState(false);

  return (
    <footer className="border-t border-border bg-secondary/50">
      {/* Interactive Legend Trigger Banner */}
      <div className="border-b border-emerald-200/60 bg-emerald-50/50 py-3 text-center">
        <button
          onClick={() => setIsLegendOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-emerald-800 text-xs font-semibold rounded-full border border-emerald-300 shadow-sm hover:bg-emerald-100/50 transition"
        >
          <span>💡</span> How to Read Comparisons & Metrics
        </button>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-6">
        {/* Disclaimers Section */}
        <div className="rounded-lg bg-muted p-4 space-y-3">
          <p className="text-xs leading-relaxed text-muted-foreground">
            <strong className="font-semibold text-foreground">FDA Disclaimer:</strong>{' '}
            These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease. NutriDupe is an independent research and comparison platform and does not provide medical advice. Always consult a qualified healthcare professional before starting any supplement regimen.
          </p>
          <p className="text-xs leading-relaxed text-muted-foreground pt-3 border-t border-border/50">
            <strong className="font-semibold text-foreground">Price & Savings Disclaimer:</strong>{' '}
            Benchmark comparison prices and cost-per-serving metrics are calculated using baseline MSRP. Live prices on third-party retailers (such as Amazon or official brand storefronts) may vary based on active Subscribe & Save discounts, seller promotions, or local taxes.
          </p>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} NutriDupe. All rights reserved.
        </p>
      </div>

      {/* Render Interactive Demo Modal */}
      <CardLegendModal isOpen={isLegendOpen} onClose={() => setIsLegendOpen(false)} />
    </footer>
  );
}

export default Footer;
