'use client';

import { useState, useMemo } from 'react';

interface Product {
  id: string;
  name: string;
  brand: string;
  type: 'benchmark' | 'dupe';
  price: number;
  pricePerServing: number;
  matchPercentage?: number;
  affiliateStatus: 'Active' | 'Inactive';
  category: string;
}

// Sample product dataset matching your dashboard structure
const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Thorne Basic Nutrients 2/Day',
    brand: 'Thorne Research',
    type: 'benchmark',
    price: 32.00,
    pricePerServing: 1.07,
    affiliateStatus: 'Active',
    category: 'Multivitamins',
  },
  {
    id: '2',
    name: 'NutriDupe Organic Greens & Superfoods',
    brand: 'NutriDupe Labs',
    type: 'dupe',
    price: 29.99,
    pricePerServing: 1.00,
    matchPercentage: 94,
    affiliateStatus: 'Active',
    category: 'Superfoods',
  },
  {
    id: '3',
    name: 'NutriDupe Nighttime Recovery Brew',
    brand: 'NutriDupe Labs',
    type: 'dupe',
    price: 39.99,
    pricePerServing: 1.33,
    matchPercentage: 93,
    affiliateStatus: 'Active',
    category: 'Sleep & Recovery',
  },
  {
    id: '4',
    name: 'NutriDupe Nootropic Focus Complex',
    brand: 'NutriDupe Labs',
    type: 'dupe',
    price: 34.99,
    pricePerServing: 1.17,
    matchPercentage: 91,
    affiliateStatus: 'Active',
    category: 'Nootropics',
  },
];

export default function AdminDashboard() {
  const [products] = useState<Product[]>(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState<'all' | 'benchmark' | 'dupe'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  // Extract unique categories for filter dropdown
  const categories = useMemo(() => {
    return Array.from(new Set(products.map((p) => p.category)));
  }, [products]);

  // Tab count calculations
  const counts = useMemo(() => {
    return {
      all: products.length,
      benchmark: products.filter((p) => p.type === 'benchmark').length,
      dupe: products.filter((p) => p.type === 'dupe').length,
    };
  }, [products]);

  // Filtered dataset evaluation
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Tab filter
      if (selectedTab !== 'all' && product.type !== selectedTab) return false;

      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;

      // Affiliate status filter
      if (selectedStatus !== 'all' && product.affiliateStatus.toLowerCase() !== selectedStatus) return false;

      // Text search
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const nameMatch = product.name.toLowerCase().includes(query);
        const brandMatch = product.brand.toLowerCase().includes(query);
        if (!nameMatch && !brandMatch) return false;
      }

      return true;
    });
  }, [products, selectedTab, selectedCategory, selectedStatus, searchTerm]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTab('all');
    setSelectedCategory('all');
    setSelectedStatus('all');
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-sm text-gray-500">Manage products, affiliate links, and search catalog.</p>
        </div>
        <button className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-sm rounded-lg shadow transition">
          + Add Product
        </button>
      </div>

      {/* Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-xs text-gray-500 font-medium">Total Products</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{products.length}</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-xs text-gray-500 font-medium">Active Affiliate Links</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">
            {products.filter((p) => p.affiliateStatus === 'Active').length}
          </p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-xs text-gray-500 font-medium">Avg. Match Percentage</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">92.3%</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-xs text-gray-500 font-medium">Categories</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{categories.length}</p>
        </div>
      </div>

      {/* Controls Container */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm space-y-4">
        {/* Search & Select Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {/* Search Field */}
          <div className="md:col-span-2">
            <input
              type="text"
              placeholder="Search by product name or brand..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Category Select */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3.5 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Status Select */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3.5 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="all">All Statuses</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Tabs & Active Filter Clearer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-gray-100 pt-3">
          <div className="flex gap-1.5">
            <button
              onClick={() => setSelectedTab('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                selectedTab === 'all'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Products ({counts.all})
            </button>
            <button
              onClick={() => setSelectedTab('benchmark')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                selectedTab === 'benchmark'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Benchmarks ({counts.benchmark})
            </button>
            <button
              onClick={() => setSelectedTab('dupe')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                selectedTab === 'dupe'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Dupes ({counts.dupe})
            </button>
          </div>

          {(searchTerm || selectedCategory !== 'all' || selectedStatus !== 'all' || selectedTab !== 'all') && (
            <button
              onClick={clearFilters}
              className="text-xs text-emerald-700 font-medium hover:underline self-start sm:self-auto"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-x-auto">
        <table className="w-full text-left text-xs text-gray-700">
          <thead className="bg-gray-50 border-b border-gray-100 font-semibold text-gray-600">
            <tr>
              <th className="p-3.5">Product</th>
              <th className="p-3.5">Type</th>
              <th className="p-3.5">Price ($)</th>
              <th className="p-3.5">$/Serving</th>
              <th className="p-3.5">Match</th>
              <th className="p-3.5">Affiliate</th>
              <th className="p-3.5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50/80 transition">
                  <td className="p-3.5">
                    <div className="font-semibold text-gray-900 text-sm">{p.name}</div>
                    <div className="text-gray-400 text-xs">{p.brand}</div>
                  </td>
                  <td className="p-3.5">
                    <span
                      className={`px-2 py-0.5 rounded-md font-semibold text-[10px] uppercase tracking-wider ${
                        p.type === 'benchmark'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {p.type}
                    </span>
                  </td>
                  <td className="p-3.5 font-medium">{p.price.toFixed(2)}</td>
                  <td className="p-3.5 font-medium">{p.pricePerServing.toFixed(2)}</td>
                  <td className="p-3.5 font-medium">{p.matchPercentage ? `${p.matchPercentage}%` : '—'}</td>
                  <td className="p-3.5">
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">
                      ● {p.affiliateStatus}
                    </span>
                  </td>
                  <td className="p-3.5 text-right space-x-2">
                    <button className="text-gray-500 hover:text-emerald-700 font-medium">Edit</button>
                    <button className="text-red-500 hover:text-red-700 font-medium">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="p-8 text-center text-gray-400">
                  No products matched your search filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
