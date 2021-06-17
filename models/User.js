const {Schema, model} = require('mongoose')

const User = new Schema({
    username: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    tasks: {type: Schema.Types.ObjectId, ref: 'TaskList'},
})

module.exports = model('User', User)
