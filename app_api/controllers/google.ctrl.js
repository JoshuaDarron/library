const books = require('google-books-search')

module.exports = {
    googleBooksSearch: (req, res) => {
        const query = req.query.q

        books.search(query, (err, bookRes) => {
            if (err) res.status(500).json({ err })
            res.status(200).json(bookRes)
        });
    }
};
