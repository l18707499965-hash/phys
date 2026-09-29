import type { Metadata } from 'next';
import { Award, Flag, HeartHandshake, Target } from 'lucide-react';
import PageHero from '@/components/PageHero';
import DownloadCta from '@/components/DownloadCta';
import { siteConfig } from '@/lib/site';

const baseUrl = siteConfig.url.replace(/\/$/, '');

export const metadata: Metadata = {
  title: '关于我们 - 官方团队介绍',
  description:
    '了解飘花影视：我们致力于为用户提供高清、流畅、免费的影视播放体验，持续扩充片库、打磨产品，让每一份热爱都有处安放。',
  alternates: { canonical: `${baseUrl}/about` },
};

const values = [
  {
    icon: Target,
    title: '我们的使命',
    desc: '让每个人都能轻松、免费地看到心仪的高清影视内容，让追剧没有门槛。',
  },
  {
    icon: Award,
    title: '我们的坚持',
    desc: '持续更新片库、优化播放体验，把“高清、流畅、免费”坚持到底。',
  },
  {
    icon: HeartHandshake,
    title: '我们的承诺',
    desc: '尊重内容版权，营造纯净、无骚扰的观看环境，守护用户的使用体验。',
  },
  {
    icon: Flag,
    title: '我们的方向',
    desc: '不断引入新技术，提升画质与智能推荐体验，成为用户喜爱的影视平台。',
  },
];

const milestones = [
  { year: '持续打磨', text: '飘花影视团队长期专注高清影视分发与播放体验优化' },
  { year: '海量内容', text: '累计上线电影、剧集、综艺、动漫等海量高清片源' },
  { year: '稳定运行', text: '多线路架构保障高并发下的流畅与稳定播放' },
  { year: '用户口碑', text: '以免费、高清、纯净的理念赢得广大影视爱好者的喜爱' },
];

const orgLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: baseUrl,
  logo: { '@type': 'ImageObject', url: `${baseUrl}/logo.png` },
  description: metadata.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="关于我们"
        subtitle="关于飘花影视的一点介绍，以及我们一直坚持在做的事。"
        crumbs={[{ label: '首页', href: '/' }, { label: '关于我们' }]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <div className="prose-sm space-y-4 leading-relaxed text-slate-600">
          <p>
            飘花影视是一款面向广大影视爱好者的高清影视播放 App，我们聚合了电影、电视剧、综艺、动漫等多类型优质内容，
            致力于提供“高清、流畅、免费”的观影体验。
          </p>
          <p>
            我们深知，一部好作品值得用最好的方式呈现。因此，飘花影视在片库建设、画质优化、播放稳定等环节不断投入，
            从场景到细节悉心打磨，希望让每一位用户都能沉浸在精彩的视听世界里。
          </p>
          <p>
            未来，飘花影视会继续扩充内容、优化体验，坚守免费与纯净的初心，努力成为大家最顺手、最信赖的追剧伙伴。
          </p>
        </div>

        <h2 className="mt-12 text-center text-2xl font-extrabold text-slate-900">我们的价值观</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="card-hover rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="flex size-12 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <v.icon className="size-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-800">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{v.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-14 text-center text-2xl font-extrabold text-slate-900">成长足迹</h2>
        <ol className="mt-8 space-y-4">
          {milestones.map((m, i) => (
            <li key={m.year} className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-gradient text-xs font-bold text-white">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-bold text-slate-800">{m.year}</h3>
                <p className="mt-1 text-sm text-slate-500">{m.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <DownloadCta title="加入我们一起追剧吧" subtitle={`${siteConfig.name} 安卓版免费下载，高清好剧即刻开播`} />
    </>
  );
}