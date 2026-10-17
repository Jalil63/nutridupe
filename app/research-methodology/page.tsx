import { ShieldCheck, Building2, FlaskConical, Scale, Beaker, Microscope, DollarSign, Percent, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Research & Scoring Methodology | NutriDupe',
  description: 'How NutriDupe calculates active-ingredient equivalence, bioavailability ratings, and price-per-serving transparency.',
};

export default function ResearchMethodologyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="mb-10 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          <Microscope className="h-4 w-4" />
          Methodology
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Our Research &amp; Scoring Methodology
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          How NutriDupe calculates active-ingredient equivalence, bioavailability ratings, and price-per-serving transparency.
        </p>
      </div>

      {/* Quality Baseline Callout */}
      <div className="mb-12 rounded-xl border-2 border-primary/20 bg-gradient-sage p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-bold">What Defines a NutriDupe?</h2>
        </div>
        <p className="mt-4 text-muted-foreground">
          A NutriDupe is <strong className="text-foreground">NOT</strong> a cheap knock-off or unverified counterfeit. Every alternative listed must meet three non-negotiable standards:
        </p>
        <div className="mt-5 space-y-3">
          <BaselineItem
            icon={ShieldCheck}
            title="cGMP-Certified Facility"
            description="Manufactured under current Good Manufacturing Practice regulations enforced by the FDA."
          />
          <BaselineItem
            icon={Building2}
            title="FDA-Registered Facility"
            description="Produced in a facility registered with the U.S. Food and Drug Administration."
          />
          <BaselineItem
            icon={FlaskConical}
            title="Third-Party Purity Verification"
            description="Verified by NSF, USP, Informed-Sport, or accompanied by a verifiable Certificate of Analysis (CoA)."
          />
        </div>
      </div>

      {/* 50/30/20 Formula Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight">The 50/30/20 Equivalence Formula</h2>
        <p className="mt-2 text-muted-foreground">
          Every NutriDupe comparison score is calculated using a transparent, weighted formula that prioritizes what matters most for clinical equivalence.
        </p>

        {/* Formula Card */}
        <div className="mt-6 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <Scale className="h-4 w-4 text-primary" />
            Equivalence Score Formula
          </div>
          <div className="mt-4 rounded-lg bg-secondary/60 p-5 text-center">
            <p className="text-lg font-bold tracking-tight sm:text-xl">
              Equivalence Score ={' '}
              <span className="text-primary">(50% &times; Active Overlap)</span>
              {' + '}
              <span className="text-primary">(30% &times; Dosage Precision)</span>
              {' + '}
              <span className="text-primary">(20% &times; Bioavailability Quality)</span>
            </p>
          </div>
        </div>

        {/* Breakdown Cards */}
        <div className="mt-6 space-y-5">
          <FormulaBreakdown
            weight="50%"
            icon={Beaker}
            title="Active Ingredient Overlap"
            description="Evaluates raw active compound presence while excluding fillers, synthetic binders, and inactive excipients. We compare the complete list of active ingredients in the benchmark product against the dupe, calculating the percentage of shared actives by both count and clinical relevance."
          />
          <FormulaBreakdown
            weight="30%"
            icon={Scale}
            title="Dosage Precision"
            description="Compares active milligrams per serving against the benchmark's label claims or established clinical study thresholds. A dupe with dosages within 10% of the benchmark receives full credit; wider deviations are penalized proportionally to ensure therapeutic equivalence."
          />
          <FormulaBreakdown
            weight="20%"
            icon={FlaskConical}
            title="Bioavailability & Chemical Quality"
            description="Grades compound absorption based on chemical form. Grade 5 is awarded for chelated or methylated forms (e.g., Magnesium Glycinate, Methylcobalamin). Grades descend to Grade 1 for low-absorption forms like oxides (e.g., Magnesium Oxide), which have documented bioavailability as low as 4%."
          />
        </div>

        {/* Bioavailability Grading Table */}
        <div className="mt-8 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-secondary/50">
              <tr className="text-left">
                <th className="px-4 py-3 font-semibold">Grade</th>
                <th className="px-4 py-3 font-semibold">Form Quality</th>
                <th className="px-4 py-3 font-semibold">Examples</th>
                <th className="px-4 py-3 font-semibold">Absorption</th>
              </tr>
            </thead>
            <tbody>
              <GradeRow grade="5" form="Chelated / Methylated" examples="Magnesium Glycinate, Methylcobalamin, P5P" absorption="Excellent" />
              <GradeRow grade="4" form="Coenzymated / Active" examples="5-MTHF Folate, CoQ10 Ubiquinol" absorption="Very Good" />
              <GradeRow grade="3" form="Standard / Citrate" examples="Creatine Monohydrate, Calcium Citrate" absorption="Good" />
              <GradeRow grade="2" form="Bound / Complex" examples="Zinc Gluconate, Magnesium Citrate" absorption="Moderate" />
              <GradeRow grade="1" form="Oxide / Low-grade" examples="Magnesium Oxide, Zinc Oxide" absorption="Poor (as low as 4%)" />
            </tbody>
          </table>
        </div>
      </section>

      {/* Cost Calculation Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight">Cost Calculation Transparency</h2>
        <p className="mt-2 text-muted-foreground">
          Price-per-serving is the single most important metric for true cost comparison. We calculate it using a straightforward, auditable formula.
        </p>

        {/* Cost Formula Card */}
        <div className="mt-6 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <DollarSign className="h-4 w-4 text-primary" />
            Cost Per Serving Formula
          </div>
          <div className="mt-4 rounded-lg bg-secondary/60 p-5 text-center">
            <p className="text-lg font-bold tracking-tight sm:text-xl">
              Cost Per Serving ={' '}
              <span className="text-primary">Retail Package Price</span>
              {' / '}
              <span className="text-primary">Servings Per Container</span>
            </p>
          </div>
        </div>

        {/* Example Calculation */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <CostExample
            label="Benchmark: AG1"
            price="$79.00"
            servings="30"
            perServing="$2.63"
          />
          <CostExample
            label="Dupe: NutriDupe Greens"
            price="$39.99"
            servings="30"
            perServing="$1.33"
            highlight
          />
          <CostExample
            label="Your Savings"
            price="—"
            servings="—"
            perServing="$1.30/serving"
            savings
          />
        </div>
      </section>

      {/* Compliance Note */}
      <section className="rounded-xl bg-secondary/50 p-6">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
          <div>
            <h3 className="font-semibold">Editorial Independence</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Our scoring formula is applied identically to every product, regardless of affiliate status. Affiliate partnerships do not influence equivalence scores, bioavailability grades, or cost calculations. All scores are derived from publicly available label data and peer-reviewed clinical literature.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function BaselineItem({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-lg bg-background/60 p-4">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-4.5 w-4.5" />
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-0.5 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function FormulaBreakdown({
  weight,
  icon: Icon,
  title,
  description,
}: {
  weight: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold">{title}</h3>
            <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold text-primary-foreground">
              <Percent className="h-3 w-3" />
              {weight} Weight
            </span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}

function GradeRow({
  grade,
  form,
  examples,
  absorption,
}: {
  grade: string;
  form: string;
  examples: string;
  absorption: string;
}) {
  return (
    <tr className="border-t border-border hover:bg-secondary/30">
      <td className="px-4 py-3">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
          {grade}
        </span>
      </td>
      <td className="px-4 py-3 font-medium">{form}</td>
      <td className="px-4 py-3 text-muted-foreground">{examples}</td>
      <td className="px-4 py-3 text-muted-foreground">{absorption}</td>
    </tr>
  );
}

function CostExample({
  label,
  price,
  servings,
  perServing,
  highlight,
  savings,
}: {
  label: string;
  price: string;
  servings: string;
  perServing: string;
  highlight?: boolean;
  savings?: boolean;
}) {
  return (
    <div className={`rounded-lg border p-4 ${highlight ? 'border-primary/40 bg-primary/5' : savings ? 'border-primary bg-primary/10' : 'border-border bg-card'}`}>
      <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-2 space-y-1 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Retail Price</span>
          <span className="font-medium">{price}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Servings</span>
          <span className="font-medium">{servings}</span>
        </div>
        <div className="mt-2 border-t border-border pt-2">
          <div className="flex justify-between">
            <span className="font-semibold">Per Serving</span>
            <span className={`text-lg font-bold ${savings ? 'text-primary' : ''}`}>{perServing}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
