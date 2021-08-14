const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schemaOptions = {
	timestamps: { 
		createdAt: 'created_at', 
		updatedAt: 'updated_at' 
	}
}


const BookSchema = new Schema({
	authors: [String],
	description: String,
	thumbnail: String,
	link: String,
	title: String,
	isSaved: Boolean,
	isDeleted: Boolean,
	isBookmarked: Boolean,
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	}
}, schemaOptions)


const Book = mongoose.model("Book", BookSchema)

module.exports = Book
