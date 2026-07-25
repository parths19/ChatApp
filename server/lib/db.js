import mongoose from "mongoose";

const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/chat-app";

export const connectDB = async() => {
    try {
        mongoose.connection.on('connected', () => console.log('Database Connected'));
        mongoose.connection.on('error', (error) => console.log('MongoDB connection error:', error.message));
        await mongoose.connect(mongoUri, {
            serverSelectionTimeoutMS: 5000,
            connectTimeoutMS: 5000,
        });
    } catch (error) {
        console.log('MongoDB connection failed:', error.message);
    }
}
