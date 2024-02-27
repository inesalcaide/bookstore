const mongoose = require('mongoose')

const BooksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String
    },
    publication_year: {
        type: Number
    },
});

const BooksModel = mongoose.model("books", BooksSchema);
module.exports = BooksModel;