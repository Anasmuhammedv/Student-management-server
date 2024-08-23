import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Load environment variables
dotenv.config();

export const db_connect = () => {
    const dbUri: string = process.env.DB || "";

    mongoose
        .connect(dbUri)
        .then(() => console.log('DB connected'))
        .catch((error) => console.log(error));
};
