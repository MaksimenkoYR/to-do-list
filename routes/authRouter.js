const {Router} = require('express')
const User = require('../models/User')
const TaskList = require('../models/TaskList')
const bcrypt = require('bcrypt')
const router = Router()
const jwt = require('jsonwebtoken')
const {secret} = require('./../config.js')

const generateAccessToken = userId => {
    const payload = {
        userId,
    }
    return jwt.sign(payload, secret, {expiresIn: '1y'})
}
const {check, validationResult} = require('express-validator')
const authMiddleware = require('../authMiddleware')

router.post(
    '/registration',
    [
        check('email', 'username cannot be empty').notEmpty(),
        check('username', 'username cannot be empty').notEmpty(),
        check('password', 'username cannot be empty').notEmpty(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: 'registration error', errors})
            }
            const {username, password, email} = req.body
            const candidate = await User.findOne({email})
            if (candidate) {
                return res.status(400).json({message: 'User with this email already exist'})
            }
            const hashPassword = bcrypt.hashSync(password, 10)
            const taskList = new TaskList()
            const user = new User({username, password: hashPassword, email, taskList: taskList._id})
            await user.save()
            taskList.user = user._id
            await taskList.save()

            return res.status(201).json({message: 'User successfully created '})
        } catch (error) {
            console.log(error)
            res.status(400).json({message: 'Registration error'})
        }
    }
)
router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if (user) {
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(400).json({message: 'incorect password'})
            }
            const token = generateAccessToken(user._id)
            return res.status(200).json({token})
        }

        return res.status(400).json({message: 'incorect email or password'})
    } catch (error) {
        console.log(error)
        res.status(400).json({message: 'login error'})
    }
})

router.post('/user', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId)
        if (user) {
            res.status(200).json(user)
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({message: 'authorization error'})
    }
})
module.exports = router
