const db = require('../models');

module.exports = {

    createBook: (req, res) => {
        console.log(req.body)
        db
            .Book
            .create(req.body)
            .then(resBook => res.json(resBook))
            .catch(err => console.error(err));
    },

    findAllBooks: (req, res) => {
        db
            .Book
            .find({})
            .then(resBook => res.json(resBook))
            .catch(err => console.error(err));
    },

    findOneBook: (req, res) => {
        db
            .Book
            .findOne({ _id: req.params.id })
            .then(resBook => res.json(resBook))
            .catch(err => console.error(err));
    },

    updateBook: (req, res) => {
        db.Book.update(
            { _id: req.params.id },
            req.body)
            .then(resBook => res.json(resBook))
            .catch(err => console.error(err));
    },

    deleteBook: (req, res) => {
        console.log(req.params.id)
        db
            .Book
            .remove({ _id: req.params.id })
            .then(resBook => res.json({_id: req.params.id, message: "Deletion successfull."}))
            .catch(err => console.error(err));
    }
};