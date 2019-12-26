const db = require('../../models')


module.exports = {
    createBook: (req, res) => {
        db
            .Book
            .create(req.body)
            .then(resBook => res.status(201).json(resBook))
            .catch(err => console.error(err))
    },


    findAllBooks: (req, res) => {
        const book = db.Book.find({})
        const currentPage = +req.query.page

        if (currentPage) {
            book
                .skip(5 * (currentPage - 1))
                .limit(5)
        }

        book
            .then(resBook => {
                fetchedBooks = resBook
                return db.Book.countDocuments()
            })
            .then(count => res.status(200).json({
                message: 'Books fetched successfully!',
                books: fetchedBooks,
                maxCount: count
            }))
            .catch(err => {
                res.status(500).json({
                    message: 'Fetching books failed'
                })
            })
    },


    findTypesOfBooks: (req, res) => {
        const path = req.route.path
        let bookType = '';

        if (path === '/bookmarked') bookType = 'isBookmarked'
        else if (path === '/archived') bookType = 'isSaved'
        else bookType = 'isDeleted'

        const book = db.Book.find({
            [bookType]: true,
            user: req.body.user
        })
        const currentPage = +req.query.page

        if (currentPage) {
            book
                .skip(5 * (currentPage - 1))
                .limit(5)
        }

        book
            .then(resBook => {
                fetchedBooks = resBook
                return db.Book.countDocuments({
                    [bookType]: true
                })
            })
            .then(count => res.status(200).json({
                message: 'Books fetched successfully!',
                books: fetchedBooks,
                maxCount: count
            }))
            .catch(err => {
                res.status(500).json({
                    message: 'Fetching books failed'
                })
            })
    },


    findOneBook: (req, res) => {
        db
            .Book
            .findOne({ _id: req.params.id })
            .then(resBook => res.json(resBook))
            .catch(err => console.error(err))
    },


    updateBook: (req, res) => {
        db.Book.update(
            { _id: req.params.id },
            req.body)
            .then(resBook => res.json(resBook))
            .catch(err => console.error(err))
    },


    deleteBook: (req, res) => {
        db
            .Book
            .remove({ _id: req.params.id })
            .then(resBook => res.json({_id: req.params.id, message: "Deletion successfull."}))
            .catch(err => console.error(err))
    }
}