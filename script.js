const inputTitle = document.querySelector("#title-note");
const addBtn = document.querySelector(".add-task");
const inputText = document.querySelector("#NotePad");
const output = document.querySelector("#check-box");

let child, delBtn, h2, p;

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputTitle.value == "" || inputText.value == "") {
    alert("Please enter both title and note.");
  } else {
    child = document.createElement("div");
    delBtn = document.createElement("button");
    h2 = document.createElement("h2");
    p = document.createElement("p");

    h2.innerHTML = inputTitle.value;
    p.innerHTML = inputText.value;
    delBtn.innerHTML = "Delete";

    child.classList.add("lists");
    delBtn.classList.add("delete");
    h2.classList.add("output-title");
    p.classList.add("text");

    child.appendChild(h2).style = "color: #fff";
    child.appendChild(p);
    child.appendChild(delBtn);
    output.appendChild(child);

    inputTitle.value = ""; // Use value instead of innerHTML
    inputText.value = ""; // Use value instead of innerHTML

    saveDataToLocalStorage();

    delBtn.addEventListener("click", function () {
      output.removeChild(this.parentElement);
      saveDataToLocalStorage();
    });
  }
});

// Function to save data to localStorage
function saveDataToLocalStorage() {
  const notes = [];
  const notesElements = document.querySelectorAll(".lists");

  notesElements.forEach((element) => {
    const title = element.querySelector(".output-title").innerText;
    const text = element.querySelector(".text").innerText;
    notes.push({ title, text });
  });

  localStorage.setItem("notes", JSON.stringify(notes));
}

// Load saved data from localStorage when the page loads
window.addEventListener("load", function () {
  const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

  savedNotes.forEach((note) => {
    child = document.createElement("div");
    delBtn = document.createElement("button");
    h2 = document.createElement("h2");
    p = document.createElement("p");

    h2.innerHTML = note.title;
    p.innerHTML = note.text;
    delBtn.innerHTML = "Delete";

    child.classList.add("lists");
    delBtn.classList.add("delete");
    h2.classList.add("output-title");
    p.classList.add("text");

    child.appendChild(h2).style = "color: #fff";
    child.appendChild(p);
    child.appendChild(delBtn);
    output.appendChild(child);

    delBtn.addEventListener("click", function () {
      output.removeChild(this.parentElement);
      saveDataToLocalStorage();
    });
  });
});
