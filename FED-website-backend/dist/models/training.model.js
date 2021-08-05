"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trainingValidationSchema = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _db = require("../db.utils");

var _expressValidation = require("express-validation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var trainingSchema = new Schema({
  training_title: {
    type: String,
    required: true
  },
  trainer_name: {
    type: String,
    required: true
  },
  training_description: {
    type: String,
    required: true
  },
  training_status: {
    type: String,
    enum: ["Inprogress", "Upcoming", "Completed"],
    required: true
  },
  training_url: {
    type: String
  },
  training_date: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

exports.default = _db.fedDB.model("training", trainingSchema);

// Validation

var trainingValidationSchema = exports.trainingValidationSchema = {
  body: _expressValidation.Joi.object({
    training_title: _expressValidation.Joi.string().required(),
    trainer_name: _expressValidation.Joi.string().required(),
    training_description: _expressValidation.Joi.string().required(),
    training_status: _expressValidation.Joi.string().required(),
    training_url: _expressValidation.Joi.string(),
    training_date: _expressValidation.Joi.string().required()
  })
};