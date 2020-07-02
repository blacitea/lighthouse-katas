const squareCode = function (message) {
  /* Concept map
  message = string, 
  By squareRoot the string.length, round up the ans to calculate max lenght of each row, 
  Then the char of each column in every row encode into 1 word (i+8)
  */
  
  // Replace whitespace with regexp / /g
  message = message.replace(/ /g, '');

  // Determine the number of rows by round up the sqaure root of string length 
  let row = Math.ceil(Math.sqrt(message.length));

  // Array the characters into sqaure based on row
  /* Removed this section as '\n' added extra length to message and causing error
  let messageInTable = '';
  for (let m = 0; m < message.length; m++) {
    if (m === row - 1 | (m - row + 1) % row === 0) {
      messageInTable = messageInTable + message[m] + '\n';
    } else {
      messageInTable += message[m];
    };
  };
  */
  
  // Join the char in each column into a word
  let codedMessage = '';
  let word = '';
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < message.length; c++) {
      if (c === r | c % row === r) {
        word += message[c];
      };
    };
    codedMessage = codedMessage + word + ' ';
    word = '';
  };
  return codedMessage;
};
console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));