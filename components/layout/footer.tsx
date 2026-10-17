import { Leaf, ShieldCheck, FlaskConical, AlertCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      {/* FTC Disclosure Banner */}
      <div className="border-b border-amber-200 bg-amber-50">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
            <div>
              <p className="text-sm font-semibold text-amber-900">FTC Affiliate Disclosure</p>
              <p className="mt-1 text-sm text-amber-800">
                NutriDupe is reader-supported. When you purchase through links on our site, we may earn an affiliate commission at no additional cost to you. This does not influence our independent research or product recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-5">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Leaf className="h-4 w-4" />
              </div>
              <span className="text-lg font-bold">NutriDupe</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Independent research and comparison platform for cGMP-certified supplement alternatives.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Platform</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-foreground">Home</a></li>
              <li><a href="/compare" className="hover:text-foreground">Compare Products</a></li>
              <li><a href="/categories" className="hover:text-foreground">Categories</a></li>
              <li><a href="/admin" className="hover:text-foreground">Admin</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Our Standards</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-primary" /> cGMP Certified Facilities</li>
              <li className="flex items-center gap-1.5"><FlaskConical className="h-3.5 w-3.5 text-primary" /> Third-Party Tested (NSF/USP)</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-primary" /> FDA-Registered Manufacturers</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="/about" className="hover:text-foreground">About NutriDupe</a></li>
              <li><a href="/blog" className="hover:text-foreground">Research Guides</a></li>
              <li><a href="/research-methodology" className="hover:text-foreground">Research Methodology</a></li>
              <li><a href="mailto:hello@nutridupe.com?subject=NutriDupe%20Inquiry%20%7C%20General%20Question&body=Hello%20NutriDupe%20Team%2C%0A%0AI%20have%20a%20question%20or%20product%20suggestion%20regarding..." className="hover:text-foreground">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="/terms" className="hover:text-foreground">Terms &amp; Conditions</a></li>
              <li><a href="/privacy" className="hover:text-foreground">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* FDA Disclaimer */}
        <div className="mt-10 border-t border-border pt-6">
          <div className="rounded-lg bg-muted p-4">
            <p className="text-xs leading-relaxed text-muted-foreground">
              <strong className="font-semibold text-foreground">FDA Disclaimer:</strong>{' '}
              These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease. NutriDupe is an independent research and comparison platform and does not provide medical advice. Always consult a qualified healthcare professional before starting any supplement regimen.
            </p>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} NutriDupe Research Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
