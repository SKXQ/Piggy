let counter = 0;
let moneyCounter = 0; // Initialize the total money counter
let isRunning = true;
const breakButton = document.getElementById('break-btn');
const resultElement = document.getElementById('result');
const moneyCounterElement = document.getElementById('money-counter');

// Function to increment the counter
function incrementCounter() {
    if (isRunning) {
        counter++;
        if (counter > 9999999) {
            counter = 0; // Reset to 0 if it exceeds 999999
        }
    }
}

// Start the counter incrementing every 100ms
const intervalId = setInterval(incrementCounter, 100); // Adjust speed as necessary

// Disable the "Break" button initially for 5 hours (5 hours in milliseconds = 5 * 60 * 60 * 1000)
const waitTime = 5 * 60 * 60 * 1000;
setTimeout(() => {
    breakButton.textContent = "Break";
    breakButton.disabled = false; // Enable the button after 5 hours
}, waitTime);

// Event listener for the "Break" button
breakButton.addEventListener('click', () => {
    if (isRunning) {
        isRunning = false;
        clearInterval(intervalId); // Stop the counter
        resultElement.textContent = `Money Earned: $${counter}`; // Show money earned
        resultElement.classList.remove('hidden');

        // Add the counter value to the total money counter
        moneyCounter += counter;
        moneyCounterElement.textContent = `Money: $${moneyCounter}`; // Update the money counter
    }
});
