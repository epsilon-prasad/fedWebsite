'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _config = require('../config');

var _expressValidation = require('express-validation');

var _multer = require('../multer.utils');

var _project = require('../models/project.model');

var _blog = require('../models/blog.model');

var _helplink = require('../models/helplink.model');

var _user = require('../models/user.model');

var _auth = require('../middlewares/auth.middleware');

var _user2 = require('../controllers/admin/user.controller');

var _project2 = require('../controllers/admin/project.controller');

var _blog2 = require('../controllers/blog/blog.controller');

var _helplink2 = require('../controllers/blog/helplink.controller');

var _team = require('../controllers/admin/team.controller');

var _training = require('../controllers/fed/training.controller');

var _training2 = require('../models/training.model');

var _tech = require('../controllers/admin/tech.controller');

var validateOptions = _config.joiConfig.validateOptions,
    joiOptions = _config.joiConfig.joiOptions;

//Controllers


//Validation Schema

var adminRoutes = (0, _express.Router)();

//Open API's
adminRoutes.post('/register', (0, _expressValidation.validate)(_user.userValidationSchema, validateOptions, joiOptions), _user2.register);
adminRoutes.post('/login', (0, _expressValidation.validate)(_user.loginValidationSchema, validateOptions, joiOptions), _user2.login);

/* Projects */
adminRoutes.get('/admin/projects', _auth.authMiddleware, _project2.getProject);
adminRoutes.post('/admin/projects', _auth.authMiddleware, (0, _expressValidation.validate)(_project.projectValidationSchema, validateOptions, joiOptions), _project2.postProject);
adminRoutes.put('/admin/projects', _auth.authMiddleware, _project2.updateProject);
adminRoutes.delete('/admin/projects/:id', _auth.authMiddleware, _project2.deleteProject);

/*Blog */
adminRoutes.get('/admin/get-blog/:_id', _auth.authMiddleware, _blog2.getBlog);
adminRoutes.post('/admin/post-blog', _auth.authMiddleware, (0, _expressValidation.validate)(_blog.blogValidationSchema, validateOptions, joiOptions), _blog2.postBlog);
adminRoutes.put('/admin/edit-blog/:id', _auth.authMiddleware, (0, _expressValidation.validate)(_blog.blogValidationSchema, validateOptions, joiOptions), _blog2.updateBlog);
adminRoutes.delete('/admin/delete-blog/:id', _auth.authMiddleware, _blog2.deleteBlog);

/*Helplink */
adminRoutes.get('/admin/get-helplink/:_limit', _auth.authMiddleware, _helplink2.getHelplink);
adminRoutes.post('/admin/post-helplink', _auth.authMiddleware, (0, _expressValidation.validate)(_helplink.helplinkValidationSchema, validateOptions, joiOptions), _helplink2.postHelplink);
adminRoutes.put('/admin/edit-helplink/:id', _auth.authMiddleware, (0, _expressValidation.validate)(_helplink.helplinkValidationSchema, validateOptions, joiOptions), _helplink2.updateHelplink);
adminRoutes.delete('/admin/delete-helplink/:id', _auth.authMiddleware, _helplink2.deleteHelplink);

/* Team Member */
adminRoutes.get('/admin/team-member', _team.getAllTeamMember);
adminRoutes.post('/admin/team-member', _multer.upload.single("associate_img"), _team.createNewTeamMember);
adminRoutes.get('/admin/team-member/:_id', _team.getTeamMemberwithID);
adminRoutes.put('/admin/team-member/:_id', _team.updateTeamMember);
adminRoutes.delete('/admin/team-member/:_id', _team.deleteTeamMember);

/* Training */
adminRoutes.get("/admin/training", _auth.authMiddleware, _training.getTraining);
adminRoutes.post("/admin/training", _auth.authMiddleware, (0, _expressValidation.validate)(_training2.trainingValidationSchema, validateOptions, joiOptions), _training.postTraining);
adminRoutes.put('/admin/training', _auth.authMiddleware, _training.updateTraining);
adminRoutes.delete('/admin/training/:id', _auth.authMiddleware, _training.deleteTraining);

/* Skills */
adminRoutes.get("/admin/skills", _auth.authMiddleware, _tech.getTechnology);
adminRoutes.post("/admin/skills", _auth.authMiddleware, _tech.postTechnology);

exports.default = adminRoutes;