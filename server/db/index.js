import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const DB_NAME = "dobby";
    await mongoose.connect(`${process.env.MONGODB_URI}${DB_NAME}`);
    console.log("\n Mongo Db database connected");
  } catch (err) {
    console.log("Error occure while connecting to DB");
    process.exit(1);
  }
};

export default connectDB;
