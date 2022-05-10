const postsModel = require("../models/postsModel");
const userModel = require('../models/userModel')
// GET for /user/home (private)
// Load all posts
/* function showPosts(req, res) {
  postsModel.find({}) 
    .then(data => {
      res.status(200).json(data);
    })
    .catch((err) => console.log(err))
} */

async function showPosts(req, res) {
  try {
    const user = await userModel.findOne({ _id: req.user.id }).populate('postsid');
    const userPosts = user.postsid;
    return res.json(userPosts);
  }
  catch (err) {
    console.log(err)
  }
};


// GET for /user/home/:id (private)
// Load one post
const onePost = function (req, res) {
  postsModel.find({ _id: req.params.id })
    .then(data => {
      res.status(200).json(data);
    })
    .catch((err) => console.log(err))
}


// POST for /user/newpost (private)
// Create new post
async function createPost(req, res, next) {
  try {
    let today = new Date();
    let DD = today.getDate();
    let MM = today.getMonth() + 1;
    let YYYY = today.getFullYear();
    let date = `${DD}/${MM}/${YYYY}`;
    date = date.toString();
    const newPost = await postsModel.create({
      title: req.body.title,
      content: req.body.content,
      date: date
    })
    const user = await userModel.findOne({ username: req.body.username })
    user.postsid.push(newPost._id);
    user.save()
    res.status(200).json({
      title: newPost.title,
      content: newPost.content
    });
  } catch (err) {
    console.log(err);
    next(error);
  }
}

/* const addToUser = function (req, res) {
  userModel.findOne({ username: req.body.username })
    .then(user => {
      user.posts.push(req.body.postid);
      user.save()
      res.status(200).json(user)
    })
    .catch((err) => console.error(err.message))
} */
/* 
const deleteFromPosts = function (req, res) {
  userModel.findOne({ username: req.body.username })
    .then(user => {
        user.posts.pull(req.body.postid);;
        user.save()
        res.status(200).json(user)
    })
    .catch((err) => console.error(err.message))
} */


// Deletes post
const deletePost = function (req, res) {
  postsModel.findByIdAndRemove({ _id: req.body.postid })
    .then(data => {
      console.log(data);
      res.status(200).json(data)
    })
    .catch((err) => console.log(err))
}



module.exports = { showPosts, onePost, createPost, deletePost };
