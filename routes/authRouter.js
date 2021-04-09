const {Router} = require('express')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const router = Router()

router.post('/registration', async (req, res) => {
    try {
        console.log(req.body)
        const {username, password} = req.body
        const candidate = await User.findOne({username})
        if (candidate) {
            return res.status(400).json({message: 'User with this name already exist'})
        }
        const hashPassword = bcrypt.hashSync(password, 7)
        const user = new User({username, password: hashPassword})
        return res.status(201).json({message: 'User successfully created '})
    } catch (error) {
        console.log(error)
        res.status(400).json({message: 'Registration error'})
    }
})
router.post('/login', (req, res) => {})
module.exports = router
