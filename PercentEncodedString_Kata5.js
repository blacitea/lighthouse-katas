const urlEncode = function(text) {
  // To store the encoded string
  let encoded = "";
  // To split the string to a new array with spacebar as seperator
  let textArray = text.split(" ");
  // To store the new array with empty strings removed
  let noSpaceArray = [];
  for(let i = 0; i < textArray.length; i ++) {
  // Only push to noSpaceArray if string is not empty
    if(textArray[i]) {
      noSpaceArray.push(textArray[i]);
    };
  };
  // Concat %20 to string after each element from noSpaceArray
  for( let i = 0; i < noSpaceArray.length; i ++) {
    if(i !== noSpaceArray.length - 1) {
      encoded += noSpaceArray[i] + '%20';
    } else {
  // For last element from the array, no %20 is concat
      encoded += noSpaceArray[i];
    };
  };
  // Return the encoded string
  return encoded;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));