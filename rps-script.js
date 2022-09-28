// Part 1 Player picks rock paper or scissors
    // prompt appears
    // player writes in prompt
    // choice is converted into uppercase letters

let playerSelection = prompt("You are playing Rock Paper Scissors with the computer input your answer below")

    playerSelection = playerSelection.toUpperCase();


// Part 2 Computer picks rock paper or scissors randomly
function computerSelection() {
    let rpsArray = [
        "ROCK",
        "PAPER",
        "SCISSORS"
    ];

    let compRpsAnswer = rpsArray[Math.floor(Math.random()*rpsArray.length)]; //Picks a word from the array
     
    return compRpsAnswer;
};

let computerAnswer = computerSelection();

        //Need to be able to reference answer outside of function

// Part 3 RPS answers are compared
    // Rock > Scissors, Scissors > Paper, Paper > Rock
    // Tie if the same
    // Player loses if they spell incorrectly or write a different word
let gameResult = "";

function compareAnswers() {                               
    if ( playerSelection == "ROCK" && computerAnswer == "SCISSORS" ) {
        return "You win.";

}   else if ( playerSelection == "ROCK" && computerAnswer == "PAPER" ) {
        return "You lose." 

}   else if ( playerSelection == "ROCK" && computerAnswer == "ROCK" ) {
        return "You tied."  

}   else if ( playerSelection == "SCISSORS" && computerAnswer == "SCISSORS" ) {
        return "You tied.";

}   else if ( playerSelection == "SCISSORS" && computerAnswer == "PAPER") {
        return "You win."; 

}   else if ( playerSelection == "SCISSORS" && computerAnswer == "ROCK") {
        return "You lose.";  

}   else if ( playerSelection == "PAPER" && computerAnswer == "SCISSORS") {
        return "You lose.";

}   else if ( playerSelection == "PAPER" && computerAnswer == "PAPER") {
        return "You tied.";  

}   else if ( playerSelection == "PAPER" && computerAnswer == "ROCK") {
        return "You win.";

}   else    { console.log(playerSelection); console.log(computerAnswer); return "You lose, spell your answer correctly.";

}
}


// Part 4 Display game results


 //if i run getComput