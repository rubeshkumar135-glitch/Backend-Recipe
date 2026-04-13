import express from "express";
import dotenv from "dotenv";
import connectDB from "./Database/config.js";
import router from "./Router/recipe.router.js";

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Backend is running ');
});

app.use('/api', router);

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})