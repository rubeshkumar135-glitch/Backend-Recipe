🍲 Recipes App (CRUD API)
📌 Project Description

The Recipes App is a RESTful API built using Node.js, Express.js, and MongoDB (Mongoose) that allows users to perform complete CRUD (Create, Read, Update, Delete) operations on recipes.

The application follows the MVC (Model-View-Controller) architecture and includes API testing and documentation using Postman.

🚀 Features
Create a new recipe
Get all recipes
Get a recipe by ID
Update a recipe
Delete a recipe

Proper error handling & validation
Clean and scalable MVC structure


🛠️ Tech Stack
Node.js
Express.js
MongoDB (Mongoose)
Postman (API Testing & Documentation)


📁 Project Structure (MVC)
recipes-app/
│
├── models/
│   └── recipe.model.js
│
├── controllers/
│   └── recipe.controller.js
│
├── routes/
│   └── recipe.routes.js
│
├── config/
│   └── db.js
│
├── .env
├── index.js
└── package.json


⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/recipes-app.git
cd recipes-app

2. Install dependencies
npm install

3. Setup environment variables (.env)
PORT=4000
    
4. Run the server
npm start

Server will run on:

http://localhost:4000


📌 API Endpoints
🔹 1. Create Recipe

POST /api/createRecipe

Request Body:
{
  "name": "Chicken Biryani",
  "ingredients": ["Rice", "Chicken", "Spices"],
  "steps": ["Cook rice", "Prepare masala", "Mix together"],
  "cookTime": "60 minutes"
}
Response:
{
  "message": "Recipe created successfully",
  "data": { ... }
}

🔹 2. Get All Recipes

GET /api/getAllRecipes

Response:
{
  "data": [ ...recipes ]
}
🔹 3. Get Recipe By ID

GET /api/getRecipeById/:id

Response:
{
  "data": { ...recipe }
}


🔹 4. Update Recipe

PUT /api/updateRecipe/:id

Request Body:
{
  "name": "Updated Recipe Name"
}
Response:
{
  "message": "Recipe updated successfully"
}


🔹 5. Delete Recipe

DELETE /api/deleteRecipe/:id

Response:
{
  "message": "Recipe deleted successfully"
}
❗ Error Handling
400 → Bad Request (Validation errors)
404 → Recipe not found
500 → Server error
🧪 Postman Documentation
Import all API endpoints into Postman
Include:
Sample requests
Sample responses
Status codes

👉 You can export your Postman collection and include it in your repo.

🌐 Deployment

Deploy the project using: Render

Steps:

Push code to GitHub
Connect GitHub repo to Render
Add environment variables
Deploy
📤 Submission Checklist
✅ GitHub Repository URL
✅ Render Deployment URL
✅ Postman Collection (exported)
👨‍💻 Author

Rubesh Kumar