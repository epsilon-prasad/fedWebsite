import jwt from 'jsonwebtoken';
import { serverConfig } from '../config';

// ---------------------------------------------------------
// route middleware to authenticate and check token
// --------------------------------------------------------- 

export const authMiddleware = function (req, res, next) {
    // check header or url parameters or post parameters for token

    var token = req.body.token || req.query.token || req.headers['token'];
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, serverConfig.secret, function (err, decoded) {
            if (err) { 
                return res.status(401).json({
                    success: false,
                    error: err,
                    message: 'Failed to authenticate token.'
                });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });
    } else {
        // if there is no token
        // return an error
        res.status(401).send({
            success: false,
            message: 'No token provided.'
        });
    }
};
 