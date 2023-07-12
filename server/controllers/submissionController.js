let savedSubmission = null;
let confirmedSubmission = null;

const userSubmit = (req, res) => {
  savedSubmission = req.body;
  res.status(201).json({});
};

const getSubmission = (req, res) => {
  res.json(savedSubmission);
};

const userConfirm = (req, res) => {
  confirmedSubmission = req.body;
  savedSubmission = null;
  res.status(201).json({});
};

const getConfirm = (req, res) => {
  res.json(confirmedSubmission);
};

module.exports = {
  userSubmit,
  userConfirm,
  getSubmission,
  getConfirm,
};
