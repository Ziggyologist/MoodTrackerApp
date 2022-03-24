// MOUNTAIN

// COLOR MOUNTAIN

let chosenColor;
const polygons = document.querySelectorAll("polygon");

const colors = {
  awesome: "#709F88",
  good: "#B9E2CE",
  ok: "#FFF1D5",
  bad: " #e2beb9",
  terrible: "#c48b83",
};

const colorMountain = function (polygon) {
  if (!chosenColor) {
    alert("Pick a color");
  } else {
    document.getElementById(polygon.id).style.fill = chosenColor;
    // console.log(chosenColor);

    const coloredPolygon = document.getElementById(polygon.id).style.fill;
    localStorage.setItem(polygon.id, coloredPolygon);
  }
};
// localStorage.clear();

const changeColor = function (color) {
  if (color === "awesome") {
    chosenColor = colors.awesome;
  }
  if (color === "good") {
    chosenColor = colors.good;
  }
  if (color === "ok") {
    chosenColor = colors.ok;
  }
  if (color === "bad") {
    chosenColor = colors.bad;
  }
  if (color === "terrible") {
    chosenColor = colors.terrible;
  }
  console.log(chosenColor);
};

// COLOR MOUNTAIN onclick

for (let i = 0; i < polygons.length; i++) {
  // console.log(i);
  polygons[i].addEventListener("click", () => {
    colorMountain(polygons[i]);
  });
}

// SAVE COLORS TO LOCALSTORAGE
console.log(localStorage);
// I don't know how to do this
// window.onload = function () {
//   // brain error this is the best i can do
//   for (let i = 0; i < polygons.length; i++) {
//     if ((polygons[i].style.fill) {
//       document.getElementById("t1").style.fill = localStorage.getItem("t1");
//       document.getElementById("t2").style.fill = localStorage.getItem("t2");
//       document.getElementById("t3").style.fill = localStorage.getItem("t3");
//       document.getElementById("t4").style.fill = localStorage.getItem("t4");
//       document.getElementById("t5").style.fill = localStorage.getItem("t5");
//       document.getElementById("t6").style.fill = localStorage.getItem("t6");
//       document.getElementById("t7").style.fill = localStorage.getItem("t7");
//       document.getElementById("t8").style.fill = localStorage.getItem("t8");
//       document.getElementById("t9").style.fill = localStorage.getItem("t9");
//       document.getElementById("t10").style.fill = localStorage.getItem("t10");
//       document.getElementById("t11").style.fill = localStorage.getItem("t11");
//       document.getElementById("t12").style.fill = localStorage.getItem("t12");
//       document.getElementById("t13").style.fill = localStorage.getItem("t13");
//       document.getElementById("t14").style.fill = localStorage.getItem("t14");
//       document.getElementById("t15").style.fill = localStorage.getItem("t15");
//       document.getElementById("t16").style.fill = localStorage.getItem("t16");
//       document.getElementById("t17").style.fill = localStorage.getItem("t17");
//       document.getElementById("t18").style.fill = localStorage.getItem("t18");
//       document.getElementById("t19").style.fill = localStorage.getItem("t19");
//       document.getElementById("t20").style.fill = localStorage.getItem("t20");
//       document.getElementById("t21").style.fill = localStorage.getItem("t21");
//       document.getElementById("t22").style.fill = localStorage.getItem("t22");
//       document.getElementById("t23").style.fill = localStorage.getItem("t23");
//       document.getElementById("t24").style.fill = localStorage.getItem("t24");
//       document.getElementById("t25").style.fill = localStorage.getItem("t25");
//       document.getElementById("t26").style.fill = localStorage.getItem("t26");
//       document.getElementById("t27").style.fill = localStorage.getItem("t27");
//       document.getElementById("t28").style.fill = localStorage.getItem("t28");
//       document.getElementById("t29").style.fill = localStorage.getItem("t29");
//       document.getElementById("t30").style.fill = localStorage.getItem("t30");
//       document.getElementById("t31").style.fill = localStorage.getItem("t31");
//     } else {
//       polygons[i].style.fill = "white";
//     }
//   }

// for (let i = 0; i < polygons.length; i++) {
//   document.getElementById(`t${i}`).style.fill = localStorage.getItem(`t${i}`);
// }

// TEXT modal

const svgText = document.querySelectorAll("text");
const modal = document.querySelector(".modal");

for (let iDate = 0; iDate < svgText.length; iDate++) {
  svgText[iDate].addEventListener("click", () => {
    console.log(`You clicked text number ${iDate + 1}`);
    modal.classList.remove("hidden");
    document.querySelector(".container").classList.add("overlay");
    document.querySelector(".title_date").textContent = `Journal entry for ${
      iDate + 1
    }.03.2022:`;
  });
}

// CLOSE TEXT MODAL
const xButton = document.querySelector(".close_modal_button");

const closeModal = function () {
  modal.classList.add("hidden");
  document.querySelector(".container").classList.remove("overlay");
};

xButton.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// SUBMIT FORM
const submitModalButton = document.querySelector(".modal_submit_button");
const journalForm = document.querySelector(".mountain_form");
journalForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const jorunalTitle = document.getElementById("title").value;
  const journalEntry = document.getElementById("journal_entry").value;

  console.log("function working", jorunalTitle, journalEntry);
  closeModal();
  return jorunalTitle, journalEntry;
}

submitModalButton.addEventListener("click", handleSubmit);

// DISPLAY FORM
const journalEntries = document.querySelector(".journal_entries");
