const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const itemRoutes = require("./router/itemRoutes");

const app = express();

PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use("/api/item", itemRoutes);

// Default route
app.get("/", (req, res) => {
  res.json("HELLO");
});

// server is running default port 5000
app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
