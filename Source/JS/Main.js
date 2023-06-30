// Sets the variables for the wins, ties and losses to 0 on page load
var wins = 0;
var ties = 0;
var losses = 0;

// Get the "Statistic" elements from the HTML
const computerChoiceElement = document.getElementById("computerChoice");
const winElement = document.getElementById("wins");
const tieElement = document.getElementById("ties");
const lossElement = document.getElementById("losses");

// Display the wins and losses inside the HTML
winElement.textContent = "Wins: " + wins;
tieElement.textContent = "Ties: " + ties;
lossElement.textContent = "Losses: " + losses;

// Get the "Choice" elements from the HTML
const rockElement = document.getElementById("steen");
const paperElement = document.getElementById("papier");
const scissorsElement = document.getElementById("schaar");

const reset = document.getElementById("reset");

// Get all elements with class "button"
var buttons = document.getElementsByClassName("button");

// Creates the variables for the user and computer choice
var userChoice = "";
var computerChoice = "";

// Display the onload choice inside the HTML
computerChoiceElement.textContent = "Maak een keuze...";

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

function startGame() {
    // Hide the button immediately
    document.getElementById("start").style.display = "none";
    
    // Start the fade out animation on the image
    var imageElement = document.getElementById("mainImage");
    imageElement.classList.add("fadeOut");

    // After the animation ends, hide the image and display the inputs-stats-container
    imageElement.addEventListener("animationend", function() {
        imageElement.style.display = "none";
        document.getElementById("inputs-stats-container").style.display = "flex";
    }, {once: true});
}




// Rock Choice
rockElement.addEventListener("click", function () {
    userChoice = "steen";
    computerChoice = getComputerChoice();
    if (computerChoice === 'steen') {
        ties++; 
        tieElement.textContent = "Ties: " + ties;
    } else if (computerChoice === 'papier') {
        losses++;
        lossElement.textContent = "Losses: " + losses;
    } else {
        wins++;
        winElement.textContent = "Wins: " + wins;
    }
});

// Paper Choice
paperElement.addEventListener("click", function () {
    userChoice = "papier";
    computerChoice = getComputerChoice();
    if (computerChoice === 'papier') {
        ties++;
        tieElement.textContent = "Ties: " + ties;
    } else if (computerChoice === 'schaar') {
        losses++;
        lossElement.textContent = "Losses: " + losses;
    } else {
        wins++;
        winElement.textContent = "Wins: " + wins;
    }
});

// Scissors Choice
scissorsElement.addEventListener("click", function () {
    userChoice = "schaar";
    computerChoice = getComputerChoice();
    if (computerChoice === 'schaar') {
        ties++;
        tieElement.textContent = "Ties: " + ties;
    } else if (computerChoice === 'steen') {
        losses++;
        lossElement.textContent = "Losses: " + losses;
    } else {
        wins++;
        winElement.textContent = "Wins: " + wins;
    }
});


// Wins, ties and losses reset
reset.addEventListener("click", function () {
    var userResponse = confirm("Weet u zeker dat u opnieuw wilt beginnen?");

    if (userResponse) {

        wins = 0;
        ties = 0;
        losses = 0;
    
        winElement.textContent = "Wins: " + wins;
        tieElement.textContent = "Ties: " + ties;
        lossElement.textContent = "Losses: " + losses;
    } else {
        return;
    }
});




