const calculateChange = function(total, cash) {
  /* Concept
  total & cash = whole number, $10 = 1000 1c = 1
  Step 1 - Calculate the total amount of change (cash - total)
  Step 2 - Determine what denominations of change to return
  Step 3 - Return the list of changes as a object ! if denominatio not used, do not mention it
  */

  // Step 1
  let difference = cash - total;

  // Step 2
  // Empty object to store the results
  let listOfChanges = {};
  // An array of objects for each possible denominations
  let denominations = [
    twentyDollar = {name: 'twentyDollar', value: 2000},
    tenDollar = {name: 'tenDollar', value: 1000},
    fiveDollar = {name: 'fiveDollar', value: 500},
    twoDollar = {name: 'twoDollar', value: 200},
    oneDollar = {name: 'oneDollar', value: 100},
    quarter = {name: 'quarter', value: 25},
    dime = {name: 'dime', value: 10},
    nickel = {name: 'nickel', value: 5},
    penny = {name: 'penny', value: 1}
  ];
  // For loop to go through each denominations
  for( i = 0; i < denominations.length; i ++) {
    let denoName = denominations[i].name;
    let count = 0;
  // While loop - reduce amount & increase count
    while (difference >= denominations[i].value) {
      difference -= denominations[i].value;
      count += 1;
    };
  // If denomination used, add property to the result object
    if(count > 0) {
    listOfChanges[denoName] = count;
    }
  }
  // Return result object
  return listOfChanges;
}


console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));