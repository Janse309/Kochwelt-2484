(function () {
  const KEY = "kochwelt_cookie_notice_v1";
  const banner = document.getElementById("cookie-banner");
  const btnAccept = document.getElementById("cookie-accept");
  const btnHide = document.getElementById("cookie-hide");

  // Wenn schon bestätigt -> nicht anzeigen
  if (localStorage.getItem(KEY) === "accepted") return;

  // Banner anzeigen
  banner.hidden = false;

  function accept() {
    localStorage.setItem(KEY, "accepted");
    banner.hidden = true;
  }

  function hide() {
    // nur schließen (ohne speichern) – erscheint beim nächsten Laden wieder
    banner.hidden = true;
  }

  btnAccept.addEventListener("click", accept);
  btnHide.addEventListener("click", hide);

  // ESC schließt
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !banner.hidden) banner.hidden = true;
  });
})();
