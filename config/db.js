const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectDB = async () => {
  try {
    // connection to database
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connected");
  } catch (error) {
    console.log("Unable to connect to DB", error); //if failed to connect to the database
  }
};

module.exports = connectDB;
