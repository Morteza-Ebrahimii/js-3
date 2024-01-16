// ? why event bubbling is bad and how can we prevent it?

// ! Answers ======================================

const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");
const div3 = document.querySelector(".div3");

// In the event bubble, the event starts from the child element and moves to the parent and is called.
//Since we stopped the propagation (event bubbling, in this case) of the event on clicking, it printed only child in the console.
//!examplea :

div1.addEventListener("click", (e) => {
  alert("div1");
});
div2.addEventListener("click", (e) => {
  alert("div2");
  e.stopPropagation();
});
div3.addEventListener("click", (e) => {
  alert("div3");
});

// ----------------------------------------

// But in (stopImmediatePropagation) when the parent element is different from the last child, only the child is printed to the console. But if the parent and child are the same, the child and parent will be printed in the console. 
//!example

// div1.addEventListener("click", (e) => {
//   alert("div1");
// });
// h1.addEventListener("click", (e) => {
//   alert("h1");
// });
// div3.addEventListener("click", (e) => {
  // e.stopImmediatePropagation();
  // alert("div3");
// });
