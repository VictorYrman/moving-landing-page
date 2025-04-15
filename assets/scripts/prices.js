const servicesJSON = `{
  "services": [
    {
      "serviceName": "1-комнатная кв-ра",
      "serviceEquipment": ["1 фургон", "2 грузчика", "Переезд за 4 часа"],
      "servicePrice": "70"
    },
    {
      "serviceName": "2-комнатная кв-ра",
      "serviceEquipment": [
        "1 газель - 3 метра",
        "2 грузчика",
        "Переезд за 4 часа"
      ],
      "servicePrice": "100"
    },
    {
      "serviceName": "3-комнатная кв-ра",
      "serviceEquipment": [
        "1 газель - 4 метра",
        "2 грузчика",
        "Переезд за 6 часов"
      ],
      "servicePrice": "150"
    }
  ]
}
`;

const services = JSON.parse(servicesJSON);
console.log(services.services.length);

const allPricesBtn = document.querySelector(".all-prices");
const pricesList = document.querySelector(".prices__list");
let isExpanded = false;

const getPricesItem = (service) => {
  return `<li class="prices__item">
              <h4>${service.serviceName}</h4>
              <ul class="prices__conditions">
                <li>${service.serviceEquipment[0]}</li>
                <li>${service.serviceEquipment[1]}</li>
                <li>${service.serviceEquipment[2]}</li>
              </ul>
              <p class="prices__price">${service.servicePrice} руб.</p>
              <button class="btn btn--primary prices__btn">Заказать</button>
            </li>`;
};

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < services.services.length; i++) {
    pricesList.insertAdjacentHTML(
      "beforeend",
      getPricesItem(services.services[i])
    );
  }

  document.querySelectorAll(".prices__btn").forEach((element) => {
    navigate(element);
  });
});

allPricesBtn.addEventListener("click", () => {
  const items = document.querySelectorAll(".prices__item");

  if (isExpanded) {
    items[0].style.display = "none";
    items[2].style.display = "none";
    allPricesBtn.textContent = "Все цены";
  } else {
    items[0].style.display = "flex";
    items[2].style.display = "flex";
    allPricesBtn.textContent = "Свернуть цены";
  }

  isExpanded = !isExpanded;
});
