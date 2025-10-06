import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import chatbotRoutes from "./routes/chatbot.route.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 4002;

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Database connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });

// Routes
app.use("/bot/v1", chatbotRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
