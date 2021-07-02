const {Schema, model} = require('mongoose')

const taskList = new Schema({
    tasks: [{type: Schema.Types.ObjectId, ref: 'Task'}],
    user: {type: Schema.Types.ObjectId, ref: 'User'},
})

module.exports = model('TaskList', taskList)
