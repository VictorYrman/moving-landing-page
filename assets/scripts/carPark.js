const gazelleJSON = `{
  "name": "Газель 3 метра",
  "characteristics": [
    "Ширина 2",
    "Высота 2",
    "Объём 16",
    "Грузоподъёмность 1.5"
  ],
  "image": "./assets/images/gazel.webp"
}`,
  heelJSON = `{
  "name": "Каблук 2 метра",
  "characteristics": [
    "Ширина 1.8",
    "Высота 1.2",
    "Объём 8",
    "Грузоподъёмность 0.8"
  ],
  "image": "./assets/images/heel.webp"
}
`,
  truckJSON = `{
  "name": "Грузовик 3 метра",
  "characteristics": [
    "Ширина 3",
    "Высота 3",
    "Объём 20",
    "Грузоподъёмность 2"
  ],
  "image": "./assets/images/truck.webp"
}
`,
  cars = [JSON.parse(gazelleJSON), JSON.parse(heelJSON), JSON.parse(truckJSON)],
  sliderContainer = document.querySelector(".slider__container"),
  carParkItems = document.querySelectorAll(".car-park__item"),
  sliderBtnLeft = document.querySelector(".slider__btn--left"),
  sliderBtnRight = document.querySelector(".slider__btn--right"),
  dotsContainer = document.querySelector(".dots");
let currentIndex = 0;
const getCar = (e) => `
    <div class="slider__content">
      <h4>${e.name}</h4>
      <ul>
        <li>${e.characteristics[0]} м</li>
        <li>${e.characteristics[1]} м</li>
        <li>${e.characteristics[2]} м<sup>3</sup></li>
        <li>${e.characteristics[3]} т</li>
      </ul>
      <button class="btn btn--primary car-park__btn">Заказать</button>
    </div>
    <img src="${e.image}" alt="${e.name}" loading="lazy" />
    <div class="slider__content--mobile">
      <h4>${e.name} / ${e.characteristics[3].substring(17)} тонны</h4>
      <button class="btn btn--primary car-park__btn">Заказать</button>
    </div>
  `,
  createDots = () => {
    (dotsContainer.innerHTML = ""),
      cars.forEach((e, t) => {
        let r = document.createElement("div");
        r.classList.add("dot"),
          t === currentIndex && r.classList.add("dot--active"),
          r.addEventListener("click", () => updateSlider(t)),
          dotsContainer.appendChild(r);
      });
  },
  updateSlider = (e) => {
    (currentIndex = e),
      (sliderContainer.innerHTML = getCar(cars[currentIndex])),
      document.querySelectorAll(".car-park__btn").forEach((e) => {
        e.addEventListener("click", () => {
          window.location.assign("#feedback");
        });
      }),
      carParkItems.forEach((e, t) => {
        e.classList.toggle("car-park__item--active", t === currentIndex);
      }),
      document.querySelectorAll(".dot").forEach((e, t) => {
        e.classList.toggle("dot--active", t === currentIndex);
      }),
      (sliderBtnLeft.disabled = 0 === currentIndex),
      (sliderBtnRight.disabled = currentIndex === cars.length - 1);
  },
  initSlider = () => {
    createDots(),
      updateSlider(0),
      sliderBtnLeft.addEventListener("click", () => {
        currentIndex > 0 && updateSlider(currentIndex - 1);
      }),
      sliderBtnRight.addEventListener("click", () => {
        currentIndex < cars.length - 1 && updateSlider(currentIndex + 1);
      }),
      carParkItems.forEach((e, t) => {
        e.addEventListener("click", () => {
          updateSlider(t);
        });
      });
    let e = 0,
      t = 0;
    sliderContainer.addEventListener(
      "touchstart",
      (t) => {
        e = t.changedTouches[0].screenX;
      },
      { passive: !0 }
    ),
      sliderContainer.addEventListener(
        "touchend",
        (e) => {
          (t = e.changedTouches[0].screenX), r();
        },
        { passive: !0 }
      );
    let r = () => {
      t < e && currentIndex < cars.length - 1 && updateSlider(currentIndex + 1),
        t > e && currentIndex > 0 && updateSlider(currentIndex - 1);
    };
  };
initSlider();
