const numberOfVowels = function(data) {
  // vowels: a, e, i, o, u
  // if vowels found in string, counter ++
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;
  // check each character from data against each element in the vowels array
  for(let i = 0; i < data.length; i ++) {
    for(let v = 0; v < vowels.length; v ++) {
      if(data[i] === vowels[v]) {
        counter += 1;
      }; 
    };
  };
  return counter;
};