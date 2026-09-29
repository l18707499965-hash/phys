import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle2,
  Download,
  FileBadge,
  Lock,
  ShieldCheck,
  Smartphone,
  Wifi,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import DownloadButton from '@/components/DownloadButton';
import DownloadCta from '@/components/DownloadCta';
import { siteConfig } from '@/lib/site';

const baseUrl = siteConfig.url.replace(/\/$/, '');

export const metadata: Metadata = {
  title: '飘花影视安卓版下载 - 官方免费下载通道',
  description:
    '飘花影视安卓版官方下载页面。提供飘花影视 APK 最新版免费下载，海量影视资源、高清蓝光画质、极速流畅播放，安全无绑定，安装即享。',
  alternates: { canonical: `${baseUrl}/download` },
  openGraph: {
    title: '飘花影视安卓版下载',
    description: '官方下载通道，海量影视、高清画质、免费畅享。',
    url: `${baseUrl}/download`,
  },
};

const steps = [
  { n: '01', title: '点击下载APK', desc: '点击下方“安卓立即下载”按钮，获取飘花影视.apk 安装包（约16MB）。' },
  { n: '02', title: '允许未知来源', desc: '部分手机会提示允许安装未知来源，开启对应浏览器/文件管理器权限即可。' },
  { n: '03', title: '点击安装', desc: '在通知栏或下载目录找到安装包，点击安装，等待完成。' },
  { n: '04', title: '开始畅享', desc: '点击“打开”进入飘花影视，海量高清资源即刻畅享。' },
];

const safePoints = [
  { icon: ShieldCheck, title: '官方正版', desc: '本网站为飘花影视官方网站，安装包由官方渠道提供。' },
  { icon: Lock, title: '安全无绑定', desc: '纯净化装机，无弹窗广告、无恶意捆绑应用。' },
  { icon: FileBadge, title: '签名校验', desc: '安装包经官方签名，请留意安装时应用的数字签名信息。' },
  { icon: Wifi, title: '断点续传', desc: '下载中断可继续，网络不稳也能保证完成安装。' },
];

const downloadFaq = [
  {
    q: '下载后安装包在哪里？',
    a: '下载完成后，可在手机“通知栏”或文件管理器的“下载/Download”目录中看到“飘花影视.apk”文件，点击即可安装。',
  },
  {
    q: '提示“未知来源”无法安装怎么办？',
    a: '进入手机“设置 → 安全(或应用/更多设置) → 允许安装未知来源应用”，为当前浏览器或文件管理器开启安装权限后重试。',
  },
  {
    q: '飘花影视收费吗？',
    a: '飘花影视永久免费，可自由观看平台内海量影视资源，支持高清/蓝光画质，无隐藏收费。',
  },
  {
    q: '支持平板或电视使用吗？',
    a: '支持 Android 手机与平板安装使用，安装后即可享受高清追剧体验。',
  },
];

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: downloadFaq.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function DownloadPage() {
  return (
    <>
      <PageHero
        title="下载飘花影视安卓版"
        subtitle="官方免费下载通道 · 安全无绑定 · 安装即享高清免费追剧"
        crumbs={[{ label: '首页', href: '/' }, { label: '下载应用' }]}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* 下载主卡片 */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-xl shadow-blue-100/40">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-2 bg-brand-gradient" aria-hidden />
          <div className="mx-auto flex size-20 items-center justify-center overflow-hidden rounded-3xl shadow-md">
            <img src="/logo.png" alt="飘花影视" className="size-full object-cover" />
          </div>
          <h2 className="mt-5 text-2xl font-extrabold text-slate-900">飘花影视 v{siteConfig.version}</h2>
          <p className="mt-2 text-sm text-slate-500">最新安卓版 · 高清影视播放 App</p>
          <div className="mx-auto mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Smartphone className="size-4 text-blue-500" /> Android 5.0+
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Download className="size-4 text-blue-500" /> 大小约 16MB
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle2 className="size-4 text-emerald-500" /> 永久免费
            </div>
          </div>
          <div className="mt-7 flex justify-center">
            <DownloadButton variant="hero" label={`下载 ${siteConfig.apkFileName}`} />
          </div>
          <p className="mt-4 text-xs text-slate-400">下载文件为 APK 安装包，仅支持 Android 系统。</p>
        </div>

        {/* 安装步骤 */}
        <div className="mx-auto mt-14 max-w-4xl">
          <h2 className="text-center text-2xl font-extrabold text-slate-900">四步完成安装</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="card-hover rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <span className="bg-brand-gradient bg-clip-text text-3xl font-extrabold text-transparent">{s.n}</span>
                <h3 className="mt-3 font-bold text-slate-800">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 安全保证 */}
        <div className="mx-auto mt-16 max-w-4xl">
          <h2 className="text-center text-2xl font-extrabold text-slate-900">放心下载，安心使用</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {safePoints.map((p) => (
              <div key={p.title} className="card-hover flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient-soft text-blue-600">
                  <p.icon className="size-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 下载 FAQ */}
        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-center text-2xl font-extrabold text-slate-900">常见问题</h2>
          <div className="mt-6 space-y-3">
            {downloadFaq.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm open:bg-slate-50/60">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-slate-800">
                  {f.q}
                  <span className="text-blue-500 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-400">
            更多细节请查看 <Link href="/faq" className="text-blue-600 hover:underline">常见问题中心</Link>
          </p>
        </div>
      </section>

      <DownloadCta title="还没安装？现在就下载" subtitle="把海量高清片库装进口袋，随时随地免费追剧" />
    </>
  );
}