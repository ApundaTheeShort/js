// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let guess = null;

while (guess !== randomNumber) {
  // Prompt the user for a guess
  guess = parseInt(prompt("Guess a number between 1 and 100:"), 10);

  // Check if the guess is correct
  if (isNaN(guess)) {
    alert("Please enter a valid number.");
  } else if (guess < randomNumber) {
    alert("Too low! Try again.");
  } else if (guess > randomNumber) {
    alert("Too high! Try again.");
  } else {
    alert("Congratulations! You guessed the correct number.");
  }
}