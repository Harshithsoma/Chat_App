import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";

import { connectToMongoDB } from "./db/dbauth.js";
const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/message", messageRoute);
app.use("/api/users", userRoute);

const port = process.env.PORT;
app.get("/", (req, res) => {
  res.send("Chat application development is in progress");
});

app.listen(port, () => {
  connectToMongoDB();
  console.log(`server is running on port ${port}`);
});
