import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./lib/db.js"
import authRoutes from "./routes/authroute.js";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/messageroute.js"
import cors from  "cors";
import {app, server} from "./lib/socket.js";

import path from "path";

dotenv.config();


const PORT=process.env.PORT;
const _dirname=path.resolve();


app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser())
app.use(cors({
    origin:[
    "http://localhost:5173",
    "https://chattifiy-lse6.vercel.app"
  ],
    credentials: true,
}));


app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);



server.listen(PORT,()=>{
    console.log("server is running on PORT:" + PORT);
    connectDB()
});
