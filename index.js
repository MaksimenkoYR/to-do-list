const express = require('express')
const cors = require('cors')
const taskRouter = require('./routes/taskRouter')
const authRouter = require('./routes/authRouter')
const mongoose = require('mongoose')
const app = express()
const path = require('path')
const authMiddleware = require('./authMiddleware')

const PORT = process.env.PORT || 5000
const URL =
    'mongodb+srv://MaksimenkoYr:MDKsxr$yvSj3q37@todolist.3ffhm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.use(cors())
app.use(express.json())
if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
app.use('/task', authMiddleware, taskRouter)
app.use('/auth', authRouter)


async function start() {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        app.listen(PORT, () => {
            console.log(`server start at port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
