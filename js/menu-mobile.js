const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector("nav");

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});

const element = document.getElementById("go-mainwebsite");

element.addEventListener("click", function () {
  window.location.href = "../index.html";
});
