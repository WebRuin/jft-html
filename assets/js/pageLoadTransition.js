const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const logo = document.querySelector(".logo");
const logoSpans = [...document.querySelectorAll(".logo-span")];
const social = document.querySelector(".social");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(function() {
    menu.classList.add("loaded-menu");
    logo.classList.add("loaded-logo");
    social.classList.add("loaded-social");
  }, 400);
});

let scrollpos = window.scrollY;
const add_class_on_scroll = () => {
  nav.classList.add("nav-fadeIn");
  logo.classList.add("logo-fadeIn");
  logoSpans.forEach(function(span) {
    span.classList.add("logo-span-fadeIn");
  });
};
const remove_class_on_scroll = () => {
  nav.classList.remove("nav-fadeIn");
  logo.classList.remove("logo-fadeIn");
  logoSpans.forEach(function(span) {
    span.classList.remove("logo-span-fadeIn");
  });
};

window.addEventListener("scroll", function() {
  scrollpos = window.scrollY;
  if (scrollpos >= 140) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
  console.log(scrollpos);
});
