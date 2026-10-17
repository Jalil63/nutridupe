/*
# NutriDupe - Seed Data: Categories, Ingredients, and Products

## Overview
Seeds the database with sample data for the NutriDupe platform including:
- 6 health categories (Sports Nutrition, Longevity, Gut Health, Vitamins, Nootropics, Sleep & Recovery)
- Master active ingredients with bioavailability ratings
- 3 benchmark products: Athletic Greens AG1, Seed DS-01, Thorne Creatine
- Multiple cGMP-certified dupe alternatives for each benchmark
- Product-ingredient relationships with specific milligram amounts

## Categories
1. Sports Nutrition (Dumbbell icon)
2. Longevity (Infinity icon)
3. Gut Health (Microscope icon)
4. Vitamins (Sun icon)
5. Nootropics (Brain icon)
6. Sleep & Recovery (Moon icon)

## Ingredients
Includes: Creatine Monohydrate, Lactobacillus, Bifidobacterium, Vitamin D3, Vitamin K2, Iron,
Magnesium, Zinc, Ashwagandha, L-Theanine, Omega-3 (EPA/DHA), CoQ10, Vitamin C, Vitamin B12,
Astragalus, Rhodiola Rosea, Prebiotic Fiber, Vitamin A, Vitamin E, Folate, Calcium, Selenium,
Copper, Niacin, Riboflavin, Thiamin, Vitamin B6, Pantothenic Acid, Biotin, Chromium, Molybdenum,
Iodine, Manganese

## Products
- Benchmarks: AG1 ($79/serving $2.63), Seed DS-01 ($40/serving $1.33), Thorne Creatine ($38/serving $0.63)
- Dupes: NutriDupe Greens, Live it Up Greens, Bloom Greens, NOW Synbiotic, Renew Life Probiotics,
  Nutricost Creatine, Bulk Supplements Creatine

## Security
No security changes — all data is public/seeded.
*/

-- Categories
INSERT INTO categories (name, slug, description, icon, display_order) VALUES
('Sports Nutrition', 'sports-nutrition', 'Performance, recovery, and muscle-building supplements including creatine, protein, and pre-workouts.', 'Dumbbell', 1),
('Longevity', 'longevity', 'Supplements supporting cellular health, anti-aging, and healthy lifespan extension.', 'Infinity', 2),
('Gut Health', 'gut-health', 'Probiotics, prebiotics, and digestive enzymes for a healthy microbiome.', 'Microscope', 3),
('Vitamins', 'vitamins', 'Essential vitamins and minerals for foundational health and wellness.', 'Sun', 4),
('Nootropics', 'nootropics', 'Cognitive enhancers, adaptogens, and brain-optimization supplements.', 'Brain', 5),
('Sleep & Recovery', 'sleep-recovery', 'Sleep aids, recovery formulas, and stress-management supplements.', 'Moon', 6)
ON CONFLICT (slug) DO NOTHING;

