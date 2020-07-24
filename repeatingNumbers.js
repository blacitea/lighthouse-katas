const repeatNumbers = function(data) {
  // data = array with 2 numbers, or nested arrays of 2 numbers
  // Step 1 - forEach loop the input data
  let answer = '';
  data.forEach(element => {
    let a = element[0];
    let b = element[1];
    for (let t = 0; t < b; t ++) {
      answer = answer + a;
    }
    answer = answer + ', ';
  });
  // remove ", " from end of string
  return answer.substring(0, answer.length - 2);
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));