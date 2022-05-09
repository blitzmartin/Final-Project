const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers')

// /user
router.get('/home', userControllers.showPosts);
router.get('/home/:id',  userControllers.onePost);
router.post('/newpost', userControllers.createPost);
router.post('/deletepost', userControllers.deletePost)


module.exports = router;