const recipes = [
    {
        id: 1,
        title: "Classic Spaghetti Carbonara",
        ingredients: ["spaghetti", "olive oil", "pancetta", "eggs", "Parmesan cheese", "garlic", "black pepper"],
        instructions: "Cook spaghetti. Fry pancetta with garlic. Mix eggs and cheese, then combine with pasta.",
        preparationTime: 20,
        keywords: ["Italian", "Pasta", "Quick Meal", "Carbonara"]
    },
    {
        id: 2,
        title: "Penne Alla Vodka",
        ingredients: ["penne pasta", "olive oil", "garlic", "tomato paste", "vodka", "heavy cream", "Parmesan cheese"],
        instructions: "Cook penne. Sauté garlic, add tomato paste and vodka. Mix in cream and cheese, then combine with pasta.",
        preparationTime: 30,
        keywords: ["Italian", "Pasta", "Creamy Sauce", "Vegetarian"]
    },
    {
        id: 3,
        title: "Fettuccine Alfredo",
        ingredients: ["fettuccine", "butter", "heavy cream", "Parmesan cheese", "garlic", "parsley"],
        instructions: "Cook fettuccine. Combine butter, cream, and cheese for sauce. Mix with pasta and garnish with parsley.",
        preparationTime: 25,
        keywords: ["Italian", "Pasta", "Alfredo", "Rich Flavor"]
    },
    {
        id: 4,
        title: "Pesto Pasta with Sun-dried Tomatoes",
        ingredients: ["spaghetti", "basil pesto", "sun-dried tomatoes", "Parmesan cheese", "pine nuts", "olive oil"],
        instructions: "Cook spaghetti. Toss with pesto, sun-dried tomatoes, and pine nuts. Top with Parmesan cheese.",
        preparationTime: 20,
        keywords: ["Italian", "Pasta", "Pesto", "Quick Meal", "Vegetarian"]
    }
];

export const getRecipes = async (req, res) => {
    res.json(recipes);
    console.log(recipes[1]);
}

export const getRecipe = async (req, res) => {
    const {id} = req.params;    
    const recipe = recipes.find((recipe) => recipe.id === Number(id));

    if (!recipe) {
        res.sendStatus(404).jason({message: `Recipe with id ${id} not found`});
    } else {
        res.json(recipe);
    }
    console.log(recipe);

};
