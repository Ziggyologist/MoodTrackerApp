const moon = document.querySelector(".moon");
const sky = document.querySelector(".sky");
console.log(moon, sky);

// MOON ACCORDING TO TIME
const now = new Date();
const timeNow = now.getHours();
console.log(now);
console.log(timeNow);

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
  console.log(count);
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
console.log(reindeer);

// moveByX
let moveBy = 20;
document.addEventListener("keypress", function (e) {
  console.log(e.key);

  if (e.key === "a") {
    moveBy++;
    reindeer.style.webkitTransform = `translateX(-${moveBy}px)`;
    moveBy += 20;
    console.log(moveBy);
  }

  if (e.key === "d") {
    moveBy--;
    reindeer.style.webkitTransform = `translateX(+${moveBy}px)`;
    moveBy = moveBy + 20;
    console.log(moveBy);
  }

  // moveByY
  if (e.key === "w") {
    moveBy++;
    reindeer.style.webkitTransform = `translateY(-${moveBy}px)`;
    console.log(moveBy);
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
  // return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
}
const reindeerOriginalPositionX = offset(reindeer);
let reindeerPositionX = offset(reindeer);

console.log(reindeerPositionX);

// let step = 20;
// const stepAhead = function () {
//   reindeer.style.webkitTransform = `translateX(${reindeerPositionX}-20px)`;
// };

// document.addEventListener("keypress", function (e) {
//   if (e.key === "a") {
//     stepAhead();
//   }
// });

// let step = 20;
// const stepAhead = function () {
//   reindeer.style.left = reindeerPositionX;
//   reindeer.style.webkitTransform = `translateX(-${step}px)`;
//   step = step + 20;
//   // let movedAheadReindeer = reindeerPositionX + step;
//   // console.log(movedAheadReindeer);
//   // return movedAheadReindeer;
//   reindeerPositionX = reindeerPositionX + step;
//   console.log(reindeerPositionX, reindeerOriginalPositionX);
//   console.log(step);
//   return reindeerPositionX;
// };
// console.log(reindeerPositionX);
// const stepBack = function () {
//   reindeer.style.left = reindeerPositionX;
//   reindeer.style.webkitTransform = `translateX(+${step}px)`;
//   step = step + 20;
//   reindeerPositionX = reindeerPositionX + step;
//   console.log(reindeerPositionX, reindeerOriginalPositionX);
//   return reindeerPositionX;
// };

// document.addEventListener("keypress", function (e) {
//   if (e.key === "a") {
//     if (reindeerOriginalPositionX !== reindeerPositionX) {
//       reindeer.style.left = reindeerPositionX;
//       stepAhead();
//     } else stepAhead();
//   }
//   if (e.key === "d") {
//     stepBack();
//   }
// });

// reindeer.style.cssText = "transform: scaleX(-1)";

// ALTERNATIVE SOLUTION
// let movingReindeerForwards = function (e) {
//   if (e.key === "a") {
//     reindeer.style.cssText = "transform: translateX(-20px)";
//   }
// };

// let movingForwardAgain = function (e) {
//   if (e.key === "a") {
//     movingReindeerForwards() = movingReindeerForwards() + movingReindeerForwards();
//   }
// };

// document.addEventListener("keydown", movingForwardAgain);

// let moveBy = 10;

// window.addEventListener("load", () => {
//   reindeer.style.position = "absolute";
//   reindeer.style.left = 463.6837158203125;
//   reindeer.style.top = 162.758056640625;
// });

// document.addEventListener("keydown", e => {
//   console.log(e);
//   switch (e.key) {
//     case "ArrowLeft":
//       reindeer.style.left = parseInt(reindeer.style.left) - moveBy + "px";
//       break;
//     case "ArrowRight":
//       reindeer.style.left = parseInt(reindeer.style.left) + moveBy + "px";
//       break;
//     case "ArrowUp":
//       reindeer.style.top = parseInt(reindeer.style.top) - moveBy + "px";
//       break;
//     case "ArrowDown":
//       reindeer.style.top = parseInt(reindeer.style.top) + moveBy + "px";
//       break;
//   }
// })
