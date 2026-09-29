'use client';

import { Download, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';

interface DownloadButtonProps {
  /** 按钮形态：hero 为大号主按钮，默认 outline 风格 */
  variant?: 'hero' | 'default';
  /** hero 按钮是否使用白色高对比样式（用于深色/渐变背景区） */
  light?: boolean;
  className?: string;
  label?: string;
}

/**
 * 安卓下载按钮
 * 统一收敛下载链路：href 保持 APK 原始链接，附带 data-stat-id 供下载统计使用。
 */
export default function DownloadButton({
  variant = 'default',
  light = false,
  className,
  label = '安卓立即下载',
}: DownloadButtonProps) {
  const handleClick = () => {
    // 埋点占位：接入下载统计时在此上报统计 ID，不影响下载本身
    if (typeof window !== 'undefined' && siteConfig.statId) {
      window.dataLayer = window.dataLayer || [];
      try {
        window.__piaohua_download = (window.__piaohua_download || 0) + 1;
        window.dataLayer.push({
          event: 'apk_download',
          stat_id: siteConfig.statId,
          apk_url: siteConfig.apkUrl,
        });
      } catch {
        /* 静默失败，不阻断下载 */
      }
    }
  };

  if (variant === 'hero') {
    return (
      <a
        href={siteConfig.apkUrl}
        onClick={handleClick}
        data-stat-id={siteConfig.statId}
        data-stat-url={siteConfig.apkUrl}
        aria-label="下载飘花影视安卓版"
        className={cn(
          light
            ? 'group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-700 shadow-xl shadow-blue-900/20'
            : 'group inline-flex items-center gap-3 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 px-8 py-4 text-base font-semibold text-white btn-download-glow',
          className,
        )}
      >
        <Download className="size-6 transition-transform group-hover:translate-y-0.5" />
        {label}
      </a>
    );
  }

  return (
    <Button
      asChild
      variant={variant === 'default' ? 'default' : 'secondary'}
      className={cn('gap-2 rounded-full px-5 h-11', className)}
    >
      <a
        href={siteConfig.apkUrl}
        onClick={handleClick}
        data-stat-id={siteConfig.statId}
        data-stat-url={siteConfig.apkUrl}
        aria-label="下载飘花影视安卓版"
      >
        <Smartphone className="size-4" />
        {label}
      </a>
    </Button>
  );
}