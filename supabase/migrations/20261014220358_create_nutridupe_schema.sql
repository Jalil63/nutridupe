/*
# NutriDupe Research Platform - Database Schema

## Overview
Creates the complete database schema for NutriDupe, a supplement comparison platform
that helps users find cGMP-certified, clinically equivalent alternatives to expensive
brand-name supplements.

## New Tables

### 1. categories
Health supplement categories for browsing.
- `id` (uuid, primary key)
- `name` (text, not null) - e.g., "Sports Nutrition"
- `slug` (text, unique, not null) - URL-friendly identifier
- `description` (text) - category description
- `icon` (text) - lucide-react icon name
- `display_order` (int) - sort order
- `created_at` (timestamp)

### 2. ingredients
Master active ingredients with bioavailability ratings.
- `id` (uuid, primary key)
- `name` (text, not null) - e.g., "Creatine Monohydrate"
- `slug` (text, unique, not null)
- `description` (text) - detailed description
- `bioavailability_rating` (int, 1-5) - how well the body absorbs it
- `solubility` (text) - water/fat soluble
- `clinical_evidence` (text) - summary of clinical backing
- `created_at` (timestamp)

### 3. products
Product catalog for both benchmark (premium) and dupe (alternative) products.
- `id` (uuid, primary key)
- `name` (text, not null) - product name
- `slug` (text, unique, not null)
- `brand` (text, not null) - manufacturer name
- `category_id` (uuid, FK to categories)
- `type` (text) - 'benchmark' or 'dupe'
- `price` (numeric) - retail price in USD
- `servings_per_container` (int) - number of servings
- `price_per_serving` (numeric) - calculated price per serving
- `cgmp_certified` (boolean) - cGMP certified
- `fda_registered` (boolean) - FDA-registered facility
- `third_party_tested` (boolean) - NSF/USP tested
- `certifications` (text[]) - array of cert names (NSF, USP, Informed Sport, etc.)
- `description` (text) - product description
- `affiliate_url` (text) - affiliate link
- `affiliate_active` (boolean) - whether affiliate link is active
- `match_percentage` (numeric) - active ingredient match to benchmark (for dupes)
- `benchmark_id` (uuid, FK to products) - which benchmark this dupe replaces
- `image_url` (text) - product image URL
- `rating` (numeric) - user rating out of 5
- `created_at` (timestamp)

### 4. product_ingredients
Junction table linking products to ingredients with specific amounts.
- `id` (uuid, primary key)
- `product_id` (uuid, FK to products)
- `ingredient_id` (uuid, FK to ingredients)
- `amount_mg` (numeric) - milligrams of this ingredient per serving
- `daily_value_percent` (numeric) - percent of daily value
- `created_at` (timestamp)

## Security
- RLS enabled on all tables.
- All tables use `TO anon, authenticated` (no-auth app, data is intentionally public).
- Full CRUD access for anon and authenticated roles on all tables.
*/

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  icon text DEFAULT 'Pill',
  display_order int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_categories" ON categories;
CREATE POLICY "anon_select_categories" ON categories FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_categories" ON categories;
CREATE POLICY "anon_insert_categories" ON categories FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_categories" ON categories;
CREATE POLICY "anon_update_categories" ON categories FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_categories" ON categories;
CREATE POLICY "anon_delete_categories" ON categories FOR DELETE
  TO anon, authenticated USING (true);

-- Ingredients table
CREATE TABLE IF NOT EXISTS ingredients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  bioavailability_rating int NOT NULL DEFAULT 3 CHECK (bioavailability_rating BETWEEN 1 AND 5),
  solubility text,
  clinical_evidence text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE ingredients ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_ingredients" ON ingredients;
CREATE POLICY "anon_select_ingredients" ON ingredients FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_ingredients" ON ingredients;
CREATE POLICY "anon_insert_ingredients" ON ingredients FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_ingredients" ON ingredients;
CREATE POLICY "anon_update_ingredients" ON ingredients FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_ingredients" ON ingredients;
CREATE POLICY "anon_delete_ingredients" ON ingredients FOR DELETE
  TO anon, authenticated USING (true);

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  brand text NOT NULL,
  category_id uuid REFERENCES categories(id) ON DELETE SET NULL,
  type text NOT NULL DEFAULT 'dupe' CHECK (type IN ('benchmark', 'dupe')),
  price numeric(10,2) NOT NULL DEFAULT 0,
  servings_per_container int NOT NULL DEFAULT 1,
  price_per_serving numeric(10,2) GENERATED ALWAYS AS (CASE WHEN servings_per_container > 0 THEN price / servings_per_container ELSE price END) STORED,
  cgmp_certified boolean NOT NULL DEFAULT false,
  fda_registered boolean NOT NULL DEFAULT false,
  third_party_tested boolean NOT NULL DEFAULT false,
  certifications text[] DEFAULT '{}',
  description text,
  affiliate_url text,
  affiliate_active boolean DEFAULT false,
  match_percentage numeric(5,2),
  benchmark_id uuid REFERENCES products(id) ON DELETE SET NULL,
  image_url text,
  rating numeric(2,1) DEFAULT 4.0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_products" ON products;
CREATE POLICY "anon_select_products" ON products FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_products" ON products;
CREATE POLICY "anon_insert_products" ON products FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_products" ON products;
CREATE POLICY "anon_update_products" ON products FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_products" ON products;
CREATE POLICY "anon_delete_products" ON products FOR DELETE
  TO anon, authenticated USING (true);

-- Product-Ingredient junction table
CREATE TABLE IF NOT EXISTS product_ingredients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  ingredient_id uuid NOT NULL REFERENCES ingredients(id) ON DELETE CASCADE,
  amount_mg numeric(10,2) NOT NULL DEFAULT 0,
  daily_value_percent numeric(5,1),
  created_at timestamptz DEFAULT now(),
  UNIQUE(product_id, ingredient_id)
);

ALTER TABLE product_ingredients ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_product_ingredients" ON product_ingredients;
CREATE POLICY "anon_select_product_ingredients" ON product_ingredients FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_product_ingredients" ON product_ingredients;
CREATE POLICY "anon_insert_product_ingredients" ON product_ingredients FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_product_ingredients" ON product_ingredients;
CREATE POLICY "anon_update_product_ingredients" ON product_ingredients FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_product_ingredients" ON product_ingredients;
CREATE POLICY "anon_delete_product_ingredients" ON product_ingredients FOR DELETE
  TO anon, authenticated USING (true);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_type ON products(type);
CREATE INDEX IF NOT EXISTS idx_products_benchmark ON products(benchmark_id);
CREATE INDEX IF NOT EXISTS idx_product_ingredients_product ON product_ingredients(product_id);
CREATE INDEX IF NOT EXISTS idx_product_ingredients_ingredient ON product_ingredients(ingredient_id);
CREATE INDEX IF NOT EXISTS idx_ingredients_slug ON ingredients(slug);
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);