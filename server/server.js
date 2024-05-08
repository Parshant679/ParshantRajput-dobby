import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes";
import imageRoutes from "./routes/imageRoutes";
import connectDB from "./db/index";
const app = new express();
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
dotenv.config({ path: "../server/.env" });

// middlewares
app.use(express.json);
app.use(cors(corsOptions));
app.use(cookieParser);

// Routes
app.use("/api", userRoutes);
app.use("/api", imageRoutes);

// connect to Database
connectDB();
//  Listening to server
app.listen(process.env.PORT || 8000, () => {
  console.log(`server Started at PORT : ${process.env.PORT}`);
});
