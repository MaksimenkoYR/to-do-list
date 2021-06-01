const {Router} = require('express')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const router = Router()

router.post('/registration', async (req, res) => {
    try {
        const {username, password, email} = req.body
        const candidate = await User.findOne({email})
        if (candidate) {
            return res.status(400).json({message: 'User with this email already exist'})
        }
        const hashPassword = bcrypt.hashSync(password, 10)
        const user = new User({username, password: hashPassword, email})
        await user.save()

        return res.status(201).json({message: 'User successfully created '})
    } catch (error) {
        console.log(error)
        res.status(400).json({message: 'Registration error'})
    }
})
router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body
        const candidate = await User.findOne({email})
        if (candidate) {
            return res.status(200).json({message: 'login succes'})
        }

        return res.status(400).json({message: 'incorect email or password'})
    } catch (error) {
        console.log(error)
        res.status(400).json({message: 'Registration error'})
    }
})
module.exports = router
