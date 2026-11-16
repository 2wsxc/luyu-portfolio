/* 简历内容：网页版与 PDF 同源 */
(function () {
  window.SITE_DATA = window.SITE_DATA || {};

  window.SITE_DATA.resume = {
    intent: {
      role: "摄影 / 摄像",
      city: "杭州，可随时到岗",
      start: "在校期间可实习，2028 年毕业后可全职",
      type: "实习 / 全职"
    },
    summary: "湖北中医药大学医学信息工程 2028 届本科在读。校学生会宣传部摄影师，累计完成 7 场校级活动与会议的拍摄与交付；独立完成两场马拉松赛道商业拍摄；熟练 Premiere、Photoshop、Lightroom，基本掌握 After Effects 与达芬奇，可独立完成拍摄、剪辑、调色与素材归档。手机 / 微信：18174083061。",
    experience: [
      {
        org: "校学生会宣传部",
        role: "",
        period: "2024.09 — 至今",
        location: "",
        media: [
          { type: "image", src: "assets/img/resume/campus-1.jpg", alt: "校级活动拍摄现场", wide: true },
          { type: "image", src: "assets/img/resume/campus-2.jpg", alt: "校级活动拍摄现场", wide: true }
        ],
        points: [
          "负责校级重大活动与会议的现场拍摄，累计 7 场，包括中医药科技成果路演转接会、校运动会等",
          "独立完成机位选择与连拍抓拍，活动后按宣传节点完成选片、初修与成片交付",
          "负责部门器材清点与拍摄前检查，保障连续拍摄不因设备问题中断"
        ]
      },
      {
        org: "马拉松赛事 · 赛道摄影",
        role: "自主接单",
        period: "2024 — 2025",
        location: "",
        media: [
          { type: "image", src: "assets/img/resume/marathon-photo.jpg", alt: "马拉松赛道拍摄现场" },
          { type: "video", src: "assets/video/marathon-clip.mp4" }
        ],
        points: [
          "独立承接两场马拉松赛事的赛道拍摄，负责机位规划、现场抓拍与选手识别",
          "赛后完成选片与出片交付，两场累计收入约 1000 元"
        ]
      },
      {
        org: "校企合作项目 · 中医药文化宣传直播",
        role: "设备运维 / 后期剪辑",
        period: "在校期间 · 2 个月",
        location: "",
        media: [
          { type: "image", src: "assets/img/resume/live-1.jpg", alt: "中医药文化宣传直播现场", wide: true },
          { type: "image", src: "assets/img/resume/live-2.jpg", alt: "中医药文化宣传直播现场" }
        ],
        points: [
          "负责直播设备调试与现场运维，处理音视频链路与突发故障，保障直播顺利进行",
          "承担直播后期切片剪辑，产出可二次传播的短视频素材"
        ]
      },
      {
        org: "独立摄影与户外创作",
        role: "摄影 / 后期",
        period: "2023 — 至今",
        location: "西藏 · 甘孜",
        points: [
          "西藏样片日记：solo 完成行程规划、拍摄与后期，形成个人样片集",
          "甘孜户外徒步取景：高海拔徒步中完成风光与纪实拍摄，持续更新个人系列"
        ]
      }
    ],
    projects: [
      { name: "《党龄 · 夏羌拉》徒步拍摄", role: "摄影 / 后期", year: "2026", note: "川西丹巴进山八天", workId: "w-507" },
      { name: "《珠峰与后藏》专题", role: "摄影", year: "2026", note: "拉萨至定日沿线", workId: "w-512" },
      { name: "江城 · 武汉城市系列", role: "摄影", year: "2025—2026", note: "江滩蓝调与汉江日落", workId: "w-521" },
      { name: "校运动会 / 科技成果路演转接会", role: "摄影", year: "2024—2025", note: "校级重大活动与会议纪实", workId: "" },
      { name: "马拉松赛道摄影", role: "摄影 / 交付", year: "2024—2025", note: "两场赛事，赛后选片交付" },
      { name: "相机—手机同步工具", role: "软件开发", year: "2026", note: "适用于相机与手机的连接交互与同步、监视器系统" }
    ],
    skills: [
      {
        group: "拍摄",
        items: [
          { name: "活动与会议纪实", level: 4 },
          { name: "体育与赛道抓拍", level: 4 },
          { name: "风光与户外", level: 4 },
          { name: "人像与现场", level: 3 }
        ]
      },
      {
        group: "后期",
        items: [
          { name: "Premiere Pro 剪辑", level: 4 },
          { name: "Photoshop 修图", level: 4 },
          { name: "Lightroom 调色", level: 4 },
          { name: "After Effects", level: 3 },
          { name: "DaVinci Resolve", level: 3 }
        ]
      },
      {
        group: "技术与协作",
        items: [
          { name: "直播设备调试与运维", level: 4 },
          { name: "素材管理与归档", level: 4 },
          { name: "C++ / Java", level: 3 },
          { name: "数据库与数据结构", level: 3 }
        ]
      }
    ],
    education: [
      { year: "2028 届", text: "湖北中医药大学 · 医学信息工程 · 本科" },
      { year: "课程", text: "数据结构、数据库原理、软件工程、C++、Java 开发" }
    ],
    awards: [
      { year: "2025", text: "第十六届蓝桥杯 · C++ 组 · 省级三等奖" },
      { year: "2024—2025", text: "校学生会宣传部摄影师 · 校级活动 7 场" },
      { year: "2024—2025", text: "两场马拉松赛事 · 赛道摄影商业接单" }
    ],
    pdf: {
      path: "assets/files/resume-xiaojie-2026-11.pdf",
      updatedAt: "2026-11",
      size: "约 500 KB"
    }
  };
})();
