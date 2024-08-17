import mongoose from "mongoose"; // Corrected from "mangoose"
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`mongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Connection error ", error);
        process.exit(1);
    }
};

export default connectDB;
