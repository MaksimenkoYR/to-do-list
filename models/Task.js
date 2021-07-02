const {Schema, model} = require('mongoose')

const task = new Schema({
    name: {type: String, require},
    completed: {type: Boolean, default: false},
    list: {type: Schema.Types.ObjectId, ref: 'TaskList'},
})

module.exports = model('Task', task)
