const body = document.querySelector("body");
const menu = document.querySelector("#mobileMenu");
const header = document.querySelector("header");

function toggleMenu() {
  menu.classList.toggle("hidden");
  body.classList.toggle("overflow-hidden");
  header.classList.toggle("text-white");
}
