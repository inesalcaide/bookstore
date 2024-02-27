const mongoose = require('mongoose')

const MONGO_URI = "mongodb+srv://ines96:rT2mZEbF9LfuUEb4@cluster0.g2eaegy.mongodb.net/bookstore?retryWrites=true&w=majority"

async function connectToDatabase() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    throw error; // Rethrow the error
  }
}
  
module.exports = { connectToDatabase };