-- Ingredients
INSERT INTO ingredients (name, slug, description, bioavailability_rating, solubility, clinical_evidence) VALUES
('Creatine Monohydrate', 'creatine-monohydrate', 'The most researched and proven form of creatine. Increases phosphocreatine stores in muscles, supporting ATP production for explosive power and strength.', 5, 'Water-soluble', 'Over 500 peer-reviewed studies confirm efficacy for strength, power output, and muscle mass. Considered the gold standard of sports supplements.'),
('Lactobacillus', 'lactobacillus', 'A genus of beneficial lactic acid bacteria that supports gut barrier function, immune regulation, and nutrient absorption in the small intestine.', 4, 'N/A (live organism)', 'Extensive clinical literature supports role in gut health, immune modulation, and reducing GI distress. Strain-specific benefits well documented.'),
('Bifidobacterium', 'bifidobacterium', 'A dominant genus in the large intestine that ferments dietary fiber into short-chain fatty acids (SCFAs), supporting colon health and systemic immunity.', 4, 'N/A (live organism)', 'Clinical trials demonstrate benefits for IBS symptoms, immune function, and gut barrier integrity. Essential for colonic health.'),
('Prebiotic Fiber', 'prebiotic-fiber', 'Non-digestible carbohydrates that selectively feed beneficial gut bacteria, promoting SCFA production and microbiome diversity.', 3, 'Water-soluble', 'Meta-analyses show prebiotic supplementation increases bifidobacteria populations and improves bowel function and metabolic markers.'),
('Vitamin D3 (Cholecalciferol)', 'vitamin-d3-cholecalciferol', 'The most bioavailable form of vitamin D. Supports calcium absorption, bone density, immune function, and hormonal health.', 5, 'Fat-soluble', 'Thousands of studies confirm role in bone health, immune function, and mood. Deficiency is widespread and linked to numerous chronic conditions.'),
('Vitamin K2 (MK-7)', 'vitamin-k2-mk-7', 'Menaquinone-7 directs calcium to bones and away from arteries. Works synergistically with Vitamin D3 for cardiovascular and skeletal health.', 4, 'Fat-soluble', 'Rotterdam Study and subsequent trials show reduced arterial calcification and improved bone mineral density with K2 MK-7 supplementation.'),
('Magnesium Glycinate', 'magnesium-glycinate', 'A highly bioavailable, gentle-on-stomach form of magnesium bonded to glycine. Supports 300+ enzymatic reactions, muscle relaxation, and sleep.', 5, 'Water-soluble', 'Clinical evidence supports superior absorption and tolerability of the glycinate form. Essential for sleep, muscle, and cardiovascular function.'),
('Ashwagandha (KSM-66)', 'ashwagandha-ksm-66', 'A standardized root extract of Withania somnifera. Clinically shown to reduce cortisol, improve stress resilience, and enhance sleep quality.', 4, 'Fat-soluble', 'Multiple RCTs demonstrate significant cortisol reduction, improved sleep quality, and reduced anxiety with KSM-66 at 300-600mg/day.'),
('L-Theanine', 'l-theanine', 'An amino acid from green tea that promotes alpha brain waves, inducing calm focus without drowsiness. Often paired with caffeine.', 5, 'Water-soluble', 'Numerous studies confirm relaxation without sedation. Synergistic with caffeine for attention and reaction time.'),
('Omega-3 EPA/DHA', 'omega-3-epa-dha', 'Essential fatty acids from fish or algae oil. EPA and DHA are critical for brain health, cardiovascular function, and inflammation resolution.', 4, 'Fat-soluble', 'Strong evidence for cardiovascular risk reduction, cognitive support, and inflammatory modulation. Triglyceride form has superior bioavailability.'),
('CoQ10 (Ubiquinone)', 'coq10-ubiquinone', 'A coenzyme essential for mitochondrial ATP production and a potent antioxidant. Supports heart health and cellular energy.', 3, 'Fat-soluble', 'Clinical trials support benefits in heart failure adjunct therapy, statin-induced myopathy reduction, and antioxidant protection.'),
('Vitamin C (Ascorbic Acid)', 'vitamin-c-ascorbic-acid', 'A water-soluble antioxidant essential for collagen synthesis, immune function, and iron absorption.', 5, 'Water-soluble', 'Well-established role in immune function, collagen synthesis, and as a powerful antioxidant. Deficiency causes scurvy.'),
('Vitamin B12 (Methylcobalamin)', 'vitamin-b12-methylcobalamin', 'The active, bioavailable coenzyme form of B12. Essential for nerve function, DNA synthesis, and red blood cell production.', 5, 'Water-soluble', 'Methylcobalamin is the active form used directly by the body. Superior to cyanocobalamin for nervous system support.'),
('Rhodiola Rosea', 'rhodiola-rosea', 'An adaptogenic herb that combats fatigue, enhances mental performance under stress, and supports neurotransmitter balance.', 4, 'Water-soluble', 'Clinical evidence supports anti-fatigue effects and improved cognitive function during stress. Standardized to 3% rosavin.'),
('Astragalus', 'astragalus', 'A traditional adaptogen studied for immune support, telomere health, and longevity-associated pathways.', 3, 'Water-soluble', 'Preclinical and early clinical data suggest immunomodulatory effects and potential telomerase activation. Research ongoing.'),
('Vitamin A (Beta-Carotene)', 'vitamin-a-beta-carotene', 'A fat-soluble vitamin and antioxidant critical for vision, immune function, and skin health. Beta-carotene is a provitamin A form.', 4, 'Fat-soluble', 'Essential for vision and immune function. Beta-carotene converts to retinol as needed, avoiding toxicity risk.'),
('Vitamin E (Tocopherol)', 'vitamin-e-tocopherol', 'A powerful fat-soluble antioxidant that protects cell membranes from oxidative damage and supports skin and immune health.', 4, 'Fat-soluble', 'Important antioxidant for cell membrane protection. Mixed tocopherols provide broader protection than alpha-tocopherol alone.'),
('Folate (MTHF)', 'folate-mthf', 'The active 5-methyltetrahydrofolate form that bypasses MTHFR mutations. Essential for DNA synthesis, methylation, and fetal development.', 5, 'Water-soluble', 'Active MTHF form is superior for the 40%+ of the population with MTHFR polymorphisms. Critical for prenatal health.'),
('Calcium (Citrate)', 'calcium-citrate', 'A highly absorbable form of calcium that does not require stomach acid for uptake. Essential for bone density and muscle function.', 4, 'Water-soluble', 'Citrate form has superior bioavailability compared to carbonate, especially for older adults or those on PPIs.'),
('Zinc (Picolinate)', 'zinc-picolinate', 'A highly bioavailable chelated form of zinc. Supports immune function, wound healing, testosterone, and taste perception.', 5, 'Water-soluble', 'Picolinate form shows superior absorption. Zinc is critical for immune cell function and over 300 enzymatic reactions.'),
('Selenium', 'selenium', 'An essential trace mineral and component of glutathione peroxidase. Supports thyroid function and antioxidant defense.', 3, 'Water-soluble', 'Essential for thyroid hormone metabolism and antioxidant defense. Deficiency linked to increased cancer risk in trials.'),
('Copper', 'copper', 'An essential trace mineral required for iron metabolism, collagen synthesis, and nervous system function.', 3, 'Water-soluble', 'Must be balanced with zinc. Essential for ceruloplasmin and lysyl oxidase enzyme systems.'),
('Niacin (B3)', 'niacin-b3', 'A B vitamin essential for energy metabolism, DNA repair, and maintaining healthy cholesterol levels.', 4, 'Water-soluble', 'Clinically proven to improve lipid profiles. Niacinamide form avoids flushing.'),
('Riboflavin (B2)', 'riboflavin-b2', 'A B vitamin critical for energy production, cellular function, and metabolism of other B vitamins.', 5, 'Water-soluble', 'Essential cofactor for FAD and FMN. Important for migraine prevention at high doses.'),
('Thiamin (B1)', 'thiamin-b1', 'A B vitamin essential for glucose metabolism and nerve function. Deficiency causes beriberi.', 5, 'Water-soluble', 'Critical for energy metabolism and neurological function. Benfotiamine form is fat-soluble with superior bioavailability.'),
('Vitamin B6 (P5P)', 'vitamin-b6-p5p', 'The active pyridoxal-5-phosphate form. Essential for neurotransmitter synthesis, amino acid metabolism, and mood regulation.', 5, 'Water-soluble', 'P5P is the active coenzyme form. Superior to pyridoxine HCl for those with conversion issues.'),
('Pantothenic Acid (B5)', 'pantothenic-acid-b5', 'A B vitamin that is a precursor to CoA, essential for energy metabolism and hormone synthesis.', 4, 'Water-soluble', 'Essential for CoA synthesis and energy production. Supports adrenal function.'),
('Biotin (B7)', 'biotin-b7', 'A B vitamin essential for fatty acid synthesis, amino acid metabolism, and gene regulation. Popular for hair/skin/nails.', 5, 'Water-soluble', 'Essential cofactor for carboxylase enzymes. Widely used for hair and nail health.'),
('Chromium', 'chromium', 'A trace mineral that enhances insulin sensitivity and supports healthy blood sugar metabolism.', 3, 'Water-soluble', 'Picolinate form shows modest benefits for glucose metabolism. Evidence mixed but generally safe.'),
('Molybdenum', 'molybdenum', 'A trace mineral essential for sulfite metabolism and enzyme function.', 3, 'Water-soluble', 'Essential cofactor for xanthine oxidase and sulfite oxidase. Deficiency rare but important.'),
('Iodine', 'iodine', 'An essential mineral for thyroid hormone production, metabolic rate, and cognitive development.', 4, 'Water-soluble', 'Critical for thyroid function. Kelp and potassium iodide are common sources.'),
('Manganese', 'manganese', 'A trace mineral essential for bone formation, antioxidant defense, and metabolism.', 3, 'Water-soluble', 'Cofactor for manganese SOD. Important for mitochondrial antioxidant defense.')
ON CONFLICT (slug) DO NOTHING;

