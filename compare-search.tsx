"use client";

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function CompareSearch({ initialQuery }: { initialQuery: string }) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (query.trim()) {
      params.set('q', query.trim());
    } else {
      params.delete('q');
    }
    router.push(`/compare?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search supplements or active ingredients..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-12 pl-11 pr-10 text-base"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              router.push('/compare');
            }}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      <Button type="submit" size="lg" className="h-12 px-6">
        Search
      </Button>
    </form>
  );
}