console.log("Active");
let ToDoList = document.querySelector(".ToDoList");

openBtn = document.querySelector(".openBtn").addEventListener("click", () => {
  createElemnt();
});

let nesto = document.querySelector(".openDiv");

function createElemnt() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("ToDoList");
  nesto.appendChild(newDiv);
  const NewBtn = document.createElement("button");
  newDiv.appendChild(NewBtn);
  const DrugiBtn = document.createElement("button");
  newDiv.appendChild(DrugiBtn);
  DrugiBtn.innerText = "izmeni me?";
  NewBtn.innerText = "Obrisi me smradu";
  DeleteEl(NewBtn, newDiv);
  DrugiBtn.addEventListener(edit(DrugiBtn));
}

DeleteEl = (btn, div) => {
  btn.addEventListener("click", (e) => {
    div.remove();
  });
};

edit = (el) => {
  el.addEventListener("click", () => {
    el.innerText = "jesi l ozebo,mene da menjas?";
  });
};
