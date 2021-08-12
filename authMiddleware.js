const jwt = require('jsonwebtoken')
const {secret} = require('./config')

module.exports = function (req, res, next) {
    try {
        const token = req.headers.authorization
        if (!token) {
            res.write(403).json({message: 'user not authorized'})
        }

        const decodedData = jwt.verify(token, secret)
        req.user = decodedData
        next()
    } catch (error) {
        console.log(error)
    }
}
