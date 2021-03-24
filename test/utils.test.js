// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('test the function to compare numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const actualCorrectGuess = compareNumbers(2, 2);
    const actualLowNumber = compareNumbers(5, 15);
    const actualHighNumber = compareNumbers(8, 1);

    //Act 
    // Call the function you're testing and set the result to a const

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actualCorrectGuess, 0, 'guess is correct');
    expect.equal(actualLowNumber, -1, 'guess is too low');
    expect.equal(actualHighNumber, 1, 'guess is too high');
});
