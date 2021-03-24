// import functions and grab DOM elements

import { compareNumbers } from './utils.js';

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
    if (guessesRemaining > 1) {
        guessesRemaining--;
        let numberGuess = Number(guess.value);
        const comparison = compareNumbers(numberGuess, computerChoice);
        if (comparison === 0) {
            loseOrWinMessage.textContent = 'You win!';
            guessesRemainingDisplay.textContent = `${guessesRemaining}`;
        } else if (comparison === -1) {
            highOrLowMessage.textContent = 'Your guess is too low. Try again!';
            guessesRemainingDisplay.textContent = `${guessesRemaining}`;
        } else if (comparison === 1) {
            highOrLowMessage.textContent = 'Your guess is too high. Try again!';
            guessesRemainingDisplay.textContent = `${guessesRemaining}`;
        }
    } else if (guessesRemaining === 1) {
        guessesRemaining--;
        guessesRemainingDisplay.textContent = `${guessesRemaining}`;
        highOrLowMessage.textContent = '';
        loseOrWinMessage.textContent = 'You lose!';
    }
});
 