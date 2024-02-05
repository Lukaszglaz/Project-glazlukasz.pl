document.addEventListener("DOMContentLoaded", function () {
  const dropdownItems = document.querySelectorAll(".dropdown-item");

  dropdownItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      const subMenu = this.querySelector(".sub-menu");
      subMenu.style.maxHeight = subMenu.scrollHeight + "px";
    });

    item.addEventListener("mouseleave", function () {
      const subMenu = this.querySelector(".sub-menu");
      subMenu.style.maxHeight = "0";
    });
  });
});
