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
  console.log(correctNum);
  // Step 3, total the numbers in array, and return the total
  let total = 0;
  for( let i = 0; i < correctNum.length; i ++) {
    total += correctNum[i];
    console.log(total);
  }
  return total;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));