-- Insert benchmark products first (so we can reference them for dupes)
INSERT INTO products (name, slug, brand, category_id, type, price, servings_per_container, cgmp_certified, fda_registered, third_party_tested, certifications, description, affiliate_url, affiliate_active, image_url, rating)
SELECT
'Athletic Greens AG1', 'athletic-greens-ag1', 'Athletic Greens',
  (SELECT id FROM categories WHERE slug = 'vitamins'),
  'benchmark', 79.00, 30, true, true, true, ARRAY['NSF Certified for Sport', 'cGMP'],
  'A premium all-in-one greens supplement with 75 vitamins, minerals, probiotics, and whole-food ingredients. Marketed as a complete daily nutrition insurance.',
  'https://example.com/ag1-affiliate', true, null, 4.5
ON CONFLICT (slug) DO NOTHING;

INSERT INTO products (name, slug, brand, category_id, type, price, servings_per_container, cgmp_certified, fda_registered, third_party_tested, certifications, description, affiliate_url, affiliate_active, image_url, rating)
SELECT
'Seed DS-01 Daily Synbiotic', 'seed-ds-01-daily-synbiotic', 'Seed Health',
  (SELECT id FROM categories WHERE slug = 'gut-health'),
  'benchmark', 39.99, 30, true, true, true, ARRAY['cGMP', 'Third-party tested'],
  'A high-end synbiotic (probiotic + prebiotic) with 24 clinically-studied strains in a patented delivery capsule that survives stomach acid.',
  'https://example.com/seed-affiliate', true, null, 4.3
