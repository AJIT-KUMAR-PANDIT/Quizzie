const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizPollSchema = new Schema({
  _id: {
    type: Object,
    require:true,
  },
  quizTitle: {
    type: String,
    required: true,
  },
  quizType: {
    type: String,
    enum: ["Q & A", "Poll Type"],
    required: true,
  },
  timer: {
    type: String,
    enum: ["Off", "5 Sec", "10 Sec"],
  },
  impressions: {
    type: Number,
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
  questionTitle: {
    type: [String],
    required: true,
  },
  optionType: {
    type: String,
    enum: ["Text", "Image URL", "Text & Image URL"],
    required: true,
  },
  options: {
    type: [String],
  },
  imgUrl: {
    type: [String],
  },
  correctAnswerIndex: {
    type: Number,
  },
  attemptedCorrectly: {
    type: Number,
  },
  attemptedIncorrectly: {
    type: Number,
  },
  generatedUrl: {
    type: String,
  }
});

const quizPoll = mongoose.model('QuizPoll', quizPollSchema);

module.exports = quizPoll;
