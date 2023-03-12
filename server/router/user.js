import express from 'express';
import { getAllUser,addUser,deleteUser,getOneUser,updateUser } from '../controllers/userControllers.js';
const userrouter = express.Router();
// get all user
userrouter.get('/',getAllUser);
// add new user
userrouter.post('/',addUser);
// delete user
userrouter.delete('/:id',deleteUser);
// get one user
userrouter.get('/:id',getOneUser);
// update  user
userrouter.put("/:id",updateUser);
export default userrouter;