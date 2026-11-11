/* 作品详情：大图 / 视频、拍摄信息、同系列推荐、上下一张 */
(function () {
  var LY = window.LY;
  var d = LY.data;
  var ui = LY.ui;
  var cards = LY.cards;

  function pad(n) { return n < 10 ? "0" + n : String(n); }

  function render404(id) {
    document.title = "作品不存在 · 陆屿";
    var main = document.getElementById("main");
    var recs = d.featured.slice(0, 3);
    main.innerHTML =
      '<section class="wrap"><div class="empty" style="margin-top:calc(var(--nav-h) + 96px)">' +
      '<p class="empty__title">这件作品不存在或已下架</p>' +
      '<p class="empty__text">链接可能已经失效，可以回到作品索引继续浏览。</p>' +
      '<a class="btn" href="works.html">返回作品索引</a>' +
      "</div>" +
      '<div class="work-recs"><div class="sec-head"><div class="sec-head__left"><span class="sec-head__no">推荐</span><h2 class="sec-head__title">其他作品</h2></div></div>' +
      '<div class="rec-grid" id="recGrid"></div></div></section>';
    var grid = document.getElementById("recGrid");
    grid.innerHTML = recs.map(function (w, i) { return cards.workCard(w, i); }).join("");
    cards.mountImages(grid);
  }

  function buildList(ret) {
    if (ret && ret.filters) {
      return d.filterWorks(ret.filters);
    }
    return d.works.slice().sort(d.sortDefault);
  }

  function renderRecs(w) {
    var box = document.getElementById("workRecs");
    if (!box) return;
    var pool = d.works.filter(function (x) { return x.id !== w.id; });
    var scored = pool.map(function (x) {
      var score = 0;
      if (w.series && x.series === w.series) score += 4;
      if (x.region === w.region) score += 2;
      if (x.timeOfDay === w.timeOfDay) score += 1;
      if (x.type === w.type) score += 1;
      if (x.featured) score += 0.5;
      return { w: x, score: score };
    });
    scored.sort(function (a, b) {
      if (b.score !== a.score) return b.score - a.score;
      return d.sortDefault(a.w, b.w);
    });
    var picks = scored.slice(0, 3).map(function (x) { return x.w; });

    box.innerHTML =
      '<div class="sec-head"><div class="sec-head__left"><span class="sec-head__no">推荐</span>' +
      '<h2 class="sec-head__title">' + (w.seriesTitle ? "同系列与其他" : "你可能也想看") + "</h2></div>" +
      (w.series ? '<a class="sec-head__link" href="series.html?slug=' + w.series + '">查看系列 ' + ui.icon("arrow") + "</a>" : "") +
      "</div>" +
      '<div class="rec-grid">' +
      picks.map(function (p, i) { return cards.workCard(p, i); }).join("") +
      "</div>";
    cards.mountImages(box);
  }

  function renderMedia(w) {
    var wrap = document.getElementById("workMedia");
    if (!w) return;
    if (w.type === "video") {
      var src = (w.video && w.video.src) || "";
      var duration = (w.video && w.video.duration) || "";
      wrap.className = "work-media work-media--video";
      wrap.innerHTML =
        '<div class="video-shell" id="videoShell">' +
        '<img data-fade src="' + w.image + '" alt="' + ui.esc(w.title + "，视频封面") + '" fetchpriority="high" decoding="async">' +
        (src
          ? '<video id="workVideo" playsinline preload="none" poster="' + w.image + '" src="' + src + '"></video>'
          : "") +
        '<button class="video-shell__btn" type="button" id="videoPlay" aria-label="播放 ' + ui.esc(w.title) + '"><span>' + ui.icon("play") + "</span></button>" +
        '<span class="video-shell__note">' + ui.esc(duration) + " · 4K · 24fps</span>" +
        "</div>";
      var btn = document.getElementById("videoPlay");
      var video = document.getElementById("workVideo");
      if (video) {
        video.addEventListener("play", function () {
          document.getElementById("videoShell").classList.add("is-playing");
        });
        video.addEventListener("pause", function () {
          document.getElementById("videoShell").classList.remove("is-playing");
        });
      }
      if (btn) {
        btn.addEventListener("click", function () {
          if (video) {
            video.play().catch(function () { ui.toast("视频加载失败，可在 B 站观看完整版"); });
          } else {
            ui.toast("短片完整版发布在 B 站，可在联系页获取链接");
          }
        });
      }
      cards.mountImages(wrap);
      return;
    }

    wrap.className = "work-media";
    wrap.innerHTML =
      '<img data-fade src="' + w.image + '" alt="' + ui.esc(w.title + "，" + w.location + "，" + w.year) + '"' +
      ' style="aspect-ratio:' + (w.ratio || 0.75) + ";object-position:" + (w.focus || "50% 50%") + '"' +
      ' fetchpriority="high" decoding="async" role="button" tabindex="0" aria-label="全屏查看">';
    cards.mountImages(wrap);
    var img = wrap.querySelector("img");
    var open = function () {
      LY.lightbox.open([{
        id: w.id, title: w.title, meta: d.metaLine(w), image: w.image,
        alt: w.title + "，" + w.location + "，" + w.year
      }], 0, img);
    };
    img.addEventListener("click", open);
    img.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
  }

  function renderInfo(w) {
    var box = document.getElementById("workInfo");
    var rows = w.exif ? [
      ["机身", w.exif.camera],
      ["镜头", w.exif.lens],
      ["焦距", w.exif.focal],
      ["光圈", w.exif.aperture],
      ["快门", w.exif.shutter],
      ["ISO", w.exif.iso]
    ].filter(function (r) { return r[1]; }) : [];

    var tags = (w.tags || []).map(function (t) { return '<span class="tag">' + ui.esc(t) + "</span>"; }).join("");

    box.innerHTML =
      '<div class="work-info' + (w.description ? "" : " work-info--single") + '">' +
      (w.description
        ? '<div><p class="work-info__desc">' + ui.esc(w.description) + "</p>" +
          (tags ? '<div class="work-info__tags"><div class="tags">' + tags + "</div></div>" : "") +
          "</div>"
        : "") +
      "<div class=\"work-info__table\">" +
      (w.exif
        ? '<p class="label">拍摄信息</p><table class="meta-table"><tbody>' +
          rows.map(function (r) { return "<tr><th>" + r[0] + "</th><td>" + ui.esc(r[1]) + "</td></tr>"; }).join("") +
          "</tbody></table>"
        : (w.type === "video"
            ? '<p class="label">影像信息</p><table class="meta-table"><tbody>' +
              "<tr><th>类型</th><td>航拍短片</td></tr>" +
              "<tr><th>时长</th><td>" + ui.esc((w.video && w.video.duration) || "") + "</td></tr>" +
              "<tr><th>拍摄地</th><td>" + ui.esc(w.location) + "</td></tr>" +
              "</tbody></table>"
            : "")) +
      "</div>" +
      "</div>";
  }

  function init() {
    var id = d.queryParam("id");
    var w = id ? d.byId[id] : null;
    if (!w || w.published === false) {
      render404(id);
      return;
    }

    document.title = w.title + " · " + w.location + " · 陆屿";

    var ret = d.readReturnState();
    var list = buildList(ret);
    var idx = -1;
    for (var i = 0; i < list.length; i++) if (list[i].id === w.id) { idx = i; }

    var back = document.getElementById("workBack");
    if (back) {
      var validReturn = ret && /^works\.html/.test(ret.path || "") && Date.now() - (ret.at || 0) < 30 * 60 * 1000;
      back.href = validReturn ? ret.path : "works.html";
      back.innerHTML = ui.icon("arrowLeft") + "<span>返回" + (validReturn ? "作品索引" : "作品") + "</span>";
    }

    var no = document.getElementById("workNo");
    if (no) {
      no.textContent = (idx >= 0 ? pad(idx + 1) : "") + " / " + pad(list.length) + (w.seriesTitle ? " · " + w.seriesTitle : "");
    }
    document.getElementById("workTitle").textContent = w.title;
    var sub = document.getElementById("workSub");
    if (sub) {
      sub.textContent = [w.titleEn, w.seriesTitle, d.formatDate(w.date)].filter(Boolean).join(" — ");
    }

    renderMedia(w);
    renderInfo(w);
    renderRecs(w);

    /* 上一张 / 下一张 */
    var pager = document.getElementById("workPager");
    if (pager && idx >= 0 && list.length > 1) {
      var prev = list[(idx - 1 + list.length) % list.length];
      var next = list[(idx + 1) % list.length];
      pager.innerHTML =
        '<a href="' + prev.href + '"><span class="work-pager__label">上一张</span><span class="work-pager__title">' + ui.esc(prev.title) + "</span></a>" +
        '<a href="' + next.href + '"><span class="work-pager__label">下一张</span><span class="work-pager__title">' + ui.esc(next.title) + "</span></a>";
    }

    /* 分享 */
    ui.qsa("[data-share]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var url = location.href;
        if (navigator.share) {
          navigator.share({ title: w.title, text: w.title + " · " + w.location, url: url }).catch(function () {});
        } else {
          ui.copyText(url, "链接已复制");
        }
      });
    });

    d.saveReturnState();
    cards.mountImages(document);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
