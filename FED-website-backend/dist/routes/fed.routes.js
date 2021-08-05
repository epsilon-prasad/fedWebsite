"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _multer = require("../multer.utils");

var _project = require("../controllers/admin/project.controller");

var _training = require("../controllers/fed/training.controller");

var _team = require("../controllers/admin/team.controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fedRoutes = _express2.default.Router();

fedRoutes.get("/fed/project-list", _project.getProject);
fedRoutes.get("/fed/team-member-list", _team.getAllTeamMember);
fedRoutes.post("/fed/team-member", _multer.upload.single("associate_img"), _team.createNewTeamMember);

fedRoutes.get("/fed/training", _training.getTraining);

exports.default = fedRoutes;