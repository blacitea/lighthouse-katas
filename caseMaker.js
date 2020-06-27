const camelCase = function(input) {
  // input is a string
  // return string as camelCase (no whitespace, uppercase for every first letter from second word)
  // Step 1, loop through the array
  // Step 2, use String.search(/\s/g) to find index of white space
  // Step 3, use String.replace to remove (n & n+1) with (n).toUpperCase
  let regexp = RegExp('\s[a-z]*', 'g');
  let string = input;
  let matches = string.matchAll(regexp);

  for(let match of matches) {
    console.log(`Found ${match[0]} start=${match.index} end=${match.index +match[0].length}.`);
  };
}

camelCase("this is a string");
