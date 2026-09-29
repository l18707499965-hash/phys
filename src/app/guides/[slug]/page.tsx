import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CalendarDays } from 'lucide-react';
import PageHero from '@/components/PageHero';
import DownloadCta from '@/components/DownloadCta';
import { getGuide, guides } from '@/lib/guides';
import { siteConfig } from '@/lib/site';

const baseUrl = siteConfig.url.replace(/\/$/, '');

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getGuide(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${baseUrl}/guides/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${baseUrl}/guides/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updated,
    },
  };
}

export default async function GuideDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getGuide(slug);
  if (!post) notFound();

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首页', item: `${baseUrl}/` },
      { '@type': 'ListItem', position: 2, name: '使用教程', item: `${baseUrl}/guides` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${baseUrl}/guides/${post.slug}` },
    ],
  };

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated,
    author: { '@type': 'Organization', name: siteConfig.name },
    publisher: { '@type': 'Organization', name: siteConfig.name },
    url: `${baseUrl}/guides/${post.slug}`,
  };

  const related = guides.filter((g) => g.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={post.title}
        subtitle={post.description}
        crumbs={[{ label: '首页', href: '/' }, { label: '使用教程', href: '/guides' }, { label: post.title }]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />

      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-slate-400">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="size-4" /> 发布于 {post.date}
          </span>
          <span>·</span>
          <span>更新于 {post.updated}</span>
        </div>

        <div className="space-y-5">
          {post.content.map((para, idx) => (
            <p key={idx} className="leading-relaxed text-slate-600">
              {para.split('**').map((seg, i) =>
                i % 2 === 1 ? (
                  <strong key={i} className="font-semibold text-slate-800">
                    {seg}
                  </strong>
                ) : (
                  seg
                ),
              )}
            </p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
              #{t}
            </span>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
          <p className="font-semibold text-slate-700">相关阅读</p>
          <ul className="mt-3 space-y-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/guides/${r.slug}`} className="text-sm text-blue-600 hover:underline">
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link href="/guides" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600">
          <ArrowLeft className="size-4" /> 返回使用教程
        </Link>
      </article>

      <DownloadCta title="教程已就绪，就差你来体验" subtitle={`${siteConfig.name} 安卓版免费下载，高清追剧从今天开始`} />
    </>
  );
}