import Recipes from "../Models/recipes.schema.js";

// Create and Save new Recipe Details 
export const createRecipe = async (req, res) => {
    try {
        const newRecipe = new Recipes(req.body);
        await newRecipe.save();
        res.status(200).json({message : "Recipe Added Successfully", data: newRecipe});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error creating recipes", error: error.message});
    }
}


export const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipes.find(); 
        res.status(200).json({message: "Recipes fetched successfully", data: recipes});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error fetching recipes", error: error.message});
    }
}

export const getRecipeById = async (req, res) => {
    try {
        const recipeId = req.params.id;
        const recipe = await Recipes.findById(recipeId);
        if (!recipe) {
            return res.status(404).json({message: "Recipe not found"});
        }
        res.status(200).json({message: "Recipe fetched successfully", data: recipe});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error fetching recipe", error: error.message});
    }   
}

export const updateRecipe = async (req, res) => {
    try {
        const recipeId = req.params.id;
        const updatedData = req.body;
        const updatedRecipe = await Recipes.findByIdAndUpdate(recipeId, updatedData, { new: true });
        if (!updatedRecipe) {
            return res.status(404).json({message: "Recipe not found"});
        }
        res.status(200).json({message: "Recipe updated successfully", data: updatedRecipe});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error updating recipe", error: error.message});
    }
}

export const deleteRecipe = async (req, res) => {
    try {
        const recipeId = req.params.id;
        const deletedRecipe = await Recipes.findByIdAndDelete(recipeId);    
        if (!deletedRecipe) {
            return res.status(404).json({message: "Recipe not found"});
        }
        res.status(200).json({message: "Recipe deleted successfully", data: deletedRecipe});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error deleting recipe", error: error.message});
    }
}