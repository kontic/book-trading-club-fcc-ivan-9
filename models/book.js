const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    book_name: String,
    thumbnail: String,
    added_by: String,
    borrowed_by: { type: String, default: '' },   //after request but before approved [borrowed] is [false] regardless borrowed_by
    borrowed: { type: Boolean, default: false }   //after request but before approved [borrowed] is [false] regardless borrowed_by
});

const Book = mongoose.model('book', bookSchema);

module.exports = Book;