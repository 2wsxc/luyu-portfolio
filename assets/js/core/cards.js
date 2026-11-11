/* 卡片模板与图片挂载 */
(function () {
  var LY = (window.LY = window.LY || {});
  var ui = LY.ui;

  function pad(n, size) {
    var s = String(n);
    while (s.length < (size || 2)) s = "0" + s;
    return s;
  }

  function imgTag(src, alt, opts) {
    opts = opts || {};
    return (
      '<img data-fade src="' + src + '" alt="' + ui.esc(alt) + '"' +
      ' loading="' + (opts.eager ? "eager" : "lazy") + '"' +
      ' decoding="async"' +
      (opts.eager ? ' fetchpriority="high"' : "") +
      ' style="object-position:' + (opts.focus || "50% 50%") + '"' +
      (opts.w ? ' width="' + opts.w + '" height="' + opts.h + '"' : "") +
      ">"
    );
  }

  function workCard(w, i, opts) {
    opts = opts || {};
    var isVideo = w.type === "video";
    var badge = isVideo
      ? '<span class="media__badge">' + ui.esc(w.video ? w.video.duration : "") + "</span>"
      : '<span class="media__badge">' + ui.esc(w.timeLabel || "") + "</span>";
    var play = isVideo
      ? '<span class="media__play"><span>' + ui.icon("play") + "</span></span>"
      : "";
    var no = opts.no === false ? "" : '<span class="work-card__no">' + pad(i + 1) + "</span>";
    return (
      '<a class="work-card" href="' + w.href + '" data-work="' + w.id + '"' +
      (opts.reveal === false ? "" : " data-reveal") + ">" +
      '<div class="media media--3x2">' +
      imgTag(w.image, w.title + "，" + w.location + "，" + w.year, { focus: w.focus, w: 1200, h: 800, eager: i < 4 }) +
      play +
      badge +
      "</div>" +
      '<div class="work-card__caption">' +
      "<div>" +
      '<p class="work-card__title">' + ui.esc(w.title) + "</p>" +
      '<p class="work-card__meta">' + ui.esc(w.location) + " · " + ui.esc(w.year) + "</p>" +
      "</div>" +
      no +
      "</div>" +
      "</a>"
    );
  }

  function seriesCard(s, i, opts) {
    opts = opts || {};
    return (
      '<a class="series-card" href="series.html?slug=' + encodeURIComponent(s.slug) + '"' +
      (opts.reveal === false ? "" : " data-reveal") + ">" +
      '<div class="media media--16x9">' +
      imgTag(s.cover, s.title + "系列封面", { focus: "50% 50%", w: 1280, h: 720, eager: i < 3 }) +
      "</div>" +
      '<div class="series-card__caption">' +
      "<div>" +
      '<p class="series-card__no">' + pad(i + 1) + "</p>" +
      '<h3 class="series-card__title">' + ui.esc(s.title) + "</h3>" +
      '<p class="series-card__meta">' + ui.esc(s.regionLabel || "") + " · " + ui.esc(s.year) + "</p>" +
      "</div>" +
      '<span class="series-card__count">' + s.count + " 张</span>" +
      "</div>" +
      "</a>"
    );
  }

  function mountImages(root) {
    var scope = root || document;
    ui.qsa("img[data-fade]", scope).forEach(function (img) {
      ui.wireImage(img);
    });
    /* 动态渲染的卡片不在观察器里，直接以淡入方式显示 */
    if (document.documentElement.classList.contains("js")) {
      var items = ui.qsa("[data-reveal]:not(.is-in)", scope);
      if (items.length) {
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            items.forEach(function (n) { n.classList.add("is-in"); });
          });
        });
      }
    }
  }

  LY.cards = {
    workCard: workCard,
    seriesCard: seriesCard,
    mountImages: mountImages,
    pad: pad
  };
})();
