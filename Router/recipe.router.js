import express from 'express';  
import { createRecipe, deleteRecipe, getAllRecipes, getRecipeById, updateRecipe } from '../Controller/recipes.controller.js';

const router = express.Router();

router.post('/createRecipe', createRecipe);
router.get('/getAllRecipes', getAllRecipes);
router.get('/getRecipeById/:id', getRecipeById);
router.put('/updateRecipe/:id', updateRecipe);
router.delete('/deleteRecipe/:id', deleteRecipe);

export default router;  