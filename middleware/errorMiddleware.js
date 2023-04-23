const { default: mongoose } = require("mongoose");
const errorResponse = require("../utils/errorresponse");

const handleError = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // mongoose cast error

  if (err.name == "castError") {
    const message = "Resources Not Found";
    error = new errorResponse(message, 404);
  }

  // duplicate key error
  if (err.code == 11000) {
    const message = "Duplicate field value";
    error = new errorResponse(message, 400);
  }

  // mongoose validation error
  if ((err.name = "ValidationError")) {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new errorResponse(message, 400);
    res.status(error.statuscode || 500).json({
      success: false,
      error: error.message || "server error",
    });
  }
};

module.exports = handleError;
