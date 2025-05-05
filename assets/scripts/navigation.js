const navigate = (e) => {
  e.addEventListener("click", () => {
    window.location.assign("#feedback");
  });
};
navigate(document.querySelector(".hero__btn"));
