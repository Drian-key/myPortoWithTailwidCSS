// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Animate On Scroll
const hiddenElements = document.querySelectorAll(".hiddenClass");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showClass");
    } else {
      entry.target.classList.remove("showClass");
    }
  });
});

hiddenElements.forEach((el) => observer.observe(el));
