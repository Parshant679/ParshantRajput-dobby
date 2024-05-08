import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes";
import imageRoutes from "./routes/imageRoutes";

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

//  Listening to server
app.listen(8080, (req, res) => {
  console.log("Listening at Port : 8080");
});
