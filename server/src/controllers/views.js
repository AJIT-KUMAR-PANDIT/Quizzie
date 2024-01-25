const view = require('../models/Views');

// Controller tpageviews
const views = async (req, res) => {
  try {
    const pageViews = new view(req.body);
    const result = await pageViews.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = {
  views
};
