"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTraining = exports.updateTraining = exports.postTraining = exports.getTraining = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _training = require("../../models/training.model");

var _training2 = _interopRequireDefault(_training);

var _generic = require("../../generic.utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var postTraining = function postTraining(req, res, next) {
  var training = new _training2.default(_extends({}, req.body));
  training.save(function (err, data) {
    if (err) {
      return next(err);
    }
    return res.status(200).json({
      success: true,
      training_id: data._id,
      message: "Training is successfully added!"
    });
  });
};

var getTraining = function getTraining(req, res, next) {
  _training2.default.find({}, function (err, training) {
    if (err) {
      next(err);
    }
    res.status(200).json({ success: true, training: training });
  });
};

/**
 * @function updateTraining
 * @description  function to update training
 */
var updateTraining = function updateTraining(req, res, next) {
  _training2.default.findOneAndUpdate({ _id: req.body._id }, req.body, function (err, training) {
    if (err) {
      return next(err);
    }
    (0, _generic.sendResponse)(res, 200, {
      "message": "Training updated!"
    });
  });
};

/**
* @function deleteTraining
* @description  function to delete training
*/
var deleteTraining = function deleteTraining(req, res, next) {
  _training2.default.deleteOne({ _id: req.params.id }, function (err) {
    if (err) {
      return next(err);
    }
    (0, _generic.sendResponse)(res, 200, {
      "message": "Training deleted!"
    });
  });
};

exports.getTraining = getTraining;
exports.postTraining = postTraining;
exports.updateTraining = updateTraining;
exports.deleteTraining = deleteTraining;