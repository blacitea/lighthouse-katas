const sumLargestNumbers = function(data) {
  // input will be an array
  // need to sort/select the two largest number
  // return sum of the two largest number
  
//Loop through the data array from 0 to length -1
  for (let i = 0; i< data.length; i++) {
    
//  To verify if the for loop is working or not
    console.log(i);

//  If the data in front is larger, it swap spot with the data at back
    if (data[i] > data[i + 1]) {
      let temp;
      temp = data[i];
      data[i] = data[i + 1];
      data[i+1] = temp;

//    To verify if the updated array has correct order 
      console.log(data);

//    After initial swap, if i is smaller than i - 1, we need to keep swapping
      if (data[i - 1] > data[i]) {
      let temp;
      temp = data[i - 1];
      data[i - 1] = data[i];
      data[i] = temp;
      
//    After second swap, if i - 1 is smaller than i - 2, we need to keep swapping
        if (data[i - 2] > data[i - 1]) {
          let temp;
          temp = data[i - 2];
          data[i - 2] = data[i - 1];
          data[i - 1] = temp;

          // Loop again ....
          if (data[i - 3] > data[i - 2]) {
            let temp;
            temp = data[i - 3];
            data[i - 3] = data[i - 2];
            data[i - 2] = temp;

                      // Loop again ....
          if (data[i - 4] > data[i - 3]) {
            let temp;
            temp = data[i - 4];
            data[i - 4] = data[i - 3];
            data[i - 3] = temp;
          }
          }
        }
      };

//    To verify if swap happened
      console.log(data);

    };
  };
  let arrLength = data.length
  let sum = data[arrLength - 1] + data[arrLength - 2];
  return sum;
}

console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

