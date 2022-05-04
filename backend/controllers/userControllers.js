const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers')

// /user
/* router.get('/home', isLoggedIn, userControllers.);
router.get('/home/:id', isLoggedIn, userControllers.);
router.post('/newpost', isLoggedIn, userControllers.); */



// SHOULD I LEAVE REDIRECT FOR AUTH?????
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/')
}

module.exports = router;