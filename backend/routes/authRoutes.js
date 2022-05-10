const express = require('express'); 
const router = express.Router();
const authControllers = require('../controllers/authControllers'); 

// /auth
router.post('/login', authControllers.findUser);
router.post('/register', authControllers.createUser);
router.post('/logout',  authControllers.logout);


module.exports = router;