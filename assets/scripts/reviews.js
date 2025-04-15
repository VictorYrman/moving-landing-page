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
`;

const reviews = JSON.parse(reviewsJSON);

const reviewsList = document.querySelector(".reviews__list");

const getReview = (review) => {
  const isMobile = window.innerWidth <= 600;
  const shortText = isMobile
    ? review.reviewDescription.substring(0, 100) + "..."
    : review.reviewDescription;

  return `<li class="reviews__item">
              <h3 class="reviews__subtitle">${review.reviewAuthor}</h3>
              <div class="reviews__info">
                <p>${review.reviewDate}</p>
                <img src="./assets/images/icons/stars.svg" alt="Пять звёзд" />
              </div>
              <p class="reviews__description" data-full="${
                review.reviewDescription
              }">
                ${shortText}
              </p>
              ${
                isMobile
                  ? '<button class="reviews__more">Читать полностью</button>'
                  : ""
              }
            </li>`;
};

const initializationRender = () => {
  reviews.reviews.forEach((review) => {
    reviewsList.insertAdjacentHTML("beforeend", getReview(review));
  });

  document.querySelectorAll(".reviews__more").forEach((btn) => {
    btn.addEventListener("click", function () {
      const description = this.previousElementSibling;
      const fullText = description.dataset.full;

      if (this.textContent === "Читать полностью") {
        description.textContent = fullText;
        this.textContent = "Свернуть";
      } else {
        description.textContent = fullText.substring(0, 100) + "...";
        this.textContent = "Читать полностью";
      }
    });
  });
};

initializationRender();

window.addEventListener("resize", () => {
  reviewsList.innerHTML = "";
  initializationRender();
});

let condition = false;

const allReviewsBtn = document.querySelector(".reviews__btn");

allReviewsBtn.addEventListener("click", () => {
  const items = document.querySelectorAll(".reviews__item");

  if (condition) {
    items[0].style.display = "none";
    items[2].style.display = "none";
    allReviewsBtn.textContent = "Все отзывы";
  } else {
    items[0].style.display = "block";
    items[2].style.display = "block";
    allReviewsBtn.textContent = "Свернуть отзывы";
  }

  condition = !condition;
});
