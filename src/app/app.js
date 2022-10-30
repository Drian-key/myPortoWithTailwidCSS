export const all = () => {
  // Navbar Fixed
  window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector("#toTop");

    if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
      toTop.classList.remove("hidden");
      toTop.classList.add("flex");
    } else {
      header.classList.remove("navbar-fixed");
      toTop.classList.add("hidden");
      toTop.classList.remove("flex");
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

  // Darkmode Toggle
  const darkToggle = document.querySelector("#darkToggle");
  const html = document.querySelector("html");

  darkToggle.addEventListener("click", () => {
    if (darkToggle.checked) {
      html.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      html.classList.remove("dark");
      localStorage.theme = "light";
    }
  });

  // Memindahkan posisi toggle sesuai mode
  if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }
};
