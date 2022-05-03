"use strict";

const addHabitBtn = document.querySelector(".add_habit_entry_btn");
const habitModal = document.querySelector(".habit_modal");
const submitModalbtn = document.querySelector(".modal_submit_button");
const habitContainer = document.querySelector(".habit_container");
const cancelbtn = document.querySelector(".cancel_btn");

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
  let today = weekday[d.getDay()][0];
  let day = weekday[d.getDay()];
  if (today === "S") today = day;
  console.log(today);

  habitContainer.innerHTML += `
          <div class="habit_row">
          <div class="habit_name_col">${habitName}</div>
          <div class="habit_calendar">
            <div class="weekday">
              <div class="triangle">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103.53 89.66">
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="habit_tracker" data-name="habit tracker">
                      <polygon class="polygon_triangle" points="51.77 0 0 89.66 103.53 89.66 51.77 0"/>
                    </g>
                  </g>
              </svg>
              </div>
              <div class="dayLetter">${weekday[0][0]}</div>
            </div>

            <div class="weekday">
              <div class="triangle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103.53 89.66">
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="habit_tracker" data-name="habit tracker">
                      <polygon class="polygon_triangle" points="51.77 0 0 89.66 103.53 89.66 51.77 0"/>
                    </g>
                  </g>
              </svg>
              </div>
              <div class="dayLetter">${weekday[1][0]}</div>
            </div>

            <div class="weekday">
              <div class="triangle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103.53 89.66">
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="habit_tracker" data-name="habit tracker">
                      <polygon class="polygon_triangle" points="51.77 0 0 89.66 103.53 89.66 51.77 0"/>
                    </g>
                  </g>
              </svg>
              </div>
              <div class="dayLetter">${weekday[2][0]}</div>
            </div>

            <div class="weekday">
              <div class="triangle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103.53 89.66">
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="habit_tracker" data-name="habit tracker">
                      <polygon class="polygon_triangle" points="51.77 0 0 89.66 103.53 89.66 51.77 0"/>
                    </g>
                  </g>
              </svg>
              </div>
              <div class="dayLetter">${weekday[3][0]}</div>
            </div>

            <div class="weekday">
              <div class="triangle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103.53 89.66">
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="habit_tracker" data-name="habit tracker">
                      <polygon class="polygon_triangle" points="51.77 0 0 89.66 103.53 89.66 51.77 0"/>
                    </g>
                  </g>
              </svg>
              </div>
              <div class="dayLetter">${weekday[4][0]}</div>
            </div>

            <div class="weekday">
              <div class="triangle">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103.53 89.66">
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="habit_tracker" data-name="habit tracker">
                      <polygon class="polygon_triangle" points="51.77 0 0 89.66 103.53 89.66 51.77 0"/>
                    </g>
                  </g>
              </svg>
              </div>
              <div class="dayLetter">${weekday[5][0]}</div>
            </div>

            <div class="weekday">
              <div class="triangle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103.53 89.66">
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="habit_tracker" data-name="habit tracker">
                      <polygon class="polygon_triangle" points="51.77 0 0 89.66 103.53 89.66 51.77 0"/>
                    </g>
                  </g>
              </svg>
              </div>
              <div class="dayLetter">${weekday[6][0]}</div>
            </div>
          </div>
        </div>`;

  const collectionTriangle = document.querySelectorAll(".polygon_triangle");
  for (const [i, triangle] of collectionTriangle.entries()) {
    triangle.addEventListener("click", () => {
      console.log("ahhh", i);
      triangle.style.fill = `${habitColor}`;
    });
  }
  console.log(collectionTriangle);
  console.log(habits);

  // if (weekday[0] === today[0]) console.log("aha");
  // console.log(today);
  // if (document.querySelector(".dayLetter").textContent === today[0]) {
  //   document.querySelector(".polygon_triangle").style.fill = "grey";
  // }

  // function addHabit() {
  //   const add1 = function () {
  //     document.querySelector(".habit_name_col").innerHTML += `${habitName}`;
  //   };

  //   const add2 = function () {
  //     for (const dayX of weekday) {
  //       document.querySelector(".habit_calendar").innerHTML += `
  //           <div class="weekday">
  //             <div class="triangle">
  //               <svg width="45" height="45" viewBox="0 0 14 14">
  //                 <path
  //                   d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"
  //                 />
  //               </svg>
  //             </div>
  //             <div class="dayLetter">${dayX[0]}</div>`;
  //     }
  //   };

  //   document.querySelector(".habit_row").innerHTML += `${add1()}${add2()}`;
  // }
  // addHabit();

  // There is a problem canceling the modal; the plus button won't reappar.
  const cancelButton = document.querySelector(".cancel_btn");

  // !!!closing the modal not working
  // const closeModal = function (e) {
  //   e.preventDefault();
  //   habitModal.classList.add("hidden");
  //   addHabitBtn.classList.remove("hide");
  // };

  // cancelButton.addEventListener("click", closeModal);

  // document.addEventListener("keydown", function (e) {
  //   if (e.key === "Escape" && !habitModal.classList.contains("hidden")) {
  //     closeModal();
  //   }
  // });
};

// const cancelModal = function (e) {
//   e.preventDefault();
//   habitModal.classList.remove("hide");
//   addHabitBtn.classList.add("hide");
// };

addHabitBtn.addEventListener("click", openModal);

submitModalbtn.addEventListener("click", submitModal);
// cancelModel.addEventListener("click", cancelModal);
if (habits) {
  console.log("There are habits currently");
}
