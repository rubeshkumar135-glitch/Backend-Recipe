import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();


export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB);
        console.log("Connected to database");
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;