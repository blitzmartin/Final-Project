const postsModel = require("../models/postsModel");

// GET for /user/home (private)
// Load all posts
function showPosts(req, res) {
  postsModel.find({})
    .then(data => {
      res.status(200).json(data);
    })
    .catch((err) => console.log(err))
}

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
    res.status(200).json({
      title: newPost.title,
      content: newPost.content
    });
  } catch (err) {
    console.log(err);
    next(error);
  }
}


// Deletes post
const deletePost = function (req, res) {
  watchlistModel.findOne({ _id: req.params.id })
    .then(data => {
      if (!err) {
        data.pull(req.body.postid);;
        data.save()
        res.status(200).json(user)
      }
    })
    .catch((err) => console.errror(err.message))
}


module.exports = { showPosts, onePost, createPost, deletePost };
