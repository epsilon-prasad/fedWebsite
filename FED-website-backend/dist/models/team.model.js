'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _db = require('../db.utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var teamSchema = new Schema({
    associate_name: {
        type: String
    },
    associate_email: {
        type: String
    },
    associate_designation: {
        type: String,
        enum: ['Developer 1', 'Developer 2', 'Senior Developer', 'Lead Developer', 'Principal Developer', 'Project Manager']
    },
    associate_img: {
        type: String
    }
});

exports.default = _db.fedDB.model('Associate', teamSchema);