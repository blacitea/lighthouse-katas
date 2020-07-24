const sumLargestNumbers = function(data) {
  // input will be an array
  // need to sort/select the two largest number
  // return sum of the two largest number
  
  //Loop through the data array from 0 to length -1
  for (let i = 0; i < data.length; i++) {
    
    //  To verify if the for loop is working or not
    //  console.log(`i = ${i}`);

    //  If the data in front is larger, it swap spot with the data at back
    if (data[i] > data[i + 1]) {
      let temp;
      temp = data[i];
      data[i] = data[i + 1];
      data[i + 1] = temp;
    }
    let b = i;
    let a = b - 1;
    //  After initial swap, keep compair with value at index i - 1 until smallest number at front
    for (let c = i; c >= 0; c --) {
      console.log(`b = ${b}`);
      console.log(`a = ${a}`);
      if (data[a] > data[b]) {
        let temp;
        temp = data[a];
        data[a] = data[b];
        data[b] = temp;
        b --;
        a --;
      }
    }
  }
  //  Calculate the sum of the largest two number i.e. last two of the array
  let arrLength = data.length;
  let sum = data[arrLength - 1] + data[arrLength - 2];
  //  Return the result
  return sum;
};