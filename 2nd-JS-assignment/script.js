// function playerLowerCase() {
//   let chooseYourFighter = prompt(
//     "Choose your fighter: Rock, Paper or Scissors?"
//   ).toLowerCase();
//   while (
//     chooseYourFighter !== "rock" &&
//     chooseYourFighter !== "paper" &&
//     chooseYourFighter !== "scissors"
//   ) {
//     chooseYourFighter = prompt("Incorrect option. Try again").toLowerCase();
//   }
//   return chooseYourFighter;
// }

function game() {
  while (round < 5) {
    let computerSelection = computerPlay();
    let playerSelection = playerLowerCase();

    playRound(playerSelection, computerSelection, round);
    if ((playerCounter == 3) & (round <= 4)) {
      console.log(
        "%cYou won! If you want you can continue playing until round 5",
        "color:black; background:#00AB66; font-size: 12px; font-weight:bold; padding: 2px 3px"
      );
    } else if ((computerCounter == 3) & (round <= 4)) {
      console.log(
        "%cComputer wins! If you want you can continue playing until round 5",
        "color:white; background:#FF0000; font-size: 12px;font-weight:bold; padding: 2px 3px"
      );
    } else if (playerCounter == 3 && round == 5) {
      console.log(
        "%cYou won this game! Refresh the page to play again",
        "color:black; background:#00AB66; font-size: 12px; font-weight:bold; padding: 2px 3px"
      );
    } else if (computerCounter == 3 && round == 5) {
      console.log(
        "%cThe computer won this game! Refresh the page to play again",
        "color:black; background:#FF0000; font-size: 12px;font-weight:bold; padding: 2px 3px"
      );
    } else if (round == 5) {
      alert(
        "I hope you had fun! Thanks for trying my first game with javascript :)"
      );
    }
  }
}

// game();
const rock = document.getElementById("rockButton");
const paper = document.getElementById("paperButton");
const scissors = document.getElementById("scissorsButton");
const resultTitle = document.getElementById("results");
const roundNumber = document.getElementById("roundNumber");
const playersSelections = document.querySelector(".playersSelections");
const playerHTMLCounter = document.getElementById("playerCounter");
const drawHTMLCounter = document.getElementById("drawCounter");
const computerHTMLCounter = document.getElementById("computerCounter");
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const roundList = document.getElementById("roundsList");
const roundTable = document.getElementById("rounds");
const gameButtons = document.getElementById("gameButtons");
const clearButton = document.getElementById("clearButton");

rock.addEventListener("click", () => {
  let playerSelection = "rock";
  let computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  roundTable.style.display = "block";
  playersSelections.style.display = "flex";
});
paper.addEventListener("click", () => {
  let playerSelection = "paper";
  let computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  roundTable.style.display = "block";
  playersSelections.style.display = "flex";
});
scissors.addEventListener("click", () => {
  let playerSelection = "scissors";
  let computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  roundTable.style.display = "block";
  playersSelections.style.display = "flex";
});
clearButton.addEventListener("click", () => {
  clearGame();
});

let playerCounter = 0;
let drawCounter = 0;
let computerCounter = 0;
let round = 0;

function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * options.length);
  return random, options[random];
}

function clearGame() {
  round = 0;
  roundNumber.innerText = round;
  playerCounter = 0;
  playerHTMLCounter.innerText = playerCounter;
  drawCounter = 0;
  drawHTMLCounter.innerText = drawCounter;
  computerCounter = 0;
  computerHTMLCounter.innerText = computerCounter;

  resultTitle.innerHTML = "Best of 5 rounds wins!";

  gameButtons.style.display = "block";
  clearButton.style.display = "none";

  playersSelections.style.display = "none";
  roundTable.style.display = "none";
  roundList.innerHTML = "";
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundList.innerHTML += "<li class='yellowText'>It's a draw.</li>";
    drawCounter++;
    drawHTMLCounter.innerText = drawCounter;
    playerChoice.innerText = playerSelection.toUpperCase();
    computerChoice.innerText = computerSelection.toUpperCase();
    round++;
    roundNumber.innerText = round;
  } else {
    playerChoice.innerText = playerSelection.toUpperCase();
    computerChoice.innerText = computerSelection.toUpperCase();
    computerHTMLCounter.innerText = computerCounter;

    if (playerSelection == "rock" && computerSelection == "scissors") {
      roundList.innerHTML +=
        '<li class="greenText">You Win! Rock beats Scissors</li>';
      playerCounter++;
      playerHTMLCounter.innerText = playerCounter;
      round++;
      roundNumber.innerText = round;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
      roundList.innerHTML +=
        ' <li class="greenText">You Win! Paper beats Rock</li>';
      playerCounter++;
      playerHTMLCounter.innerText = playerCounter;
      round++;
      roundNumber.innerText = round;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
      roundList.innerHTML +=
        ' <li class="greenText">You Win! Scissors beats Paper</li>';
      playerCounter++;
      playerHTMLCounter.innerText = playerCounter;
      round++;
      roundNumber.innerText = round;
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
      roundList.innerHTML +=
        '<li class="redText">You Lose! Rock beats Scissors</li>';
      computerCounter++;
      computerHTMLCounter.innerText = computerCounter;
      round++;
      roundNumber.innerText = round;
    } else if (computerSelection == "paper" && playerSelection == "rock") {
      roundList.innerHTML +=
        '<li class="redText">You Lose! Paper beats Rock</li>';
      computerCounter++;
      computerHTMLCounter.innerText = computerCounter;
      round++;
      roundNumber.innerText = round;
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
      roundList.innerHTML +=
        '<li class="redText">You Lose! Scissors beats Paper</li>';
      computerCounter++;
      computerHTMLCounter.innerText = computerCounter;
      round++;
      roundNumber.innerText = round;
    }
  }
  if (playerCounter == 3) {
    resultTitle.innerHTML =
      "You won this game! Click on the button below to play again.";
    gameButtons.style.display = "none";
    clearButton.style.display = "block";
  } else if (computerCounter == 3) {
    resultTitle.innerHTML =
      "You lost this game! Click on the button below to play again.";
    gameButtons.style.display = "none";
    clearButton.style.display = "block";
  }
}
