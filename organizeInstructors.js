const organizeInstructors = function (instructors) {
  /* Concept mapping
  Input = instructors = an array of objects, each object have properties name & course
  Output = new object = number of property (course name), value of property is an array with the instructors name

  Step 1 - check if instructors[i].course is already a property in the new object.
  Step 2 - if yes, push instructors[i]['name'] to the array under the corresponding property of the new object
  Step 3 - if no, create a new property in the object, with a new array as value and push the name to the array

  */
  
  let organized = {};

  for (let i = 0; i < instructors.length; i++) {
    let course = instructors[i].course;
    console.log(course);
    if (organized.course === instructors[i].course) {
      organized.course.push(instructors[i]['name']);
      console.log(`property already existed when ${organized.course} is under organzied, and ${instructors[i].course} from instructor`)
    } else {
      organized[instructors[i][course]] = [];
      console.log(organized);
      organized[instructors[i][course]].push(instructors[i]['name']);
    }
  };
  
  return organized;

};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));