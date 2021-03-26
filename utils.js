export function compareNumbers(guess, correctNumber) {
    if (guess === correctNumber) return 0;
    if (guess < correctNumber) return -1;
    if (guess > correctNumber) return 1;
}

export function getHighOrLowText(comparisonResult) {
    if (comparisonResult === 0) return '';
    if (comparisonResult === -1) return 'Your guess is too low. Try again!';
    if (comparisonResult === 1) return 'Your guess is too high. Try again!';
}

/* export function getPlantHealthText(plantHealth) {
    if (plantHealth === 'dry') return 'Your plant needs water!';
    if (plantHealth === 'healthy') return 'Your plant is a-ok!';
    
    return 'Your plant is drowining!'; */
