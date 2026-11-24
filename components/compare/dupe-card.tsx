import React from 'react';

interface SubScores {
  overlap?: number | null;
  dosageVariance?: number | null;
  bioavailabilityGrade?: number | null;
}

interface ProductCardProps {
  type: 'benchmark' | 'dupe';
  data: {
    name?: string;
    brandName?: string;
    productName?: string;
    targetCostPerServing?: string;
    clinicalDoseBaseline?: string;
    activeMatchPercentage?: number | null;
    isCategoryPair?: boolean;
    subScores?: SubScores | null;
    costPerServing?: string;
    retailPrice?: string;
    servings?: number;
    savingsVsBenchmark?: string;
  };
}

const cleanPrice = (val?: string) => (val ? val.replace(/^\$/, '') : '');

export function DupeCard({ type, data }: ProductCardProps) {
  // 1. Reference Benchmark Card (Non-purchasable target specification)
  if (type === 'benchmark') {
    return (
      <div className="rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/80 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-200 text-slate-700">
            Reference Benchmark Spec
          </span>
          <span className="text-xs text-slate-500 font-medium">Non-purchasable baseline</span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2">{data.name}</h3>
        <p className="text-sm text-slate-600 mb-4">Target active formulation established from clinical literature.</p>

        <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-200 text-sm">
          <div>
            <span className="block text-xs text-slate-500">Target Cost Ceiling</span>
            <span className="font-semibold text-slate-800">{data.targetCostPerServing} / serving</span>
          </div>
          <div>
            <span className="block text-xs text-slate-500">Clinical Baseline</span>
            <span className="font-semibold text-slate-800">{data.clinicalDoseBaseline}</span>
          </div>
        </div>
      </div>
    );
  }

  const hasMatchScore =
    !data.isCategoryPair &&
    data.activeMatchPercentage !== null &&
    data.activeMatchPercentage !== undefined;

  const hasSubScores =
    hasMatchScore &&
    data.subScores &&
    data.subScores.overlap !== null &&
    data.subScores.overlap !== undefined;

  // 2. Third-Party Dupe Card
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start gap-3 mb-2">
        <div>
          <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">{data.brandName}</span>
          <h4 className="text-lg font-bold text-slate-900">{data.productName}</h4>
        </div>
        {hasMatchScore ? (
          <div className="text-right shrink-0">
            <div className="text-2xl font-extrabold text-emerald-600">{data.activeMatchPercentage}%</div>
            <div className="text-xs text-slate-500">Active Match</div>
          </div>
        ) : (
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200 shrink-0">
            Category Pair
          </span>
        )}
      </div>

      {/* Sub-Score Transparency Bar (for formula matches) or Category Pair Note */}
      {hasSubScores && data.subScores ? (
        <div className="bg-slate-50 rounded-lg p-2.5 my-3 text-xs font-medium text-slate-700 flex flex-wrap gap-x-4 gap-y-1 border border-slate-100">
          <span>
            Overlap: <strong className="text-slate-900">{data.subScores.overlap}%</strong>
          </span>
          {data.subScores.dosageVariance !== null && data.subScores.dosageVariance !== undefined && (
            <span>
              Dosage:{' '}
              <strong className="text-slate-900">
                {data.subScores.dosageVariance >= 0
                  ? `+${data.subScores.dosageVariance}%`
                  : `${data.subScores.dosageVariance}%`}
              </strong>
            </span>
          )}
          {data.subScores.bioavailabilityGrade !== null && data.subScores.bioavailabilityGrade !== undefined && (
            <span>
              Bioavailability: <strong className="text-slate-900">Grade {data.subScores.bioavailabilityGrade}</strong>
            </span>
          )}
        </div>
      ) : (
        <div className="bg-amber-50/50 rounded-lg p-2.5 my-3 text-xs text-slate-700 border border-amber-100">
          <strong className="text-slate-900">Category alternative:</strong> Different active ingredients or format than the benchmark—compare Supplement Facts labels before switching.
        </div>
      )}

      {/* Pricing & Savings */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-sm">
        <div>
          <span className="text-slate-900 font-bold">${cleanPrice(data.costPerServing)}</span>
          <span className="text-slate-500 text-xs">
            {' '}
            / serving (${cleanPrice(data.retailPrice)} / {data.servings} servings)
          </span>
        </div>
        <div className="text-emerald-700 font-semibold text-xs bg-emerald-50 px-2.5 py-1 rounded-md">
          Save {data.savingsVsBenchmark}% vs Benchmark
        </div>
      </div>
    </div>
  );
}
