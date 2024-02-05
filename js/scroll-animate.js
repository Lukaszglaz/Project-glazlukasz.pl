document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animated-element");

  const animationPlayed = sessionStorage.getItem("animationPlayed");
  if (!animationPlayed) {
    checkScroll();
    sessionStorage.setItem("animationPlayed", "true");
    window.addEventListener("scroll", checkScrollOnScrollToTop);
  } else {
    animatedElements.forEach((element, index) => {
      element.classList.add("animated");
      if (index % 2 === 1) {
        element.classList.add("reverse");
      }
    });
  }

  function checkScroll() {
    animatedElements.forEach((element, index) => {
      if (isElementInViewport(element)) {
        element.classList.add("animated");
        if (index % 2 === 1) {
          element.classList.add("reverse");
        }
      }
    });
  }

  function checkScrollOnScrollToTop() {
    if (window.scrollY === 0) {
      window.removeEventListener("scroll", checkScrollOnScrollToTop);
      checkScroll();
    }
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  window.addEventListener("scroll", checkScroll);
});
