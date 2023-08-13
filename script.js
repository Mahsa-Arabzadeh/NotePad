const btnAdd = document.querySelector(".add-file");
const newDiv = document.querySelector("#check-box");
function getNote() {
  if (
    btnAdd.addEventListener("click", function () {
      let newDiv = document.createElement("div");
      document.querySelector("#check-box").appendChild(newDiv);
      newDiv.textContent = "Add a note";
    })
  ) {
  }
}
getNote();

console.log("mahsa");
