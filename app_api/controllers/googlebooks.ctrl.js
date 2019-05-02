const books = require('google-books-search');

module.exports = {
    findGooglebooks: (req, res) => {
        const query = req.body.query;
        books.search(query, (err, bookRes) => {
            if (!err) res.send(bookRes);
            else res.error(err);
        });
    }
};