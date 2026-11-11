/* 滚动出现：只做透明度与 12px 位移；失败时全部可见 */
(function () {
  function init() {
    var root = document.documentElement;
    root.classList.add("js");
    var targets = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
    var groups = Array.prototype.slice.call(document.querySelectorAll("[data-reveal-group]"));

    groups.forEach(function (group) {
      Array.prototype.slice.call(group.querySelectorAll("[data-reveal]")).forEach(function (node, i) {
        node.style.setProperty("--d", Math.min(i, 8) * 60 + "ms");
      });
    });

    var showAll = function () {
      targets.forEach(function (n) { n.classList.add("is-in"); });
    };

    if (!("IntersectionObserver" in window)) {
      document.body.classList.add("reveal-fallback");
      showAll();
      return;
    }

    try {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
      );

      targets.forEach(function (n) {
        /* 首屏内容立即出现，不等滚动 */
        var rect = n.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92) {
          n.classList.add("is-in");
        } else {
          io.observe(n);
        }
      });

      /* 时间线节点 */
      var timelineItems = document.querySelectorAll(".timeline__item");
      var io2 = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              io2.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "-30% 0px -40% 0px" }
      );
      Array.prototype.forEach.call(timelineItems, function (n) { io2.observe(n); });

      window.addEventListener("pagehide", function () {
        io.disconnect();
        io2.disconnect();
      });
    } catch (err) {
      document.body.classList.add("reveal-fallback");
      showAll();
    }

    /* 兜底：任何情况下 3 秒后内容必须可见 */
    setTimeout(showAll, 3000);
  }

  /* 等页面脚本渲染完动态内容后再接管，避免动态卡片停留在隐藏态 */
  if (document.readyState === "complete") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
