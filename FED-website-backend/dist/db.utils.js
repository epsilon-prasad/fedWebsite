'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dbStatus = exports.blogDB = exports.fedDB = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dbStatus = 'NotConnected';
// create a connection to a database
var db = _mongoose2.default.createConnection(_config.dbConfig.databaseURI, _config.dbConfig.databaseOptions, function (err) {
    if (err) {
        console.log('DB not connected!');
        exports.dbStatus = dbStatus = err.message;
    } else {
        console.log('DB connected!');
        exports.dbStatus = dbStatus = "Connected";
    }
});

var fedDB = db.useDb('fedDB'); // Use db

var blogDB = db.useDb('blogDB'); // Use another database without creating additional connections

exports.fedDB = fedDB;
exports.blogDB = blogDB;
exports.dbStatus = dbStatus;