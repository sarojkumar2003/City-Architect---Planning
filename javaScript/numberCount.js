let valueDisplays = document.querySelectorAll(".counter");
let interval = 700;

valueDisplays.forEach((valueDisplays) => {
  let startValue = 100;
  let endValue = parseInt(valueDisplays.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue -= 1;
    valueDisplays.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
