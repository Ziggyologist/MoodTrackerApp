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

  // get date
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let day = weekday[d.getDay()][0];
  console.log(day);

  habitContainer.innerHTML += `        
          <div class="habit_row">
          <div class="habit_name_col">${habitName}</div>
          <div class="habit_calendar">
            <div class="weekday">
              <div class="triangle">
                <svg width="45" height="45" viewBox="0 0 14 14">
                  <path
                    d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"
                  />
                </svg>
              </div>
              <div class="dayLetter">S</div>
            </div>

            <div class="weekday">
              <div class="triangle">
                <svg width="45" height="45" viewBox="0 0 14 14">
                  <path
                    d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"
                  />
                </svg>
              </div>
              <div class="dayLetter">M</div>
            </div>

            <div class="weekday">
              <div class="triangle">
                <svg width="45" height="45" viewBox="0 0 14 14">
                  <path
                    d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"
                  />
                </svg>
              </div>
              <div class="dayLetter">T</div>
            </div>

            <div class="weekday">
              <div class="triangle">
                <svg width="45" height="45" viewBox="0 0 14 14">
                  <path
                    d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"
                  />
                </svg>
              </div>
              <div class="dayLetter">W</div>
            </div>

            <div class="weekday">
              <div class="triangle">
                <svg width="45" height="45" viewBox="0 0 14 14">
                  <path
                    d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"
                  />
                </svg>
              </div>
              <div class="dayLetter">T</div>
            </div>

            <div class="weekday">
              <div class="triangle">
                <svg width="45" height="45" viewBox="0 0 14 14">
                  <path
                    d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"
                  />
                </svg>
              </div>
              <div class="dayLetter">F</div>
            </div>

            <div class="weekday">
              <div class="triangle">
                <svg width="45" height="45" viewBox="0 0 14 14">
                  <path
                    d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"
                  />
                </svg>
              </div>
              <div class="dayLetter">S</div>
            </div>
          </div>
        </div>`;

  // <div class="habit_row">
  //   <div class="habit_name_col">${habitName}</div>
  //   <div class="habit_calendar">
  //     <div class="weekday">${weekday[0][0]}</div>
  //     <div class="weekday">${weekday[1][0]}</div>
  //     <div class="weekday">${weekday[2][0]}</div>
  //     <div class="weekday">${weekday[3][0]}</div>
  //     <div class="weekday">${weekday[4][0]}</div>
  //     <div class="weekday">${weekday[5][0]}</div>
  //     <div class="weekday">${weekday[6][0]}</div>
  //   </div>
  // </div>;
};

addHabitBtn.addEventListener("click", openModal);
submitModalbtn.addEventListener("click", submitModal);
