const books = require('google-books-search');

module.exports = {
    findGooglebooks: (req, res) => {
        const query = req.body.query;
        books.search(query, (err, bookResults) => {
            if (!err) res.send(bookResults);
            else res.error(err);
        });
    }
};