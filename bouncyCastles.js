const PI = 3.14159;

const sphereVolume = function(radius) {
  // sphere volume = 4/3 * PI * R^3
  let volume = 4/3 * PI * Math.pow(radius, 3);
  return volume;
};

const coneVolume = function(radius, height) {
  // right circle cone volume = PI * R^2 / 3
  let volume = PI * Math.pow(radius, 2) * height / 3;
  return volume;
};

const prismVolume = function(height, width, depth) {
  // non-triangle prism volume = B * H = H * W * D
  let volume = height * width * depth;
  return volume;
};

const totalVolume = function(solids) {
  // solids = an array of objects
  // each object = type, measurements
  let total = 0;
  for(let i = 0; i < solids.length; i ++) {
  // switch statement for the type property of object solids[i]
    switch(solids[i].type) {
      case 'sphere':
        total += sphereVolume(solids[i].radius);
        break;
      case 'cone':
        total += coneVolume(solids[i].radius, solids[i].height);
        break;
      case 'prism':
        total += prismVolume(solids[i].height, solids[i].width, solids[i].depth)
        break;
    }
  };
  return total;
}
