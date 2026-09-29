/**
 * 飘花影视 官网统一站点配置
 * 集中管理站点元信息、导航、下载链接与统计 ID，供各页面引用。
 */
export const siteConfig = {
  name: '飘花影视',
  shortName: '飘花影视',
  appName: '飘花影视',
  /** 对外访问域名（运行时注入，禁止硬编码） */
  url:
    process.env.COZE_PROJECT_DOMAIN_DEFAULT ||
    'https://365b45b9-3f09-41e3-ac9a-4222c0eb837e.dev.coze.site',
  locale: 'zh_CN',
  description:
    '飘花影视是一款高清影视播放App，聚合海量电影、电视剧、综艺、动漫资源，支持在线观看与极速下载，片源更新快、画质高、播放流畅，免费畅享万千精彩内容。',
  keywords: [
    '飘花影视',
    '飘花影视App',
    '飘花影视下载',
    '飘花影视安卓版',
    '飘花影视安卓下载',
    '飘花视频',
    '影视App',
    '高清影视',
    '免费追剧',
    '电影在线观看',
    '电视剧App',
    '飘花影视官方下载',
    '飘花影视最新版',
    '影视大全',
    '蓝光影视',
  ],
  /** Android APK 下载链接（URL 编码保留原状） */
  apkUrl:
    'https://bos.liao-hai.chat/yxq/%e9%a3%98%e8%8a%b1%e5%bd%b1%e8%a7%86.apk',
  apkFileName: '飘花影视.apk',
  /** 下载统计 ID */
  statId: 'aaef971e3a5ed7e9dad3c494aa061bf0',
  version: 'v7.8.6',
  email: 'support@example.com',
  supportWechat: '飘花影视官方',
  nav: [
    { title: '首页', href: '/' },
    { title: '功能特色', href: '/features' },
    { title: '使用教程', href: '/guides' },
    { title: '常见问题', href: '/faq' },
    { title: '关于我们', href: '/about' },
    { title: '联系我们', href: '/contact' },
  ],
};

export const footerNav = {
  about: [
    { title: '关于我们', href: '/about' },
    { title: '联系我们', href: '/contact' },
    { title: '功能特色', href: '/features' },
    { title: '使用教程', href: '/guides' },
  ],
  support: [
    { title: '常见问题', href: '/faq' },
    { title: '安卓下载', href: '/download' },
    { title: '播放异常处理', href: '/faq#play' },
    { title: '更新日志', href: '/faq#update' },
  ],
  resources: [
    { title: '热门电影', href: '/features' },
    { title: '热门剧集', href: '/guides' },
    { title: '追剧技巧', href: '/guides' },
    { title: '使用教程', href: '/guides' },
  ],
};