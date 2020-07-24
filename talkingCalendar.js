const talkingCalendar = function(date) {
  /* Concept
  date = string, format YYYY/MM/DD
  result = Long Month, Date w/ st, nd, rd, th, Year
  Step 1, create three new variable to store Year, Month, Day
  Step 2, Convert Month Num to Month Name
  Step 3, Add st/nd/rd to end of Day based on day
  Step 4, Join and return Year, Month, Day in the desired order i.e. Month Name, Date, Year
  */
  
  // Step 1 - set variable
  let year = date.slice(0, 4);
  let monthNum = date.slice(5, 7);
  // Need parseInt to convert string to number in order to add suffixes on step 3
  let day = parseInt(date.slice(-2));

  // Step 2 - convert monthNum to monthName
  let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let month = monthName[monthNum - 1];

  // Step 3 - add ordinal indicator(suffixes) to day
  if (day === 1 | day === 21 | day === 31) {
    day = day + 'st';
  } else
  if (day === 2 | day === 22) {
    day = day + 'nd';
  } else
  if (day === 3 | day === 23) {
    day = day + 'rd';
  } else {
    day = day + 'th';
  }

  // Step 4 - use template literal to return converted date
  return `${month} ${day}, ${year}`;
};



// Testing code
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));