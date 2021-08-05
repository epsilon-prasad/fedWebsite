import Users from '../../models/user.model';
import jwt from 'jsonwebtoken';
import { serverConfig } from '../../config';
import { sendResponse } from '../../generic.utils';

const register = (req, res, next) => {
  const {
    first_name,
    last_name,
    email,
    username,
    password,
    access_level,
    role
  } = req.body;


  const user = new Users({
    first_name,
    last_name,
    email,
    username,
    password,
    access_level,
    role
  });

  user.save((err, data) => {
    if (err) {
      return next(err);
    }
 
    sendResponse(res, 200, {
      message: 'User successfully registered!'
    });

  });

};

const login = (req, res, next) => {
  const {
    username,
    password
  } = req.body;

  let user = Users.find({
    username,
    password
  }, (err, user) => {
    if (err) return next(err);

    if (user.length == 0) {
      sendResponse(res, 401, {
        message: 'Authentication failed. Invalid username and password combination.'
      }); 
    }

    if (user.length) {
      let {first_name, last_name, username, access_level, role, _id} = user[0];

      let token = jwt.sign({
        username,
        user_id: _id,
        access_level
      }, serverConfig.secret, {
        expiresIn: 86400 // expires in 24 hours
      });

      sendResponse(res, 200, {
        first_name,
        last_name,
        username, 
        access_level,
        role,
        token
      });   
    }

  });

};



export { login, register };