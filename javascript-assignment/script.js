function game() {
  let playerCounter = 0;
  let computerCounter = 0;

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

  let i = 0;
  while (i < 5) {
    let computerSelection = computerPlay();
    let playerSelection = playerLowerCase();
    console.log(`%cRound ${i + 1}`, "background: blue; padding: 2px 3px");
    if (playerSelection === 3) {
      console.log("You won");
    } else if (computerSelection === 3) {
      console.log("Computer won");
    } else {
      playRound(playerSelection, computerSelection);
    }
    function playRound(playerSelection, computerSelection) {
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
        ++playerCounter;
        i++;
        console.log(`Player ${playerCounter} - Computer ${computerCounter}`);
      } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("%cYou Win! Paper beats Rock", "color : #00AB66");
        ++playerCounter;
        i++;
        console.log(`Player ${playerCounter} - Computer ${computerCounter}`);
      } else if (
        playerSelection == "scissors" &&
        computerSelection == "paper"
      ) {
        console.log("%cYou Win! Scissors beats Paper", "color : #00AB66");
        ++playerCounter;
        i++;
        console.log(`Player ${playerCounter} - Computer ${computerCounter}`);
      } else if (computerSelection == "rock" && playerSelection == "scissors") {
        console.log("%cYou lose! Rock beats Scissors", "color : #FF0000");
        ++computerCounter;
        i++;
        console.log(`Player ${playerCounter} - Computer ${computerCounter}`);
      } else if (computerSelection == "paper" && playerSelection == "rock") {
        console.log("%cYou lose! Paper beats Rock", "color : #FF0000");
        ++computerCounter;
        i++;
        console.log(`Player ${playerCounter} - Computer ${computerCounter}`);
      } else if (
        computerSelection == "scissors" &&
        playerSelection == "paper"
      ) {
        console.log("%cYou lose! Scissors beats Paper", "color : #FF0000");
        ++computerCounter;
        i++;
        console.log(`Player ${playerCounter} - Computer ${computerCounter}`);
      } else if (computerSelection === playerSelection) {
        console.log("%cIt's a deuce", "color: yellow");
        console.log(`Player ${playerCounter} - Computer ${computerCounter}`);
      }
    }
  }
}

game();
