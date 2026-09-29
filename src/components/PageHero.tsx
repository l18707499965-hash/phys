import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Petals from '@/components/Petals';

interface Crumb {
  label: string;
  href?: string;
}

export default function PageHero({
  title,
  subtitle,
  crumbs,
}: {
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-brand-gradient-soft">
      <Petals count={10} />
      <div className="pointer-events-none absolute -right-16 -top-16 size-72 rounded-full bg-gradient-to-br from-cyan-200/50 to-blue-300/50 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 md:py-20">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="面包屑" className="mb-4 flex items-center justify-center gap-1.5 text-sm text-slate-500">
            {crumbs.map((c, i) => (
              <React.Fragment key={c.label}>
                {i > 0 && <ChevronRight className="size-4 text-slate-300" aria-hidden />}
                {c.href ? (
                  <Link href={c.href} className="hover:text-blue-600">
                    {c.label}
                  </Link>
                ) : (
                  <span className="font-medium text-slate-800">{c.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-slate-600">{subtitle}</p>}
      </div>
    </section>
  );
}