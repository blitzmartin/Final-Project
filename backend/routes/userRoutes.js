const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers')

// /user
router.get('/home', userControllers.showPosts);
/* router.get('/home/:id',  userControllers.); */
router.post('/newpost', userControllers.createPost);


module.exports = router;