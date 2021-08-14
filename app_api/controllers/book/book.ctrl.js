const db = require('../../models')


module.exports = {
    createBook: (req, res) => {

        const book = new db.Book({
            ...req.body,
            user: req.userData.userId
        })

        book
            .save()
            .then(resBook => res.status(201).json(resBook))
            .catch(err => {
                res.status(500).json({
                    message: 'Saving a book failed'
                })
            })
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
            user: req.userData.userId
        })
        const currentPage = +req.query.page

        if (currentPage) {
            book
                .skip(5 * (currentPage - 1))
                .limit(5)
                .sort({
                    updated_at: -1
                })
        }

        book
            .then(resBook => {
                fetchedBooks = resBook
                return db.Book.countDocuments({
                    [bookType]: true,
                    user: req.userData.userId
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
            .catch(err => {
                res.status(500).json({
                    message: 'Finding one book failed'
                })
            })
    },


    updateBook: (req, res) => {
        db.Book.update(
            { _id: req.params.id },
            req.body)
            .then(resBook => res.json(resBook))
            .catch(err => {
                res.status(500).json({
                    message: 'Update book failed'
                })
            })
    },


    deleteBook: (req, res) => {
        db
            .Book
            .remove({ _id: req.params.id })
            .then(resBook => res.json({_id: req.params.id, message: "Deletion successfull."}))
            .catch(err => {
                res.status(500).json({
                    message: 'Something went wrong'
                })
            })
    }
}