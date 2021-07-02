const {Router} = require('express')
const Task = require('../models/Task')
const TaskList = require('../models/TaskList')
const router = Router()

router.post('/', async (req, res) => {
    const taskList = await TaskList.findOne({user: req.user.userId})

    res.status(200).json(taskList)
})
router.post('/add', async (req, res) => {
    try {
        const taskList = await TaskList.findOne({user: req.user.userId})

        const task = new Task({name: req.body.task.name, list: taskList._id})
        await task.save()
        res.status(200).json({task, message: 'task seccessfully created'})
    } catch (error) {
        console.log(error)
        res.status(400).send({error})
    }
})
router.post('/update', async (req, res) => {
    const taskList = await TaskList.findOne({user: req.user.userId})
})
module.exports = router
