var wins = 0;
var ties = 0;
var losses = 0;

const rock = document.getElementById("steen");
const paper = document.getElementById("papier");
const scissors = document.getElementById("schaar");

const reset = document.getElementById("reset");

const playerScore = document.getElementById("score");


// Event listerners for the buttons

rock.addEventListener("click", function () {
    console.log("Steen");
});

paper.addEventListener("click", function () {
    console.log("Papier");
});

scissors.addEventListener("click", function () {
    console.log("Schaar");
});



// Event listerners for the reset

reset.addEventListener("click", function () {
    console.log("Reset");
});

