document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    function scrollToSection(index) {
      sections[index].scrollIntoView({ behavior: "smooth" });
    }

    let scrolled = false;

    window.addEventListener("wheel", function () {
      if (!scrolled) {
        scrollToSection(1);
        scrolled = true;
      }
    });
  });