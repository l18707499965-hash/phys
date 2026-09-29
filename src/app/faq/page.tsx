import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import DownloadCta from '@/components/DownloadCta';
import { siteConfig } from '@/lib/site';

const baseUrl = siteConfig.url.replace(/\/$/, '');

export const metadata: Metadata = {
  title: '常见问题解答 - 下载、安装、播放、账号问题',
  description:
    '飘花影视常见问题汇总：下载安装、播放卡顿、离线缓存、清理缓存、更新版本等，帮助你快速解决问题，畅快追剧。',
  alternates: { canonical: `${baseUrl}/faq` },
};

const faqGroups = [
  {
    id: 'install',
    title: '下载与安装',
    items: [
      {
        q: '哪里可以下载飘花影视安卓版？',
        a: '请前往本站首页或“下载中心”页面，点击“安卓立即下载”即可获取官方 APK 安装包。为安全起见，请认准本站官网发布的下载入口。',
      },
      {
        q: '提示无法安装“未知来源”怎么办？',
        a: '进入手机“设置 → 安全/应用 → 允许安装未知来源应用”，为当前浏览器或文件管理器开启安装权限后重新安装即可。',
      },
      {
        q: '安装包下载中断了怎么办？',
        a: '下载支持断点续传，网络恢复后重新点击下载即可继续；也可更换网络后重新下载完整安装包。',
      },
    ],
  },
  {
    id: 'play',
    title: '播放相关',
    items: [
      {
        q: '播放卡顿、缓冲怎么办？',
        a: '可先尝试降低清晰度或开启“智能清晰度”，并保证网络稳定。也可以在“设置 → 播放”中切换播放内核，通常即可解决。',
      },
      {
        q: '视频黑屏但能听到声音？',
        a: '多为播放器渲染问题。请在“设置 → 播放 → 播放内核”中切换为系统播放器或软解播放器后重试。',
      },
      {
        q: '想看蓝光/4K 画质怎么设置？',
        a: '在播放界面点选“清晰度”，选择可用的最高档位（如 蓝光/4K）；设备、网络与片源均支持时即可畅享高清画质。',
      },
    ],
  },
  {
    id: 'account',
    title: '使用与账号',
    items: [
      {
        q: '飘花影视收费吗？',
        a: '飘花影视永久免费，可自由观看站内海量影视资源，支持高清/蓝光画质，无隐藏收费。',
      },
      {
        q: '支持离线缓存吗？',
        a: '支持。在影视详情页点击“缓存”即可将内容下载到本地，无网络时也能观看。',
      },
      {
        q: '如何清理缓存释放空间？',
        a: '进入“我的 → 设置 → 清除缓存”，可一键清理播放缓存；在“离线缓存”中也可管理并删除已下载内容。',
      },
      {
        q: '播放记录会保存吗？',
        a: '会。飘花影视会自动记录你的观看进度与历史，登录账号后可在多设备间同步记录，随时续播。',
      },
    ],
  },
  {
    id: 'update',
    title: '更新与版本',
    items: [
      {
        q: '如何获取最新版本？',
        a: '打开 App 或访问本站“下载中心”，即可获取并更新至最新版本。建议保持自动更新开启，第一时间体验新功能。',
      },
      {
        q: '版本会新增哪些内容？',
        a: '飘花影视持续优化播放流畅度、扩充片库资源并修复已知问题，更新日志详见 App 内公告或本站通知。',
      },
    ],
  },
];

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqGroups.flatMap((g) =>
    g.items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  ),
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="常见问题"
        subtitle="关于下载、安装、播放、账号等问题，这里都有答案。如仍未解决，欢迎联系我们。"
        crumbs={[{ label: '首页', href: '/' }, { label: '常见问题' }]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="space-y-10">
          {faqGroups.map((g) => (
            <div key={g.id} id={g.id} className="scroll-mt-24">
              <h2 className="mb-4 text-xl font-extrabold text-slate-900">{g.title}</h2>
              <div className="space-y-3">
                {g.items.map((f) => (
                  <details key={f.q} className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm open:bg-slate-50/60">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-slate-800">
                      {f.q}
                      <span className="text-blue-500 transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-slate-500">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-slate-400">
          未找到所需答案？前往 <Link href="/contact" className="text-blue-600 hover:underline">联系我们</Link> 获取帮助。
        </p>
      </section>

      <DownloadCta title="更多惊喜，下载亲自体验" subtitle={`${siteConfig.name} 安卓版免费下载，高清追剧从今天开始`} />
    </>
  );
}