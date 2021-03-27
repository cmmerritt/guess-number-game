// import functions and grab DOM elements

import { compareNumbers, getHighOrLowText, loseOrWinText, guessButtonDisplayStatus } from './utils.js';

const guess = document.getElementById('number-guess-input');

const highOrLowMessage = document.getElementById('high-or-low-message');

const guessesRemainingDisplay = document.getElementById('guesses-remaining-display');

const loseOrWinMessage = document.getElementById('lose-or-win-message');

const guessButton = document.getElementById('guess-button');

const computerChoice = Math.ceil(Math.random() * 20);

// initialize state

let guessesRemaining = 4;
guessesRemainingDisplay.textContent = `${guessesRemaining}`;

// set event listeners to update state and DOM


guessButton.addEventListener('click', () => {
    guessesRemaining--;

    guessesRemainingDisplay.textContent = `${guessesRemaining}`;
        
    let numberGuess = Number(guess.value);
    const comparison = compareNumbers(numberGuess, computerChoice);

    let highOrLowString = getHighOrLowText(comparison, guessesRemaining);
    highOrLowMessage.textContent = highOrLowString;

    let loseOrWinString = loseOrWinText(comparison, guessesRemaining);
    loseOrWinMessage.textContent = loseOrWinString;

    let guessButtonDisplayStatusString = guessButtonDisplayStatus(comparison, guessesRemaining);
    guessButton.style.display = guessButtonDisplayStatusString;
});