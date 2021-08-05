'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createNewTeamMember = exports.getAllTeamMember = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _team = require('../../models/team.model');

var _db = require('../../db.utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
            message: "Created Assocaite Data successfully",
            createdAssociate: {
                associate_name: result.associate_name,
                associate_email: result.associate_email,
                associate_designation: result.associate_designation,
                associate_img: result.associate_img,
                _id: result._id,
                request: {
                    type: 'GET',
                    url: "http://15.188.201.140:4001/fed/team-member" + result._id
                }
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
    Associate.find().select("associate_name associate_email associate_designation _id associate_img").exec().then(function (associates) {
        var response = {
            count: associates.length,
            associate: associates.map(function (associate) {
                return {
                    associate_name: associate.associate_name,
                    associate_email: associate_email,
                    associate_designation: associate.associate_designation,
                    associate_img: associate.associate_img,
                    _id: associate._id,
                    request: {
                        type: "GET",
                        url: "http://15.188.201.140:4001/fed/team-member" + associate._id
                    }
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

exports.getAllTeamMember = getAllTeamMember;
exports.createNewTeamMember = createNewTeamMember;