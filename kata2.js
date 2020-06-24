const conditionalSum = function(values, condition) {
  // argument values = an array
  // condition = even || odd
  // new array to store num that fit the condition
  let correctNum = [];
  // Step 1, determine what is the condition
  switch(condition) {
    case 'odd':
      for ( i = 0; i < values.length; i ++) {
        if (values[i]% 2 !== 0) {
          correctNum.push(values[i]);
        };
      };
      break;
    case 'even':
      for ( i = 0; i <values.length; i ++) {
        if (values[i] % 2 === 0) {
          correctNum.push(values[i]);
        };
      };
      break;
  };
  // Step 3, total the numbers in array, and return the total
  let sum = function(correctNum) {
    let total = 0;
    for( let i = 0; i < correctNum.length; i ++) {
      total += correctNum[i];
    };
    return total;
  }
}