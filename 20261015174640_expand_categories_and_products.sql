/*
# Expand Categories to 10 Verticals + Add New Products

## Overview
1. Updates existing 6 categories to new names/slugs/descriptions matching the 10-vertical directory.
2. Adds 4 new categories: Daily Greens & Superfoods, GLP-1 Natural Companions, Hair/Skin/Collagen, Stress & Cortisol Balance.
3. Adds new ingredients for the new verticals (Berberine Phytosome, Akkermansia, Saw Palmetto, Marine Peptides, Collagen Peptides, NAD+/NR, Spirulina, Chlorella).
4. Adds 2 new benchmark+dupe product pairs:
   - GLP-1: Pendulum Metabolic Daily (benchmark) vs Akkermansia + Berberine Phytosome Complex (dupe, 91% match)
   - Hair Health: Nutrafol Hair Growth (benchmark) vs Clinical Saw Palmetto + Marine Peptides (dupe, 88% match)
5. Adds product-ingredient links for new products.

## Category Changes
### Renamed/Updated (by slug)
- gut-health -> "Gut Health & Synbiotics" (icon: Microscope)
- vitamins -> "Bioavailable Essential Vitamins" (icon: Sun)
- nootropics -> "Nootropics & Focus" (icon: Brain)
- sleep-recovery -> "Sleep & Circadian Recovery" (icon: Moon)
- longevity -> "Longevity & Cellular NAD+" (icon: Infinity)
- sports-nutrition -> "Sports Performance & Muscle" (icon: Dumbbell)

### New Categories
- daily-greens-superfoods: "Daily Greens & Superfoods" (icon: Leaf)
- glp-1-natural-companions: "GLP-1 Natural Companions" (icon: Pill)
- hair-skin-collagen: "Hair, Skin & Collagen" (icon: Sparkles)
- stress-cortisol-balance: "Stress & Cortisol Balance" (icon: HeartPulse)

## Security
No security changes — all tables already have RLS with anon+authenticated full CRUD.
*/

-- =====================================================
-- 1. UPDATE EXISTING CATEGORIES (names, descriptions, icons, display_order)
-- =====================================================

UPDATE categories SET
  name = 'Sports Performance & Muscle',
  description = 'Performance, recovery, and muscle-building supplements including creatine, protein, and pre-workouts.',
  icon = 'Dumbbell',
  display_order = 1
WHERE slug = 'sports-nutrition';

UPDATE categories SET
  name = 'Longevity & Cellular NAD+',
  description = 'Supplements supporting cellular health, NAD+ metabolism, telomere integrity, and healthy lifespan extension.',
  icon = 'Infinity',
  display_order = 2
WHERE slug = 'longevity';

UPDATE categories SET
  name = 'Gut Health & Synbiotics',
  description = 'Probiotics, prebiotics, synbiotics, and digestive enzymes for a healthy microbiome and gut barrier.',
  icon = 'Microscope',
  display_order = 3
WHERE slug = 'gut-health';

UPDATE categories SET
  name = 'Bioavailable Essential Vitamins',
  description = 'Highly bioavailable, chelated, and methylated essential vitamins and minerals for foundational health.',
  icon = 'Sun',
  display_order = 4
WHERE slug = 'vitamins';

UPDATE categories SET
  name = 'Nootropics & Focus',
  description = 'Cognitive enhancers, adaptogens, and brain-optimization supplements for mental clarity and focus.',
  icon = 'Brain',
  display_order = 5
WHERE slug = 'nootropics';

UPDATE categories SET
  name = 'Sleep & Circadian Recovery',
  description = 'Sleep aids, circadian rhythm support, and recovery formulas for restorative rest.',
  icon = 'Moon',
  display_order = 6
WHERE slug = 'sleep-recovery';

-- =====================================================
-- 2. INSERT NEW CATEGORIES
-- =====================================================

INSERT INTO categories (name, slug, description, icon, display_order) VALUES
('Daily Greens & Superfoods', 'daily-greens-superfoods',
 'Comprehensive greens powders, superfood blends, and organic spirulina/chlorella supplements for daily nutritional insurance.',
 'Leaf', 7),
('GLP-1 Natural Companions', 'glp-1-natural-companions',
 'Natural metabolic support supplements for satiety, Akkermansia muciniphila, berberine phytosome, and GLP-1 pathway optimization.',
 'Pill', 8),
('Hair, Skin & Collagen', 'hair-skin-collagen',
 'Hair growth, skin health, collagen peptides, saw palmetto, biotin, and beauty-from-within nutraceuticals.',
 'Sparkles', 9),
