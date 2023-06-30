// Sets the variables for the wins, ties and losses to 0 on page load
var wins = 0;
var ties = 0;
var losses = 0;

var sessionWins = 0; // Makes sure the current wins don't get saved into highscore after a highscore reset

// Get the "Statistic" elements from the HTML
const computerChoiceElement = document.getElementById("computerChoice");
const winElement = document.getElementById("wins");
const tieElement = document.getElementById("ties");
const lossElement = document.getElementById("losses");

// Sound effects
var winSound = new Audio('../../Assets/Sounds/Win.mp3');
var tieSound = new Audio('../../Assets/Sounds/Tie.mp3');
var loseSound = new Audio('../../Assets/Sounds/Lose.mp3');

// On page load, set the high score input to the saved high score, if any
updateHighScore();
updateStats(); // Call this function on page load to initialize stats

function updateStats() {
    winElement.textContent = "Wins: " + wins;
    tieElement.textContent = "Ties: " + ties;
    lossElement.textContent = "Losses: " + losses;

    // Save the high score in local storage
    var highScore = parseInt(localStorage.getItem('highScore')) || 0;
    if (sessionWins > highScore) { // Change 'wins' to 'sessionWins' here
        localStorage.setItem('highScore', sessionWins);
    }
    updateHighScore();
}

function updateHighScore() {
    var highScore = parseInt(localStorage.getItem('highScore')) || 0;
    document.getElementById("highscoreInput").textContent = "High Score: " + highScore;

    var alertShown = localStorage.getItem('alertShown') || 'false';

    if (highScore === 5 && alertShown === 'false') {
        alert("Gefeliciteerd u heeft een mijlpaal van 5 bereikt!");
        document.getElementById("crown").style.display = "flex";
        localStorage.setItem('alertShown', 'true');
    }
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


// Creates the variables for the user and computer choice
var userChoice = "";
var computerChoice = "";

// Display the onload choice inside the HTML
computerChoiceElement.textContent = "Maak een keuze...";

// Computer choice function
function getComputerChoice() {
    const choices = ['Steen', 'Papier', 'Schaar'];
    return choices[Math.floor(Math.random() * 3)];
}

// Get the hand elements from the HTML
const choices = document.getElementsByClassName("hand");
const mainContainer = document.getElementById("main-container");

// Gets the users input and displays the computer's choice
for (var i = 0; i < choices.length; i++) {
    choices[i].addEventListener("click", function() {
        userChoice = this.id;
        computerChoice = getComputerChoice(); // Get the computer's choice

        // Game result
        if (userChoice === computerChoice) {
            ties++;
            mainContainer.style.backgroundColor = "#f19b22"; // background color for a tie
            tieSound.play();
        } else if ((userChoice === 'Steen' && computerChoice === 'Schaar') || 
        (userChoice === 'Papier' && computerChoice === 'Steen') ||
        (userChoice === 'Schaar' && computerChoice === 'Papier')) {
            wins++;
            sessionWins++;
            mainContainer.style.backgroundColor = "#00ff00"; // background color for a win
            winSound.play();
        } else {
            losses++;
            mainContainer.style.backgroundColor = "#ff0000"; // background color for a loss
            loseSound.play();
        }


        updateStats();

        // Get the image element from the HTML
        const computerChoiceImage = document.getElementById("computerChoiceImage");

        // Image paths
        const SteenImage = "../../Assets/Images/rock.png";
        const PapierImage = "../../Assets/Images/paper.png";
        const SchaarImage = "../../Assets/Images/scissors.png";

        // Update the image source based on the computer's choice
        if (computerChoice === 'Steen') {
            computerChoiceImage.src = SteenImage;
        } else if (computerChoice === 'Papier') {
            computerChoiceImage.src = PapierImage;
        } else if (computerChoice === 'Schaar') {
            computerChoiceImage.src = SchaarImage;
        }

        // Display the computer's choice
        computerChoiceElement.textContent = "AI Koos: " + computerChoice;

        // Reset background color after 0.5 seconds
        setTimeout(function() {
            console.log("Resetting background color...");
            mainContainer.style.background = 'var(--Main-Container-BG)';
        }, 500);
    });
}


// Wins, ties and losses reset
document.getElementById("reset").addEventListener("click", function () {
    if (confirm("Weet u zeker dat u opnieuw wilt beginnen?")) {
        wins = 0;
        ties = 0;
        losses = 0;

        // Hide the crown
        document.getElementById("crown").style.display = "none";
        updateStats();
        
        // Reset high score
        localStorage.removeItem('highScore');
        updateHighScore();

        // Reset session wins
        sessionWins = 0; // This line resets sessionWins without affecting the displayed total wins

        // Hide the crown
        document.getElementById("crown").style.display = "none";

        // Reset alertShown flag
        localStorage.setItem('alertShown', 'false');
    }
});

// Highscore reset
document.getElementById("resetHighscore").addEventListener("click", function () {
    console.log("Resetting high score...");
    if (confirm("Weet u zeker dat u de highscore wilt resetten?")) {
        // Reset high score
        localStorage.removeItem('highScore');
        updateHighScore();

        // Reset session wins
        sessionWins = 0; // This line resets sessionWins without affecting the displayed total wins

        // Hide the crown
        document.getElementById("crown").style.display = "none";

        // Reset alertShown flag
        localStorage.setItem('alertShown', 'false');
    }
});



const bg = document.getElementById('main-container');
const windowWidth = window.innerWidth / 3;
const windowHeight = window.innerHeight / 3;

document.addEventListener('mousemove', (e) => {
  const mouseX = (e.clientX - window.innerWidth / 1) / windowWidth;
  const mouseY = (e.clientY - window.innerHeight / 1) / windowHeight;

  bg.style.backgroundPosition = `${mouseX}% ${mouseY}%`;
});

// Set your background image here
bg.style.backgroundImage = "url('../../Assets/Images/RPS-BG.png')";
