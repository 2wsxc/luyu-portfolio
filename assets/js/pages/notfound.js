/* 404：推荐三件作品 */
(function () {
  var LY = window.LY;
  var d = LY.data;
  var cards = LY.cards;

  function init() {
    var box = document.getElementById("errorRecs");
    if (!box) return;
    box.innerHTML = d.featured.slice(0, 3).map(function (w, i) { return cards.workCard(w, i); }).join("");
    cards.mountImages(box);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
