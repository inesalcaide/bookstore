const express = require("express");
const router = express.Router();
const BooksModel = require("../models/Books");

router.get("/getBooks", async (req, res) => {
  try {
    const books = await BooksModel.find({});
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/addBook", async (req, res) =>  {
  try  {
    const book = req.body;
    const newBook = new BooksModel(book);
    result = await newBook.save();
    res.json(result);
  } catch (err) { 
    res.status(500).json({ error: err.message})
  }
});

module.exports = router;