import mongoose from 'mongoose';
import { teamSchema } from '../../models/team.model';
import { fedDB } from '../../db.utils'

mongoose.set('useFindAndModify', false);

const Associate = fedDB.model('Associate', teamSchema);
const createNewTeamMember = function(req, res, next) {
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
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
    };

const getAllTeamMember = function(req, res, next) {
    Associate.find()
        .select("associate_name associate_email associate_designation associate._id associate_img")
        .exec()
        .then(associates => {
        const response = {
            count: associates.length,
            associate: associates.map(associate => {
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
        })
        .catch(err => {
        res.status(500).json({
            error: err
        });
    });
};

const getTeamMemberwithID = function(req, res) {
  Associate.findById(req.params._id)
  .then(associate => {
    if(!associate) {
      return res.status(404).send({
        message: "Associate not found with id " + req.params._id
      }); 
    }
    res.send(associate);
  }).catch(err => {
    res.status(500).json({
      error: err
    });
  });
};

const updateTeamMember = function(req, res) {
  if(!req.body) {
    return res.status(400).send({
        message: "Associate content can not be empty"
    });
  }
  const url = req.protocol + '://' + req.get('host')
  // Find note and update it with the request body
  var associate = '';
  if(req.file){
    associate = Associate.findByIdAndUpdate(req.params._id, {
      associate_name: req.body.associate_name,
      associate_email: req.body.associate_email,
      associate_designation: req.body.associate_designation,
      associate_img: url + '/uploads/' + req.file.filename
    }, {new: true});
  }
  if(!req.file){
    associate = Associate.findByIdAndUpdate(req.params._id, {
      associate_name: req.body.associate_name,
      associate_email: req.body.associate_email,
      associate_designation: req.body.associate_designation
    }, {new: true});
  }
  associate
  .then(associate => {
      if(associate) {
          return res.status(200).send({
              message: "Associate details updated"
          });
      }
      if(!associate) {
          return res.status(404).send({
              message: "Associate not found with id " + req.params._id
          });
      }
      res.send(associate);
  }).catch(err => {
      return res.status(500).send({
          message: "Error updating Associate with id " + req.params._id
      });
  });
}

const deleteTeamMember = function(req, res) {
  Associate.findByIdAndRemove(req.params._id)
  .then(note => {
      if(!note) {
          return res.status(404).send({
              message: "Associate not found with id " + req.params._id
          });
      }
      res.send({message: "Associate deleted successfully!"});
  }).catch(err => {
    return res.status(500).send({
        message: "Could not delete Associate with id " + req.params._id
    });
  });
}


export { getAllTeamMember, createNewTeamMember, getTeamMemberwithID, updateTeamMember, deleteTeamMember };