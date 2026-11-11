/* 数据访问层：过滤、排序、图片地址、URL 状态与返回位置恢复 */
(function () {
  var D = window.SITE_DATA || {};
  var IMG_DIR = "assets/img/";
  var PORTRAIT = IMG_DIR + "about/portrait.jpg";

  function workImage(id) {
    return IMG_DIR + "works/" + id + ".jpg";
  }

  function seriesCover(slug) {
    return IMG_DIR + "series/" + slug + ".jpg";
  }

  var REGIONS = [
    { value: "east", label: "华东" },
    { value: "southwest", label: "西南" },
    { value: "northwest", label: "西北" },
    { value: "northeast", label: "东北" },
    { value: "island", label: "海岛" },
    { value: "overseas", label: "海外" }
  ];
  var SEASONS = [
    { value: "spring", label: "春" },
    { value: "summer", label: "夏" },
    { value: "autumn", label: "秋" },
    { value: "winter", label: "冬" }
  ];
  var TIMES = [
    { value: "blue_hour", label: "蓝调" },
    { value: "sunrise", label: "日出" },
    { value: "day", label: "日间" },
    { value: "sunset", label: "日落" },
    { value: "night", label: "夜景" }
  ];

  function labelOf(list, value) {
    for (var i = 0; i < list.length; i++) if (list[i].value === value) return list[i].label;
    return "";
  }

  var works = (D.works || []).filter(function (w) { return w.published !== false; });
  var seriesRaw = (D.series || []).filter(function (s) { return s.published !== false; });

  var series = seriesRaw.map(function (s) {
    var list = works.filter(function (w) { return w.series === s.slug; });
    return Object.assign({}, s, {
      works: list,
      count: list.length,
      regionLabel: labelOf(REGIONS, s.region),
      cover: s.cover || seriesCover(s.slug)
    });
  }).sort(function (a, b) { return a.order - b.order; });

  var byId = {};
  works.forEach(function (w, i) {
    w.index = i;
    w.href = "work.html?id=" + encodeURIComponent(w.id);
    w.image = w.image || workImage(w.id);
    w.ratio = w.ratioActual || 1.78;
    w.year = (w.date || "").slice(0, 4);
    w.regionLabel = labelOf(REGIONS, w.region);
    w.seasonLabel = labelOf(SEASONS, w.season);
    w.timeLabel = labelOf(TIMES, w.timeOfDay);
    w.seriesTitle = "";
    byId[w.id] = w;
  });

  var seriesBySlug = {};
  series.forEach(function (s) {
    seriesBySlug[s.slug] = s;
    s.works.forEach(function (w) { w.seriesTitle = s.title; });
  });

  function sortDefault(a, b) {
    if (b.sortWeight !== a.sortWeight) return b.sortWeight - a.sortWeight;
    if (a.date !== b.date) return a.date < b.date ? 1 : -1;
    return a.title.localeCompare(b.title, "zh-Hans-CN");
  }
  function sortLatest(a, b) {
    if (a.date !== b.date) return a.date < b.date ? 1 : -1;
    return a.id < b.id ? 1 : -1;
  }

  var featured = works.filter(function (w) { return w.featured; }).sort(sortDefault);
  var heroId = (D.site && D.site.heroWorkId) || (featured[0] && featured[0].id);
  var hero = byId[heroId] || featured[0] || works[0] || null;
  var homeFeatured = featured.filter(function (w) { return !hero || w.id !== hero.id; }).slice(0, 4);
  var homeSeries = series.filter(function (s) { return s.featured; }).slice(0, 3);
  if (homeSeries.length < 3) {
    series.forEach(function (s) {
      if (homeSeries.length < 3 && homeSeries.indexOf(s) === -1) homeSeries.push(s);
    });
  }

  function queryParam(name) {
    var m = new RegExp("[?&]" + name + "=([^&]*)").exec(window.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, " ")) : "";
  }

  function validValue(list, value) {
    for (var i = 0; i < list.length; i++) if (list[i].value === value) return value;
    return "";
  }

  function readFilters() {
    var s = queryParam("series");
    return {
      series: s && seriesBySlug[s] ? s : "all",
      region: validValue(REGIONS, queryParam("region")) || "all",
      season: validValue(SEASONS, queryParam("season")) || "all",
      time: validValue(TIMES, queryParam("time")) || "all",
      sort: queryParam("sort") === "latest" ? "latest" : "featured"
    };
  }

  function filterWorks(f, opts) {
    opts = opts || {};
    var pool = opts.pool ? opts.pool.slice() : works.slice();
    var out = pool.filter(function (w) {
      if (f.series && f.series !== "all" && w.series !== f.series) return false;
      if (f.region && f.region !== "all" && w.region !== f.region) return false;
      if (f.season && f.season !== "all" && w.season !== f.season) return false;
      if (f.time && f.time !== "all" && w.timeOfDay !== f.time) return false;
      return true;
    });
    out.sort(f.sort === "latest" ? sortLatest : sortDefault);
    return out;
  }

  function activeFilterCount(f) {
    var n = 0;
    ["region", "season", "time"].forEach(function (k) { if (f[k] && f[k] !== "all") n++; });
    return n;
  }

  function formatDate(date) {
    return String(date || "").replace(/-/g, ".");
  }

  function metaLine(w) {
    return [w.location, w.timeLabel, w.year].filter(Boolean).join(" · ");
  }

  /* 记录进入详情前的来源页、筛选与滚动位置 */
  function saveReturnState(extra) {
    try {
      var state = {
        path: window.location.pathname.split("/").pop() + window.location.search,
        scroll: window.scrollY,
        filters: extra && extra.filters ? extra.filters : null,
        at: Date.now()
      };
      sessionStorage.setItem("works:return", JSON.stringify(state));
    } catch (e) {}
  }

  function readReturnState() {
    try {
      var raw = sessionStorage.getItem("works:return");
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  var LY = window.LY = window.LY || {};
  LY.data = {
    site: D.site || {},
    profile: D.profile || {},
    resume: D.resume || {},
    works: works,
    series: series,
    featured: featured,
    hero: hero,
    homeFeatured: homeFeatured,
    homeSeries: homeSeries,
    byId: byId,
    seriesBySlug: seriesBySlug,
    regions: REGIONS,
    seasons: SEASONS,
    times: TIMES,
    labelOf: labelOf,
    portrait: PORTRAIT,
    workImage: workImage,
    seriesCover: seriesCover,
    worksCount: works.length,
    seriesCount: series.length,
    queryParam: queryParam,
    readFilters: readFilters,
    filterWorks: filterWorks,
    activeFilterCount: activeFilterCount,
    formatDate: formatDate,
    metaLine: metaLine,
    saveReturnState: saveReturnState,
    readReturnState: readReturnState,
    sortDefault: sortDefault,
    sortLatest: sortLatest
  };
})();
