# AGENTS.md

## 项目概览
飘花影视（Android 高清影视播放 App）官方网站。多页面、SEO 优化、面向百度/谷歌/必应，突出下载转化。

- 主入口：首页 + 下载中心（安卓 APK 下载）
- 内容：功能特色、使用教程（文章列表/详情）、常见问题、关于、联系
- 品牌视觉：蝴蝶×胶片 logo，马卡龙渐变（青蓝→蓝→紫→粉），轻盈清新，见 `DESIGN.md`。

## 技术栈
- Next.js 16（App Router）、React 19、TypeScript 5（strict）
- Tailwind CSS 4、shadcn/ui（`src/components/ui/`）

## 常用命令（仅 pnpm）
- 开发：`pnpm dev`（内部走 `scripts/dev.sh`，读 `DEPLOY_RUN_PORT` 决定端口，默认 5000）
- 构建：`pnpm build`（`scripts/build.sh`）　启动：`pnpm start`（`scripts/start.sh`）
- 检查：`pnpm ts-check`、`pnpm lint`／`pnpm validate`

## 目录结构
```
src/
  app/                 # 路由（layout/首页/下载/功能/教程/常见问题/关于/联系 + sitemap/robots/manifest）
  components/          # Header/Footer/Logo/Petals/PageHero/DownloadCta/DownloadButton + ui/
  lib/                 # site.ts 站点配置 · guides.ts 教程文章数据
  types/global.d.ts    # window 全局类型声明
public/
  logo.png             # 品牌 logo
DESIGN.md              # 设计规范（改样式前先读）
```

## 关键约定
- **站点配置集中在 `src/lib/site.ts`**：路径新增页面时同步更新 `siteConfig.nav`、`footerNav`、`sitemap.ts`。
- **下载链路统一走 `DownloadButton`**：href 保持 APK 原始链接，按钮带 `data-stat-id`（`siteConfig.statId`），点击推送 `dataLayer` 事件；统计 ID 变更只改 `site.ts`。
- **绝对 URL 一律用 `process.env.COZE_PROJECT_DOMAIN_DEFAULT`**（经 `siteConfig.url`），禁止硬编码域名/localhost。
- canonical/openGraph/JSON-LD 已按页面配置；新增页面需补 `metadata`（title/description/canonical）与合适的结构化数据（Article/FAQPage/BreadcrumbList）。
- 设计规范与配色见 `DESIGN.md`，改 UI 前先阅读。

## 注意事项
- 必须用 pnpm，禁止 npm/yarn；`preinstall` 已用 only-allow 强制。
- 禁止在 JSX 里使用 Date.now()/Math.random()/typeof window；动态内容用客户端组件 + useEffect。
- 内部页面跳转用 `next/link` 的 `Link`，不要用 `<a>`（eslint `no-html-link-for-pages`）。