/* 简历内容：网页版与 PDF 同源 */
(function () {
  window.SITE_DATA = window.SITE_DATA || {};

  window.SITE_DATA.resume = {
    intent: {
      role: "摄影师 / 摄像（风光与纪实方向）",
      city: "杭州，可异地出差",
      start: "一个月内到岗",
      type: "全职 / 长期合作"
    },
    summary: "8 年风光与纪实摄影经验，长期为品牌、文旅与出版机构提供影像内容；擅长复杂光线下的自然景观与城市影像，可独立完成从勘景、拍摄到调色的全流程。",
    experience: [
      {
        org: "自由摄影师 / 导演",
        role: "风光 · 品牌影像 · 航拍",
        period: "2022.04 — 至今",
        location: "杭州",
        points: [
          "为文旅与户外品牌完成 26 个商业拍摄项目，单项目最高交付 180 张精修与 3 条短片",
          "建立个人调色基线，保证不同批次素材在印刷与屏幕端观感一致",
          "长期系列《山脊线》持续拍摄中，已积累 3 个秋季的素材"
        ]
      },
      {
        org: "山与海影像工作室",
        role: "摄影指导",
        period: "2019.06 — 2022.03",
        location: "杭州",
        points: [
          "负责风光与建筑类项目的视觉方案、现场执行与后期把控，年均项目 18 个",
          "搭建工作室的素材管理与色彩流程，交付返修率从 22% 降到 6%",
          "带领 3 人拍摄小组完成跨省拍摄 11 次"
        ]
      },
      {
        org: "《行野》杂志",
        role: "签约摄影师",
        period: "2018.09 — 2019.05",
        location: "上海",
        points: [
          "完成 9 组专题报道拍摄，其中 3 组作为封面故事",
          "负责选题提案与图文编辑协作，单组专题平均 42 张成片"
        ]
      },
      {
        org: "光年影像",
        role: "摄影助理",
        period: "2018.03 — 2018.08",
        location: "杭州",
        points: [
          "协助商业拍摄的灯光、器材与现场管理，参与 40 余次拍摄"
        ]
      }
    ],
    projects: [
      { name: "《山脊线》长期项目", role: "摄影 / 编辑", year: "2023—2025", note: "横断山脉云海与山脊的持续记录，8 张成片", workId: "w-014" },
      { name: "平潭海岸线品牌短片", role: "导演 / 航拍", year: "2025", note: "为户外品牌拍摄的 2 分 46 秒形象片", workId: "w-601" },
      { name: "青海湖文旅画册", role: "摄影", year: "2023", note: "12 页画册图片，含航拍与地面两组素材" },
      { name: "《雪线以北》冬季专题", role: "摄影 / 文字", year: "2024", note: "东北林区冬季影像，杂志 8 页专题" },
      { name: "城市夜行 · 上海", role: "摄影", year: "2023", note: "雨夜城市系列，6 张成片", workId: "w-502" }
    ],
    skills: [
      {
        group: "拍摄",
        items: [
          { name: "风光与自然景观", level: 5 },
          { name: "城市与建筑", level: 4 },
          { name: "航拍（多旋翼）", level: 4 },
          { name: "纪实与专题", level: 4 }
        ]
      },
      {
        group: "后期",
        items: [
          { name: "Capture One / Lightroom", level: 5 },
          { name: "Photoshop 精修", level: 4 },
          { name: "DaVinci Resolve 调色", level: 4 },
          { name: "Premiere 剪辑", level: 3 }
        ]
      },
      {
        group: "协作",
        items: [
          { name: "勘景与拍摄方案", level: 4 },
          { name: "现场执行与统筹", level: 4 },
          { name: "色彩管理与输出", level: 4 },
          { name: "英文工作沟通", level: 3 }
        ]
      }
    ],
    education: [
      { year: "2013—2017", text: "中国美术学院 · 摄影系 · 本科" },
      { year: "2022", text: "DaVinci Resolve 国际认证 · 调色" },
      { year: "2019", text: "民航局多旋翼无人机驾驶员执照" }
    ],
    awards: [
      { year: "2024", text: "IPA 国际摄影奖 · 自然类 · 荣誉奖" },
      { year: "2023", text: "索尼世界摄影奖 · 风光组 · 入围" },
      { year: "2022", text: "《中国摄影》杂志 · 年度新人专题" }
    ],
    pdf: {
      path: "assets/files/resume-luyu-2026-11.pdf",
      updatedAt: "2026-11",
      size: "约 330 KB"
    }
  };
})();
