import express from 'express';

import {AddNewSkill,getAllSkill,getOneSkill,updateSkill,deleteSkill} from "../controllers/skillControllers.js"

const skillRouter = express.Router();

skillRouter.post('/',AddNewSkill);
skillRouter.get('/',getAllSkill);
skillRouter.get('/:id',getOneSkill);
skillRouter.put('/:id',updateSkill);
skillRouter.delete('/:id',deleteSkill);

export default skillRouter;