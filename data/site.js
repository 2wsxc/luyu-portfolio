/* 站点级配置：姓名、身份、联系方式、导航与功能开关 */
window.SITE_DATA = window.SITE_DATA || {};

window.SITE_DATA.site = {
  name: "陆屿",
  nameEn: "LU YU",
  role: "风光摄影师 / 摄像与延时",
  direction: "自然 · 城市 · 延时",
  city: "杭州",
  cityEn: "HANGZHOU · CN",
  email: "luyu@example.com",
  wechat: "luyu_photo",
  heroWorkId: "w-014",
  availability: "2026 年 12 月接受 1 个拍摄项目",
  intro: "以山野与海岸为主要拍摄对象，长期记录光线在自然中的变化。也拍摄短片与延时，为品牌与出版机构提供影像内容。",
  footerNote: "本站全部作品版权归陆屿所有，未经授权请勿转载或商用。",
  copyright: "© 2018—2026 陆屿",
  social: [
    { label: "Instagram", handle: "@luyu.photo", url: "https://www.instagram.com/" },
    { label: "小红书", handle: "陆屿", url: "https://www.xiaohongshu.com/" },
    { label: "B 站", handle: "陆屿的风景", url: "https://www.bilibili.com/" },
    { label: "Vimeo", handle: "luyu", url: "https://vimeo.com/" }
  ],
  nav: [
    { key: "works", label: "作品", href: "works.html" },
    { key: "about", label: "关于", href: "about.html" },
    { key: "resume", label: "简历", href: "resume.html" }
  ],
  features: {
    formOn: false,
    videoHoverPreview: true
  }
};
