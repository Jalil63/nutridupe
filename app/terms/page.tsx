import { FileText, AlertTriangle, FlaskConical, DollarSign, ShieldCheck, Mail } from 'lucide-react';

export const metadata = {
  title: 'Terms & Conditions | NutriDupe',
  description: 'Terms and conditions for the NutriDupe research and comparison platform.',
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          <FileText className="h-4 w-4" />
          Legal
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Terms &amp; Conditions</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: October 15, 2026</p>
      </div>

      <div className="space-y-8">
        {/* Section 1 */}
        <Section number="1" icon={AlertTriangle} title="Non-Medical Disclaimer">
          <p>
            NutriDupe is an independent research and comparison platform. We do not provide medical,
            pharmaceutical, or nutritional advice. The information presented on this website — including
            ingredient comparisons, bioavailability ratings, equivalence scores, and cost calculations — is
            for informational and educational purposes only.
          </p>
          <p className="mt-3">
            You should always consult a qualified physician or licensed healthcare professional before
            starting, stopping, or changing any supplement regimen. Do not disregard professional medical
            advice or delay seeking it because of something you have read on NutriDupe. If you think you may
            have a medical emergency, contact your doctor or dial emergency services immediately.
          </p>
        </Section>

        {/* Section 2 */}
        <Section number="2" icon={FlaskConical} title="FDA Compliance Notice">
          <p>
            These statements have not been evaluated by the Food and Drug Administration. The products
            referenced on NutriDupe are not intended to diagnose, treat, cure, or prevent any disease.
          </p>
          <p className="mt-3">
            NutriDupe does not manufacture, sell, or distribute any dietary supplement. We are a research and
            comparison platform that aggregates publicly available product data. All product claims,
            certifications, and ingredient information are sourced from manufacturer labels and third-party
            testing documentation, and remain the responsibility of the respective manufacturers.
          </p>
        </Section>

        {/* Section 3 */}
        <Section number="3" icon={DollarSign} title="FTC Affiliate Disclosure">
          <p>
            NutriDupe is reader-supported. When you purchase products through affiliate links on our site,
            we may earn an affiliate commission at no additional cost to you. These commissions help fund our
            independent research and platform operations.
          </p>
          <p className="mt-3">
            Our affiliate relationships do not influence our research methodology, equivalence scores,
            bioavailability ratings, or product recommendations. All products are evaluated using the same
            transparent 50/30/20 scoring formula regardless of affiliate status. Affiliate links are clearly
            marked with disclosure notices placed directly adjacent to each &ldquo;Shop Now&rdquo; button, in
            accordance with Federal Trade Commission guidelines.
          </p>
        </Section>

        {/* Section 4 */}
        <Section number="4" icon={ShieldCheck} title="Intellectual Property & Accuracy of Product Information">
          <p>
            All content on NutriDupe — including articles, comparison data, scoring formulas, graphics, and
            page layouts — is the intellectual property of NutriDupe Research Platform and is protected by
            applicable copyright and trademark laws. You may not reproduce, distribute, or republish our
            content without prior written permission.
          </p>
          <p className="mt-3">
            Product names, brand names, and logos referenced on NutriDupe are the property of their respective
            owners and are used for identification and comparison purposes only. NutriDupe is not affiliated
            with, endorsed by, or sponsored by any of the brands mentioned on this platform.
          </p>
          <p className="mt-3">
            While we make every effort to ensure product information — including ingredient lists, milligram
            dosages, certifications, and pricing — is accurate and up to date, manufacturers may reformulate
            products or change labeling without notice. We recommend verifying all product details directly
            with the manufacturer or retailer before purchasing. If you identify an inaccuracy on our platform,
            please contact us so we can correct it.
          </p>
        </Section>

        {/* Contact */}
        <div className="rounded-xl bg-secondary/50 p-6">
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <div>
              <h3 className="font-semibold">Contact Us</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Questions about these terms? Reach us at{' '}
                <a href="mailto:hello@nutridupe.com?subject=NutriDupe%20Inquiry%20%7C%20General%20Question&body=Hello%20NutriDupe%20Team%2C%0A%0AI%20have%20a%20question%20or%20product%20suggestion%20regarding..." className="font-medium text-primary hover:underline">
                  hello@nutridupe.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  number,
  icon: Icon,
  title,
  children,
}: {
  number: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-4.5 w-4.5" />
        </div>
        <h2 className="text-lg font-bold">
          <span className="text-primary">{number}.</span> {title}
        </h2>
      </div>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}
