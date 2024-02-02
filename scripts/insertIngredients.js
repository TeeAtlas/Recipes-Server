import ingredientsArray from "../models/ingredientsData.js";
import { pool } from '../db/pool.js'

async function insertIngredients(ingredients) {
    for (let ingredientName of ingredients) {
        try {
            // Insert the ingredient into the ingredients table
            const result = await pool.query(
                'INSERT INTO ingredients (name) VALUES ($1) ON CONFLICT (name) DO NOTHING RETURNING id',
                [ingredientName]
            );

            if (result.rows.length > 0) {
                // The ingredient was inserted or already exists, you can handle as needed
                console.log(`Ingredient "${ingredientName}" inserted successfully or already exists.`);
            } else {
                // Handle the case where the ingredient could not be inserted
                console.error(`Failed to insert ingredient "${ingredientName}".`);
            }
        } catch (error) {
            // Handle any errors that occur during the database operation
            console.error(`Error inserting ingredient "${ingredientName}": ${error.message}`);
        }
    }
}

// Call the function with the provided ingredientsArray
insertIngredients(ingredientsArray);