ON CONFLICT (slug) DO NOTHING;

INSERT INTO products (name, slug, brand, category_id, type, price, servings_per_container, cgmp_certified, fda_registered, third_party_tested, certifications, description, affiliate_url, affiliate_active, image_url, rating)
SELECT
'Thorne Creatine Monohydrate', 'thorne-creatine-monohydrate', 'Thorne Research',
  (SELECT id FROM categories WHERE slug = 'sports-nutrition'),
  'benchmark', 38.00, 60, true, true, true, ARRAY['NSF Certified for Sport', 'cGMP'],
  'A premium micronized creatine monohydrate from Thorne Research, a trusted brand in professional-grade supplements.',
  'https://example.com/thorne-creatine-affiliate', true, null, 4.7
ON CONFLICT (slug) DO NOTHING;

-- Now insert dupe products referencing benchmarks
-- AG1 Dupes
INSERT INTO products (name, slug, brand, category_id, type, price, servings_per_container, cgmp_certified, fda_registered, third_party_tested, certifications, description, affiliate_url, affiliate_active, match_percentage, benchmark_id, image_url, rating)
SELECT
'NutriDupe Daily Greens', 'nutridupe-daily-greens', 'NutriDupe Labs',
  (SELECT id FROM categories WHERE slug = 'vitamins'),
  'dupe', 39.99, 30, true, true, true, ARRAY['NSF', 'cGMP', 'USP'],
  'A cGMP-certified greens powder with comparable vitamin, mineral, and probiotic profile to AG1 at nearly half the cost. Manufactured in an FDA-registered facility with third-party testing.',
  'https://example.com/nutridupe-greens-affiliate', true, 96.0,
  (SELECT id FROM products WHERE slug = 'athletic-greens-ag1'),
  null, 4.4
ON CONFLICT (slug) DO NOTHING;

INSERT INTO products (name, slug, brand, category_id, type, price, servings_per_container, cgmp_certified, fda_registered, third_party_tested, certifications, description, affiliate_url, affiliate_active, match_percentage, benchmark_id, image_url, rating)
SELECT
'Live it Up Super Greens', 'live-it-up-super-greens', 'Live it Up',
  (SELECT id FROM categories WHERE slug = 'vitamins'),
  'dupe', 29.99, 30, true, true, true, ARRAY['cGMP', 'Third-party tested'],
  'A comprehensive greens supplement with spirulina, chlorella, and probiotics. cGMP-certified and made in the USA in an FDA-registered facility.',
  'https://example.com/liveitup-affiliate', true, 82.0,
  (SELECT id FROM products WHERE slug = 'athletic-greens-ag1'),
  null, 4.2
ON CONFLICT (slug) DO NOTHING;

