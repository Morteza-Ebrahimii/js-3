function listOfColours(colours) {
  //! select and create
  const select = document.createElement("select");
  const p = document.createElement("p");
  const div = document.querySelector("#content");
  const optionNone = document.createElement("option");
  
  //!append
  select.append(optionNone);
  div.append(p, select);

  //! give text
  p.innerText = " Choose an favorite colors:";
  optionNone.innerText = "none";

  //!get each colors
  colours.forEach((ele) => {
    const option = document.createElement("option");
    option.innerText = ele;
    select.append(option);
  });

  //!Change the color of the p tag with each click
  select.addEventListener("change", (event) => {
    if (event.target.value === "none") {
      p.style.backgroundColor = ""
      p.innerText = "Choose an favorite colors:";
    }else{
      p.style.backgroundColor = event.target.value;
      p.innerText =`The ${event.target.value} is very beautiful`;
    }
  });
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
