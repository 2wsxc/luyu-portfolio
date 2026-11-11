/* 导航：滚动态、全屏菜单、移动端底部操作条、当前页标记 */
(function () {
  var LY = window.LY || {};
  var ui = LY.ui;

  function init() {
    var nav = document.getElementById("nav");
    var menu = document.getElementById("menu");
    var burger = document.getElementById("burger");
    var bar = document.getElementById("mobileBar");
    var page = document.body.getAttribute("data-page") || "";
    var navMode = document.body.getAttribute("data-nav") || "auto";
    /* 首页即简历，因此首页高亮「简历」 */
    var activeKey = page === "work" || page === "series" ? "works" : page === "home" ? "resume" : page;

    ui.qsa("[data-nav]").forEach(function (link) {
      if (link.getAttribute("data-nav") === activeKey) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");
      }
    });

    function setSolid() {
      if (!nav) return;
      if (navMode === "solid") {
        nav.classList.add("is-solid");
        return;
      }
      nav.classList.toggle("is-solid", window.scrollY > 80);
    }
    setSolid();
    window.addEventListener("scroll", setSolid, { passive: true });

    /* 菜单 */
    var lastFocus = null;
    function focusables() {
      return ui.qsa("a[href], button:not([disabled])", menu);
    }
    function openMenu() {
      if (!menu) return;
      lastFocus = document.activeElement;
      menu.classList.add("is-open");
      menu.setAttribute("aria-hidden", "false");
      if (burger) {
        burger.setAttribute("aria-expanded", "true");
        burger.setAttribute("aria-label", "关闭菜单");
      }
      if (nav) nav.classList.add("is-solid", "is-menu-open");
      document.body.classList.add("menu-open");
      ui.lockScroll();
      var first = focusables()[0];
      if (first) setTimeout(function () { first.focus(); }, 120);
    }
    function closeMenu(restore) {
      if (!menu || !menu.classList.contains("is-open")) return;
      menu.classList.remove("is-open");
      menu.setAttribute("aria-hidden", "true");
      if (burger) {
        burger.setAttribute("aria-expanded", "false");
        burger.setAttribute("aria-label", "打开菜单");
      }
      if (nav) nav.classList.remove("is-menu-open");
      if (navMode !== "solid") nav.classList.toggle("is-solid", window.scrollY > 80);
      document.body.classList.remove("menu-open");
      ui.unlockScroll();
      if (restore !== false && lastFocus) lastFocus.focus();
    }

    if (burger) {
      burger.addEventListener("click", function () {
        if (menu && menu.classList.contains("is-open")) closeMenu();
        else openMenu();
      });
    }

    if (menu) {
      menu.addEventListener("click", function (e) {
        if (e.target.closest("a")) closeMenu(false);
      });
      document.addEventListener("keydown", function (e) {
        if (!menu.classList.contains("is-open")) return;
        if (e.key === "Escape") {
          e.preventDefault();
          closeMenu();
          return;
        }
        if (e.key === "Tab") {
          var list = focusables();
          if (!list.length) return;
          var first = list[0];
          var last = list[list.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      });
    }

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1024) closeMenu(false);
    });

    /* 底部操作条 */
    if (bar) {
      var barMode = document.body.getAttribute("data-mobilebar");
      if (barMode === "off") {
        bar.parentNode && bar.parentNode.removeChild(bar);
      } else {
        var onScroll = function () {
          var passed = window.scrollY > window.innerHeight * 0.9;
          var blocked = document.body.classList.contains("is-locked");
          bar.classList.toggle("is-visible", passed && !blocked);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
      }
    }

    /* 复制邮箱 */
    ui.qsa("[data-copy-email]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        var email = btn.getAttribute("data-copy-email");
        ui.copyText(email, "邮箱已复制 " + email);
      });
    });

    /* 页脚年份 */
    ui.qsa("[data-year]").forEach(function (n) {
      n.textContent = new Date().getFullYear();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
