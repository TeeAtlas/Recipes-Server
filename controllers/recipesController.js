const recipes = [
    {
        id: 1,
        title: "Classic Spaghetti Carbonara",
        ingredients: ["spaghetti", "olive oil", "pancetta", "eggs", "Parmesan cheese", "garlic", "black pepper"],
        instructions: "Cook spaghetti. Fry pancetta with garlic. Mix eggs and cheese, then combine with pasta.",
        preparationTime: 20,
        cookingTime: 20, // Example addition
        totalRating: 4.5, // Example rating out of 5
        difficulty: "Medium", // Example difficulty level
        keywords: ["Italian", "Pasta", "Quick Meal", "Carbonara"]
    },
    {
        id: 2,
        title: "Penne Alla Vodka",
        ingredients: ["penne pasta", "olive oil", "garlic", "tomato paste", "vodka", "heavy cream", "Parmesan cheese"],
        instructions: "Cook penne. Sauté garlic, add tomato paste and vodka. Mix in cream and cheese, then combine with pasta.",
        preparationTime: 30,
        cookingTime: 25,
        totalRating: 4.7,
        difficulty: "Easy",
        keywords: ["Italian", "Pasta", "Creamy Sauce", "Vegetarian"]
    },
    {
        id: 3,
        title: "Fettuccine Alfredo",
        ingredients: ["fettuccine", "butter", "heavy cream", "Parmesan cheese", "garlic", "parsley"],
        instructions: "Cook fettuccine. Combine butter, cream, and cheese for sauce. Mix with pasta and garnish with parsley.",
        preparationTime: 25,
        cookingTime: 15,
        totalRating: 4.3,
        difficulty: "Easy",
        keywords: ["Italian", "Pasta", "Alfredo", "Rich Flavor"]
    },
    {
        id: 4,
        title: "Pesto Pasta with Sun-dried Tomatoes",
        ingredients: ["spaghetti", "basil pesto", "sun-dried tomatoes", "Parmesan cheese", "pine nuts", "olive oil"],
        instructions: "Cook spaghetti. Toss with pesto, sun-dried tomatoes, and pine nuts. Top with Parmesan cheese.",
        preparationTime: 20,
        cookingTime: 10,
        totalRating: 4.8,
        difficulty: "Medium",
        keywords: ["Italian", "Pasta", "Pesto", "Quick Meal", "Vegetarian"]
    }
];

export const getRecipes = async (req, res) => {
    res.json(recipes);
    console.log(recipes);
}

export const getRecipe = async (req, res) => {
    const {id} = req.params;    
    const recipe = recipes.find((recipe) => recipe.id === Number(id));

    if (!recipe) {
        res.status(404).json({message: `Recipe with id ${id} not found`});
    } else {
        //this sets default status to 200 (success)
        res.json(recipe);
    }
    console.log(recipe);

};
