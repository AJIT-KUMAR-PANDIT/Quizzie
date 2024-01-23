const Quiz = require('../models/quiz');

const createQuiz = async (req, res) => {
  try {
    const {
      userId,
      quizTitle,
      quizType,
      timer,
      no_of_impressions,
      createdAt_date,
      questions,
    } = req.body;

    const newQuiz = new Quiz({
      userId,
      quizTitle,
      quizType,
      timer,
      no_of_impressions,
      createdAt_date,
      questions,
    });

    const savedQuiz = await newQuiz.save();

    res.status(201).json(savedQuiz);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createQuiz,
};