('Stress & Cortisol Balance', 'stress-cortisol-balance',
 'Adaptogens, cortisol-regulating herbs, and stress resilience supplements including ashwagandha, rhodiola, and L-theanine.',
 'HeartPulse', 10)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  display_order = EXCLUDED.display_order;

-- =====================================================
-- 3. NEW INGREDIENTS
-- =====================================================

INSERT INTO ingredients (name, slug, description, bioavailability_rating, solubility, clinical_evidence) VALUES
('Spirulina (Organic)', 'spirulina-organic',
 'A nutrient-dense blue-green algae rich in protein, chlorophyll, B-vitamins, and antioxidants. Supports detoxification and immune function.',
 3, 'Water-soluble', 'Clinical studies show antioxidant, anti-inflammatory, and immune-modulating effects. Protein quality comparable to eggs.'),
('Chlorella (Organic)', 'chlorella-organic',
 'A single-celled green algae rich in chlorophyll, chlorella growth factor (CGF), and heavy-metal chelating compounds.',
 3, 'Water-soluble', 'Evidence supports heavy metal detoxification, immune enhancement, and lipid normalization.'),
('Berberine Phytosome', 'berberine-phytosome',
 'A phytosome-enhanced form of berberine with significantly improved bioavailability. Supports metabolic health, GLP-1 secretion, and insulin sensitivity.',
 5, 'Fat-soluble', 'Phytosome delivery improves absorption 10x over standard berberine HCl. Clinical trials show metabolic and glycemic benefits.'),
('Akkermansia muciniphila', 'akkermansia-muciniphila',
 'A next-generation keystone probiotic strain that strengthens gut barrier function and is associated with improved metabolic health and GLP-1 production.',
 4, 'N/A (live organism)', 'Clinical trials associate Akkermansia abundance with improved insulin sensitivity, reduced inflammation, and metabolic syndrome improvement.'),
('Saw Palmetto (Extract)', 'saw-palmetto-extract',
 'A botanical extract from Serenoa repens berries clinically studied for supporting prostate health and inhibiting 5-alpha-reductase to reduce DHT-driven hair loss.',
 3, 'Fat-soluble', 'Meta-analyses show benefit for BPH symptoms. Growing evidence for DHT-blocking role in androgenetic alopecia.'),
('Marine Collagen Peptides', 'marine-collagen-peptides',
 'Hydrolyzed type I collagen from marine sources with superior bioavailability. Supports hair, skin, nail, and joint structural integrity.',
 5, 'Water-soluble', 'Clinical trials demonstrate improved skin elasticity, hair tensile strength, and nail growth with 2.5-10g/day marine collagen peptides.'),
('NAD+ Precursor (NR)', 'nad-plus-precursor-nr',
 'Nicotinamide riboside, a highly efficient NAD+ precursor that restores cellular NAD+ levels, supporting mitochondrial function and healthy aging.',
 5, 'Water-soluble', 'Human trials confirm NR elevates blood NAD+ by 2-3x. Ongoing research into longevity, mitochondrial, and cardiovascular benefits.'),
('Glycine', 'glycine-amino-acid',
 'The simplest amino acid, serving as a key building block for collagen, glutathione, and creatine synthesis. Supports sleep quality and metabolic health.',
 5, 'Water-soluble', 'Studies show improved sleep quality, collagen synthesis support, and potential longevity benefits via mTOR modulation and autophagy promotion.')
ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- 4. NEW BENCHMARK + DUPE PRODUCTS
-- =====================================================

-- GLP-1 Category: Pendulum Metabolic Daily (benchmark)
INSERT INTO products (name, slug, brand, category_id, type, price, servings_per_container, cgmp_certified, fda_registered, third_party_tested, certifications, description, affiliate_url, affiliate_active, image_url, rating)
SELECT
  'Pendulum Metabolic Daily', 'pendulum-metabolic-daily', 'Pendulum Therapeutics',
  (SELECT id FROM categories WHERE slug = 'glp-1-natural-companions'),
  'benchmark', 80.00, 30, true, true, true, ARRAY['cGMP', 'Third-party tested'],
  'A premium metabolic probiotic featuring Akkermansia muciniphila and polyphenol blends designed to support GLP-1 production, gut barrier integrity, and healthy blood glucose metabolism.',
  'https://example.com/pendulum-affiliate', true, null, 4.3
ON CONFLICT (slug) DO NOTHING;

