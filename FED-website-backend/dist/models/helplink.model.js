'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.helplinkValidationSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _db = require('../db.utils');

var _expressValidation = require('express-validation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var helplinkSchema = new Schema({
    helplink_title: {
        type: String,
        required: true
    },
    helplink_description: {
        type: String,
        required: true
    },
    helplink_url: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

exports.default = _db.blogDB.model('helplink', helplinkSchema);

// Validation

var helplinkValidationSchema = exports.helplinkValidationSchema = {
    body: _expressValidation.Joi.object({
        helplink_title: _expressValidation.Joi.string().required(),
        helplink_description: _expressValidation.Joi.string().required(),
        helplink_url: _expressValidation.Joi.string().required()
    })
};