'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deleteTeamMember = exports.updateTeamMember = exports.getTeamMemberwithID = exports.createNewTeamMember = exports.getAllTeamMember = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _team = require('../../models/team.model');

var _db = require('../../db.utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.set('useFindAndModify', false);

var Associate = _db.fedDB.model('Associate', _team.teamSchema);
var createNewTeamMember = function createNewTeamMember(req, res, next) {
    console.log(req.body);
    console.log(req.file);
    var associate = null;
    if (!req.file) {
        associate = new Associate({
            _id: new _mongoose2.default.Types.ObjectId(),
            associate_name: req.body.associate_name,
            associate_email: req.body.associate_email,
            associate_designation: req.body.associate_designation,
            associate_img: ''
        });
    } else {
        var url = req.protocol + '://' + req.get('host');
        associate = new Associate({
            _id: new _mongoose2.default.Types.ObjectId(),
            associate_name: req.body.associate_name,
            associate_email: req.body.associate_email,
            associate_designation: req.body.associate_designation,
            associate_img: url + '/uploads/' + req.file.filename
        });
    }
    associate.save().then(function (result) {
        console.log(result);
        res.status(201).json({
            message: "Created Associate Data successfully",
            createdAssociate: {
                associate_name: result.associate_name,
                associate_email: result.associate_email,
                associate_designation: result.associate_designation,
                associate_img: result.associate_img,
                _id: result._id
            }
        });
    }).catch(function (err) {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};

var getAllTeamMember = function getAllTeamMember(req, res, next) {
    Associate.find().select("associate_name associate_email associate_designation associate._id associate_img").exec().then(function (associates) {
        var response = {
            count: associates.length,
            associate: associates.map(function (associate) {
                return {
                    associate_name: associate.associate_name,
                    associate_email: associate.associate_email,
                    associate_designation: associate.associate_designation,
                    associate_img: associate.associate_img,
                    _id: associate._id
                };
            })
        };
        res.status(200).json(response);
    }).catch(function (err) {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};

var getTeamMemberwithID = function getTeamMemberwithID(req, res) {
    console.log("hi");
    Associate.findById(req.params._id).then(function (associate) {
        if (!associate) {
            return res.status(404).send({
                message: "Associate not found with id " + req.params._id
            });
        }
        res.send(associate);
    }).catch(function (err) {
        res.status(500).json({
            error: err
        });
    });
};

var updateTeamMember = function updateTeamMember(req, res) {
    if (!req.body) {
        return res.status(400).send({
            message: "Associate content can not be empty"
        });
    }
    // Find note and update it with the request body
    Associate.findByIdAndUpdate(req.params._id, {
        associate_name: req.body.associate_name,
        associate_email: req.body.associate_email,
        associate_designation: req.body.associate_designation,
        associate_img: req.body.associate_img
    }, { new: true }).then(function (associate) {
        if (associate) {
            return res.status(404).send({
                message: "Associate details updated"
            });
        }
        if (!associate) {
            return res.status(404).send({
                message: "Associate not found with id " + req.params._id
            });
        }
        res.send(associate);
    }).catch(function (err) {
        return res.status(500).send({
            message: "Error updating Associate with id " + req.params._id
        });
    });
};

var deleteTeamMember = function deleteTeamMember(req, res) {
    Associate.findByIdAndRemove(req.params._id).then(function (note) {
        if (!note) {
            return res.status(404).send({
                message: "Associate not found with id " + req.params._id
            });
        }
        res.send({ message: "Associate deleted successfully!" });
    }).catch(function (err) {
        return res.status(500).send({
            message: "Could not delete Associate with id " + req.params._id
        });
    });
};

exports.getAllTeamMember = getAllTeamMember;
exports.createNewTeamMember = createNewTeamMember;
exports.getTeamMemberwithID = getTeamMemberwithID;
exports.updateTeamMember = updateTeamMember;
exports.deleteTeamMember = deleteTeamMember;