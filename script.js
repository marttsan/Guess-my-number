"use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

// document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  //when we have nothing as input and press the button
  if (!guess) {
    document.querySelector(".message").textContent = "Please Enter Number !!!";
  }
  // if player wins
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number !!!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  //player guess is bigger than the number and ....
  else if (guess > secretNumber) {
    if (score > 1) {
      // have attempts left
      document.querySelector(".message").textContent = "Too high !";
      score--;
      document.querySelector(".score").textContent = score;
    }
    // does not have attempts left.
    else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
  // guess is less than secret number and ....
  else if (guess < secretNumber) {
    if (score > 1) {
      // have attempts left
      document.querySelector(".message").textContent = "Too low !";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //doesn't have attempts left
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
});