INSERT INTO products (name, slug, brand, category_id, type, price, servings_per_container, cgmp_certified, fda_registered, third_party_tested, certifications, description, affiliate_url, affiliate_active, match_percentage, benchmark_id, image_url, rating)
SELECT
'Bloom Greens & Superfoods', 'bloom-greens-superfoods', 'Bloom Nutrition',
  (SELECT id FROM categories WHERE slug = 'vitamins'),
  'dupe', 24.99, 30, true, true, true, ARRAY['cGMP', 'Third-party tested'],
  'An affordable greens powder with digestive enzymes, probiotics, and a full spectrum of superfoods. cGMP-certified with third-party quality verification.',
  'https://example.com/bloom-affiliate', true, 78.0,
  (SELECT id FROM products WHERE slug = 'athletic-greens-ag1'),
  null, 4.1
ON CONFLICT (slug) DO NOTHING;

-- Seed DS-01 Dupes
INSERT INTO products (name, slug, brand, category_id, type, price, servings_per_container, cgmp_certified, fda_registered, third_party_tested, certifications, description, affiliate_url, affiliate_active, match_percentage, benchmark_id, image_url, rating)
SELECT
'NOW Optimal Probiotic', 'now-optimal-probiotic', 'NOW Foods',
  (SELECT id FROM categories WHERE slug = 'gut-health'),
  'dupe', 19.99, 60, true, true, true, ARRAY['cGMP', 'UL Tested'],
  'A high-potency probiotic with 20 billion CFU across 15 strains. cGMP-certified and third-party tested by UL for potency and purity.',
  'https://example.com/now-probiotic-affiliate', true, 88.0,
  (SELECT id FROM products WHERE slug = 'seed-ds-01-daily-synbiotic'),
  null, 4.5
ON CONFLICT (slug) DO NOTHING;

INSERT INTO products (name, slug, brand, category_id, type, price, servings_per_container, cgmp_certified, fda_registered, third_party_tested, certifications, description, affiliate_url, affiliate_active, match_percentage, benchmark_id, image_url, rating)
SELECT
'Renew Life Ultimate Flora', 'renew-life-ultimate-flora', 'Renew Life',
  (SELECT id FROM categories WHERE slug = 'gut-health'),
  'dupe', 22.99, 30, true, true, true, ARRAY['cGMP', 'Third-party tested'],
  'A 30 billion CFU probiotic with 12 strains including Lactobacillus and Bifidobacterium. Enteric-coated capsules for acid survival. cGMP-certified.',
  'https://example.com/renewlife-affiliate', true, 84.0,
  (SELECT id FROM products WHERE slug = 'seed-ds-01-daily-synbiotic'),
  null, 4.3
ON CONFLICT (slug) DO NOTHING;

INSERT INTO products (name, slug, brand, category_id, type, price, servings_per_container, cgmp_certified, fda_registered, third_party_tested, certifications, description, affiliate_url, affiliate_active, match_percentage, benchmark_id, image_url, rating)
SELECT
'NutriDupe Synbiotic Complete', 'nutridupe-synbiotic-complete', 'NutriDupe Labs',
  (SELECT id FROM categories WHERE slug = 'gut-health'),
  'dupe', 24.99, 30, true, true, true, ARRAY['NSF', 'cGMP', 'USP'],
  'A synbiotic combining 24 clinically-studied probiotic strains with prebiotic fiber in an acid-resistant capsule. Matches Seed DS-01 strain diversity at a fraction of the cost.',
  'https://example.com/nutridupe-synbiotic-affiliate', true, 91.0,
  (SELECT id FROM products WHERE slug = 'seed-ds-01-daily-synbiotic'),
  null, 4.4
ON CONFLICT (slug) DO NOTHING;

-- Thorne Creatine Dupes
INSERT INTO products (name, slug, brand, category_id, type, price, servings_per_container, cgmp_certified, fda_registered, third_party_tested, certifications, description, affiliate_url, affiliate_active, match_percentage, benchmark_id, image_url, rating)
SELECT
'Nutricost Creatine Monohydrate', 'nutricost-creatine-monohydrate', 'Nutricost',
  (SELECT id FROM categories WHERE slug = 'sports-nutrition'),
  'dupe', 17.95, 100, true, true, true, ARRAY['cGMP', 'ISO Tested'],
  'Micronized creatine monohydrate at 5g per serving. cGMP-certified and ISO-tested for purity. Identical active ingredient to Thorne at a fraction of the cost.',
  'https://example.com/nutricost-creatine-affiliate', true, 100.0,
  (SELECT id FROM products WHERE slug = 'thorne-creatine-monohydrate'),
  null, 4.6
