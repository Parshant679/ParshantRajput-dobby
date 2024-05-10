const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const userRoutes = require("./routes/userRoutes");
const imageRoutes = require("./routes/imageRoutes");

const connectDB = require("./db/index");
const app = new express();
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
require("dotenv").config({ path: "../server/.env" });

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
app.listen(8080, () => {
  console.log("server Started at PORT : 8080");
});
