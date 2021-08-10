const {Router} = require('express')
const Task = require('../models/Task')
const TaskList = require('../models/TaskList')
const router = Router()

router.post('/', async (req, res) => {
    const taskList = await TaskList.findOne({user: req.user.userId}).populate('tasks')

    res.status(200).json(taskList.tasks)
})
router.post('/add', async (req, res) => {
    try {
        const taskList = await TaskList.findOne({user: req.user.userId})

        const task = new Task({name: req.body.payload.name, list: taskList._id})
        await task.save()
        taskList.tasks.push(task)
        await taskList.save()

        res.status(200).json({task, message: 'task created'})
    } catch (error) {
        console.log(error)
        res.status(400).send({error})
    }
})
router.post('/delete', async (req, res) => {
    try {
        await Task.deleteOne({_id: req.body.payload._id})

        res.status(200).json({message: 'task deleted'})
    } catch (error) {
        console.log(error)
        res.status(400).send({error})
    }
})
router.post('/complete', async (req, res) => {
    try {
        const task = await Task.findOne({_id: req.body.payload._id})
        task.completed = true
        await task.save()

        res.status(200).json({message: 'task completed'})
    } catch (error) {
        console.log(error)
        res.status(400).send({error})
    }
})
router.post('/incomplete', async (req, res) => {
    try {
        const task = await Task.findOne({_id: req.body.payload._id})
        task.completed = false
        await task.save()

        res.status(200).json({message: 'task incompleted'})
    } catch (error) {
        console.log(error)
        res.status(400).send({error})
    }
})
router.post('/update', async (req, res) => {
    const taskList = await TaskList.findOne({user: req.user.userId})
})
module.exports = router