ON CONFLICT (slug) DO NOTHING;

INSERT INTO products (name, slug, brand, category_id, type, price, servings_per_container, cgmp_certified, fda_registered, third_party_tested, certifications, description, affiliate_url, affiliate_active, match_percentage, benchmark_id, image_url, rating)
SELECT
'Bulk Supplements Creatine', 'bulk-supplements-creatine', 'BulkSupplements',
  (SELECT id FROM categories WHERE slug = 'sports-nutrition'),
  'dupe', 15.96, 100, true, true, true, ARRAY['cGMP', 'Third-party tested'],
  'Pure micronized creatine monohydrate powder. cGMP-certified and third-party tested. Same active ingredient as premium brands at the lowest cost-per-serving.',
  'https://example.com/bulksupplements-creatine-affiliate', true, 100.0,
  (SELECT id FROM products WHERE slug = 'thorne-creatine-monohydrate'),
  null, 4.5
ON CONFLICT (slug) DO NOTHING;

INSERT INTO products (name, slug, brand, category_id, type, price, servings_per_container, cgmp_certified, fda_registered, third_party_tested, certifications, description, affiliate_url, affiliate_active, match_percentage, benchmark_id, image_url, rating)
SELECT
'NutriDupe Pure Creatine', 'nutridupe-pure-creatine', 'NutriDupe Labs',
  (SELECT id FROM categories WHERE slug = 'sports-nutrition'),
  'dupe', 14.99, 100, true, true, true, ARRAY['NSF', 'cGMP', 'USP'],
  'NSF-certified micronized creatine monohydrate. 5g per serving with third-party verification of purity and potency. Identical active to Thorne at the lowest cost.',
  'https://example.com/nutridupe-creatine-affiliate', true, 100.0,
  (SELECT id FROM products WHERE slug = 'thorne-creatine-monohydrate'),
  null, 4.7
ON CONFLICT (slug) DO NOTHING;

-- Now link product_ingredients

-- AG1 ingredients (benchmark)
INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 1000, 100 FROM products p, ingredients i
WHERE p.slug = 'athletic-greens-ag1' AND i.slug = 'vitamin-d3-cholecalciferol'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 80, 100 FROM products p, ingredients i
WHERE p.slug = 'athletic-greens-ag1' AND i.slug = 'vitamin-k2-mk-7'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 200, 50 FROM products p, ingredients i
WHERE p.slug = 'athletic-greens-ag1' AND i.slug = 'magnesium-glycinate'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 500, 100 FROM products p, ingredients i
WHERE p.slug = 'athletic-greens-ag1' AND i.slug = 'vitamin-c-ascorbic-acid'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 3, 120 FROM products p, ingredients i
WHERE p.slug = 'athletic-greens-ag1' AND i.slug = 'vitamin-b12-methylcobalamin'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 800, 200 FROM products p, ingredients i
WHERE p.slug = 'athletic-greens-ag1' AND i.slug = 'folate-mthf'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 15, 100 FROM products p, ingredients i
WHERE p.slug = 'athletic-greens-ag1' AND i.slug = 'zinc-picolinate'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 7.2, 30 FROM products p, ingredients i
WHERE p.slug = 'athletic-greens-ag1' AND i.slug = 'lactobacillus'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 3.6, 15 FROM products p, ingredients i
WHERE p.slug = 'athletic-greens-ag1' AND i.slug = 'bifidobacterium'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

