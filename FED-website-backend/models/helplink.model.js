import mongoose from 'mongoose';
import { blogDB } from '../db.utils';
import { Joi } from 'express-validation';

var Schema = mongoose.Schema;

var helplinkSchema = new Schema({
    helplink_title: {
        type: String,
        required: true
    },
    helplink_description: {
        type: String,
        required: true
    },
    helplink_url: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

export default blogDB.model('helplink', helplinkSchema);


// Validation
export const helplinkValidationSchema = {
    body: Joi.object({
        helplink_title: Joi.string().required(),
        helplink_description: Joi.string().required(),
        helplink_url: Joi.string().required()
    })
}