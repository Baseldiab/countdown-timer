const input = document.querySelector(".countdown-input");
const countNumber = document.querySelector(".countdown-number");
const dayCount = document.querySelector(".countdown-day");
const hrCount = document.querySelector(".countdown-hr");
const minCount = document.querySelector(".countdown-min");
const secCount = document.querySelector(".countdown-sec");
console.log("");

// ========================
const startBtn = document.querySelector(".start-btn");
const pauseBtn = document.querySelector(".pause-btn");
const resetBtn = document.querySelector(".reset-btn");

// ========================
input.addEventListener("change", function () {
  console.log(input.value.length);
  if (input.value.length !== 0) {
    startBtn.classList.remove("disabled");
  } else startBtn.classList.add("disabled");
});
// ========================
startBtn.addEventListener("click", countdown);

// ========================
function countdown() {
  const targetDateTime = new Date(input.value);
  const now = new Date();
  const remainTime = targetDateTime - now;
  // console.log(input.value.length);
  if (remainTime <= 0) {
    clearInterval(interval);
    document.querySelector(".countdown").innerHTML = "Countdown is over!";
  }
  countCalc(remainTime);
  const interval = setInterval(countdown, 1000);

  pauseBtn.addEventListener("click", function () {
    clearInterval(interval);
    startBtn.innerHTML = "continue";
  });

  resetBtn.addEventListener("click", function () {
    clearInterval(interval);
    input.value = "";
    dayCount.innerHTML = "00";
    hrCount.innerHTML = "00";
    minCount.innerHTML = "00";
    secCount.innerHTML = "00";
    startBtn.innerHTML = "start";
    startBtn.classList.add("disabled");
  });
}
// ========================
// ========================
function countCalc(remainingTime) {
  const seconds = Math.floor((remainingTime / 1000) % 60);
  const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
  const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

  dayCount.innerHTML = `${days}`.padStart(2, "0");
  hrCount.innerHTML = `${hours}`.padStart(2, "0");
  minCount.innerHTML = `${minutes}`.padStart(2, "0");
  secCount.innerHTML = `${seconds}`.padStart(2, "0");
}
// ========================
const footerYear = document.querySelector(".footer-year");
footerYear.textContent = new Date().getFullYear();
console
  .log
  // new Date(inputSecond.value * 1000 + now).getSeconds() - now.getSeconds()
  ();
