// ? Qustion-4:Write a code that changes the background color of the stars when we click on them.
// hint: watch help.mp4
//! answer
const stars = document.querySelectorAll(".stars i");

stars.forEach((s) => {
   s.addEventListener("click", () => {
   s.classList.toggle("get_color")
   }) 
});
//! in this question for best practice, I added the attribute style in css,
