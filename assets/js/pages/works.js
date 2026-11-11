/* 作品索引：系列入口、筛选、排序、分页、灯箱与 URL 状态 */
(function () {
  var LY = window.LY;
  var d = LY.data;
  var ui = LY.ui;
  var cards = LY.cards;

  var PAGE = 12;
  var state = d.readFilters();
  var shown = PAGE;
  var list = [];
  var seriesExpanded = false;

  var els = {};

  function cache() {
    els.seriesGrid = document.getElementById("seriesGrid");
    els.seriesChips = document.getElementById("seriesChips");
    els.filterBody = document.getElementById("filterBody");
    els.filterPanel = document.getElementById("filterPanel");
    els.filterToggle = document.getElementById("filterToggle");
    els.filterCount = document.getElementById("filterCount");
    els.grid = document.getElementById("worksGrid");
    els.empty = document.getElementById("worksEmpty");
    els.resultCount = document.getElementById("resultCount");
    els.shownCount = document.getElementById("shownCount");
    els.totalCount = document.getElementById("totalCount");
    els.loadMore = document.getElementById("loadMore");
    els.sortGroup = document.getElementById("sortGroup");
    els.headCount = document.querySelector("[data-works-count]");
  }

  function pad(n) { return n < 10 ? "0" + n : String(n); }

  /* ── 系列区 ─────────────────────────────────────── */
  function renderSeries() {
    if (!els.seriesGrid) return;
    var all = d.series;
    var visible = seriesExpanded ? all : all.slice(0, 6);
    els.seriesGrid.innerHTML = visible.map(function (s, i) {
      return cards.seriesCard(s, i);
    }).join("");
    cards.mountImages(els.seriesGrid);

    var btn = document.getElementById("moreSeries");
    if (btn) {
      if (all.length <= 6) {
        btn.parentElement.style.display = "none";
      } else {
        btn.parentElement.style.display = "";
        btn.textContent = seriesExpanded ? "收起系列" : "全部系列（" + all.length + "）";
        btn.onclick = function () {
          seriesExpanded = !seriesExpanded;
          renderSeries();
        };
      }
    }
  }

  /* ── 筛选 UI ────────────────────────────────────── */
  function chip(value, label, count, active, onPick) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "chip" + (active ? " is-active" : "");
    b.setAttribute("aria-pressed", active ? "true" : "false");
    b.innerHTML = ui.esc(label) + (count != null ? ' <span class="chip__count">' + count + "</span>" : "");
    b.addEventListener("click", function () { onPick(value); });
    return b;
  }

  function renderChips() {
    if (!els.seriesChips) return;
    els.seriesChips.innerHTML = "";
    var seriesCounts = {};
    d.works.forEach(function (w) {
      if (!w.series) return;
      seriesCounts[w.series] = (seriesCounts[w.series] || 0) + 1;
    });
    els.seriesChips.appendChild(chip("all", "全部", d.worksCount, state.series === "all", function () {
      state.series = "all";
      commit();
    }));
    d.series.forEach(function (s) {
      els.seriesChips.appendChild(chip(s.slug, s.title, seriesCounts[s.slug] || 0, state.series === s.slug, function () {
        state.series = state.series === s.slug ? "all" : s.slug;
        commit();
      }));
    });

    var link = document.getElementById("seriesJump");
    if (link) {
      if (state.series !== "all") {
        link.href = "series.html?slug=" + encodeURIComponent(state.series);
        link.style.display = "";
        link.innerHTML = "查看「" + ui.esc(d.seriesBySlug[state.series].title) + "」系列 " + ui.icon("arrow");
      } else {
        link.style.display = "none";
      }
    }
  }

  function renderFilterPanel() {
    if (!els.filterBody) return;
    els.filterBody.innerHTML = "";

    function row(label, options, key) {
      var wrap = document.createElement("div");
      wrap.className = "filter-row";
      var l = document.createElement("span");
      l.className = "filter-row__label";
      l.textContent = label;
      var chips = document.createElement("div");
      chips.className = "chip-row";
      chips.appendChild(chip("all", "不限", null, !state[key] || state[key] === "all", function () {
        state[key] = "all";
        commit();
      }));
      options.forEach(function (opt) {
        chips.appendChild(chip(opt.value, opt.label, null, state[key] === opt.value, function () {
          state[key] = state[key] === opt.value ? "all" : opt.value;
          commit();
        }));
      });
      wrap.appendChild(l);
      wrap.appendChild(chips);
      els.filterBody.appendChild(wrap);
    }

    row("地域", d.regions, "region");
    row("季节", d.seasons, "season");
    row("时段", d.times, "time");
  }

  function renderSort() {
    if (!els.sortGroup) return;
    ui.qsa("[data-sort]", els.sortGroup).forEach(function (btn) {
      var on = btn.getAttribute("data-sort") === state.sort;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.onclick = function () {
        if (state.sort === btn.getAttribute("data-sort")) return;
        state.sort = btn.getAttribute("data-sort");
        commit();
      };
    });
  }

  function syncFilterUI() {
    var active = d.activeFilterCount(state);
    if (els.filterCount) {
      els.filterCount.textContent = active;
      els.filterCount.hidden = active === 0;
    }
    if (els.filterToggle) els.filterToggle.classList.toggle("is-active", active > 0);
    var mobileBtn = document.getElementById("filterApplyMobile");
    if (mobileBtn) mobileBtn.textContent = "查看 " + list.length + " 件作品";
  }

  /* ── URL ────────────────────────────────────────── */
  function updateURL() {
    var params = [];
    if (state.series !== "all") params.push("series=" + encodeURIComponent(state.series));
    if (state.region !== "all") params.push("region=" + encodeURIComponent(state.region));
    if (state.season !== "all") params.push("season=" + encodeURIComponent(state.season));
    if (state.time !== "all") params.push("time=" + encodeURIComponent(state.time));
    if (state.sort !== "featured") params.push("sort=" + encodeURIComponent(state.sort));
    var qs = params.length ? "?" + params.join("&") : "";
    try {
      history.replaceState(null, "", location.pathname + qs + location.hash);
    } catch (e) {}
  }

  /* ── 网格 ───────────────────────────────────────── */
  function renderGrid(reset) {
    if (!els.grid) return;
    list = d.filterWorks(state);
    if (reset) shown = PAGE;

    var slice = list.slice(0, shown);
    els.grid.innerHTML = slice.map(function (w, i) {
      return cards.workCard(w, i);
    }).join("");
    cards.mountImages(els.grid);

    if (els.resultCount) els.resultCount.textContent = list.length;
    if (els.totalCount) els.totalCount.textContent = list.length;
    if (els.shownCount) els.shownCount.textContent = Math.min(shown, list.length);
    if (els.headCount) {
      var inList = {};
      list.forEach(function (w) { if (w.series) inList[w.series] = 1; });
      var seriesN = Object.keys(inList).length;
      els.headCount.textContent = list.length + " 张" + (seriesN ? " / " + seriesN + " 个系列" : "");
    }

    if (els.loadMore) {
      var wrap = els.loadMore.parentElement;
      wrap.style.display = list.length > shown ? "" : "none";
      els.loadMore.textContent = "加载更多（" + Math.max(0, list.length - shown) + "）";
    }

    if (els.empty) {
      if (!list.length) {
        els.empty.innerHTML =
          '<div class="empty" data-reveal>' +
          '<p class="empty__title">没有符合条件的作品</p>' +
          '<p class="empty__text">试试清除筛选，或查看全部作品。</p>' +
          '<button class="btn" type="button" data-clear>清除全部筛选</button>' +
          "</div>";
        var cb = els.empty.querySelector("[data-clear]");
        if (cb) cb.onclick = clearAll;
      } else {
        els.empty.innerHTML = "";
      }
    }

    bindCards();
    syncFilterUI();
  }

  function bindCards() {
    ui.qsa(".work-card", els.grid).forEach(function (card) {
      card.addEventListener("click", function (e) {
        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
        e.preventDefault();
        var id = card.getAttribute("data-work");
        var idx = 0;
        for (var i = 0; i < list.length; i++) {
          if (list[i].id === id) { idx = i; break; }
        }
        d.saveReturnState({ filters: state });
        LY.lightbox.open(list.map(function (w) {
          return {
            id: w.id,
            title: w.title,
            meta: d.metaLine(w),
            image: w.image,
            href: w.href,
            alt: w.title + "，" + w.location + "，" + w.year
          };
        }), idx, card);
      });
    });
  }

  function clearAll() {
    state = { series: "all", region: "all", season: "all", time: "all", sort: "featured" };
    commit();
  }

  function commit() {
    updateURL();
    var run = function () {
      renderChips();
      renderFilterPanel();
      renderSort();
      renderGrid(true);
    };
    if (document.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.startViewTransition(run);
    } else {
      run();
    }
  }

  /* ── 移动端底部面板 ─────────────────────────────── */
  function setupPanel() {
    if (!els.filterPanel || !els.filterToggle) return;
    var backdrop = ui.el("div", "filter-backdrop");
    document.body.appendChild(backdrop);

    function open() {
      els.filterPanel.classList.add("is-open");
      backdrop.classList.add("is-open");
      ui.lockScroll();
      els.filterToggle.setAttribute("aria-expanded", "true");
    }
    function close() {
      els.filterPanel.classList.remove("is-open");
      backdrop.classList.remove("is-open");
      ui.unlockScroll();
      els.filterToggle.setAttribute("aria-expanded", "false");
    }
    els.filterToggle.setAttribute("aria-expanded", "false");
    els.filterToggle.addEventListener("click", function () {
      if (els.filterPanel.classList.contains("is-open")) close();
      else open();
    });
    backdrop.addEventListener("click", close);

    var closeBtn = document.getElementById("filterCloseMobile");
    if (closeBtn) closeBtn.addEventListener("click", close);
    var applyBtn = document.getElementById("filterApplyMobile");
    if (applyBtn) applyBtn.addEventListener("click", close);
    var clearBtn = document.getElementById("filterClearMobile");
    if (clearBtn) clearBtn.addEventListener("click", function () { clearAll(); close(); });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && els.filterPanel.classList.contains("is-open")) close();
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 639) close();
    });
  }

  function setupLoadMore() {
    if (!els.loadMore) return;
    els.loadMore.addEventListener("click", function () {
      shown += PAGE;
      renderGrid(false);
      var cardsNow = ui.qsa(".work-card", els.grid);
      cardsNow.slice(Math.max(0, shown - PAGE)).forEach(function (card, i) {
        card.style.setProperty("--d", Math.min(i, 8) * 40 + "ms");
      });
    });
  }

  function restoreScroll() {
    var ret = d.readReturnState();
    if (!ret) return;
    if (!/^works\.html/.test(ret.path || "")) return;
    if (Date.now() - (ret.at || 0) > 30 * 60 * 1000) return;
    if (ret.filters) {
      state = Object.assign(state, ret.filters);
    }
    if (ret.scroll > 0) {
      var y = ret.scroll;
      setTimeout(function () {
        window.scrollTo({ top: y, behavior: "auto" });
      }, 120);
    }
  }

  function init() {
    cache();
    restoreScroll();
    renderSeries();
    renderChips();
    renderFilterPanel();
    renderSort();
    renderGrid(true);
    setupPanel();
    setupLoadMore();
    cards.mountImages(document);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
