"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ShieldCheck, FlaskConical, Droplet, Activity, Beaker } from 'lucide-react';
import type { Product, ProductIngredientWithIngredient } from '@/lib/types';

export function IngredientModal({
  open,
  onOpenChange,
  product,
  ingredients,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: Product;
  ingredients: ProductIngredientWithIngredient[];
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl">
            Active Ingredients — {product.name}
          </DialogTitle>
          <DialogDescription>
            Detailed breakdown of active compounds, milligram dosages, and bioavailability scores for {product.brand}.
          </DialogDescription>
        </DialogHeader>

        {/* Product badges */}
        <div className="flex flex-wrap gap-2">
          {product.cgmp_certified && (
            <Badge variant="secondary" className="gap-1">
              <ShieldCheck className="h-3 w-3 text-primary" /> cGMP Certified
            </Badge>
          )}
          {product.fda_registered && (
            <Badge variant="secondary" className="gap-1">
              <ShieldCheck className="h-3 w-3 text-primary" /> FDA-Registered
            </Badge>
          )}
          {product.third_party_tested && (
            <Badge variant="secondary" className="gap-1">
              <FlaskConical className="h-3 w-3 text-primary" /> Third-Party Tested
            </Badge>
          )}
          {product.certifications.map((c) => (
            <Badge key={c} variant="outline">{c}</Badge>
          ))}
        </div>

        <Separator />

        <ScrollArea className="max-h-[400px] pr-4">
          {ingredients.length === 0 ? (
            <div className="py-8 text-center text-sm text-muted-foreground">
              <Beaker className="mx-auto mb-3 h-10 w-10 text-muted-foreground/50" />
              No active ingredient data available for this product yet.
            </div>
          ) : (
            <div className="space-y-4">
              {ingredients.map((pi, idx) => (
                <IngredientRow key={pi.id} pi={pi} index={idx} />
              ))}
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

function IngredientRow({ pi, index }: { pi: ProductIngredientWithIngredient; index: number }) {
  const ing = pi.ingredient;

  return (
    <div
      className="rounded-lg border border-border p-4 transition-colors hover:bg-secondary/40 animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h4 className="font-semibold">{ing.name}</h4>
          <p className="mt-1 text-sm text-muted-foreground">{ing.description}</p>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-primary">
            {pi.amount_mg >= 1000
              ? `${(pi.amount_mg / 1000).toFixed(1)}g`
              : `${pi.amount_mg}mg`}
          </div>
          {pi.daily_value_percent && (
            <div className="text-xs text-muted-foreground">{pi.daily_value_percent}% DV</div>
          )}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
        {/* Bioavailability */}
        <div className="flex items-center gap-1.5">
          <span className="text-muted-foreground">Bioavailability:</span>
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Activity
                key={star}
                className={`h-3.5 w-3.5 ${
                  star <= ing.bioavailability_rating
                    ? 'fill-primary text-primary'
                    : 'fill-muted text-muted-foreground/30'
                }`}
              />
            ))}
          </div>
          <span className="font-medium">{ing.bioavailability_rating}/5</span>
        </div>

        {/* Solubility */}
        {ing.solubility && (
          <div className="flex items-center gap-1">
            <Droplet className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-muted-foreground">{ing.solubility}</span>
          </div>
        )}
      </div>

      {ing.clinical_evidence && (
        <div className="mt-3 rounded-md bg-muted/60 p-3">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
            <FlaskConical className="h-3 w-3" />
            Clinical Evidence
          </div>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            {ing.clinical_evidence}
          </p>
        </div>
      )}
    </div>
  );
}