import mongoose from 'mongoose';
import { fedDB } from '../db.utils';
import { Joi } from 'express-validation';

var Schema = mongoose.Schema;

var userSchema = new Schema({
    first_name: {
        type: String,
        trim: true,
        required: true
    },
    last_name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    username: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    access_level: {
        type: Number,
        trim: true,
        required: true,
        default: 3
    },
    role: {
        type: String,
        trim: true,
        required: true,
        default: 'User'
    }
}, {
    timestamps: true
});

export default fedDB.model('user', userSchema);


// Validation
export const userValidationSchema = {
    body: Joi.object({
        first_name: Joi.string().trim().required(),
        last_name: Joi.string().trim().required(),
        email: Joi.string().trim().email().required(),
        username: Joi.string().trim().min(5).required(),
        password: Joi.string().trim().alphanum().min(5).required(),
        access_level: Joi.number().valid(1,2,3).default(3),
        role: Joi.any().valid('Super Admin', 'Moderator', 'User').default('User')
    })
}

export const loginValidationSchema = {
    body: Joi.object({ 
        username: Joi.string().trim().min(5).required(),
        password: Joi.string().trim().alphanum().min(5).required()
    })
}