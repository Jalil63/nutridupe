"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Leaf, Menu, X, Search, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Leaf className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight">NutriDupe</span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Research Platform
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/compare">Compare</NavLink>
          <NavLink href="/categories">Categories</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/blog">Research Guides</NavLink>
          <NavLink href="/research-methodology">Methodology</NavLink>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/admin">
            <Button variant="ghost" size="sm" className="gap-1.5">
              <ShieldCheck className="h-4 w-4" />
              Admin
            </Button>
          </Link>
          <Link href="/compare">
            <Button size="sm" className="gap-1.5">
              <Search className="h-4 w-4" />
              Find Dupes
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            <MobileLink href="/" onClick={() => setMobileOpen(false)}>Home</MobileLink>
            <MobileLink href="/compare" onClick={() => setMobileOpen(false)}>Compare</MobileLink>
            <MobileLink href="/categories" onClick={() => setMobileOpen(false)}>Categories</MobileLink>
            <MobileLink href="/about" onClick={() => setMobileOpen(false)}>About</MobileLink>
            <MobileLink href="/blog" onClick={() => setMobileOpen(false)}>Research Guides</MobileLink>
            <MobileLink href="/research-methodology" onClick={() => setMobileOpen(false)}>Research Methodology</MobileLink>
            <MobileLink href="/admin" onClick={() => setMobileOpen(false)}>Admin Dashboard</MobileLink>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
    >
      {children}
    </Link>
  );
}