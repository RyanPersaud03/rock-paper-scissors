// Get references to the DOM elements where we will display the choices and result
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

// Get the parent element that contains the buttons and the reset button
const choices = document.getElementById("choices");
const resetButton = document.getElementById("reset");

// Define the possible choices in the game
const CHOICES = ["rock", "paper", "scissors"];

// Add an event listener to the parent element to handle button clicks
choices.addEventListener("click", (e) => {
  // Check if the clicked element has the 'option' class
  if (e.target.classList.contains("option")) {
    // Get the user's choice from the button's id
    const userChoice = e.target.id;
    userChoiceDisplay.textContent = userChoice; // Display the user's choice

    // Generate the computer's choice
    const computerChoice = generateComputerChoice();
    computerChoiceDisplay.textContent = computerChoice; // Display the computer's choice

    // Determine the result of the game
    const result = getResult(userChoice, computerChoice);
    resultDisplay.textContent = result; // Display the result

    // Show the reset button
    resetButton.style.display = "block";
  }

  // Check if the clicked element is the reset button
  if (e.target.id === "reset") {
    resetGame();
  }
});

// Function to randomly generate the computer's choice
function generateComputerChoice() {
  // Generate a random index to pick a choice from the CHOICES array
  const randomIndex = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomIndex]; // Return the chosen value
}

// Function to determine the result of the game
function getResult(userChoice, computerChoice) {
  // Check if it's a draw
  if (userChoice === computerChoice) {
    return "It's a draw!";
  }

  // Define the winning conditions for the user
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!"; // User wins
  } else {
    return "You lose!"; // Computer wins
  }
}

// Function to reset the game
function resetGame() {
  // Clear the displayed choices and result
  computerChoiceDisplay.textContent = "";
  userChoiceDisplay.textContent = "";
  resultDisplay.textContent = "";

  // Hide the reset button
  resetButton.style.display = "none";
}
