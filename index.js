const express = require('express')
const taskRouter = require('./routes/taskRouter')
const authRouter = require('./routes/authRouter')
const mongoose = require('mongoose')
const app = express()

const PORT = process.env.PORT || 5000
const URL =
    'mongodb+srv://MaksimenkoYr:MDKsxr$yvSj3q37@todolist.3ffhm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
app.use(express.json())
app.use('/task', taskRouter)
app.use('/auth', authRouter)

async function start() {
    try {
        await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
        app.listen(PORT, () => {
            console.log(`server start at port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
