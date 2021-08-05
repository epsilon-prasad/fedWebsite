'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.projectValidationSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _db = require('../db.utils');

var _expressValidation = require('express-validation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var projectSchema = new Schema({
    project_category: {
        type: String,
        required: true
    },
    project_name: {
        type: String,
        required: true
    },
    project_start_date: {
        type: String,
        required: true
    },
    project_manager: {
        type: String,
        required: true
    },
    project_desc: {
        type: String,
        required: true
    },
    project_architect: {
        type: String,
        required: true
    },
    brands: {
        type: Array
    },
    overall_status: {
        type: String,
        required: true
    },
    tech_stack: {
        type: Object,
        required: true
    },
    git: {
        type: String,
        required: true
    },
    jira: {
        type: String,
        required: true
    },
    command_line: {
        type: Object
    },
    keywords: {
        type: Array,
        required: true
    },
    creative: {
        type: String,
        required: true
    },
    tech_doc: {
        type: String,
        required: true
    },
    useful_links: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

exports.default = _db.fedDB.model('project', projectSchema);

// Validation

var projectValidationSchema = exports.projectValidationSchema = {
    body: _expressValidation.Joi.object({
        project_category: _expressValidation.Joi.string().required(),
        project_name: _expressValidation.Joi.string().required(),
        project_start_date: _expressValidation.Joi.date().required(),
        project_manager: _expressValidation.Joi.string().required(),
        project_desc: _expressValidation.Joi.string().required(),
        project_architect: _expressValidation.Joi.string().required(),
        brands: _expressValidation.Joi.array().items(_expressValidation.Joi.object({
            name: _expressValidation.Joi.string().required(),
            status: _expressValidation.Joi.string().required(),
            git: _expressValidation.Joi.string().required(),
            creative: _expressValidation.Joi.string().required()
        })),
        overall_status: _expressValidation.Joi.string().required(),
        tech_stack: _expressValidation.Joi.object({
            frontend: _expressValidation.Joi.array().required(),
            backend: _expressValidation.Joi.array().required(),
            other: _expressValidation.Joi.array().required()
        }),
        git: _expressValidation.Joi.string().required(),
        jira: _expressValidation.Joi.string().required(),
        command_line: _expressValidation.Joi.object({
            dependency: _expressValidation.Joi.string().required(),
            build: _expressValidation.Joi.string().required(),
            run: _expressValidation.Joi.string().required()
        }),
        keywords: _expressValidation.Joi.array().required(),
        creative: _expressValidation.Joi.string().required(),
        tech_doc: _expressValidation.Joi.string().required(),
        useful_links: _expressValidation.Joi.string().required()
    })
};