const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String },
    password: { type: String },
    postsid: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        default: []
    }]
})

module.exports = new mongoose.model('User', userSchema);