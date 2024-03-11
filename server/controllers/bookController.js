const express = require("express");
const router = express.Router();
const BooksModel = require("../models/Books");

// Get all books
router.get("/getBooks", async (req, res) => {
  try {
    const books = await BooksModel.find({});
    res.status(200).json(books); // HTTP status code 200: OK
  } catch (err) {
    console.error("Error fetching books:", err);
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

// Add a new book
router.post("/addBook", async (req, res) =>  {
  try  {
    const bookData = req.body;

    // Validate input data
    if (!bookData || !bookData.title || !bookData.author) {
      return res.status(400).json({ error: "Book data is incomplete" }); // HTTP status code 400: Bad Request
    }

    const newBook = new BooksModel(bookData);
    const savedBook = await newBook.save();
    res.status(201).json(savedBook); // HTTP status code 201: Created
  } catch (err) {
    console.error("Error adding book:", err);
    res.status(500).json({ error: "Failed to add book" });
  }
});

module.exports = router;
