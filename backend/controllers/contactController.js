const Contact = require("../models/Contact");

const createContactMessage = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    const contactMessage = await Contact.create({ name, email, subject, message });

    res.status(201).json({
      success: true,
      message: "Message submitted successfully",
      data: contactMessage,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createContactMessage };
