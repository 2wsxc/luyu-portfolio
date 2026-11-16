/* 作品数据：照片与视频共用一份，type 区分。图片路径为 assets/img/works/<id>.jpg */
(function () {
  window.SITE_DATA = window.SITE_DATA || {};

  window.SITE_DATA.works = [
    /* ── 党龄 · 夏羌拉 · 四川丹巴 · 2026 秋 ───────────────────── */
    {
      id: "w-501", type: "photo", title: "党龄的秋", titleEn: "Autumn at Dangling",
      series: "dang-ling", region: "southwest", season: "autumn", timeOfDay: "sunrise",
      date: "2026-10-24", location: "四川 · 丹巴党龄",
      published: true, featured: true, sortWeight: 96, ratioActual: 0.75, focus: "50% 45%",
      description: "",
      tags: ["秋色", "山谷"]
    },
    {
      id: "w-502", type: "photo", title: "山谷人家", titleEn: "Valley Houses",
      series: "dang-ling", region: "southwest", season: "autumn", timeOfDay: "sunrise",
      date: "2026-10-25", location: "四川 · 丹巴党龄",
      published: true, featured: false, sortWeight: 76, ratioActual: 0.75, focus: "50% 50%",
      description: "",
      tags: ["村落", "晨光"]
    },
    {
      id: "w-503", type: "photo", title: "进沟的路", titleEn: "On the Trail",
      series: "dang-ling", region: "southwest", season: "autumn", timeOfDay: "day",
      date: "2026-10-23", location: "四川 · 丹巴党龄",
      published: true, featured: false, sortWeight: 75, ratioActual: 1.334, focus: "50% 55%",
      description: "",
      tags: ["徒步", "林道"]
    },
    {
      id: "w-504", type: "photo", title: "葫芦海", titleEn: "Hulu Lake",
      series: "dang-ling", region: "southwest", season: "autumn", timeOfDay: "sunrise",
      date: "2026-10-26", location: "四川 · 丹巴党龄",
      published: true, featured: false, sortWeight: 77, ratioActual: 0.667, focus: "50% 50%",
      description: "",
      tags: ["海子", "倒影"]
    },
    {
      id: "w-505", type: "photo", title: "葫芦海 · 静水", titleEn: "Still Water",
      series: "dang-ling", region: "southwest", season: "autumn", timeOfDay: "day",
      date: "2026-10-26", location: "四川 · 丹巴党龄",
      published: true, featured: false, sortWeight: 78, ratioActual: 0.75, focus: "50% 50%",
      description: "",
      tags: ["海子", "秋色"]
    },
    {
      id: "w-506", type: "photo", title: "甲玉拉措", titleEn: "Jiayu Lake",
      series: "dang-ling", region: "southwest", season: "autumn", timeOfDay: "day",
      date: "2026-10-22", location: "四川 · 丹巴党龄",
      published: true, featured: true, sortWeight: 90, ratioActual: 1.5, focus: "50% 50%",
      description: "",
      tags: ["海子", "雪山"]
    },
    {
      id: "w-507", type: "photo", title: "夏羌拉主峰", titleEn: "Xiaqiangla Main Peak",
      series: "dang-ling", region: "southwest", season: "autumn", timeOfDay: "sunrise",
      date: "2026-10-21", location: "四川 · 丹巴党龄",
      published: true, featured: true, sortWeight: 94, ratioActual: 0.667, focus: "50% 40%",
      description: "",
      tags: ["雪山", "日出"]
    },
    {
      id: "w-508", type: "photo", title: "夏羌拉群峰", titleEn: "Xiaqiangla Range",
      series: "dang-ling", region: "southwest", season: "autumn", timeOfDay: "sunset",
      date: "2026-10-21", location: "四川 · 丹巴党龄",
      published: true, featured: false, sortWeight: 88, ratioActual: 1.5, focus: "50% 50%",
      description: "",
      tags: ["雪山", "日落"]
    },

    /* ── 珠峰与后藏 · 西藏 · 2026 春 ─────────────────────────── */
    {
      id: "w-511", type: "photo", title: "珠峰大本营", titleEn: "Everest Base Camp",
      series: "everest", region: "southwest", season: "spring", timeOfDay: "day",
      date: "2026-05-07", location: "西藏 · 定日",
      published: true, featured: false, sortWeight: 89, ratioActual: 1.5, focus: "50% 55%",
      description: "",
      tags: ["珠峰", "高原"]
    },
    {
      id: "w-512", type: "photo", title: "日照金山", titleEn: "Alpenglow",
      series: "everest", region: "southwest", season: "spring", timeOfDay: "sunrise",
      date: "2026-05-08", location: "西藏 · 定日",
      published: true, featured: true, sortWeight: 99, ratioActual: 0.75, focus: "50% 42%",
      description: "",
      tags: ["珠峰", "日照金山", "日出"]
    },
    {
      id: "w-513", type: "photo", title: "羊卓雍错", titleEn: "Yamdrok Lake",
      series: "everest", region: "southwest", season: "spring", timeOfDay: "day",
      date: "2026-05-06", location: "西藏 · 山南",
      published: true, featured: false, sortWeight: 83, ratioActual: 1.5, focus: "50% 50%",
      description: "",
      tags: ["高原湖泊", "蓝"]
    },
    {
      id: "w-514", type: "photo", title: "一个人的高原", titleEn: "Alone on the Plateau",
      series: "everest", region: "southwest", season: "spring", timeOfDay: "day",
      date: "2026-05-09", location: "西藏 · 318 国道",
      published: true, featured: false, sortWeight: 74, ratioActual: 1, focus: "50% 50%",
      description: "",
      tags: ["公路", "高原"]
    },
    {
      id: "w-515", type: "photo", title: "八廓街", titleEn: "Barkhor Street",
      series: "everest", region: "southwest", season: "spring", timeOfDay: "day",
      date: "2026-05-04", location: "西藏 · 拉萨",
      published: true, featured: false, sortWeight: 73, ratioActual: 0.75, focus: "50% 50%",
      description: "",
      tags: ["街拍", "人文"]
    },
    {
      id: "w-516", type: "photo", title: "青藏铁路沿线", titleEn: "Along the Qinghai–Tibet Railway",
      series: "everest", region: "northwest", season: "spring", timeOfDay: "day",
      date: "2026-05-03", location: "青海 · 青藏线",
      published: true, featured: false, sortWeight: 72, ratioActual: 1.777, focus: "50% 50%",
      description: "",
      tags: ["旅途", "高原"]
    },

    /* ── 江城 · 湖北武汉 · 2025—2026 ─────────────────────────── */
    {
      id: "w-521", type: "photo", title: "江城蓝调", titleEn: "Wuhan in Blue",
      series: "wuhan", region: "east", season: "autumn", timeOfDay: "blue_hour",
      date: "2026-11-08", location: "湖北 · 武汉",
      published: true, featured: true, sortWeight: 97, ratioActual: 2.619, focus: "50% 50%",
      description: "",
      tags: ["城市", "蓝调", "接片"]
    },
    {
      id: "w-522", type: "photo", title: "江滩蓝调", titleEn: "Riverside Blue Hour",
      series: "wuhan", region: "east", season: "winter", timeOfDay: "blue_hour",
      date: "2025-12-14", location: "湖北 · 武汉",
      published: true, featured: false, sortWeight: 82, ratioActual: 2.231, focus: "50% 50%",
      description: "",
      tags: ["城市", "蓝调", "接片"]
    },
    {
      id: "w-523", type: "photo", title: "江上的桥", titleEn: "Bridge over the Yangtze",
      series: "wuhan", region: "east", season: "autumn", timeOfDay: "sunset",
      date: "2026-11-09", location: "湖北 · 武汉",
      published: true, featured: false, sortWeight: 81, ratioActual: 1.601, focus: "50% 50%",
      description: "",
      tags: ["长江", "日落"]
    },
    {
      id: "w-524", type: "photo", title: "汉口", titleEn: "Hankou",
      series: "wuhan", region: "east", season: "autumn", timeOfDay: "day",
      date: "2026-11-09", location: "湖北 · 武汉",
      published: true, featured: false, sortWeight: 70, ratioActual: 0.75, focus: "50% 45%",
      description: "",
      tags: ["城市", "街拍"]
    },
    {
      id: "w-525", type: "photo", title: "武昌", titleEn: "Wuchang",
      series: "wuhan", region: "east", season: "autumn", timeOfDay: "day",
      date: "2026-11-09", location: "湖北 · 武汉",
      published: true, featured: false, sortWeight: 69, ratioActual: 0.75, focus: "50% 45%",
      description: "",
      tags: ["城市", "街拍"]
    },
    {
      id: "w-526", type: "photo", title: "站台", titleEn: "Platform",
      series: "wuhan", region: "east", season: "autumn", timeOfDay: "day",
      date: "2026-11-07", location: "湖北 · 武汉",
      published: true, featured: false, sortWeight: 84, ratioActual: 1.599, focus: "50% 50%",
      description: "",
      tags: ["地铁", "几何"]
    },
    {
      id: "w-527", type: "photo", title: "黄鹤楼", titleEn: "Yellow Crane Tower",
      series: "wuhan", region: "east", season: "autumn", timeOfDay: "sunset",
      date: "2026-11-06", location: "湖北 · 武汉",
      published: true, featured: false, sortWeight: 86, ratioActual: 1.6, focus: "50% 50%",
      description: "",
      tags: ["古建", "日落"]
    },
    {
      id: "w-528", type: "photo", title: "古德寺", titleEn: "Gude Temple",
      series: "wuhan", region: "east", season: "autumn", timeOfDay: "day",
      date: "2026-11-06", location: "湖北 · 武汉",
      published: true, featured: false, sortWeight: 80, ratioActual: 1.599, focus: "50% 50%",
      description: "",
      tags: ["古建", "建筑"]
    },
    {
      id: "w-529", type: "photo", title: "汉江日落", titleEn: "Han River Sunset",
      series: "wuhan", region: "east", season: "autumn", timeOfDay: "sunset",
      date: "2026-11-05", location: "湖北 · 武汉",
      published: true, featured: false, sortWeight: 85, ratioActual: 2.788, focus: "50% 50%",
      description: "",
      tags: ["日落", "接片"]
    },

    /* ── 单幅 ─────────────────────────────────────────────────── */
    {
      id: "w-531", type: "photo", title: "夏季银河", titleEn: "Summer Milky Way",
      series: "", region: "southwest", season: "summer", timeOfDay: "night",
      date: "2026-07-18", location: "四川 · 川西",
      published: true, featured: true, sortWeight: 92, ratioActual: 1.5, focus: "50% 50%",
      description: "",
      tags: ["星空", "银河"]
    },
    {
      id: "w-532", type: "photo", title: "英仙座流星雨", titleEn: "Perseids",
      series: "", region: "southwest", season: "summer", timeOfDay: "night",
      date: "2026-08-12", location: "四川 · 川西",
      published: true, featured: false, sortWeight: 68, ratioActual: 1.419, focus: "50% 50%",
      description: "",
      tags: ["星空", "流星"]
    },
    {
      id: "w-533", type: "photo", title: "南昌", titleEn: "Nanchang",
      series: "", region: "east", season: "autumn", timeOfDay: "day",
      date: "2026-11-02", location: "江西 · 南昌",
      published: true, featured: false, sortWeight: 66, ratioActual: 1.5, focus: "50% 50%",
      description: "",
      tags: ["城市", "赣江"]
    },
    {
      id: "w-534", type: "photo", title: "赣州日出", titleEn: "Sunrise in Ganzhou",
      series: "", region: "east", season: "autumn", timeOfDay: "sunrise",
      date: "2026-10-31", location: "江西 · 赣州",
      published: true, featured: false, sortWeight: 65, ratioActual: 1.5, focus: "50% 50%",
      description: "",
      tags: ["日出", "城市"]
    },
    {
      id: "w-535", type: "photo", title: "厦门海岸", titleEn: "Xiamen Coast",
      series: "", region: "east", season: "summer", timeOfDay: "day",
      date: "2026-06-20", location: "福建 · 厦门",
      published: true, featured: false, sortWeight: 64, ratioActual: 1.579, focus: "50% 50%",
      description: "",
      tags: ["海岸", "夏日"]
    },
    {
      id: "w-536", type: "photo", title: "日落剪影", titleEn: "Silhouette",
      series: "", region: "east", season: "winter", timeOfDay: "sunset",
      date: "2025-12-05", location: "湖北 · 武汉",
      published: true, featured: false, sortWeight: 62, ratioActual: 1.5, focus: "50% 50%",
      description: "",
      tags: ["日落", "剪影"]
    },
    {
      id: "w-537", type: "photo", title: "无题 · 一", titleEn: "Untitled I",
      series: "", region: "east", season: "spring", timeOfDay: "day",
      date: "2026-05-10", location: "中国",
      published: true, featured: false, sortWeight: 60, ratioActual: 1.5, focus: "50% 50%",
      description: "",
      tags: []
    },
    {
      id: "w-538", type: "photo", title: "无题 · 二", titleEn: "Untitled II",
      series: "", region: "east", season: "spring", timeOfDay: "day",
      date: "2026-05-10", location: "中国",
      published: true, featured: false, sortWeight: 59, ratioActual: 1.5, focus: "50% 50%",
      description: "",
      tags: []
    },
    {
      id: "w-601", type: "video", title: "夏羌拉", titleEn: "Xiaqiangla",
      series: "", region: "southwest", season: "autumn", timeOfDay: "day",
      date: "2026-10-21", location: "四川 · 丹巴党龄",
      published: true, featured: false, sortWeight: 87,
      description: "",
      video: { src: "assets/video/w-601.mp4", duration: "00:24", resolution: "1080p", fps: 60 },
      tags: ["短片"]
    },
    {
      id: "w-602", type: "video", title: "延时视频", titleEn: "Time-lapse",
      series: "", region: "east", season: "autumn", timeOfDay: "day",
      date: "2026-11-16", location: "中国",
      published: true, featured: false, sortWeight: 86,
      description: "",
      video: { src: "assets/video/w-602.mp4", duration: "00:22", resolution: "1080p", fps: 30 },
      tags: ["短片", "剪辑"]
    }
  ];
})();
