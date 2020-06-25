const whereCanIPark = function (spots, vehicle) {
// spots is an array with nested arrays
// Regular can be in R, Small can be in R & S, Motorcycle can be in R, S & M
// Lower case letter means not available

// array to store possible spots
let canPark = [];
// for loop for 1st layer of array aka ROWS/Y
for ( let y = 0; y < spots.length; y ++) {
// for loop for 2nd layer or array aka COLUMNS/X
  for ( let x = 0; x < spots[y].length; x ++) {
    if ( spots[y][x] === 'R') {
      canPark.push([x, y]);
    } else if ( spots[y][x] === 'S' && vehicle === 'small') {
      canPark.push([x, y]);
    } else if ( spots[y][x] === 'S' && vehicle === 'motorcycle') {
      canPark.push([x, y]);
    } else if ( spots[y][x] === 'M' && vehicle === 'motorcycle') {
      canPark.push([x, y]);
    } else {
    };
  };
};
// Any available spot? If true, return 1st of the array. If false, return false
return (
  canPark.length !== 0? canPark[0] : false
)
}

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))