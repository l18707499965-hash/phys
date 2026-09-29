import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MessageSquare, Smartphone } from 'lucide-react';
import PageHero from '@/components/PageHero';
import DownloadCta from '@/components/DownloadCta';
import { siteConfig } from '@/lib/site';

const baseUrl = siteConfig.url.replace(/\/$/, '');

export const metadata: Metadata = {
  title: '联系我们',
  description: '如在使用飘花影视过程中遇到问题或有任何建议，欢迎通过以下方式联系我们，我们会尽快回复。',
  alternates: { canonical: `${baseUrl}/contact` },
};

const channels = [
  {
    icon: Mail,
    title: '邮件联系',
    desc: '意见反馈、合作洽谈',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MessageSquare,
    title: '在线客服',
    desc: '下载、安装、播放问题',
    value: '打开 App 内“我的 → 联系客服”',
  },
  {
    icon: Smartphone,
    title: '官方社区',
    desc: '新片资讯、版本公告',
    value: '建议关注站内公告与更新日志',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="联系我们"
        subtitle="无论是问题反馈还是合作意向，我们都很乐意倾听你的声音。"
        crumbs={[{ label: '首页', href: '/' }, { label: '联系我们' }]}
      />

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-3">
          {channels.map((c) => (
            <div key={c.title} className="card-hover rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <c.icon className="size-6" />
              </div>
              <h2 className="mt-4 font-bold text-slate-800">{c.title}</h2>
              <p className="mt-1 text-sm text-slate-400">{c.desc}</p>
              {c.href ? (
                <a href={c.href} className="mt-3 inline-block text-sm font-medium text-blue-600 hover:underline">
                  {c.value}
                </a>
              ) : (
                <p className="mt-3 text-sm font-medium text-slate-600">{c.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-100 bg-slate-50/60 p-8 text-center">
          <h2 className="text-xl font-extrabold text-slate-900">追剧遇到问题？</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
            关于下载、安装、播放等常见问题，可先前往常见问题中心或使用教程查看，多数情况可快速自助解决。
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <Link
              href="/faq"
              className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              查看常见问题
            </Link>
            <Link
              href="/guides"
              className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              使用教程
            </Link>
          </div>
        </div>
      </section>

      <DownloadCta title="遇到问题，下载看看" subtitle={`${siteConfig.name} 安卓版免费下载，沉浸式高清体验`} />
    </>
  );
}