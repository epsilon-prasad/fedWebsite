'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.postTechnology = exports.getTechnology = undefined;

var _tech = require('../../models/tech.model');

var _tech2 = _interopRequireDefault(_tech);

var _generic = require('../../generic.utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var postTechnology = function postTechnology(req, res, next) {
    var skill = req.query.skill;
    var name = req.body.name;

    var tech = undefined;

    var defer = new Promise(function (resolve, reject) {
        resolve(_tech2.default.findOne());
    });

    defer.then(function (doc) {
        if (doc === null) {
            tech = new _tech2.default();
            tech[skill].push({ name: name });
            tech.save(function (err, data) {
                if (err) {
                    next(err);
                }
                (0, _generic.sendResponse)(res, 200, {
                    message: 'skills added!'
                });
            });
        } else {
            tech = _tech2.default;
            tech.find({}, function (err, doc) {
                if (err) {
                    return next(err);
                }
                var techskill = doc[0];
                techskill[skill].push({ name: name });
                techskill.save(function (err, data) {
                    if (err) {
                        next(err);
                    }
                    (0, _generic.sendResponse)(res, 200, {
                        message: 'skills added!'
                    });
                });
            });
        }
    });
};

var getTechnology = function getTechnology(req, res, next) {
    _tech2.default.find({}, function (err, tech) {
        if (err) {
            return next(err);
        }
        (0, _generic.sendResponse)(res, 200, {
            tech: tech
        });
    });
};

exports.getTechnology = getTechnology;
exports.postTechnology = postTechnology;