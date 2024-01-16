const ul = document.createElement("ul");
const div = document.querySelector("#content");
div.append(ul);

function todoList([...todos]) {
  //!get each todo in object and convert to li.
  todos.forEach((ele) => {
    const li = document.createElement("li");
    li.innerHTML = Object.values(ele).join();
    ul.append(li);

    //!add event to li.
    li.addEventListener("click", (event) => {
      if (li.style[0] !== "text-decoration-line") {
        li.style.textDecoration = "line-through";
      } else {
        li.style.textDecoration = "";
      }
    });
  });
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
