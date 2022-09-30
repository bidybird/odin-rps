//start

// get users pick and assign it to variable userChoice
//may just leave as function

let userChoice = getUserPick();

function getUserPick() {
  let userPick = prompt("You are playing RPS, write your choice");
  return userPick;
}

//get computers pick and assign it to variable computers choice
//computers rps options are random
// may remove variable computer choice and rename function computer choice

let computerChoice = computersPick();

function computersPick() {
  const rpsOptions = ["rock", "paper", "scissors"];
  return rpsOptions[Math.floor(Math.random() * rpsOptions.length)];
}
//compare choices
console.log(getResult());

function getResult() {
  if (userChoice == computerChoice) {
    return "tie";
  } else if (
    (userChoice == "rock" && computerChoice == "paper") ||
    (userChoice == "scissors" && computerChoice == "rock") ||
    (userChoice == "paper" && computerChoice == "scissors")
  ) {
    return "win";
  } else {
    return "lose";
  }
}
