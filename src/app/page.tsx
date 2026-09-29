import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Clapperboard,
  Download,
  Film,
  Gauge,
  Leaf,
  MonitorPlay,
  PlaySquare,
  ShieldCheck,
  Sparkles,
  Tv,
  CheckCircle2,
  TrendingUp,
  Smartphone,
  Layers,
} from 'lucide-react';
import DownloadButton from '@/components/DownloadButton';
import Petals from '@/components/Petals';
import { siteConfig } from '@/lib/site';

const baseUrl = siteConfig.url.replace(/\/$/, '');

export const metadata: Metadata = {
  title: '飘花影视 - 高清影视播放App，免费畅享海量影视资源',
  description:
    '飘花影视是一款高清影视播放App，聚合海量电影、电视剧、综艺、动漫资源，高清画质、极速流畅、免费观看，支持离线缓存。点击立即下载飘花影视安卓版。',
  keywords: siteConfig.keywords,
  alternates: { canonical: `${baseUrl}/` },
};

const stats = [
  { value: '20万+', label: '影视片库资源' },
  { value: '蓝光4K', label: '高清画质' },
  { value: '99.9%', label: '稳定流畅率' },
  { value: '免费', label: '免费畅享' },
];

const features = [
  {
    icon: Film,
    title: '海量片库',
    desc: '聚合电影、电视剧、综艺、动漫、纪录片等百万级资源，热门新片同步更新，想看的这里都有。',
  },
  {
    icon: MonitorPlay,
    title: '高清蓝光',
    desc: '支持蓝光、超清、高清多档画质，智能匹配网络，细节清晰、色彩出众，观影体验更沉浸。',
  },
  {
    icon: Gauge,
    title: '极速流畅',
    desc: '自研智能播放内核，毫秒级起播、平滑缓冲，搭配多线路自动切换，卡顿从此与你无关。',
  },
  {
    icon: Download,
    title: '离线缓存',
    desc: '支持一键缓存到本地，地铁、航班、无网络也能随时观看，精彩内容随身带走。',
  },
  {
    icon: Smartphone,
    title: '轻巧省心',
    desc: '安装包轻量、启动迅速，界面简洁清爽，操作顺滑，长辈小孩都能轻松上手。',
  },
  {
    icon: ShieldCheck,
    title: '安全纯净',
    desc: '全站资源经安全校验，无弹窗骚扰、无恶意捆绑，给你安安心心的追剧体验。',
  },
];

const categories = [
  { icon: Clapperboard, name: '电影', desc: '院线大片 · 高分经典' },
  { icon: Tv, name: '电视剧', desc: '热播剧集 · 同步更新' },
  { icon: PlaySquare, name: '综艺', desc: '热门综艺 · 真人秀' },
  { icon: Sparkles, name: '动漫', desc: '二次元 · 新番国漫' },
];

