import ingredientsArray from "./ingredientsArray.js";
import { pool } from '../db/pool.js';
import { config } from "dotenv";
config({ path: "../.env" });

export const joinRecipe = async (recipeId, ingredientsArray) => {
  try {
    // Link existing ingredients to the recipe in the 'recipeJunction' table
    for (const ingredientName of ingredientsArray) {
      const selectIngredientQuery = `
        SELECT id FROM ingredients WHERE name = $1;
      `;
      const result = await pool.query(selectIngredientQuery, [ingredientName.trim()]);

      if (result.rows.length > 0) {
        const ingredientId = result.rows[0].id;
        const insertRecipeIngredientQuery = `
          INSERT INTO recipeJunction (recipe_id, ingredient_id, quantity)
          VALUES ($1, $2, $3)
          ON CONFLICT (recipe_id, ingredient_id) DO NOTHING;
        `;
        await pool.query(insertRecipeIngredientQuery, [recipeId, ingredientId, null]); // Assuming 'quantity' is not specified in the array
        console.log(`Linked ingredient "${ingredientName}" to recipe.`);
      } else {
        console.error(`Ingredient "${ingredientName}" not found in the database.`);
      }
    }

    console.log('Ingredients linked to the recipe successfully.');
  } catch (error) {
    console.error('Error linking ingredients to the recipe:', error.message);
  }
};
