/* 简历区块的共享渲染：首页与简历页使用同一套数据与结构 */
(function () {
  var LY = (window.LY = window.LY || {});

  function dots(level) {
    var out = "";
    for (var i = 1; i <= 5; i++) out += '<i class="' + (i <= level ? "is-on" : "") + '"></i>';
    return '<span class="dots" aria-label="' + level + " / 5\">" + out + "</span>";
  }

  function expItem(e) {
    return '<div class="exp-item"><div>' +
      '<p class="exp-item__org">' + LY.ui.esc(e.org) + "</p>" +
      '<p class="exp-item__role">' + LY.ui.esc(e.role) + " · " + LY.ui.esc(e.location) + "</p></div>" +
      '<span class="exp-item__time">' + LY.ui.esc(e.period) + "</span>" +
      '<ul class="exp-item__points">' +
      (e.points || []).map(function (p) { return "<li>" + LY.ui.esc(p) + "</li>"; }).join("") +
      "</ul></div>";
  }

  function projItem(p, byId) {
    var w = p.workId ? byId[p.workId] : null;
    return '<div class="project-item"><div>' +
      '<p class="project-item__name">' + LY.ui.esc(p.name) + "</p>" +
      '<p class="project-item__note">' + LY.ui.esc(p.role) + " · " + LY.ui.esc(p.note) + "</p></div>" +
      '<span class="project-item__year">' + LY.ui.esc(p.year) + "</span>" +
      (w ? '<a class="project-item__link" href="' + w.href + '">查看作品 →</a>' : "") +
      "</div>";
  }

  function skillGroup(g) {
    return '<div class="skill-group"><p class="skill-group__title">' + LY.ui.esc(g.group) + "</p>" +
      g.items.map(function (s) {
        return '<div class="skill-item"><span>' + LY.ui.esc(s.name) + "</span>" + dots(s.level) + "</div>";
      }).join("") + "</div>";
  }

  function compactItem(x) {
    return "<li><span>" + LY.ui.esc(x.year) + "</span><span>" + LY.ui.esc(x.text) + "</span></li>";
  }

  function mount() {
    var d = LY.data;
    var ui = LY.ui;
    var r = d.resume;

    ui.qsa("[data-resume-name]").forEach(function (n) { n.textContent = d.site.name; });
    ui.qsa("[data-resume-role]").forEach(function (n) { n.textContent = r.intent.role; });
    ui.qsa("[data-resume-summary]").forEach(function (n) { n.textContent = r.summary; });
    ui.qsa("[data-resume-email]").forEach(function (n) { n.textContent = d.site.email; });

    var intent = document.getElementById("intentGrid");
    if (intent) {
      var rows = [
        ["目标岗位", r.intent.role],
        ["期望城市", r.intent.city],
        ["到岗时间", r.intent.start],
        ["工作形式", r.intent.type]
      ];
      intent.innerHTML = rows.map(function (row) {
        return '<div class="intent-item"><p class="intent-item__label">' + row[0] + "</p>" +
          '<p class="intent-item__value">' + ui.esc(row[1]) + "</p></div>";
      }).join("");
    }

    var exp = document.getElementById("experienceList");
    if (exp) exp.innerHTML = r.experience.map(expItem).join("");

    var proj = document.getElementById("projectList");
    if (proj) proj.innerHTML = r.projects.map(function (p) { return projItem(p, d.byId); }).join("");

    var skills = document.getElementById("skillsGrid");
    if (skills) skills.innerHTML = r.skills.map(skillGroup).join("");

    var edu = document.getElementById("eduList");
    if (edu) edu.innerHTML = r.education.map(compactItem).join("");

    var awards = document.getElementById("awardList");
    if (awards) awards.innerHTML = r.awards.map(compactItem).join("");

    ui.qsa("[data-pdf-link]").forEach(function (a) {
      a.href = r.pdf.path;
      a.setAttribute("download", "");
    });
    ui.qsa("[data-pdf-note]").forEach(function (n) {
      n.textContent = "PDF · " + r.pdf.size + " · 更新于 " + r.pdf.updatedAt;
    });
    ui.qsa("[data-updated]").forEach(function (n) {
      n.textContent = "更新于 " + r.pdf.updatedAt + " · 网页简历与 PDF 同源";
    });
  }

  LY.resumeView = { mount: mount, dots: dots };
})();
