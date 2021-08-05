import mongoose from 'mongoose';
import { teamSchema } from '../../models/team.model';
import { fedDB } from '../../db.utils'

const Associate = fedDB.model('Associate', teamSchema);
const createNewTeamMember = function(req, res, next) {
    console.log(req.body);
    console.log(req.file);
    var associate = null;
    if(!req.file){
        associate = new Associate({
            _id: new mongoose.Types.ObjectId(),
            associate_name: req.body.associate_name,
            associate_email: req.body.associate_email,
            associate_designation: req.body.associate_designation,
            associate_img: ''
        });
    }else{
      const url = req.protocol + '://' + req.get('host')
        associate = new Associate({
            _id: new mongoose.Types.ObjectId(),
            associate_name: req.body.associate_name,
            associate_email: req.body.associate_email,
            associate_designation: req.body.associate_designation,
            associate_img: url + '/uploads/' + req.file.filename
        });
    }
    associate
      .save()
      .then(result => {
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
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
    };

const getAllTeamMember = function(req, res, next) {
    Associate.find()
        .select("associate_name associate_email associate_designation _id associate_img")
        .exec()
        .then(associates => {
        const response = {
            count: associates.length,
            associate: associates.map(associate => {
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
        })
        .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};

export { getAllTeamMember, createNewTeamMember };