// Part 1 Player picks rock paper or scissors
// prompt appears
// player writes in prompt
// choice is converted into uppercase letters

function startGame() {

let playerSelection = prompt(
  "You are playing Rock Paper Scissors with the computer input your answer below"
);

playerSelection = playerSelection.toUpperCase();

// Part 2 Computer picks rock paper or scissors randomly
function computerSelection() {
  let rpsArray = ["ROCK", "PAPER", "SCISSORS"];

  let compRpsAnswer = rpsArray[Math.floor(Math.random() * rpsArray.length)]; //Picks a word from the array

  return compRpsAnswer;
}

const computerAnswer = computerSelection();

//Need to be able to reference answer outside of function

// Part 3 RPS answers are compared
// Rock > Scissors, Scissors > Paper, Paper > Rock
// Tie if the same
// Player loses if they spell incorrectly or write a different word
function compareAnswers(x, y) {
    
  if (x == y) {
    return "You tied, ";
  } else if (x == "ROCK" && y == "SCISSORS") {
    return "You win, ";
  } else if (x == "ROCK" && y == "PAPER") {
    return "You lose, ";
  } else if (x == "SCISSORS" && y == "PAPER") {
    return "You win, ";
  } else if (x == "SCISSORS" && y == "ROCK") {
    return "You lose, ";
  } else if (x == "PAPER" && y == "SCISSORS") {
    return "You lose, ";
  } else if (x == "PAPER" && y == "ROCK") {
    return "You win, ";
  } else {
    return "You lose, spell your answer correctly. ";
  }
}

let finalResult = compareAnswers(playerSelection, computerAnswer);

console.log(finalResult + "\nPlayer Selection: " + playerSelection + "\nComputer Selection: " + computerAnswer);

}

