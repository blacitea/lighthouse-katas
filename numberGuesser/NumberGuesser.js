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
  let answer = prompt("Guess a number: ");
  // input type is string, convert to number for comparison
  let checkAnswer = Number(answer);
  // check if input is number
  if (isNaN(checkAnswer) || answer !== null) {
    console.log('Not a number! Try again!')
  } else {
    // check if same guess was made before
    console.log(`answer is ${answer}`);
    console.log(`checkAnswer is ${checkAnswer}`);
    if (pastAttempts.includes(checkAnswer)) {
      console.log('Already Guessed!');
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

