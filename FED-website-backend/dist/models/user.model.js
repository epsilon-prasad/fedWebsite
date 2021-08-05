'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loginValidationSchema = exports.userValidationSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _db = require('../db.utils');

var _expressValidation = require('express-validation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var userSchema = new Schema({
    first_name: {
        type: String,
        trim: true,
        required: true
    },
    last_name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    username: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    access_level: {
        type: Number,
        trim: true,
        required: true,
        default: 3
    },
    role: {
        type: String,
        trim: true,
        required: true,
        default: 'User'
    }
}, {
    timestamps: true
});

exports.default = _db.fedDB.model('user', userSchema);

// Validation

var userValidationSchema = exports.userValidationSchema = {
    body: _expressValidation.Joi.object({
        first_name: _expressValidation.Joi.string().trim().required(),
        last_name: _expressValidation.Joi.string().trim().required(),
        email: _expressValidation.Joi.string().trim().email().required(),
        username: _expressValidation.Joi.string().trim().min(5).required(),
        password: _expressValidation.Joi.string().trim().alphanum().min(5).required(),
        access_level: _expressValidation.Joi.number().valid(1, 2, 3).default(3),
        role: _expressValidation.Joi.any().valid('Super Admin', 'Moderator', 'User').default('User')
    })
};

var loginValidationSchema = exports.loginValidationSchema = {
    body: _expressValidation.Joi.object({
        username: _expressValidation.Joi.string().trim().min(5).required(),
        password: _expressValidation.Joi.string().trim().alphanum().min(5).required()
    })
};