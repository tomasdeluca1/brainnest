let playerCounter = 0;
let computerCounter = 0;
let round = 0;

function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * options.length);
  return random, options[random];
}

function playerLowerCase() {
  let chooseYourFighter = prompt(
    "Choose your fighter: Rock, Paper or Scissors?"
  ).toLowerCase();
  while (
    chooseYourFighter !== "rock" &&
    chooseYourFighter !== "paper" &&
    chooseYourFighter !== "scissors"
  ) {
    chooseYourFighter = prompt("Incorrect option. Try again").toLowerCase();
  }
  return chooseYourFighter;
}

function playRound(playerSelection, computerSelection) {
  console.log(`%cRound ${round + 1}`, "background: blue; padding: 2px 3px");
  console.log(
    `You played` + `%c ${playerSelection.toUpperCase()}`,
    "font-weight:bold;"
  );
  console.log(
    `The computer played` + `%c ${computerSelection.toUpperCase()}`,
    "font-weight:bold;"
  );

  if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("%cYou Win! Rock beats Scissors", "color : #00AB66");
    playerCounter++;
    round++;
    console.log(`Player ${playerCounter} - Computer ${computerCounter}`);
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("%cYou Win! Paper beats Rock", "color : #00AB66");
    playerCounter++;
    round++;
    console.log(`Player ${playerCounter} - Computer ${computerCounter}`);
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log("%cYou Win! Scissors beats Paper", "color : #00AB66");
    playerCounter++;
    round++;
    console.log(`Player ${playerCounter} - Computer ${computerCounter}`);
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    console.log("%cYou lose! Rock beats Scissors", "color : #FF0000");
    computerCounter++;
    round++;
    console.log(`Player ${playerCounter} - Computer ${computerCounter}`);
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    console.log("%cYou lose! Paper beats Rock", "color : #FF0000");
    computerCounter++;
    round++;
    console.log(`Player ${playerCounter} - Computer ${computerCounter}`);
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    console.log("%cYou lose! Scissors beats Paper", "color : #FF0000");
    computerCounter++;
    round++;
    console.log(`Player ${playerCounter} - Computer ${computerCounter}`);
  } else if (computerSelection === playerSelection) {
    console.log("%cIt's a deuce", "color: yellow");
    console.log(`Player ${playerCounter} - Computer ${computerCounter}`);
  }
  return round;
}

function game() {
  while (round < 5) {
    let computerSelection = computerPlay();
    let playerSelection = playerLowerCase();

    playRound(playerSelection, computerSelection, round);
    if (playerCounter == 3) {
      console.log(
        "%cYou won! If you want you can continue playing until round 5",
        "color:black; background:#00AB66; font-size: 12px; font-weight:bold; padding: 2px 3px"
      );
    } else if (computerCounter == 3) {
      console.log(
        "%cComputer wins! If you want you can continue playing until round 5",
        "color:black; background:#FF0000; font-size: 12px;font-weight:bold; padding: 2px 3px"
      );
    } else if (playerCounter == 3 && round == 5) {
      console.log(
        "%cYou won this game! Do you want to play again?",
        "color:black; background:#00AB66; font-size: 12px; font-weight:bold; padding: 2px 3px"
      );
    } else if (computerCounter == 3 && round == 5) {
      console.log(
        "%cThe computer won this game! Do you want to play again?",
        "color:black; background:#FF0000; font-size: 12px;font-weight:bold; padding: 2px 3px"
      );
    } else if (round == 5) {
      alert(
        "I hope you had fun! Thanks for trying my first game with javascript :)"
      );
    }
  }
}

game();
