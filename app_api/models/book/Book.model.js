const mongoose = require("mongoose")
const Schema = mongoose.Schema


const BookSchema = new Schema({
	authors: [String],
	description: String,
	thumbnail: String,
	link: String,
	title: String,
	isSaved: Boolean,
	isDeleted: Boolean,
	isBookmarked: Boolean
})


const Book = mongoose.model("Book", BookSchema)

module.exports = Book