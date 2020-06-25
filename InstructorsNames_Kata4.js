const instructorWithLongestName = function(instructors) {
  // argument: an array of objects
  // each object has two properties: name, course
  // return the object with the longest name property

  // start time 15:45

  // New variable to store the object
  let longestName = {
    name: "",
    course: ""
  };
  // Populate the array with instructors name
  for(let i = 0; i < instructors.length; i ++) {
    if( instructors[i].name.length > longestName.name.length) {
      longestName = instructors[i];
      console.log(longestName);
    };
  };
  return longestName;
};
