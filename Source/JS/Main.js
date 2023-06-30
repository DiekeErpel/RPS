// Sets the variables for the wins, ties and losses to 0 on page load
var wins = 0;
var ties = 0;
var losses = 0;

// Get the "Statistic" elements from the HTML
const computerChoiceElement = document.getElementById("computerChoice");
const winElement = document.getElementById("wins");
const tieElement = document.getElementById("ties");
const lossElement = document.getElementById("losses");

// Sound effects
var winSound = new Audio('../../Assets/Sounds/Win.mp3');
var tieSound = new Audio('../../Assets/Sounds/Tie.mp3');
var loseSound = new Audio('../../Assets/Sounds/Lose.mp3');

// Update statistics in HTML
function updateStats() {
    winElement.textContent = "Wins: " + wins;
    tieElement.textContent = "Ties: " + ties;
    lossElement.textContent = "Losses: " + losses;
}

updateStats(); // Call this function on page load to initialize stats

// Creates the variables for the user and computer choice
var userChoice = "";
var computerChoice = "";

// Display the onload choice inside the HTML
computerChoiceElement.textContent = "Maak een keuze...";

// Computer choice function
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function startGame() {
    // Hide the button immediately
    document.getElementById("start").style.display = "none";

    // Get the main-container element
    var mainContainer = document.getElementById("main-container");

    // Set the background color to white
    mainContainer.style.backgroundColor = "#ffffff";

    // Remove the background image
    mainContainer.style.backgroundImage = "none";

    // Display the inputs-stats-container
    document.getElementById("inputs-stats-container").style.display = "flex";
}

// Fade out function
function fadeOut(sound) {
    var fade = setInterval(function() {
        if (sound.volume > 0.1) {
            sound.volume -= 0.1;
        } else {
            clearInterval(fade);
            sound.pause();
            sound.currentTime = 0;
            sound.volume = 1.0;  // Reset volume for next time
        }
    }, 200);  // Adjust the rate of volume decrease here (200ms intervals in this case)
}


const choices = document.getElementsByClassName("hand");

for (var i = 0; i < choices.length; i++) {
    choices[i].addEventListener("click", function() {
        // Fade out any currently playing sound
        if (!winSound.paused) fadeOut(winSound);
        if (!loseSound.paused) fadeOut(loseSound);
        if (!tieSound.paused) fadeOut(tieSound);

        userChoice = this.id;
        computerChoice = getComputerChoice();

        // Game result
        if (userChoice === computerChoice) {
            ties++;

            // Play the tie sound
            tieSound.play();
        } else if ((userChoice === 'rock' && computerChoice === 'scissors') || 
                   (userChoice === 'paper' && computerChoice === 'rock') ||
                   (userChoice === 'scissors' && computerChoice === 'paper')) {
            wins++;
            // Play the win sound
            winSound.play();
        } else {
            losses++;
            // Play the lose sound
            loseSound.play();
        }

        updateStats();

        // Display the computer's choice
        computerChoiceElement.textContent = "AI Koos: " + computerChoice;

        // Change the CSS display property of computerChoiceElement to "none"
        document.getElementById("mainImage").style.display = "none";
        document.getElementById("image-container").style.display = "flex";
    });
}


// Wins, ties and losses reset
document.getElementById("reset").addEventListener("click", function () {
    if (confirm("Weet u zeker dat u opnieuw wilt beginnen?")) {
        wins = 0;
        ties = 0;
        losses = 0;
        updateStats();
    }
});
