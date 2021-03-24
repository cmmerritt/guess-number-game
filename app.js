// import functions and grab DOM elements

import { compareNumbers } from '../utils.js';

const guess = document.getElementById('number-guess-input');

const highOrLowMessage = document.getElementById('high-or-low-message');

const guessesRemainingDisplay = document.getElementById('guesses-remaining-display');

const loseOrWinMessage = document.getElementById('lose-or-win-message');

const guessButton = document.getElementById('guess-button');

const computerChoice = Math.ceil(Math.random() * 20);


// initialize state

let guessesRemaining = 4;

// set event listeners to update state and DOM

guessButton.addEventListener('click', () => {
    let numberGuess = Number(guess);
});


