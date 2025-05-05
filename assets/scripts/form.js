const feedbackForm = document.querySelector(".feedback__form"),
  checkboxGroup = document.querySelector(".feedback__checkbox-group"),
  manageBtn = document.querySelector(".feedback__btn--additional");
let expanded = !0;
(checkboxGroup.style.transition = "all 0.3s ease-in-out"),
  (checkboxGroup.style.maxHeight = checkboxGroup.scrollHeight + "px"),
  (checkboxGroup.style.overflow = "hidden"),
  manageBtn.addEventListener("click", () => {
    expanded
      ? ((checkboxGroup.style.maxHeight = "0"),
        (checkboxGroup.style.opacity = "0"),
        manageBtn.classList.add("footer__btn--rotated"))
      : ((checkboxGroup.style.maxHeight = checkboxGroup.scrollHeight + "px"),
        (checkboxGroup.style.opacity = "1"),
        manageBtn.classList.remove("footer__btn--rotated")),
      (expanded = !expanded);
  });
const feedbackTimer = document.querySelector(".feedback__timer");
let timeLeft = 21600;
const updateTimer = () => {
    let e = Math.floor(timeLeft / 3600),
      t = Math.floor((timeLeft % 3600) / 60),
      o = timeLeft % 60;
    if (
      ((feedbackTimer.textContent = [
        e.toString().padStart(2, "0"),
        t.toString().padStart(2, "0"),
        o.toString().padStart(2, "0"),
      ].join(":")),
      timeLeft <= 0)
    ) {
      clearInterval(timerInterval), (feedbackTimer.textContent = "00:00:00");
      return;
    }
    timeLeft--;
  },
  timerInterval = setInterval(updateTimer, 1e3);
updateTimer();
