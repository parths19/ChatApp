import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";

// Create Express and HTTPS Server
const app = express();
const server = http.createServer(app);

// MiddleWare Setup
app.use(express.json({limit: "4mb"}))
app.use(cors());

// Routes Setup 
app.use("/api/status", (req, res) => res.send("Server is live"));
app.use("/api/auth", userRouter);

// Database Connection 
await connectDB();

const PORT = process.env.PORT || 4000;

server.listen(PORT, ()=> console.log("Server is running on PORT:" + PORT));
