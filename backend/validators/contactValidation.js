const { body, validationResult } = require("express-validator");

const contactValidationRules = [
  body("name").trim().isLength({ min: 2 }).withMessage("Name must be at least 2 characters"),
  body("email").trim().isEmail().withMessage("Valid email is required"),
  body("subject").trim().isLength({ min: 3 }).withMessage("Subject must be at least 3 characters"),
  body("message").trim().isLength({ min: 10 }).withMessage("Message must be at least 10 characters"),
];

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array().map((error) => ({
        field: error.path,
        message: error.msg,
      })),
    });
  }

  next();
};

module.exports = { contactValidationRules, validateRequest };
