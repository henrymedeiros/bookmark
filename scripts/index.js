const body = document.querySelector("body");

const menu = document.querySelector("#mobileMenu");
const header = document.querySelector("header");
const menuLogo = document.querySelector("#menuLogo");
const hamburgerIcon = document.querySelector("#hamburgerIcon");

const form = document.querySelector("form");
const email = document.querySelector("#email");
const emailErrorElement = document.querySelector("#emailErrorMessage");

const tabs = document.querySelectorAll(".tab");
const tabsContent = document.querySelectorAll(".tab-container");

const accordions = document.querySelectorAll(".accordion-item");

function toggleMenu() {
  menu.classList.toggle("hidden");
  body.classList.toggle("overflow-hidden");
  header.classList.toggle("text-white");
  menuLogo.classList.toggle("on-dark");
  hamburgerIcon.classList.toggle("fill-white");
  hamburgerIcon.src = "./images/icon-close.svg";
}

form.addEventListener("submit", (e) => {
  let message = "";
  if (email.value === "" || email.value == null) {
    message = "Email is required";
  } else if (email.value !== "" && !email.value.includes("@")) {
    message = "Whoops, make sure it's a valid email";
  }

  if (message != "") {
    console.log("bruh");
    e.preventDefault();
    emailErrorElement.innerText = message;
  }
});

/* TABS */
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabsContent.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabsContent[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});
/* ACCORDION */
accordions.forEach((accordion) => {
  const accordionHeader = accordion.querySelector(".accordion-header");
  const accordionContent = accordion.querySelector(".accordion-content");

  accordionHeader.addEventListener("click", () => {
    accordion.classList.toggle("active");
    accordionContent.classList.toggle("active");
  });
});
