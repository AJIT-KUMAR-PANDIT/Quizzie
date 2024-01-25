const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ViewSchema = new Schema({
  _id: {
    type: Object,
    require:true,
  },
  quizTitle: {
    type: String,
    required: true,
  },
  impressions: {
    type: Number,
  },
});

const view = mongoose.model('ViewQuizPoll', ViewSchema);

module.exports = view;
