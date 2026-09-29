import DownloadButton from '@/components/DownloadButton';

export default function DownloadCta({
  title = '心动不如行动，即刻免费下载',
  subtitle = '支持 Android 手机与平板 · 安全无绑定 · 安装即享高清免费追剧',
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-gradient py-14 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="animate-float-slow absolute -right-10 -top-10 size-56 rounded-full bg-white/60 blur-3xl" />
        <div className="animate-float-slow absolute -bottom-12 -left-8 size-64 rounded-full bg-black/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-3 text-sm text-white/85">{subtitle}</p>
        <div className="mt-6">
          <DownloadButton variant="hero" light label="安卓立即下载" />
        </div>
      </div>
    </section>
  );
}