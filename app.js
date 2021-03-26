// import functions and grab DOM elements

import { compareNumbers, getHighOrLowText } from './utils.js';

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

/* Refactor so message text is calculated for display within 
another function [getComparisonResultTest]
-if comp is 0, display 'You win!' on loseOrWinMessage, set highOrLowMessage 
to empty string, and set guessButton style display to none
-if comp is -1, set highOrLowMessage to 'guess too low'
-if comp is -1, set highOrLowMessage to 'guess too high'

*/

guessButton.addEventListener('click', () => {
    if (guessesRemaining > 1) {
        guessesRemaining--;
        guessesRemainingDisplay.textContent = `${guessesRemaining}`;
        let numberGuess = Number(guess.value);
        const comparison = compareNumbers(numberGuess, computerChoice);

        let highOrLowString = getHighOrLowText(comparison);
        highOrLowMessage.textContent = highOrLowString;

        if (comparison === 0) {
            loseOrWinMessage.textContent = 'You win!';
            guessButton.style.display = 'none';
        }
    } else if (guessesRemaining === 1) {
        guessesRemaining--;
        guessesRemainingDisplay.textContent = `${guessesRemaining}`;
        highOrLowMessage.textContent = '';
        loseOrWinMessage.textContent = 'You lose!';
    }
});

// let healthString = getPlantHealthText(plantHealth);
 