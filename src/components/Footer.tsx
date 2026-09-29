import Link from 'next/link';
import { Heart, Mail } from 'lucide-react';
import Logo from '@/components/Logo';
import DownloadButton from '@/components/DownloadButton';
import { footerNav, siteConfig } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <Logo size={40} />
              <span className="text-lg font-bold text-foreground">
                飘花<span className="text-brand-gradient">影视</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-slate-500">
              {siteConfig.description.slice(0, 60)}…
            </p>
            <div className="pt-1">
              <DownloadButton label="下载安卓版" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-3">
            <FooterCol title="站点导航" items={footerNav.about} />
            <FooterCol title="帮助支持" items={footerNav.support} />
            <FooterCol title="内容资源" items={footerNav.resources} />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-black/5 pt-6 text-center text-sm text-slate-400 sm:flex-row sm:justify-between">
          <p>
            © {year} {siteConfig.name} 官方网站 · 保留所有权利
          </p>
          <p className="flex items-center gap-1.5">
            <Mail className="size-4" />
            <a href={`mailto:${siteConfig.email}`} className="hover:text-slate-600">
              {siteConfig.email}
            </a>
            <span className="mx-1">·</span>
            <Heart className="size-4 text-pink-400" aria-hidden />
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { title: string; href: string }[];
}) {
  return (
    <nav aria-label={title}>
      <h3 className="mb-3 text-sm font-semibold text-slate-800">{title}</h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.title}>
            <Link href={item.href} className="text-sm text-slate-500 transition-colors hover:text-slate-800">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}