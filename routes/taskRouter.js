const {Router} = require('express')
const TaskList = require('../models/TaskList')
const router = Router()

router.post('/', (req, res) => {
    console.log(req.user)
})
router.post('/add', (req, res) => {})
module.exports = router
