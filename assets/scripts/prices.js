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
`,
  services = JSON.parse(servicesJSON);
console.log(services.services.length);
const allPricesBtn = document.querySelector(".all-prices"),
  pricesList = document.querySelector(".prices__list");
let isExpanded = !1;
const getPricesItem = (e) => `<li class="prices__item">
              <h4>${e.serviceName}</h4>
              <ul class="prices__conditions">
                <li>${e.serviceEquipment[0]}</li>
                <li>${e.serviceEquipment[1]}</li>
                <li>${e.serviceEquipment[2]}</li>
              </ul>
              <p class="prices__price">${e.servicePrice} руб.</p>
              <button class="btn btn--primary prices__btn">Заказать</button>
            </li>`;
document.addEventListener("DOMContentLoaded", () => {
  for (let e = 0; e < services.services.length; e++)
    pricesList.insertAdjacentHTML(
      "beforeend",
      getPricesItem(services.services[e])
    );
  document.querySelectorAll(".prices__btn").forEach((e) => {
    navigate(e);
  });
}),
  allPricesBtn.addEventListener("click", () => {
    let e = document.querySelectorAll(".prices__item");
    isExpanded
      ? ((e[0].style.display = "none"),
        (e[2].style.display = "none"),
        (allPricesBtn.textContent = "Все цены"))
      : ((e[0].style.display = "flex"),
        (e[2].style.display = "flex"),
        (allPricesBtn.textContent = "Свернуть цены")),
      (isExpanded = !isExpanded);
  });
