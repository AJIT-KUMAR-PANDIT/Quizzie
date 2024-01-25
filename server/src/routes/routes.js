const signUp = require("../controllers/signUp");
const login = require("../controllers/login");
const { createQuizPoll } = require("../controllers/createQuizPoll");
const { views } = require("../controllers/views");


const router = require("express").Router();

// Routes for user signup, login, and quiz creation
router.post('/signUp', signUp);
router.post('/login', login);
router.post('/createQuizPoll', createQuizPoll);
router.post('/views', views);

module.exports = router;
