import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';
import PageHero from '@/components/PageHero';
import DownloadCta from '@/components/DownloadCta';
import { guideIntro, guides } from '@/lib/guides';
import { siteConfig } from '@/lib/site';

const baseUrl = siteConfig.url.replace(/\/$/, '');

export const metadata: Metadata = {
  title: '使用教程 - 下载安装、高清观影、常见问题指南',
  description: guideIntro,
  alternates: { canonical: `${baseUrl}/guides` },
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '首页', item: `${baseUrl}/` },
    { '@type': 'ListItem', position: 2, name: '使用教程', item: `${baseUrl}/guides` },
  ],
};

export default function GuidesPage() {
  return (
    <>
      <PageHero
        title="使用教程"
        subtitle={guideIntro}
        crumbs={[{ label: '首页', href: '/' }, { label: '使用教程' }]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <div className="grid gap-5">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="card-hover group flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="hidden size-12 shrink-0 items-center justify-center rounded-xl bg-brand-gradient-soft text-blue-600 sm:flex">
                <FileText className="size-6" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  {g.tags.map((t) => (
                    <span key={t} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500">
                      {t}
                    </span>
                  ))}
                  <span className="text-xs text-slate-400">更新于 {g.updated}</span>
                </div>
                <h2 className="mt-2 text-lg font-bold text-slate-800 group-hover:text-blue-600">{g.title}</h2>
                <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-slate-500">{g.description}</p>
              </div>
              <span className="mt-1 shrink-0 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-blue-500">
                <ArrowRight className="size-5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <DownloadCta title="还有疑问？下载体验后一目了然" subtitle={`${siteConfig.name} 安卓版免费下载，高清追剧从今天开始`} />
    </>
  );
}