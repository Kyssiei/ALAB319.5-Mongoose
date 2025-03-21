import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { ObjectId } from "mongodb";

dotenv.config();


import router from "./routes/grades.js";

// Wait to connect to the DB
await mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB."))
  .catch((e) => console.error(e))

const PORT = process.env.PORT || 5050;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the API.");
});

app.use('/grades', router)

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});