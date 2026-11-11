/* UI 工具：元素、提示、复制、图标、页面转场 */
(function () {
  var LY = (window.LY = window.LY || {});

  function qs(sel, root) {
    return (root || document).querySelector(sel);
  }

  function qsa(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function el(tag, cls, html) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (html != null) node.innerHTML = html;
    return node;
  }

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  var ICONS = {
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    arrowUpRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>',
    arrowLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
    copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="1"/><path d="M5 15V5a1 1 0 0 1 1-1h9"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 12.5 9.5 18 20 6.5"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M12 4v11M7 11l5 5 5-5M5 20h14"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3.5 6.5 8.5 6 8.5-6"/></svg>',
    zoom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5M8.5 11h5M11 8.5v5"/></svg>'
  };

  function icon(name) {
    return ICONS[name] || "";
  }

  /* 图片：先以淡入类创建，加载完成后显示；失败保留深色底 */
  function wireImage(img) {
    img.classList.add("img-fade");
    img.decoding = "async";
    var done = function () {
      img.classList.add("is-loaded");
    };
    img.addEventListener("load", done, { once: true });
    img.addEventListener("error", function () {
      img.classList.add("is-loaded");
      img.style.opacity = "0";
      var ph = img.parentElement;
      if (ph) {
        ph.classList.add("is-empty");
        if (!ph.querySelector(".media__fallback")) {
          var note = el("span", "media__fallback", "图片加载失败");
          note.style.cssText =
            "position:absolute;inset:0;display:grid;place-items:center;font-size:11px;letter-spacing:.1em;color:#7C7770;";
          ph.appendChild(note);
        }
      }
    });
    if (img.complete && img.naturalWidth > 0) done();
    return img;
  }

  var toastTimer = null;
  function toast(message) {
    var node = qs("#toast");
    if (!node) {
      node = el("div", "toast");
      node.id = "toast";
      node.setAttribute("role", "status");
      node.setAttribute("aria-live", "polite");
      document.body.appendChild(node);
    }
    node.innerHTML = icon("check") + "<span>" + esc(message) + "</span>";
    node.classList.add("is-open");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      node.classList.remove("is-open");
    }, 2600);
  }

  function copyText(text, message) {
    var done = function () { toast(message || "已复制"); };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, function () { fallback(); });
    } else {
      fallback();
    }
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;top:-999px;opacity:0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        done();
      } catch (e) {
        toast("复制失败，请手动选择邮箱");
      }
      document.body.removeChild(ta);
    }
  }

  var lockCount = 0;
  function lockScroll() {
    if (lockCount === 0) {
      var sw = window.innerWidth - document.documentElement.clientWidth;
      if (sw > 0) document.body.style.paddingRight = sw + "px";
      document.body.classList.add("is-locked");
    }
    lockCount++;
  }

  function unlockScroll() {
    lockCount = Math.max(0, lockCount - 1);
    if (lockCount === 0) {
      document.body.classList.remove("is-locked");
      document.body.style.paddingRight = "";
    }
  }

  function externalLink(href) {
    return /^(https?:|mailto:|tel:)/i.test(href || "");
  }

  /* 页面转场：内部链接淡出后跳转 */
  function initTransitions() {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    document.addEventListener("click", function (e) {
      if (e.defaultPrevented) return;
      var a = e.target.closest("a");
      if (!a) return;
      var href = a.getAttribute("href");
      if (!href || a.target === "_blank" || a.hasAttribute("download") || externalLink(href)) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      if (href.charAt(0) === "#") return;
      if (a.origin && a.origin !== location.origin) return;
      e.preventDefault();
      document.body.classList.add("is-leaving");
      var go = function () { window.location.href = a.href; };
      setTimeout(go, 170);
    });
  }

  LY.ui = {
    qs: qs,
    qsa: qsa,
    el: el,
    esc: esc,
    icon: icon,
    wireImage: wireImage,
    toast: toast,
    copyText: copyText,
    lockScroll: lockScroll,
    unlockScroll: unlockScroll,
    initTransitions: initTransitions
  };

  initTransitions();
})();
