import mongoose from 'mongoose';
import { fedDB } from '../db.utils';
import { Joi } from 'express-validation';

var Schema = mongoose.Schema;

var projectSchema = new Schema({
    project_category: {
        type: String,
        required: true
    },
    project_name: {
        type: String,
        required: true
    },
    project_start_date: {
        type: String,
        required: true
    },
    project_manager: {
        type: String,
        required: true
    },
    project_desc: {
        type: String,
        required: true
    },
    project_architect: {
        type: String,
        required: true
    }, 
    brands: {
        type: Array
    },
    overall_status: {
        type: String,
        required: true
    },
    tech_stack: {
        type: Object,
        required: true
    },
    git: {
        type: String,
        required: true
    },
    jira: {
        type: String,
        required: true
    },
    command_line: {
        type: Object
    },
    keywords: {
        type: Array,
        required: true,
    },
    creative: {
        type: String,
        required: true
    },
    tech_doc: {
        type: String,
        required: true
    },
    useful_links: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export default fedDB.model('project', projectSchema);


// Validation
export const projectValidationSchema = {
    body: Joi.object({
        project_category: Joi.string().required(),
        project_name: Joi.string().required(),
        project_start_date: Joi.date().required(),
        project_manager: Joi.string().required(), 
        project_desc: Joi.string().required(),
        project_architect: Joi.string().required(),
        brands: Joi.array().items(
            Joi.object({
                name: Joi.string().required(),
                status: Joi.string().required(),
                git: Joi.string().required(),
                creative: Joi.string().required() 
            })
          ),
        overall_status: Joi.string().required(),
        tech_stack: Joi.object({
                frontend: Joi.array().required(),
                backend: Joi.array().required(),
                other: Joi.array().required()
            }),
        git: Joi.string().required(),
        jira: Joi.string().required(),
        command_line: Joi.object({
            dependency: Joi.string().required(),
            build: Joi.string().required(),
            run: Joi.string().required()
        }),
        keywords: Joi.array().required(),
        creative: Joi.string().required(),
        tech_doc: Joi.string().required(),
        useful_links: Joi.string().required()
    }),
}