const body = document.querySelector("body");
const menu = document.querySelector("#mobileMenu");
const header = document.querySelector("header");

const tabs = document.querySelectorAll(".tab");
const tabsContent = document.querySelectorAll(".tab-content");

function toggleMenu() {
  menu.classList.toggle("hidden");
  body.classList.toggle("overflow-hidden");
  header.classList.toggle("text-white");
}

console.log(tabsContent);

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabsContent.forEach((tabContent) => {
      tabContent.classList.remove("active-tab");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });
    tabsContent[index].classList.add("active-tab");
    tabs[index].classList.add("active-tab");
  });
});
