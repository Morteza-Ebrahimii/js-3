//? look at the code in html file and say how we can attach an event to all of the buttons without actually giving it to them and selecting the button tag? write it's code .
//Note: your code should log the text content of the clicked button to the console.

// ! answer ===========================================

//! 1- bad practice
// const getEl = () => {
//   let children = document.body.children[0].children;
//   // console.log(children);
//   let childs = ([...children] = children);
//   children.forEach((element) => {
//     element.addEventListener("click", (event) => {
//       alert(event.target.innerText);
//     });
//   });
// };
// getEl();

//! 2- good practice
const getEle = function getEl() {
  addEventListener("click", (event) => {
    if (event.target.localName === "button") {
      alert(event.target.innerText);
    }
  });
};
getEle();
