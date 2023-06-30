var wins = 0;
var ties = 0;
var losses = 0;

const rockElement = document.getElementById("steen");
const paperElement = document.getElementById("papier");
const scissorsElement = document.getElementById("schaar");

const RPS = ["steen", "papier", "schaar"];

const reset = document.getElementById("reset");

const playerScore = document.getElementById("score");
const computerScore = document.getElementById("computerScore");



// Computer choice
let computerChoice = Math.floor(Math.random() * 3);

// Displaying the computer choice
if (computerChoice == 0) {
    computerChoice = "steen";
} else if (computerChoice == 1) {
    computerChoice = "papier";
} else {
    computerChoice = "schaar";
}

console.log(computerChoice);



// Event listerners for the buttons

rockElement.addEventListener("click", function () {
    console.log("Steen");
});

paperElement.addEventListener("click", function () {
    console.log("Papier");
});

scissorsElement.addEventListener("click", function () {
    console.log("Schaar");
});



// Event listerners for the reset

reset.addEventListener("click", function () {
    console.log("Reset");
});

