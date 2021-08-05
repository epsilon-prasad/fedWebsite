import mongoose from 'mongoose';
import { dbConfig } from './config';

let dbStatus = 'NotConnected';
// create a connection to a database
const db = mongoose.createConnection(dbConfig.databaseURI, dbConfig.databaseOptions, (err) => {
    if(err) {
        console.log('DB not connected!')
        dbStatus = err.message
    } else {
        console.log('DB connected!')
        dbStatus="Connected"
    } 
});

const fedDB = db.useDb('fedDB'); // Use db

const blogDB = db.useDb('blogDB'); // Use another database without creating additional connections

export { fedDB, blogDB, dbStatus }