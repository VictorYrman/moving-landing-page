const gazelleJSON = `{
  "name": "Газель 3 метра",
  "characteristics": [
    "Ширина 2",
    "Высота 2",
    "Объём 16",
    "Грузоподъёмность 1.5"
  ],
  "image": "./assets/images/gazel.webp"
}`;

const heelJSON = `{
  "name": "Каблук 2 метра",
  "characteristics": [
    "Ширина 1.8",
    "Высота 1.2",
    "Объём 8",
    "Грузоподъёмность 0.8"
  ],
  "image": "./assets/images/heel.webp"
}
`;

const truckJSON = `{
  "name": "Грузовик 3 метра",
  "characteristics": [
    "Ширина 3",
    "Высота 3",
    "Объём 20",
    "Грузоподъёмность 2"
  ],
  "image": "./assets/images/truck.webp"
}
`;

const cars = [
  JSON.parse(gazelleJSON),
  JSON.parse(heelJSON),
  JSON.parse(truckJSON),
];

const sliderContainer = document.querySelector(".slider__container");
const carParkItems = document.querySelectorAll(".car-park__item");
const sliderBtnLeft = document.querySelector(".slider__btn--left");
const sliderBtnRight = document.querySelector(".slider__btn--right");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;

const getCar = (car) => {
  return `
    <div class="slider__content">
      <h4>${car.name}</h4>
      <ul>
        <li>${car.characteristics[0]} м</li>
        <li>${car.characteristics[1]} м</li>
        <li>${car.characteristics[2]} м<sup>3</sup></li>
        <li>${car.characteristics[3]} т</li>
      </ul>
      <button class="btn btn--primary car-park__btn">Заказать</button>
    </div>
    <img src="${car.image}" alt="${car.name}" />
    <div class="slider__content--mobile">
      <h4>${car.name} / ${car.characteristics[3].substring(17)} тонны</h4>
      <button class="btn btn--primary car-park__btn">Заказать</button>
    </div>
  `;
};

const createDots = () => {
  dotsContainer.innerHTML = "";
  cars.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === currentIndex) dot.classList.add("dot--active");
    dot.addEventListener("click", () => updateSlider(index));
    dotsContainer.appendChild(dot);
  });
};

const updateSlider = (index) => {
  currentIndex = index;
  sliderContainer.innerHTML = getCar(cars[currentIndex]);

  document.querySelectorAll(".car-park__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.assign("#feedback");
    });
  });

  carParkItems.forEach((item, i) => {
    item.classList.toggle("car-park__item--active", i === currentIndex);
  });

  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("dot--active", i === currentIndex);
  });

  sliderBtnLeft.disabled = currentIndex === 0;
  sliderBtnRight.disabled = currentIndex === cars.length - 1;
};

const initSlider = () => {
  createDots();
  updateSlider(0);

  sliderBtnLeft.addEventListener("click", () => {
    if (currentIndex > 0) updateSlider(currentIndex - 1);
  });

  sliderBtnRight.addEventListener("click", () => {
    if (currentIndex < cars.length - 1) updateSlider(currentIndex + 1);
  });

  carParkItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      updateSlider(index);
    });
  });

  let touchStartX = 0;
  let touchEndX = 0;

  sliderContainer.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.changedTouches[0].screenX;
    },
    { passive: true }
  );

  sliderContainer.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    },
    { passive: true }
  );

  const handleSwipe = () => {
    if (touchEndX < touchStartX && currentIndex < cars.length - 1) {
      updateSlider(currentIndex + 1);
    }
    if (touchEndX > touchStartX && currentIndex > 0) {
      updateSlider(currentIndex - 1);
    }
  };
};

initSlider();
