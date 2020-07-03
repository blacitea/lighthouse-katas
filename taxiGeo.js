const blocksAway = function (directions) {
  /*Concept
  directions = array with mixed data - string, num, string, num ...
  string + num = direction + distance
  return = position from start
  */
  let direction = 0; // start at 0/360 degree
  let location = [0, 0]; // location[0]: x axis, location[1]: y axis
  // i += 2 because directions in string, num pairs
  for (let i = 0; i < directions.length; i += 2) {
    // switch to calculate orientation after turn
    switch (directions[i]) {
      case 'left':
        /*
        ensure taxi stays in grid
        if taxi at x = 0 (west edge) and facing north, no further left turn allowed, just move up
        */
        if (location[0] === 0 && direction === 0) {
          break;
        }
        direction -= 90;
        break;
      case 'right':
        /* 
        ensure taxi stays in grid
        if taxi at y = 0 (south edge) and facing right, no further right turn allowed, just move right
        */
        if (location[1] === 0 && direction === 90) {
          break;
        }
        direction += 90;
        break;
    };
    console.log(direction);
    // ensure direction < 360 for easy orientation
    if (direction >= 360) {
      direction -= 360;
    } else if (direction < 0) {
      direction += 360;
    };
    console.log(direction);
    // switch statment to calculate direction to move based on compase/degree
    switch (direction) {
      case 0: // move up (N), along the y axis
        console.log(direction)
        location[1] += directions[i + 1];
        break;
      case 180: // move down (S), along the y asix
        console.log(direction)
        location[1] -= directions[i + 1];
        break;
      case 90: // move right (E), along the x asix
        console.log(direction)
        location[0] += directions[i + 1];
        break;
      case 270: // move left (W), along the x asix
      console.log(direction)
      location[0] -= directions[i + 1];
        break;
    };
    console.log(location);
  };
  let locationFromStart = {};

  let horizontal; // x asix
  if (location[0] >= 0) {
    horizontal = 'east';
  } else {
    horizontal = 'west'
  };
  locationFromStart[horizontal] = Math.abs(location[0]);

  let vertical; // y asix
  if (location[1] >= 0) {
    vertical = 'north';
  } else {
    vertical = 'south';
  };
  locationFromStart[vertical] = Math.abs(location[1]);

  // return
  return locationFromStart;
}; 

// test code
console.log(blocksAway(["right", 2, "right", 3, "left", 1]));
console.log(blocksAway(["left", 1, "left", 1, "left", 1, "right", 1, "left", 1, "right", 1])); 
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));