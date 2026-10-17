"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function HomeSearch() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/compare?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="mx-auto max-w-2xl">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search supplements or active ingredients..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-14 border-border bg-background pl-12 pr-10 text-base shadow-sm focus-visible:ring-primary"
            autoFocus
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <Button type="submit" size="lg" className="h-14 px-8 text-base">
          Search
        </Button>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">
        Try: "AG1", "Creatine", "Seed Probiotic", or "Ashwagandha"
      </p>
    </form>
  );
}