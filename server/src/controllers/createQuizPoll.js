const QuizPoll = require('../models/quizPoll');

// create a new quiz or poll
const createQuizPoll = async (req, res) => {
  try {
    const quizPoll = new QuizPoll(req.body);
    const result = await quizPoll.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//  get all quizzes or polls
const getAllQuizPolls = async (req, res) => {
  try {
    const quizzesPolls = await QuizPoll.find();
    res.status(200).json(quizzesPolls);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// get specific quiz or poll by ID
const getQuizPollById = async (req, res) => {
  try {
    const quizPoll = await QuizPoll.findById(req.params.id);
    if (!quizPoll) {
      return res.status(404).json({ error: 'QuizPoll not found' });
    }
    res.status(200).json(quizPoll);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// update a quiz or poll by ID
const updateQuizPollById = async (req, res) => {
  try {
    const quizPoll = await QuizPoll.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!quizPoll) {
      return res.status(404).json({ error: 'QuizPoll not found' });
    }
    res.status(200).json(quizPoll);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//  delete a quiz or poll by ID
const deleteQuizPollById = async (req, res) => {
  try {
    const quizPoll = await QuizPoll.findByIdAndRemove(req.params.id);
    if (!quizPoll) {
      return res.status(404).json({ error: 'QuizPoll not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createQuizPoll,
  getAllQuizPolls,
  getQuizPollById,
  updateQuizPollById,
  deleteQuizPollById,
};
