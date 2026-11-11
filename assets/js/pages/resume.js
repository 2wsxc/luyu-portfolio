/* 简历打印版：内容与首页共用 resume-view */
(function () {
  function init() {
    if (window.LY && window.LY.resumeView) window.LY.resumeView.mount();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
