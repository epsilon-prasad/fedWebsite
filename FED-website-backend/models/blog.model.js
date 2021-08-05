import mongoose from 'mongoose';
import { blogDB } from '../db.utils';
import { Joi } from 'express-validation';

var Schema = mongoose.Schema;

var blogSchema = new Schema({
    blog_title: {
        type: String,
        required: true
    },
    blog_date: {
        type: String,
        required: true
    },
    blog_author: {
        type: Object
    },
    blog_content: {
        type: String,
        required: true
    },
    blog_views: {
        type: String
    }
}, {
        timestamps: true
    });

export default blogDB.model('blog', blogSchema);


// Validation
export const blogValidationSchema = {
    body: Joi.object({
        blog_title: Joi.string().required(),
        blog_date: Joi.date().required(),
        blog_author: Joi.object({
            name: Joi.string().required(),
            id: Joi.string().required(),
            email: Joi.string().required(),
            image: Joi.string().allow('')
        }),
        blog_content: Joi.string().required(),
        blog_views: Joi.string().allow('')
    })
}