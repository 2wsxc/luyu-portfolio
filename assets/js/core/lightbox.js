/* 灯箱：键盘切换、滑动、缩放拖动、相邻预加载、焦点锁定 */
(function () {
  var LY = (window.LY = window.LY || {});
  var ui = LY.ui;
  var lb = null;
  var img = null;
  var items = [];
  var index = 0;
  var trigger = null;
  var isOpen = false;
  var zoomed = false;
  var loadToken = 0;

  function build() {
    lb = ui.el("div", "lightbox");
    lb.id = "lightbox";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-modal", "true");
    lb.setAttribute("aria-label", "作品查看");
    lb.setAttribute("aria-hidden", "true");
    lb.innerHTML =
      '<div class="lightbox__progress"></div>' +
      '<div class="lightbox__top">' +
      '<span class="lightbox__counter"></span>' +
      '<button class="lightbox__close" type="button" aria-label="关闭">' + ui.icon("close") + "</button>" +
      "</div>" +
      '<div class="lightbox__stage">' +
      '<button class="lightbox__nav lightbox__nav--prev" type="button" aria-label="上一张">' + ui.icon("arrowLeft") + "</button>" +
      '<img class="lightbox__img" alt="" draggable="false">' +
      '<button class="lightbox__nav lightbox__nav--next" type="button" aria-label="下一张">' + ui.icon("arrow") + "</button>" +
      "</div>" +
      '<div class="lightbox__bar">' +
      '<div><p class="lightbox__title"></p><p class="lightbox__meta"></p></div>' +
      '<a class="lightbox__hint text-link" href="#">查看详情</a>' +
      "</div>";
    document.body.appendChild(lb);
    img = lb.querySelector(".lightbox__img");

    lb.querySelector(".lightbox__close").addEventListener("click", close);
    lb.querySelector(".lightbox__nav--prev").addEventListener("click", function () { go(-1); });
    lb.querySelector(".lightbox__nav--next").addEventListener("click", function () { go(1); });
    lb.querySelector(".lightbox__stage").addEventListener("click", function (e) {
      if (e.target === e.currentTarget) close();
    });

    img.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleZoom(e);
    });

    bindSwipe();
    bindDrag();
  }

  function pad(n) {
    return n < 10 ? "0" + n : String(n);
  }

  function render() {
    var item = items[index];
    if (!item) return;
    lb.querySelector(".lightbox__counter").innerHTML = "<em>" + pad(index + 1) + "</em> / " + pad(items.length);
    lb.querySelector(".lightbox__title").textContent = item.title || "";
    lb.querySelector(".lightbox__meta").textContent = item.meta || "";
    var detail = lb.querySelector(".lightbox__hint");
    if (item.href) {
      detail.href = item.href;
      detail.style.display = "";
    } else {
      detail.style.display = "none";
    }
    lb.querySelector(".lightbox__nav--prev").style.display = items.length > 1 ? "" : "none";
    lb.querySelector(".lightbox__nav--next").style.display = items.length > 1 ? "" : "none";

    resetZoom();
    var token = ++loadToken;
    img.classList.remove("is-ready");
    lb.classList.add("is-loading");
    var progress = lb.querySelector(".lightbox__progress");
    progress.style.width = "0%";
    requestAnimationFrame(function () { progress.style.width = "65%"; });

    var pre = new Image();
    pre.onload = function () {
      if (token !== loadToken) return;
      img.src = pre.src;
      img.alt = item.alt || item.title || "";
      progress.style.width = "100%";
      setTimeout(function () {
        if (token !== loadToken) return;
        lb.classList.remove("is-loading");
        img.classList.add("is-ready");
      }, 120);
    };
    pre.onerror = function () {
      if (token !== loadToken) return;
      lb.classList.remove("is-loading");
      img.src = item.image;
      img.classList.add("is-ready");
    };
    pre.src = item.image;

    preload(index + 1);
    preload(index - 1);
  }

  function preload(i) {
    if (i < 0 || i >= items.length) return;
    var p = new Image();
    p.src = items[i].image;
  }

  function open(list, startIndex, source) {
    if (!lb) build();
    items = list || [];
    index = Math.max(0, Math.min(startIndex || 0, items.length - 1));
    trigger = source || document.activeElement;
    isOpen = true;
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.body.classList.add("lb-open");
    ui.lockScroll();
    render();
    setTimeout(function () {
      lb.querySelector(".lightbox__close").focus();
    }, 60);
  }

  function close() {
    if (!isOpen) return;
    isOpen = false;
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lb-open");
    ui.unlockScroll();
    resetZoom();
    if (trigger && trigger.focus) trigger.focus();
  }

  function go(dir) {
    if (items.length < 2) return;
    index = (index + dir + items.length) % items.length;
    render();
  }

  function resetZoom() {
    zoomed = false;
    if (!img) return;
    img.classList.remove("is-zoomed");
    img.style.transform = "";
    img.style.transformOrigin = "";
    img.style.cursor = "";
  }

  function toggleZoom(e) {
    if (!img) return;
    if (zoomed) {
      resetZoom();
      return;
    }
    var rect = img.getBoundingClientRect();
    var x = ((e.clientX - rect.left) / rect.width) * 100;
    var y = ((e.clientY - rect.top) / rect.height) * 100;
    img.style.transformOrigin = x + "% " + y + "%";
    img.style.transform = "scale(2)";
    img.classList.add("is-zoomed");
    zoomed = true;
  }

  function bindSwipe() {
    var startX = 0;
    var startY = 0;
    var tracking = false;
    var stage = lb.querySelector(".lightbox__stage");
    stage.addEventListener("touchstart", function (e) {
      if (e.touches.length !== 1 || zoomed) return;
      tracking = true;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });
    stage.addEventListener("touchend", function (e) {
      if (!tracking) return;
      tracking = false;
      var t = e.changedTouches[0];
      var dx = t.clientX - startX;
      var dy = t.clientY - startY;
      if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.4) {
        go(dx < 0 ? 1 : -1);
      }
    }, { passive: true });
  }

  function bindDrag() {
    var dragging = false;
    var sx = 0;
    var sy = 0;
    var tx = 0;
    var ty = 0;
    img.addEventListener("pointerdown", function (e) {
      if (!zoomed) return;
      dragging = true;
      sx = e.clientX;
      sy = e.clientY;
      img.style.cursor = "grabbing";
      img.setPointerCapture(e.pointerId);
    });
    img.addEventListener("pointermove", function (e) {
      if (!dragging) return;
      tx = e.clientX - sx;
      ty = e.clientY - sy;
      img.style.transform = "scale(2) translate(" + tx / 2 + "px," + ty / 2 + "px)";
    });
    var end = function () {
      dragging = false;
      img.style.cursor = "";
    };
    img.addEventListener("pointerup", end);
    img.addEventListener("pointercancel", end);
  }

  document.addEventListener("keydown", function (e) {
    if (!isOpen) return;
    if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    } else if (e.key === "Tab") {
      var focusables = ui.qsa("button, a[href]", lb).filter(function (n) {
        return n.offsetParent !== null;
      });
      if (!focusables.length) return;
      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  LY.lightbox = {
    open: open,
    close: close,
    isOpen: function () { return isOpen; }
  };
})();
