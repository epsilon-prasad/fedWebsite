import express from "express";
import { upload } from "../multer.utils";
import { getProject } from "../controllers/admin/project.controller";
import { getTraining } from "../controllers/fed/training.controller";
import {
  getAllTeamMember,
  createNewTeamMember,
  getTeamMemberwithID,
  updateTeamMember,
  deleteTeamMember
} from "../controllers/admin/team.controller";


var fedRoutes = express.Router();

fedRoutes.get("/fed/project-list", getProject);
fedRoutes.get("/fed/team-member-list", getAllTeamMember);
fedRoutes.post("/fed/team-member", upload.single("associate_img"), createNewTeamMember);

fedRoutes.get("/fed/training", getTraining); 

export default fedRoutes;
