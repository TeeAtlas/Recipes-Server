import express from 'express';
import { getRecipes, getRecipe, linkIgredients } from '../controllers/recipesController.js'

const recipesRouter = express.Router();

recipesRouter.get('/', getRecipes);
recipesRouter.get('/:id', getRecipe);
recipesRouter.get('/:id/linked', linkIgredients);

export default recipesRouter;