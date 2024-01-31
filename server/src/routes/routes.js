const signUp = require("../controllers/signUp");
const login = require("../controllers/login");
const { createQuizPoll, getAllQuizPolls, getQuizPollById,  updateQuizPollById, deleteQuizPollById, } = require("../controllers/createQuizPoll");
const { views } = require("../controllers/views");


const router = require("express").Router();

// Routes 
router.post('/signUp', signUp);
router.post('/login', login);
router.post('/createQuizPoll', createQuizPoll);
router.post('/getAllQuizPolls', getAllQuizPolls);
router.post('/getQuizPollById', getQuizPollById);
router.post('/updateQuizPollById', updateQuizPollById);
router.post('/deleteQuizPollById', deleteQuizPollById);
router.post('/views', views);

module.exports = router;


