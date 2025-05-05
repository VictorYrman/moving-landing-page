const reviewsJSON = `{
  "reviews": [
    {
      "reviewAuthor": "Ирина",
      "reviewDate": "24.09.2019",
      "reviewDescription": "Обращение к вам за помощью в переезде оставило только положительные впечатления. Хотелось отметить замечательного водителя газели Алексея. Были трудности с заездом во двор, он проявил себя как компетентный и профессиональный сотрудник, за что ему огромное спасибо."
    },
    {
      "reviewAuthor": "Светлана Васильевна",
      "reviewDate": "13.09.2019",
      "reviewDescription": "Сегодня ( 13.09.2019 ) мы переехали. Остались очень довольны, несмотря на то, что к нам опоздали на 1,5 часа. Морально были к этому готовы ( в прошлый переезд в другой фирме тоже опоздали на час). Водитель заранее позвонил, предупредил, что задерживается."
    },
    {
      "reviewAuthor": "Ольга Петрова",
      "reviewDate": "11.11.2019",
      "reviewDescription": "Могу на 100% порекомендовать компанию MOVEE и отметить, что цены фиксированы, что упрощает расчет. Безо всяких заморочек, в отличии от их конкурентов. Упаковали все качественно и быстро. Все вещи приехали в сохранности. Особая благодарность Александру за его отзывчивость и хорошее настроение"
    }
  ]
}
`,
  reviews = JSON.parse(reviewsJSON),
  reviewsList = document.querySelector(".reviews__list"),
  getReview = (e) => {
    let i = window.innerWidth <= 600,
      t = i
        ? e.reviewDescription.substring(0, 100) + "..."
        : e.reviewDescription;
    return `<li class="reviews__item">
              <h3 class="reviews__subtitle">${e.reviewAuthor}</h3>
              <div class="reviews__info">
                <p>${e.reviewDate}</p>
                <img src="./assets/images/icons/stars.svg" alt="Пять звёзд" />
              </div>
              <p class="reviews__description" data-full="${
                e.reviewDescription
              }">
                ${t}
              </p>
              ${
                i
                  ? '<button class="reviews__more">Читать полностью</button>'
                  : ""
              }
            </li>`;
  },
  initializationRender = () => {
    reviews.reviews.forEach((e) => {
      reviewsList.insertAdjacentHTML("beforeend", getReview(e));
    }),
      document.querySelectorAll(".reviews__more").forEach((e) => {
        e.addEventListener("click", function () {
          let e = this.previousElementSibling,
            i = e.dataset.full;
          "Читать полностью" === this.textContent
            ? ((e.textContent = i), (this.textContent = "Свернуть"))
            : ((e.textContent = i.substring(0, 100) + "..."),
              (this.textContent = "Читать полностью"));
        });
      });
  };
initializationRender(),
  window.addEventListener("resize", () => {
    (reviewsList.innerHTML = ""), initializationRender();
  });
let condition = !1;
const allReviewsBtn = document.querySelector(".reviews__btn");
allReviewsBtn.addEventListener("click", () => {
  let e = document.querySelectorAll(".reviews__item");
  condition
    ? ((e[0].style.display = "none"),
      (e[2].style.display = "none"),
      (allReviewsBtn.textContent = "Все отзывы"))
    : ((e[0].style.display = "block"),
      (e[2].style.display = "block"),
      (allReviewsBtn.textContent = "Свернуть отзывы")),
    (condition = !condition);
});
