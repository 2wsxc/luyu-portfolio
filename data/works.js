/* 作品数据：照片与视频共用一份，type 区分。图片路径为 assets/img/works/<id>.jpg，art 仅保留画面描述备用。 */
(function () {
  window.SITE_DATA = window.SITE_DATA || {};

  const sonyWide = { camera: "Sony A7R V", lens: "FE 16-35mm F2.8 GM II", focal: "24mm", aperture: "f/11", shutter: "1/60s", iso: 100 };
  const sonyLong = { camera: "Sony A7R V", lens: "FE 100-400mm F4.5-5.6", focal: "240mm", aperture: "f/8", shutter: "1/125s", iso: 100 };
  const hassel = { camera: "Hasselblad X2D 100C", lens: "XCD 45mm F3.5", focal: "45mm", aperture: "f/8", shutter: "1/250s", iso: 64 };
  const nikon = { camera: "Nikon Z8", lens: "Z 14-24mm F2.8 S", focal: "14mm", aperture: "f/9", shutter: "20s", iso: 200 };
  const gfx = { camera: "Fujifilm GFX 100 II", lens: "GF 250mm F4", focal: "250mm", aperture: "f/5.6", shutter: "1/500s", iso: 200 };

  window.SITE_DATA.works = [
    /* ── 山脊线 · 西南 · 2025 ───────────────────────────── */
    {
      id: "w-014", type: "photo", title: "山脊线 04", titleEn: "Ridge Line No.04",
      series: "ridge-line", region: "southwest", season: "autumn", timeOfDay: "sunrise",
      date: "2025-10-18", location: "四川 · 贡嘎西坡",
      published: true, featured: true, sortWeight: 98, ratio: 1.78, focus: "50% 42%",
      art: "a lone snow ridge cutting through a slow moving cloud inversion at dawn, layered himalayan peaks, warm first light, cinematic fine-art landscape photograph",
      size: "landscape_16_9",
      description: "日出前十二分钟，云层在山脊下方形成一条缓慢移动的界线。等了三年的那个早晨，风停了两分半。",
      exif: sonyLong, tags: ["雪山", "日出", "云海"]
    },
    {
      id: "w-101", type: "photo", title: "山脊线 01", titleEn: "Ridge Line No.01",
      series: "ridge-line", region: "southwest", season: "autumn", timeOfDay: "sunrise",
      date: "2025-10-15", location: "四川 · 子梅垭口",
      published: true, featured: true, sortWeight: 93, ratio: 0.75, focus: "50% 45%",
      art: "sunrise over a sea of clouds, jagged snow ridge emerging from mist, warm rim light, minimal composition, fine-art landscape photograph",
      description: "云海在前景缓慢抬升，只留下山脊的轮廓线。用长焦压缩了四层山。",
      exif: sonyLong, tags: ["雪山", "云海", "长焦"]
    },
    {
      id: "w-102", type: "photo", title: "山脊线 02",
      series: "ridge-line", region: "southwest", season: "autumn", timeOfDay: "blue_hour",
      date: "2025-10-16", location: "四川 · 子梅垭口",
      published: true, featured: false, sortWeight: 84, ratio: 0.75, focus: "50% 40%",
      art: "deep blue hour over a mountain ridgeline, first light touching a distant snow peak, cold quiet atmosphere, fine-art landscape photograph",
      exif: sonyWide, tags: ["蓝调", "山脊"]
    },
    {
      id: "w-103", type: "photo", title: "山脊线 03",
      series: "ridge-line", region: "southwest", season: "autumn", timeOfDay: "sunset",
      date: "2025-10-19", location: "四川 · 雅哈垭口",
      published: true, featured: false, sortWeight: 80, ratio: 0.75, focus: "50% 38%",
      art: "alpenglow on a sharp mountain ridge at sunset, drifting clouds below, muted purple and amber sky",
      exif: sonyLong, tags: ["日落", "山脊"]
    },
    {
      id: "w-105", type: "photo", title: "山脊线 05",
      series: "ridge-line", region: "southwest", season: "autumn", timeOfDay: "day",
      date: "2025-11-02", location: "云南 · 白马雪山",
      published: true, featured: false, sortWeight: 76, ratio: 0.75, focus: "50% 50%",
      art: "high altitude snow mountains under a clear cold sky, four layered ranges fading into distance, minimal blue tones",
      exif: gfx, tags: ["雪山", "层叠"]
    },
    {
      id: "w-106", type: "photo", title: "山脊线 06",
      series: "ridge-line", region: "southwest", season: "autumn", timeOfDay: "night",
      date: "2025-10-20", location: "四川 · 牛背山",
      published: true, featured: false, sortWeight: 72, ratio: 0.75, focus: "50% 45%",
      art: "mountain silhouette under a dense star field, faint milky way above a dark ridgeline, long exposure night landscape",
      exif: nikon, tags: ["星空", "夜景"]
    },
    {
      id: "w-107", type: "photo", title: "山脊线 07",
      series: "ridge-line", region: "southwest", season: "autumn", timeOfDay: "sunrise",
      date: "2025-10-14", location: "四川 · 贡嘎",
      published: true, featured: false, sortWeight: 68, ratio: 0.75, focus: "50% 35%",
      art: "first light hitting a glacier ridge, deep blue shadow in the foreground, high contrast mountain photograph",
      exif: sonyLong, tags: ["冰川", "日出"]
    },
    {
      id: "w-108", type: "photo", title: "山脊线 08",
      series: "ridge-line", region: "southwest", season: "autumn", timeOfDay: "sunset",
      date: "2025-09-28", location: "西藏 · 南迦巴瓦",
      published: true, featured: false, sortWeight: 64, ratio: 0.75, focus: "50% 30%",
      art: "golden light on a sharp himalayan peak above a sea of clouds, dramatic vertical mountain, telephoto compression",
      exif: sonyLong, tags: ["南迦巴瓦", "日落"]
    },

    /* ── 海岸线 · 海岛 · 2024 ──────────────────────────── */
    {
      id: "w-201", type: "photo", title: "海岸线 01", titleEn: "Coastline No.01",
      series: "coastline", region: "island", season: "summer", timeOfDay: "blue_hour",
      date: "2024-08-11", location: "福建 · 平潭",
      published: true, featured: true, sortWeight: 91, ratio: 0.75, focus: "50% 50%",
      art: "sea stacks and smooth long exposure water at blue hour, dark basalt cliff, soft gradient sky, minimal seascape",
      description: "曝光 30 秒，把潮水压成一层雾。礁石保持不动，画面就只剩下光在变。",
      exif: sonyWide, tags: ["长曝", "海岸", "蓝调"]
    },
    {
      id: "w-202", type: "photo", title: "海岸线 02",
      series: "coastline", region: "island", season: "summer", timeOfDay: "sunset",
      date: "2024-07-22", location: "浙江 · 花岙岛",
      published: true, featured: false, sortWeight: 85, ratio: 0.75, focus: "50% 55%",
      art: "basalt rock columns on a wild coastline at sunset, warm reflections on wet stone, long exposure sea",
      exif: hassel, tags: ["日落", "礁石"]
    },
    {
      id: "w-203", type: "photo", title: "海岸线 03",
      series: "coastline", region: "island", season: "summer", timeOfDay: "sunrise",
      date: "2024-06-18", location: "浙江 · 东极岛",
      published: true, featured: false, sortWeight: 82, ratio: 0.75, focus: "50% 50%",
      art: "small fishing boats on a calm sea at dawn, soft pink and grey sky, quiet minimal seascape",
      exif: sonyLong, tags: ["渔船", "日出"]
    },
    {
      id: "w-204", type: "photo", title: "海岸线 04",
      series: "coastline", region: "island", season: "summer", timeOfDay: "day",
      date: "2024-08-13", location: "福建 · 霞浦",
      published: true, featured: false, sortWeight: 78, ratio: 0.75, focus: "50% 50%",
      art: "aerial view of tidal mudflats with bamboo poles at low tide, graphic abstract patterns, muted earth tones",
      exif: nikon, tags: ["航拍", "滩涂"]
    },
    {
      id: "w-205", type: "photo", title: "海岸线 05",
      series: "coastline", region: "island", season: "summer", timeOfDay: "night",
      date: "2024-09-02", location: "浙江 · 南麂岛",
      published: true, featured: false, sortWeight: 74, ratio: 0.75, focus: "50% 45%",
      art: "lighthouse beam cutting through coastal fog at night, long exposure, deep blue darkness",
      exif: nikon, tags: ["灯塔", "夜"]
    },
    {
      id: "w-206", type: "photo", title: "海岸线 06",
      series: "coastline", region: "island", season: "summer", timeOfDay: "sunset",
      date: "2024-08-09", location: "福建 · 东山岛",
      published: true, featured: false, sortWeight: 70, ratio: 0.75, focus: "50% 60%",
      art: "gentle waves over dark wet rocks at sunset, silky long exposure, warm low light, minimal seascape",
      exif: sonyWide, tags: ["长曝", "日落"]
    },
    {
      id: "w-207", type: "photo", title: "海岸线 07",
      series: "coastline", region: "island", season: "summer", timeOfDay: "blue_hour",
      date: "2024-08-12", location: "福建 · 平潭",
      published: true, featured: false, sortWeight: 66, ratio: 0.75, focus: "50% 50%",
      art: "coastal cliff and a distant island at deep blue dusk, calm sea, wide quiet horizon",
      exif: hassel, tags: ["蓝调", "海岸"]
    },
    {
      id: "w-208", type: "photo", title: "海岸线 08",
      series: "coastline", region: "island", season: "summer", timeOfDay: "day",
      date: "2024-05-30", location: "广东 · 南澳岛",
      published: true, featured: false, sortWeight: 62, ratio: 0.75, focus: "50% 50%",
      art: "turquoise sea and granite coastline under a bright overcast sky, soft even light, minimal composition",
      exif: sonyWide, tags: ["海", "阴天"]
    },

    /* ── 雪线以北 · 东北 · 2024 ─────────────────────────── */
    {
      id: "w-301", type: "photo", title: "雪线以北 01",
      series: "snowline", region: "northeast", season: "winter", timeOfDay: "day",
      date: "2024-12-20", location: "吉林 · 长白山",
      published: true, featured: false, sortWeight: 88, ratio: 0.75, focus: "50% 50%",
      art: "fresh snow on a birch forest, soft diffused winter light, muted white and grey, quiet minimal landscape",
      exif: hassel, tags: ["雪", "白桦"]
    },
    {
      id: "w-302", type: "photo", title: "雪线以北 02",
      series: "snowline", region: "northeast", season: "winter", timeOfDay: "blue_hour",
      date: "2024-12-22", location: "黑龙江 · 雪乡",
      published: true, featured: false, sortWeight: 86, ratio: 0.75, focus: "50% 50%",
      art: "snow covered village roofs with warm window lights at blue hour, smoke from chimneys, cold blue snow",
      exif: sonyWide, tags: ["雪乡", "蓝调"]
    },
    {
      id: "w-303", type: "photo", title: "雪线以北 03",
      series: "snowline", region: "northeast", season: "winter", timeOfDay: "sunrise",
      date: "2024-12-18", location: "吉林 · 雾凇岛",
      published: true, featured: false, sortWeight: 83, ratio: 0.75, focus: "50% 45%",
      art: "rime ice covering willow trees along a frozen river at sunrise, pale gold light, mist over water",
      exif: gfx, tags: ["雾凇", "日出"]
    },
    {
      id: "w-304", type: "photo", title: "雪线以北 04",
      series: "snowline", region: "northeast", season: "winter", timeOfDay: "sunrise",
      date: "2025-01-08", location: "内蒙古 · 阿尔山",
      published: true, featured: false, sortWeight: 79, ratio: 0.75, focus: "50% 50%",
      art: "frozen river valley with steam rising from water at minus thirty degrees, sunrise light, winter landscape",
      exif: sonyWide, tags: ["不冻河", "严寒"]
    },
    {
      id: "w-305", type: "photo", title: "雪线以北 05",
      series: "snowline", region: "northeast", season: "winter", timeOfDay: "sunset",
      date: "2024-12-21", location: "吉林 · 长白山",
      published: true, featured: false, sortWeight: 75, ratio: 0.75, focus: "50% 40%",
      art: "wind carved snow ridge at sunset, long blue shadows, sculptural white forms, minimal winter landscape",
      exif: hassel, tags: ["雪脊", "日落"]
    },
    {
      id: "w-306", type: "photo", title: "雪线以北 06",
      series: "snowline", region: "northeast", season: "winter", timeOfDay: "night",
      date: "2025-01-12", location: "黑龙江 · 漠河",
      published: true, featured: false, sortWeight: 71, ratio: 0.75, focus: "50% 40%",
      art: "faint green aurora over a snowy forest, star field, deep winter night, long exposure",
      exif: nikon, tags: ["极光", "星空"]
    },
    {
      id: "w-307", type: "photo", title: "雪线以北 07",
      series: "snowline", region: "northeast", season: "winter", timeOfDay: "sunrise",
      date: "2024-12-19", location: "吉林 · 魔界",
      published: true, featured: false, sortWeight: 67, ratio: 0.75, focus: "50% 50%",
      art: "mist over a frozen river at dawn, bare tree silhouettes, soft monochrome winter scene",
      exif: gfx, tags: ["晨雾", "剪影"]
    },
    {
      id: "w-308", type: "photo", title: "雪线以北 08",
      series: "snowline", region: "northeast", season: "winter", timeOfDay: "day",
      date: "2025-01-10", location: "黑龙江 · 库尔滨",
      published: true, featured: false, sortWeight: 63, ratio: 0.75, focus: "50% 50%",
      art: "snow covered pine forest, minimal white landscape, faint tree lines in falling snow",
      exif: sonyLong, tags: ["雾凇", "林"]
    },

    /* ── 风起高原 · 西北 · 2023 ─────────────────────────── */
    {
      id: "w-401", type: "photo", title: "风起高原 01", titleEn: "Plateau Wind No.01",
      series: "plateau", region: "northwest", season: "summer", timeOfDay: "sunset",
      date: "2023-07-15", location: "青海 · 祁连",
      published: true, featured: true, sortWeight: 90, ratio: 0.75, focus: "50% 45%",
      art: "storm light over tibetan plateau grassland, distant rain shaft, dramatic dark clouds and a strip of warm light",
      description: "雨在二十公里外落下。光线只从云底的一道缝里出来，维持了不到四分钟。",
      exif: sonyWide, tags: ["高原", "风暴", "光"]
    },
    {
      id: "w-402", type: "photo", title: "风起高原 02",
      series: "plateau", region: "northwest", season: "summer", timeOfDay: "day",
      date: "2023-07-12", location: "青海 · 青海湖",
      published: true, featured: false, sortWeight: 84, ratio: 0.75, focus: "50% 55%",
      art: "turquoise lake and a yellow rapeseed field under dramatic cumulus clouds, high plateau landscape",
      exif: hassel, tags: ["青海湖", "油菜花"]
    },
    {
      id: "w-403", type: "photo", title: "风起高原 03",
      series: "plateau", region: "northwest", season: "summer", timeOfDay: "sunrise",
      date: "2023-07-18", location: "甘肃 · 甘南",
      published: true, featured: false, sortWeight: 81, ratio: 0.75, focus: "50% 50%",
      art: "misty valley with tibetan prayer flags at sunrise, soft warm light, layered hills",
      exif: sonyLong, tags: ["经幡", "晨雾"]
    },
    {
      id: "w-404", type: "photo", title: "风起高原 04",
      series: "plateau", region: "northwest", season: "summer", timeOfDay: "night",
      date: "2023-07-13", location: "青海 · 茶卡",
      published: true, featured: false, sortWeight: 77, ratio: 0.75, focus: "50% 50%",
      art: "salt flat mirror reflecting a starry night sky, milky way, perfectly still shallow water",
      exif: nikon, tags: ["盐湖", "星空"]
    },
    {
      id: "w-405", type: "photo", title: "风起高原 05",
      series: "plateau", region: "northwest", season: "summer", timeOfDay: "sunset",
      date: "2023-07-20", location: "四川 · 若尔盖",
      published: true, featured: false, sortWeight: 73, ratio: 0.75, focus: "50% 60%",
      art: "meandering river across grassland at sunset, warm low light, aerial view, plateau wetland",
      exif: nikon, tags: ["湿地", "日落"]
    },
    {
      id: "w-406", type: "photo", title: "风起高原 06",
      series: "plateau", region: "northwest", season: "summer", timeOfDay: "day",
      date: "2023-07-22", location: "甘肃 · 张掖",
      published: true, featured: false, sortWeight: 69, ratio: 0.75, focus: "50% 50%",
      art: "layered danxia landform in desaturated pastel tones, aerial abstract geology, minimal",
      exif: gfx, tags: ["丹霞", "地貌"]
    },
    {
      id: "w-407", type: "photo", title: "风起高原 07",
      series: "plateau", region: "northwest", season: "summer", timeOfDay: "day",
      date: "2023-07-16", location: "青海 · 可可西里",
      published: true, featured: false, sortWeight: 65, ratio: 0.75, focus: "50% 55%",
      art: "a lone yak on a vast high plateau under a huge sky, sparse grass, muted cold light",
      exif: sonyLong, tags: ["牦牛", "高原"]
    },
    {
      id: "w-408", type: "photo", title: "风起高原 08",
      series: "plateau", region: "northwest", season: "summer", timeOfDay: "blue_hour",
      date: "2023-07-19", location: "青海 · 年保玉则",
      published: true, featured: false, sortWeight: 61, ratio: 0.75, focus: "50% 40%",
      art: "glacial lake and sharp peaks at blue hour, still water reflection, cold blue mountain landscape",
      exif: hassel, tags: ["冰湖", "蓝调"]
    },

    /* ── 城市夜行 · 华东 · 2023 ─────────────────────────── */
    {
      id: "w-501", type: "photo", title: "城市夜行 01",
      series: "city-night", region: "east", season: "autumn", timeOfDay: "night",
      date: "2023-11-06", location: "上海 · 外滩",
      published: true, featured: false, sortWeight: 80, ratio: 0.75, focus: "50% 50%",
      art: "city skyline in fog at night, glowing windows, long exposure, subdued color, cinematic urban landscape",
      exif: sonyWide, tags: ["雾", "夜景"]
    },
    {
      id: "w-502", type: "photo", title: "城市夜行 02",
      series: "city-night", region: "east", season: "autumn", timeOfDay: "night",
      date: "2023-11-05", location: "上海 · 武康路",
      published: true, featured: false, sortWeight: 76, ratio: 0.75, focus: "50% 55%",
      art: "rainy city street at night, reflections of warm light on wet asphalt, sparse pedestrians, quiet mood",
      exif: sonyWide, tags: ["雨夜", "街"]
    },
    {
      id: "w-503", type: "photo", title: "城市夜行 03",
      series: "city-night", region: "east", season: "autumn", timeOfDay: "blue_hour",
      date: "2023-10-21", location: "杭州 · 钱江新城",
      published: true, featured: false, sortWeight: 72, ratio: 0.75, focus: "50% 45%",
      art: "modern towers at blue hour, geometric reflections on glass, minimal urban architecture photograph",
      exif: hassel, tags: ["建筑", "蓝调"]
    },
    {
      id: "w-504", type: "photo", title: "城市夜行 04",
      series: "city-night", region: "east", season: "winter", timeOfDay: "night",
      date: "2023-12-02", location: "重庆 · 洪崖洞",
      published: true, featured: false, sortWeight: 68, ratio: 0.75, focus: "50% 50%",
      art: "dense hillside city lights at night, layered urban canyon, warm and cold light contrast",
      exif: sonyWide, tags: ["重庆", "夜景"]
    },
    {
      id: "w-505", type: "photo", title: "城市夜行 05",
      series: "city-night", region: "east", season: "autumn", timeOfDay: "night",
      date: "2023-10-18", location: "杭州 · 西湖",
      published: true, featured: false, sortWeight: 64, ratio: 0.75, focus: "50% 55%",
      art: "misty lake and pavilion lights at night, still water, quiet minimal chinese landscape",
      exif: hassel, tags: ["西湖", "夜"]
    },
    {
      id: "w-506", type: "photo", title: "城市夜行 06",
      series: "city-night", region: "east", season: "winter", timeOfDay: "day",
      date: "2023-12-08", location: "上海 · 北外滩",
      published: true, featured: false, sortWeight: 60, ratio: 0.75, focus: "50% 50%",
      art: "city architecture disappearing into heavy fog, minimal grey tones, subtle silhouettes",
      exif: sonyWide, tags: ["雾", "极简"]
    },

    /* ── 航拍与延时 · 华东 · 2025 ───────────────────────── */
    {
      id: "w-601", type: "video", title: "潮汐的线", titleEn: "Line of Tide",
      series: "aerial", region: "island", season: "spring", timeOfDay: "day",
      date: "2025-04-12", location: "福建 · 平潭",
      published: true, featured: false, sortWeight: 90, ratio: 0.75, focus: "50% 50%",
      art: "aerial top down view of waves meeting a sandy shore, abstract white foam lines on dark water, cinematic",
      description: "无人机垂直俯拍，记录一次涨潮把沙滩切成两半的四十分钟。",
      video: { duration: "02:46", width: 3840, height: 2160, provider: "self", src: "" },
      tags: ["航拍", "海岸", "延时"]
    },
    {
      id: "w-602", type: "video", title: "林道", titleEn: "Forest Road",
      series: "aerial", region: "east", season: "spring", timeOfDay: "day",
      date: "2025-04-20", location: "浙江 · 莫干山",
      published: true, featured: false, sortWeight: 82, ratio: 0.75, focus: "50% 50%",
      art: "aerial view of a winding forest road through green hills, morning mist, top down perspective",
      video: { duration: "01:18", width: 3840, height: 2160, provider: "self", src: "" },
      tags: ["航拍", "森林"]
    },
    {
      id: "w-603", type: "photo", title: "云的影子",
      series: "aerial", region: "east", season: "spring", timeOfDay: "day",
      date: "2025-05-06", location: "浙江 · 天目山",
      published: true, featured: false, sortWeight: 74, ratio: 0.75, focus: "50% 50%",
      art: "shadows of clouds moving across a mountain forest, aerial view, dark green texture, minimal landscape",
      exif: nikon, tags: ["航拍", "光"]
    },
    {
      id: "w-604", type: "video", title: "海岸延时", titleEn: "Coast Timelapse",
      series: "aerial", region: "island", season: "summer", timeOfDay: "sunset",
      date: "2024-08-14", location: "福建 · 霞浦",
      published: true, featured: false, sortWeight: 70, ratio: 0.75, focus: "50% 50%",
      art: "aerial sunset over tidal flats with small boats, warm reflection on wet sand, wide cinematic view",
      video: { duration: "00:52", width: 3840, height: 2160, provider: "self", src: "" },
      tags: ["延时", "滩涂"]
    },
    {
      id: "w-605", type: "photo", title: "山脊之上",
      series: "aerial", region: "southwest", season: "autumn", timeOfDay: "day",
      date: "2025-10-18", location: "四川 · 贡嘎",
      published: true, featured: false, sortWeight: 66, ratio: 0.75, focus: "50% 45%",
      art: "aerial view of a sharp mountain ridge above clouds, high altitude, cold light, dramatic scale",
      exif: nikon, tags: ["航拍", "雪山"]
    },

    /* ── 单幅 ──────────────────────────────────────────── */
    {
      id: "w-701", type: "photo", title: "冰岛的雨", titleEn: "Rain in Iceland",
      series: "", region: "overseas", season: "summer", timeOfDay: "day",
      date: "2024-06-02", location: "冰岛 · 维克",
      published: true, featured: false, sortWeight: 86, ratio: 0.75, focus: "50% 50%",
      art: "black sand beach with basalt sea stacks in rain, moody grey sky, long exposure, iceland landscape",
      description: "雨大到无法换镜头。最后一张是隔着防水袋拍的，边缘有一点水痕，留着。",
      exif: sonyWide, tags: ["冰岛", "黑沙滩"]
    },
    {
      id: "w-702", type: "photo", title: "沙丘的线",
      series: "", region: "northwest", season: "spring", timeOfDay: "sunset",
      date: "2023-04-11", location: "甘肃 · 敦煌",
      published: true, featured: false, sortWeight: 79, ratio: 0.75, focus: "50% 50%",
      art: "minimal desert dunes with a sharp shadow line, warm sand and deep blue shadow, abstract minimal landscape",
      exif: gfx, tags: ["沙漠", "极简"]
    },
    {
      id: "w-703", type: "photo", title: "一棵树", titleEn: "One Tree",
      series: "", region: "east", season: "autumn", timeOfDay: "sunset",
      date: "2024-10-05", location: "河北 · 坝上",
      published: true, featured: true, sortWeight: 87, ratio: 0.75, focus: "50% 50%",
      art: "a single tree on rolling grassland under a dramatic sky at sunset, long shadow, minimal composition",
      description: "坝上的最后一天，风把云压低到地平线。树只有一棵，构图就简单了。",
      exif: sonyLong, tags: ["树", "草原"]
    },
    {
      id: "w-704", type: "photo", title: "雨后",
      series: "", region: "east", season: "spring", timeOfDay: "day",
      date: "2025-04-06", location: "浙江 · 杭州",
      published: false, featured: false, sortWeight: 58, ratio: 0.75, focus: "50% 50%",
      art: "wet bamboo forest after rain, soft green light, layered vertical stems, quiet minimal nature",
      exif: hassel, tags: ["竹", "雨"]
    },
    {
      id: "w-705", type: "photo", title: "远山",
      series: "", region: "southwest", season: "winter", timeOfDay: "day",
      date: "2025-01-20", location: "云南 · 梅里",
      published: false, featured: false, sortWeight: 64, ratio: 0.75, focus: "50% 40%",
      art: "layered distant mountains in atmospheric haze, pale blue and grey, extremely minimal landscape",
      exif: sonyLong, tags: ["远山", "极简"]
    }
  ];

  /* 已下线作品（不渲染，仅保留可追溯性） */
  window.SITE_DATA.unpublished = [
    { id: "w-901", title: "废弃草稿", reason: "曝光失误" }
  ];
})();
