const express = require("express");
const { createContactMessage } = require("../controllers/contactController");
const { contactValidationRules, validateRequest } = require("../validators/contactValidation");

const router = express.Router();

router.post("/", contactValidationRules, validateRequest, createContactMessage);

module.exports = router;
