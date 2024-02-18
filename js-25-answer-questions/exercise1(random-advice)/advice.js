const idOfAdvices = document.querySelector(".id");
const mainText = document.querySelector(".text");
const btn = document.querySelector(".dice");
// console.log(btn);

const data = () => {
  return (advice = fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // console.log(data.slip.id);
      idOfAdvices.innerHTML = `ADVICE #${data.slip.id}`;
      mainText.innerHTML = data.slip.advice;
    })
    .catch((er) => {
      throw new Error(er);
    }));
};


btn.addEventListener("click", () => data());
