'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.authMiddleware = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ---------------------------------------------------------
// route middleware to authenticate and check token
// --------------------------------------------------------- 

var authMiddleware = exports.authMiddleware = function authMiddleware(req, res, next) {
    // check header or url parameters or post parameters for token

    var token = req.body.token || req.query.token || req.headers['token'];
    // decode token
    if (token) {
        // verifies secret and checks exp
        _jsonwebtoken2.default.verify(token, _config.serverConfig.secret, function (err, decoded) {
            if (err) {
                return res.status(401).json({
                    success: false,
                    error: err,
                    message: 'Failed to authenticate token.'
                });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });
    } else {
        // if there is no token
        // return an error
        res.status(401).send({
            success: false,
            message: 'No token provided.'
        });
    }
};