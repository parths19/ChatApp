import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "chat-app-dev-secret";

// function to genrate a token for the user 

export const generateToken = (userId) => {
    const token = jwt.sign({userId}, JWT_SECRET);
    return token;
}
