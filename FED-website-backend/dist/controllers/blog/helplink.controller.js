'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deleteHelplink = exports.updateHelplink = exports.postHelplink = exports.getHelplink = undefined;

var _helplink = require('../../models/helplink.model');

var _helplink2 = _interopRequireDefault(_helplink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function getHelplink
 * @description  function to get helplinks
 */
var getHelplink = function getHelplink(req, res, next) {
    var helpLinkLimit = parseInt(req.params._limit);
    _helplink2.default.find().sort({ createdAt: -1 }).limit(helpLinkLimit).exec(function (err, helplinks) {
        if (err) {
            return next(err);
        }
        res.status(200).json({
            success: true,
            helplinks: helplinks
        });
    });
};

/**
 * @function postHelplink
 * @description  function to post helplinks
 */
var postHelplink = function postHelplink(req, res, next) {
    var _req$body = req.body,
        helplink_title = _req$body.helplink_title,
        helplink_description = _req$body.helplink_description,
        helplink_url = _req$body.helplink_url;


    var helplink = new _helplink2.default({
        helplink_title: helplink_title,
        helplink_description: helplink_description,
        helplink_url: helplink_url
    });

    helplink.save(function (err, data) {
        if (err) {
            next(err);
        }
        res.status(200).json({
            success: true,
            helplink_id: data._id,
            message: 'Helplink added successfully!'
        });
    });
};

/**
 * @function updateHelplink
 * @description  function to update helplinks
 */
var updateHelplink = function updateHelplink(req, res, next) {
    _helplink2.default.findOneAndUpdate({ _id: req.params.id }, req.body, function (err) {
        if (err) {
            return next(err);
        }
        res.status(200).json({
            success: true,
            message: 'Helplink updated successfully!'
        });
    });
};

/**
 * @function deleteHelplink
 * @description  function to delete helplinks
 */
var deleteHelplink = function deleteHelplink(req, res, next) {
    _helplink2.default.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            return next(err);
        }
        res.status(200).json({
            success: true,
            message: 'Helplink deleted successfully!'
        });
    });
};

exports.getHelplink = getHelplink;
exports.postHelplink = postHelplink;
exports.updateHelplink = updateHelplink;
exports.deleteHelplink = deleteHelplink;