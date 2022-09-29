function startGame() {
  let winCount = 0;
  let loseCount = 0;
  while (winCount < 3 && loseCount < 3) {
    playRound();
    function playRound() {
      let playerSelection = prompt(
        "You are playing best of 5 Rock Paper Scissors. Input your answer below"
      );
      playerSelection = playerSelection.toUpperCase();

      function computerSelection() {
        let rpsArray = ["ROCK", "PAPER", "SCISSORS"];

        let compRpsAnswer =
          rpsArray[Math.floor(Math.random() * rpsArray.length)]; //Picks a word from the array

        return compRpsAnswer;
      }

      const computerAnswer = computerSelection();

      function compareAnswers(x, y) {
        if (x == y) {
          return "You tied.";
        } else if (x == "ROCK" && y == "SCISSORS") {
          winCount = winCount + 1;
          return "You won";
        } else if (x == "ROCK" && y == "PAPER") {
          loseCount = loseCount + 1;
          return "You lost";
        } else if (x == "SCISSORS" && y == "PAPER") {
          winCount = winCount + 1;
          return "You won";
        } else if (x == "SCISSORS" && y == "ROCK") {
          loseCount = loseCount + 1;
          return "You lost";
        } else if (x == "PAPER" && y == "SCISSORS") {
          loseCount = loseCount + 1;
          return "You lost";
        } else if (x == "PAPER" && y == "ROCK") {
          winCount = winCount + 1;
          return "You won";
        } else {
          loseCount = loseCount + 1;
          return "You lost";
        }
      }

      let roundResult = compareAnswers(playerSelection, computerAnswer);
      console.log(roundResult);
    }

    function gameResult(winCount, loseCount) {
      if (winCount > loseCount) {
        return `You won the five round set.\nWins ${winCount}.\nLosses ${loseCount}.`;
      } else {
        return `You lost the five round set.\nWins ${winCount}.\nLosses ${loseCount}.`;

      }
    }
  }
  console.log(gameResult());
}
