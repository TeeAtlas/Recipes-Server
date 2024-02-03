import insertIngredients from "../scripts/insertIngredients.js"
import { pool } from "../db/pool.js";
import ingredientsArray from "../models/ingredientsArray.js";

async function getIngredients () {
    try {
        const result = await pool.query('SELECT * FROM ingredients');
        const ingredients = result.rows;
        
        console.log("Ingredients Table: ");
        ingredients.forEach( ingredient => {
            console.log(`ID: ${ingredient.id}, Name: ${ingredient.name}`);
        });
    } catch (error) {
        console.error(`Error retrieving ingredients: ${error.message}`);
        console.error(error);
    }
}

await insertIngredients(ingredientsArray);

await getIngredients();