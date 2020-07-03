// generate random number
let numRan = Math.floor(Math.random() * 100);
// track how many guesses were made and what are the attempts
let counter = 0;
let pastAttempts = [];
let nonNumAttempts = [];

// when latest guess is not correct, keep prompting the user
while (pastAttempts[pastAttempts.length - 1] != numRan) {
  console.log(pastAttempts);
  // sigint: true let user exit with ctrl+c if desired
  let prompt = require("prompt-sync")({sigint: true});
  let answer = prompt("Make a guess (Between 0 - 100): ");
  // if input not number (match 0-9), error
  if (!(answer.match(/[0-9]+/))) { // My attempt to fix the bug ~~ || Number(answer) === 'NaN') {
    nonNumAttempts.push(answer)
    console.log('Not a number! Try again')
  } else {
    // input type is string, convert to number for comparison
    let checkAnswer = Number(answer);
    // check if same guess was made before
    if (pastAttempts.includes(checkAnswer)) {
      console.log('Already Guesses');
    } else {
      // if guess is valid, record it in pastAttempt and counter +1
      pastAttempts.push(checkAnswer);
      counter++;
      checkAnswer === numRan ?
        counter === 1 ?
          console.log(`You got it! You took ${counter} attempt`) :
          console.log(`You got it! You took ${counter} attempts`) :
        checkAnswer > numRan ?
          console.log(`Too high!`) :
          console.log(`Too low!`);
    };
  }  
}

