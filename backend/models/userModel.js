const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String },
    password: { type: String },
    favorite: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
        default: [{
            title: "",
            content: "",
            date: "",
            id: ""
        }]
    }]
})

module.exports = new mongoose.model('User', userSchema);