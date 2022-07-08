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
  DrugiBtn.innerText = "Edit";
  NewBtn.innerText = "Delete";
  DeleteEl(NewBtn, newDiv);
  DrugiBtn.addEventListener(edit(DrugiBtn,newDiv));
}

DeleteEl = (btn, div) => {
  btn.addEventListener("click", (e) => {
    div.remove();
  });
};

edit = (el,div) => {
  el.addEventListener("click", () => {
    el.innerText = "Why change me?";
    div.style.backgroundColor = "#00FF00";
  });
};
