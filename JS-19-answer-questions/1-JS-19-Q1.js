// ? Question-1:Write a code that, upon clicking the heart icon (.cards__card__img__icon i), changes its color and increments the counter (#counter) displayed alongside it.
// hint: watch help.mp4
// !Answer:
const heartIcon = document.querySelector(".ri-heart-3-line");
const counter = document.querySelector(".cards__card__img__icon__text");
// console.log(counter);

heartIcon.addEventListener("click", (event) => {
  event.target.style.color = "red";
  counter.innerHTML ++;
});
