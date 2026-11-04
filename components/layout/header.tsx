"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Search, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-85">
          {/* Green Rounded Square with Leaf Icon */}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1b8a5a] text-white shadow-sm">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5 4.5c-3.5 0-6.5 1.5-8.5 4.5-2 3-2.5 6.5-2 8.5 0.2 0.8 0.8 1.4 1.6 1.6 2 0.5 5.5 0 8.5-2 3-2 4.5-5 4.5-8.5 0-2.5-1-4.1-4.1-4.1zm-7.2 11.2c-2.4-2.4-2.8-5.8-1.5-7.6 1.8-1.3 5.2-0.9 7.6 1.5 2.1 2.1 2.6 5.1 1.6 6.8-0.2 0.3-0.5 0.6-0.8 0.8-1.7 1-4.7 0.5-6.9-1.5z" />
              <path d="M8.5 15.5C7 14 6 11.5 6 9c0 0-2 1-3 3s-1 4 0 5.5 3 2 5.5 2c0 0-0.5-2-0-4z" />
            </svg>
          </div>

          {/* Brand Name with Leaf on the 'i' and Subtitle */}
          <div className="flex flex-col">
            <div className="flex items-center text-xl font-bold tracking-tight text-[#111827] leading-none">
              Nutr
              <span className="relative inline-block mx-[1px]">
                {/* Custom Leaf replacing the dot on 'i' */}
                <svg className="absolute -top-3.5 -left-1.5 h-3.5 w-3.5 text-[#1b8a5a]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 5.5 4.5 10 10 10 5.5 0 10-4.5 10-10C22 6.5 17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8 0-4.4 3.6-8 8-8s8 3.6 8 8c0 4.4-3.6 8-8 8z"/>
                  <path d="M12 6c-3.3 0-6 2.7-6 6 0 3.3 2.7 6 6 6s6-2.7 6-6c0-3.3-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
                </svg>
                i
              </span>
              Dupe
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6b7280] mt-1">
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
