// ? Display the following array on the page
// todo-1: First, watch the video in the help folder.
// todo-2: In the next step, review the HTML and CSS files.
// todo-3: Iterate over the "data" array and create a card for each array index.
// todo-4: Append the created card to the element with the class "cards".
// todo-5: Each card should have a button; when clicked, the card title should be displayed on the element with the class "cardSelected".

const data = [
  {
    id: 1,
    title: "ravel Monkey Club #1",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item-9.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 2,
    title: "ravel Monkey Club #2",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-21.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 3,
    title: "ravel Monkey Club #3",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-10.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 4,
    title: "ravel Monkey Club #4",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item8.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
];

const body = document.body;
const card = document.querySelector(".cards");
const cardSelected = document.querySelector(".cardSelected");

card.style.marginTop = "15vh";
card.style.marign = "0 0 5em 0";

const cards = data.forEach((event) => {
  //!createElements
  const div = document.createElement("div");
  const img = document.createElement("img");
  const containerImg = document.createElement("div");
  const firstContainer = document.createElement("div");
  const firstText = document.createElement("h3");
  const secondText = document.createElement("h3");
  const secondContainer = document.createElement("div");
  //the code below is container of icon and text(ralph garraway)
  const firstIconText = document.createElement("div");
  //the code below is container of lock icon and text(please bid)
  const secondIconText = document.createElement("div");
  const secondImg = document.createElement("img");
  const thirdText = document.createElement("h1");
  const firstIcon = document.createElement("span");
  const fourthText = document.createElement("p");
  const likeContainer = document.createElement("div");
  const heartIcon = document.createElement("span");
  const counterOFlike = document.createElement("h7");
  // console.log(counterOFlike);

  //!attributes
  div.setAttribute("id", event.id);
  img.setAttribute("src", event.src);
  secondImg.setAttribute("src", event.accountImage);
  // console.log(img);

  //!texts
  firstText.innerText = event.title;
  secondText.innerText = "BSC";
  thirdText.innerText = event.account;
  firstIcon.innerHTML = '<i class="fa-solid fa-lock"></i>';
  fourthText.innerText = "Please Bid";
  cardSelected.innerText = `you selected card #`;
  heartIcon.innerHTML = '<i class="fa-regular fa-heart"></i>';
  counterOFlike.innerText = "100";
  // console.log(secondContainer);

  //!styles
  div.style.width = "20rem";
  div.style.height = "28rem";
  div.style.backgroundColor = "#363636";
  div.style.borderRadius = "30px";
  div.style.display = "flex";
  div.style.justifyContent = "center";
  div.style.flexDirection = "column";
  div.style.alignItems = "center";
  img.style.width = "18rem";
  img.style.height = "18rem";
  img.style.borderRadius = "20px";
  img.style.position = "reletive";
  firstText.style.color = "white";
  firstText.style.fontSize = "1.5rem";
  firstText.style.margin = "3px";
  secondText.style.color = "white";
  secondText.style.fontSize = "1rem";
  secondText.style.backgroundColor = "#5142fc";
  secondText.style.padding = "10px";
  secondText.style.borderRadius = "20% 40% 20% 40%";
  secondText.style.marginLeft = "8px";
  firstContainer.style.display = "flex";
  firstContainer.style.marginTop = "10px";
  secondImg.style.width = "3rem";
  secondImg.style.height = "3rem";
  secondImg.style.borderRadius = "1rem";
  secondImg.style.marginRight = ".7em";
  thirdText.style.fontSize = ".9em";
  thirdText.style.color = "white";
  fourthText.style.color = "white";
  secondIconText.style.display = "flex";
  secondIconText.style.border = "2px solid #5142fc";
  secondIconText.style.borderRadius = "50px";
  secondIconText.style.padding = ".3em 1em";
  secondIconText.style.alignItems = "center";
  secondContainer.style.display = "flex";
  secondContainer.style.alignItems = "center";
  secondContainer.style.marginTop = "1em";
  firstIconText.style.display = "flex";
  firstIconText.style.marginRight = "1em";
  firstIconText.style.alignItems = "center";
  firstIcon.style.color = "white";
  firstIcon.style.marginRight = "1em";
  firstIcon.style.fontSize = ".7em";
  cardSelected.style.display = "none";
  likeContainer.style.width = "3.5em";
  likeContainer.style.height = "2em";
  likeContainer.style.position = "absolute";
  likeContainer.style.margin = ".6em 0 0em .6em";
  likeContainer.style.backgroundColor = "black";
  likeContainer.style.zIndex = "99";
  likeContainer.style.borderRadius = ".5rem";
  likeContainer.style.display = "flex";
  likeContainer.style.alignItems = "center";
  likeContainer.style.justifyContent = "center";
  likeContainer.style.justifyContent = "space-evenly";
  heartIcon.style.color = "white";
  heartIcon.style.fontSize = ".8em";
  counterOFlike.style.color = "white";

  //!events
  secondImg.addEventListener("mouseenter", () => {
    secondImg.style.borderRadius = "50%";
  });
  secondImg.addEventListener("mouseleave", () => {
    secondImg.style.borderRadius = "1rem";
  });
  secondIconText.addEventListener("mouseenter", () => {
    secondIconText.style.backgroundColor = "#5142fc";
  });
  secondIconText.addEventListener("mouseleave", () => {
    secondIconText.style.backgroundColor = "";
  });
  secondIconText.addEventListener("click", () => {
    cardSelected.style.display = "block";
    cardSelected.innerText = `you selected card #${event.id}`;
  });

  //! appends
  card.append(div);
  div.append(containerImg, firstContainer, secondContainer);
  containerImg.append(likeContainer, img);
  firstContainer.append(firstText, secondText);
  secondContainer.append(firstIconText, secondIconText);
  firstIconText.append(secondImg, thirdText);
  secondIconText.append(firstIcon, fourthText);
  likeContainer.append(heartIcon, counterOFlike);
});
