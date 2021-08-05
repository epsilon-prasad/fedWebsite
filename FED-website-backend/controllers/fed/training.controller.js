import Training from "../../models/training.model";
import { sendResponse } from '../../generic.utils';
 
const postTraining = (req, res, next) => {
  const training = new Training({
    ...req.body,
  });
  training.save((err, data) => {
    if (err) {
      return next(err);
    }
    return res.status(200).json({
      success: true,
      training_id: data._id,
      message: "Training is successfully added!",
    });
  });
};

const getTraining = (req, res, next) => {
  Training.find({}, (err, training) => {
    if (err) {
      next(err);
    }
    res.status(200).json({ success: true, training });
  });
};


/**
 * @function updateTraining
 * @description  function to update training
 */
const updateTraining = (req, res, next) => {
  Training.findOneAndUpdate({ _id: req.body._id }, req.body, (err, training) => {
      if (err) {
          return next(err);
      }
      sendResponse(res, 200, {
        "message": "Training updated!"
      });
  });
}

/**
* @function deleteTraining
* @description  function to delete training
*/
const deleteTraining = (req, res, next) => {
  Training.deleteOne({ _id: req.params.id }, function (err) {
      if (err) {
          return next(err);
      }
      sendResponse(res, 200, {
        "message": "Training deleted!"
      });
  });
}


export {
  getTraining,
  postTraining,
  updateTraining,
  deleteTraining
};
