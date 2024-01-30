newli2 = [];
function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");

  const li = [li1, li2];
  const tasks = ([task1, task2] = todos);

  li1.innerText = task1.task;
  li2.innerText = task2.task;

  // tasks.forEach((ele) => {
  //   const li = document.createElement("li");
  //   li.innerText = ele.task
  //   // console.log(ele.task);
  // });

  li.forEach((el) => {
    // tasks.forEach((e) => {
    //   console.dir(el);
    //   el.innerText = e.task
    // })

    const span = document.createElement("span");
    const iconTrash = document.createElement("i");
    const iconCheck = document.createElement("i");

    iconCheck.addEventListener("click", () => {
      el.classList.toggle("toggle");
    });

    iconTrash.addEventListener("click", () => {
      el.remove();
    });

    el.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    span.classList.add("badge", "bg-primary", "rounded-pill");
    iconCheck.classList.add("fa", "fa-check");
    iconTrash.classList.add("fa", "fa-trash");

    iconCheck.setAttribute("aria-hidden", "true");
    iconTrash.setAttribute("aria-hidden", "true");

    list.append(el);
    el.append(span);
    span.append(iconCheck, iconTrash);

    // deleteAllCompletedTodos(el);
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

function addNewTodo(event) {
  event.preventDefault();
  const input = document.querySelector("#todoInput");

  if (input.value !== "") {
    let list = document.getElementById("todo-list");
    const newLi = document.createElement("li");

    newLi.innerText = input.value;
    list.append(newLi);

    newLi.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    const span = document.createElement("span");
    const iconTrash = document.createElement("i");
    const iconCheck = document.createElement("i");

    iconCheck.addEventListener("click", () => {
      newLi.classList.toggle("toggle");
    });

    iconTrash.addEventListener("click", () => {
      newLi.remove();
    });

    span.classList.add("badge", "bg-primary", "rounded-pill");
    iconCheck.classList.add("fa", "fa-check");
    iconTrash.classList.add("fa", "fa-trash");

    iconCheck.setAttribute("aria-hidden", "true");
    iconTrash.setAttribute("aria-hidden", "true");

    list.append(newLi);
    newLi.append(span);
    span.append(iconCheck, iconTrash);

  }
  
  input.value = "";
  
  // deleteAllCompletedTodos(newLi);
}

// OPTIONAL
// function deleteAllCompletedTodos(li) {

//   const btnClear = document.createElement("button");
//   btnClear.innerHTML = "Clear done task";
//   btnClear.style.padding = "1rem";

//   document.body.append(btnClear);
//   // console.log(btnClear);

//   btnClear.addEventListener("click", () => {
//     if (li.classList.contains("toggle")) {
//       li.remove();
//     }
//   });
// }
