//? Question-2:Write a code that, upon clicking a button labeled "Place Bid" changes its text to "Added to Cart" and disables the button (you can modify the style if necessary).
// hint: watch help.mp4
//!Answer:
const btnEle = document.querySelector(".cards__card__footer__btn");
const pEle = document.querySelector(".cards__card__footer__btn p");
const lockIconEle = document.querySelector(".cards__card__footer__btn i");

btnEle.addEventListener("click", () => {
  pEle.innerHTML = "Added to Cart";
  lockIconEle.style.display = "none";
});
