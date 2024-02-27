require("./db/connection");
const express = require("express");
const { connectToDatabase } = require("./db/connection");
const app = express();
const booksController = require("./controllers/bookController");
const PORT = 3001;


connectToDatabase()
  .then(() => {
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
    process.exit(1); // Exit with failure
  });

// Middleware
app.use(express.json());

// Routes
app.use("/bookstore", booksController);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});