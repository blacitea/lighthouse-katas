const camelCase = function(input) {
// input is a string
// return string as camelCase (no whitespace, uppercase for every first letter from second word)

  // New variable to store the updated string
  let camel = '';
  // Looping the input string
  for (let i = 0; i < input.length; i ++) {
    if (input[i] === ' ') {
      // If found whitespace, replace with uppercase of the next character
      camel += input[i + 1].toUpperCase();
      // Extra i + 1 to by pass the index for next lop
      i += 1;
    } else {
      // When no whitespace, just concatenate
      camel += input[i];
    }
  }
  return camel;
};

console.log(camelCase("i am trying to be a camel"));



