const burgerBtn = document.querySelector(".burger");
const burgerCloseBtn = document.querySelector(".burger-menu__btn");
const burgerMenu = document.querySelector(".burger-menu");
const burgerLinks = document.querySelectorAll(".burger-menu a");

burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.remove("burger-menu--disappear");
  burgerMenu.classList.add("burger-menu--appear");

  document.addEventListener("click", (event) => {
    if (burgerMenu.contains(event.target) || burgerBtn.contains(event.target))
      return;

    burgerMenu.classList.remove("burger-menu--appear");
    burgerMenu.classList.add("burger-menu--disappear");
  });
});

burgerCloseBtn.addEventListener("click", () => {
  burgerMenu.classList.remove("burger-menu--appear");
  burgerMenu.classList.add("burger-menu--disappear");
});

burgerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("burger-menu--appear");
    burgerMenu.classList.add("burger-menu--disappear");
  });
});
