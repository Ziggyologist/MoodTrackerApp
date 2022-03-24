const addEntryBtn = document.querySelector(".add_journal_entry_btn");
const journalEntry = document.querySelector(".journal_entry_area");
const printedArea = document.querySelector(".printed_entry");

const addJournalEntry = function (event) {
  event.preventDefault();
  console.log("here");
  journalEntry.classList.remove("hidden");
  journalEntry.innerHTML = `<form class="journal_entry_individual_container">
  <div class="journal_entry_navbar">
  <input class="text_input_journal" type="text" placeholder="Give a title..." name="entryTitle">
  <input class="date_input_journal" type="date" name="entryDate">
  </div>
  <div class="entry_body">
    <textarea class="textarea_input_journal" cols="5" name="entryBody"></textarea>
  </div>
  <div class="entry_submit_button">
  <button class="entry_submit_btn" type="submit">done</button></div>
</form>`;

  const submitEntryBtn = document.querySelector(".entry_submit_btn");
  // console.log(submitEntryBtn);

  const printJournalEntry = function (event) {
    event.preventDefault();

    const entryTitle = document.querySelector(".text_input_journal").value;
    const entryDate = document.querySelector(".date_input_journal").value;
    const entryBody = document.querySelector(".textarea_input_journal").value;

    console.log(entryTitle, entryDate, entryBody);

    journalEntry.classList.add("hidden");

    console.log(event.target);

    // online
    const data = new FormData(event.target);
    // const value = data.get("entryTitle");
    const value = Object.fromEntries(data.entries());
    console.log({value});

    if (!entryBody) {
      alert("You haven't written an entry");
    } else {
      printedArea.innerHTML += `<div class="journal_entry_individual_container">
    <div class="journal_entry_navbar">
    <div class="text_input_journal">${entryTitle}</div>
    <div class="date_input_journal">${entryDate}</div>
    </div>
    <div class="entry_body">
      <div class="textarea_input_journal">${entryBody}</div> </div>
    </div>
  </div> <br>`;
    }
  };

  // submitEntryBtn.addEventListener("click", printJournalEntry);

  // online
  const form = document.querySelector(".journal_entry_individual_container");
  form.addEventListener("submit", printJournalEntry);
};
addEntryBtn.addEventListener("click", addJournalEntry);
// addEntryBtn.addEventListener("click", printJournalEntry);
