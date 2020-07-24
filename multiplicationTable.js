const multiplicationTable = function(maxValue) {
  // maxValue = num
  // return = a table/ nested array, with maxValue row x maxValue col
  // an empty string to store all numbers
  let list = '';
  // for loop from 1 to maxValue, inner loop * outer loop index to create result
  for (let x = 1; x <= maxValue; x ++) {
    for (let y = 1; y <= maxValue; y ++) {
      list += (x * y);
    }
    // move to new line at the end of every inner loop
    list += '\n';
  }
  return list;
};




multiplicationTable(5);