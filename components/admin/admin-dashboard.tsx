'use client';

import { useState, useEffect, useCallback } from 'react';
import { ShieldCheck, ShoppingBag, ExternalLink, Plus, Pencil, Trash2, X, FlaskConical, DollarSign, Package, Building2, Star, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabase } from '@/lib/supabase';
import { formatCurrency } from '@/lib/data';
import type { Product, Category } from '@/lib/types';

export function AdminDashboard({
  initialProducts,
  categories,
}: {
  initialProducts: Product[];
  categories: Category[];
}) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('products');

  const benchmarks = products.filter((p) => p.type === 'benchmark');
  const dupes = products.filter((p) => p.type === 'dupe');

  const totalAffiliateActive = products.filter((p) => p.affiliate_active).length;
  const avgMatch = dupes.length > 0
    ? (dupes.reduce((sum, d) => sum + (d.match_percentage || 0), 0) / dupes.length).toFixed(1)
    : '0';

  const handleProductSaved = useCallback(async () => {
    const { data: productsData } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    const { data: categoriesData } = await supabase.from('categories').select('*');
    const catMap = new Map(categoriesData?.map((c) => [c.id, c]) || []);

    if (productsData) {
      setProducts(
        productsData.map((p) => ({
          ...p,
          category: catMap.get(p.category_id) || null,
        }))
      );
    }
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product? This action cannot be undone.')) return;
    await supabase.from('products').delete().eq('id', id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold sm:text-3xl">Admin Dashboard</h1>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage products, affiliate links, and monitor platform metrics.
          </p>
        </div>
        <Button onClick={() => setIsAddDialogOpen(true)} className="gap-1.5">
          <Plus className="h-4 w-4" />
          Add Product
        </Button>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatBox icon={Package} label="Total Products" value={products.length} />
        <StatBox icon={TrendingUp} label="Active Affiliate Links" value={totalAffiliateActive} />
        <StatBox icon={Star} label="Avg. Match Percentage" value={`${avgMatch}%`} />
        <StatBox icon={FlaskConical} label="Categories" value={categories.length} />
      </div>

      {/* AdSense Slot */}
      <div className="mb-8 flex min-h-[90px] items-center justify-center rounded-lg border border-dashed border-border bg-muted/50">
        <span className="text-xs uppercase tracking-wider text-muted-foreground">Advertisement — Google AdSense</span>
      </div>

      {/* Products table */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="products">All Products ({products.length})</TabsTrigger>
          <TabsTrigger value="benchmarks">Benchmarks ({benchmarks.length})</TabsTrigger>
          <TabsTrigger value="dupes">Dupes ({dupes.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="products">
          <ProductTable products={products} onEdit={setEditingProduct} onDelete={handleDelete} />
        </TabsContent>
        <TabsContent value="benchmarks">
          <ProductTable products={benchmarks} onEdit={setEditingProduct} onDelete={handleDelete} />
        </TabsContent>
        <TabsContent value="dupes">
          <ProductTable products={dupes} onEdit={setEditingProduct} onDelete={handleDelete} />
        </TabsContent>
      </Tabs>

      {/* Edit Dialog */}
      {editingProduct && (
        <ProductEditDialog
          product={editingProduct}
          categories={categories}
          benchmarks={benchmarks}
          onClose={() => setEditingProduct(null)}
          onSaved={() => {
            setEditingProduct(null);
            handleProductSaved();
          }}
        />
      )}

      {/* Add Dialog */}
      {isAddDialogOpen && (
        <ProductEditDialog
          product={null}
          categories={categories}
          benchmarks={benchmarks}
          onClose={() => setIsAddDialogOpen(false)}
          onSaved={() => {
            setIsAddDialogOpen(false);
            handleProductSaved();
          }}
        />
      )}
    </div>
  );
}

function StatBox({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string | number }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-xs text-muted-foreground">{label}</div>
        </div>
      </div>
    </div>
  );
}

function ProductTable({
  products,
  onEdit,
  onDelete,
}: {
  products: Product[];
  onEdit: (p: Product) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead className="bg-secondary/50">
          <tr className="text-left">
            <th className="px-4 py-3 font-semibold">Product</th>
            <th className="px-4 py-3 font-semibold">Type</th>
            <th className="px-4 py-3 font-semibold">Price</th>
            <th className="px-4 py-3 font-semibold">$/Serving</th>
            <th className="px-4 py-3 font-semibold">Match</th>
            <th className="px-4 py-3 font-semibold">Affiliate</th>
            <th className="px-4 py-3 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-t border-border hover:bg-secondary/30">
              <td className="px-4 py-3">
                <div className="font-medium">{p.name}</div>
                <div className="text-xs text-muted-foreground">{p.brand}</div>
              </td>
              <td className="px-4 py-3">
                <Badge variant={p.type === 'benchmark' ? 'default' : 'secondary'}>
                  {p.type}
                </Badge>
              </td>
              <td className="px-4 py-3">{formatCurrency(p.price)}</td>
              <td className="px-4 py-3 font-medium">{formatCurrency(p.price_per_serving)}</td>
              <td className="px-4 py-3">
                {p.match_percentage !== null ? `${p.match_percentage.toFixed(0)}%` : '—'}
              </td>
              <td className="px-4 py-3">
                {p.affiliate_active ? (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                    <ShoppingBag className="h-3 w-3" /> Active
                  </span>
                ) : (
                  <span className="text-xs text-muted-foreground">Inactive</span>
                )}
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="sm" onClick={() => onEdit(p)}>
                    <Pencil className="h-3.5 w-3.5" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => onDelete(p.id)} className="text-destructive hover:text-destructive">
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProductEditDialog({
  product,
  categories,
  benchmarks,
  onClose,
  onSaved,
}: {
  product: Product | null;
  categories: Category[];
  benchmarks: Product[];
  onClose: () => void;
  onSaved: () => void;
}) {
  const [name, setName] = useState(product?.name || '');
  const [brand, setBrand] = useState(product?.brand || '');
  const [slug, setSlug] = useState(product?.slug || '');
  const [categoryId, setCategoryId] = useState(product?.category_id || '');
  const [type, setType] = useState<'benchmark' | 'dupe'>(product?.type || 'dupe');
  const [price, setPrice] = useState(product?.price?.toString() || '');
  const [servings, setServings] = useState(product?.servings_per_container?.toString() || '30');
  const [cgmp, setCgmp] = useState(product?.cgmp_certified ?? true);
  const [fdaReg, setFdaReg] = useState(product?.fda_registered ?? true);
  const [thirdParty, setThirdParty] = useState(product?.third_party_tested ?? true);
  const [certifications, setCertifications] = useState((product?.certifications || []).join(', '));
  const [description, setDescription] = useState(product?.description || '');
  const [affiliateUrl, setAffiliateUrl] = useState(product?.affiliate_url || '');
  const [affiliateActive, setAffiliateActive] = useState(product?.affiliate_active ?? false);
  const [matchPct, setMatchPct] = useState(product?.match_percentage?.toString() || '');
  const [benchmarkId, setBenchmarkId] = useState(product?.benchmark_id || '');
  const [rating, setRating] = useState(product?.rating?.toString() || '4.0');
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    const payload = {
      name,
      brand,
      slug: slug || name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
      category_id: categoryId || null,
      type,
      price: parseFloat(price) || 0,
      servings_per_container: parseInt(servings) || 1,
      cgmp_certified: cgmp,
      fda_registered: fdaReg,
      third_party_tested: thirdParty,
      certifications: certifications.split(',').map((c) => c.trim()).filter(Boolean),
      description,
      affiliate_url: affiliateUrl || null,
      affiliate_active: affiliateActive,
      match_percentage: matchPct ? parseFloat(matchPct) : null,
      benchmark_id: type === 'dupe' ? (benchmarkId || null) : null,
      rating: parseFloat(rating) || 4.0,
    };

    if (product) {
      await supabase.from('products').update(payload).eq('id', product.id);
    } else {
      await supabase.from('products').insert(payload);
    }

    setSaving(false);
    onSaved();
  };

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{product ? 'Edit Product' : 'Add New Product'}</DialogTitle>
          <DialogDescription>
            {product ? `Update details for ${product.name}` : 'Enter the details for the new product.'}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Product Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g., NutriDupe Daily Greens" />
            </div>
            <div>
              <Label htmlFor="brand">Brand</Label>
              <Input id="brand" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="e.g., NutriDupe Labs" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="slug">Slug (URL)</Label>
              <Input id="slug" value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="auto-generated from name" />
            </div>
            <div>
              <Label>Category</Label>
              <Select value={categoryId} onValueChange={setCategoryId}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((c) => (
                    <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label>Type</Label>
              <Select value={type} onValueChange={(v) => setType(v as 'benchmark' | 'dupe')}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="benchmark">Benchmark (Premium)</SelectItem>
                  <SelectItem value="dupe">Dupe (Alternative)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="price">Price ($)</Label>
              <Input id="price" type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="39.99" />
            </div>
            <div>
              <Label htmlFor="servings">Servings</Label>
              <Input id="servings" type="number" value={servings} onChange={(e) => setServings(e.target.value)} placeholder="30" />
            </div>
          </div>

          {type === 'dupe' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Benchmark Product</Label>
                <Select value={benchmarkId} onValueChange={setBenchmarkId}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select benchmark" />
                  </SelectTrigger>
                  <SelectContent>
                    {benchmarks.map((b) => (
                      <SelectItem key={b.id} value={b.id}>{b.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="match">Match %</Label>
                <Input id="match" type="number" step="0.1" value={matchPct} onChange={(e) => setMatchPct(e.target.value)} placeholder="95.0" />
              </div>
            </div>
          )}

          <div>
            <Label htmlFor="certs">Certifications (comma-separated)</Label>
            <Input id="certs" value={certifications} onChange={(e) => setCertifications(e.target.value)} placeholder="NSF, cGMP, USP" />
          </div>

          <div>
            <Label htmlFor="desc">Description</Label>
            <Textarea id="desc" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Product description..." rows={3} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="affiliate">Affiliate URL</Label>
              <Input id="affiliate" value={affiliateUrl} onChange={(e) => setAffiliateUrl(e.target.value)} placeholder="https://..." />
            </div>
            <div>
              <Label htmlFor="rating">Rating (0-5)</Label>
              <Input id="rating" type="number" step="0.1" min="0" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Switch checked={cgmp} onCheckedChange={setCgmp} id="cgmp" />
              <Label htmlFor="cgmp">cGMP Certified</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch checked={fdaReg} onCheckedChange={setFdaReg} id="fda" />
              <Label htmlFor="fda">FDA-Registered</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch checked={thirdParty} onCheckedChange={setThirdParty} id="3p" />
              <Label htmlFor="3p">3rd-Party Tested</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch checked={affiliateActive} onCheckedChange={setAffiliateActive} id="aff" />
              <Label htmlFor="aff">Affiliate Active</Label>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSave} disabled={saving}>
            {saving ? 'Saving...' : product ? 'Save Changes' : 'Add Product'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
