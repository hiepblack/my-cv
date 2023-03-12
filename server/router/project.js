import express from 'express';
import {addProject,getAllProject,deleteProject,updateProject} from "../controllers/projectControllers.js"
const projectRouter = express.Router();

projectRouter.post('/',addProject);
projectRouter.get('/',getAllProject);
projectRouter.delete('/:id',deleteProject);
projectRouter.put('/:id',updateProject);

export default projectRouter;
