/* Define a function called rollDice */
function rollDice(){
    // create a variable called roll, set it equal to random 1-6
    let roll = Math.floor(Math.random()*6+1);
    // if roll equals 6, display "6! You win!"
  if (roll == 6) alert("6! You win!");
    // otherwise:
  else{
    // use a confirm and say: "You rolled a [roll]"
  confirm("You rolled a " + roll);
    // then call rollDice again.
  rollDice();
    // close the else block
  }
  // close the function block
  }


/* Simple Guess Program */

// create global variable guess, set to 0
var guess = 0;
// create a global variable called answer and store a random integer 1-100
let answer = Math.floor(Math.random()*100+1);
// define function guessGame
function guessGame(){
// display the answer for testing purposes only
alert(answer);
// set guess equal to prompt asking user to "Guess a number, 1-100"
guess = prompt("Guess a number, 1-100");
// if guess equals answer display "Correct!" 
if (guess == answer) alert("Correct!");
// or if guess is greater than answer create a code block
else if (guess > answer){
// display "Too high!" 
alert("Too high!");
// call guessGame
guessGame();
// close the else code block
}
// otherwise open a code block
else{
// display "Too low!" 
alert("Too low!");
// call guessGame
guessGame();
// close the else code block
}
// end the function
}