export default function HomePage() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-brand-gradient-soft">
        <Petals />
        <div className="animate-float-slow pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-gradient-to-br from-cyan-300/40 to-blue-400/40 blur-3xl" />
        <div className="animate-float-slow pointer-events-none absolute -left-24 bottom-0 size-80 rounded-full bg-gradient-to-tr from-purple-300/40 to-pink-300/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-20 pt-16 sm:px-6 md:grid-cols-2 md:pb-28 md:pt-24">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/70 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-slate-600 backdrop-blur">
              <Sparkles className="size-3.5 text-pink-500" />
              安卓官方正版下载 · 永久免费
            </span>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              高清追剧，畅享精彩
              <br />
              <span className="text-brand-gradient">飘花影视</span>一路相伴
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-600">
              聚合海量电影、剧集、综艺、动漫资源，高清蓝光纵情观看，极速流畅免费畅享。下载飘花影视安卓版，把整个片库装进口袋。
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <DownloadButton variant="hero" label="安卓立即下载" />
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="size-4 text-emerald-500" /> 安全无绑定
                </span>
                <span className="flex items-center gap-1">
                  <Leaf className="size-4 text-cyan-500" /> 免费追剧
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-500">
              <span className="rounded-full bg-white/80 px-3 py-1">版本 {siteConfig.version}</span>
              <span className="rounded-full bg-white/80 px-3 py-1">安卓 Android</span>
              <span className="rounded-full bg-white/80 px-3 py-1">安装包约 16MB</span>
            </div>
          </div>

          {/* App 形象展示 */}
          <div className="relative mx-auto flex max-w-sm items-center justify-center">
            <div className="animate-spin-slow absolute inset-0 -z-10 rounded-[3rem] border-2 border-dashed border-blue-200" aria-hidden />
            <div className="relative rounded-[2.5rem] border border-white/70 bg-white/70 p-5 shadow-2xl shadow-blue-200/50 backdrop-blur">
              <div className="grid gap-4">
                <div className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
                  {/* logo */}
                  <span className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl">
                    <img src="/logo.png" alt="飘花影视" className="size-full object-cover" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-slate-800">飘花影视</p>
                    <p className="truncate text-xs text-slate-400">高清影视播放 · 好评如潮</p>
                  </div>
                  <span className="ml-auto inline-flex shrink-0 items-center gap-1 rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-white">
                    <Download className="size-3" /> 下载
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  {[
                    ['电影', '榜首热映'],
                    ['电视剧', '同步更新'],
                    ['综艺', '爆笑全场'],
                  ].map(([t, s]) => (
                    <div key={t} className="rounded-xl bg-slate-50 p-2.5">
                      <p className="font-semibold text-slate-700">{t}</p>
                      <p className="mt-0.5 text-[10px] text-slate-400">{s}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl bg-brand-gradient-soft p-3 text-xs text-slate-600">
                  <span className="font-semibold text-slate-700">今日推荐：</span>正在热映的高分院线大片与口碑剧集，点开即看。
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 统计条 */}
        <div className="relative mx-auto max-w-6xl border-t border-white/60 px-4 pb-10 sm:px-6">
          <dl className="grid grid-cols-2 gap-6 pt-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="order-2 mt-1 block text-sm text-slate-500">{s.label}</dt>
                <dd className="order-1 bg-brand-gradient bg-clip-text text-2xl font-extrabold text-transparent">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ===== 分类导览 ===== */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">全类型畅享</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">海量内容，总有一款适合你</h2>
          <p className="mt-3 text-slate-500">电影、剧集、综艺、动漫全覆盖，热门新片不断更。</p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {categories.map((c) => (
            <div key={c.name} className="card-hover group rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-brand-gradient-soft text-blue-600 transition-transform group-hover:scale-110">
                <c.icon className="size-7" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-800">{c.name}</h3>
              <p className="mt-1 text-sm text-slate-400">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 功能特色 ===== */}
      <section className="bg-slate-50/70 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">核心优势</p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">为什么选择飘花影视？</h2>
            <p className="mt-3 text-slate-500">从片源到画质，从流畅到安全，用心打磨每一处体验。</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="card-hover rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="flex size-12 items-center justify-center rounded-xl bg-brand-gradient text-white">
                  <f.icon className="size-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-800">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 更新榜/亮点 ===== */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">持续更新</p>
            <h2 className="text-3xl font-extrabold text-slate-900">热门新片、口碑好剧，更新不停歇</h2>
            <p className="leading-relaxed text-slate-500">
              飘花影视的资源团队全天候维护，院线新片、热门剧集、口碑综艺第一时间入库。无论是当下大热的院线佳片，还是值得二刷的经典作品，都能在这里轻松找到。
            </p>
            <ul className="space-y-3">
              {[
                '热门新片与院线大片同步热度更新',
                '多线路智能切换，失效自动择优续播',
                '每日精选推荐，告别选择困难',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-slate-600">
                  <TrendingUp className="mt-0.5 size-5 shrink-0 text-blue-500" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link
                href="/download"
                className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50"
              >
                <Layers className="size-4" /> 去下载体验
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              { tag: '院线', title: '《新片票房榜首》高清热映中', days: '今日更新' },
              { tag: '剧集', title: '年度口碑大剧 全量同步上线', days: '今日更新' },
              { tag: '综艺', title: '热门真人秀第二季 爆笑回归', days: '3天前' },
              { tag: '动漫', title: '人气新番 高清无码畅看', days: '更新中' },
            ].map((n) => (
              <div key={n.title} className="card-hover flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                <span className="shrink-0 rounded-lg bg-brand-gradient px-2.5 py-1 text-xs font-semibold text-white">
                  {n.tag}
                </span>
                <p className="flex-1 truncate text-sm font-medium text-slate-700">{n.title}</p>
                <span className="shrink-0 text-xs text-slate-400">{n.days}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 下载 CTA ===== */}
      <section className="relative overflow-hidden bg-brand-gradient py-16 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="animate-float-slow absolute -right-10 -top-10 size-64 rounded-full bg-white/60 blur-3xl" />
          <div className="animate-float-slow absolute -bottom-16 -left-10 size-72 rounded-full bg-black/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <DownloadButton variant="hero" label="免费下载安卓版" className="mx-auto" />
          <p className="mt-5 text-sm text-white/85">
            支持 Android 手机与平板 · 安全无绑定 · 安装即享高清免费追剧
          </p>
        </div>
      </section>
    </>
  );
}