'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// ---------------------------------------------------------
// Response Handler
// ---------------------------------------------------------

var sendResponse = exports.sendResponse = function sendResponse(res, status, responseBody) {
  var success = status == 200 ? 'true' : 'false';
  var response = Object.assign({}, { success: success }, responseBody);
  return res.status(status).json(response);
};