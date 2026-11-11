/* 首页即简历：首屏身份与意向、经历、项目、技能、作品选与联系 */
(function () {
  var LY = window.LY;
  var d = LY.data;
  var ui = LY.ui;
  var cards = LY.cards;

  function renderIntro() {
    var r = d.resume;
    var site = d.site;

    ui.qsa("[data-role]").forEach(function (n) { n.textContent = site.role; });
    ui.qsa("[data-summary]").forEach(function (n) { n.textContent = r.summary; });

    var portrait = document.getElementById("portraitImg");
    if (portrait) {
      portrait.src = d.portrait;
      ui.wireImage(portrait);
    }

    var facts = document.getElementById("intentFacts");
    if (facts) {
      var rows = [
        ["目标岗位", r.intent.role],
        ["期望城市", r.intent.city],
        ["到岗时间", r.intent.start],
        ["工作形式", r.intent.type]
      ];
      facts.innerHTML = rows.map(function (row) {
        return '<div class="fact"><dt>' + row[0] + "</dt><dd>" + ui.esc(row[1]) + "</dd></div>";
      }).join("");
    }

    var stats = document.getElementById("introStats");
    if (stats) {
      var years = new Date().getFullYear() - 2018;
      var items = [
        [years, "年从业"],
        [d.worksCount, "件作品"],
        [d.seriesCount, "个系列"]
      ];
      stats.innerHTML = items.map(function (x) {
        return '<li class="stat"><span class="stat__num">' + x[0] + "</span>" +
          '<span class="stat__label">' + x[1] + "</span></li>";
      }).join("");
    }
  }

  function renderSeries() {
    var box = document.getElementById("homeSeries");
    if (!box) return;
    box.innerHTML = d.homeSeries.map(function (s, i) { return cards.seriesCard(s, i); }).join("");
    cards.mountImages(box);
  }

  function init() {
    renderIntro();
    if (LY.resumeView) LY.resumeView.mount();
    renderSeries();
    cards.mountImages(document);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
