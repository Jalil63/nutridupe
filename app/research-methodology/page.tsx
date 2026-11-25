import { ShieldCheck, Building2, FlaskConical, Scale, Beaker, Microscope, DollarSign, Percent, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Research & Scoring Methodology | NutriDupe',
  description: 'How NutriDupe evaluates label-based formula match, bioavailability forms, brand quality claims, and price per serving.',
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
          How NutriDupe compares Supplement Facts labels, reviews brand quality and testing claims, and calculates cost per serving.
        </p>
      </div>

      {/* Quality Baseline & Testing Claims Review Callout */}
      <div className="mb-12 rounded-xl border-2 border-primary/20 bg-gradient-sage p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-bold">Benchmark Role &amp; Testing Claims Review</h2>
        </div>
        <p className="mt-4 text-muted-foreground">
          A Reference Benchmark is <strong className="text-foreground">NOT</strong> a product sold by NutriDupe. It is a non-purchasable reference point established from clinical literature or product specifications. NutriDupe does not buy or independently lab-test every supplement; instead, we review labels, listed prices, and brand manufacturing and testing claims:
        </p>
        <div className="mt-5 space-y-3">
          <BaselineItem
            icon={ShieldCheck}
            title="cGMP Claims Review"
            description="We check whether brands state manufacturing under current Good Manufacturing Practice (cGMP) standards."
          />
          <BaselineItem
            icon={Building2}
            title="Facility & Label Disclosures"
            description="We review publicly available facility registration statements, ingredient forms, and Supplement Facts labels."
          />
          <BaselineItem
            icon={FlaskConical}
            title="Third-Party Testing Claims Review"
            description="We note brand references to third-party programs (such as NSF, USP, Informed-Sport, or Certificates of Analysis) without claiming independent lab verification by NutriDupe."
          />
        </div>
      </div>

      {/* How We Set Benchmark Target Values */}
      <section className="mb-12 rounded-xl border border-border bg-card p-6 sm:p-8">
        <h2 className="text-xl font-bold tracking-tight mb-3">How We Set Benchmark Reference Values</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Reference values are not arbitrary. For each active ingredient, we look to one of three sources in order of preference:
        </p>
        <ol className="mt-3 list-decimal list-inside space-y-2 text-sm text-muted-foreground">
          <li><strong>Published clinical dosing</strong> from human trials of the ingredient (for example, 5 g/day creatine monohydrate; 300 to 600 mg/day ashwagandha).</li>
          <li><strong>Established reference intake</strong> or upper-limit guidance from the NIH Office of Dietary Supplements or equivalent bodies.</li>
          <li><strong>The benchmark product&apos;s own label claim</strong>, where no independent clinical threshold applies.</li>
        </ol>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          Where a benchmark product doses below a clinical reference level, our comparison still notes the clinical threshold. Benchmark criteria are set in advance and do not change based on affiliate commission rates.
        </p>
      </section>

      {/* 50/30/20 Formula Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight">The 50/30/20 Formula Match Score</h2>
        <p className="mt-2 text-muted-foreground">
          Formula-matched alternatives show an &quot;Active Match %&quot; based on label comparison. Where a product is paired as a functional category alternative rather than a formula match, we label it as a <strong>Category Pair</strong> instead of displaying a match score.
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
            description="Compares active ingredients listed on the Supplement Facts label against the benchmark formula, focusing on shared active compounds rather than inactive fillers or binders."
          />
          <FormulaBreakdown
            weight="30%"
            icon={Scale}
            title="Dosage Precision"
            description="Compares active amounts per serving on the label against reference targets. Formulations within 10% of the target receive full credit; larger gaps are scored lower."
          />
          <FormulaBreakdown
            weight="20%"
            icon={FlaskConical}
            title="Bioavailability & Chemical Form"
            description="Scores chemical forms listed on the label (such as chelated or methylated forms versus lower-absorption oxides). Match scores reflect label data, not physical lab testing."
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
                <th className="px-4 py-3 font-semibold">Typical Profile</th>
              </tr>
            </thead>
            <tbody>
              <GradeRow grade="5" form="Chelated / Methylated" examples="Magnesium Glycinate, Methylcobalamin, P5P" absorption="High" />
              <GradeRow grade="4" form="Coenzymated / Active" examples="5-MTHF Folate, CoQ10 Ubiquinol" absorption="Very Good" />
              <GradeRow grade="3" form="Standard / Citrate" examples="Creatine Monohydrate, Calcium Citrate" absorption="Good" />
              <GradeRow grade="2" form="Bound / Complex" examples="Zinc Gluconate, Magnesium Citrate" absorption="Moderate" />
              <GradeRow grade="1" form="Oxide / Low-grade" examples="Magnesium Oxide, Zinc Oxide" absorption="Lower" />
            </tbody>
          </table>
        </div>
      </section>

      {/* Cost Calculation Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight">Cost Calculation Transparency</h2>
        <p className="mt-2 text-muted-foreground">
          Price per serving is calculated from listed retail prices and serving counts on the label. Prices are point-in-time snapshots and can change on Amazon.
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
              <span className="text-primary">Listed Package Price</span>
              {' / '}
              <span className="text-primary">Servings Per Container</span>
            </p>
          </div>
        </div>

        {/* Example Calculation aligned with current catalog */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <CostExample
            label="Benchmark: Thorne Creatine"
            price="Reference"
            servings="Per label"
            perServing="$0.49/serv"
          />
          <CostExample
            label="Alternative: BulkSupplements"
            price="Listed price"
            servings="Per label"
            perServing="$0.17/serv"
            highlight
          />
          <CostExample
            label="Savings vs. Benchmark"
            price="65% lower"
            servings="100% match"
            perServing="$0.32/serv"
            savings
          />
        </div>
      </section>

      {/* References Block */}
      <section className="mb-12 rounded-xl border border-border bg-card p-6 sm:p-8">
        <h3 className="text-lg font-bold tracking-tight mb-3">References &amp; Standards</h3>
        <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground">
          <li>NIH Office of Dietary Supplements: Dietary Supplement Fact Sheets.</li>
          <li>NSF Certified for Sport and USP Verified program criteria.</li>
          <li>Peer-reviewed literature on ingredient forms and bioavailability.</li>
          <li>FDA cGMP regulations (21 CFR Part 111).</li>
        </ul>
      </section>

      {/* Compliance Note */}
      <section className="rounded-xl bg-secondary/50 p-6">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
          <div>
            <h3 className="font-semibold">Editorial Independence &amp; Affiliate Disclosure</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              As an Amazon Associate I earn from qualifying purchases. Our comparison criteria are applied consistently regardless of affiliate status. Scores and comparisons are based on publicly available label data, listed prices, and brand quality and testing claims rather than independent lab testing by NutriDupe.
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
          <span className="text-muted-foreground">Detail</span>
          <span className="font-medium">{price}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Basis</span>
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
