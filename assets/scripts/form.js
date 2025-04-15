const feedbackForm = document.querySelector(".feedback__form");
const checkboxGroup = document.querySelector(".feedback__checkbox-group");
const manageBtn = document.querySelector(".feedback__btn--additional");
let expanded = true;

checkboxGroup.style.transition = "all 0.3s ease-in-out";
checkboxGroup.style.maxHeight = checkboxGroup.scrollHeight + "px";
checkboxGroup.style.overflow = "hidden";

manageBtn.addEventListener("click", () => {
  if (expanded) {
    checkboxGroup.style.maxHeight = "0";
    checkboxGroup.style.opacity = "0";
    manageBtn.classList.add("footer__btn--rotated");
  } else {
    checkboxGroup.style.maxHeight = checkboxGroup.scrollHeight + "px";
    checkboxGroup.style.opacity = "1";

    manageBtn.classList.remove("footer__btn--rotated");
  }

  expanded = !expanded;
});

const feedbackTimer = document.querySelector(".feedback__timer");

let timeLeft = 6 * 60 * 60;

const updateTimer = () => {
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  feedbackTimer.textContent = [
    hours.toString().padStart(2, "0"),
    minutes.toString().padStart(2, "0"),
    seconds.toString().padStart(2, "0"),
  ].join(":");

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    feedbackTimer.textContent = "00:00:00";
    return;
  }

  timeLeft--;
};

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();
