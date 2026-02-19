import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
    name : String,
    ingredients : [String],
    steps : [String],
    cookTime : String
})

const Recipes =  mongoose.model("Recipes", recipeSchema);

export default Recipes;