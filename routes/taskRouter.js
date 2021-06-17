const {Router} = require('express')
const TaskList = require('../models/TaskList')
const router = Router()

router.post('/', async (req, res) => {
    const taskList = await TaskList.findOne({user: req.user.userId})

    res.status(200).json(taskList)
})
router.post('/add', (req, res) => {})
module.exports = router
