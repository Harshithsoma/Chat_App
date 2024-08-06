import mongoose, { Mongoose, mongo } from "mongoose";

export const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("error connecting to mongo db", error.message);
  }
};
