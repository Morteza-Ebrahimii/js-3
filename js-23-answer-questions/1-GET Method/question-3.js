/*
 Todo 1: Use this site -> "https://jsonplaceholder.typicode.com/users"
 Todo 2: Make a card with user data
 Todo 3: Each card should contain the name and company name
 Todo 4: In order to use the HTML and CSS, use the <article> tag as a container to append all the cards. For each card, create a <div> to set the innerText inside it.
*/

const article = document.querySelector("article");
const ul = document.querySelector(".containerUl");

// ! Answer

const getCard = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
};

getCard()
.then((data) => {
  data.forEach((el) => {

      const li = document.createElement("li");
      li.innerText = `person : ${el.id} \nname : ${el.name} \ncompany name : ${el.company.name}`;

      li.classList.add("list-group-item")

      ul.append(li);
      article.append(ul);
    });
  })
  .catch((e) => {
    console.log(e);
  });
