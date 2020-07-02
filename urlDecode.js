const urlDecode = function (text) {
  // empty array to store different key-value pairs
  let arrays = [];
  for (let t = 0; t < text.length; t++) {
  // Step 1, check if multiple key-value pairs presence
    if (text.includes('&')) {
      // if yes, push each key-value pair into array by slice based on indexOf '&' found
        let pair = text.slice(0, text.indexOf('&'));
        arrays.push(pair);
        text = text.slice(text.indexOf('&') + 1);
    } else {
      // if not, push the single pair into array
        arrays.push(text);
        text -= text;
      };
  }
  // Step 2, seperate key & value for each pair and store in object
  let object = {};
  for (let a = 0; a < arrays.length; a++) {
    // store key & value into variables, using slice method with indexOf '=' found
    let objKey = arrays[a].slice(0, (arrays[a].indexOf('=')));
    let objValue = arrays[a].slice((arrays[a].indexOf('=') + 1));
    // if %20 found, replace with 'whitespace'
    let regexp = /%20/gi;
    if (objValue.includes('%20')) {
      objValue = objValue.replace(regexp, ' ');
    };
    // add key-value pair to object
    object[objKey] = objValue;
  };
  // Step 3, return result
  return object;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);