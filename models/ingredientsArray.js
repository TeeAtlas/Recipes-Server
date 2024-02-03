const recipeString = "1 lb ground beef\n1 large onion, finely chopped\n2 cloves garlic, minced\n1 can (14 oz) crushed tomatoes\n1/2 cup red wine\n1 teaspoon dried oregano\nSalt and pepper to taste\n1 lb ziti or penne pasta\n2 tablespoons olive oil\n2 large eggs, beaten\n1/2 cup grated Parmesan cheese\n\nFor the Bechamel Sauce:\n1/2 cup unsalted butter\n1/2 cup all-purpose flour\n4 cups milk\nSalt and nutmeg to taste\n2 large eggs, beaten\n1 cup grated Kefalotyri or Parmesan cheese";

const ingredientsArray = recipeString.split('\n').filter(line => line.trim() !== '');

// Now ingredientsArray contains an array of ingredients
console.log(ingredientsArray);


export default ingredientsArray;
