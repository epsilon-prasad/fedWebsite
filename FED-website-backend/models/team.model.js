import mongoose from 'mongoose';
import { fedDB } from '../db.utils';

var Schema = mongoose.Schema;

const teamSchema = new Schema({
    associate_name: {
        type: String
    },
    associate_email: {
        type: String
    },
    associate_designation: {
        type: String,
        enum: ['Developer 1', 'Developer 2', 'Senior Developer', 'Lead Developer', 'Principal Developer', 'Project Manager', 'Principal Architect']
    },
    associate_img: {
        type: String
    }
});

export default fedDB.model('Associate', teamSchema);

