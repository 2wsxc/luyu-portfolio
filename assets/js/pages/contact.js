/* 联系：邮箱复制、社交链接、微信弹层 */
(function () {
  var LY = window.LY;
  var d = LY.data;
  var ui = LY.ui;

  function init() {
    var email = d.site.email;

    ui.qsa("[data-contact-email]").forEach(function (n) { n.textContent = email; });
    ui.qsa("[data-contact-mail]").forEach(function (a) { a.href = "mailto:" + email; });
    ui.qsa("[data-copy-email]").forEach(function (btn) {
      btn.setAttribute("data-copy-email", email);
    });
    ui.qsa("[data-availability]").forEach(function (n) { n.textContent = d.site.availability; });

    var social = document.getElementById("socialList");
    if (social) {
      social.innerHTML = d.site.social.map(function (s) {
        return '<div class="info-row"><span class="info-row__label">' + ui.esc(s.label) + "</span>" +
          '<a href="' + s.url + '" target="_blank" rel="noopener">' + ui.esc(s.handle) + "</a></div>";
      }).join("");
    }

    var modal = document.getElementById("wechatModal");
    var triggers = ui.qsa("#wechatBtn, #wechatBtnText");
    if (modal && triggers.length) {
      var open = function () {
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        ui.lockScroll();
        var closeBtn = modal.querySelector("[data-close-modal]");
        if (closeBtn) closeBtn.focus();
      };
      var close = function () {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        ui.unlockScroll();
        if (triggers[0]) triggers[0].focus();
      };
      triggers.forEach(function (trigger) {
        trigger.addEventListener("click", open);
      });
      modal.addEventListener("click", function (e) {
        if (e.target === modal || e.target.closest("[data-close-modal]")) close();
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && modal.classList.contains("is-open")) close();
      });
      var wx = document.getElementById("wechatId");
      if (wx) wx.textContent = d.site.wechat;
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