-- GLP-1 Category: Akkermansia + Berberine Phytosome Complex (dupe)
INSERT INTO products (name, slug, brand, category_id, type, price, servings_per_container, cgmp_certified, fda_registered, third_party_tested, certifications, description, affiliate_url, affiliate_active, match_percentage, benchmark_id, image_url, rating)
SELECT
  'Akkermansia + Berberine Phytosome Complex', 'akkermansia-berberine-phytosome-complex', 'NutriDupe Labs',
  (SELECT id FROM categories WHERE slug = 'glp-1-natural-companions'),
  'dupe', 32.00, 30, true, true, true, ARRAY['NSF', 'cGMP', 'USP'],
  'A cGMP-certified metabolic support complex combining Akkermansia muciniphila with berberine phytosome (10x absorption). Clinically equivalent to Pendulum Metabolic Daily at 60% lower cost.',
  'https://example.com/nutridupe-glp1-affiliate', true, 91.0,
  (SELECT id FROM products WHERE slug = 'pendulum-metabolic-daily'),
  null, 4.4
ON CONFLICT (slug) DO NOTHING;

-- Hair Health Category: Nutrafol Hair Growth (benchmark)
INSERT INTO products (name, slug, brand, category_id, type, price, servings_per_container, cgmp_certified, fda_registered, third_party_tested, certifications, description, affiliate_url, affiliate_active, image_url, rating)
SELECT
  'Nutrafol Hair Growth', 'nutrafol-hair-growth', 'Nutrafol',
  (SELECT id FROM categories WHERE slug = 'hair-skin-collagen'),
  'benchmark', 88.00, 30, true, true, true, ARRAY['cGMP', 'Third-party tested'],
  'A clinically-tested hair growth supplement combining saw palmetto, marine collagen, ashwagandha, and biotin. Backed by 7 clinical studies showing improved hair density and growth.',
  'https://example.com/nutrafol-affiliate', true, null, 4.5
ON CONFLICT (slug) DO NOTHING;

-- Hair Health Category: Clinical Saw Palmetto + Marine Peptides (dupe)
INSERT INTO products (name, slug, brand, category_id, type, price, servings_per_container, cgmp_certified, fda_registered, third_party_tested, certifications, description, affiliate_url, affiliate_active, match_percentage, benchmark_id, image_url, rating)
SELECT
  'Clinical Saw Palmetto + Marine Peptides', 'clinical-saw-palmetto-marine-peptides', 'NutriDupe Labs',
  (SELECT id FROM categories WHERE slug = 'hair-skin-collagen'),
  'dupe', 29.99, 30, true, true, true, ARRAY['NSF', 'cGMP', 'USP'],
  'A cGMP-certified hair health formula combining standardized saw palmetto extract, marine collagen peptides, and biotin. Matches Nutrafol active-ingredient profile at one-third the monthly cost.',
  'https://example.com/nutridupe-hair-affiliate', true, 88.0,
  (SELECT id FROM products WHERE slug = 'nutrafol-hair-growth'),
  null, 4.3
ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- 5. PRODUCT-INGREDIENT LINKS FOR NEW PRODUCTS
-- =====================================================

-- Pendulum Metabolic Daily
INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 50, null FROM products p, ingredients i
WHERE p.slug = 'pendulum-metabolic-daily' AND i.slug = 'akkermansia-muciniphila'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 500, null FROM products p, ingredients i
WHERE p.slug = 'pendulum-metabolic-daily' AND i.slug = 'berberine-phytosome'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

-- Akkermansia + Berberine Phytosome Complex (dupe)
INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 50, null FROM products p, ingredients i
WHERE p.slug = 'akkermansia-berberine-phytosome-complex' AND i.slug = 'akkermansia-muciniphila'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 500, null FROM products p, ingredients i
WHERE p.slug = 'akkermansia-berberine-phytosome-complex' AND i.slug = 'berberine-phytosome'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

-- Nutrafol Hair Growth (benchmark)
INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 320, null FROM products p, ingredients i
WHERE p.slug = 'nutrafol-hair-growth' AND i.slug = 'saw-palmetto-extract'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 2500, null FROM products p, ingredients i
WHERE p.slug = 'nutrafol-hair-growth' AND i.slug = 'marine-collagen-peptides'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 3000, null FROM products p, ingredients i
WHERE p.slug = 'nutrafol-hair-growth' AND i.slug = 'ashwagandha-ksm-66'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 3, 1000 FROM products p, ingredients i
WHERE p.slug = 'nutrafol-hair-growth' AND i.slug = 'biotin-b7'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

-- Clinical Saw Palmetto + Marine Peptides (dupe)
INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 320, null FROM products p, ingredients i
WHERE p.slug = 'clinical-saw-palmetto-marine-peptides' AND i.slug = 'saw-palmetto-extract'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 2500, null FROM products p, ingredients i
WHERE p.slug = 'clinical-saw-palmetto-marine-peptides' AND i.slug = 'marine-collagen-peptides'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 3, 1000 FROM products p, ingredients i
WHERE p.slug = 'clinical-saw-palmetto-marine-peptides' AND i.slug = 'biotin-b7'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;
