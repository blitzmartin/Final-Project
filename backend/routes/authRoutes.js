const express = require('express'); 
const router = express.Router();
const authControllers = require('../controllers/authControllers'); 

// /login
router.post('/login', authControllers.findUser);
// /register
router.post('/register', authControllers.createUser);

// /auth/logout
router.post('/logout',  authControllers.logout);


module.exports = router;