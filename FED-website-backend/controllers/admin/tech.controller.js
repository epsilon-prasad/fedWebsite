import Tech from '../../models/tech.model';  
import { sendResponse } from '../../generic.utils';

 
const postTechnology = (req, res, next) => {
    const {skill} = req.query;
    const {name} = req.body;
    var tech = undefined;
   
    const defer = new Promise((resolve, reject) => {
        resolve(Tech.findOne());
    });

    defer.then((doc) => {  
        if(doc === null) {
            tech = new Tech;
            tech[skill].push({name});
            tech.save((err, data) => {
                if (err) {
                    next(err); 
                }
                sendResponse(res, 200, {
                    message: 'skills added!'
                }); 

            });
        } else {
            tech = Tech;
            tech.find({}, (err, doc) => {
                if(err) { 
                    return next(err);
                } 
                var techskill = doc[0];
                techskill[skill].push({name});
                techskill.save((err, data) => {
                    if (err) {
                        next(err); 
                    }
                    sendResponse(res, 200, {
                        message: 'skills added!'
                    }); 

                });
            })
        }

         
        
    });

    
}

const getTechnology = (req, res, next) => {
    Tech.find({}, function (err, tech) {
        if(err) { 
            return next(err);
        }
        sendResponse(res, 200, {
            tech
        }); 
    }); 
}


export {
    getTechnology,
    postTechnology
}