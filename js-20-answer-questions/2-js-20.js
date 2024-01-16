// ? Remember domthis.js from your session?
// todo1: Look at the code below, fix it, and explain how you resolved the problem.
// Note: In this code, console.log and console.dir should refer to the button and h1 element, not the window.

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
  button.addEventListener('click', function () {
    console.log(this);
    console.dir(this);
    button.style.backgroundColor = makeRandColor();
    button.style.color = makeRandColor();
  });
}

const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
  h1.addEventListener('click', function() {
    console.log(this);
    console.dir(this);
    h1.style.backgroundColor = makeRandColor();
    h1.style.color = makeRandColor();
  });
}


//! problem : When we use (this) in the arrow function, point to (window). (js: 15,js :25)
//! problem : There is a comma between each rgb number (js: 9)
//! problem : For rgb we can give a <number> between 0 and 255 (js : 6, js : 7, js : 8)