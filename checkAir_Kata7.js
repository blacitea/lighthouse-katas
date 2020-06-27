const checkAir = function (samples, threshold) {
  // Samples : an array of strings, clean or dirty
  // Threshold : condition to evaluate for return, if under: Clean, if over: Polluted
  // 23:32
  let dirtyCounter = 0;
  for ( i = 0; i < samples.length; i ++) {
    if ( samples[i] === 'dirty') {
      dirtyCounter += 1;
    };
  };
  // Calculate the pollution level
  let pollutionLevel = dirtyCounter / samples.length;
  // Check if pollution level is over threshold
  if (pollutionLevel > threshold) {
    return 'Polluted';
  } else {
    return 'Clean';
  };
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))