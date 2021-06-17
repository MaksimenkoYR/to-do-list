const {Schema, model} = require('mongoose')

const taskList = new Schema({
    incomplete: Object,
    complete: Object,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
})

module.exports = model('TaskList', taskList)
