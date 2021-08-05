import mongoose from "mongoose";
import { fedDB } from "../db.utils"; 
import { Joi } from 'express-validation';

const Schema = mongoose.Schema;

const trainingSchema = new Schema({ 
    training_title: {
      type: String, 
      required: true
    },
    trainer_name: {
      type: String, 
      required: true
    },
    training_description: {
      type: String, 
      required: true
    },
    training_status: {
      type: String,
      enum: ["Inprogress", "Upcoming", "Completed"], 
      required: true 
    },
    training_url: {
      type: String,
    },
    training_date: {
      type: String, 
      required: true 
    }
  },
  {
    timestamps: true,
  }
);

export default fedDB.model("training", trainingSchema);


// Validation
export const trainingValidationSchema = {
  body: Joi.object({
    training_title: Joi.string().required(),
    trainer_name: Joi.string().required(),
    training_description: Joi.string().required(),
    training_status: Joi.string().required(), 
    training_url: Joi.string(),
    training_date: Joi.string().required()
  }),
}