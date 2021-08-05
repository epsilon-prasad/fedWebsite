'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _db = require('../db.utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var techSchema = new Schema({
    fed: [new Schema({ name: 'string' })],
    bed: [new Schema({ name: 'string' })],
    other: [new Schema({ name: 'string' })]
}, {
    timestamps: true
});

exports.default = _db.fedDB.model('technology', techSchema);