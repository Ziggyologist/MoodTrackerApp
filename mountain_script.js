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

    const coloredPolygon = document.getElementById(polygon.id).style.fill;
    localStorage.setItem(polygon.id, coloredPolygon);
  }
};

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
  polygons[i].addEventListener("click", () => {
    colorMountain(polygons[i]);
  });
}

// TEXT modal

const svgText = document.querySelectorAll("text");
const modal = document.querySelector(".modal");

let dateEntry;
for (let iDate = 0; iDate < svgText.length; iDate++) {
  svgText[iDate].addEventListener("click", () => {
    console.log(`You clicked text number ${iDate + 1}`);
    dateEntry = iDate + 1;
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
const mountainJournalEntries = [];

function handleSubmit(event) {
  event.preventDefault();
  const jorunalTitle = document.getElementById("title").value;
  const journalEntry = document.getElementById("journal_entry").value;

  mountainJournalEntries.push({jorunalTitle, journalEntry, dateEntry});
  console.log(mountainJournalEntries);
  closeModal();
}

// DISPLAY FORM
const journalEntries = document.querySelector(".journal_entries");
console.log(mountainJournalEntries);