-- NutriDupe Daily Greens (AG1 dupe)
INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 1000, 100 FROM products p, ingredients i
WHERE p.slug = 'nutridupe-daily-greens' AND i.slug = 'vitamin-d3-cholecalciferol'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 80, 100 FROM products p, ingredients i
WHERE p.slug = 'nutridupe-daily-greens' AND i.slug = 'vitamin-k2-mk-7'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 200, 50 FROM products p, ingredients i
WHERE p.slug = 'nutridupe-daily-greens' AND i.slug = 'magnesium-glycinate'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 500, 100 FROM products p, ingredients i
WHERE p.slug = 'nutridupe-daily-greens' AND i.slug = 'vitamin-c-ascorbic-acid'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 3, 120 FROM products p, ingredients i
WHERE p.slug = 'nutridupe-daily-greens' AND i.slug = 'vitamin-b12-methylcobalamin'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 800, 200 FROM products p, ingredients i
WHERE p.slug = 'nutridupe-daily-greens' AND i.slug = 'folate-mthf'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 15, 100 FROM products p, ingredients i
WHERE p.slug = 'nutridupe-daily-greens' AND i.slug = 'zinc-picolinate'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 5, 20 FROM products p, ingredients i
WHERE p.slug = 'nutridupe-daily-greens' AND i.slug = 'lactobacillus'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 2.5, 10 FROM products p, ingredients i
WHERE p.slug = 'nutridupe-daily-greens' AND i.slug = 'bifidobacterium'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

-- Live it Up Greens (AG1 dupe)
INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 800, 100 FROM products p, ingredients i
WHERE p.slug = 'live-it-up-super-greens' AND i.slug = 'vitamin-d3-cholecalciferol'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 400, 80 FROM products p, ingredients i
WHERE p.slug = 'live-it-up-super-greens' AND i.slug = 'vitamin-c-ascorbic-acid'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 10, 67 FROM products p, ingredients i
WHERE p.slug = 'live-it-up-super-greens' AND i.slug = 'zinc-picolinate'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 3, 120 FROM products p, ingredients i
WHERE p.slug = 'live-it-up-super-greens' AND i.slug = 'vitamin-b12-methylcobalamin'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 2, 8 FROM products p, ingredients i
WHERE p.slug = 'live-it-up-super-greens' AND i.slug = 'lactobacillus'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

-- Seed DS-01 ingredients (benchmark)
INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 10, null FROM products p, ingredients i
WHERE p.slug = 'seed-ds-01-daily-synbiotic' AND i.slug = 'lactobacillus'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 5, null FROM products p, ingredients i
WHERE p.slug = 'seed-ds-01-daily-synbiotic' AND i.slug = 'bifidobacterium'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 3, null FROM products p, ingredients i
WHERE p.slug = 'seed-ds-01-daily-synbiotic' AND i.slug = 'prebiotic-fiber'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

-- NutriDupe Synbiotic (Seed dupe)
INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 10, null FROM products p, ingredients i
WHERE p.slug = 'nutridupe-synbiotic-complete' AND i.slug = 'lactobacillus'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 5, null FROM products p, ingredients i
WHERE p.slug = 'nutridupe-synbiotic-complete' AND i.slug = 'bifidobacterium'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 3, null FROM products p, ingredients i
WHERE p.slug = 'nutridupe-synbiotic-complete' AND i.slug = 'prebiotic-fiber'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

-- NOW Optimal Probiotic (Seed dupe)
INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 8, null FROM products p, ingredients i
WHERE p.slug = 'now-optimal-probiotic' AND i.slug = 'lactobacillus'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 4, null FROM products p, ingredients i
WHERE p.slug = 'now-optimal-probiotic' AND i.slug = 'bifidobacterium'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 2, null FROM products p, ingredients i
WHERE p.slug = 'now-optimal-probiotic' AND i.slug = 'prebiotic-fiber'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

-- Thorne Creatine ingredients (benchmark)
INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 5000, null FROM products p, ingredients i
WHERE p.slug = 'thorne-creatine-monohydrate' AND i.slug = 'creatine-monohydrate'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

-- Nutricost Creatine (Thorne dupe)
INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 5000, null FROM products p, ingredients i
WHERE p.slug = 'nutricost-creatine-monohydrate' AND i.slug = 'creatine-monohydrate'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

-- Bulk Supplements Creatine (Thorne dupe)
INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 5000, null FROM products p, ingredients i
WHERE p.slug = 'bulk-supplements-creatine' AND i.slug = 'creatine-monohydrate'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;

-- NutriDupe Pure Creatine (Thorne dupe)
INSERT INTO product_ingredients (product_id, ingredient_id, amount_mg, daily_value_percent)
SELECT p.id, i.id, 5000, null FROM products p, ingredients i
WHERE p.slug = 'nutridupe-pure-creatine' AND i.slug = 'creatine-monohydrate'
ON CONFLICT (product_id, ingredient_id) DO NOTHING;