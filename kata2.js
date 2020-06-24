const conditionalSum = function(values, condition) {
  // argument values = an array
  // condition = even || odd
  // new array to store num that fit the condition
  let correctNum = [];
  // Move for-loop in front of switch statement
  for ( i = 0; i < values.length; i ++) {
  // Use switch statement to determine which condition to use
  switch(condition) {
    case 'odd':
        if (values[i]% 2 !== 0) {
          correctNum.push(values[i]);
        };
      break;
    case 'even':
        if (values[i] % 2 === 0) {
          correctNum.push(values[i]);
        };
      break;
  };
  }
  // Total the numbers in array, and return the sum
  let total = 0;
  for( let i = 0; i < correctNum.length; i ++) {
    total += correctNum[i];
  }
  return total;
}
