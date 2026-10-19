"use client";

import { useState } from 'react';
import { Star, ShieldCheck, FlaskConical, Building2, ShoppingBag, TrendingDown, ChevronRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { IngredientModal } from '@/components/compare/ingredient-modal';
import { formatCurrency, calculateSavings, getProductIngredients } from '@/lib/data';
import type { Product, ProductIngredientWithIngredient } from '@/lib/types';

export function DupeCard({
  dupe,
  benchmark,
  index,
}: {
  dupe: Product;
  benchmark: Product;
  index: number;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [ingredients, setIngredients] = useState<ProductIngredientWithIngredient[]>([]);
  const [loadingIngs, setLoadingIngs] = useState(false);

  const savings = calculateSavings(benchmark.price_per_serving, dupe.price_per_serving);

  const handleViewIngredients = async () => {
    if (ingredients.length > 0) {
      setModalOpen(true);
      return;
    }
    setLoadingIngs(true);
    try {
      const data = await getProductIngredients(dupe.id);
      setIngredients(data);
    } catch (e) {
      console.error('Failed to load ingredients', e);
    } finally {
      setLoadingIngs(false);
    }
    setModalOpen(true);
  };

  return (
    <>
      <div
        className="flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-lg animate-slide-up"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Match badge */}
        {dupe.match_percentage !== null && (
          <div className="mb-3 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
              <ShieldCheck className="h-3.5 w-3.5" />
              {dupe.match_percentage.toFixed(0)}% Active Match
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              {savings.percentage > 0 ? `${savings.percentage}% cheaper` : 'Same price'}
            </span>
          </div>
        )}

        {/* Product info */}
        <div className="mb-3">
          <h3 className="text-lg font-bold leading-tight">{dupe.name}</h3>
          <p className="text-sm text-muted-foreground">by {dupe.brand}</p>
        </div>

        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{dupe.description}</p>

        {/* Certifications */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {dupe.cgmp_certified && (
            <span className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
              <ShieldCheck className="h-3 w-3" /> cGMP
            </span>
          )}
          {dupe.fda_registered && (
            <span className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
              <Building2 className="h-3 w-3" /> FDA-Reg
            </span>
          )}
          {dupe.third_party_tested && (
            <span className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
              <FlaskConical className="h-3 w-3" /> 3rd-Party
            </span>
          )}
          {dupe.certifications.slice(0, 2).map((cert) => (
            <span key={cert} className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-muted-foreground">
              {cert}
            </span>
          ))}
        </div>

        {/* Price comparison */}
        <div className="mb-4 grid grid-cols-2 gap-3 rounded-lg bg-secondary/60 p-3">
          <div>
            <div className="text-xs text-muted-foreground">Price / serving</div>
            <div className="text-xl font-bold">{formatCurrency(dupe.price_per_serving)}</div>
            <div className="text-xs text-muted-foreground">
              {formatCurrency(dupe.price)} / {dupe.servings_per_container} servings
            </div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">vs. benchmark</div>
            <div className="flex items-center gap-1 text-xl font-bold text-primary">
              <TrendingDown className="h-4 w-4" />
              {formatCurrency(savings.amount)}
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              {dupe.rating.toFixed(1)} rating
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-auto space-y-2">
          <Button
            variant="outline"
            className="w-full justify-between"
            onClick={handleViewIngredients}
            disabled={loadingIngs}
          >
            <span className="flex items-center gap-1.5">
              <Info className="h-4 w-4" />
              {loadingIngs ? 'Loading...' : 'View Active Ingredients'}
            </span>
            <ChevronRight className="h-4 w-4" />
          </Button>

          {dupe.affiliate_url && dupe.affiliate_active && (
            <div>
              <Button asChild className="w-full gap-2">
                <a href={dupe.affiliate_url} target="_blank" rel="noopener noreferrer sponsored">
                  <ShoppingBag className="h-4 w-4" />
                  Shop Now
                </a>
              </Button>
              <p className="mt-1.5 text-center text-[11px] leading-tight text-muted-foreground">
                *Earns commission.
              </p>
            </div>
          )}
        </div>
      </div>

      <IngredientModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        product={dupe}
        ingredients={ingredients}
      />
    </>
  );
}
