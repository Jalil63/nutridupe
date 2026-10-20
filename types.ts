export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon: string;
  display_order: number;
  created_at: string;
}

export interface Ingredient {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  bioavailability_rating: number;
  solubility: string | null;
  clinical_evidence: string | null;
  created_at: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category_id: string | null;
  type: 'benchmark' | 'dupe';
  price: number;
  servings_per_container: number;
  price_per_serving: number;
  cgmp_certified: boolean;
  fda_registered: boolean;
  third_party_tested: boolean;
  certifications: string[];
  description: string | null;
  affiliate_url: string | null;
  affiliate_active: boolean;
  match_percentage: number | null;
  benchmark_id: string | null;
  image_url: string | null;
  rating: number;
  created_at: string;
  category?: Category | null;
  ingredients?: ProductIngredientWithIngredient[];
}

export interface ProductIngredient {
  id: string;
  product_id: string;
  ingredient_id: string;
  amount_mg: number;
  daily_value_percent: number | null;
  created_at: string;
}

export interface ProductIngredientWithIngredient extends ProductIngredient {
  ingredient: Ingredient;
}

export interface BenchmarkWithDupes extends Product {
  dupes: Product[];
}
