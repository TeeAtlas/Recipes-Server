import { pool } from "../db/pool.js"

async function getIngredients () {
    try {
        const result = await pool.query('SELECT * FROM ingredients');
        const ingredients = result.rows;
        
        console.log("Ingredients Table: ");
        ingredients.forEach( ingredient => {
            console.log(`ID> ${ingredient.id}, Name: ${ingredient.name}`);
        });
    } catch (error) {
        console.error(`Error retrieving ingredients: ${error.message}`);
        console.error(error);
    }
}

getIngredients();