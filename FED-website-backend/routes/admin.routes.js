import { Router } from 'express';
import { joiConfig } from '../config';
import { validate } from 'express-validation';

import { upload } from "../multer.utils";

//Validation Schema
import { projectValidationSchema } from '../models/project.model';
import { blogValidationSchema } from '../models/blog.model';
import { helplinkValidationSchema } from '../models/helplink.model';
import { userValidationSchema, loginValidationSchema } from '../models/user.model';

//Controllers
import { authMiddleware } from '../middlewares/auth.middleware';
import { login, register } from '../controllers/admin/user.controller';
import { getProject, postProject, deleteProject, updateProject } from '../controllers/admin/project.controller';
import { getBlog, postBlog, updateBlog, deleteBlog } from '../controllers/blog/blog.controller';
import { getHelplink, postHelplink, updateHelplink, deleteHelplink } from '../controllers/blog/helplink.controller';
import { getAllTeamMember, createNewTeamMember, getTeamMemberwithID, updateTeamMember, deleteTeamMember } from '../controllers/admin/team.controller';
import { postTraining, getTraining, updateTraining, deleteTraining } from "../controllers/fed/training.controller";
import { trainingValidationSchema } from '../models/training.model';
import { getTechnology, postTechnology } from '../controllers/admin/tech.controller';
let { validateOptions, joiOptions } = joiConfig;

var adminRoutes = Router();

//Open API's
adminRoutes.post('/register', validate(userValidationSchema, validateOptions, joiOptions), register);
adminRoutes.post('/login', validate(loginValidationSchema, validateOptions, joiOptions), login);

/* Projects */
adminRoutes.get('/admin/projects', authMiddleware, getProject);
adminRoutes.post('/admin/projects', authMiddleware, validate(projectValidationSchema, validateOptions, joiOptions), postProject);
adminRoutes.put('/admin/projects', authMiddleware, updateProject);
adminRoutes.delete('/admin/projects/:id', authMiddleware, deleteProject);


/*Blog */
adminRoutes.get('/admin/get-blog/:_id', authMiddleware, getBlog);
adminRoutes.post('/admin/post-blog', authMiddleware, validate(blogValidationSchema, validateOptions, joiOptions), postBlog);
adminRoutes.put('/admin/edit-blog/:id', authMiddleware, validate(blogValidationSchema, validateOptions, joiOptions), updateBlog);
adminRoutes.delete('/admin/delete-blog/:id', authMiddleware, deleteBlog);


/*Helplink */
adminRoutes.get('/admin/get-helplink/:_limit', authMiddleware, getHelplink);
adminRoutes.post('/admin/post-helplink', authMiddleware, validate(helplinkValidationSchema, validateOptions, joiOptions), postHelplink);
adminRoutes.put('/admin/edit-helplink/:id', authMiddleware, validate(helplinkValidationSchema, validateOptions, joiOptions), updateHelplink);
adminRoutes.delete('/admin/delete-helplink/:id', authMiddleware, deleteHelplink);

/* Team Member */
adminRoutes.get('/admin/team-member', getAllTeamMember);
adminRoutes.post('/admin/team-member', upload.single("associate_img"), createNewTeamMember);
adminRoutes.get('/admin/team-member/:_id', getTeamMemberwithID);
adminRoutes.post('/admin/team-member/:_id', upload.single("associate_img"), updateTeamMember);
adminRoutes.delete('/admin/team-member/:_id', deleteTeamMember);

/* Training */  
adminRoutes.get("/admin/training", authMiddleware, getTraining);
adminRoutes.post("/admin/training", authMiddleware,validate(trainingValidationSchema, validateOptions, joiOptions), postTraining);
adminRoutes.put('/admin/training', authMiddleware, updateTraining);
adminRoutes.delete('/admin/training/:id', authMiddleware, deleteTraining);

/* Skills */
adminRoutes.get("/admin/skills", authMiddleware, getTechnology);
adminRoutes.post("/admin/skills", authMiddleware, postTechnology);


export default adminRoutes;
