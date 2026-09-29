'use client';

import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  opacity: number;
}

const PETAL_COLORS = [
  'rgba(34, 211, 238, 0.75)', // 青
  'rgba(59, 130, 246, 0.7)', // 蓝
  'rgba(139, 92, 246, 0.7)', // 紫
  'rgba(244, 114, 182, 0.7)', // 粉
];

/**
 * 飘花影视 · 漂浮花瓣氛围装饰
 * 仅在客户端渲染，尊重 prefers-reduced-motion（由 CSS 控制）。
 */
export default function Petals({ count = 14 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const list: Petal[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 10 + Math.random() * 12,
      duration: 11 + Math.random() * 12,
      delay: Math.random() * 14,
      color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
      opacity: 0.45 + Math.random() * 0.4,
    }));
    setPetals(list);
  }, [count]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}