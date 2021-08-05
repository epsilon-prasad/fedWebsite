import mongoose from 'mongoose';
import { fedDB } from '../db.utils'; 

var Schema = mongoose.Schema; 

var techSchema = new Schema({
    fed: [new Schema({ name: 'string' })],
    bed: [new Schema({ name: 'string' })],
    other: [new Schema({ name: 'string' })]
}, {
    timestamps: true
});
 

export default fedDB.model('technology', techSchema);
 

