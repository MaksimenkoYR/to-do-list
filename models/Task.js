const {Schema, model} = require('mongoose')

const task = new Schema({
    name: {type: String, require},
    completed: {type: Boolean, default: false},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
})

module.exports = model('Task', task)
