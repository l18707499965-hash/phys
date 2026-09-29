import type { Metadata } from 'next';
import {
  Bookmark,
  FastForward,
  Film,
  Gauge,
  Heart,
  Languages,
  ListPlus,
  MonitorPlay,
  PlayCircle,
  RotateCcw,
  Search,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import DownloadCta from '@/components/DownloadCta';
import { siteConfig } from '@/lib/site';

const baseUrl = siteConfig.url.replace(/\/$/, '');

export const metadata: Metadata = {
  title: '功能特色 - 高清播放、离线缓存、智能推荐',
  description:
    '飘花影视集海量片库、高清蓝光画质、极速流畅播放、离线缓存、智能推荐、跨端同步等功能于一体。了解一下飘花影视能为你带来怎样的追剧体验。',
  alternates: { canonical: `${baseUrl}/features` },
};

const primaryFeatures = [
  {
    icon: Film,
    title: '海量影视片库',
    desc: '电影、电视剧、综艺、动漫、纪录片多频道聚合，热门新片与经典老片并存，每天都有新内容。',
  },
  {
    icon: MonitorPlay,
    title: '高清蓝光画质',
    desc: '支持蓝光、超清、高清多档画质，智能匹配网络环境，画面细腻、色彩真实，沉浸式观影。',
  },
  {
    icon: Gauge,
    title: '极速流畅播放',
    desc: '自研播放内核快速起播、平滑缓冲，多线路智能切换，弱网下也能保持稳定流畅观看。',
  },
  {
    icon: Smartphone,
    title: '离线缓存下载',
    desc: '一键缓存到本地，无网络也能随时观看。支持后台续传与管理，精彩内容随身携带。',
  },
  {
    icon: Sparkles,
    title: '智能个性推荐',
    desc: '基于观看偏好为你推荐感兴趣的内容，每天精选片单，节省挑选时间。',
  },
  {
    icon: RotateCcw,
    title: '历史记录同步',
    desc: '播放进度自动记录，随时续播不迷路；多设备登录，记录无缝同步。',
  },
];

const secondaryFeatures = [
  { icon: Search, title: '快速检索', desc: '支持片名、演员、导演多维搜索，找片更高效。' },
  { icon: Bookmark, title: '收藏片单', desc: '一键收藏想看的内容，建立专属追剧清单。' },
  { icon: FastForward, title: '倍速播放', desc: '支持 0.5x~3x 多档倍速，学习娱乐两不误。' },
  { icon: ListPlus, title: '选集记忆', desc: '自动记住观看集数与进度，下次打开无缝续播。' },
  { icon: Heart, title: '喜爱偏好', desc: '记录你的喜好标签，推荐更懂你。' },
  { icon: Languages, title: '多语言支持', desc: '字幕配音灵活切换，满足多元观影需求。' },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        title="功能特色"
        subtitle="从片源到画质，从流畅到智能，飘花影视用心打磨每一处细节。"
        crumbs={[{ label: '首页', href: '/' }, { label: '功能特色' }]}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {primaryFeatures.map((f) => (
            <div key={f.title} className="card-hover rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="flex size-12 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <f.icon className="size-6" />
              </div>
              <h2 className="mt-4 text-lg font-bold text-slate-800">{f.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-center text-2xl font-extrabold text-slate-900">更多贴心细节</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {secondaryFeatures.map((f) => (
              <div key={f.title} className="card-hover flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/50 p-4">
                <f.icon className="mt-0.5 size-5 shrink-0 text-blue-500" />
                <div>
                  <h3 className="font-semibold text-slate-800">{f.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 播放体验亮点 */}
        <div className="mt-16 grid items-center gap-8 rounded-3xl bg-slate-50/70 p-8 md:grid-cols-2 md:p-12">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">极致播放体验</p>
            <h2 className="text-2xl font-extrabold text-slate-900">打开即看，畅快不等待</h2>
            <p className="leading-relaxed text-slate-600">
              从点击播放到画面呈现，飘花影视把响应速度优化到毫秒级。智能播放内核能根据当前网络自动选择最佳线路与清晰度，让高清画面稳定呈现，把宝贵的时间都留给精彩的剧情。
            </p>
            <ul className="grid gap-2.5 text-sm text-slate-600 sm:grid-cols-2">
              {['毫秒级快速起播', '弱网智能降质保流畅', '多线路自动续播', '横竖屏随心切换'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <PlayCircle className="size-4 text-blue-500" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-brand-gradient p-6 text-white shadow-lg shadow-blue-200/50">
            <p className="text-sm text-white/80">飘花影视 · 使用秘笈</p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3 rounded-xl bg-white/15 p-3 text-sm">
                <MonitorPlay className="size-5 shrink-0" /> 长按选集可批量缓存
              </li>
              <li className="flex items-center gap-3 rounded-xl bg-white/15 p-3 text-sm">
                <Gauge className="size-5 shrink-0" /> 设置里可调默认播放内核
              </li>
              <li className="flex items-center gap-3 rounded-xl bg-white/15 p-3 text-sm">
                <Search className="size-5 shrink-0" /> 顶部搜索支持演员/导演检索
              </li>
            </ul>
          </div>
        </div>
      </section>

      <DownloadCta
        title="体验这些强大功能"
        subtitle={`${siteConfig.name} 安卓版免费下载，开启高清畅快追剧`}
      />
    </>
  );
}