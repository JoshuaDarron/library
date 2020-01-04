const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')

const User = require('../../models/user/User.model')


exports.createUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hash,
            })

            user.save()
                .then(resUser => {
                    res.status(201).json({
                        message: 'User created successfully!',
                        user: resUser
                    })
                })
                .catch(err => {
                    res.status(500).json({
                        message: 'Invalid authentication credentials'
                    })
                })
        })
}


exports.getUser = (req, res, next) => {
    let fetchedUser;
    User.findOne({ email: req.body.email })
        .then(resUser => {
            if (!resUser) {
                return res.stats(404).json({
                    message: 'User not found'
                })
            }

            fetchedUser = resUser

            return bcrypt.compare(req.body.password, resUser.password)
        })
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    message: 'Auth failed'
                })
            }

            const token = jwt.sign({
                email: fetchedUser.email,
                userId: fetchedUser._id
            },
                process.env.JWT_KEY,
                {
                    expiresIn: '48h'
                })

            res.status(200).json({
                token,
                userId: fetchedUser._id
            })
        })
        .catch(err => res.status(401).json({
            message: 'Invalid authentication credentials'
        }))
}


exports.getUserInfo = (req, res) => {
    User.findOne({ 
        _id: req.userData.userId 
    })
    .then(resUser => {
        const info = {
            firstName: resUser.firstName,
            lastName: resUser.lastName,
            image: resUser.image,
            ...req.userData
        }

        res.status(200).json({
            message: 'Successfully retrieved user info',
            userInfo: info
        })
    })
    .catch(err => res.status(500).json({
        message: 'Something went wrong',
        error: err
    }))
}


exports.updateUser = (req, res) => {

    const newUser = new User({
        _id: req.userData.userId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    })

    newUser.image.data = fs.readFileSync(req.file.path)
    newUser.image.contentType = req.file.mimetype

    fs.readdir('./images', (err, files) => {
        if (err) throw err

        for (const file of files) {
            fs.unlink(path.join('./images', file), err => {
                if (err) throw err
            })
        }
    })

    User.updateOne(newUser)
    .then(resUser => {
        res.status(200).json({
            message: 'Successfully updated document',
            user: resUser
        })
    })
    .catch(err => {
        res.status(500).json({
            message: 'Something went wrong',
            error: err
        })
    })
}


exports.deleteUser = (req, res) => {
    User
        .remove({ _id: req.params.id })
        .then(resUser => res.json({ _id: req.params.id, message: "Deletion successfull." }))
        .catch(err => res.status(404).json({
            message: 'Couldn\'t find document'
        }))
}
