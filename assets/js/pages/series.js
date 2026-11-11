/* 系列详情：纵向叙事、进度、系列内灯箱 */
(function () {
  var LY = window.LY;
  var d = LY.data;
  var ui = LY.ui;
  var cards = LY.cards;

  function pad(n) { return n < 10 ? "0" + n : String(n); }

  function render404() {
    var main = document.getElementById("seriesMain");
    var recs = d.featured.slice(0, 3);
    document.title = "系列不存在 · 陆屿";
    if (!main) return;
    main.innerHTML =
      '<section class="wrap"><div class="empty" style="margin-top:calc(var(--nav-h) + 96px)">' +
      '<p class="empty__title">这个系列不存在或已下架</p>' +
      '<p class="empty__text">链接可能已经失效，也可能这个系列还没发布。</p>' +
      '<a class="btn" href="works.html">返回作品索引</a>' +
      "</div>" +
      '<div class="work-recs"><div class="sec-head"><div class="sec-head__left"><span class="sec-head__no">推荐</span><h2 class="sec-head__title">你可能想看</h2></div></div>' +
      '<div class="rec-grid" id="seriesRecs"></div></div></section>';
    var grid = document.getElementById("seriesRecs");
    grid.innerHTML = recs.map(function (w, i) { return cards.workCard(w, i); }).join("");
    cards.mountImages(grid);
  }

  function init() {
    var slug = d.queryParam("slug");
    var s = slug ? d.seriesBySlug[slug] : null;
    if (!s || !s.works.length) {
      render404();
      return;
    }

    document.title = s.title + " · 陆屿";

    var cover = document.getElementById("seriesCover");
    if (cover) {
      cover.innerHTML = '<img data-fade src="' + s.cover + '" alt="' + ui.esc(s.title) + "系列封面" + '" fetchpriority="high" decoding="async">';
    }

    var title = document.getElementById("seriesTitle");
    if (title) title.textContent = s.title;
    var en = document.getElementById("seriesTitleEn");
    if (en) en.textContent = (s.titleEn || "").toUpperCase();
    var meta = document.getElementById("seriesMeta");
    if (meta) {
      meta.innerHTML =
        "<span>" + ui.esc(s.regionLabel) + "</span>" +
        "<span>" + ui.esc(s.year) + "</span>" +
        "<span>" + s.count + " 张</span>" +
        (s.slug === "aerial" ? "<span>含 3 条短片</span>" : "");
    }
    var desc = document.getElementById("seriesDesc");
    if (desc) desc.textContent = s.description;

    var side = document.getElementById("seriesSide");
    if (side) {
      side.innerHTML =
        "<dt>拍摄背景</dt><dd>" + ui.esc(s.note) + "</dd>" +
        "<dt>地域</dt><dd>" + ui.esc(s.regionLabel) + "</dd>" +
        "<dt>拍摄年份</dt><dd>" + ui.esc(s.year) + "</dd>";
    }

    var body = document.getElementById("seriesBody");
    body.innerHTML = s.works.map(function (w, i) {
      return (
        '<figure class="series-figure" data-reveal data-figure="' + i + '">' +
        '<div class="series-figure__media" data-open="' + i + '" role="button" tabindex="0" aria-label="全屏查看 ' + ui.esc(w.title) + '">' +
        '<img data-fade src="' + w.image + '" alt="' + ui.esc(w.title + "，" + w.location + "，" + w.year) + '" loading="' + (i < 2 ? "eager" : "lazy") + '" decoding="async" style="aspect-ratio:' + (w.ratio || 0.75) + ';object-position:' + (w.focus || "50% 50%") + '">' +
        "</div>" +
        "<figcaption><span class=\"series-figure__title\">" + ui.esc(w.title) + "</span>" +
        "<span>" + ui.esc(w.location) + " · " + ui.esc(w.timeLabel) + " · " + ui.esc(w.year) + "</span></figcaption>" +
        "</figure>"
      );
    }).join("");
    cards.mountImages(body);

    var endText = document.getElementById("seriesEndText");
    if (endText && s.closing) endText.textContent = s.closing;

    var idx = d.series.indexOf(s);
    var prev = d.series[(idx - 1 + d.series.length) % d.series.length];
    var next = d.series[(idx + 1) % d.series.length];
    var nav = document.getElementById("seriesNav");
    if (nav) {
      nav.innerHTML =
        '<a class="series-nav__item" href="series.html?slug=' + prev.slug + '">' +
        '<span class="series-nav__label">上一系列</span>' +
        '<p class="series-nav__title">' + ui.esc(prev.title) + "</p></a>" +
        '<a class="series-nav__item series-nav__item--next" href="series.html?slug=' + next.slug + '">' +
        '<span class="series-nav__label">下一系列</span>' +
        '<p class="series-nav__title">' + ui.esc(next.title) + "</p></a>";
    }

    if (cover) cards.mountImages(cover);
    cards.mountImages(document);

    /* 灯箱：本系列内切换 */
    var items = s.works.map(function (w) {
      return {
        id: w.id,
        title: w.title,
        meta: d.metaLine(w),
        image: w.image,
        href: w.href,
        alt: w.title + "，" + w.location + "，" + w.year
      };
    });
    ui.qsa("[data-open]", body).forEach(function (node) {
      var i = parseInt(node.getAttribute("data-open"), 10) || 0;
      var open = function () {
        d.saveReturnState();
        LY.lightbox.open(items, i, node);
      };
      node.addEventListener("click", open);
      node.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      });
    });

    setupProgress(s.count);
  }

  function setupProgress(total) {
    var node = document.getElementById("seriesProgress");
    if (!node) return;
    var figures = ui.qsa("[data-figure]");
    var onScroll = function () {
      var current = 1;
      for (var i = 0; i < figures.length; i++) {
        var rect = figures[i].getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.6) current = i + 1;
      }
      node.innerHTML = pad(current) + " / " + pad(total);
      node.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
