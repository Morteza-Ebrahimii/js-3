// ? Qustion-3:Write a code to close message box when close button clicked :
// hint: watch help.mp4
//! answer
const message = document.querySelector(".message");
const close = document.querySelector(".ri-close-line");
// console.log(close);

close.addEventListener("click", () => {
    message.style.visibility = "hidden";
})
