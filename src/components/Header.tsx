'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';
import DownloadButton from '@/components/DownloadButton';
import { siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label="飘花影视首页">
          <Logo size={38} />
          <span className="text-lg font-bold tracking-tight text-foreground">
            飘花<span className="text-brand-gradient">影视</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="主导航">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'bg-brand-gradient-soft text-slate-800'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <DownloadButton />
          </div>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? '关闭菜单' : '打开菜单'}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-black/5 bg-white/95 px-4 pb-4 pt-2 md:hidden" aria-label="移动端导航">
          <div className="grid gap-1">
            {siteConfig.nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-xl px-4 py-3 text-sm font-medium',
                    active ? 'bg-brand-gradient-soft text-slate-800' : 'text-slate-600 hover:bg-slate-100',
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
            <div className="mt-2">
              <DownloadButton className="w-full" />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}