const express = require("express");
const router = express.Router();
const submissionController = require("../controllers/submissionController");

router
  .route("/")
  .post(submissionController.userSubmit)
  .get(submissionController.getSubmission);

router
  .route("/confirmed")
  .post(submissionController.userConfirm)
  .get(submissionController.getConfirm);

module.exports = router;
