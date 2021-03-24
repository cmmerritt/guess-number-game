## Making a plan
1) Page layout (title, header, etc.)
2) Explain the rules to the user
3) An input of type number for specifying the guess
4) A button to click to submit the guess
5) Display of number of tries remaining
6) Display of guess too high or too low
7) Display of lose and win result

# TDD
TDD a compareNumbers function that:

Has two parameters: guess and correctNumber
Returns one of the following values:
0 - the numbers are identical
-1 - the guessed number is too low
1 - the guessed number is too high

# App
Add an app.js file that is included via <script> tag.

Basic module structure:

Get and store into variables all the DOM elements you will need to either read or write from.
Define variables and initial values for "state". Be aware of whether the values will change over the life of the App (let) or will stay the same (const).
Don't forget to define a variable with the correct number!
Define an event handler functions on appropriate DOM element(s).

Basic Logic Flow:

Convert guess to a number
Compare guessed number to actual number using compareNumbers
Guess too high or low?
Display message
Decrement tries remaining
No tries remaining?
Display lose message
Disable game play
Correct guess?
Display win message
Disable game play