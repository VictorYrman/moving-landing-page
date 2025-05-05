const burgerBtn = document.querySelector(".burger"),
  burgerCloseBtn = document.querySelector(".burger-menu__btn"),
  burgerMenu = document.querySelector(".burger-menu"),
  burgerLinks = document.querySelectorAll(".burger-menu a");
burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.remove("burger-menu--disappear"),
    burgerMenu.classList.add("burger-menu--appear"),
    document.addEventListener("click", (e) => {
      burgerMenu.contains(e.target) ||
        burgerBtn.contains(e.target) ||
        (burgerMenu.classList.remove("burger-menu--appear"),
        burgerMenu.classList.add("burger-menu--disappear"));
    });
}),
  burgerCloseBtn.addEventListener("click", () => {
    burgerMenu.classList.remove("burger-menu--appear"),
      burgerMenu.classList.add("burger-menu--disappear");
  }),
  burgerLinks.forEach((e) => {
    e.addEventListener("click", () => {
      burgerMenu.classList.remove("burger-menu--appear"),
        burgerMenu.classList.add("burger-menu--disappear");
    });
  });
