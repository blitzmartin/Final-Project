const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: String,
    image: String
})


module.exports = new mongoose.model('Post', postSchema, "posts");