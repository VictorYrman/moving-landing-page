const navigate = (element) => {
  element.addEventListener("click", () => {
    window.location.assign("#feedback");
  });
};

navigate(document.querySelector(".hero__btn"));
