'use client';

import { useState } from 'react';
import CardLegendModal from '@/components/CardLegendModal';

export function HowItWorksSection() {
  const [isLegendOpen, setIsLegendOpen] = useState(false);

  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            How NutriDupe Works
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Understand how we benchmark, score match percentages, and calculate savings.
          </p>
          
          {/* Interactive Modal Trigger Link */}
          <button
            onClick={() => setIsLegendOpen(true)}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 hover:text-emerald-800 underline transition"
          >
            <span>📖 How to Read a NutriDupe Card</span>
          </button>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <HowItWorksStep
            number="01"
            title="Search a Product or Ingredient"
            description="Type in a premium supplement name or an active ingredient like 'Creatine Monohydrate' to begin."
          />
          <HowItWorksStep
            number="02"
            title="Compare cGMP-Certified Dupes"
            description="View side-by-side comparisons with exact active-ingredient match percentages, bioavailability ratings, and savings."
          />
          <HowItWorksStep
            number="03"
            title="Shop with Confidence"
            description="Every dupe is cGMP-certified, FDA-registered, and third-party tested. Click through to verified retailers."
          />
        </div>
      </div>

      {/* The Interactive Card Legend Modal */}
      <CardLegendModal
        isOpen={isLegendOpen}
        onClose={() => setIsLegendOpen(false)}
      />
    </section>
  );
}

function HowItWorksStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
        {number}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
