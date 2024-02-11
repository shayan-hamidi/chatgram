import "dotenv/config";
import express from "express";
import http from "http";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./userRoutes";

const app = express();
const server = http.createServer(app);
const { PORT } = process.env || 4000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL!);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("connected to mongodb");
  server.listen(PORT, () => {
    console.log("http://localhost:4000");
  });
});

app.use("/", userRouter);
