const camelCase = function(input) {
  // input is a string
  // return string as camelCase (no whitespace, uppercase for every first letter from second word)
  // Step 1, loop through the array
  // Step 2, use String.search(/\s/g) to find index of white space
  // Step 3, use String.replace to remove (n & n+1) with (n).toUpperCase
  let camel = '';
  for( let i = 0; i < input.length; i ++ ) {
    if( input[i] === ' ') {
      camel += input[i + 1].toUpperCase();
      i += 1;
    } else {
      camel += input[i];
    }
  }
  return camel;
}

console.log(camelCase("i am trying to be a camel"));



