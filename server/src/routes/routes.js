const signUp = require("../controllers/signUp");
const login = require("../controllers/login");
const { createQuiz } = require("../controllers/createQuiz");

const router = require("express").Router();

// Routes for user signup, login, and quiz creation
router.post('/signUp', signUp);
router.post('/login', login);
router.post('/createquiz', createQuiz);

module.exports = router;
