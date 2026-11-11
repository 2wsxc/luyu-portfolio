/* 关于：自述、方法、时间线、器材、合作方 */
(function () {
  var LY = window.LY;
  var d = LY.data;
  var ui = LY.ui;

  function init() {
    var p = d.profile;

    var portrait = document.getElementById("aboutPortrait");
    if (portrait) {
      portrait.innerHTML = '<img data-fade src="' + d.portrait +
        '" alt="南迦巴瓦的日落，2025" loading="eager" decoding="async">';
    }

    var intro = document.getElementById("aboutIntro");
    if (intro) {
      intro.innerHTML = (p.intro || []).map(function (t) { return "<p>" + ui.esc(t) + "</p>"; }).join("");
    }

    var principles = document.getElementById("principles");
    if (principles) {
      principles.innerHTML = (p.principles || []).map(function (x) {
        return '<div class="principle" data-reveal><p class="principle__no">' + x.no + "</p>" +
          '<h3 class="principle__title">' + ui.esc(x.title) + "</h3>" +
          '<p class="principle__text">' + ui.esc(x.text) + "</p></div>";
      }).join("");
    }

    var timeline = document.getElementById("timeline");
    if (timeline) {
      timeline.innerHTML = (p.timeline || []).map(function (t) {
        return '<li class="timeline__item"><p class="timeline__year">' + ui.esc(t.year) + "</p>" +
          '<p class="timeline__title">' + ui.esc(t.title) + "</p>" +
          '<p class="timeline__text">' + ui.esc(t.text) + "</p></li>";
      }).join("");
    }

    var gear = document.getElementById("gear");
    if (gear) {
      var groups = [["机身", p.gear.body], ["镜头", p.gear.lens], ["附件", p.gear.accessory]];
      gear.innerHTML = groups.map(function (g, i) {
        return '<div class="accordion__item' + (i === 0 ? " is-open" : "") + '">' +
          '<button class="accordion__trigger" type="button" aria-expanded="' + (i === 0) + '">' +
          "<span>器材 · " + g[0] + "</span><span class=\"accordion__icon\"></span></button>" +
          '<div class="accordion__panel"><div class="accordion__inner"><div class="accordion__content">' +
          '<ul class="gear-group">' +
          g[1].map(function (item) { return "<li>" + ui.esc(item) + "</li>"; }).join("") +
          "</ul></div></div></div></div>";
      }).join("");

      ui.qsa(".accordion__trigger", gear).forEach(function (btn) {
        btn.addEventListener("click", function () {
          var item = btn.parentElement;
          var open = item.classList.toggle("is-open");
          btn.setAttribute("aria-expanded", open ? "true" : "false");
        });
      });
    }

    var clients = document.getElementById("clients");
    if (clients) {
      clients.innerHTML = (p.clients || []).map(function (c) { return "<li>" + ui.esc(c) + "</li>"; }).join("");
    }

    ui.qsa("[data-total-works]").forEach(function (n) { n.textContent = d.worksCount; });
    ui.qsa("[data-total-series]").forEach(function (n) { n.textContent = d.seriesCount; });
    LY.cards.mountImages(document);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
