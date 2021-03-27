export function compareNumbers(guess, correctNumber) {
    if (guess === correctNumber) return 0;
    if (guess < correctNumber) return -1;
    if (guess > correctNumber) return 1;
}

export function getHighOrLowText(comparisonResult, guessesRemaining) {
    if (comparisonResult === 0 || guessesRemaining === 0) return '';
    if (comparisonResult === -1) return 'Your guess is too low. Try again!';
    if (comparisonResult === 1) return 'Your guess is too high. Try again!';
}

// if the outcome is 0, then return 'you win' (regardless of guesses remaining)
// if the outcome is not 0 and there are guesses remaining, then return ''
// if the outcome is not 0 and there are no guesses remaining, return 'you lose'

export function loseOrWinText(outcome, guessesRemaining) {
    if (outcome === 0 && guessesRemaining >= 0) {
        return 'You win!'; 
    } else if ((outcome !== 0) && (guessesRemaining === 0)) {
        return 'You lose!';
    } else {
        return '';
    }
}

export function guessButtonDisplayStatus(comparison, guessesRemaining) {
    if (guessesRemaining === 0 || comparison === 0) {
        return 'none';
    }
}

