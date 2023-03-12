import express from 'express';
import {addTestimonial,deleteTestimonial,getAllTestimonial,updateTestimonial} from "../controllers/testControllers.js"
const testimonialRouter = express.Router();

testimonialRouter.post('/',addTestimonial)
testimonialRouter.get('/',getAllTestimonial)
testimonialRouter.delete('/:id',deleteTestimonial)
testimonialRouter.put('/:id',updateTestimonial)

export default testimonialRouter;