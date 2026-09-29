import Image from 'next/image';
import { cn } from '@/lib/utils';

/**
 * 飘花影视 Logo（圆角容器内展示品牌图标）
 */
export default function Logo({
  className,
  size = 44,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm',
        className,
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo.png"
        alt="飘花影视 logo"
        width={size}
        height={size}
        className="object-cover"
        priority
      />
    </span>
  );
}