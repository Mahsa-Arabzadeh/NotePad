const inputTitle = document.querySelector("#title-note");
const addBtn = document.querySelector(".add-task");
const inputText = document.querySelector("#NotePad");
const output = document.querySelector("#check-box");

let child, delBtn, h2, p;

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if ((inputTitle.value == "") | (inputText.value == " ")) {
    alert("enter title");
  } else if ((inputText.value == "") | (inputTitle.value == " ")) {
    alert("enter note");
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

    inputTitle.innerHTML = "";
    inputText.innerHTML = "";
  }

  delBtn.addEventListener("click", function () {
    output.removeChild(this.parentElement);
  });
});
