import jwt from "jsonwebtoken";
import User from "../models/User.js";

const JWT_SECRET = process.env.JWT_SECRET || "chat-app-dev-secret";

// MiddleWare to protect routes
export const protectRoute = async(req, res, next) => {
    try {
        const token = req.headers.token;
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(decoded.userId).select("-password");

        req.user = user;
        next();
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}