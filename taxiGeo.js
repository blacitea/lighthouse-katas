const blocksAway = function (directions) {
  /*Concept
  directions = array with mixed data - string, num, string, num ...
  string + num = direction + distance
  return = position from start
  */
  let direction = 0;
  let location = [0, 0]; // location[0]: x axis, location[1]: y axis
  for (let i = 0; i < directions.length; i += 2) {
    switch (directions[i]) {
      case 'left':
        direction -= 90;
        break;
      case 'right':
        direction += 90;
        break;
    };
    if (direction >= 360) {
      direction -= 360;
    } else if (direction < 0) {
      direction += 360;
    };
    switch (direction) {
      case 0: // move up (N), along the y axis
        location[1] += directions[i + 1];
        break;
      case 180: // move down (S), along the y asix
        location[1] -= directions[i + 1];
        break;
      case 90: // move right (E), along the x asix
        location[0] += directions[i + 1];
        break;
      case 270: // move left (W), along the x asix
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
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));