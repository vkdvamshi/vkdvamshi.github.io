/* Minimal interactions — no animation, content-first. */
(function () {
  "use strict";

  // Current year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Mobile menu toggle
  var burger = document.getElementById("navBurger");
  var links = document.getElementById("navLinks");
  burger.addEventListener("click", function () {
    links.classList.toggle("open");
  });
  links.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      links.classList.remove("open");
    });
  });
})();
