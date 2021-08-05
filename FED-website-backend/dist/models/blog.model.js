'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.blogValidationSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _db = require('../db.utils');

var _expressValidation = require('express-validation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var blogSchema = new Schema({
    blog_title: {
        type: String,
        required: true
    },
    blog_date: {
        type: String,
        required: true
    },
    blog_author: {
        type: Object
    },
    blog_content: {
        type: String,
        required: true
    },
    blog_views: {
        type: String
    }
}, {
    timestamps: true
});

exports.default = _db.blogDB.model('blog', blogSchema);

// Validation

var blogValidationSchema = exports.blogValidationSchema = {
    body: _expressValidation.Joi.object({
        blog_title: _expressValidation.Joi.string().required(),
        blog_date: _expressValidation.Joi.date().required(),
        blog_author: _expressValidation.Joi.object({
            name: _expressValidation.Joi.string().required(),
            id: _expressValidation.Joi.string().required(),
            email: _expressValidation.Joi.string().required(),
            image: _expressValidation.Joi.string().allow('')
        }),
        blog_content: _expressValidation.Joi.string().required(),
        blog_views: _expressValidation.Joi.string().allow('')
    })
};