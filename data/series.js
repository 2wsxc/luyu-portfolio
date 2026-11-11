/* 系列数据：一个系列对应一个明确的拍摄意图 */
(function () {
  window.SITE_DATA = window.SITE_DATA || {};

  window.SITE_DATA.series = [
    {
      slug: "ridge-line",
      title: "山脊线",
      titleEn: "Ridge Line",
      region: "southwest",
      year: "2025",
      description: "在贡嘎与横断山脉之间，连续三个秋季等待云海与侧光，记录山脊在天光中显形的十几分钟。",
      note: "连续三个秋季，在同一片山脊等待云海",
      closing: "山不会移动，能移动的只有云和光。三年的等待，换来八张留得下的画面。",
      coverArt: "layered himalayan mountain ridges above a sea of clouds at sunrise, warm side light, wide cinematic landscape photograph",
      order: 1,
      featured: true,
      published: true
    },
    {
      slug: "coastline",
      title: "海岸线",
      titleEn: "Coastline",
      region: "island",
      year: "2024",
      description: "从闽东到浙南，用长曝把潮汐的移动压成一条静止的界线，记录礁石与海的时间差。",
      note: "一个夏天，沿着海岸线走了 1200 公里",
      closing: "海一直在动，长曝只是让我们看见它移动的轨迹。",
      coverArt: "dark basalt sea stacks on a wild coast at blue hour, long exposure silky sea, moody cinematic seascape",
      order: 2,
      featured: true,
      published: true
    },
    {
      slug: "snowline",
      title: "雪线以北",
      titleEn: "North of Snowline",
      region: "northeast",
      year: "2024",
      description: "吉林与黑龙江的冬季林区，雪后第一天的光线、雾凇与足迹，一次关于「白」的练习。",
      note: "零下三十度，相机电池只能撑四十分钟",
      closing: "拍雪最难的不是曝光，是在一片白里找到唯一的重点。",
      coverArt: "rime ice on trees along a frozen river at sunrise, soft gold mist, winter landscape photograph",
      order: 3,
      featured: false,
      published: true
    },
    {
      slug: "plateau",
      title: "风起高原",
      titleEn: "Plateau Wind",
      region: "northwest",
      year: "2023",
      description: "青海与甘南的夏季，风暴、经幡与牧场在同一片光里出现，也记录高原天气的不可预测。",
      note: "一场雨后，云底开了一道四分钟的缝",
      closing: "高原的天气不给人准备时间，能做的只有一直在场。",
      coverArt: "storm light over tibetan plateau grassland, rain shaft in distance, dramatic clouds and warm light strip",
      order: 4,
      featured: true,
      published: true
    },
    {
      slug: "city-night",
      title: "城市夜行",
      titleEn: "Night Walk",
      region: "east",
      year: "2023",
      description: "在雨夜与雾里拍摄城市，让灯光成为唯一的层次。与自然系列并行的另一条线索。",
      note: "雾和雨是城市最好的滤镜",
      closing: "城市不需要被美化，它只需要被看见。",
      coverArt: "city skyline at night in fog, glowing windows, wet street reflections, cinematic urban night photograph",
      order: 5,
      featured: false,
      published: true
    },
    {
      slug: "aerial",
      title: "航拍与延时",
      titleEn: "Aerial & Timelapse",
      region: "east",
      year: "2025",
      description: "无人机与延时摄影：海岸线、林道与云的移动。动态影像与静态照片共用一套观看逻辑。",
      note: "动态影像的每一帧，都要经得起单张观看",
      closing: "会动的画面也需要一个静止的理由。",
      coverArt: "aerial top down view of waves meeting a dark sandy shore, abstract white foam lines, cinematic drone shot",
      order: 6,
      featured: false,
      published: true
    }
  ];
})();
