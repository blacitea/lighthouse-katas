const organizeInstructors = function(instructors) {
  /* Concept mapping
  Input = instructors = an array of objects, each object have properties name & course
  Output = new object = number of property (course name), value of property is an array with the instructors name

  Step 1 - check if instructors[i].course is already a property in the new object.
  Step 2 - if yes, push instructors[i]['name'] to the array under the corresponding property of the new object
  Step 3 - if no, create a new property in the object, with a new array as value and push the name to the array

  */
  
  let courseList = {};
  let instructorList = [];

  for (let i = 0; i < instructors.length; i++) {
    if (!(instructors[i]['course'] in courseList)) {
      courseList[instructors[i]['course']] = [];
      courseList[instructors[i]['course']].push(instructors[i]['name']);
    } else {
      courseList[instructors[i]['course']].push(instructors[i]['name']);
    }
  }
  return courseList;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));