// Scroll Element List

// Element Click
const clickMainScroll = document.getElementById("clickHome");
const clickProjectScroll = document.getElementById("clickProject");
const clickPortfolioScroll = document.getElementById("clickPortfolio");
const clickContactScroll = document.getElementById("clickContact");
// End Element Click

// Element Click To Scroll
const scrollToProject = document.getElementById("section-under");
const scrollToPortfolio = document.getElementById("section-portfolio");
const scrollToContact = document.getElementById("section-contact");
// End Element Click To Scroll

// Animation Scroll
clickMainScroll.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

clickProjectScroll.addEventListener("click", () => {
  scrollToProject.scrollIntoView({ behavior: "smooth" });
});

clickPortfolioScroll.addEventListener("click", () => {
  scrollToPortfolio.scrollIntoView({ behavior: "smooth" });
});

clickContactScroll.addEventListener("click", () => {
  scrollToContact.scrollIntoView({ behavior: "smooth" });
});
// End Animation Scroll
// End Scroll Element lIST
