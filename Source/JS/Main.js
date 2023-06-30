var wins = 0;
var ties = 0;
var losses = 0;

const rockElement = document.getElementById("steen");
const paperElement = document.getElementById("papier");
const scissorsElement = document.getElementById("schaar");

const reset = document.getElementById("reset");

const playerScore = document.getElementById("score");
const computerScore = document.getElementById("computerScore");

var userChoice = "";
var computerChoice = "";

// Computer choice function
function getComputerChoice() {
    var choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "steen";
    } else if (choice === 1) {
        return "papier";
    } else {
        return "schaar";
    }
}



// Event listerners for the buttons
rockElement.addEventListener("click", function () {
    userChoice = "steen";
    computerChoice = getComputerChoice();
    if (computerChoice === 'steen') {
        ties++; console.log("Tie");
    } else if (computerChoice === 'papier') {
        losses++; console.log("Loss");
    } else {
        wins++; console.log("Win");
    }
});

paperElement.addEventListener("click", function () {
    userChoice = "papier";
    computerChoice = getComputerChoice();
    if (computerChoice === 'papier') {
        ties++; console.log("Tie");
    } else if (computerChoice === 'schaar') {
        losses++; console.log("Loss");
    } else {
        wins++; console.log("Win");
    }
});

scissorsElement.addEventListener("click", function () {
    userChoice = "schaar";
    computerChoice = getComputerChoice();
    if (computerChoice === 'schaar') {
        ties++; console.log("Tie");
    } else if (computerChoice === 'steen') {
        losses++; console.log("Loss");
    } else {
        wins++; console.log("Win");
    }
});

// Event listerners for the reset
reset.addEventListener("click", function () {
    console.log("Reset");
    var wins = 0;
    var ties = 0;
    var losses = 0;
});


