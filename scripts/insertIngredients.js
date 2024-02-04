import ingredientsArray from "./ingredientsArray.js";
import { pool } from '../db/pool.js';
import { config } from "dotenv";
config({ path: "../.env" });

export const  insertIngredients = async (ingredients) => {
    for (let ingredient of ingredients) {
        try {
            // Insert the ingredient into the ingredients table
            const result = await pool.query(
                'INSERT INTO ingredients (name) VALUES ($1) ON CONFLICT (name) DO NOTHING RETURNING id',
                [ingredient]
            );
                console.error(`Processed ingredient "${ingredient}".`);
        } catch (error) {
            // Handle any errors that occur during the database operation
            console.error(`Error inserting ingredient "${ingredient}": ${error.message}`);
            console.error(error);
        }
    }
}

// Call the function with the provided ingredientsArray
insertIngredients(ingredientsArray);
