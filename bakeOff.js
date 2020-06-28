const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // bakeryA & bakeryB = array with ingredients(string)
  // recipes = array with objects(name:"" , ingredients:[])
  // Step 1, for loop for the recipes array
  // Step 2, only objects with property ingredients length === 2
  // Step 3, if ingredient 1 found in bakery A && ingredient 2 found in bakery B, return name property
  // Step 4, if ingredient 1 found in bakery B && ingredient 2 found in bakery A, return name property
  for(let i = 0; i < recipes.length; i ++) {
    if(recipes[i].ingredients.length === 2) {
      if(bakeryA.includes(recipes[i].ingredients[0]) && bakeryB.includes(recipes[i].ingredients[1])) {
        return recipes[i].name;
      } else 
      if(bakeryB.includes(recipes[i].ingredients[0]) && bakeryA.includes(recipes[i].ingredients[1])) {
        return recipes[i].name;
      }
    }
  }
};






// Testing code
let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));