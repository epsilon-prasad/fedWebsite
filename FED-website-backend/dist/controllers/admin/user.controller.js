'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = exports.login = undefined;

var _user = require('../../models/user.model');

var _user2 = _interopRequireDefault(_user);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('../../config');

var _generic = require('../../generic.utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var register = function register(req, res, next) {
  var _req$body = req.body,
      first_name = _req$body.first_name,
      last_name = _req$body.last_name,
      email = _req$body.email,
      username = _req$body.username,
      password = _req$body.password,
      access_level = _req$body.access_level,
      role = _req$body.role;


  var user = new _user2.default({
    first_name: first_name,
    last_name: last_name,
    email: email,
    username: username,
    password: password,
    access_level: access_level,
    role: role
  });

  user.save(function (err, data) {
    if (err) {
      return next(err);
    }

    (0, _generic.sendResponse)(res, 200, {
      message: 'User successfully registered!'
    });
  });
};

var login = function login(req, res, next) {
  var _req$body2 = req.body,
      username = _req$body2.username,
      password = _req$body2.password;


  var user = _user2.default.find({
    username: username,
    password: password
  }, function (err, user) {
    if (err) return next(err);

    if (user.length == 0) {
      (0, _generic.sendResponse)(res, 401, {
        message: 'Authentication failed. Invalid username and password combination.'
      });
    }

    if (user.length) {
      var _user$ = user[0],
          first_name = _user$.first_name,
          last_name = _user$.last_name,
          _username = _user$.username,
          access_level = _user$.access_level,
          role = _user$.role,
          _id = _user$._id;


      var token = _jsonwebtoken2.default.sign({
        username: _username,
        user_id: _id,
        access_level: access_level
      }, _config.serverConfig.secret, {
        expiresIn: 86400 // expires in 24 hours
      });

      (0, _generic.sendResponse)(res, 200, {
        first_name: first_name,
        last_name: last_name,
        username: _username,
        access_level: access_level,
        role: role,
        token: token
      });
    }
  });
};

exports.login = login;
exports.register = register;