//start game and give prompt
let winCount = 0;
let loseCount = 0;
let tieCount = 0;

for (let i = 0; i < 5; i++) {
  const round = gameStart();
  console.log(round);
  if (round == "win") {
    winCount++;
  } else if (round == "lose") {
    loseCount++;
  } else {
    tieCount++;
  }
}
console.log(`win count ${winCount}`);
console.log(`lose count = ${loseCount}`);
console.log(`tie count = ${tieCount}`);

function gameStart() {
  let userChoice = prompt(
    "You are playing rock paper scissors, write an answer below."
  );

  const computerOptions = ["rock", "paper", "scissors"];
  let computerChoice =
    computerOptions[Math.floor(Math.random() * computerOptions.length)];

  if (userChoice == computerChoice) {
    return "tie";
  } else if (userChoice == "rock" && computerChoice == "paper") {
    return "lose";
  } else if (userChoice == "rock" && computerChoice == "scissors") {
    return "win";
  } else if (userChoice == "paper" && computerChoice == "scissors") {
    return "lose";
  } else if (userChoice == "paper" && computerChoice == "rock") {
    return "win";
  } else if (userChoice == "scissors" && computerChoice == "rock") {
    return "lose";
  } else if (userChoice == "scissors" && computerChoice == "paper") {
    return "win";
  } else return "lose";
}
