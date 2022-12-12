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
const rockPaperScissors = document.querySelector(".rockPaperScissors");
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
  rockPaperScissors.style.backgroundColor = "#3b3b3b";
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
    rockPaperScissors.style.backgroundColor = "#006800bf";
    gameButtons.style.display = "none";
    clearButton.style.display = "block";
  } else if (computerCounter == 3) {
    resultTitle.innerHTML =
      "You lost this game! Click on the button below to play again.";
    rockPaperScissors.style.backgroundColor = "#730000db";
    gameButtons.style.display = "none";
    clearButton.style.display = "block";
  }
}
const JScalculator = document.querySelector(".JScalculator");

const keys = document.querySelector(".calculator-keys");
const display = document.querySelector(".calculator-display");
const calculator = document.querySelector(".calculator");

const calculate = (a, operator, b) => {
  const firstNum = parseFloat(a);
  const secondNum = parseFloat(b);
  if (operator === "add") return firstNum + secondNum;
  if (operator === "subtract") return firstNum - secondNum;
  if (operator === "multiply") return firstNum * secondNum;
  if (operator === "divide") return firstNum / secondNum;
};

keys.addEventListener("click", (e) => {
  const key = e.target;
  const action = key.dataset.action;
  const keyContent = key.textContent;
  const displayedNum = display.textContent;
  const previousKeyType = calculator.dataset.previousKeyType;
  if (e.target.matches("button")) {
    if (!action) {
      if (
        displayedNum === "0" ||
        previousKeyType === "operator" ||
        previousKeyType === "calculate"
      ) {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
      Array.from(key.parentNode.children).forEach((k) =>
        k.classList.remove("is-depressed")
      );
      calculator.dataset.previousKeyType = "number";
      console.log("number key!");
    }
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      if (
        firstValue &&
        operator &&
        previousKeyType !== "operator" &&
        previousKeyType !== "calculate"
      ) {
        const calcValue = calculate(firstValue, operator, secondValue);
        display.textContent = calcValue;
        calculator.dataset.firstValue = calcValue;
      } else {
        calculator.dataset.firstValue = displayedNum;
      }

      key.classList.add("is-depressed");
      calculator.dataset.previousKeyType = "operator";
      calculator.dataset.operator = action;
      console.log("operator key!");
    }
    if (action === "decimal") {
      if (!displayedNum.includes(".")) {
        display.textContent = displayedNum + ".";
      } else if (
        previousKeyType === "operator" ||
        previousKeyType === "calculate"
      ) {
        display.textContent = "0.";
      }
      calculator.dataset.previousKeyType = "decimal";
      console.log("decimal key!");
    }
    if (action !== "clear") {
      const clearButton = calculator.querySelector("[data-action=clear]");
      clearButton.textContent = "CE";
    }
    if (action === "clear") {
      if (key.textContent === "AC") {
        calculator.dataset.firstValue = "";
        calculator.dataset.modValue = "";
        calculator.dataset.operator = "";
        calculator.dataset.previousKeyType = "";
      } else {
        key.textContent = "AC";
      }
      display.textContent = 0;
      calculator.dataset.previousKeyType = "clear";
    }

    if (action === "calculate") {
      let firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      let secondValue = displayedNum;
      if (firstValue) {
        if (previousKeyType === "calculate") {
          firstValue = displayedNum;
          secondValue = calculator.dataset.modValue;
        }
        display.textContent = calculate(firstValue, operator, secondValue);
      }
      calculator.dataset.modValue = secondValue;
      calculator.dataset.previousKeyType = "calculate";
      console.log("equal key!");
    }

    // Array.from(key.parentNode.children).forEach((k) =>
    //   k.classList.remove("is-depressed")
    // );
  }
});

// const key = e.target
// const action = key.dataset.action

// const one = document.getElementById("one");
// const two = document.getElementById("two");
// const three = document.getElementById("three");
// const four = document.getElementById("four");
// const five = document.getElementById("five");
// const six = document.getElementById("one");
// const seven = document.getElementById("seven");
// const eight = document.getElementById("eight");
// const nine = document.getElementById("nine");
// const cero = document.getElementById("cero");

// one.addEventListener("click", () => {
//   if (screen == 0) {
//     screen.innerHTML = 1;
//   }
//   screen.innerHTML += 1;
// });
// two.addEventListener("click", () => {
//   if (screen == 0) {
//     screen.innerHTML = 2;
//   }
//   screen.innerHTML += 2;
// });
// three.addEventListener("click", () => {
//   if (screen == 0) {
//     screen.innerHTML = 3;
//   }
//   screen.innerHTML += 3;
// });
// four.addEventListener("click", () => {
//   if (screen == 0) {
//     screen.innerHTML = 4;
//   }
//   screen.innerHTML += 4;
// });
// five.addEventListener("click", () => {
//   if (screen == 0) {
//     screen.innerHTML = 5;
//   }
//   screen.innerHTML += 5;
// });
// six.addEventListener("click", () => {
//   if (screen == 0) {
//     screen.innerHTML = 6;
//   }
//   screen.innerHTML += 6;
// });
// seven.addEventListener("click", () => {
//   if (screen == 0) {
//     screen.innerHTML = 7;
//   }
//   screen.innerHTML += 7;
// });
// eight.addEventListener("click", () => {
//   if (screen == 0) {
//     screen.innerHTML = 8;
//   }
//   screen.innerHTML += 8;
// });
// nine.addEventListener("click", () => {
//   if (screen == 0) {
//     screen.innerHTML = 9;
//   }
//   screen.innerHTML += 9;
// });
// cero.addEventListener("click", () => {
//   if (screen == 0) {
//     screen.innerHTML = 0;
//   }
//   screen.innerHTML += 0;
// });

const toggleButton = document.querySelector(".toggleButton");
const toggleButtonBox = document.querySelector(".toggleButtonBox");

toggleButtonBox.addEventListener("click", () => {
  toggleButton.classList.toggle("toggleOption");
  rockPaperScissors.classList.toggle("displayNone");
  JScalculator.classList.toggle("displayNone");
});
