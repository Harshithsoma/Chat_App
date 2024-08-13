import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";

import { connectToMongoDB } from "./db/dbauth.js";
import { app, server } from "./socket/socket.js";
// const app = express();
const __dirname = path.resolve();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/message", messageRoute);
app.use("/api/users", userRoute);
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Chat application development is in progress");
});

server.listen(port, () => {
  connectToMongoDB();
  console.log(`server is running on port ${port}`);
});
