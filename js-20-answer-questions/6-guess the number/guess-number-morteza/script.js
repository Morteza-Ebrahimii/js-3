let randomNumber = Math.floor(Math.random() * 100 + 1);
const guessBotton = document.querySelector(".btnGuess");
const finalOutput = document.querySelector(".final-output");
const tries = document.querySelector(".Tries-output");
const btnNewGame = document.querySelector(".btnNewGame");
let guess2 = document.querySelector(".inputs-Values");

// console.dir(btnNewGame);

let numberOfTries = 7;
function guessNumber() {
  tries.innerText = `Number of Tries: ${numberOfTries}`;

  let guess = document.querySelector(".inputs-Values").value;

  // console.log('guess button', guessBotton);
  // console.log('final output', finalOutput);

  if (guess === "") {
    finalOutput.innerText = "Guess a number between 1 and 100";
  } else if (guess > 100 || guess < 0) {
    // console.log('in if block number up to 100 and below than 0');
    finalOutput.innerText = "Please enter a number between 1 and 100";
  } else if (guess < randomNumber) {
    finalOutput.innerText = "Number is too low";
    numberOfTries--;
  } else if (guess > randomNumber) {
    finalOutput.innerText = "Number is too high";
    numberOfTries--;
  } else if (Number(guess) === randomNumber) {
    finalOutput.innerText = "Guess is correct. You win!";
    tries.innerText = `it took you ${7 - numberOfTries} tries`;
  }

  if (numberOfTries === 0) {
    finalOutput.style.visibility = "hidden";
    tries.innerText = `You Lose, the number was ${randomNumber}`;
    // newGame();
  }

  console.log(guess.toString());
  console.log(randomNumber.toString());
  // console.log(numberOfTries);
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  //Reset users input field
  //Reset tries, and triesTaken by the user
  btnNewGame.addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * 100 + 1);
    guess2.value = "";
    numberOfTries = 7
    tries.innerText = `Number of Tries: ${numberOfTries}`;
    finalOutput.innerText = "Guess a number between 1 and 100";
  })
}
newGame()


//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
