const postsModel = require("../models/postsModel");

// GET for /user (private)
// Load all posts
function showPosts(req, res) {
  postsModel.find({})
  .then(data => {
    res.json(data, req.user); 
  })
  .catch((err) => console.error(err.message))
}

// GET for /user/:id (private)
// Load one post
const onePost = function (req, res) {
  postsModel.find({_id: req.params.id})
  .then(data => {
      if(!err) {
        console.log(data);
        res.status(200).json(data)
      }
  })
  .catch((err) => console.error(err.message))
}


// POST for /user/newpost (private)
// Create new post
async function createPost(req, res) {
  try {
      let today = new Date();
      let DD = today.getDate();
      let MM = today.getMonth() + 1;
      let YYYY = today.getFullYear();
      let date = `${DD}/${MM}/${YYYY}`;
      date = date.toString();
      const newPost = await blogModel.create({
          title: req.body.postTitle,
          content: req.body.postContent,
          date: date
      })
      //  console.log(JSON.stringify(post)); log posts array
      res.redirect('/');
  } catch (err) {
      console.log(err);
  }
}


// Deletes post
const deletePost = function (req, res) {
  watchlistModel.findByIdAndRemove({_id: req.params.id})
  .then(data => {
      if(!err) {
        console.log(data);
        res.status(200).json(data)
      }
  })
  .catch((err) => console.errror(err.message))
}

module.exports = { showPosts, onePost, createPost, deletePost};
