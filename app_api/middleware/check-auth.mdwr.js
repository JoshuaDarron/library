const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decodedToken = jwt.verify(token, process.env.JWT_KEY)
        req.userData = {
            firstName: decodedToken.firstName,
            lastName: decodedToken.lastName,
            email: decodedToken.email,
            userId: decodedToken.userId
        }
        next()
    } catch (err) {
        res.status(401).json({
            message: 'You are not authenticated'
        })
    }
}
