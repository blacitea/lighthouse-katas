const makeCase = function (input, style) {
  /* Concept map
  input = string, to be iterated base on provided case
  case = camel, pascal, snake, kebab, title, vowel, consonant, upper
  precedence: camel, pascal, snake, kebab, title > vowel, consonant > upper, lower
  */
  
  // Step 1, new variable to store iterating string
  let inWork = '';
  let store = '';
  let vowelList = 'aeiou';
  // Step 2, an object to store all the casing styles
  let styleList = {
    camel: function (string) {
      for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
          inWork += string[i + 1].toUpperCase();
          i += 1;
        } else {
          inWork += string[i];
        };
      };
    },
    pascal: function (string) {
      for (let i = 0; i < string.length; i++) {
        if (i === 0) {
          inWork += string[i].toUpperCase()
        } else if (string[i] === ' ') {
          inWork += string[i + 1].toUpperCase();
          i += 1;
        } else {
          inWork += string[i];
        };
      };
    },
    snake: function (string) {
      inWork = string.replace(/ /g, '_');
    },
    kebab: function (string) {
      inWork = string.replace(/ /g, '-');
    },
    title: function (string) {
      for (i = 0; i < string.length; i++) {
        if (i === 0) {
          inWork += string[i].toUpperCase();
        } else if (string[i] === ' ') {
          inWork = inWork + ' ' + string[i + 1].toUpperCase();
          i += 1;
        } else {
          inWork += string[i];
        };
      };
    },
    vowel: function (string) {
      for (i = 0; i < string.length; i++) {
        if (vowelList.includes(string[i])) {
            inWork += string[i].toUpperCase();
        } else {
            inWork += string[i];
        };
      };
    },
    consonant: function (string) {
      for (i = 0; i < string.length; i++) {
        if (!(vowelList.includes(string[i]))) {
            inWork += string[i].toUpperCase();
        } else {
            inWork += string[i];
        };
      };
    },
    upper: function (string) {
      inWork = string.toUpperCase();
    },
    lower: function (string) {
      inWork = string.toLowerCase();
    },
  }

  // check if more than one style applies
  console.log(typeof style);
  if ((typeof style) === 'string') {
    styleList[style](input);
    return inWork;
  } else {
    for (let a = 0; a < style.length; a++) {
  // if an array passed for style, loop through each style in the array
      switch (style[a]) {
        case 'camel':
          styleList[style[a]](input);
          break;
        case 'pascal':
          styleList[style[a]](input);
          break;
        case 'snake':
          styleList[style[a]](input);
          break;
        case 'kebab': 
          styleList[style[a]](input);
          break;
        case 'title': 
          styleList[style[a]](input);
          break;
        case 'vowel': 
          styleList[style[a]](input);
          break;
        case 'consonant':
          styleList[style[a]](input);
          break;
        case 'upper':
          styleList[style[a]](input);
          break;
        case 'lower':
          styleList[style[a]](input);
          break;
      };
      // Reset inWork and reuse iterated string for 2nd iteration
      store = inWork;
      input = inWork;
      inWork = '';
    };
    return store;
  };
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["lower", "vowel", 'kebab']));