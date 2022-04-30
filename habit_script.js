"use strict";

const addHabitBtn = document.querySelector(".add_habit_entry_btn");
const habitModal = document.querySelector(".habit_modal");
const submitModalbtn = document.querySelector(".modal_submit_button");
const habitContainer = document.querySelector(".habit_container");

const habits = [];

const openModal = function () {
  console.log("I opened");
  habitModal.classList.remove("hide");
  addHabitBtn.classList.add("hide");
};

const submitModal = function (e) {
  e.preventDefault();
  habitModal.classList.add("hide");
  addHabitBtn.classList.remove("hide");
  const habitName = document.querySelector(".journal_title").value;
  const habitFrequency = document.querySelector("#frequency").value;
  const habitColor = document.querySelector("#color1").value;
  console.log(
    `habit name: ${habitName}, habit frequency: ${habitFrequency}, color: ${habitColor}`
  );
  const habit = {
    habitName,
    habitFrequency,
    habitColor,
  };
  habits.push(habit);
  console.log(habits);

  habitContainer.innerHTML = `<h1>${habitName}</h1><h1>${habitFrequency}</h1><h1>${habitColor}</h1>`;
};

addHabitBtn.addEventListener("click", openModal);
submitModalbtn.addEventListener("click", submitModal);
