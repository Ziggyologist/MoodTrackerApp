const moon = document.querySelector(".moon");
const sky = document.querySelector(".sky");

// MOON ACCORDING TO TIME
const now = new Date();
const timeNow = now.getHours();

const moonTime = function () {
  if (timeNow < 12 && timeNow >= 7) {
    moon.style.cssText = "transform: translate(0, 5%);";
  }
  if (12 <= timeNow && timeNow <= 14) {
    moon.style.cssText = "transform: translate(0, -8%);fill:#FFD88A";
  }
  if (14 < timeNow && timeNow <= 17) {
    moon.style.cssText = "transform: translate(0, 4%)";
  }
  if (17 < timeNow && timeNow <= 21) {
    moon.style.cssText = "transform: translate(0, 11%;fill:#FFB37D";
  }
  if (21 < timeNow && timeNow < 7) {
    moon.style.cssText = "transform: translate(0, -8%)";
    sky.style.cssText = "fill:#2B4C80";
  }
};
moonTime();

// COLOR MOON
// How can I make it that the moon doesn't change position when clicked?
let count = 0;
function colorMoon() {
  count = (count % 3) + 1;
  switch (count) {
    case 1:
      moon.style.cssText = "fill:#FFD88A";
      break;
    case 2:
      moon.style.cssText = "fill:#FFB37D";
      break;
    case 3:
      moon.style.cssText = "fill:#fff2d6";
      break;
  }
}

moon.addEventListener("click", colorMoon);

// REINDEER STUFF

const reindeer = document.querySelector(".st16");

// moveByX
let moveBy = 20;
document.addEventListener("keypress", function (e) {
  if (e.key === "a") {
    moveBy++;
    reindeer.style.webkitTransform = `translateX(-${moveBy}px)`;
    moveBy += 20;
  }

  if (e.key === "d") {
    moveBy--;
    reindeer.style.webkitTransform = `translateX(+${moveBy}px)`;
    moveBy = moveBy + 20;
  }

  // moveByY
  if (e.key === "w") {
    moveBy++;
    reindeer.style.webkitTransform = `translateY(-${moveBy}px)`;
    moveBy += 20;
  }
  if (e.key === "s") {
    moveBy--;
    reindeer.style.webkitTransform = `translateY(+${moveBy}px)`;
    moveBy = moveBy + 20;
  }
  if (e.key === "x" && !reindeer.classList.contains("moveForward")) {
    reindeer.classList.add("moveForward");
    setTimeout(() => {
      reindeer.classList.remove("moveForward");
    }, 5.0 * 1000);
  }
});

// REINDER MOVEMENT
function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return rect.left + scrollLeft;
}
const reindeerOriginalPositionX = offset(reindeer);
let reindeerPositionX = offset(reindeer);
