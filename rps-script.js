//start

let winCount = 0;
let loseCount = 0;
let tieCount = 0;

let gameRounds = prompt(
  "Enter a number for the\namount of rounds rps you want to play.\nThe rounds will count down."
);
for (let i = 0; i < gameRounds; i++) {
  console.log(`round ${i + 1}`);
  let userChoice = getUserPick();
  let computerChoice = getComputersChoice();
  let result = getResult(userChoice, computerChoice);
  console.log(result);

  record(result);
}

console.log(`Round results`);
console.log(`You won: ${winCount}`);
console.log(`You lost: ${loseCount}`);
console.log(`You tied:${tieCount}`);

function record(result) {
  if (result == "win") winCount++;
  if (result == "lose") loseCount++;
  if (result == "tie") tieCount++;
}

function getUserPick() {
  return prompt("You are playing rock, paper, scissors, write your answer.");
}

function getComputersChoice() {
  let compOptions = ["rock", "paper", "scissors"];
  return compOptions[Math.floor(Math.random() * compOptions.length)];
}

//compare choices
// console.log(getResult(userChoice, computerChoice));
function getResult(userChoice, computerChoice) {
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
