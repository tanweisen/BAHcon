document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;

      // Wait until navbar is added, then run scroll logic
      const navbar = document.querySelector(".navbar");

      // Start transparent if on top
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      }

      // Change color when scrolling
      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
});