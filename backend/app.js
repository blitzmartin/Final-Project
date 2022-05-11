// Require modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const MongoStore = require('connect-mongo');

//NEW modules
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');

// Connect to MongoDB server on port 27017 and database
dotenv.config();
mongoose.connect(process.env.DB_SERVER)
.then(() => console.log('Connected to DB server...'))
.catch((err) => console.log(err));


// Create server
const app = express();


// ========== CORS SETUP ==========

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  next();
 });
 
 app.use(
  cors({
    credentials: true,
    allowedHeaders: ["Origin, X-Requested-With, Content-Type, Accept"],
  })
 );
 app.set("trust proxy", 1);
 
 // =================================
 


//NEW express session
app.use(flash());
const sessionStore = new MongoStore({
  mongoUrl: process.env.DB_SERVER,
  collection: "sessions",
});

app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
  unset: "destroy",
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
    sameSite: true,
    secure: false   //change to true if on Heroku?
  },
}));

// Set views and public folders and use body parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', express.static('./public'));


//NEW use passport
app.use(passport.initialize());
app.use(passport.session());

// Require routes
const authRouter= require ('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');

// Use routes
app.use('/auth', authRouter);
app.use('/user', userRouter);

// Server running
const port = process.env.PORT || 5000;
const hostname = 'localhost';

app.listen(port, hostname, (err) =>{
    if(err){
        return console.log('Something went wrong: ' + err);
    } else {
        console.log(`Server running on port ${port}...`)
    }
})