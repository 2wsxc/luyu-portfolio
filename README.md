# 肖杰 · 简历与作品站点（双版本）

本仓库同时维护两个**互不影响**的版本。改动前先确认目录，避免把两个版本混在一起。

| 版本 | 用途 | 入口文件 | 线上地址 | 简历 PDF |
| --- | --- | --- | --- | --- |
| 摄影 / 摄像版 | 已投递（摄影摄像方向） | `index.html` | https://37k3tj5byrgwcndj29w.traesite.cn | `assets/files/resume-xiaojie-2026-11.pdf` |
| 软件开发实习版 | 软件开发岗位投递 | `software/index.html` | https://37kanlhb1a0a7cak7a6.traesite.cn | `software/assets/files/resume-dev-2026-11.pdf` |

## 目录结构

```
.
├── index.html                摄影版：首页（简历 + 作品入口）
├── works.html / series.html   摄影版：作品集、系列
├── work.html / about.html     摄影版：作品详情、关于
├── contact.html / resume.html 摄影版：联系、简历打印页
├── data/*.js                  摄影版内容数据（作品、系列、简历等）
├── assets/**                  摄影版图片、视频、PDF
├── 肖杰-摄影简历.html          摄影版单文件简历（图片已内嵌）
└── software/                  软件开发实习版（独立站点，勿与根目录混改）
    ├── index.html             单页：项目 / 技术 / 影像 / 教育
    ├── works.html             完整作品集（31 张 + 2 支短片 + 灯箱）
    ├── resume.html            一页 A4 简历（打印版）
    └── assets/                图片、视频、PDF
```

## 改哪里

- 摄影版：只动根目录的 `index.html`、`data/*.js`、`assets/**`、其余 `*.html`
- 开发版：只动 `software/**`；改完 `software/resume.html` 后需重新导出 `software/assets/files/resume-dev-2026-11.pdf`
- 两版素材各自存放，不互相引用，改名或删图不会影响另一版

## 发布

两个站点用同一个部署工具，`site-id` 不同：

| 版本 | site-id |
| --- | --- |
| 摄影版 | `37k3tj5byrgwcndj29w` |
| 开发版 | `37kanlhb1a0a7cak7a6` |

要点：待发布目录必须放在系统临时目录下，且内含 `public/` 子目录（把要发布的文件复制进去），否则会报 `SOURCE_DIR_OUTSIDE_TEMP` / `STATIC_PUBLIC_MISSING`。

## 分支约定

- `main` 为唯一主线，两个版本同仓库不同目录
- 曾经的 `feat/site-v1` 已合入 `main` 并停用，请勿再向它提交

## 历史

- 仓库名 `luyu-portfolio` 为早期占位命名，与当前人物无关
- 2026.11：摄影版投递；随后新增软件开发实习版（`software/`）
