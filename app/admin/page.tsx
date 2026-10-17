import { getAllProductsWithIngredients, getCategories } from '@/lib/data';
import { AdminDashboard } from '@/components/admin/admin-dashboard';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const [products, categories] = await Promise.all([
    getAllProductsWithIngredients(),
    getCategories(),
  ]);

  return <AdminDashboard initialProducts={products} categories={categories} />;
}