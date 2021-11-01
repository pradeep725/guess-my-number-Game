/*console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct number!";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 24;
document.querySelector(".guess").value = 23;
console.log((document.querySelector(".guess").value = "23"));
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = "";
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  // When there is no input
  if (!guess) {
    // console.log((document.querySelector(".message").textContent = "No number"));
    displayMessage("No number");
    // When player wins
  } else if (guess === secretNumber) {
    //document.querySelector(".message").textContent = "Correct Number!";
    displayMessage("Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (highscore < score) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // when guess is different
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "Too High!" : "Too Low";
      displayMessage(guess > secretNumber ? "Too High!" : "Too Low");

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "You lost the game";
      displayMessage("You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
  //when guess is high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too High!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }

  //   //When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too Low!";

  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "you lost the game";

  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  //document.querySelector(".message").textContent = "start guessing...";
  displayMessage("start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
