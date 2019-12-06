const books = require('google-books-search');

module.exports = {
    findGooglebooks: (req, res) => {
        const query = req.body.query;
        books.search(query, (err, bookRes) => {
            if (!err) res.status(200).json(bookRes);
            res.status(500).json({
                err
            });
        });
    }
};
