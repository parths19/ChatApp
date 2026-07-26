import mongoose from "mongoose";

const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/chat-app";

export const connectDB = async() => {
    try {
        mongoose.connection.on('connected', () => console.log('✓ Database Connected'));
        mongoose.connection.on('error', (error) => console.log('✗ MongoDB connection error:', error.message));
        
        const conn = await mongoose.connect(mongoUri, {
            serverSelectionTimeoutMS: 10000,
            connectTimeoutMS: 10000,
            retryWrites: true,
        });
        
        return conn;
    } catch (error) {
        console.log('✗ MongoDB connection failed:', error.message);
        console.log('  Trying with fallback URI...');
        try {
            await mongoose.connect("mongodb://127.0.0.1:27017/chat-app", {
                serverSelectionTimeoutMS: 5000,
                connectTimeoutMS: 5000,
            });
        } catch (fallbackError) {
            console.log('✗ Fallback connection also failed:', fallbackError.message);
            throw error;
        }
    }
}
